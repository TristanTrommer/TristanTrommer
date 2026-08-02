import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

const STATIC_CACHE = 'public, max-age=86400, stale-while-revalidate=86400';
const cc = [{ key: 'Cache-Control', value: STATIC_CACHE }];

const nextConfig: NextConfig = {
  experimental: {
    useTypeScriptCli: true
  },
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts'
  },
  async headers() {
    return [
      { source: '/', headers: cc },
      { source: '/legal-notice', headers: cc },
      { source: '/privacy-policy', headers: cc }
    ];
  }
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true
    }
  },
  silent: !process.env.CI
});
