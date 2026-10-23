import { beforeEach, describe, expect, it, vi } from 'vitest';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';

beforeEach(() => {
  vi.stubEnv('NEXT_PUBLIC_URL', 'https://tristantrommer.com');
});

describe('robots.txt', () => {
  it('allows every crawler and points to the sitemap of this deployment', () => {
    expect(robots()).toEqual({
      rules: { userAgent: '*', allow: '/' },
      sitemap: 'https://tristantrommer.com/sitemap.xml'
    });
  });
});

describe('sitemap.xml', () => {
  it('lists the home page of this deployment', () => {
    expect(sitemap()).toEqual([
      expect.objectContaining({
        url: 'https://tristantrommer.com',
        priority: 1
      })
    ]);
  });
});
