import { act } from '@testing-library/react';

const observers = new Set<IntersectionObserverStub>();

/**
 * jsdom has no IntersectionObserver, which motion's `whileInView` and
 * `useActiveHash` need. Nothing scrolls into view until a test calls `intersect`.
 */
export class IntersectionObserverStub {
  readonly callback: IntersectionObserverCallback;
  readonly elements = new Set<Element>();

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    observers.add(this);
  }

  observe(element: Element) {
    this.elements.add(element);
  }

  unobserve(element: Element) {
    this.elements.delete(element);
  }

  disconnect() {
    this.elements.clear();
    observers.delete(this);
  }

  takeRecords() {
    return [];
  }
}

/** Scrolls `element` into view (or out of it) for every observer watching it. */
export function intersect(element: Element, isIntersecting = true) {
  act(() => {
    for (const observer of observers) {
      if (!observer.elements.has(element)) continue;
      observer.callback(
        [{ isIntersecting, target: element } as IntersectionObserverEntry],
        observer as unknown as IntersectionObserver
      );
    }
  });
}
