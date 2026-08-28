'use client';

import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { PiLinkLight } from 'react-icons/pi';
import { useActiveHash } from '@/hooks/useActiveHash';
import awsCertifiedSolutionsArchitectAssociateBadge from '@/app/images/certifications/aws-certified-solutions-architect-associate.webp';

interface CertificationItem {
  title: string;
  issuer: string;
  issued: string;
  expires: string;
  credentialUrl: string;
  badge: StaticImageData;
}

const certificationsData: CertificationItem[] = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services (AWS)',
    issued: 'Aug 2026',
    expires: 'Aug 2029',
    credentialUrl:
      'https://www.credly.com/badges/8273890b-08ad-4a4a-8633-6cb80b7cf031/public_url',
    badge: awsCertifiedSolutionsArchitectAssociateBadge
  }
];

export default function Certifications() {
  const { ref } = useActiveHash('Licenses & certifications');

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-3xl scroll-mt-28 sm:mb-40"
      id="licenses-certifications"
    >
      <motion.h2
        className="mb-10 text-center text-3xl font-medium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Licenses &amp; certifications
      </motion.h2>

      <div className="space-y-6">
        {certificationsData.map((certification, index) => (
          <motion.article
            key={certification.credentialUrl}
            className="rounded-xl bg-white/80 p-6 shadow-lg shadow-black/3 dark:bg-gray-950/75"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Image
                src={certification.badge}
                alt={`${certification.title} badge`}
                width={96}
                height={96}
                placeholder="blur"
                className="h-24 w-24 shrink-0 object-contain"
              />
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {certification.title}
                </h3>
                <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                  {certification.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Issued {certification.issued} · Expires{' '}
                  {certification.expires}
                </p>
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  View credential
                  <PiLinkLight aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
