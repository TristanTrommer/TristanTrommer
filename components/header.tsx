'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { useNavigationContext } from '@/context/NavigationContext';
import { useThemeContext } from '@/context/ThemeContext';
import { PiMoonLight, PiSunLight } from 'react-icons/pi';

const navigationData: Array<{
  name: string;
  hash: string;
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
  const { activeHash, setActiveHash, setLastClicked } = useNavigationContext();
  const { theme, setTheme } = useThemeContext();

  return (
    <header className="relative z-[99]">
      <div className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 fixed top-0 left-1/2 flex w-full translate-x-[-50%] items-center justify-center rounded-none border border-white bg-white shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-auto sm:rounded-full dark:border-black/40 dark:bg-gray-950">
        <nav className="flex">
          <ul className="mx-1 flex w-[22rem] flex-wrap items-center justify-center gap-2 py-1 text-gray-500 sm:mx-2 sm:w-[initial] sm:flex-nowrap sm:gap-6 sm:py-2">
            {navigationData.map(hash => (
              <li
                className="relative flex items-center justify-center"
                key={hash.hash}
              >
                <Link
                  className={clsx(
                    'flex w-full items-center justify-center px-2 py-1 transition hover:text-gray-900 sm:px-4 sm:py-2 dark:hover:text-gray-50',
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
                    <span className="absolute inset-0 -z-10 rounded-full bg-gray-100 dark:bg-gray-800"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <button
        className="border-opacity-40 bg-opacity-80 dark:bg-opacity-75 fixed right-4 bottom-4 flex h-fit w-fit cursor-pointer items-center justify-center rounded-full border border-white bg-white text-gray-500 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] transition hover:text-gray-900 sm:top-6 sm:right-6 dark:border-black/40 dark:bg-gray-950 dark:hover:text-gray-50"
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
        <div className="m-[12px] sm:m-[19px]">
          {theme === 'light' ? <PiMoonLight /> : <PiSunLight />}
        </div>
      </button>
    </header>
  );
}
