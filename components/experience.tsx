'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React from 'react';
import { motion } from 'motion/react';
import { PiLaptopLight } from 'react-icons/pi';
import Image, { StaticImageData } from 'next/image';
import eventassetsLogo from '@/public/images/experience/eventassets.webp';
import zalandoLogo from '@/public/images/experience/zalando.webp';
import vesselxLogo from '@/public/images/experience/vesselx.webp';
import { elapsedTimeString } from '@/helper/helper';

interface ExperienceItem {
  title: string;
  employmentType: string;
  company: string;
  companyLogo: StaticImageData;
  location: string;
  locationType: 'On-site' | 'Hybrid' | 'Remote';
  description: React.ReactElement;
  startDate: Date;
  endDate: Date | 'Present';
}

function ExperienceCard({
  item,
  arrowSide
}: {
  item: ExperienceItem;
  arrowSide?: 'left' | 'right';
}) {
  return (
    <div className="relative rounded-lg bg-white/80 px-8 py-6 shadow-lg shadow-black/3 dark:bg-gray-950/75">
      {arrowSide === 'right' && (
        <div className="absolute top-5 right-0 h-4 w-4 translate-x-1/2 rotate-45 bg-white dark:bg-gray-950" />
      )}
      {arrowSide === 'left' && (
        <div className="absolute top-5 left-0 h-4 w-4 -translate-x-1/2 rotate-45 bg-white dark:bg-gray-950" />
      )}
      <h3 className="text-xl font-medium">{item.title}</h3>
      <div className="mt-2 flex items-center">
        <Image
          src={item.companyLogo}
          alt={item.company}
          width="32"
          height="32"
          placeholder="blur"
          className="h-8 w-8"
        />
        <div className="ml-2">
          <p className="text-sm">
            {item.company} · {item.employmentType}
          </p>
          <p className="text-sm">
            {item.location} · {item.locationType}
          </p>
        </div>
      </div>
      <div className="mt-4 text-base leading-8">{item.description}</div>
    </div>
  );
}

const experiencesData: ExperienceItem[] = [
  {
    title: 'Founder',
    employmentType: 'Self-employed',
    company: 'EventAssets',
    companyLogo: eventassetsLogo,
    location: 'Berlin, Berlin, Germany',
    locationType: 'Remote',
    description: (
      <ul className="list-inside list-disc">
        <li>Building a cloud-native event management platform.</li>
      </ul>
    ),
    startDate: new Date(Date.UTC(2025, 9)),
    endDate: 'Present'
  },
  {
    title: 'Software Engineer',
    employmentType: 'Full-time',
    company: 'Zalando',
    companyLogo: zalandoLogo,
    location: 'Berlin, Berlin, Germany',
    locationType: 'Hybrid',
    description: (
      <ul className="list-inside list-disc">
        <li>
          Aim to drive greater technical ownership by initiating and leading
          high-impact projects, mentoring junior engineers, and promoting best
          practices to deliver scalable, reliable solutions that support
          Zalando&apos;s business goals.
        </li>
      </ul>
    ),
    startDate: new Date(Date.UTC(2025, 5)),
    endDate: 'Present'
  },
  {
    title: 'Junior Software Engineer',
    employmentType: 'Full-time',
    company: 'Zalando',
    companyLogo: zalandoLogo,
    location: 'Berlin, Berlin, Germany',
    locationType: 'Hybrid',
    description: (
      <ul className="list-inside list-disc">
        <li>
          Proactively expanded domain knowledge across multiple Zalando
          services, increasing team capacity and reducing reliance on senior
          guidance.
        </li>
        <li>
          Led and delivered key backend engineering projects in close
          collaboration with design and product teams, resulting in improved
          customer satisfaction and enhanced product reliability.
        </li>
        <li>
          Modernized critical platform components and supported the smooth
          migration away from legacy systems, reducing technical debt and
          increasing system maintainability.
        </li>
        <li>
          Championed adoption of modern platforms and practices, facilitating
          seamless migration away from legacy systems.
        </li>
        <li>
          Enhanced team effectiveness by actively participating in code reviews,
          sharing knowledge, and supporting continuous improvement.
        </li>
      </ul>
    ),
    startDate: new Date(Date.UTC(2024, 6)),
    endDate: new Date(Date.UTC(2025, 4))
  },
  {
    title: 'Junior Software Engineer',
    employmentType: 'Apprenticeship',
    company: 'Zalando',
    companyLogo: zalandoLogo,
    location: 'Berlin, Berlin, Germany',
    locationType: 'Hybrid',
    description: (
      <ul className="list-inside list-disc">
        <li>
          Developed and maintained backend features, APIs, and tools in close
          collaboration with senior engineers, following best practices in code
          quality, testing, and version control.
        </li>
        <li>
          Participated in the full software development lifecycle, including
          requirements gathering, implementation, testing, deployment, and
          support.
        </li>
        <li>
          Gained experience with agile methodologies, CI/CD workflows, and
          collaborative development environments.
        </li>
        <li>
          Enhanced problem-solving skills by tackling a variety of coding,
          debugging, and optimization tasks across multiple microservices and
          technology stacks.
        </li>
        <li>
          Built strong communication and teamwork capabilities by working with
          cross-functional teams, gathering feedback, and contributing to a
          collaborative engineering culture.
        </li>
      </ul>
    ),
    startDate: new Date(Date.UTC(2021, 7)),
    endDate: new Date(Date.UTC(2024, 5))
  },
  {
    title: 'Intern',
    employmentType: 'Internship',
    company: 'Vessel X',
    companyLogo: vesselxLogo,
    location: 'İzmir, İzmir, Turkey',
    locationType: 'Hybrid',
    description: (
      <ul className="list-inside list-disc">
        <li>
          Engineered a robust, serverless infrastructure using Google Cloud
          Platform and PostgreSQL in support of an autonomous water surface
          cleaning vessel project.
        </li>
        <li>
          Designed and implemented backend logic and database integrations in
          Python for real-time data processing and device communications.
        </li>
        <li>
          Collaborated closely with multidisciplinary teams, aligning
          infrastructure with project requirements and best practices in cloud
          computing.
        </li>
        <li>
          Conducted research and contributed to architectural decisions,
          ensuring high reliability and efficiency of deployed systems.
        </li>
        <li>
          Gained practical experience in cloud-native development, enhancing
          problem-solving abilities and technical communication skills.
        </li>
      </ul>
    ),
    startDate: new Date(Date.UTC(2023, 5)),
    endDate: new Date(Date.UTC(2023, 7))
  }
];

