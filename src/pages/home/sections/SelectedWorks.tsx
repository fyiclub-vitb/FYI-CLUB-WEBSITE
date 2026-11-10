import React from 'react';
import { PROJECTS } from '../../../data/clubData';
import { Link } from 'react-router-dom';

export const SelectedWorks: React.FC = () => {
  return (
    <section className="w-full bg-[#EBE7DC] py-20 border-b-2 border-primary" id="selected-works">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-primary gap-4">
          <div>
            <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
              • BUILDS &amp; EXPERIMENTS
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary">
              FEATURED BUILDS
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-sm">
            Zero fake screenshots. We only showcase working software and hardware once tested and shipped.
          </p>
        </div>

        {/* Notice for Preview / Dummy Content */}
        <div className="mb-8 p-3.5 bg-brand-yellow/30 border-2 border-primary rounded-xl brutal-shadow-sm flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-black uppercase text-primary">
              [PREVIEW BUILDS • DUMMY CONTENT]
            </span>
            <span className="text-brand-muted hidden sm:inline">
              — Sample builds shown for visual layout preview.
            </span>
          </div>
          <Link to="/projects" className="font-black text-brand-orange hover:underline uppercase shrink-0">
            VIEW ALL BUILDS ↗
          </Link>
        </div>

        {/* Project Cards Stack with Two26 3D Perspective Tilt */}
        <div className="flex flex-col gap-10">
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              data-tilt
              data-tilt-max="5"
              className="bg-white border-2 border-primary brutal-shadow-lg p-6 sm:p-8 hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
            >
              {/* Two26 Tactical Corner Crosshairs */}
              <div className="absolute top-2 left-2 font-mono text-[10px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>
              <div className="absolute top-2 right-2 font-mono text-[10px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>
              <div className="absolute bottom-2 left-2 font-mono text-[10px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>
              <div className="absolute bottom-2 right-2 font-mono text-[10px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Specs & Description */}
                <div className="lg:col-span-6 flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-brand-yellow text-primary border border-primary font-mono text-[10px] font-black px-2 py-0.5 uppercase rounded-sm">
                      [DUMMY DEMO]
                    </span>
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`${
                          tIdx === 0
                            ? 'bg-primary text-white'
                            : tIdx === 1
                            ? 'bg-brand-cyan text-primary border border-primary'
                            : 'bg-surface text-primary border border-primary'
                        } font-mono text-xs font-bold px-2.5 py-1 uppercase rounded-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-wider mb-1">
                    CASE STUDY {proj.number}
                  </span>
                  <h3 className="font-headline text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 text-primary group-hover:text-brand-orange transition-colors">
                    {proj.title}
                  </h3>
                  <p className="font-body text-base text-primary mb-6 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 bg-[#F6F3EB] border-2 border-primary brutal-shadow-sm mb-6">
                    {proj.specs.map((spec, sIdx) => (
                      <div key={sIdx}>
                        <span className="font-mono text-[10px] text-brand-muted uppercase block font-bold">
                          {spec.label}
                        </span>
                        <span
                          className={`font-headline text-xl font-black ${
                            spec.highlight ? 'text-brand-orange' : 'text-primary'
                          }`}
                        >
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={proj.repoUrl || 'https://github.com/fyi-vitbhopal'}
                      target="_blank"
                      rel="noreferrer"
                      className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-primary text-white hover:bg-brand-orange font-mono text-xs font-black px-5 py-2.5 rounded border-2 border-primary brutal-shadow uppercase tracking-wider"
                    >
                      <span>GITHUB REPO</span>
                      <span className="material-symbols-outlined text-sm">terminal</span>
                    </a>
                    {proj.demoUrl && (
                      <a
                        href={proj.demoUrl}
                        className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-brand-cyan text-primary hover:bg-brand-yellow font-mono text-xs font-black px-5 py-2.5 rounded border-2 border-primary brutal-shadow uppercase tracking-wider"
                      >
                        <span>PREVIEW DEMO ↗</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Image Container */}
                <div className="lg:col-span-6">
                  <div className="w-full aspect-[16/10] bg-black border-2 border-primary rounded brutal-shadow overflow-hidden relative group/img">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 right-2 bg-brand-yellow border-2 border-primary font-mono text-xs font-bold px-2 py-0.5 text-primary">
                      {proj.version}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
