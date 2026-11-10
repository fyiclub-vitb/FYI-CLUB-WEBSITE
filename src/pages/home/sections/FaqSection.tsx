import React, { useState } from 'react';
import { FAQS } from '../../../data/clubData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 border-b-2 border-primary reveal-on-scroll" id="faq">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
            06 • STRAIGHT TALK
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary mb-4">
            THINGS YOU MIGHT ASK
          </h2>
          <p className="font-body text-base text-primary mb-6 leading-relaxed">
            No HR jargon, no bureaucratic gatekeeping. Straight answers to the questions freshmen and prospective builders ask us constantly.
          </p>
          <div className="inline-flex items-center gap-2 bg-brand-yellow p-3 border-2 border-primary brutal-shadow-sm self-start font-mono text-xs font-bold">
            <span className="material-symbols-outlined text-sm">mail</span>
            <span>Still confused? Reach out to chapter leads directly.</span>
          </div>
        </div>

        {/* Right Accordion Column */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="bg-white border-2 border-primary brutal-shadow">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left font-headline text-lg sm:text-xl font-black uppercase text-primary focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform">
                    {isOpen ? 'close' : 'add'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm font-body text-primary border-t-2 border-dashed border-primary">
                    <p className="pt-3 font-medium leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

