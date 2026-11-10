import { useEffect } from 'react';

/**
 * Two26-style scroll-driven reveal hook.
 * Resiliently observes elements with `.reveal-on-scroll` across route changes
 * and ensures elements are always revealed when in viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealVisible = () => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll');
      elements.forEach((el) => {
        el.classList.add('is-revealed');
      });
    };

    revealVisible();

    const domObserver = new MutationObserver(() => {
      revealVisible();
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      domObserver.disconnect();
    };
  }, []);
}
