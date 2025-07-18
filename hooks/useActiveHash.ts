import {useEffect, useRef} from 'react';
import {useNavigationContext} from '@/context/NavigationContext';

export function useActiveHash(activeHash: string) {
  const ref = useRef<HTMLElement | null>(null);
  const {setActiveHash, lastClicked} = useNavigationContext();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && Date.now() - lastClicked > 1000) {
          setActiveHash(activeHash);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [activeHash, lastClicked, setActiveHash]);

  return {
    ref,
  };
}
