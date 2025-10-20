'use client';

import Image from 'next/image';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useActiveHash} from '@/hooks/useActiveHash';
import {useNavigationContext} from '@/context/NavigationContext';
import tristantrommer from '@/public/images/tristantrommer.webp';
import {
  PiEnvelopeLight,
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiMediumLogoLight
} from 'react-icons/pi';
import {TypeAnimation} from 'react-type-animation';

export default function About() {
  const {ref} = useActiveHash('About');
  const {setActiveHash, setLastClicked} = useNavigationContext();

  return (
    <section
      ref={ref}
      className='mb-24 w-full max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      id='about'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'tween',
              duration: 0.2
            }}
          >
            <Image
              src={tristantrommer.src}
              alt='Tristan Trommer'
              width='96'
              height='96'
              priority={true}
              placeholder='blur'
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white dark:border-gray-950 border-opacity-75 shadow-lg shadow-black/[0.03]'
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        Hello, I&apos;m{' '}
        <span className='font-bold'>Tristan Trommer</span>.{' '}
        I&apos;m a{' '}
        <span className='font-bold'>Software Engineer</span> passionate about<br/>
        <TypeAnimation
          sequence={[
            'Agile Methodologies', 1000,
            'Amazon Web Services (AWS)', 1000,
            'Cloudflare', 1000,
            'Cloudflare Pages', 1000,
            'Cloudflare Workers', 1000,
            'Continuous Delivery (CD)', 1000,
            'Continuous Integration (CI)', 1000,
            'Docker', 1000,
            'Flask', 1000,
            'Framer Motion', 1000,
            'Functional Programming', 1000,
            'Git', 1000,
            'GitHub', 1000,
            'Gitlab', 1000,
            'Google Cloud Platform (GCP)', 1000,
            'Java', 1000,
            'JavaScript', 1000,
            'JSON', 1000,
            'Kubernetes', 1000,
            'MySQL', 1000,
            'Next.js', 1000,
            'PostgreSQL', 1000,
            'Python', 1000,
            'React.js', 1000,
            'REST APIs', 1000,
            'Scala', 1000,
            'Serverless Computing', 1000,
            'Spring Framework', 1000,
            'Tailwind CSS', 1000,
            'TypeScript', 1000
          ]}
          wrapper='span'
          className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#66a6ff] to-[#89f7fe]'
          speed={50}
          repeat={Infinity}
          cursor={false}
        />.
      </motion.h1>

      <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 mb-10 sm:mb-0'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <Link
          href='#contact'
          className='px-7 py-3 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] flex items-center gap-2 rounded-full text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-50 cursor-pointer dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
          onClick={() => {
            setActiveHash('Contact');
            setLastClicked(Date.now());
          }}
        >
          Contact <PiEnvelopeLight/>
        </Link>
        <div className='flex items-center justify-center gap-2'>
          <a
            className='p-4 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] flex items-center gap-2 text-[1.35rem] rounded-full text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-50 cursor-pointer dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
            href='https://linkedin.com/in/tristantrommer'
            target='_blank'
            title='LinkedIn'
          >
            <PiLinkedinLogoLight/>
          </a>
          <a
            className='p-4 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] flex items-center gap-2 text-[1.35rem] rounded-full text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-50 cursor-pointer dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
            href='https://medium.com/@tristantrommer'
            target='_blank'
            title='Medium'
          >
            <PiMediumLogoLight/>
          </a>
          <a
            className='p-4 border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] flex items-center gap-2 text-[1.35rem] rounded-full text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-50 cursor-pointer dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
            href='https://github.com/tristantrommer'
            target='_blank'
            title='GitHub'
          >
            <PiGithubLogoLight/>
          </a>
        </div>
      </motion.div>

      <div className='flex items-center justify-center'>
        <div
          className='bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20'
        ></div>
      </div>

      <p className='mb-4'>
        As a Software Engineer passionate about building robust and scalable solutions, I thrive in dynamic teams where technology drives real-world impact. My experience spans from hands-on product development and cloud infrastructure to cross-team collaboration in agile environments. With a strong foundation in software engineering and a track record of rapidly acquiring new technologies, I consistently deliver high-quality, efficient code and innovative solutions.
      </p>
      <p>
        Eager to continuously grow and contribute, I believe in learning by doing, sharing insights, and championing best practices for the success of my team and organization.
      </p>
    </section>
  );
}
