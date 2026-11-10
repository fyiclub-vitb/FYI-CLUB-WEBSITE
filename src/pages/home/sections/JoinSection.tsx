import React from 'react';

interface JoinSectionProps {
  onOpenJoin: () => void;
}

// Compact homepage call to action that opens the shared join flow.
export const JoinSection: React.FC<JoinSectionProps> = ({ onOpenJoin }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 reveal-on-scroll" id="join-fyi">
      <div className="bg-brand-orange border-4 border-primary brutal-shadow-lg p-8 sm:p-14 relative overflow-hidden group">
        {/* Background tape decoration */}
        <div className="absolute -top-6 -right-6 w-36 h-10 bg-brand-yellow border-2 border-primary rotate-12 select-none pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1 font-mono text-xs font-bold uppercase rounded-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span>COHORT 2026 ADMISSIONS ROLLING</span>
          </div>

          <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.9] text-white tracking-tighter mb-4">
            WANT TO BUILD REAL THINGS WITH US?
          </h2>

          <p className="font-body text-base sm:text-xl text-primary font-bold mb-8 leading-relaxed max-w-2xl bg-white/90 p-4 border-2 border-primary brutal-shadow-sm">
            Drop your GitHub, your project sketches, or your weird experiments. No memorized coding trivia. We want builders who genuinely give a damn.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenJoin}
              className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-primary text-white hover:bg-brand-yellow hover:text-primary font-mono text-sm sm:text-base font-black px-8 py-4 rounded border-2 border-primary brutal-shadow-md uppercase tracking-wider transition-all"
            >
              <span>APPLY FOR COHORT 2026 ↗</span>
            </button>
            <span className="font-mono text-xs uppercase font-extrabold text-white tracking-widest bg-primary px-3 py-2 rounded-sm border border-black">
              NO RESUME BUZZWORDS PERMITTED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

