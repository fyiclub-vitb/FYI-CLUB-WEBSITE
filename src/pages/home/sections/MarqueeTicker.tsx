import React from 'react';

const TRACK_1 = [
  { text: "• CODE THAT RUNS", color: "text-brand-yellow" },
  { text: "• HARDWARE THAT MOVES", color: "text-white" },
  { text: "• TESTED ON CAMPUS WI-FI", color: "text-brand-cyan" },
  { text: "• ZERO CORPORATE FLUFF", color: "text-brand-orange" },
  { text: "• SHIP OR DIE", color: "text-white" },
  { text: "• 100% STUDENT PRODUCED", color: "text-brand-yellow" },
];

const TRACK_2 = [
  "RUST CRATES",
  "WASM MESH",
  "GLSL SHADERS",
  "STM32 BARE METAL",
  "ROS 2 AUTONOMY",
  "ONNX EDGE AI",
  "VIT BHOPAL",
  "LAB 02",
  "SEHORE TESTBED",
  "60 FPS WEBGL",
];

// Two duplicated tracks keep each CSS marquee continuous as the content loops.
export const MarqueeTicker: React.FC = () => {
  return (
    <div className="marquee-container w-full bg-primary text-white border-y-4 border-primary overflow-hidden select-none relative shadow-inner">
      {/* Top Track (Leftbound Bold Headlines) */}
      <div className="py-2.5 border-b border-white/10 overflow-hidden">
        <div className="animate-marquee gap-8 items-center whitespace-nowrap">
          {TRACK_1.map((s, idx) => (
            <span key={`t1-a-${idx}`} className={`font-headline text-lg sm:text-xl uppercase font-black tracking-tight ${s.color}`}>
              {s.text}
            </span>
          ))}
          {TRACK_1.map((s, idx) => (
            <span key={`t1-b-${idx}`} className={`font-headline text-lg sm:text-xl uppercase font-black tracking-tight ${s.color}`}>
              {s.text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Track (Rightbound Monospace Telemetry) */}
      <div className="py-1.5 bg-[#181818] overflow-hidden">
        <div className="animate-marquee-reverse gap-8 items-center whitespace-nowrap font-mono text-[11px] font-bold tracking-widest text-[#888888]">
          {TRACK_2.map((t, idx) => (
            <span key={`t2-a-${idx}`} className="inline-flex items-center gap-3">
              <span>{t}</span>
              <span className="text-brand-cyan">✦</span>
            </span>
          ))}
          {TRACK_2.map((t, idx) => (
            <span key={`t2-b-${idx}`} className="inline-flex items-center gap-3">
              <span>{t}</span>
              <span className="text-brand-cyan">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
