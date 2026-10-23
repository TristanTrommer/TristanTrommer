import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from '@/components/header';
import NavigationContextProvider from '@/context/NavigationContext';

/*
  A section reports itself as active by the name of its header link
  (`useActiveHash('Blog')`), and the link jumps to the section's id. A name or
  an id that differs leaves the link dead or never highlighted.
*/
const COMPONENTS = path.resolve(import.meta.dirname, '../../components');

const sections = readdirSync(COMPONENTS)
  .filter(file => file.endsWith('.tsx'))
  .flatMap(file => {
    const text = readFileSync(path.join(COMPONENTS, file), 'utf8');
    const name = text.match(/useActiveHash\('([^']+)'\)/)?.[1];
    const id = text.match(/<section[\s\S]*?\sid="([^"]+)"/)?.[1];
    return name ? [{ file, name, href: `#${id}` }] : [];
  });

describe('Header', () => {
  it('links every section by the name it reports as active', () => {
    render(
      <NavigationContextProvider>
        <Header />
      </NavigationContextProvider>
    );

    const links = within(screen.getByRole('navigation'))
      .getAllByRole('link')
      .map(link => ({
        name: link.textContent,
        href: link.getAttribute('href')
      }));

    expect(sections.length).toBeGreaterThan(0);
    expect(links).toHaveLength(sections.length);
    for (const { name, href } of sections) {
      expect(links).toContainEqual({ name, href });
    }
  });
});
