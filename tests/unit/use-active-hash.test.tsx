import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import NavigationContextProvider, {
  useNavigationContext
} from '@/context/NavigationContext';
import { useActiveHash } from '@/hooks/useActiveHash';
import { intersect } from '../helpers/intersection-observer';

function Section({ name }: { name: string }) {
  const { ref } = useActiveHash(name);
  return <section ref={ref} aria-label={name} />;
}

function Header() {
  const { activeHash, setLastClicked } = useNavigationContext();
  return (
    <>
      <output>{activeHash}</output>
      <button onClick={() => setLastClicked(Date.now())}>Link</button>
    </>
  );
}

const renderPage = () =>
  render(
    <NavigationContextProvider>
      <Header />
      <Section name="Blog" />
    </NavigationContextProvider>
  );

afterEach(() => {
  vi.useRealTimers();
});

describe('useActiveHash', () => {
  it('starts on About', () => {
    renderPage();

    expect(screen.getByRole('status')).toHaveTextContent('About');
  });

  it('makes the section scrolled into view the active one', () => {
    renderPage();

    intersect(screen.getByRole('region', { name: 'Blog' }));

    expect(screen.getByRole('status')).toHaveTextContent('Blog');
  });

  it('ignores the sections passed in the second after a header link is clicked', () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    renderPage();
    const section = screen.getByRole('region', { name: 'Blog' });

    fireEvent.click(screen.getByRole('button', { name: 'Link' }));
    vi.advanceTimersByTime(1000);
    intersect(section);
    expect(screen.getByRole('status')).toHaveTextContent('About');

    vi.advanceTimersByTime(1);
    intersect(section);
    expect(screen.getByRole('status')).toHaveTextContent('Blog');
  });

  it('needs the provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});

    expect(() => render(<Section name="Blog" />)).toThrow(
      'useNavigationContext must be used within an NavigationContextProvider'
    );
  });
});
