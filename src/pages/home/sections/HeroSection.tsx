import React, { useState, useEffect } from 'react';
import { CLUB_META } from '../../../data/clubData';

export const HeroSection: React.FC = () => {
  const [bhopalTime, setBhopalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST
      const str = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      });
      setBhopalTime(str);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-16 overflow-hidden">
      {/* Rotating Circular Seal (Top Right on desktop, non-colliding) */}
      <div
        className="hidden md:flex absolute right-4 md:right-8 top-6 select-none opacity-85 hover:opacity-100 cursor-pointer z-10 transition-transform duration-300 hover:scale-110"
        id="rotating-club-seal"
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
          <svg className="w-full h-full animate-spin-slow text-primary" viewBox="0 0 100 100">
            <path
              d="M 50, 50 m -39, 0 a 39,39 0 1,1 78,0 a 39,39 0 1,1 -78,0"
              fill="none"
              id="heroSealPath"
            />
            <text className="font-mono text-[9px] uppercase font-bold tracking-[0.25em]" fill="currentColor">
              <textPath href="#heroSealPath">
                • FYI CLUB • VIT BHOPAL • 100% STUDENT RUN •
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="font-headline font-black text-xs md:text-sm uppercase tracking-tighter bg-brand-yellow border-2 border-primary px-1.5 py-0.5 rounded rotate-[-6deg]">
              RAW
            </span>
          </div>
        </div>
      </div>

      {/* Two26-Style Live Campus Telemetry Bar */}
      <div className="inline-flex max-w-full flex-wrap items-center gap-2 bg-white border-2 border-primary brutal-shadow-sm px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider mb-5">
        <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse flex-shrink-0" />
        <span className="whitespace-nowrap">VIT BHOPAL [IST] — {bhopalTime || '12:00:00 PM'}</span>
        <span className="opacity-40 hidden sm:inline">•</span>
        <span className="text-brand-orange font-black whitespace-nowrap">STATUS: LIVE IN PRODUCTION</span>
      </div>

      {/* Cheeky Zine Stickers & Pills Floating Above Headline */}
      <div className="flex flex-wrap items-center gap-2.5 mb-6 select-none">
        <div className="sticker-spring inline-flex items-center gap-1.5 bg-primary text-white px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider brutal-shadow-sm -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
          <span className="w-2 h-2 rounded-full bg-brand-cyan" />
          <span>ROGUE INNOVATION GUILD</span>
        </div>
        <div className="sticker-spring inline-flex items-center gap-1.5 bg-brand-yellow text-primary px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border-2 border-primary brutal-shadow-sm rotate-2 hover:rotate-0 transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-sm">wifi_off</span>
          <span>TESTED ON VOLATILE HOSTEL WI-FI</span>
        </div>
        <div className="sticker-spring inline-flex items-center gap-1.5 bg-brand-cyan text-primary px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border-2 border-primary brutal-shadow-sm -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-sm">bolt</span>
          <span>ACTUAL CODE &gt; PITCH DECKS</span>
        </div>
        <div className="sticker-spring inline-flex items-center gap-1.5 bg-white text-brand-orange px-3 py-1 rounded text-xs font-mono font-black uppercase tracking-wider border-2 border-primary brutal-shadow-sm rotate-1 hover:rotate-0 transition-transform cursor-pointer">
          <span>ZERO CORPORATE CRAP</span>
        </div>
      </div>

      {/* Monumental Headline */}
      <div className="max-w-5xl mb-6 relative">
        <h1 className="font-headline text-[48px] sm:text-[76px] md:text-[96px] lg:text-[112px] font-black uppercase leading-[0.88] tracking-tighter text-primary">
          <span className="kinetic-word">IDEAS</span>{' '}
          <span className="kinetic-word">DON'T</span>{' '}
          <span className="kinetic-word">SLEEP</span>{' '}
          <br className="hidden sm:inline" />
          <span className="kinetic-word">IN</span>{' '}
          <span className="relative inline-block text-white bg-primary px-2 sm:px-4 py-0 sm:py-1 brutal-shadow-orange rotate-[-1deg] my-1 group cursor-default">
            <span className="kinetic-word">DRAFT.</span>
          </span>
        </h1>

        {/* Handcrafted Marker Subtitle */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-primary">
            WE BUILD WHAT{' '}
            <span className="relative inline-block text-brand-orange underline decoration-wavy decoration-brand-yellow decoration-4 underline-offset-4">
              ACTUALLY
            </span>{' '}
            SHIPS.
          </span>
          <span className="font-hand text-2xl sm:text-3xl text-brand-orange font-bold -rotate-3 select-none">
            ~ {CLUB_META.heroSubtitle}
          </span>
        </div>

        {/* Student Narrative Subtext */}
        <p className="font-body text-base sm:text-xl text-primary font-normal max-w-2xl mt-5 leading-relaxed bg-[#FFFFFF]/70 p-4 border-l-4 border-primary brutal-shadow-sm">
          {CLUB_META.narrative}
        </p>
      </div>

      {/* Action Buttons & Hand-drawn Doodle Arrow */}
      <div className="flex flex-wrap items-center gap-4 pt-4 pb-10">
        <a
          href="#selected-works"
          className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary font-mono text-sm md:text-base font-black px-7 py-3.5 rounded border-2 border-primary brutal-shadow-lg uppercase tracking-wider group"
        >
          <span>EXPLORE OUR BUILDS ↗</span>
          <span className="material-symbols-outlined text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
            north_east
          </span>
        </a>
        <a
          href="#manifesto"
          className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-white text-primary hover:bg-brand-cyan font-mono text-sm md:text-base font-bold px-6 py-3.5 rounded border-2 border-primary brutal-shadow uppercase tracking-wider"
        >
          <span>THE MANIFESTO ↓</span>
        </a>
        <div className="hidden md:flex items-center gap-2 font-hand text-xl text-brand-muted pl-4 select-none">
          <svg className="w-8 h-8 text-primary rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span>[yes, we actually soldered this]</span>
        </div>
      </div>

      {/* 3D Tilt Metrics Cards with Corner Crosshairs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t-2 border-primary">
        {CLUB_META.metrics.map((m, idx) => (
          <div
            key={idx}
            data-tilt
            data-tilt-max="8"
            className={`${
              m.highlight === 'yellow' ? 'bg-brand-yellow' : 'bg-white'
            } border-2 border-primary brutal-shadow-sm p-4 relative group cursor-pointer`}
          >
            {/* Two26 Corner Crosshairs */}
            <div className="absolute top-1 left-1.5 font-mono text-[9px] text-primary/40 select-none group-hover:text-primary transition-colors">+</div>
            <div className="absolute bottom-1 right-1.5 font-mono text-[9px] text-primary/40 select-none group-hover:text-primary transition-colors">+</div>

            <div className="absolute top-1 right-2 font-mono text-[9px] uppercase text-brand-muted">
              {m.stamp}
            </div>
            <span
              className={`font-headline text-3xl md:text-4xl font-extrabold ${
                m.highlight === true ? 'text-brand-orange' : 'text-primary'
              } block leading-tight mt-1`}
            >
              {m.value}
            </span>
            <span
              className={`font-mono text-xs uppercase font-bold ${
                m.highlight === false && idx === 0 ? 'text-brand-orange' : 'text-primary'
              } tracking-wider`}
            >
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
