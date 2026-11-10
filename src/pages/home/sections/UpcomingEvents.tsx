import React from 'react';
import { EVENTS } from '../../../data/clubData';

interface UpcomingEventsProps {
  onClaimPass: (eventTitle: string) => void;
}

export const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ onClaimPass }) => {
  return (
    <section className="w-full bg-[#EBE7DC] py-20 border-b-2 border-primary" id="upcoming-events">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-primary gap-4">
          <div>
            <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
              • GATHERINGS &amp; WORK SESSIONS
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary">
              UPCOMING RUNS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-sm">
            Hands-on work sessions, whitepaper teardowns, and sprint nights on the VIT Bhopal campus.
          </p>
        </div>

        {/* Preview Notice */}
        <div className="mb-6 p-3 bg-brand-cyan/20 border-2 border-primary rounded-xl brutal-shadow-sm flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="font-black uppercase text-primary">
              [SAMPLE SCHEDULE • DUMMY CONTENT]
            </span>
            <span className="text-brand-muted hidden sm:inline">
              — Sample event schedule for layout preview. Official 2025 calendar dates will be announced soon.
            </span>
          </div>
          <button
            onClick={() => onClaimPass('Cohort 2025 Event Updates')}
            className="font-black text-brand-orange hover:underline uppercase shrink-0"
          >
            NOTIFY ME ↗
          </button>
        </div>

        {/* 3 Ticket Columns with Two26 3D Perspective Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event, idx) => (
            <div
              key={event.id}
              data-tilt
              data-tilt-max="6"
              className="bg-white border-2 border-primary brutal-shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform relative group cursor-pointer"
            >
              {/* Tactical Corner Crosshair */}
              <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${event.tagBg} font-mono text-[11px] font-black px-2 py-0.5 rounded-sm uppercase`}>
                    {event.tag}
                  </span>
                  <span className={`font-mono text-sm font-black border border-primary px-1.5 py-0.5 ${event.dateBg}`}>
                    {event.date}
                  </span>
                </div>
                <h3
                  className={`font-headline text-2xl font-black uppercase mb-2 text-primary ${
                    idx === 0
                      ? 'group-hover:text-brand-orange'
                      : idx === 1
                      ? 'group-hover:text-brand-cyan'
                      : 'group-hover:text-brand-orange'
                  } transition-colors`}
                >
                  {event.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>

              {/* Perforated ticket edge with cutout notches */}
              <div className="p-4 bg-[#F6F3EB] border-t-2 border-dashed border-primary flex items-center justify-between font-mono text-xs relative">
                <div className="absolute -left-2 -top-2 w-4 h-4 bg-[#EBE7DC] border-r-2 border-primary rounded-full" />
                <div className="absolute -right-2 -top-2 w-4 h-4 bg-[#EBE7DC] border-l-2 border-primary rounded-full" />

                <span className="font-bold text-primary">{event.location}</span>
                <button
                  onClick={() => onClaimPass(event.title)}
                  className="magnetic-btn btn-elastic font-mono text-xs font-black bg-primary text-white hover:bg-brand-orange hover:text-white px-3 py-1.5 border border-primary uppercase tracking-wider"
                >
                  CLAIM PASS ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
