import React, { useEffect, useRef, useState } from 'react';

interface RollingCounterProps {
  value: number | string;
  prefix?: string;
  suffix?: string;
  padZero?: number;
  duration?: number;
  className?: string;
}

export const RollingCounter: React.FC<RollingCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  padZero = 0,
  duration = 1000,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // If it's a pure string (e.g. "OPEN" or "VIT"), display directly
    const numericTarget = parseFloat(String(value));
    if (isNaN(numericTarget)) {
      setDisplayValue(String(value));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;

            const startTime = performance.now();
            const startVal = 0;
            const endVal = numericTarget;
            const isFloat = String(value).includes('.');

            const update = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Ease out exponential
              const ease = 1 - Math.pow(1 - progress, 3);
              const current = startVal + (endVal - startVal) * ease;

              let formatted = isFloat ? current.toFixed(1) : Math.round(current).toString();
              if (padZero > 0) {
                formatted = formatted.padStart(padZero, '0');
              }
              setDisplayValue(formatted);

              if (progress < 1) {
                requestAnimationFrame(update);
              } else {
                let finalVal = isFloat ? endVal.toFixed(1) : Math.round(endVal).toString();
                if (padZero > 0) {
                  finalVal = finalVal.padStart(padZero, '0');
                }
                setDisplayValue(finalVal);
              }
            };

            requestAnimationFrame(update);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, padZero]);

  return (
    <span ref={containerRef} className={`font-mono inline-flex items-center ${className}`}>
      {prefix && <span className="opacity-70 mr-0.5">{prefix}</span>}
      <span className="tabular-nums font-black">{displayValue}</span>
      {suffix && <span className="opacity-80 ml-0.5">{suffix}</span>}
    </span>
  );
};

