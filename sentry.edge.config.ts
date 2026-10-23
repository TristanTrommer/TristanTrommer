import * as Sentry from '@sentry/nextjs';
import { sentryOptions } from '@/helper/sentry-options';

Sentry.init(sentryOptions);
