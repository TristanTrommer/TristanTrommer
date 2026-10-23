import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

const { email } = vi.hoisted(() => ({ email: vi.fn() }));

vi.mock('@/actions/email', () => ({ email }));

// The widget loads Cloudflare's script; what reaches the form is its token.
vi.mock('react-turnstile', () => ({
  default: () => (
    <input type="hidden" name="cf-turnstile-response" value="token" readOnly />
  )
}));

import Contact from '@/components/contact';
import NavigationContextProvider from '@/context/NavigationContext';

const fillAndSend = async () => {
  const user = userEvent.setup();
  render(
    <NavigationContextProvider>
      <Contact />
    </NavigationContextProvider>
  );

  await user.type(screen.getByPlaceholderText('Email'), 'ada@studio.online');
  await user.type(screen.getByPlaceholderText('Name'), 'Ada');
  await user.type(screen.getByPlaceholderText('Message'), 'Hello');
  await user.click(screen.getByRole('button', { name: 'Send' }));
};

describe('Contact', () => {
  it('sends the form with the Turnstile token', async () => {
    email.mockResolvedValue({ error: false });

    await fillAndSend();

    expect(await screen.findByRole('button', { name: 'Sent' })).toBeDisabled();
    expect(email).toHaveBeenCalledOnce();
    expect(Object.fromEntries(email.mock.calls[0][0])).toEqual({
      email: 'ada@studio.online',
      name: 'Ada',
      message: 'Hello',
      'cf-turnstile-response': 'token'
    });
  });

  it('shows an error the sender cannot send again past', async () => {
    email.mockResolvedValue({ error: true });

    await fillAndSend();

    expect(await screen.findByRole('button', { name: 'Error' })).toBeDisabled();
  });

  it('offers the address for an email instead', () => {
    render(
      <NavigationContextProvider>
        <Contact />
      </NavigationContextProvider>
    );

    expect(
      screen.getByRole('link', { name: 'hi@tristantrommer.com' })
    ).toHaveAttribute('href', 'mailto:hi@tristantrommer.com');
  });
});
