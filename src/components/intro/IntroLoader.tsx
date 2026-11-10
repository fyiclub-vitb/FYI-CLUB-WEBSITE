import React, { useEffect, useRef, useState, useId } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
  onTransitionStart?: () => void;
  background?: string;
  ink?: string;
  accent?: string;
  duration?: number;
  clubName?: string;
}

// ── Math & Easing Functions (from Framer export) ───────────────────────────
const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const easeOutQuart = (v: number) => 1 - Math.pow(1 - clamp01(v), 4);
const smoothstep = (v: number) => {
  const t = clamp01(v);
  return t * t * (3 - 2 * t);
};
const backOut = (v: number) => {
  const t = clamp01(v) - 1;
  return 1 + 2.15 * t * t * t + 1.15 * t * t;
};

// ── Master SVG Paths (extracted directly from Framer design) ──────────────
const F_PATH = 'M36 52L85 49L80 72L57 72L56 79L79 78L76 98L57 98L58 122L35 122L33 74L30 74Z';
const Y_PATH = 'M78 18L111 65L106 82ZM122 55L134 49L132 61L121 79L110 74ZM109 120L115 114L123 133L113 130Z';
const I_PATH = 'M141 51L170 49L166 69L160 69L160 104L167 104L168 122L130 122L130 106L138 105L138 71L133 71Z';
const BULB_PATH = 'M104 84C104 90 95 93 92 99C83 113 91 126 105 127C120 129 130 118 126 106C124 96 115 91 115 84Z';
const BLOB_PATH = 'M74 35C86 26 98 27 108 31C119 31 128 38 139 40C158 45 171 58 173 77C179 98 175 116 167 132C159 146 155 162 140 166C124 174 109 169 94 172C83 177 69 169 63 172C48 178 40 164 40 150C41 134 32 119 35 100C37 82 43 66 55 55C59 45 61 38 74 35Z';

// ── Geometric Campus Monospace Font (VIT BHOPAL) ──────────────────────────
const LETTER_GLYPHS: Record<string, { w: number; d: string }> = {
  V: { w: 13, d: 'M0 0H5V3H4L6.5 11L9 3H8V0H13V3H12L8 15H5L1 3H0Z' },
  I: { w: 9, d: 'M0 0H9V3H7V12H9V15H0V12H2V3H0Z' },
  T: { w: 13, d: 'M0 0H13V5H10V3H9V12H11V15H2V12H4V3H3V5H0Z' },
  B: { w: 13, d: 'M0 0H8C13 0 14 6 10 7C15 9 14 15 8 15H0V12H1V3H0ZM5 3V6H7C10 6 10 3 7 3ZM5 9V12H7C10 12 10 9 7 9Z' },
  H: { w: 14, d: 'M0 0H6V3H5V6H9V3H8V0H14V3H13V12H14V15H8V12H9V9H5V12H6V15H0V12H1V3H0Z' },
  O: { w: 14, d: 'M5 0H9C12 0 14 2 14 5V10C14 13 12 15 9 15H5C2 15 0 13 0 10V5C0 2 2 0 5 0ZM6 3C5 3 4.5 4 4.5 5V10C4.5 11.5 5 12 6 12H8C9 12 9.5 11.5 9.5 10V5C9.5 4 9 3 8 3Z' },
  P: { w: 13, d: 'M0 0H8C15 0 15 9 8 9H5V12H7V15H0V12H1V3H0ZM5 3V6H7C10 6 10 3 7 3Z' },
  A: { w: 14, d: 'M4 0H10L13 12H14V15H8V12H9L8.5 10H5.5L5 12H6V15H0V12H1ZM7 4L6 7H8Z' },
  L: { w: 12, d: 'M0 0H7V3H5V12H9V9H12V15H0V12H1V3H0Z' },
};

