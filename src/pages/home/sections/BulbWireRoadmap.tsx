import React, { useState, useEffect, useRef } from 'react';
import { ROADMAP_MILESTONES } from '../../../data/clubData';
import { playClickSound, playSparkSound } from '../../../lib/sound';

export const BulbWireRoadmap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [powerOn, setPowerOn] = useState(true);
  const [activeStation, setActiveStation] = useState<number | null>(null);

  // Track scroll progress within this section to dynamically draw the glowing wire
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = rect.height - windowHeight * 0.4;
      if (totalDist <= 0) return;

      const current = windowHeight * 0.6 - rect.top;
      const pct = Math.min(Math.max(current / totalDist, 0), 1);
      setScrollProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTogglePower = () => {
    playClickSound();
    if (!powerOn) {
      setTimeout(() => playSparkSound(), 120);
    }
    setPowerOn(!powerOn);
  };

  const handleSelectStation = (index: number) => {
    playClickSound();
    setActiveStation(index === activeStation ? null : index);
    if (powerOn) {
      playSparkSound();
    }
  };

  // Wire path length calculation for SVG stroke-dashoffset
  const WIRE_PATH_LENGTH = 2100;
  const currentDashoffset = powerOn
    ? WIRE_PATH_LENGTH * (1 - Math.min(scrollProgress * 1.15, 1))
    : WIRE_PATH_LENGTH;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 bg-two26-blueprint border-b-4 border-primary overflow-hidden selection:bg-brand-yellow select-none"
    >
      {/* Corner Technical Registration Marks (+) Two26 Style */}
      <span className="absolute top-4 left-4 font-mono text-xs font-bold text-primary/40">+ [REG.01]</span>
      <span className="absolute top-4 right-4 font-mono text-xs font-bold text-primary/40">[230V_AC] +</span>
      <span className="absolute bottom-4 left-4 font-mono text-xs font-bold text-primary/40">+ [GND_REF]</span>
      <span className="absolute bottom-4 right-4 font-mono text-xs font-bold text-primary/40">[OUTPUT_SHIPPED] +</span>

      {/* Top Banner Ticker Tape */}
      <div className="w-full bg-brand-yellow border-y-2 border-primary py-2.5 overflow-hidden mb-16 marquee-container">
        <div className="animate-marquee font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-primary flex items-center gap-8 whitespace-nowrap">
          <span>⚡ LIVE HIGH-VOLTAGE CONDUIT</span>
          <span>•</span>
          <span>IDEAS DON'T SLEEP IN DRAFT</span>
          <span>•</span>
          <span>SOLDER SMOKE &gt; PITCH DECKS</span>
          <span>•</span>
          <span>TESTED ON VOLATILE HOSTEL WI-FI</span>
          <span>•</span>
          <span>100% STUDENT PRODUCED</span>
          <span>•</span>
          <span>FROM 2 AM CHAI TO PRODUCTION DEPLOYS</span>
          <span>•</span>
          <span>⚡ LIVE HIGH-VOLTAGE CONDUIT</span>
          <span>•</span>
          <span>IDEAS DON'T SLEEP IN DRAFT</span>
          <span>•</span>
          <span>SOLDER SMOKE &gt; PITCH DECKS</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header with Two26 Brutalist Badges */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border-2 border-primary px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider brutal-shadow-sm mb-4">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  powerOn ? 'bg-brand-orange animate-pulse' : 'bg-gray-400'
                }`}
              />
              <span>HIGH VOLTAGE CHRONOLOGICAL PIPELINE</span>
              <span className="text-brand-muted">•</span>
              <span className="text-brand-orange">CONDUIT #2200K</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-primary leading-none">
              FROM HOSTEL CHAI <br />
              <span className="relative inline-block text-white bg-primary px-3 py-1 brutal-shadow-orange rotate-[-1deg] mt-1">
                TO PRODUCTION DEPLOYS.
              </span>
            </h2>
          </div>

          {/* Interactive Power Switch Control */}
          <div className="flex items-center gap-4 bg-white border-2 border-primary p-3 rounded-xl brutal-shadow-sm self-start md:self-end">
            <div className="flex flex-col text-right font-mono text-[11px] font-bold">
              <span className="text-primary uppercase">CIRCUIT BREAKER</span>
              <span className={powerOn ? 'text-brand-orange' : 'text-gray-400'}>
                {powerOn ? '⚡ VOLTAGE: 230V LIVE' : '⭕ CIRCUIT OPEN'}
              </span>
            </div>
            <button
              onClick={handleTogglePower}
              className={`w-14 h-8 border-2 border-primary rounded-full transition-colors relative flex items-center px-1 ${
                powerOn ? 'bg-brand-orange' : 'bg-gray-200'
              }`}
              title="Toggle wire power conduit"
            >
              <div
                className={`w-5 h-5 rounded-full border-2 border-primary bg-white transition-transform ${
                  powerOn ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* ─── The Snaking Bulb Wire Interactive Canvas ─── */}
        <div className="relative">
          {/* Central High-Voltage Blue & Orange Conduit Wire (Desktop SVG) — Widened and Deeply Curved (Two26 style) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[240px] -translate-x-1/2 pointer-events-none z-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 240 1850"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Electric Blue + Vivid Orange Club Gradient */}
                <linearGradient id="wireBlueOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="25%" stopColor="#0055FF" />
                  <stop offset="50%" stopColor="#FF4800" />
                  <stop offset="75%" stopColor="#00E5FF" />
                  <stop offset="100%" stopColor="#FF4800" />
                </linearGradient>
                <filter id="electricNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer industrial conduit duct (dark casing) */}
              <path
                d="M 120 0 C 120 180, 15 240, 15 370 C 15 500, 225 560, 225 740 C 225 920, 15 980, 15 1110 C 15 1240, 225 1300, 225 1480 C 225 1660, 120 1720, 120 1850"
                stroke="#111111"
                strokeWidth="14"
                strokeLinecap="round"
              />

              {/* Glowing High Voltage Conduit (Electric Blue + Orange Mix) */}
              <path
                d="M 120 0 C 120 180, 15 240, 15 370 C 15 500, 225 560, 225 740 C 225 920, 15 980, 15 1110 C 15 1240, 225 1300, 225 1480 C 225 1660, 120 1720, 120 1850"
                stroke={powerOn ? 'url(#wireBlueOrangeGrad)' : '#333333'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={WIRE_PATH_LENGTH}
                strokeDashoffset={currentDashoffset}
                filter={powerOn ? 'url(#electricNeonGlow)' : undefined}
                className={powerOn ? 'transition-all duration-300' : ''}
              />

              {/* Inner Sparkling Pulse Core */}
              {powerOn && (
                <path
                  d="M 120 0 C 120 180, 15 240, 15 370 C 15 500, 225 560, 225 740 C 225 920, 15 980, 15 1110 C 15 1240, 225 1300, 225 1480 C 225 1660, 120 1720, 120 1850"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="20 36"
                  className="animate-wire-glow"
                />
              )}
            </svg>
          </div>

          {/* Mobile Vertical Wire Spine */}
          <div className="lg:hidden absolute left-5 top-2 bottom-2 w-3 bg-[#111111] z-0 rounded-full">
            <div
              className={`w-full bg-gradient-to-b from-brand-cyan via-blue-600 to-brand-orange transition-all duration-300 rounded-full ${
                powerOn ? 'shadow-[0_0_14px_#00E5FF]' : 'opacity-20'
              }`}
              style={{
                height: `${Math.min(scrollProgress * 100, 100)}%`,
              }}
            />
          </div>

          {/* 5 Milestone Stations Along the Path */}
          <div className="flex flex-col gap-24 lg:gap-32 relative z-20">
            {ROADMAP_MILESTONES.map((m, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = activeStation === idx;

              return (
                <div
                  key={m.step}
                  className={`flex flex-col lg:flex-row items-center justify-between ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Floating Pill Container (Text Bubble) */}
                  <div className="w-full lg:w-[46%] pl-12 lg:pl-0">
                    <div
                      data-tilt
                      onClick={() => handleSelectStation(idx)}
                      className={`relative bg-white border-3 border-primary p-6 sm:p-8 rounded-3xl brutal-shadow transition-all duration-300 cursor-pointer group ${
                        isSelected
                          ? 'border-brand-orange brutal-shadow-orange ring-2 ring-brand-orange/40'
                          : 'hover:border-primary hover:brutal-shadow-md'
                      }`}
                    >
                      {/* Terminal Connection Screw Node */}
                      <div className="absolute -top-3 left-8 w-6 h-6 bg-[#111111] rounded-full border-2 border-white flex items-center justify-center font-mono text-brand-cyan text-[10px] font-black">
                        ⚡
                      </div>

                      {/* Pill Header Badge Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black bg-primary text-white px-2 py-0.5 rounded">
                            STEP {m.step}
                          </span>
                          <span
                            className={`font-mono text-xs font-bold px-2 py-0.5 rounded border border-primary ${
                              m.tagBg || 'bg-brand-yellow text-primary'
                            }`}
                          >
                            {m.tag}
                          </span>
                        </div>
                        <span className="font-mono text-xs font-extrabold text-brand-muted uppercase">
                          {m.date}
                        </span>
                      </div>

                      {/* Main Title & Subtitle */}
                      <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-primary tracking-tight leading-tight mb-2 group-hover:text-brand-orange transition-colors">
                        {m.title}
                      </h3>
                      <div className="font-mono text-xs text-brand-orange font-bold uppercase tracking-wider mb-4">
                        {m.subtitle}
                      </div>

                      {/* Story Narrative */}
                      <p className="font-body text-sm sm:text-base text-brand-muted leading-relaxed mb-6 font-medium">
                        {m.desc}
                      </p>

                      {/* Bottom Status Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t-2 border-primary/10">
                        <span
                          className={`font-mono text-[11px] font-black uppercase px-2.5 py-1 rounded border-2 border-primary ${
                            m.metricHighlight
                              ? 'bg-brand-cyan text-primary brutal-shadow-sm'
                              : 'bg-surface text-primary'
                          }`}
                        >
                          {m.metricBadge}
                        </span>
                        <span className="font-mono text-[11px] font-bold text-primary group-hover:translate-x-1 transition-transform">
                          INSPECT NODE ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Wire Terminal Node (Central Circle on Desktop) */}
                  <div className="hidden lg:flex w-[8%] justify-center items-center select-none">
                    <div
                      onClick={() => handleSelectStation(idx)}
                      className={`w-11 h-11 rounded-full border-3 border-primary flex items-center justify-center transition-all duration-300 cursor-pointer ${
                        powerOn && scrollProgress >= (idx + 0.5) / 5
                          ? 'bg-gradient-to-tr from-brand-cyan to-brand-orange text-white brutal-shadow-sm scale-110'
                          : 'bg-white text-primary hover:bg-brand-cyan'
                      }`}
                      title={`Milestone Node ${m.step}`}
                    >
                      <span className="font-mono text-xs font-black">{m.step}</span>
                    </div>
                  </div>

                  {/* Interactive Tool Element (Visual Anchor Illustration) */}
                  <div className="w-full lg:w-[46%] pl-12 lg:pl-0 flex justify-center">
                    {m.toolType === 'bulb' && (
                      <div
                        data-tilt
                        onClick={() => handleSelectStation(idx)}
                        className="w-full max-w-md bg-white border-3 border-primary rounded-2xl p-6 brutal-shadow-sm hover:brutal-shadow-cyan transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between pb-3 border-b-2 border-primary/10 font-mono text-xs font-bold text-brand-muted">
                          <span className="text-primary font-black">TOOL #01 • ELECTRIC FILAMENT</span>
                          <span className={powerOn ? 'text-brand-cyan font-black' : ''}>
                            {powerOn ? 'BLUE & ORANGE GLOW' : 'COLD FILAMENT'}
                          </span>
                        </div>
                        <div className="py-6 flex items-center justify-center">
                          <div className="relative w-32 h-32 flex items-center justify-center">
                            {/* Filament Bulb Graphic with Blue & Orange Mix */}
                            <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                              {/* Glass Envelope */}
                              <path
                                d="M 30 40 C 30 20, 70 20, 70 40 C 70 52, 62 60, 60 72 L 40 72 C 38 60, 30 52, 30 40 Z"
                                stroke="#111111"
                                strokeWidth="3.5"
                                fill={powerOn ? '#F0F9FF' : '#FFFFFF'}
                              />
                              {/* Screw Base */}
                              <rect x="42" y="72" width="16" height="5" fill="#111111" />
                              <rect x="44" y="78" width="12" height="4" fill="#111111" />
                              <rect x="46" y="83" width="8" height="3" fill="#111111" />
                              
                              {/* Coiled Dual Filaments: Orange & Electric Blue */}
                              <path
                                d="M 44 65 L 46 45 L 49 52 L 51 45 L 53 52 L 56 45 L 56 65"
                                stroke={powerOn ? '#FF4800' : '#888888'}
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={powerOn ? 'animate-filament' : ''}
                              />
                              <path
                                d="M 43 64 L 45 47 L 48 54 L 50 47 L 52 54 L 55 47 L 55 64"
                                stroke={powerOn ? '#00E5FF' : '#666666'}
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />

                              {/* Dual Blue/Orange Glow Halo */}
                              {powerOn && (
                                <>
                                  <circle
                                    cx="46"
                                    cy="40"
                                    r="20"
                                    fill="rgba(0, 229, 255, 0.22)"
                                    className="animate-pulse"
                                  />
                                  <circle
                                    cx="54"
                                    cy="40"
                                    r="20"
                                    fill="rgba(255, 72, 0, 0.22)"
                                    className="animate-pulse"
                                  />
                                </>
                              )}
                            </svg>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {m.toolDetails?.map((d) => (
                            <span
                              key={d}
                              className="font-mono text-[10px] bg-surface px-2 py-1 rounded border border-primary font-bold"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.toolType === 'terminal' && (
                      <div
                        data-tilt
                        onClick={() => handleSelectStation(idx)}
                        className="w-full max-w-md bg-primary text-white border-3 border-primary rounded-2xl p-6 brutal-shadow-sm hover:brutal-shadow-cyan transition-all cursor-pointer font-mono text-xs"
                      >
                        <div className="flex items-center justify-between pb-3 border-b border-white/20 text-brand-cyan font-bold">
                          <span className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan" />
                            <span>P2P MESH CONSOLE</span>
                          </span>
                          <span>[TX/RX LIVE]</span>
                        </div>
                        <div className="py-4 space-y-2 text-[11px] leading-relaxed">
                          <div className="text-gray-400">&gt; aether-mesh --discover-blocks</div>
                          <div className="text-brand-yellow">&gt; [OK] Block 04 &lt;-&gt; Block 07 PEERED</div>
                          <div className="text-white">&gt; 140,291 packets routed over Wi-Fi shadow</div>
                          <div className="text-brand-cyan">
                            &gt; Central server dependencies: 0
                            <span className="animate-cursor-blink ml-1">_</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                          {m.toolDetails?.map((d) => (
                            <span
                              key={d}
                              className="text-[10px] bg-white/10 text-white px-2 py-1 rounded font-bold"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.toolType === 'rover' && (
                      <div
                        data-tilt
                        onClick={() => handleSelectStation(idx)}
                        className="w-full max-w-md bg-white border-3 border-primary rounded-2xl p-6 brutal-shadow-sm hover:brutal-shadow-orange transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-3 border-b-2 border-primary/10 font-mono text-xs font-bold text-brand-muted">
                          <span>TOOL #03 • PULSEBOTICS TELEMETRY</span>
                          <span className="text-brand-orange">868 MHz LoRa</span>
                        </div>
                        <div className="py-6 flex items-center justify-center gap-6">
                          <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary flex items-center justify-center relative animate-spin-slow">
                            <span className="w-2 h-2 rounded-full bg-brand-orange" />
                            <div className="absolute top-1 font-mono text-[8px] font-black">N</div>
                            <div className="absolute right-1 font-mono text-[8px] font-black">E</div>
                            <div className="absolute bottom-1 font-mono text-[8px] font-black">S</div>
                            <div className="absolute left-1 font-mono text-[8px] font-black">W</div>
                          </div>
                          <div className="font-mono text-xs space-y-1">
                            <div className="font-bold text-primary">LAT: 23.0784° N</div>
                            <div className="font-bold text-primary">LON: 77.0125° E</div>
                            <div className="text-[11px] text-brand-orange font-black">
                              SEHORE MUD TEST PASS
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {m.toolDetails?.map((d) => (
                            <span
                              key={d}
                              className="font-mono text-[10px] bg-surface px-2 py-1 rounded border border-primary font-bold"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.toolType === 'chip' && (
                      <div
                        data-tilt
                        onClick={() => handleSelectStation(idx)}
                        className="w-full max-w-md bg-white border-3 border-primary rounded-2xl p-6 brutal-shadow-sm hover:brutal-shadow-yellow transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-3 border-b-2 border-primary/10 font-mono text-xs font-bold text-brand-muted">
                          <span>TOOL #04 • LAB 02 WORKBENCH</span>
                          <span className="text-brand-orange">GPIO READY</span>
                        </div>
                        <div className="py-6 flex items-center justify-center">
                          {/* Dual-in-Line IC Package */}
                          <div className="w-36 h-20 bg-primary border-2 border-primary rounded relative flex items-center justify-center shadow-md">
                            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse absolute top-2 right-2" />
                            <div className="font-mono text-xs font-black text-white tracking-widest">
                              FYI-S3
                            </div>
                            {/* IC Pins Top & Bottom */}
                            <div className="absolute -top-2 flex justify-between w-28 px-1">
                              {[1, 2, 3, 4, 5, 6].map((p) => (
                                <span key={p} className="w-1.5 h-2 bg-gray-300 border border-black" />
                              ))}
                            </div>
                            <div className="absolute -bottom-2 flex justify-between w-28 px-1">
                              {[1, 2, 3, 4, 5, 6].map((p) => (
                                <span key={p} className="w-1.5 h-2 bg-gray-300 border border-black" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {m.toolDetails?.map((d) => (
                            <span
                              key={d}
                              className="font-mono text-[10px] bg-surface px-2 py-1 rounded border border-primary font-bold"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {m.toolType === 'reactor' && (
                      <div
                        data-tilt
                        onClick={() => handleSelectStation(idx)}
                        className="w-full max-w-md bg-brand-yellow border-3 border-primary rounded-2xl p-6 brutal-shadow-orange hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between pb-3 border-b-2 border-primary/20 font-mono text-xs font-black text-primary">
                          <span>SUPERCHARGED REACTOR</span>
                          <span className="animate-pulse">⚡ LIVE</span>
                        </div>
                        <div className="py-6 flex flex-col items-center justify-center text-center">
                          <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-3xl font-black mb-3 brutal-shadow-sm">
                            🚀
                          </div>
                          <div className="font-headline font-black text-xl text-primary uppercase">
                            OPEN COHORT ACTIVE
                          </div>
                          <p className="font-mono text-xs text-brand-muted mt-1">
                            Hardware hackers, shader geeks & system architects wanted.
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {m.toolDetails?.map((d) => (
                            <span
                              key={d}
                              className="font-mono text-[10px] bg-white px-2 py-1 rounded border border-primary font-bold"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Terminal Ground Plug - Cleanly Separated Below the Wire Conduit */}
        <div className="mt-16 pt-10 border-t-2 border-dashed border-primary/30 flex flex-col items-center justify-center text-center relative z-20">
          <div className="w-14 h-14 rounded-full bg-primary text-brand-cyan border-3 border-primary flex items-center justify-center text-2xl font-mono font-black mb-4 brutal-shadow-cyan">
            ⚡
          </div>
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-brand-muted mb-2">
            CONDUIT TERMINAL REACHED • 100% ENERGY DELIVERED
          </div>
          <a
            href="/join"
            className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-xl border-3 border-primary brutal-shadow font-headline font-black text-base uppercase tracking-wider hover:bg-brand-yellow hover:text-primary transition-all"
          >
            <span>PLUG INTO THE 2026 COHORT</span>
            <span className="font-mono text-lg">↗</span>
          </a>
        </div>
      </div>

      {/* Bottom Counter-Flow Ticker Tape */}
      <div className="w-full bg-primary text-white border-y-2 border-primary py-2.5 overflow-hidden mt-16 marquee-container">
        <div className="animate-marquee-reverse font-mono text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-8 whitespace-nowrap">
          <span className="text-brand-cyan">★ GOOD LOOKS &amp; DEPLOYED CODE INCLUDED</span>
          <span>•</span>
          <span>VIT BHOPAL ROGUE CHAPTER</span>
          <span>•</span>
          <span>ZERO RESUME PADDING</span>
          <span>•</span>
          <span>BUILDING HARDWARE &amp; SOFTWARE</span>
          <span>•</span>
          <span className="text-brand-yellow">★ GOOD LOOKS &amp; DEPLOYED CODE INCLUDED</span>
          <span>•</span>
          <span>VIT BHOPAL ROGUE CHAPTER</span>
          <span>•</span>
          <span>ZERO RESUME PADDING</span>
        </div>
      </div>
    </section>
  );
};

