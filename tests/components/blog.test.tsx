import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import type { IRSS, IRSSItem } from '@/actions/rssJson';

const { rssJson } = vi.hoisted(() => ({ rssJson: vi.fn() }));

vi.mock('@/actions/rssJson', () => ({ rssJson }));

import Blog from '@/components/blog';
import NavigationContextProvider from '@/context/NavigationContext';

const words = (count: number) =>
  Array.from({ length: count }, (_, i) => `w${i + 1}`).join(' ');

const post = (item: Partial<IRSSItem>): IRSSItem => ({
  id: 'https://medium.com/p/1',
  title: 'Living Without Transactions on Cloudflare D1',
  description: '',
  link: 'https://medium.com/@tristantrommer/living-without-transactions?source=rss',
  author: 'Tristan Trommer',
  published: Date.UTC(2026, 9, 14, 12),
  created: Date.UTC(2026, 9, 14, 12),
  categories: ['cloudflare-d1', 'sqlite'],
  content: '<p>Text</p>',
  enclosures: [],
  ...item
});

const feed = (items: IRSSItem[]): IRSS => ({
  title: 'Stories by Tristan Trommer on Medium',
  description: '',
  link: 'https://medium.com/@tristantrommer?source=rss',
  image: '',
  categories: [],
  items
});

const renderBlog = () =>
  render(
    <NavigationContextProvider>
      <Blog />
    </NavigationContextProvider>
  );

describe('Blog', () => {
  it('lists a post with its date and categories, linked without tracking', async () => {
    rssJson.mockResolvedValue(feed([post({})]));
    renderBlog();

    const title = await screen.findByRole('link', {
      name: 'Living Without Transactions on Cloudflare D1'
    });
    expect(title).toHaveAttribute(
      'href',
      'https://medium.com/@tristantrommer/living-without-transactions'
    );
    expect(screen.getByText('Oct 14, 2026')).toBeInTheDocument();
    expect(screen.getByText('cloudflare-d1')).toBeInTheDocument();
    expect(screen.getByText('sqlite')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Show all/ })).toHaveAttribute(
      'href',
      'https://medium.com/@tristantrommer'
    );
  });

  it('shows the first 30 words of a post, block by block', async () => {
    rssJson.mockResolvedValue(
      feed([
        post({
          content: `<figure><figcaption>Caption.</figcaption></figure><p>${words(40)}</p>`
        })
      ])
    );
    renderBlog();

    expect(
      await screen.findByText(`Caption. ${words(29)}...`)
    ).toBeInTheDocument();
  });

  it('says so when the feed could not be loaded', async () => {
    rssJson.mockResolvedValue(null);
    renderBlog();

    expect(
      await screen.findByText('Blog could not be loaded.')
    ).toBeInTheDocument();
  });

  it('says so when there are no posts', async () => {
    rssJson.mockResolvedValue(feed([]));
    renderBlog();

    expect(
      await screen.findByText('There are no posts available.')
    ).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Show all/ })).toBeNull();
  });
});