// Pre-compute campus letters positions
const CAMPUS_LETTERS: { d: string; x: number }[] = [];
let cursorX = 33;
for (const char of 'VIT BHOPAL') {
  if (char === ' ') {
    cursorX += 5;
    continue;
  }
  const glyph = LETTER_GLYPHS[char];
  if (glyph) {
    CAMPUS_LETTERS.push({ d: glyph.d, x: cursorX });
    cursorX += glyph.w + 1.5;
  }
}

// ── Algorithmic Constellation Mesh (inside F and I letterforms) ────────────
function generateConstellation() {
  let seed = 27;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const grid: [number, number][][] = [];
  for (let r = 0; r < 10; r++) {
    const row: [number, number][] = [];
    for (let c = 0; c < 14; c++) {
      row.push([24 + c * 12 + (rand() - 0.5) * 10, 38 + r * 11 + (rand() - 0.5) * 9]);
    }
    grid.push(row);
  }
  let pathD = '';
  const dots: [number, number][] = [];
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 13; c++) {
      const p1 = grid[r][c];
      const p2 = grid[r][c + 1];
      const p3 = grid[r + 1][c];
      const p4 = grid[r + 1][c + 1];
      pathD += `M${p1[0]},${p1[1]}L${p2[0]},${p2[1]}L${p3[0]},${p3[1]}Z`;
      if (rand() > 0.3) {
        pathD += `M${p2[0]},${p2[1]}L${p4[0]},${p4[1]}L${p3[0]},${p3[1]}`;
      }
      if (rand() > 0.55) {
        dots.push(p1);
      }
    }
  }
  return { d: pathD, dots };
}

const CONSTELLATION = generateConstellation();

