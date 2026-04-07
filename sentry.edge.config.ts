import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate:
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' ? 0.1 : 1.0,
  sendDefaultPii: false,
  enabled: true
});
