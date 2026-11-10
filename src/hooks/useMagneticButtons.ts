import { useEffect } from 'react';

/**
 * Hook to apply tactile magnetic pull physics to all `.magnetic-btn` elements
 * and proximity scaling to `#rotating-studio-seal`.
 */
export function useMagneticButtons() {
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let animFrame: number | null = null;
    let mouseX = -1;
    let mouseY = -1;
    let hasPointer = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasPointer = true;
      scheduleUpdate();
    };

    const updatePhysics = () => {
      animFrame = null;

      // 1. Magnetic pull on all buttons marked with .magnetic-btn
      const buttons = document.querySelectorAll<HTMLElement>('.magnetic-btn');
      buttons.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

        if (hasPointer && dist < 90) {
          const pull = (1 - dist / 90) * 0.32;
          const moveX = (mouseX - centerX) * pull;
          const moveY = (mouseY - centerY) * pull;
          el.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        } else {
          el.style.transform = '';
        }
      });

      // 2. Proximity pull on rotating seal
      const seal = document.getElementById('rotating-club-seal') || document.getElementById('rotating-studio-seal');
      if (seal) {
        if (!hasPointer) {
          seal.style.transform = '';
          return;
        }
        const rect = seal.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.hypot(mouseX - centerX, mouseY - centerY);

        if (dist < 200) {
          const factor = 1 - dist / 200;
          seal.style.transform = `scale(${1 + factor * 0.15})`;
        } else {
          seal.style.transform = '';
        }
      }

    };

    const scheduleUpdate = () => {
      if (animFrame === null) {
        animFrame = requestAnimationFrame(updatePhysics);
      }
    };

    const handlePointerLeave = () => {
      hasPointer = false;
      scheduleUpdate();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (animFrame !== null) cancelAnimationFrame(animFrame);
    };
  }, []);
}

