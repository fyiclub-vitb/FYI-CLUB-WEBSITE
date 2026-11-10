import React, { useState, useEffect, useRef } from 'react';
import { playHoverTick } from '../../lib/sound';

const GLYPHS = '01#*$%&_+=/<>[]^~!?@';

interface TextScrambleProps {
  text: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  className?: string;
  triggerOnHover?: boolean;
  triggerOnView?: boolean;
  playSound?: boolean;
}

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  as: Component = 'span',
  className = '',
  triggerOnHover = true,
  triggerOnView = false,
  playSound = false,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimated = useRef(false); // Keep hover and view triggers from restarting the same one-time effect.

  const startScramble = () => {
    if (isScrambling || hasAnimated.current) return;
    hasAnimated.current = true;
    setIsScrambling(true);

    if (playSound) {
      try {
        playHoverTick();
      } catch {
        // Audio policy fallback
      }
    }

    const length = text.length;
    let iteration = 0;
    const maxIterations = Math.max(length * 2, 14);

    const step = () => {
      iteration++;
      const resolvedCount = Math.floor((iteration / maxIterations) * length);

      let scrambled = '';
      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          scrambled += ' ';
        } else if (i < resolvedCount) {
          scrambled += text[i];
        } else {
          scrambled += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(scrambled);

      if (iteration < maxIterations) {
        // Spread the glyph changes over short intervals to create the decode effect.
        frameRef.current = requestAnimationFrame(() => {
          setTimeout(step, 18);
        });
      } else {
        setDisplayText(text);
        setIsScrambling(false);
      }
    };

    step();
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (!triggerOnView || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startScramble();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [triggerOnView]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return React.createElement(
    Component,
    {
      ref: elementRef,
      className: `transition-colors ${className}`,
      onMouseEnter: triggerOnHover ? startScramble : undefined,
    },
    displayText
  );
};

