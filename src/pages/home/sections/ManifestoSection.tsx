import React from 'react';
import { CLUB_META } from '../../../data/clubData';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 border-b-2 border-primary reveal-on-scroll" id="manifesto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-primary gap-4">
        <div>
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
            HOW WE STARTED • 01
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary">
            ABOUT FYI
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-md bg-brand-yellow p-2 border-2 border-primary brutal-shadow-sm">
          Four tired students, a box of STM32 chips, and one shared itch to make real things.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Story Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <p className="font-headline text-xl sm:text-2xl font-bold text-primary leading-snug">
            We got sick of teams winning campus hackathons with sterile slide decks and zero working repositories.
          </p>
          <p className="font-body text-base sm:text-lg text-primary leading-relaxed">
            University curricula test short-term memorization; the real world demands architects who can stay calm while a production build throws obscure compiler errors at 3:45 AM. FYI exists because we refused to sit around waiting for permission to build ambitious things.
          </p>

          {/* Tactile Guild Principles Cards with 3D Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {CLUB_META.rules.map((rule, idx) => (
              <div
                key={idx}
                data-tilt
                data-tilt-max="6"
                className={`${
                  rule.cardBg || 'bg-white'
                } p-5 border-2 border-primary brutal-shadow hover:-translate-y-1 transition-transform relative cursor-pointer group`}
              >
                {/* Two26 Tactical Corner Crosshair */}
                <div className="absolute top-1.5 right-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors">+</div>

                <span
                  className={`${rule.badgeColor} font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase mb-2 inline-block`}
                >
                  {rule.num}
                </span>
                <h3 className="font-headline text-lg font-black uppercase mb-1">{rule.title}</h3>
                <p
                  className={`font-body text-xs sm:text-sm ${
                    rule.cardBg ? 'text-primary font-medium' : 'text-brand-muted'
                  }`}
                >
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold bg-[#EBE7DC] p-3 border-2 border-primary brutal-shadow-sm">
            <span className="material-symbols-outlined text-brand-orange text-base">terminal</span>
            <span>BASE OF OPERATIONS: LAB 02 &amp; CENTRAL INNOVATION BLOCK • VIT BHOPAL</span>
          </div>
        </div>

        {/* Taped Polaroid Midnight Photo Frame with 3D Tilt */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div
            data-tilt
            data-tilt-max="7"
            className="relative bg-white p-4 border-2 border-primary brutal-shadow-md rotate-1 hover:rotate-0 transition-all duration-300 cursor-pointer group"
          >
            {/* Simulated masking tape top corners */}
            <div className="absolute -top-3 left-8 w-20 h-6 tape-strip -rotate-6 border border-primary/20 z-10" />
            <div className="absolute -top-3 right-8 w-20 h-6 tape-strip rotate-6 border border-primary/20 z-10" />

            <div className="w-full aspect-[4/3] overflow-hidden border-2 border-primary mb-3 relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVIyAullLxSZquuJ4K6-d_ct0QtajO73NGfit7OrvtHeBBQU9sTduXoF8w3P78RnD91q80p1n2JqqOBoAhuiPIhOwqgJ1QpOuofb7YyCXJJLBVticf2pfaY9m3k9I1XGUpIIUqQKii3e243NoFEIJ6Ky0Cc6L_stonoh8jktNVxecwliJQv8PKM5TFLano0NHy0ClqTsZaYPKT4Z_cD7AMcB5crl71vOUS9r073b0O"
                alt="Students in Lab at 2am"
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-2 left-2 bg-primary text-brand-yellow font-mono text-[10px] font-bold px-2 py-0.5">
                EXIF: 02:48 AM • SHOT ON PIXEL
              </div>
            </div>

            <div className="flex items-center justify-between font-mono text-xs font-bold">
              <span className="text-primary uppercase">Midnight Deployment Energy • Block 02 Lab</span>
              <span className="bg-brand-cyan text-primary px-1.5 py-0.5 border border-primary">OCT 2024</span>
            </div>
            <div className="font-hand text-lg text-brand-orange mt-1">
              "We fixed the packet drops with two capacitors and pure willpower."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
