import type { Metadata } from 'next';
import React from 'react';
import { ZarazConsentModalTrigger } from '@/components/Consent/ZarazConsentModalTrigger';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Tristan Trommer uses cookies and how you can manage your consent.',
  robots: {
    index: false
  }
};

type CookieData = {
  name: string;
  purpose: string;
  expiry: string;
};

const hostname = process.env.NEXT_PUBLIC_URL
  ? new URL(process.env.NEXT_PUBLIC_URL).hostname
  : 'tristantrommer.com';

const necessaryCookies: CookieData[] = [
  {
    name: 'cf_consent',
    purpose:
      'Stores the user\u2019s cookie consent state for the current domain.',
    expiry: '6 months'
  },
  {
    name: 'cf_clearance',
    purpose:
      'Set by Cloudflare to confirm that you have passed a browser security check. This allows the site to load correctly without asking you to verify again.',
    expiry: '6 months'
  }
];

const statisticsCookies: CookieData[] = [
  {
    name: 'cfz_zaraz-analytics',
    purpose:
      'Used to send data to Cloudflare Zaraz Monitoring about the visitor\u2019s device and behavior.',
    expiry: '6 months'
  },
  {
    name: 'cfz_google-analytics_v4',
    purpose:
      'Used to send data to Google Analytics about the visitor\u2019s device and behavior. Tracks the visitor across devices and marketing channels.',
    expiry: '6 months'
  },
  {
    name: 'cfzs_google-analytics_v4',
    purpose:
      'Used to send data to Google Analytics about the visitor\u2019s device and behavior. Tracks the visitor across devices and marketing channels.',
    expiry: 'Session'
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const preferencesCookies: CookieData[] = [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const marketingCookies: CookieData[] = [];

function CookieTable({ cookies }: { cookies: CookieData[] }) {
  if (cookies.length === 0) return null;

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="py-2 pr-4 text-left font-semibold">Name</th>
            <th className="py-2 pr-4 text-left font-semibold">Provider</th>
            <th className="min-w-[200px] py-2 pr-4 text-left font-semibold">
              Purpose
            </th>
            <th className="py-2 pr-4 text-left font-semibold">Expiry</th>
            <th className="py-2 text-left font-semibold">Type</th>
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 dark:border-gray-800"
            >
              <td className="py-2 pr-4 font-medium">{cookie.name}</td>
              <td className="py-2 pr-4">{hostname}</td>
              <td className="py-2 pr-4 whitespace-normal">{cookie.purpose}</td>
              <td className="py-2 pr-4">{cookie.expiry}</td>
              <td className="py-2">HTTP Cookie</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col items-center px-4">
      <section
        className="mt-24 mb-24 w-full max-w-180 scroll-mt-28 leading-8 sm:mb-40"
        id="cookie-policy"
      >
        <h1 className="mb-8 text-center text-4xl font-medium">Cookie Policy</h1>

        <p className="mb-4">
          We are committed to being transparent about how we use cookies on this
          website. The responsible use of cookies is particularly important to
          us. Cookies are small text files that allow us to ensure the site
          functions correctly, analyze how our visitors interact with the site,
          and provide a consistent experience. We always comply with applicable
          laws when using cookies &mdash; cookies that are strictly necessary
          for the operation of this site can be stored on your device without
          additional consent. For all other types of cookies, we will always ask
          for your permission first.
        </p>

        <p className="mb-6">
          Click the button below to review and update your cookie consent
          preferences.
        </p>

        <ZarazConsentModalTrigger className="bg-opacity-80 dark:bg-opacity-75 mb-8 cursor-pointer rounded-lg bg-white px-4 py-2 text-sm shadow-lg shadow-black/3 transition dark:bg-gray-950">
          Update Cookie Preferences
        </ZarazConsentModalTrigger>

        <h2 className="mb-4 text-3xl font-medium">Necessary</h2>
        <p className="mb-2">
          Necessary cookies help make a website usable by enabling basic
          functions like page navigation and access to secure areas of the
          website. The website cannot function properly without these cookies.
        </p>
        <CookieTable cookies={necessaryCookies} />

        <h2 className="mt-8 mb-4 text-3xl font-medium">Statistics</h2>
        <p className="mb-2">
          Statistic cookies help us understand how visitors interact with the
          website by collecting and reporting information anonymously.
        </p>
        <CookieTable cookies={statisticsCookies} />

        {/* ## Preferences */}
        {/* Preference cookies enable the website to remember choices you make, such as your preferred language or the region that you are in. */}
        {/* <CookieTable cookies={preferencesCookies} /> */}

        {/* ## Marketing */}
        {/* Marketing cookies are used to track visitors across websites to display ads that are relevant and engaging for the individual user. */}
        {/* <CookieTable cookies={marketingCookies} /> */}
      </section>
    </main>
  );
}
