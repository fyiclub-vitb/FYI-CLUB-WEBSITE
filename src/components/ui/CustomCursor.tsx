import React, { useEffect, useRef, useState } from 'react';
import { playHoverTick } from '../../lib/sound';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable bespoke custom cursor on fine pointers (desktop mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      ringX = lerp(ringX, mouseX, 0.22);
      ringY = lerp(ringY, mouseY, 0.22);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    let lastTarget: HTMLElement | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !ringRef.current || !dotRef.current || !labelRef.current) return;

      const card = target.closest('[data-cursor="card"]');
      if (card && card !== lastTarget) {
        lastTarget = card as HTMLElement;
        playHoverTick();
        ringRef.current.className = 'cursor-ring cursor-ring-card';
        labelRef.current.textContent = card.getAttribute('data-cursor-text') || 'EXPLORE ↗';
        labelRef.current.classList.remove('opacity-0');
        dotRef.current.style.opacity = '0';
        return;
      }

      const clickable = target.closest('a, button, input, select, textarea, [role="button"], .btn-elastic, [data-tilt]');
      if (clickable && clickable !== lastTarget) {
        lastTarget = clickable as HTMLElement;
        playHoverTick();
        ringRef.current.className = 'cursor-ring cursor-ring-interactive';
        labelRef.current.textContent = '';
        labelRef.current.classList.add('opacity-0');
        dotRef.current.style.opacity = '0';
        return;
      }

      if (!card && !clickable) {
        lastTarget = null;
        ringRef.current.className = 'cursor-ring cursor-ring-default';
        labelRef.current.textContent = '';
        labelRef.current.classList.add('opacity-0');
        dotRef.current.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div aria-hidden="true" className="cursor-follower-layer pointer-events-none select-none z-[10000]">
      <div ref={dotRef} className="cursor-dot opacity-0" />
      <div ref={ringRef} className="cursor-ring cursor-ring-default opacity-0">
        <span
          ref={labelRef}
          className="font-mono text-[10px] font-bold tracking-wider uppercase text-brand-yellow transition-opacity opacity-0 px-2 text-center whitespace-nowrap"
        />
      </div>
    </div>
  );
};
