'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useActiveHash } from '@/hooks/useActiveHash';
import { useNavigationContext } from '@/context/NavigationContext';
import tristantrommer from '@/app/images/tristantrommer.webp';
import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiMediumLogoLight
} from 'react-icons/pi';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  const { ref } = useActiveHash('About');
  const { setActiveHash, setLastClicked } = useNavigationContext();

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-3xl scroll-mt-28 text-center sm:mb-40"
      id="about"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={tristantrommer}
              alt="Tristan Trommer"
              width="96"
              height="96"
              priority={true}
              placeholder="blur"
              className="border-opacity-75 h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-lg shadow-black/3 dark:border-gray-950"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mt-4 px-4 text-3xl font-bold sm:text-5xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        Tristan Trommer
      </motion.h1>

      <motion.p
        className="mt-3 mb-10 px-4 text-sm leading-7 text-gray-500 sm:text-base dark:text-gray-400"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.22 }}
      >
        Software Engineer @ Zalando • Distributed Systems, System Architecture
        &amp; High-Velocity Delivery •{' '}
        <TypeAnimation
          sequence={[
            'Agile Methodologies',
            1000,
            'Amazon Web Services (AWS)',
            1000,
            'Apache Airflow',
            1000,
            'Cats Effect',
            1000,
            'Cloudflare',
            1000,
            'Cloudflare Containers',
            1000,
            'Cloudflare D1',
            1000,
            'Cloudflare Email Service',
            1000,
            'Cloudflare Queues',
            1000,
            'Cloudflare R2',
            1000,
            'Cloudflare Workers',
            1000,
            'Code Refactoring',
            1000,
            'Continuous Delivery (CD)',
            1000,
            'Continuous Integration (CI)',
            1000,
            'Distributed Systems',
            1000,
            'Docker',
            1000,
            'Flask',
            1000,
            'Functional Programming',
            1000,
            'Git',
            1000,
            'GitHub',
            1000,
            'Gitlab',
            1000,
            'Google Cloud Platform (GCP)',
            1000,
            'Integration Testing',
            1000,
            'Java',
            1000,
            'Java Object Oriented Querying (jOOQ)',
            1000,
            'JavaScript',
            1000,
            'JSON',
            1000,
            'Kotlin',
            1000,
            'Kubernetes',
            1000,
            'Message Queue',
            1000,
            'MySQL',
            1000,
            'Next.js',
            1000,
            'OpenTelemetry',
            1000,
            'PostgreSQL',
            1000,
            'Product Management',
            1000,
            'Product Marketing',
            1000,
            'Python (Programming Language)',
            1000,
            'React.js',
            1000,
            'REST APIs',
            1000,
            'Scala',
            1000,
            'Serverless Computing',
            1000,
            'Spring Framework',
            1000,
            'System Architecture',
            1000,
            'System Migration',
            1000,
            'Tailwind CSS',
            1000,
            'TypeScript',
            1000,
            'Unit Testing',
            1000
          ]}
          wrapper="span"
          className="bg-linear-to-br from-[#66a6ff] to-[#89f7fe] bg-clip-text font-semibold text-transparent"
          speed={50}
          repeat={Infinity}
          cursor={false}
        />
      </motion.p>

      <motion.div
        className="mb-10 flex flex-col items-center justify-center gap-2 px-4 sm:mb-0 sm:flex-row"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        <Link
          href="#contact"
          className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white px-7 py-3 text-gray-500 shadow-lg shadow-black/3 transition hover:text-gray-900 dark:border-black/40 dark:bg-gray-950 dark:hover:text-gray-50"
          onClick={() => {
            setActiveHash('Contact');
            setLastClicked(Date.now());
          }}
        >
          Contact <PiEnvelopeLight />
        </Link>
        <div className="flex items-center justify-center gap-2">
          <a
            className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white p-4 text-[1.35rem] text-gray-500 shadow-lg shadow-black/3 transition hover:text-gray-900 dark:border-black/40 dark:bg-gray-950 dark:hover:text-gray-50"
            href="https://linkedin.com/in/tristantrommer"
            target="_blank"
            title="LinkedIn"
          >
            <PiLinkedinLogoLight />
          </a>
          <a
            className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white p-4 text-[1.35rem] text-gray-500 shadow-lg shadow-black/3 transition hover:text-gray-900 dark:border-black/40 dark:bg-gray-950 dark:hover:text-gray-50"
            href="https://medium.com/@tristantrommer"
            target="_blank"
            title="Medium"
          >
            <PiMediumLogoLight />
          </a>
          <a
            className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 flex cursor-pointer items-center gap-2 rounded-full border border-white bg-white p-4 text-[1.35rem] text-gray-500 shadow-lg shadow-black/3 transition hover:text-gray-900 dark:border-black/40 dark:bg-gray-950 dark:hover:text-gray-50"
            href="https://github.com/tristantrommer"
            target="_blank"
            title="GitHub"
          >
            <PiGithubLogoLight />
          </a>
        </div>
      </motion.div>

      <div className="flex items-center justify-center">
        <div className="dark:bg-opacity-20 my-24 hidden h-16 w-1 rounded-full bg-gray-200 sm:block"></div>
      </div>

      <motion.p
        className="mb-4 text-base leading-6 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        I am a Software Engineer specializing in distributed systems, backend
        architecture, and cloud-native engineering. I thrive in high-velocity,
        high-scale environments where performance, strict availability, and
        delivery speed directly drive business value.
      </motion.p>
      <motion.p
        className="mb-4 text-base leading-6 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
      >
        My engineering philosophy centers on extreme ownership, architectural
        pragmatism, and execution speed. Whether refactoring legacy
        microservices, designing real-time event streaming pipelines, planning
        zero-downtime framework migrations, or building full-stack serverless
        applications from scratch, I focus on shipping clean, resilient, and
        highly maintainable code.
      </motion.p>
      <motion.p
        className="text-base leading-6 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        I am particularly interested in system design trade-offs, developer
        experience, and modernizing complex infrastructures without interrupting
        live operations.
      </motion.p>
    </section>
  );
}
