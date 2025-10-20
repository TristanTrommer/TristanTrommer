'use client';

import Link from 'next/link';
import clsx from 'clsx';
import {useNavigationContext} from '@/context/NavigationContext';
import {useThemeContext} from '@/context/ThemeContext';
import {PiMoonLight, PiSunLight} from 'react-icons/pi';

const navigationData: Array<{
  name: string,
  hash: string
}> = [
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Blog',
    hash: '#blog'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
];

export default function Header() {
  const {activeHash, setActiveHash, setLastClicked} = useNavigationContext();
  const {theme, setTheme} = useThemeContext();

  return (
    <header className='z-[99] relative'>
      <div
        className='flex justify-center items-center fixed top-0 left-1/2 translate-x-[-50%] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-auto sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'>
        <nav className='flex'>
          <ul
            className='flex w-[22rem] flex-wrap items-center justify-center text-gray-500 sm:w-[initial] py-1 sm:py-2 mx-1 sm:mx-2 sm:flex-nowrap gap-2 sm:gap-6'>
            {navigationData.map((hash) => (
              <li
                className='flex items-center justify-center relative'
                key={hash.hash}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center py-1 px-2 sm:py-2 sm:px-4 hover:text-gray-900 transition dark:hover:text-gray-50',
                    {
                      'text-gray-900 dark:text-gray-50':
                        activeHash === hash.name
                    }
                  )}
                  href={hash.hash}
                  onClick={() => {
                    setActiveHash(hash.name);
                    setLastClicked(Date.now());
                  }}
                >
                  {hash.name}

                  {hash.name === activeHash && (
                    <span
                      className='bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800'
                    ></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        className='fixed text-gray-500 hover:text-gray-900 transition dark:hover:text-gray-50 flex items-center justify-center bottom-4 right-4 sm:top-6 sm:right-6 w-fit h-fit rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 cursor-pointer'
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
          } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
          }
        }}
        title={theme === 'light' ? 'Dark' : 'Light'}
      >
        <div className='m-[12px] sm:m-[19px]'>
          {theme === 'light' ? <PiMoonLight/> : <PiSunLight/>}
        </div>
      </button>
    </header>
  );
}
