import { useEffect, useRef } from 'react';
import { useNavigationContext } from '@/context/NavigationContext';

export function useActiveHash(activeHash: string) {
  const ref = useRef<HTMLElement | null>(null);
  const { setActiveHash, lastClickedRef } = useNavigationContext();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          Date.now() - lastClickedRef.current > 1000
        ) {
          setActiveHash(activeHash);
        }
      },
      {
        threshold: 0.2
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
    // lastClickedRef is a stable ref object — reading .current inside the callback
    // always gets the latest value without adding it as a dependency.
  }, [activeHash, setActiveHash, lastClickedRef]);

  return {
    ref
  };
}
