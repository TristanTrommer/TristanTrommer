'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import eventassetsLogo from '@/public/images/experience/eventassets.webp';
import zalandoLogo from '@/public/images/experience/zalando.webp';
import vesselxLogo from '@/public/images/experience/vesselx.webp';
import { elapsedTimeString } from '@/helper/helper';

interface RoleItem {
  title: string;
  employmentType: string;
  locationType: 'On-site' | 'Hybrid' | 'Remote';
  bullets: string[];
  startDate: Date;
  endDate: Date | 'Present';
}

interface CompanyGroup {
  company: string;
  companyLogo: StaticImageData;
  location: string;
  roles: RoleItem[];
}

const companiesData: CompanyGroup[] = [
  {
    company: 'Zalando',
    companyLogo: zalandoLogo,
    location: 'Berlin, Berlin, Germany',
    roles: [
      {
        title: 'Software Engineer',
        employmentType: 'Full-time',
        locationType: 'Hybrid',
        startDate: new Date(Date.UTC(2025, 5)),
        endDate: 'Present',
        bullets: [
          'Authored comprehensive technical design documents and an infrastructure roadmap to migrate an 88,000-line core Scala/Cats Effect microservice to Kotlin and Spring Boot 4.x on JDK 25. Designed a zero-downtime Strangler Fig strategy leveraging traffic shadowing, feature-flagging, and automated "Double EXCEPT" SQL reconciliation for real-time data parity across 6 planned rollout waves.',
          "Achieved the team's highest delivery throughput (120 Jira tickets, 218 Story Points, ~165 merged PRs in 12 months), driving core platform roadmap features with high autonomy and zero production regressions.",
          'Designed and deployed a real-time event-driven consumer processing high-concurrency event streams to synchronize distributed platform databases, establishing a single source of truth and eliminating 100% (77 → 0) of data discrepancies.',
          'Spearheaded end-to-end modernization of legacy backend services from Java 8 to Java 21, updating Scala/SBT dependencies and enabling previously blocked features.',
          'Independently planned and executed the full migration of team orchestration pipelines to modern managed Apache Airflow (MWAA v3), handling IAM access policies, DAG refactoring, and legacy environment decommissioning.',
          'Redesigned platform exception workflows, reducing manual operational touches from 2.4 to 1.8 per issue, cutting support ticket volume by 26%, and reducing NMV loss by 4%.',
          'Designed and shipped an end-to-end task queue architecture across 9 PRs to automate complex merchant compliance processes.',
          'Conducted 100+ instructive code reviews per cycle, anchored onboarding for new hires, and organized a 6–7 hour AI Adoption Workshop covering MCP servers and RAG.'
        ]
      },
      {
        title: 'Junior Software Engineer',
        employmentType: 'Full-time',
        locationType: 'Hybrid',
        startDate: new Date(Date.UTC(2024, 6)),
        endDate: new Date(Date.UTC(2025, 4)),
        bullets: [
          'Transitioned from a Java background to production-grade Scala in under 3 months, becoming a primary maintainer for high-throughput partner-facing APIs.',
          'Engineered backend steering capabilities that expanded platform coverage to 96.5% of total GMV and ~80% of Connected Retail GMV.',
          'Authored critical features directly inside external team microservices in Scala, unblocking cross-department product rollouts under tight deadlines.',
          'Optimized execution efficiency across legacy data pipelines and microservices while reducing logging verbosity, directly lowering cloud resource usage.',
          'Modernized partner notification systems by integrating with centralized communication APIs, improving operational transparency and cutting support inquiries.'
        ]
      },
      {
        title: 'Junior Software Engineer',
        employmentType: 'Apprenticeship',
        locationType: 'Hybrid',
        startDate: new Date(Date.UTC(2021, 7)),
        endDate: new Date(Date.UTC(2024, 5)),
        bullets: [
          'Developed and maintained microservices, REST APIs, and internal tools in Java and Kotlin, adhering to strict code quality, testing, and version control standards.',
          'Refactored critical platform components and supported smooth migrations away from legacy services, reducing technical debt and enhancing system maintainability.',
          'Participated across the full SDLC in agile cross-functional teams, leveraging CI/CD workflows, automated testing, and active code reviews.'
        ]
      }
    ]
  },
  {
    company: 'EventAssets',
    companyLogo: eventassetsLogo,
    location: 'Berlin, Berlin, Germany',
    roles: [
      {
        title: 'Founder',
        employmentType: 'Self-employed',
        locationType: 'Remote',
        startDate: new Date(Date.UTC(2025, 9)),
        endDate: 'Present',
        bullets: [
          'Built and bootstrapped a high-performance event management/media platform from end-to-end — scaling to 50+ active events with zero infrastructure downtime while owning product design, architecture, localization, and payment flows.',
          'Architected a media engine using Cloudflare R2 and automated image optimization (dynamic edge resizing, WebP/AVIF transcoding), enabling sub-second guest photo uploads while cutting egress and bandwidth costs.',
          'Designed and executed a manual database sharding strategy on Cloudflare D1, scaling capacity from 10 GB to 500 GB to support millions of media metadata records at sub-50ms API response times globally.',
          'Deployed a full-stack serverless stack (Hono, Next.js, Cloudflare Workers, Stripe) fully localized across 5 languages, leveraging Cloudflare Queues for asynchronous background tasks.'
        ]
      }
    ]
  },
  {
    company: 'Vessel X',
    companyLogo: vesselxLogo,
    location: 'İzmir, İzmir, Türkiye',
    roles: [
      {
        title: 'Intern',
        employmentType: 'Internship',
        locationType: 'Hybrid',
        startDate: new Date(Date.UTC(2023, 5)),
        endDate: new Date(Date.UTC(2023, 7)),
        bullets: [
          'Engineered a serverless backend on GCP (Python, PostgreSQL) to process real-time telemetry and device communications for an autonomous marine vessel.',
          'Built low-latency data pipelines and REST endpoints capable of reliable data synchronization under unstable network conditions.'
        ]
      }
    ]
  }
];

