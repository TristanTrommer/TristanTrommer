import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it, vi } from 'vitest';
import { rssJson } from '@/actions/rssJson';

const FEED = readFileSync(
  path.resolve(import.meta.dirname, '../fixtures/medium-feed.xml'),
  'utf8'
);

const respond = (body: string) =>
  vi.stubGlobal(
    'fetch',
    vi.fn(async () => new Response(body))
  );

describe('rssJson', () => {
  it('asks Medium for the feed at most once a day', async () => {
    respond(FEED);

    await rssJson();

    expect(fetch).toHaveBeenCalledWith(
      'https://medium.com/feed/@tristantrommer',
      { next: { revalidate: 86400 } }
    );
  });

  it('reads the channel', async () => {
    respond(FEED);

    const feed = await rssJson();

    expect(feed).toMatchObject({
      title: 'Stories by Tristan Trommer on Medium',
      link: 'https://medium.com/@tristantrommer?source=rss-b491f62e0c77------2',
      image:
        'https://cdn-images-1.medium.com/fit/c/150/150/1*5-U6VhgvKlc4x-5yFnZUvg.png'
    });
    expect(feed?.items).toHaveLength(2);
  });

  it('reads a post as Medium writes it', async () => {
    respond(FEED);

    const [post] = (await rssJson())!.items;

    expect(post).toMatchObject({
      id: 'https://medium.com/p/e260874eed96',
      title: 'Living Without Transactions on Cloudflare D1',
      link: 'https://medium.com/@tristantrommer/living-without-transactions-on-cloudflare-d1-e260874eed96?source=rss-b491f62e0c77------2',
      author: 'Tristan Trommer',
      categories: ['cloudflare-d1', 'sqlite'],
      published: Date.UTC(2026, 9, 14, 7, 36, 1),
      created: Date.UTC(2026, 9, 15, 9),
      content:
        '<figure><figcaption>Prisma’s $transaction() does not roll back on D1.</figcaption></figure><p>There is a comment at the top of a utility file.</p>'
    });
  });

  it('reads a single category, and the description when there is no content', async () => {
    respond(FEED);

    const [, post] = (await rssJson())!.items;

    expect(post).toMatchObject({
      categories: ['sharding'],
      published: Date.UTC(2025, 2, 3, 10),
      created: Date.UTC(2025, 2, 3, 10),
      content: '<p>Manual database sharding.</p>'
    });
  });

  it('returns null when Medium answers with something other than a feed', async () => {
    respond('<html><body>Too many requests</body></html>');

    expect(await rssJson()).toBeNull();
  });

  it('returns null when Medium cannot be reached', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => {
        throw new TypeError('fetch failed');
      })
    );

    expect(await rssJson()).toBeNull();
  });
});
