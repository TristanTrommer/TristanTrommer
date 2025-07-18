'use client';

import {useActiveHash} from '@/hooks/useActiveHash';
import React, {useEffect, useState} from 'react';
import {IRSS, rssJson} from '@/actions/rssJson';
import {PiMediumLogoLight} from 'react-icons/pi';

export default function Blog() {
  const {ref} = useActiveHash('Blog');

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
      className='mb-24 w-full max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28'
      id='blog'
    >
      <h2 className='text-3xl font-medium mb-8 text-center'>Blog</h2>
      {(!data || !('items' in data) || data.items.length === 0) && (
        <p className='text-center'>There are no posts available.</p>
      )}
      {data && 'items' in data && data.items.length !== 0 && data.items.map((item, index) => (
        <article key={index}
                 className='py-6 px-8 mb-8 rounded-lg bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
          <div className='flex justify-between items-center mb-4 text-sm'>
            <div className='flex flex-wrap text-xs gap-1 sm:gap-2'>
              {'categories' in item && item.categories.length !== 0 && item.categories.map((category, idx) => (
                <span key={idx}
                      className='inline-flex bg-gray-50 dark:bg-gray-900 rounded-full px-2 py-1'>{category}</span>
              ))}
            </div>
            <span className='text-right'>
        {isNaN(item.published)
          ? 'Unknown date'
          : new Date(item.published).toLocaleDateString('en', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
      </span>
          </div>
          <h3 className='font-medium text-xl mb-4'>
            <a href={item.link.split('?')[0]} target='_blank' rel='noopener noreferrer'>{item.title}</a>
          </h3>
          <p className='mb-4'>
            {item.content
              ? item.content.replace(/<[^>]*>/g, '').trim().split(/\s+/).slice(0, 30).join(' ') + '...'
              : 'No content available.'}
          </p>
          <div className='flex justify-end items-center'>
            <a href={item.link.split('?')[0]} target='_blank' rel='noopener noreferrer'
               className='inline-flex items-center text-sm gap-2 hover:underline'>
              Read more
              <PiMediumLogoLight/>
            </a>
          </div>
        </article>
      ))}
      {(data && 'link' in data && 'items' in data && data.items.length !== 0) && (
        <div className='flex justify-center items-center'>
          <a href={data.link.split('?')[0]} target='_blank'
             className='inline-flex items-center gap-2 hover:underline'>
            Show all
            <PiMediumLogoLight/>
          </a>
        </div>
      )}
    </section>
  );
}