export default function Experience() {
  const { ref } = useActiveHash('Experience');

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-5xl scroll-mt-28 sm:mb-40"
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

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-5 w-px -translate-x-px bg-gray-200 sm:left-1/2 dark:bg-gray-200/20" />

        <div className="space-y-10">
          {experiencesData.map((item, index) => {
            const isEven = index % 2 === 0;
            const dateStr = `${item.startDate.toLocaleDateString('en', {
              year: 'numeric',
              month: 'short',
              timeZone: 'UTC'
            })} - ${
              item.endDate !== 'Present'
                ? item.endDate.toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'short',
                    timeZone: 'UTC'
                  })
                : item.endDate
            } · ${elapsedTimeString(item.startDate, item.endDate)}`;

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  ease: 'easeOut',
                  delay: index * 0.05
                }}
              >
                {/* Mobile layout */}
                <div className="flex items-start gap-4 sm:hidden">
                  <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-gray-500 dark:bg-gray-950">
                    <PiLaptopLight />
                  </div>
                  <div className="flex-1">
                    <ExperienceCard item={item} />
                    <p className="mt-2 text-sm text-gray-500">{dateStr}</p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden sm:grid sm:grid-cols-[1fr_3.5rem_1fr] sm:items-start">
                  {/* Left side */}
                  <div className="flex justify-end pr-8">
                    {isEven ? (
                      <ExperienceCard item={item} arrowSide="right" />
                    ) : (
                      <p className="pt-3 text-right text-sm text-gray-500">
                        {dateStr}
                      </p>
                    )}
                  </div>

                  {/* Center icon */}
                  <div className="z-10 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl text-gray-500 shadow-lg shadow-black/3 dark:bg-gray-950">
                      <PiLaptopLight />
                    </div>
                  </div>

                  {/* Right side */}
                  <div className="pl-8">
                    {!isEven ? (
                      <ExperienceCard item={item} arrowSide="left" />
                    ) : (
                      <p className="pt-3 text-sm text-gray-500">{dateStr}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
