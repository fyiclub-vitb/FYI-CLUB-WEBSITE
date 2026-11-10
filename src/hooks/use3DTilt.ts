import { useEffect } from 'react';

/**
 * Two26-style 3D perspective tilt hook.
 * Attaches to any element with the `data-tilt` attribute on fine pointer (desktop mouse).
 * Tilts realistically towards the mouse and adds dynamic specular highlight.
 */
export function use3DTilt() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cleanups = new Map<HTMLElement, () => void>();
    const attachCard = (card: HTMLElement) => {
      if (cleanups.has(card)) return;

      let isHovered = false;
      let rafId: number | null = null;

      const handleMouseEnter = () => {
        isHovered = true;
        card.style.transition = 'transform 0.15s ease-out, box-shadow 0.2s ease-out';
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxTilt = parseFloat(card.getAttribute('data-tilt-max') || '7');

        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          rafId = null;
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        });
      };

      const handleMouseLeave = () => {
        isHovered = false;
        if (rafId !== null) cancelAnimationFrame(rafId);
        rafId = null;
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.set(card, () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        if (rafId !== null) cancelAnimationFrame(rafId);
        card.style.transform = '';
        card.style.transition = '';
      });
    };

    const attachCardsWithin = (root: ParentNode) => {
      if (root instanceof HTMLElement && root.matches('[data-tilt]')) {
        attachCard(root);
      }
      root.querySelectorAll<HTMLElement>('[data-tilt]').forEach(attachCard);
    };

    const detachCardsWithin = (root: Node) => {
      if (!(root instanceof HTMLElement)) return;
      const cards = [
        ...(root.matches('[data-tilt]') ? [root] : []),
        ...root.querySelectorAll<HTMLElement>('[data-tilt]'),
      ];
      cards.forEach((card) => {
        cleanups.get(card)?.();
        cleanups.delete(card);
      });
    };

    // Route transitions replace card nodes after this hook mounts, so watch for additions/removals.
    attachCardsWithin(document);
    const domObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        record.removedNodes.forEach(detachCardsWithin);
        record.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) attachCardsWithin(node);
        });
      });
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      domObserver.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      cleanups.clear();
    };
  }, []);
}

