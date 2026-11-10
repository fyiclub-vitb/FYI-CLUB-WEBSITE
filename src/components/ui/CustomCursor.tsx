import React, { useEffect, useRef, useState } from 'react';
import { playHoverTick } from '../../lib/sound';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on fine pointers (desktop mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    let isClickingNow = false;

    const render = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      // Fluid spring follow for the outer ring
      ringX = lerp(ringX, mouseX, 0.2);
      ringY = lerp(ringY, mouseY, 0.2);
      if (ringRef.current) {
        const scaleStr = isClickingNow ? ' scale(0.85)' : '';
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)${scaleStr}`;
      }
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        setIsVisible(true);
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const handleMouseDown = () => {
      isClickingNow = true;
      setIsClicking(true);
      if (ringRef.current) {
        ringRef.current.classList.add('cursor-ring-active');
      }
    };

    const handleMouseUp = () => {
      isClickingNow = false;
      setIsClicking(false);
      if (ringRef.current) {
        ringRef.current.classList.remove('cursor-ring-active');
      }
    };

    let lastTarget: HTMLElement | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || !ringRef.current || !dotRef.current || !labelRef.current) return;

      const card = target.closest('[data-cursor="card"], [data-tilt]');
      if (card && card !== lastTarget) {
        lastTarget = card as HTMLElement;
        playHoverTick();
        ringRef.current.className = 'cursor-ring cursor-ring-card';
        labelRef.current.textContent = card.getAttribute('data-cursor-text') || 'EXPLORE ↗';
        labelRef.current.classList.remove('opacity-0');
        dotRef.current.style.opacity = '0';
        return;
      }

      const clickable = target.closest('a, button, input, select, textarea, [role="button"], .btn-elastic, .magnetic-btn');
      if (clickable && clickable !== lastTarget) {
        lastTarget = clickable as HTMLElement;
        playHoverTick();
        ringRef.current.className = 'cursor-ring cursor-ring-interactive';
        labelRef.current.textContent = '';
        labelRef.current.classList.add('opacity-0');
        dotRef.current.style.opacity = '0.4';
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
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  return (
    <div aria-hidden="true" className="cursor-follower-layer pointer-events-none select-none z-[10000]">
      {/* High-voltage Electric Cyan Center Core */}
      <div ref={dotRef} className="cursor-dot opacity-0" />

      {/* Primary Big Glowing Electric Blue/Cyan Outer Ring */}
      <div ref={ringRef} className="cursor-ring cursor-ring-default opacity-0">
        <span
          ref={labelRef}
          className="font-mono text-[10px] font-black tracking-wider uppercase text-primary transition-opacity opacity-0 px-2 text-center whitespace-nowrap"
        />
      </div>
    </div>
  );
};
