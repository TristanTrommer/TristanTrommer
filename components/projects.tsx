'use client';

import {useActiveHash} from '@/hooks/useActiveHash';
import React from 'react';
import Image, {StaticImageData} from 'next/image';
import tristantrommerImage from '@/public/images/projects/tristantrommer.webp';
import {PiGitBranchLight, PiLinkLight} from 'react-icons/pi';
import {elapsedTimeString} from '@/helper/helper';

export default function Projects() {
  const {ref} = useActiveHash('Projects');

  const projectsData: Array<{
    primary: boolean
    title: string,
    image: StaticImageData,
    git?: string,
    url?: string,
    description: React.ReactElement,
    startDate: Date
    endDate: Date | 'Present'
  }> = [
    {
      primary: true,
      title: 'Tristan Trommer',
      image: tristantrommerImage,
      git: 'https://github.com/tristantrommer/tristantrommer',
      url: 'https://tristantrommer.com',
      description:
        <>Personal website built using TypeScript, NextJS, Framer Motion and Tailwind CSS running on Cloudflare
          Pages.</>,
      startDate: new Date(2024, 0),
      endDate: new Date(2024, 0)
    },
    // {
    //   primary: false,
    //   title: 'Example',
    //   image: exampleImage,
    //   url: 'https://example.com',
    //   description:
    //     <>Example.</>,
    //   startDate: new Date(2001, 01),
    //   endDate: new Date(2002, 02)
    // }
    ];

  const Data = ({item}: {
    item: {
      primary: boolean
      title: string,
      image: StaticImageData,
      git?: string,
      url?: string,
      description: React.ReactElement,
      startDate: Date
      endDate: Date | 'Present'
    }
  }) => {
    return (
      <div className='py-6 px-8'>
        <h3 className='font-medium text-xl mb-2'>{item.title}</h3>
        <p className='text-sm mb-4'>
          {`${item.startDate.toLocaleDateString('en', {
            year: 'numeric',
            month: 'short'
          })} - ${item.endDate != 'Present' ? item.endDate.toLocaleDateString('en', {
            year: 'numeric',
            month: 'short'
          }) : item.endDate} · ${elapsedTimeString(item.startDate, item.endDate)}`}
        </p>
        <p>{item.description}</p>
        {(item.git || item.url) &&
            <div className='flex gap-2 mt-4 text-xl'>
              {item.git && <a href={item.git} title='Git' target='_blank'><PiGitBranchLight/></a>}
              {item.url && <a href={item.url} title='URL' target='_blank'><PiLinkLight/></a>}
            </div>
        }
      </div>
    );
  };

  return (
    <section
      ref={ref}
      className='mb-24 w-full max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28'
      id='projects'
    >
      <h2 className='text-3xl font-medium mb-8 text-center'>Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projectsData.filter(item => item.primary).map((item, index) => (
          <div key={index}
               className='rounded-lg bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
            <div>
              <Image
                src={item.image.src}
                alt={item.title}
                width='400'
                height='300'
                placeholder='blur'
                className='w-full rounded-t-lg'
              />
              <div>
                <Data item={item}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
        {projectsData.filter(item => !item.primary).map((item, index) => (
          <div key={index}
               className='relative max-w-xl mx-auto group rounded-lg bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
            <Image
              src={item.image.src}
              alt={item.title}
              width='400'
              height='300'
              placeholder='blur'
              className='w-full rounded-lg'
            />
            <div
              className='absolute inset-0 bg-black opacity-0 group-focus:opacity-60 group-hover:opacity-60 transition-opacity duration-300 rounded-md'></div>
            <div
              className='absolute inset-0 flex items-center justify-center opacity-0 focus:opacity-100 group-hover:opacity-100 transition-opacity duration-300 text-white'>
              <Data item={item}/>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
