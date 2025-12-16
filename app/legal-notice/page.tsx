import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal Notice',
  robots: {
    index: false
  }
};

export default function Page() {
  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <main className="flex flex-col items-center px-4">
      <section
        className="mt-24 mb-24 w-full max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        id="about"
      >
        <h1 className="text-4xl font-medium mb-8 text-center">Legal Notice</h1>
        <p>
          <h3 className="text-3xl font-medium mb-4">
            Information pursuant to Section 5 DDG
          </h3>
          Tristan Trommer
          <br />
          Emsdettener Str. 10
          <br />
          c/o Postflex #3424
          <br />
          48268 Greven
          <br />
          Germany
          <br />
          <br />
          <h3 className="text-3xl font-medium mb-4">Represented by</h3>
          Tristan Trommer
          <br />
          <br />
          <h3 className="text-3xl font-medium mb-4">Contact</h3>
          Email:{' '}
          <Link
            href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}
          >{`${encodedEmail[0]}@${encodedEmail[1]}`}</Link>
          <br />
          <br />
          <h3 className="text-3xl font-medium mb-4">
            Responsible for the content in accordance with § 18 para. 2 MStV
          </h3>
          Tristan Trommer
          <br />
          Emsdettener Str. 10
          <br />
          c/o Postflex #3424
          <br />
          48268 Greven
          <br />
          Germany
          <br />
          <br />
          <h3 className="text-3xl font-medium mb-4">
            Consumer dispute resolution / Universal arbitration board
          </h3>
          We do not participate in dispute resolution proceedings before a
          consumer arbitration board and are not obliged to do so.
          <br />
          <br />
          <h3 className="text-3xl font-medium mb-4">Disclaimer</h3>
          <h3 className="text-2xl font-medium mb-4">Liability for content</h3>
          The content of our pages has been compiled with the utmost care.
          However, we cannot guarantee that the content is accurate, complete,
          or up to date. As a service provider, we are responsible for our own
          content on these pages in accordance with § 7 para. 1 DDG (German
          Telemedia Act) under general law. However, according to §§ 8 to 10
          DDG, we as a service provider are not obliged to monitor transmitted
          or stored third-party information or to investigate circumstances that
          indicate illegal activity. Obligations to remove or block the use of
          information in accordance with general laws remain unaffected by this.
          However, liability in this regard is only possible from the time we
          become aware of a specific legal violation. If we become aware of such
          legal violations, we will remove this content immediately.
          <br />
          <br />
          <h3 className="text-2xl font-medium mb-4">Liability for links</h3>
          Our website contains links to external third-party websites over whose
          content we have no influence. Therefore, we cannot accept any
          liability for this external content. The respective provider or
          operator of the linked pages is always responsible for their content.
          The linked pages were checked for possible legal violations at the
          time of linking. No illegal content was found at the time of linking.
          However, permanent monitoring of the content of the linked pages is
          not reasonable without concrete evidence of a violation of the law. If
          we become aware of any violations of the law, we will remove such
          links immediately.
          <br />
          <br />
          <h3 className="text-2xl font-medium mb-4">Copyright</h3>
          The content and works on these pages created by the site operators are
          subject to German copyright law. The reproduction, editing,
          distribution, and any kind of use outside the limits of copyright law
          require the written consent of the respective author or creator.
          Downloads and copies of this site are only permitted for private,
          non-commercial use. Insofar as the content on this site was not
          created by the operator, the copyrights of third parties are
          respected. In particular, third-party content is identified as such.
          Should you nevertheless become aware of a copyright infringement,
          please inform us accordingly. If we become aware of any infringements,
          we will remove such content immediately.
          <br />
          <br />
          <h3 className="text-2xl font-medium mb-4">Social media profiles</h3>
          This legal notice also applies to the following social media profiles:
          <br />
          LinkedIn:{' '}
          <Link href="https://linkedin.com/in/tristantrommer" target="_blank">
            https://linkedin.com/in/tristantrommer
          </Link>
          <br />
          Medium:{' '}
          <Link href="https://medium.com/@tristantrommer" target="_blank">
            https://medium.com/@tristantrommer
          </Link>
          <br />
          GitHub:{' '}
          <Link href="https://github.com/tristantrommer" target="_blank">
            https://github.com/tristantrommer
          </Link>
        </p>
      </section>
    </main>
  );
}
