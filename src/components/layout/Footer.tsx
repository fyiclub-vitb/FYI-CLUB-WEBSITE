import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_META } from '../../data/clubData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#EBE7DC] border-t-4 border-primary pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-12 border-b-2 border-primary">
          <div>
            <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
              • TRANSMISSION COMPLETE
            </span>
            <h2 className="font-headline text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-primary leading-none">
              OKAY, THAT'S ENOUGH WEBSITE.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="font-mono text-xs uppercase font-bold text-brand-muted">DIRECT COMMS</span>
            <a
              href={`mailto:${CLUB_META.email}`}
              className="font-headline text-lg sm:text-xl font-black text-primary hover:text-brand-orange underline decoration-2 underline-offset-4"
            >
              {CLUB_META.email}
            </a>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 py-8 border-b-2 border-primary/20 font-headline font-bold text-xs uppercase">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            01 • Home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            02 • About FYI
          </Link>
          <Link
            to="/projects"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            03 • Featured Builds
          </Link>
          <Link
            to="/events"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            04 • Gatherings
          </Link>
          <Link
            to="/team"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            05 • Architects
          </Link>
          <Link
            to="/gallery"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="hover:text-brand-orange transition-colors"
          >
            06 • Lab Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-8">
          {/* Logo & Note */}
          <div className="md:col-span-5 flex items-center gap-3.5">
            <div className="w-14 h-14 bg-white border-2 border-primary brutal-shadow-sm rounded-lg flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
              <img
                src="/fyi-logo.jpg"
                alt="FYI VIT Bhopal Official Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-black text-primary">
                fyi<span className="text-brand-orange">.</span>vitbhopal
              </span>
              <span className="font-mono text-[11px] text-brand-muted font-bold">
                Handmade by student engineers • VIT Bhopal Chapter
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-primary">
            <a
              href={CLUB_META.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-white hover:bg-brand-orange hover:text-white border border-primary brutal-shadow-sm transition-all uppercase flex items-center gap-1"
              title="FYI VIT Bhopal Instagram @fyivitbhopal"
            >
              <span>INSTAGRAM</span>
              <span className="text-[10px] opacity-70">↗</span>
            </a>
            <a
              href={CLUB_META.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-white hover:bg-brand-cyan hover:text-primary border border-primary brutal-shadow-sm transition-all uppercase flex items-center gap-1"
              title="FYI VIT Bhopal on LinkedIn"
            >
              <span>LINKEDIN</span>
              <span className="text-[10px] opacity-70">↗</span>
            </a>
            <a
              href={CLUB_META.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-white hover:bg-brand-yellow hover:text-primary border border-primary brutal-shadow-sm transition-all uppercase flex items-center gap-1"
              title="FYI GitHub Repositories"
            >
              <span>GITHUB</span>
              <span className="text-[10px] opacity-70">↗</span>
            </a>
            <a
              href={CLUB_META.socials.discord}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-1 bg-white hover:bg-primary hover:text-white border border-primary brutal-shadow-sm transition-all uppercase flex items-center gap-1"
              title="FYI Discord Community"
            >
              <span>DISCORD</span>
              <span className="text-[10px] opacity-70">↗</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="md:col-span-3 md:text-right font-mono text-xs font-bold text-brand-muted uppercase">
            © 2025 FYI VIT BHOPAL.
          </div>
        </div>
      </div>
    </footer>
  );
};

