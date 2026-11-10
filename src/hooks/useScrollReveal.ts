import { useEffect } from 'react';

/**
 * Adds the reveal class to current and route-inserted `.reveal-on-scroll` elements.
 * Despite the name, it does not wait for viewport entry; it reveals every match immediately.
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
