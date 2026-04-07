import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts'
  }
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  disableLogger: true,
  silent: !process.env.CI
});
