import React from 'react';

// Large editorial brand panel used between the ticker and the manifesto.
export const BrandPoster: React.FC = () => {
  return (
    <section className="w-full bg-[#EBE7DC] py-16 md:py-24 border-b-2 border-primary relative overflow-hidden">
      {/* Tape Strips at Corners */}
      <div className="absolute -top-3 left-12 w-28 h-7 tape-strip -rotate-6 z-10 border border-primary/20 pointer-events-none" />
      <div className="absolute -top-3 right-16 w-32 h-7 tape-strip rotate-3 z-10 border border-primary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative reveal-on-scroll">
        <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest bg-white border-2 border-primary px-3 py-1 rounded mb-4 brutal-shadow-sm">
          <span>FYI INNOVATION METHOD • VIT BHOPAL</span>
        </div>

        <div className="flex flex-col items-center justify-center relative select-none">
          <h2 className="font-headline text-[54px] sm:text-[90px] md:text-[130px] lg:text-[150px] leading-[0.85] font-black uppercase tracking-tighter text-primary hover:text-brand-orange hover:scale-[1.02] transition-all duration-300 cursor-default">
            CREATE.
          </h2>

          {/* Overlapping sticker pill with spring hover */}
          <div className="relative z-10 -my-2 sm:-my-4 sticker-spring">
            <span className="bg-brand-yellow text-primary border-2 border-primary brutal-shadow font-mono text-xs sm:text-sm font-extrabold uppercase px-4 py-1 rotate-[-3deg] inline-block cursor-pointer">
              NOT ANOTHER FIGMA DEMO
            </span>
          </div>

          <h2 className="font-headline text-[54px] sm:text-[90px] md:text-[130px] lg:text-[150px] leading-[0.85] font-black uppercase tracking-tighter text-primary hover:text-brand-cyan hover:scale-[1.02] transition-all duration-300 cursor-default">
            COLLABORATE.
          </h2>

          <div className="relative z-10 -my-2 sm:-my-4 sticker-spring">
            <span className="bg-brand-orange text-white border-2 border-primary brutal-shadow font-mono text-xs sm:text-sm font-extrabold uppercase px-4 py-1 rotate-[4deg] inline-block cursor-pointer">
              OPEN SOURCE BY DEFAULT
            </span>
          </div>

          <h2 className="font-headline text-[54px] sm:text-[90px] md:text-[130px] lg:text-[150px] leading-[0.85] font-black uppercase tracking-tighter text-primary hover:text-brand-yellow hover:scale-[1.02] transition-all duration-300 cursor-default">
            INVENT.
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8 font-mono text-xs sm:text-sm uppercase font-bold text-primary">
          <span className="bg-white px-2 py-1 border border-primary brutal-shadow-sm hover:-translate-y-0.5 transition-transform">SYSTEMS CRAFT</span>
          <span>•</span>
          <span className="bg-white px-2 py-1 border border-primary brutal-shadow-sm hover:-translate-y-0.5 transition-transform">HARDWARE MASTERY</span>
          <span>•</span>
          <span className="bg-white px-2 py-1 border border-primary brutal-shadow-sm hover:-translate-y-0.5 transition-transform">RADICAL EDITORIAL TASTE</span>
        </div>
      </div>
    </section>
  );
};
