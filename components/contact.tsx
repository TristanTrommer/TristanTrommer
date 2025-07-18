'use client';

import {useActiveHash} from '@/hooks/useActiveHash';
import React, {useState} from 'react';
import Turnstile from 'react-turnstile';
import {useThemeContext} from '@/context/ThemeContext';
import ContactButton from '@/components/contactButton';
import {email} from '@/actions/email';
import Link from 'next/link';

export default function Contact() {
  const {ref} = useActiveHash('Contact');
  const {theme} = useThemeContext();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <section
      ref={ref}
      className='mb-24 w-full max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='contact'
    >
      <h2 className='text-3xl font-medium mb-8 text-center'>Contact</h2>
      <p>
        Use the contact form or send me an email.
      </p>
      <p className='flex justify-center items-center gap-2'>
        <Link href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}>
          {`${encodedEmail[0]}@${encodedEmail[1]}`}
        </Link>
      </p>

      <form
        className='my-10 flex flex-col w-full sm:w-[45rem]'
        action={async (formData) => {
          const {error} = await email(formData);

          setSent(true);
          if (error) {
            setError(true);
          }
        }}
      >
        <input
          className='w-full sm:w-[45rem] text-gray-900 dark:text-gray-50 outline-none h-14 mb-4 px-4 shadow-lg shadow-black/[0.03] rounded-lg bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75'
          name='email'
          type='email'
          required
          placeholder='Email'
        />
        <input
          className='w-full sm:w-[45rem] text-gray-900 dark:text-gray-50 outline-none h-14 mb-4 px-4 shadow-lg shadow-black/[0.03] rounded-lg bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75'
          name='name'
          type='text'
          required
          placeholder='Name'
        />
        <textarea
          className='w-full sm:w-[45rem] text-gray-900 dark:text-gray-50 outline-none h-52 mb-4 shadow-lg shadow-black/[0.03] rounded-lg p-4 bg-white bg-opacity-80 dark:bg-gray-950 dark:bg-opacity-75'
          name='message'
          placeholder='Message'
          required
        />
        <div className='flex justify-center items-center'>
          <Turnstile className='mb-4 w-full' sitekey='0x4AAAAAAANVGCnM9-TR60XA' language='en' size='flexible'
                     theme={theme}/>
        </div>
        <ContactButton sent={sent} error={error}/>
      </form>

      <p className='flex justify-center items-center gap-4 text-xs'>
        <Link href='/legal-notice'
              target='_blank'>
          Legal Notice
        </Link>
        <Link href='/privacy-policy'
              target='_blank'>
          Privacy Policy
        </Link>
      </p>
    </section>
  );
}