function formatDate(date: Date): string {
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'short',
    timeZone: 'UTC'
  });
}

function RoleEntry({ role, isLast }: { role: RoleItem; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW = 1;
  const hasMore = role.bullets.length > PREVIEW;
  const visibleBullets = expanded
    ? role.bullets
    : role.bullets.slice(0, PREVIEW);

  const endLabel =
    role.endDate === 'Present' ? 'Present' : formatDate(role.endDate as Date);
  const dateStr = `${formatDate(role.startDate)} – ${endLabel} · ${elapsedTimeString(role.startDate, role.endDate)}`;

  return (
    <div className={`relative pl-6 ${!isLast ? 'pb-5' : ''}`}>
      {!isLast && (
        <div className="absolute top-3 bottom-0 left-[5px] w-px bg-gray-200 dark:bg-gray-700/50" />
      )}
      <div className="absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border-2 border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-950" />

      <p className="font-medium text-gray-900 dark:text-white">{role.title}</p>
      <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
        {role.employmentType} · {role.locationType}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{dateStr}</p>

      <ul className="mt-3 space-y-2">
        {visibleBullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-6 text-gray-600 dark:text-gray-300"
          >
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-400 dark:bg-gray-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-xs font-medium text-indigo-500 transition-colors hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {expanded
            ? 'Show less'
            : `Show ${role.bullets.length - PREVIEW} more bullet${role.bullets.length - PREVIEW > 1 ? 's' : ''}`}
        </button>
      )}
    </div>
  );
}

function CompanyCard({ group, index }: { group: CompanyGroup; index: number }) {
  const earliestStart = group.roles.reduce(
    (min, r) => (r.startDate < min ? r.startDate : min),
    group.roles[0].startDate
  );
  const hasActive = group.roles.some(r => r.endDate === 'Present');
  const latestEnd: Date | 'Present' = hasActive
    ? 'Present'
    : group.roles.reduce<Date>(
        (max, r) => ((r.endDate as Date) > max ? (r.endDate as Date) : max),
        group.roles[0].endDate as Date
      );

  const totalTenure = elapsedTimeString(earliestStart, latestEnd);

  return (
    <motion.div
      className="rounded-xl bg-white/80 p-6 shadow-lg shadow-black/3 dark:bg-gray-950/75"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    >
      <div className="mb-5 flex items-center gap-4">
        <Image
          src={group.companyLogo}
          alt={group.company}
          width={48}
          height={48}
          placeholder="blur"
          className="h-12 w-12 rounded-lg object-contain"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {group.company}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {totalTenure} · {group.location}
          </p>
        </div>
      </div>

      <div>
        {group.roles.map((role, i) => (
          <RoleEntry
            key={i}
            role={role}
            isLast={i === group.roles.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref } = useActiveHash('Experience');

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-3xl scroll-mt-28 sm:mb-40"
      id="experience"
    >
      <motion.h2
        className="mb-12 text-center text-3xl font-medium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {companiesData.map((group, i) => (
          <CompanyCard key={group.company} group={group} index={i} />
        ))}
      </div>
    </section>
  );
}
