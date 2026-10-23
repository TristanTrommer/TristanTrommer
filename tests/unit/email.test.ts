import { beforeEach, describe, expect, it, vi } from 'vitest';

const { send } = vi.hoisted(() => ({ send: vi.fn() }));

vi.mock('@opennextjs/cloudflare', () => ({
  getCloudflareContext: () => ({ env: { SEND_EMAIL: { send } } })
}));

import { email } from '@/actions/email';

const VALID = {
  email: 'ada@studio.online',
  name: 'Ada',
  message: 'Hello',
  'cf-turnstile-response': 'token'
};

const form = (fields: Record<string, string>) => {
  const data = new FormData();
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  return data;
};

const turnstile = (success: boolean) =>
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => Response.json({ success, 'error-codes': [] }))
  );

beforeEach(() => {
  vi.stubEnv('TURNSTILE_SECRET', 'secret');
  vi.stubEnv('EMAIL_DOMAIN', 'tristantrommer.com');
  send.mockResolvedValue(undefined);
});

describe('email', () => {
  it('verifies the Turnstile token with the secret', async () => {
    turnstile(true);

    await email(form(VALID));

    expect(fetch).toHaveBeenCalledWith(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      expect.objectContaining({
        method: 'POST',
        body: 'secret=secret&response=token'
      })
    );
  });

  it('sends the message to me and a confirmation to the sender', async () => {
    turnstile(true);

    expect(await email(form(VALID))).toEqual({ error: false });

    const from = {
      name: 'Tristan Trommer',
      email: 'noreply@tristantrommer.com'
    };
    const replyTo = { name: 'Tristan Trommer', email: 'hi@tristantrommer.com' };
    expect(send).toHaveBeenCalledTimes(2);
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'hi@tristantrommer.com',
        from,
        replyTo,
        subject: 'Ada sent a message via contact form!',
        text: 'Name: Ada\nEmail: ada@studio.online\nMessage: Hello'
      })
    );
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: 'ada@studio.online',
        from,
        replyTo,
        subject: 'Thanks for your message, Ada!'
      })
    );
  });

  it.each([
    ['without an email', { email: '' }],
    ['with a malformed email', { email: 'ada@studio' }],
    ['without a name', { name: '' }],
    ['without a message', { message: '' }],
    ['without a Turnstile token', { 'cf-turnstile-response': '' }]
  ])(
    'rejects a form %s before asking Turnstile',
    async (_, fields: Record<string, string>) => {
      turnstile(true);

      expect(await email(form({ ...VALID, ...fields }))).toEqual({
        error: true
      });
      expect(fetch).not.toHaveBeenCalled();
      expect(send).not.toHaveBeenCalled();
    }
  );

  it('sends nothing when Turnstile rejects the token', async () => {
    turnstile(false);

    expect(await email(form(VALID))).toEqual({ error: true });
    expect(send).not.toHaveBeenCalled();
  });

  it('puts what the sender typed into the HTML as text', async () => {
    turnstile(true);

    await email(
      form({
        ...VALID,
        name: '<a href="https://example.com">Ada</a>',
        message: "<b>Hi</b> & 'bye'"
      })
    );

    const [mine, confirmation] = send.mock.calls.map(([message]) => message);
    expect(mine.html).toBe(
      'Name: &#60;a href=&#34;https://example.com&#34;&#62;Ada&#60;/a&#62;' +
        '<br/>Email: ada@studio.online' +
        '<br/>Message: &#60;b&#62;Hi&#60;/b&#62; &#38; &#39;bye&#39;'
    );
    expect(confirmation.html).not.toContain('<a');
    expect(mine.text).toContain('Message: <b>Hi</b>');
  });

  it('reports a failed send', async () => {
    turnstile(true);
    send.mockRejectedValue(new Error('quota exceeded'));
    vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(await email(form(VALID))).toEqual({ error: true });
  });
});
