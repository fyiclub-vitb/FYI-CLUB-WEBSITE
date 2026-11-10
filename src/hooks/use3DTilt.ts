import { useEffect } from 'react';

/**
 * Two26-style 3D perspective tilt hook.
 * Attaches to any element with the `data-tilt` attribute on fine pointer (desktop mouse).
 * Tilts realistically towards the mouse and adds dynamic specular highlight.
 */
export function use3DTilt() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const cards = document.querySelectorAll<HTMLElement>('[data-tilt]');

    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      let isHovered = false;
      let rafId: number;

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

        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        });
      };

      const handleMouseLeave = () => {
        isHovered = false;
        cancelAnimationFrame(rafId);
        card.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      };

      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(rafId);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);
}

