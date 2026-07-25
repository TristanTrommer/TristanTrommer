import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import NavigationContextProvider from '@/context/NavigationContext';
import { ThemeProvider } from 'next-themes';
import { ZARAZ_PURPOSE_IDS } from '@/components/Consent/zaraz-consent';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: '%s | Tristan Trommer',
    default: 'Tristan Trommer'
  },
  description:
    "Hello, I'm Tristan Trommer. I'm a passionate Software Engineer.",
  generator: 'Tristan Trommer',
  applicationName: 'Tristan Trommer',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tristan Trommer', 'Tristan', 'Trommer'],
  authors: [{ name: 'Tristan Trommer', url: `${process.env.NEXT_PUBLIC_URL}` }],
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
    description:
      "Hello, I'm Tristan Trommer. I'm a passionate Software Engineer.",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    siteName: 'Tristan Trommer',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/opengraph-1200x600.webp?v=1`,
        width: 1200,
        height: 600
      },
      {
        url: `${process.env.NEXT_PUBLIC_URL}/opengraph-800x600.webp?v=1`,
        width: 800,
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
    shortcut: `${process.env.NEXT_PUBLIC_URL}/favicon.ico?v=1`,
    apple: `${process.env.NEXT_PUBLIC_URL}/apple-touch-icon.png?v=1`,
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon-96x96.png`
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: `${process.env.NEXT_PUBLIC_URL}/favicon.svg`
      }
    ]
  },
  manifest: `${process.env.NEXT_PUBLIC_URL}/site.webmanifest?v=1`
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light dark'
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="!scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}
      >
        <Script
          id="zaraz-consent"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function handleConsentUpdate() {
                  var consent = zaraz.consent.getAll();

                  var googleConsent = {
                    'ad_storage': consent['${ZARAZ_PURPOSE_IDS.marketing}'] ? 'granted' : 'denied',
                    'ad_user_data': consent['${ZARAZ_PURPOSE_IDS.marketing}'] ? 'granted' : 'denied',
                    'ad_personalization': consent['${ZARAZ_PURPOSE_IDS.marketing}'] ? 'granted' : 'denied',
                    'analytics_storage': consent['${ZARAZ_PURPOSE_IDS.statistics}'] ? 'granted' : 'denied',
                    'functionality_storage': consent['${ZARAZ_PURPOSE_IDS.preferences}'] ? 'granted' : 'denied',
                    'personalization_storage': consent['${ZARAZ_PURPOSE_IDS.preferences}'] ? 'granted' : 'denied',
                    'security_storage': 'granted'
                  };

                  zaraz.set("google_consent_update", googleConsent);
                }

                document.addEventListener("zarazConsentChoicesUpdated", handleConsentUpdate);
              })();
            `
          }}
        />
        <ThemeProvider attribute="class">
          <NavigationContextProvider>{children}</NavigationContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
