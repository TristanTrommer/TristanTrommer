import * as Sentry from '@sentry/nextjs';
import { sentryOptions } from '@/helper/sentry-options';

Sentry.init({
  ...sentryOptions,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [Sentry.replayIntegration()]
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
