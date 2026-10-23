import { beforeEach, describe, expect, it, vi } from 'vitest';
import cloudflareLoader from '@/imageLoader';

beforeEach(() => {
  vi.stubEnv('NODE_ENV', 'production');
  vi.stubEnv('NEXT_PUBLIC_ENVIRONMENT', 'production');
});

describe('cloudflareLoader', () => {
  it('resizes through Cloudflare Images in production', () => {
    expect(
      cloudflareLoader({ src: '/images/a.webp', width: 640, quality: 75 })
    ).toBe('/cdn-cgi/image/width=640,quality=75/images/a.webp');
  });

  it('leaves out a quality that is not given', () => {
    expect(cloudflareLoader({ src: 'images/a.webp', width: 640 })).toBe(
      '/cdn-cgi/image/width=640/images/a.webp'
    );
  });

  it.each([
    ['on preview', 'NEXT_PUBLIC_ENVIRONMENT', 'preview'],
    ['in development', 'NODE_ENV', 'development']
  ])('serves the original %s', (_, name, value) => {
    vi.stubEnv(name, value);

    expect(cloudflareLoader({ src: '/images/a.webp', width: 640 })).toBe(
      '/images/a.webp'
    );
  });
});
