import React from 'react';
import { ACTIVITIES } from '../../../data/clubData';

// Render the activity sprint cards from the shared club data.
export const ActivitiesGuilds: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 border-b-2 border-primary reveal-on-scroll" id="activities">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-primary gap-4">
        <div>
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
            02 • SKUNKWORKS SPRINTS
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary">
            OUR ACTIVITIES
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-md">
          From deconstructing RFC whitepapers to physical PCB etching. Operational curiosity only.
        </p>
      </div>

      {/* 4 Sprint Grid with 3D Tilt */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVITIES.map((sprint, idx) => {
          const isYellow = idx === 3;
          return (
            <div
              key={sprint.id}
              data-tilt
              data-tilt-max="7"
              className={`${
                isYellow ? 'bg-brand-yellow' : 'bg-white'
              } border-2 border-primary brutal-shadow p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-transform group cursor-pointer relative`}
            >
              {/* Tactical Corner Crosshair */}
              <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>

              <div>
                <div className="flex items-center justify-between mb-4 border-b-2 border-primary pb-2">
                  <span className={`font-mono text-xs font-black uppercase ${sprint.tagColor}`}>
                    SPRINT {sprint.number}
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:rotate-45 transition-transform">
                    {sprint.icon}
                  </span>
                </div>
                <h3
                  className={`font-headline text-2xl font-black uppercase mb-2 text-primary ${
                    idx === 0
                      ? 'group-hover:text-brand-orange'
                      : idx === 1
                      ? 'group-hover:text-brand-cyan'
                      : idx === 2
                      ? 'group-hover:text-brand-orange'
                      : ''
                  } transition-colors`}
                >
                  {sprint.title}
                </h3>
                <p
                  className={`font-body text-sm ${
                    isYellow ? 'text-primary font-medium' : 'text-brand-muted'
                  } mb-6`}
                >
                  {sprint.description}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-primary/20 flex items-center justify-between font-mono text-xs font-bold text-primary">
                <span>{sprint.format}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
