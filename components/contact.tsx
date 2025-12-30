'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React, { useState } from 'react';
import Turnstile from 'react-turnstile';
import { useThemeContext } from '@/context/ThemeContext';
import ContactButton from '@/components/contactButton';
import { email } from '@/actions/email';
import Link from 'next/link';

export default function Contact() {
  const { ref } = useActiveHash('Contact');
  const { theme } = useThemeContext();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      id="contact"
    >
      <h2 className="mb-8 text-center text-3xl font-medium">Contact</h2>
      <p>Use the contact form or send me an email.</p>
      <p className="flex items-center justify-center gap-2">
        <Link href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}>
          {`${encodedEmail[0]}@${encodedEmail[1]}`}
        </Link>
      </p>

      <form
        className="my-10 flex w-full flex-col sm:w-[45rem]"
        action={async formData => {
          const { error } = await email(formData);

          setSent(true);
          if (error) {
            setError(true);
          }
        }}
      >
        <input
          className="bg-opacity-80 dark:bg-opacity-75 mb-4 h-14 w-full rounded-lg bg-white px-4 text-gray-900 shadow-lg shadow-black/[0.03] outline-none sm:w-[45rem] dark:bg-gray-950 dark:text-gray-50"
          name="email"
          type="email"
          required
          placeholder="Email"
        />
        <input
          className="bg-opacity-80 dark:bg-opacity-75 mb-4 h-14 w-full rounded-lg bg-white px-4 text-gray-900 shadow-lg shadow-black/[0.03] outline-none sm:w-[45rem] dark:bg-gray-950 dark:text-gray-50"
          name="name"
          type="text"
          required
          placeholder="Name"
        />
        <textarea
          className="bg-opacity-80 dark:bg-opacity-75 mb-4 h-52 w-full rounded-lg bg-white p-4 text-gray-900 shadow-lg shadow-black/[0.03] outline-none sm:w-[45rem] dark:bg-gray-950 dark:text-gray-50"
          name="message"
          placeholder="Message"
          required
        />
        <div className="flex items-center justify-center">
          <Turnstile
            className="mb-4 w-full"
            sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
            language="en"
            size="flexible"
            theme={theme}
          />
        </div>
        <ContactButton sent={sent} error={error} />
      </form>

      <p className="flex items-center justify-center gap-4 text-xs">
        <Link href="/legal-notice" target="_blank">
          Legal Notice
        </Link>
        <Link href="/privacy-policy" target="_blank">
          Privacy Policy
        </Link>
      </p>
    </section>
  );
}
