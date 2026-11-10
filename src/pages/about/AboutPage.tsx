import React from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { CLUB_META } from '../../data/clubData';
import { Link } from 'react-router-dom';
import { BulbWireRoadmap } from '../home/sections/BulbWireRoadmap';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full">
      <PageHeader
        tag="01 • ORIGIN &amp; MANIFESTO"
        badge="100% STUDENT PRODUCED"
        title="WE REFUSED TO WAIT FOR PERMISSION."
        subtitle="The unfiltered backstory of how four sleep-deprived students turned hostel chai debates into VIT Bhopal's most tactile innovation guild."
      />

      {/* Main Broadside Narrative */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-6 font-body text-lg leading-relaxed text-primary">
            <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase tracking-tight text-primary">
              THE MANIFESTO: CODE THAT RUNS &gt; PITCH DECKS
            </h2>
            <p className="bg-white p-6 border-2 border-primary brutal-shadow-sm font-medium">
              University curricula test short-term memorization. Hackathon judges reward smooth-talking sales pitches. But the real world demands architects who stay calm when a kernel build throws an obscure error at 3:45 AM.
            </p>
            <p>
              FYI was founded to reject corporate resume-padding. We don't host generic seminars or hand out participation certificates. Every gathering is a work sprint: we solder real capacitors, deconstruct RFC protocols, distill ONNX neural models for WebGL, and deploy crates to npm and crates.io.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {CLUB_META.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 border-2 border-primary brutal-shadow hover:-translate-y-1 transition-transform"
                >
                  <span className={`${rule.badgeColor} font-mono text-[10px] font-bold px-2 py-0.5 uppercase mb-2 inline-block`}>
                    {rule.num}
                  </span>
                  <h3 className="font-headline text-lg font-black uppercase mb-1">{rule.title}</h3>
                  <p className="font-body text-xs text-brand-muted leading-relaxed">{rule.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-brand-yellow border-2 border-primary brutal-shadow-sm font-mono text-xs font-bold text-primary">
              💡 CORE DOCTRINE: If your software doesn't survive volatile hostel Wi-Fi, it's not production software.
            </div>
          </div>

          {/* Sidebar Note & Taped Photo */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-white p-4 border-2 border-primary brutal-shadow-md rotate-1">
              <div className="aspect-[4/3] bg-black overflow-hidden border-2 border-primary mb-3">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVIyAullLxSZquuJ4K6-d_ct0QtajO73NGfit7OrvtHeBBQU9sTduXoF8w3P78RnD91q80p1n2JqqOBoAhuiPIhOwqgJ1QpOuofb7YyCXJJLBVticf2pfaY9m3k9I1XGUpIIUqQKii3e243NoFEIJ6Ky0Cc6L_stonoh8jktNVxecwliJQv8PKM5TFLano0NHy0ClqTsZaYPKT4Z_cD7AMcB5crl71vOUS9r073b0O"
                  alt="Midnight lab work"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="font-mono text-xs font-bold uppercase block text-brand-orange">
                LAB 02 • 03:14 AM
              </span>
              <p className="font-hand text-base text-primary mt-1">
                "Where breadboards smoke and the real learning begins."
              </p>
            </div>

            <div className="bg-primary text-white p-6 border-2 border-primary brutal-shadow-sm">
              <span className="font-mono text-[10px] text-brand-cyan uppercase font-bold block mb-1">
                CHAPTER COORDINATES
              </span>
              <h4 className="font-headline text-xl font-bold uppercase mb-2">VIT BHOPAL CAMPUS</h4>
              <p className="font-mono text-xs text-white/80 leading-relaxed mb-4">
                Kothri Kalan, Sehore Highway, Madhya Pradesh 466114.
                Operational HQ: Central Innovation Block Lab 02.
              </p>
              <div className="flex flex-col gap-2 pt-2 border-t border-white/20 mb-4">
                <span className="font-mono text-[10px] text-brand-yellow font-bold uppercase">
                  OFFICIAL HANDLES:
                </span>
                <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] font-bold">
                  <a
                    href={CLUB_META.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-orange underline underline-offset-2"
                  >
                    @fyivitbhopal
                  </a>
                  <span className="text-white/40">•</span>
                  <a
                    href={CLUB_META.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-yellow underline underline-offset-2"
                  >
                    GitHub
                  </a>
                  <span className="text-white/40">•</span>
                  <a
                    href={CLUB_META.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:text-brand-cyan underline underline-offset-2"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <Link
                to="/join"
                className="inline-block bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary font-mono text-xs font-black uppercase px-4 py-2 border border-white transition-colors"
              >
                APPLY TO COHORT ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two26-Style Animated Snaking Bulb Wire Roadmap & Timeline */}
      <BulbWireRoadmap />
    </div>
  );
};
