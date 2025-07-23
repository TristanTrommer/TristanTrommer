'use server';

import {AwsClient} from 'aws4fetch';

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

const aws = new AwsClient({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  region: process.env.AWS_REGION || ''
});

async function sendSES(params: {
  toAddresses: string[];
  subject: string;
  htmlMessage: string;
  textMessage: string;
}) {
  const response = await aws.fetch(`https://email.${process.env.AWS_REGION || ''}.amazonaws.com/v2/email/outbound-emails`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      Destination: {
        ToAddresses: params.toAddresses,
      },
      FromEmailAddress: 'Tristan Trommer <noreply@tristantrommer.com>',
      Content: {
        Simple: {
          Subject: {
            Data: params.subject,
          },
          Body: {
            Text: {
              Data: params.textMessage,
            },
            Html: {
              Data: params.htmlMessage,
            }
          }
        },
      },
    }),
  });

  const responseText = await response.json();

  if (response.status != 200 && response.status != 201) {
    throw new Error(response.status + " " + response.statusText + " " + responseText);
  }

  return response.status;
}

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
    await sendSES({
      toAddresses: ['hi@tristantrommer.com'],
      subject: `${name} sent a message via contact form!`,
      htmlMessage: `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`,
      textMessage: `Name: ${name} Email: ${email} Message: ${message}`
    });

    await sendSES({
      toAddresses: [email.toString()],
      subject: `Thanks for your message, ${name}!`,
      htmlMessage: `Thanks for your message, ${name}!<br/><br/>I will get back to you soon.`,
      textMessage: `Thanks for your message, ${name}! I will get back to you soon.`
    });

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