'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';
import tristantrommerImage from '@/public/images/projects/tristantrommer.webp';
import eventassetsImage from '@/public/images/projects/eventassets.webp';
import { PiGitBranchLight, PiLinkLight } from 'react-icons/pi';
import { elapsedTimeString } from '@/helper/helper';

interface ProjectItem {
  primary: boolean;
  title: string;
  image: StaticImageData;
  git?: string;
  url?: string;
  description: React.ReactElement;
  startDate: Date;
  endDate: Date | 'Present';
}

function ProjectData({ item }: { item: ProjectItem }) {
  return (
    <div className="flex h-full flex-col px-8 py-6">
      <h3 className="mb-2 text-xl font-medium">{item.title}</h3>
      <p className="mb-4 text-sm">
        {`${item.startDate.toLocaleDateString('en', {
          year: 'numeric',
          month: 'short',
          timeZone: 'UTC'
        })} - ${
          item.endDate != 'Present'
            ? item.endDate.toLocaleDateString('en', {
                year: 'numeric',
                month: 'short',
                timeZone: 'UTC'
              })
            : item.endDate
        } · ${elapsedTimeString(item.startDate, item.endDate)}`}
      </p>
      <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
        {item.description}
      </p>
      {(item.git || item.url) && (
        <div className="mt-auto flex gap-2 pt-4 text-xl">
          {item.git && (
            <a href={item.git} title="Git" target="_blank">
              <PiGitBranchLight />
            </a>
          )}
          {item.url && (
            <a href={item.url} title="URL" target="_blank">
              <PiLinkLight />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const projectsData: ProjectItem[] = [
  {
    primary: true,
    title: 'Tristan Trommer',
    image: tristantrommerImage,
    git: 'https://github.com/tristantrommer/tristantrommer',
    url: 'https://tristantrommer.com',
    description: (
      <>
        A high-performance personal portfolio and engineering blog deployed
        globally at the edge on Cloudflare Workers. Engineered with TypeScript,
        Next.js, Framer Motion, and Tailwind CSS to achieve zero cold starts,
        fluid UI interactions, and sub-100ms page load times worldwide.
      </>
    ),
    startDate: new Date(Date.UTC(2024, 0)),
    endDate: new Date(Date.UTC(2024, 0))
  },
  {
    primary: true,
    title: 'EventAssets',
    image: eventassetsImage,
    url: 'https://eventassets.com',
    description: (
      <>
        A high-performance, fullstack serverless event media platform scaled to
        50+ live events across 5 languages. Built using Hono, Next.js, Stripe,
        and Cloudflare Workers, the platform features a custom Cloudflare R2
        media engine with dynamic edge image optimization and manual D1 database
        sharding (10 GB to 500 GB), delivering sub-50ms global API latency.
      </>
    ),
    startDate: new Date(Date.UTC(2025, 5)),
    endDate: 'Present'
  }
  // {
  //   primary: false,
  //   title: 'Example',
  //   image: exampleImage,
  //   url: 'https://example.com',
  //   description:
  //     <>Example.</>,
  //   startDate: new Date(Date.UTC(2001, 01)),
  //   endDate: new Date(Date.UTC(2002, 02))
  // }
];

export default function Projects() {
  const { ref } = useActiveHash('Projects');

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-3xl scroll-mt-28 sm:mb-40"
      id="projects"
    >
      <motion.h2
        className="mb-10 text-center text-3xl font-medium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData
          .filter(item => item.primary)
          .map((item, index) => (
            <motion.div
              key={index}
              className="bg-opacity-80 dark:bg-opacity-75 flex flex-col rounded-lg bg-white shadow-lg shadow-black/3 dark:border-black/40 dark:bg-gray-950"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
                delay: index * 0.1
              }}
            >
              <div className="flex flex-1 flex-col">
                <Image
                  src={item.image}
                  alt={item.title}
                  width="400"
                  height="300"
                  placeholder="blur"
                  className="w-full rounded-t-lg"
                />
                <div className="flex flex-1 flex-col">
                  <ProjectData item={item} />
                </div>
              </div>
            </motion.div>
          ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projectsData
          .filter(item => !item.primary)
          .map((item, index) => (
            <div
              key={index}
              className="group bg-opacity-80 dark:bg-opacity-75 relative mx-auto max-w-xl rounded-lg bg-white shadow-lg shadow-black/3 dark:border-black/40 dark:bg-gray-950"
            >
              <Image
                src={item.image}
                alt={item.title}
                width="400"
                height="300"
                placeholder="blur"
                className="w-full rounded-lg"
              />
              <div className="absolute inset-0 rounded-md bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60 group-focus:opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus:opacity-100">
                <ProjectData item={item} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
