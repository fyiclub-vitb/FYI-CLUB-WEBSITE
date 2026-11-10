import { useEffect } from 'react';

/**
 * Reveals current and route-inserted `.reveal-on-scroll` elements when they enter the viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selector = '.reveal-on-scroll';
    const supportsIntersectionObserver = 'IntersectionObserver' in window;
    const revealObserver = supportsIntersectionObserver
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              revealObserver?.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 })
      : null;

    const observeElements = (root: ParentNode) => {
      const elements = root.querySelectorAll<HTMLElement>(selector);
      elements.forEach((element) => {
        if (revealObserver) {
          revealObserver.observe(element);
        } else {
          element.classList.add('is-revealed');
        }
      });
    };

    const unobserveElements = (root: HTMLElement) => {
      if (root.matches(selector)) revealObserver?.unobserve(root);
      root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        revealObserver?.unobserve(element);
      });
    };

    observeElements(document);

    // Router navigation adds new page sections without remounting this hook.
    const domObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.removedNodes.forEach((node) => {
          if (node instanceof HTMLElement) unobserveElements(node);
        });
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(selector)) {
              if (revealObserver) revealObserver.observe(node);
              else node.classList.add('is-revealed');
            }
            observeElements(node);
          }
        });
      });
    });

    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      domObserver.disconnect();
      revealObserver?.disconnect();
    };
  }, []);
}