// ── The Framer Continuous Loading Component with Smooth Reveal ───────────
export const IntroLoader: React.FC<IntroLoaderProps> = ({
  onComplete,
  onTransitionStart,
  background = '#F6F3EB',
  ink = '#090B0B',
  accent = '#79CBDD',
  duration = 4.8,
  clubName = 'Fraternity of Young Innovators',
}) => {
  const rawId = useId();
  const uid = 'fyi_' + rawId.replace(/[^a-zA-Z0-9]/g, '');

  const refs = useRef<Record<string, SVGElement | HTMLElement | null>>({});
  const counterRef = useRef<HTMLSpanElement>(null);
  const phaseRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [isLifting, setIsLifting] = useState(false);
  const [isCompletedState, setIsCompletedState] = useState(false);

  const setRef = (key: string) => (el: SVGElement | HTMLElement | null) => {
    refs.current[key] = el;
  };

  const handleFinish = () => {
    if (isLifting) return;
    setIsLifting(true);
    onTransitionStart?.();
    // 950ms allows the curtain to wipe all the way up cleanly
    setTimeout(() => {
      onComplete();
    }, 950);
  };

  useEffect(() => {
    let animFrame: number;
    let cancelled = false;
    let startTime: number | null = null;
    let haloAnimation: Animation | null = null;

    const el = (k: string) => refs.current[k];
    const setAttr = (k: string, attr: string, val: string | number) => {
      el(k)?.setAttribute(attr, String(val));
    };
    const setOpacity = (k: string, opacity: number) => {
      const node = el(k);
      if (node) node.style.opacity = String(clamp01(opacity));
    };
    const setDash = (k: string, start: number, end: number) => {
      const s = clamp01(start);
      const e = clamp01(end);
      setAttr(k, 'stroke-dasharray', `${Math.max(0, s - e)} 1`);
      setAttr(k, 'stroke-dashoffset', -e);
    };

    // Main Framer Physics Engine (frame-by-frame)
    function renderPhysics(time: number) {
      const progress = (t1: number, t2: number) => clamp01((time - t1) / (t2 - t1));

      // 1. Monogram F, Y, I letters with Framer overshoot spring
      const letterConfigs = [
        ['f', 0.55, 1.65, 44, 86, -58, 32, -17],
        ['y', 1.1, 2.2, 108, 76, 0, -62, 22],
        ['i', 1.55, 2.7, 150, 86, 61, 25, 16],
      ] as const;

      for (const [key, tStart, tEnd, cx, cy, ox, oy, deg] of letterConfigs) {
        const d = progress(tStart, tEnd);
        const bo = backOut(d);
        const eo = easeOutQuart(d);
        setOpacity(key, smoothstep(d * 3));
        setAttr(
          key,
          'transform',
          `translate(${cx + ox * (1 - eo)} ${cy + oy * (1 - eo)}) rotate(${deg * (1 - eo)}) scale(${0.65 + bo * 0.35}) translate(${-cx} ${-cy})`
        );
        setAttr(`${key}Mask`, 'stroke-dashoffset', 1 - easeOutQuart(progress(tStart + 0.05, tEnd)));
      }

      // 2. Central Light Bulb
      const bulbProgress = easeOutQuart(progress(2.12, 3.12));
      setOpacity('bulb', smoothstep(progress(2.12, 2.62)));
      setAttr(
        'bulb',
        'transform',
        `translate(109 84) rotate(${-37 * (1 - bulbProgress)}) translate(${15 * (1 - bulbProgress)} ${-42 * (1 - bulbProgress)}) scale(${0.7 + 0.3 * backOut(progress(2.12, 3.12))}) translate(-109 -84)`
      );

      // 3. Filament Glow
      const filamentVal = easeOutQuart(progress(3.05, 3.85));
      setAttr('filament', 'stroke-dashoffset', 1 - filamentVal);
      setOpacity('filament', filamentVal);
      setOpacity('bulbShine', filamentVal * 0.55);

      // 4. Cyan Light Halo
      const haloEnter = easeOutQuart(progress(3.12, 4.05));
      const haloExit = easeOutQuart(progress(4.25, 5.65));
      const haloPulse = time > 6.15 ? Math.sin((time - 6.15) * 1.6) * 0.035 : 0;
      setOpacity('halo', haloEnter * (0.75 - haloExit * 0.54) + haloPulse);
      setAttr(
        'halo',
        'transform',
        `translate(98 107) scale(${0.6 + haloEnter * 0.6 + haloExit * 0.06}) translate(-98 -107)`
      );

      // 5. Light Ring Ripple
      const ringExpand = easeOutQuart(progress(3.4, 4.8));
      setOpacity('ring', smoothstep(progress(3.4, 3.65)) * (1 - smoothstep(progress(3.7, 4.8))) * 0.45);
      setAttr('ring', 'r', 17 + ringExpand * 45);

      // 6. Rays
      const raysVal = easeOutQuart(progress(3.2, 3.95));
      setOpacity('rays', raysVal * (1 - smoothstep(progress(4, 5.4))));
      setAttr('rays', 'transform', `translate(99 107) scale(${0.8 + raysVal * 0.3}) translate(-99 -107)`);

      // 7. Paper Blob & Campus "VIT BHOPAL" Stamp
      setOpacity('blob', smoothstep(progress(2.5, 3.6)));
      const campusVal = easeOutQuart(progress(2.65, 3.65));
      setOpacity('campus', campusVal);
      setAttr('campus', 'transform', `translate(0 ${10 * (1 - campusVal)})`);

      // 8. Overall subtle scale settle
      const wholeScale = 1 - 0.035 * smoothstep(progress(4.1, 5.6));
      setAttr('whole', 'transform', `translate(100 100) scale(${wholeScale}) translate(-100 -100)`);

      // 9. Kinetic Energy Ribbons
      const r1 = easeOutQuart(progress(0.05, 2.75));
      const r2 = easeOutQuart(progress(0.48, 3.1));
      setDash('ribbon', r1, r2);
      setOpacity('ribbon', (1 - smoothstep(progress(2.65, 3.15))) * 0.85);

      const s1 = smoothstep(progress(4.15, 5.65));
      const s2 = smoothstep(progress(4.55, 6.1));
      setDash('sweep', s1, s2);
      setOpacity('sweep', 0.24 * (1 - smoothstep(progress(5.65, 6.15))));
      setAttr('sweep', 'stroke-width', 80 + 160 * smoothstep(progress(4.2, 5.6)));

      // 10. Digital Progress Counter & Narrative Slogans
      const pct = Math.min(100, Math.floor(100 * (1 - Math.pow(1 - clamp01(time / 5.2), 1.7))));
      if (counterRef.current) counterRef.current.textContent = String(pct).padStart(2, '0');
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;

      if (phaseRef.current) {
        phaseRef.current.textContent =
          time < 1.8
            ? 'CONNECTING YOUNG MINDS'
            : time < 2.9
            ? 'FINDING THE SPARK'
            : time < 4.8
            ? 'IGNITING IDEAS'
            : 'LET THERE BE IDEAS';
      }
    }

    // Set initial layout
    if (refs.current.svg) {
      refs.current.svg.style.opacity = '1';
    }
    renderPhysics(0);

    const step = (timestamp: number) => {
      if (cancelled) return;
      if (!startTime) startTime = timestamp;
      const elapsed = ((timestamp - startTime) / 1000) * (6.4 / Math.max(3, duration));

      renderPhysics(elapsed);

      if (elapsed < 6.0) {
        animFrame = requestAnimationFrame(step);
      } else {
        renderPhysics(6.4);
        setIsCompletedState(true);
        const haloEl = el('halo');
        if (haloEl && typeof haloEl.animate === 'function') {
          haloAnimation = haloEl.animate(
            [{ opacity: '0.16' }, { opacity: '0.24' }, { opacity: '0.16' }],
            { duration: 2800, iterations: Infinity, easing: 'ease-in-out' }
          );
        }
        // Satisfying 400ms pause on completed 100% state before seamless curtain lift
        setTimeout(() => {
          handleFinish();
        }, 450);
      }
    };

    animFrame = requestAnimationFrame(step);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animFrame);
      haloAnimation?.cancel();
    };
  }, [duration]);

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Loading animation"
      className="fixed inset-0 z-[99999] flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden bg-paper-noise"
      style={{
        backgroundColor: background,
        color: ink,
        transform: isLifting ? 'translateY(-100%)' : 'translateY(0%)',
        borderBottom: isLifting ? '4px solid #111111' : 'none',
        boxShadow: isLifting ? '0 30px 80px rgba(0,0,0,0.35)' : 'none',
        transition: 'transform 0.9s cubic-bezier(0.77, 0, 0.175, 1)',
        willChange: 'transform',
        pointerEvents: isLifting ? 'none' : 'auto',
      }}
    >
      {/* ── Top Bar ────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between font-mono text-[11px] font-bold tracking-widest uppercase z-10 transition-opacity duration-300"
        style={{ opacity: isLifting ? 0 : 1 }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: accent, animation: 'pulse 1.8s ease-in-out infinite' }}
          />
          <span className="tracking-widest">{clubName} • VIT BHOPAL</span>
        </div>
      </div>

      {/* ── Center SVG Canvas — 100% Framer Motion Vector Asset ── */}
      <div
        className="flex items-center justify-center my-auto transition-transform duration-700 ease-out"
        style={{
          transform: isLifting ? 'translateY(50px) scale(0.96)' : 'translateY(0) scale(1)',
          opacity: isLifting ? 0.4 : 1,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease',
        }}
      >
        <div
          style={{
            width: 'min(62vw, 410px)',
            aspectRatio: '1 / 1',
            position: 'relative',
            marginTop: -12,
          }}
        >
          <svg
            ref={setRef('svg')}
            viewBox="0 0 200 200"
            role="img"
            aria-label="FYI — Fraternity of Young Innovators, VIT Bhopal"
            style={{ width: '100%', height: '100%', overflow: 'visible', display: 'block', opacity: 0 }}
          >
            <defs>
              <clipPath id={`${uid}f`}>
                <path d={F_PATH} />
              </clipPath>
              <clipPath id={`${uid}y`}>
                <path d={Y_PATH} />
              </clipPath>
              <clipPath id={`${uid}i`}>
                <path d={I_PATH} />
              </clipPath>
              <clipPath id={`${uid}bulb`}>
                <path d={BULB_PATH} />
              </clipPath>
              <radialGradient id={`${uid}halo`}>
                <stop stopColor={accent} stopOpacity="0.7" />
                <stop offset="0.3" stopColor={accent} stopOpacity="0.35" />
                <stop offset="1" stopColor={accent} stopOpacity="0" />
              </radialGradient>
              <mask id={`${uid}fm`} maskUnits="userSpaceOnUse" x="-100" y="-100" width="400" height="400">
                <path
                  ref={setRef('fMask')}
                  d="M44 127V63H85H44V88H82"
                  fill="none"
                  stroke="white"
                  strokeWidth="29"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="0"
                />
              </mask>
              <mask id={`${uid}ym`} maskUnits="userSpaceOnUse" x="-100" y="-100" width="400" height="400">
                <path
                  ref={setRef('yMask')}
                  d="M78 18L109 76L129 54L109 76L116 133"
                  fill="none"
                  stroke="white"
                  strokeWidth="29"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="0"
                />
              </mask>
              <mask id={`${uid}im`} maskUnits="userSpaceOnUse" x="-100" y="-100" width="400" height="400">
                <path
                  ref={setRef('iMask')}
                  d="M136 60H168H150V113H133H170"
                  fill="none"
                  stroke="white"
                  strokeWidth="25"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset="0"
                />
              </mask>
            </defs>

            {/* Sweep Background Ribbon */}
            <path
              ref={setRef('sweep')}
              d="M-480 420C-260 420-130-160 90-90C320-30 255 310 660 120"
              fill="none"
              stroke={accent}
              pathLength={1}
              strokeWidth={150}
              strokeLinecap="round"
              strokeDasharray="0 1"
              opacity="0"
            />

            {/* Accent Energy Ribbon */}
            <path
              ref={setRef('ribbon')}
              d="M-500 115C-270-180-70 280 30 124C58 78 67 74 104 85C173 106 250-80 400 40C500 120 570 160 700 70"
              fill="none"
              stroke={accent}
              pathLength={1}
              strokeWidth={2.6}
              strokeLinecap="round"
              strokeDasharray="0 1"
              opacity="0"
            />

            <g ref={setRef('whole')}>
              {/* Paper Blob */}
              <path ref={setRef('blob')} d={BLOB_PATH} fill="#EEEEED" />

              {/* Cyan Glow Halo */}
              <g ref={setRef('halo')} opacity="0.2">
                <circle cx="98" cy="107" r="61" fill={`url(#${uid}halo)`} />
              </g>

              {/* F Glyph + Constellation */}
              <g ref={setRef('f')} mask={`url(#${uid}fm)`}>
                <path d={F_PATH} fill={ink} />
                <g clipPath={`url(#${uid}f)`}>
                  <path d={CONSTELLATION.d} fill="none" stroke="#D0D4D1" strokeWidth="0.2" opacity="0.19" />
                  {CONSTELLATION.dots.map((pt, idx) => (
                    <circle key={idx} cx={pt[0]} cy={pt[1]} r="0.45" fill="#E4E9E5" opacity="0.24" />
                  ))}
                </g>
                <path d="M33 76L37 74L36 80Z" fill={background} />
                <path d="M59 51L62 55L65 50Z" fill={background} opacity="0.8" />
              </g>

              {/* Y Glyph */}
              <g ref={setRef('y')} mask={`url(#${uid}ym)`}>
                <path d={Y_PATH} fill={ink} />
                <path d="M122 55L132 51L131 59L126 57Z" fill="#D9CDBD" />
              </g>

              {/* I Glyph + Constellation */}
              <g ref={setRef('i')} mask={`url(#${uid}im)`}>
                <path d={I_PATH} fill={ink} />
                <g clipPath={`url(#${uid}i)`}>
                  <path d={CONSTELLATION.d} fill="none" stroke="#D0D4D1" strokeWidth="0.2" opacity="0.19" />
                  {CONSTELLATION.dots.map((pt, idx) => (
                    <circle key={idx} cx={pt[0]} cy={pt[1]} r="0.45" fill="#E4E9E5" opacity="0.24" />
                  ))}
                </g>
                <path d="M143 52L146 55L150 51Z" fill={background} />
                <path d="M161 68L163 65L166 69Z" fill={background} opacity="0.8" />
              </g>

              {/* Light Bulb & Glowing Filament */}
              <g ref={setRef('bulb')}>
                <g transform="rotate(29 109 84)">
                  <path d={BULB_PATH} fill={accent} />
                  <g clipPath={`url(#${uid}bulb)`}>
                    <path
                      d="M104 85L101 107L94 114L105 127M115 85L112 104L119 116L105 127M92 99L112 104L94 114L119 116M101 107L119 116M105 127L112 104M92 99L101 107L112 104"
                      fill="none"
                      stroke="#F4FEFF"
                      strokeWidth="0.45"
                      opacity="0.65"
                    />
                    <circle cx="101" cy="107" r="0.8" fill="#F9FEFF" />
                    <circle cx="112" cy="104" r="0.8" fill="#F9FEFF" />
                    <circle cx="94" cy="114" r="0.7" fill="#F9FEFF" />
                    <ellipse
                      ref={setRef('bulbShine')}
                      cx="101"
                      cy="100"
                      rx="6"
                      ry="15"
                      fill="white"
                      opacity="0.12"
                      transform="rotate(28 101 100)"
                    />
                  </g>
                  <path d="M104 71H115V85H104Z" fill="#C2C8C5" />
                  <path d="M103 74L116 77M103 78L116 81M104 82L115 85" stroke="#FAFAF8" strokeWidth="1.3" />
                  <path d="M106 69H113V72H106Z" fill="#6E7772" />
                  <path
                    ref={setRef('filament')}
                    d="M107 87L104 105L109 114L114 104L112 87M104 105L114 104"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    strokeDasharray="1"
                    strokeDashoffset="0"
                  />
                </g>
              </g>

              {/* Spark Rays */}
              <g
                ref={setRef('rays')}
                stroke={accent}
                fill="none"
                strokeWidth="1.1"
                strokeLinecap="round"
                opacity="0"
              >
                <path d="M75 96L69 93M73 115L66 117M84 130L80 136M102 136L103 142M120 126L125 131M125 105L133 103" />
              </g>

              {/* Ripple Ring */}
              <circle
                ref={setRef('ring')}
                cx="98"
                cy="107"
                r="17"
                fill="none"
                stroke={accent}
                strokeWidth="0.7"
                opacity="0"
              />

              {/* Campus Monogram: VIT BHOPAL */}
              <g ref={setRef('campus')} transform="translate(0 0)" fill={ink}>
                {CAMPUS_LETTERS.map((item, idx) => (
                  <path key={idx} d={item.d} fillRule="evenodd" transform={`translate(${item.x} 137) scale(1 1.13)`} />
                ))}
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* ── Bottom Progress & Slogan ───────────────────────────── */}
      <div
        className="w-full max-w-2xl sm:max-w-3xl mx-auto px-4 z-10 transition-opacity duration-300"
        style={{ opacity: isLifting ? 0 : 1 }}
      >
        <div className="flex justify-between items-center gap-4 mb-3 font-mono text-xs sm:text-sm font-bold uppercase tracking-widest">
          <span
            ref={phaseRef}
            className={`transition-colors duration-300 ${isCompletedState ? 'text-brand-orange font-black' : 'text-[#FF4800]'}`}
          >
            CONNECTING YOUNG MINDS
          </span>
          <span className="tabular-nums whitespace-nowrap font-black tracking-wider text-sm sm:text-base">
            <span ref={counterRef}>00</span>
            <span className="opacity-40 ml-1.5 font-normal text-xs sm:text-sm">/ 100</span>
          </span>
        </div>
        <div className="w-full h-1 sm:h-1.5 bg-primary/15 overflow-hidden rounded-full">
          <div
            ref={barRef}
            className="w-full h-full bg-primary origin-left transition-transform duration-75"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </aside>
  );
};
