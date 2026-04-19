'use server';

import { getCloudflareContext } from '@opennextjs/cloudflare';

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
  | 'internal-error';

interface TurnstileValidationResponse {
  success: boolean;
  hostname: string;
  'error-codes': TurnstileValidationErrorCode[];
  challenge_ts?: string;
  action?: string;
  cdata?: string;
}

export const email = async (formData: FormData) => {
  const email = formData.get('email');
  const name = formData.get('name');
  const message = formData.get('message');
  const turnstileToken = formData.get('cf-turnstile-response');

  if (
    !email ||
    typeof email !== 'string' ||
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ||
    !name ||
    typeof name !== 'string' ||
    !message ||
    typeof message !== 'string' ||
    !turnstileToken ||
    typeof turnstileToken !== 'string'
  ) {
    return {
      error: true
    };
  }

  const trunstileResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET || '')}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    }
  );

  const turnstileData =
    (await trunstileResponse.json()) as TurnstileValidationResponse;
  if (!turnstileData.success) {
    return {
      error: true
    };
  }

  const { env } = getCloudflareContext();
  const from = `noreply@${process.env.EMAIL_DOMAIN}`;

  try {
    await env.SEND_EMAIL.send({
      to: 'hi@tristantrommer.com',
      from,
      subject: `${name} sent a message via contact form!`,
      html: `Name: ${name}<br/>Email: ${email}<br/>Message: ${message}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    await env.SEND_EMAIL.send({
      to: email.toString(),
      from,
      subject: `Thanks for your message, ${name}!`,
      html: `Thanks for your message, ${name}!<br/><br/>I will get back to you soon.`,
      text: `Thanks for your message, ${name}!\n\nI will get back to you soon.`
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
