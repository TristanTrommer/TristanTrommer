import type {Metadata} from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal Notice',
  robots: {
    index: false,
    follow: false,
  }
}

export default function Page() {
  const encodedEmail = ['hi', 'tristantrommer.com'];

  return (
    <main className='flex flex-col items-center px-4'>
      <section
        className='mt-24 mb-24 w-full max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        id='about'
      >
        <h1 className='text-4xl font-medium mb-8 text-center'>Legal Notice</h1>
        <p>
          <h3 className='text-3xl font-medium mb-4'>Provider</h3>
          Tristan Trommer<br/>
          Emsdettener Str. 10, c/o Postflex #3424<br/>
          48268 Greven, North Rhine-Westphalia<br/>
          Germany<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Represented by</h3>
          Tristan Trommer<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Contact</h3>
          Email: <Link
          href={`mailto:${encodedEmail[0]}@${encodedEmail[1]}`}>{`${encodedEmail[0]}@${encodedEmail[1]}`}</Link><br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Person responsible for content according to § 18 Abs. 2 MStV</h3>
          Tristan Trommer<br/>
          Emsdettener Str. 10, c/o Postflex #3424<br/>
          Greven, North Rhine-Westphalia 48268<br/>
          Germany<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>EU dispute resolution</h3>
          The European Commission provides a platform for online dispute resolution (OS): <Link
          href='https://ec.europa.eu/consumers/odr' target='_blank'>https://ec.europa.eu/consumers/odr</Link><br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Disclaimer</h3>
          We are responsible for the content of our website in accordance with the provisions of general law. All
          content is created with due care and to the best of our knowledge. Insofar as we refer to third-party websites
          on our Internet pages by means of hyperlinks, we cannot assume any liability for the continued topicality,
          correctness and completeness of the linked content, as this content is outside our area of responsibility and
          we have no influence on its future design. Should you consider any content to be in breach of applicable law
          or inappropriate, please let us know. The legal information on this page as well as all questions and disputes
          in connection with the design of this website are subject to the laws of the Federal Republic of Germany.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Copyright notice</h3>
          The texts, images, photos, videos or graphics available on our website are generally subject to copyright
          protection. Any unauthorized use (especially copying, editing or distribution) of this copyright-protected
          content is therefore prohibited. If you intend to use this content or parts thereof, please contact us in
          advance using the details above. If we are not the owner of the required copyrighted rights of use ourselves,
          we will endeavor to arrange contact with the entitled party.<br/><br/>

          <h3 className='text-3xl font-medium mb-4'>Social media profiles</h3>
          This legal notice also applies to the following social media profiles:<br/>
          LinkedIn: <Link href='https://linkedin.com/in/tristantrommer'
                          target='_blank'>https://linkedin.com/in/tristantrommer</Link><br/>
          Medium: <Link href='https://medium.com/@tristantrommer'
                        target='_blank'>https://medium.com/@tristantrommer</Link><br/>
          GitHub: <Link href='https://github.com/tristantrommer'
                        target='_blank'>https://github.com/tristantrommer</Link>
        </p>
      </section>
    </main>
  )
}