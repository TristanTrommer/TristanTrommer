'use server';

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

export const email = async (formData: FormData) => {
  const emailApi = process.env.EMAIL_API || '';
  const emailApiKey = process.env.EMAIL_API_KEY || '';

  const email = formData.get('email');
  const name = formData.get('name');
  const message = formData.get('message');
  const turnstileToken = formData.get('cf-turnstile-response');

  if ((!email || typeof email !== 'string' || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))) || (!name || typeof name !== 'string') || (!message || typeof message !== 'string') || (!turnstileToken || typeof turnstileToken !== 'string')) {
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

  const recipientEmailResponse = await fetch(emailApi, {
    method: 'POST',
    body: JSON.stringify({
      'to': 'hi@tristantrommer.com',
      'from': 'Tristan Trommer <noreply@tristantrommer.com>',
      'subject': `${name} sent a message via contact form!`,
      'html': `Name: ${name}<br/><br/>Email: ${email}<br/><br/>Message: ${message}`,
      'text': `Name: ${name} Email: ${email} Message: ${message}`
    }),
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Basic ' + emailApiKey
    }
  });
  const senderEmailResponse = await fetch(emailApi, {
    method: 'POST',
    body: JSON.stringify({
      'to': email,
      'from': 'Tristan Trommer <noreply@tristantrommer.com>',
      'subject': `Thanks for your message, ${name}!`,
      'html': `Thanks for your message, ${name}!<br/><br/>I will get back to you soon.`,
      'text': `Thanks for your message, ${name}! I will get back to you soon.`
    }),
    headers: {
      'content-type': 'application/json',
      'Authorization': 'Basic ' + emailApiKey
    }
  });
  if (!recipientEmailResponse.ok || !senderEmailResponse.ok) {
    return {
      error: true
    };
  }

  return {
    error: false
  };
};