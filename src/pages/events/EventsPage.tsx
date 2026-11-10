import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { EVENTS, ACTIVITIES } from '../../data/clubData';
import { JoinModal } from '../../components/common/JoinModal';

export const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <div className="w-full">
      <PageHeader
        tag="03 • SESSIONS & HACKATHONS"
        badge="STUDENTS ONLY"
        title="GATHERINGS, SHIPATHONS & DEPLOYS"
        subtitle="Claim your pass to our 36-hour sprint runs, bare-metal shader masterclasses, and rural field deployments."
      />

      {/* Upcoming Passes */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14 border-b-2 border-primary">
        <div className="mb-8 pb-3 border-b-2 border-primary">
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
            UPCOMING RUNS 2024–2025
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-primary">
            CLAIM A PERFORATED PASS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white border-2 border-primary brutal-shadow-md flex flex-col justify-between hover:-translate-y-1 transition-transform relative group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${event.tagBg} font-mono text-[11px] font-black px-2 py-0.5 rounded-sm uppercase`}>
                    {event.tag}
                  </span>
                  <span className={`font-mono text-sm font-black border border-primary px-1.5 py-0.5 ${event.dateBg}`}>
                    {event.date}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-black uppercase mb-2 text-primary group-hover:text-brand-orange transition-colors">
                  {event.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-brand-muted leading-relaxed mb-4">
                  {event.description}
                </p>
              </div>

              <div className="p-4 bg-[#F6F3EB] border-t-2 border-dashed border-primary flex items-center justify-between font-mono text-xs">
                <span className="text-brand-muted font-bold">{event.location}</span>
                <button
                  onClick={() => setSelectedEvent(event.title)}
                  className="font-black text-brand-orange hover:underline uppercase flex items-center gap-1"
                >
                  <span>CLAIM PASS ↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sprint Methodologies */}
      <section className="w-full bg-[#EBE7DC] py-16 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 pb-4 border-b-2 border-primary">
            <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
              // HOW WE ORGANIZE SPRINTS
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-primary">
              OUR 4 SPRINT ARCHITECTURES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.map((act) => (
              <div key={act.id} className="bg-white border-2 border-primary brutal-shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3 border-b-2 border-primary pb-2">
                    <span className="font-mono text-xs font-black uppercase text-brand-orange">
                      SPRINT {act.number}
                    </span>
                    <span className="material-symbols-outlined">{act.icon}</span>
                  </div>
                  <h3 className="font-headline text-xl font-black uppercase mb-2 text-primary">
                    {act.title}
                  </h3>
                  <p className="font-body text-xs text-brand-muted mb-4">{act.description}</p>
                </div>
                <div className="bg-[#F6F3EB] p-2 font-mono text-xs font-bold border border-primary">
                  <span className="text-[10px] text-brand-muted block">CYCLE FORMAT:</span>
                  {act.format}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Modal */}
      {selectedEvent && (
        <JoinModal
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          prefilledEvent={selectedEvent}
        />
      )}
    </div>
  );
};

