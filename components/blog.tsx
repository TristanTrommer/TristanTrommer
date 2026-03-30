'use client';

import { useActiveHash } from '@/hooks/useActiveHash';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { IRSS, rssJson } from '@/actions/rssJson';
import { PiMediumLogoLight } from 'react-icons/pi';

export default function Blog() {
  const { ref } = useActiveHash('Blog');

  const [data, setData] = useState<IRSS | object>({});

  useEffect(() => {
    async function fetchData() {
      const json = await rssJson();
      setData(json);
    }

    fetchData();
  }, []);

  return (
    <section
      ref={ref}
      className="mb-24 w-full max-w-180 scroll-mt-28 leading-8 sm:mb-40"
      id="blog"
    >
      <motion.h2
        className="mb-8 text-center text-3xl font-medium"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Blog
      </motion.h2>
      {(!data || !('items' in data) || data.items.length === 0) && (
        <p className="text-center">There are no posts available.</p>
      )}
      {data &&
        'items' in data &&
        data.items.length !== 0 &&
        data.items.map((item, index) => (
          <motion.article
            key={index}
            className="bg-opacity-80 dark:bg-opacity-75 mb-8 rounded-lg bg-white px-8 py-6 shadow-lg shadow-black/3 dark:border-black/40 dark:bg-gray-950"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
          >
            <div className="mb-4 flex items-center justify-between text-sm">
              <div className="flex flex-wrap gap-1 text-xs sm:gap-2">
                {'categories' in item &&
                  item.categories.length !== 0 &&
                  item.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="inline-flex rounded-full bg-gray-50 px-2 py-1 dark:bg-gray-900"
                    >
                      {category}
                    </span>
                  ))}
              </div>
              <span className="text-right">
                {isNaN(item.published)
                  ? 'Unknown date'
                  : new Date(item.published).toLocaleDateString('en', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
              </span>
            </div>
            <h3 className="mb-4 text-xl font-medium">
              <a
                href={item.link.split('?')[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </h3>
            <p className="mb-4">
              {item.content
                ? item.content
                    .replace(/<[^>]*>/g, '')
                    .trim()
                    .split(/\s+/)
                    .slice(0, 30)
                    .join(' ') + '...'
                : 'No content available.'}
            </p>
            <div className="flex items-center justify-end">
              <a
                href={item.link.split('?')[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:underline"
              >
                Read more
                <PiMediumLogoLight />
              </a>
            </div>
          </motion.article>
        ))}
      {data && 'link' in data && 'items' in data && data.items.length !== 0 && (
        <div className="flex items-center justify-center">
          <a
            href={data.link.split('?')[0]}
            target="_blank"
            className="inline-flex items-center gap-2 hover:underline"
          >
            Show all
            <PiMediumLogoLight />
          </a>
        </div>
      )}
    </section>
  );
}
