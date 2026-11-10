import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CLUB_META } from '../../data/clubData';
import logoUrl from '../../assets/fyi-logo.jpg';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Work', path: '/projects' },
    { label: 'Events', path: '/events' },
    { label: 'Guild', path: '/team' },
    { label: 'Archive', path: '/gallery' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#F6F3EB]/95 backdrop-blur-md border-b-2 border-primary transition-all">
      <div className="h-20 sm:h-22 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand & Official Logo Lockup */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4 group select-none whitespace-nowrap flex-shrink-0">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-white border-2 border-primary brutal-shadow-sm rounded-lg flex items-center justify-center p-1.5 group-hover:-rotate-2 transition-transform duration-200 overflow-hidden flex-shrink-0">
            <img
              src={logoUrl}
              alt="FYI Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-black text-sm sm:text-base tracking-tight text-primary lowercase">
                fyi<span className="text-brand-orange">.</span>vitbhopal
              </span>
              <span className="bg-brand-cyan text-primary border border-primary px-1.5 py-0.5 text-[9px] font-mono font-black leading-none uppercase tracking-wider">
                CHAPTER
              </span>
            </div>
            <span className="font-mono text-[9px] text-brand-muted tracking-wider uppercase mt-0.5">
              student innovation guild
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `font-headline font-bold text-sm uppercase tracking-wide transition-colors ${
                  isActive
                    ? 'text-brand-orange underline decoration-wavy decoration-brand-yellow decoration-2 underline-offset-4'
                    : 'text-primary hover:text-brand-orange hover:underline decoration-2 underline-offset-4'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Status & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden xl:inline-flex items-center gap-2 bg-white border-2 border-primary brutal-shadow-sm px-3 py-1.5 rounded-full">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-tight">
              {CLUB_META.status}
            </span>
          </div>

          <Link
            to="/join"
            className="magnetic-btn btn-elastic inline-flex items-center justify-center bg-primary text-white hover:bg-brand-orange hover:text-primary font-mono text-xs md:text-sm px-4 md:px-5 py-2.5 rounded border-2 border-primary brutal-shadow font-extrabold tracking-wider uppercase transition-all"
          >
            JOIN FYI ↗
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-white border-2 border-primary brutal-shadow-sm rounded text-primary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined block">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F3EB] border-b-2 border-primary px-6 py-6 flex flex-col gap-4 font-headline font-bold text-lg uppercase">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 border-b border-primary/20 ${
                  isActive ? 'text-brand-orange' : 'hover:text-brand-orange'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2.5 text-center bg-brand-orange text-white border-2 border-primary brutal-shadow font-mono text-sm uppercase font-black"
          >
            APPLY TO GUILD ↗
          </Link>
          <div className="flex items-center justify-center gap-3 pt-2 font-mono text-[11px] font-bold">
            <a
              href={CLUB_META.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-brand-orange underline underline-offset-2"
            >
              @fyivitbhopal
            </a>
            <span className="opacity-30">•</span>
            <a
              href={CLUB_META.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-brand-orange underline underline-offset-2"
            >
              GitHub
            </a>
            <span className="opacity-30">•</span>
            <a
              href={CLUB_META.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:text-brand-orange underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

