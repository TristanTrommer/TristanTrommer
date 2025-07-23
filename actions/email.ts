'use server';

import {SendEmailCommand, SESClient} from '@aws-sdk/client-ses';

type TurnstileValidationErrorCode =
  /** The secret parameter was not passed. */
  | 'missing-input-secret'
  /** The secret parameter was invalid or did not exist. */
  | 'invalid-input-secret'
  /** The response parameter was not passed. */
  | 'missing-input-response'
  /** The response parameter is invalid or has expired. */
  | 'invalid-input-response'
  /** The request was rejected because it was malformed. */
  | 'bad-request'
  /** The response parameter has already been validated before. */
  | 'timeout-or-duplicate'
  /** An internal error happened while validating the response. The request can be retried. */
  | 'internal-error'

interface TurnstileValidationResponse {
  'success': boolean
  'hostname': string
  'error-codes': TurnstileValidationErrorCode[]
  'challenge_ts'?: string
  'action'?: string
  'cdata'?: string
}

const sesClient = new SESClient({
  region: process.env.AWS_REGION || '',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
});

export const email = async (formData: FormData) => {
  const email = formData.get('email');
  const name = formData.get('name');
  const message = formData.get('message');
  const turnstileToken = formData.get('cf-turnstile-response');

  if (
    (!email || typeof email !== 'string' || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) ||
    (!name || typeof name !== 'string') ||
    (!message || typeof message !== 'string') ||
    (!turnstileToken || typeof turnstileToken !== 'string')
  ) {
    return {
      error: true
    };
  }

  const trunstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET || '')}&response=${encodeURIComponent(turnstileToken)}`,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  });

  const turnstileData = await trunstileResponse.json() as TurnstileValidationResponse;
  if (!turnstileData.success) {
    return {
      error: true
    };
  }

  try {
    const recipientEmailParams = {
      Source: 'Tristan Trommer <noreply@tristantrommer.com>',
      Destination: {
        ToAddresses: ['hi@tristantrommer.com']
      },
      Message: {
        Subject: {
          Data: `${name} sent a message via contact form!`,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`,
            Charset: 'UTF-8'
          },
          Text: {
            Data: `Name: ${name} Email: ${email} Message: ${message}`,
            Charset: 'UTF-8'
          }
        }
      }
    };

    const senderEmailParams = {
      Source: 'Tristan Trommer <noreply@tristantrommer.com>',
      Destination: {
        ToAddresses: [email.toString()]
      },
      Message: {
        Subject: {
          Data: `Thanks for your message, ${name}!`,
          Charset: 'UTF-8'
        },
        Body: {
          Html: {
            Data: `Thanks for your message, ${name}!<br/><br/>I will get back to you soon.`,
            Charset: 'UTF-8'
          },
          Text: {
            Data: `Thanks for your message, ${name}! I will get back to you soon.`,
            Charset: 'UTF-8'
          }
        }
      }
    };

    await Promise.all([
      sesClient.send(new SendEmailCommand(recipientEmailParams)),
      sesClient.send(new SendEmailCommand(senderEmailParams))
    ]);

    return {
      error: false
    };

  } catch (error) {
    console.error('Error sending email:', error);

    return {
      error: true
    };
  }
};