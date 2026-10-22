import path from 'node:path';
import type { NextConfig } from 'next';
import { withSentryConfig } from '@sentry/nextjs/config';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

/*
  The server runs in a Worker, where `@sentry/nextjs` is its build for V8
  isolates (`workerd` in the package's exports). Next builds the server for
  Node and would bundle the Node SDK instead, almost half of the Worker's
  script, loaded on every cold start. The browser keeps its own build.
*/
function sentryBuild(file: string): string {
  const pkg = path.dirname(require.resolve('@sentry/nextjs/package.json'));
  // Turbopack reads an alias relative to the project.
  return `./${path.relative(__dirname, path.join(pkg, 'build/esm', file))}`;
}

const STATIC_CACHE = 'public, max-age=86400, stale-while-revalidate=86400';
const cc = [{ key: 'Cache-Control', value: STATIC_CACHE }];

const nextConfig: NextConfig = {
  turbopack: {
    resolveAlias: {
      '@sentry/nextjs': {
        browser: sentryBuild('index.client.js'),
        default: sentryBuild('edge/index.js')
      }
    }
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
