import React, { useState } from 'react';

interface KineticMarqueeRibbonProps {
  items?: string[];
  angle?: number;
  bg?: string;
  textColor?: string;
  className?: string;
}

// Copy used when a page does not provide its own ticker messages.
const DEFAULT_ITEMS = [
  'BUILT FOR DEPLOYMENTS',
  'WHILE CAMPUS SLEEPS WE COMPILE',
  'NO SLIDE DECKS ALLOWED',
  '100% STUDENT DRIVEN',
  'SOLDER SMOKE & BARE-METAL CODE',
  'TWO26 STUDIO KINETIC LAB',
];

export const KineticMarqueeRibbon: React.FC<KineticMarqueeRibbonProps> = ({
  items = DEFAULT_ITEMS,
  angle = -1.5,
  bg = 'bg-brand-yellow',
  textColor = 'text-primary',
  className = '',
}) => {
  const [speedUp, setSpeedUp] = useState(false);

  return (
    <div
      className={`w-full overflow-hidden py-4 my-8 select-none border-y-3 border-primary relative z-20 ${className}`}
      style={{
        transform: `rotate(${angle}deg) scale(1.02)`,
      }}
      onMouseEnter={() => setSpeedUp(true)}
      onMouseLeave={() => setSpeedUp(false)}
    >
      <div
        className={`${bg} ${textColor} py-2.5 border-y-2 border-primary brutal-shadow-sm flex items-center transition-all`}
      >
        {/* Hover changes the animation duration; repeated items keep the loop seamless. */}
        <div
          className="flex items-center gap-8 whitespace-nowrap font-headline font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 animate-marquee"
          style={{
            animationDuration: speedUp ? '12s' : '22s',
          }}
        >
          {Array(4)
            .fill(null)
            .map((_, loopIdx) => (
              <React.Fragment key={loopIdx}>
                {items.map((item, idx) => (
                  <span key={`${loopIdx}-${idx}`} className="flex items-center gap-6">
                    <span>{item}</span>
                    <span className="text-brand-orange text-base">★</span>
                  </span>
                ))}
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

