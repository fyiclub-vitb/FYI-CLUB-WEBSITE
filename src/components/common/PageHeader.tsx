import React from 'react';
import { TextScramble } from '../animations';

interface PageHeaderProps {
  tag: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ tag, title, subtitle, badge }) => {
  return (
    <div className="w-full bg-[#EBE7DC] py-14 sm:py-20 border-b-2 border-primary relative overflow-hidden">
      {/* Tape Strips */}
      <div className="absolute -top-3 left-10 w-28 h-7 tape-strip -rotate-6 border border-primary/20 pointer-events-none" />
      <div className="absolute -top-3 right-12 w-32 h-7 tape-strip rotate-3 border border-primary/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-orange bg-white px-2.5 py-1 border border-primary brutal-shadow-sm">
            {tag}
          </span>
          {badge && (
            <span className="font-mono text-xs font-black uppercase tracking-wider bg-brand-cyan text-primary px-2.5 py-1 border border-primary brutal-shadow-sm">
              {badge}
            </span>
          )}
        </div>

        <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary leading-tight">
          <TextScramble text={title} triggerOnView={true} triggerOnHover={true} />
        </h1>

        <p className="font-body text-base sm:text-xl text-primary font-medium max-w-2xl mt-4 leading-relaxed bg-white/70 p-3 border-l-4 border-brand-orange brutal-shadow-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

