import type {Metadata, Viewport} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import NavigationContextProvider from '@/context/NavigationContext';
import ThemeContextProvider from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tristantrommer.com'),
  title: {
    template: '%s | Tristan Trommer',
    default: 'Tristan Trommer'
  },
  description: 'Hello, I\'m Tristan Trommer. I\'m a passionate Software Engineer.',
  generator: 'Tristan Trommer',
  applicationName: 'Tristan Trommer',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tristan Trommer', 'Tristan', 'Trommer'],
  authors: [{name: 'Tristan Trommer', url: 'https://tristantrommer.com'}],
  creator: 'Tristan Trommer',
  publisher: 'Tristan Trommer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: {
      template: '%s | Tristan Trommer',
      default: 'Tristan Trommer'
    },
    description: 'Hello, I\'m Tristan Trommer. I\'m a passionate Software Engineer.',
    url: 'https://tristantrommer.com',
    siteName: 'Tristan Trommer',
    images: [
      {
        url: 'https://tristantrommer.com/opengraph-800x600.png?v=1',
        width: 800,
        height: 600
      },
      {
        url: 'https://tristantrommer.com/opengraph-1200x600.png?v=1',
        width: 1200,
        height: 600
      }
    ],
    locale: 'en',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    shortcut: '/favicon.ico?v=1',
    apple: '/apple-touch-icon.png?v=1',
    other: [
      {
        rel: 'icon',
        sizes: '16x16',
        url: '/favicon-16x16.png?v=1'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        url: '/favicon-32x32.png?v=1'
      }
    ]
  },
  manifest: '/manifest.webmanifest?v=1'
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark'
};

export default function Layout({
                                 children
                               }: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='!scroll-smooth'>
    <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}>
    <ThemeContextProvider>
      <NavigationContextProvider>
        {children}
      </NavigationContextProvider>
    </ThemeContextProvider>
    </body>
    </html>
  );
}
