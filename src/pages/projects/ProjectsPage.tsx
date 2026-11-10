import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { PROJECTS } from '../../data/clubData';
import { Link } from 'react-router-dom';

export const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'SOFTWARE' | 'AI' | 'HARDWARE'>('ALL');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'ALL') return true;
    if (filter === 'SOFTWARE') return proj.id === 'aether-os';
    if (filter === 'AI') return proj.id === 'neurocanvas';
    if (filter === 'HARDWARE') return proj.id === 'pulsebotics';
    return true;
  });

  return (
    <div className="w-full">
      <PageHeader
        tag="02 • SHIPPED CODE &amp; HARDWARE"
        badge="OPEN SOURCE BY DEFAULT"
        title="OUR PHYSICAL &amp; DIGITAL BUILDS"
        subtitle="Exploring systems, WebGL shaders, and embedded robotics. Real student projects and concept previews."
      />

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Notice of Dummy / Preview Content */}
        <div className="mb-8 p-4 bg-brand-yellow/30 border-2 border-primary rounded-xl brutal-shadow-sm flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="font-black uppercase text-primary">
              [PREVIEW ARCHIVE • DUMMY CONTENT]
            </span>
            <span className="text-brand-muted hidden sm:inline">
              — Sample project prototypes shown for layout simulation. Cohort 2025 builds are in development.
            </span>
          </div>
          <Link to="/join" className="font-black text-brand-orange hover:underline uppercase shrink-0">
            SUBMIT A BUILD ↗
          </Link>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-primary">
          {(['ALL', 'SOFTWARE', 'AI', 'HARDWARE'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`font-mono text-xs font-black uppercase px-4 py-2 border-2 border-primary transition-all ${
                filter === tab
                  ? 'bg-brand-orange text-white brutal-shadow-sm -translate-y-0.5'
                  : 'bg-white text-primary hover:bg-brand-yellow'
              }`}
            >
              {tab === 'ALL' ? 'ALL ARTIFACTS' : `${tab} WING`}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="flex flex-col gap-12">
          {filteredProjects.map((proj) => (
            <article
              key={proj.id}
              className="bg-white border-2 border-primary brutal-shadow-lg p-6 sm:p-10 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-brand-yellow text-primary border border-primary font-mono text-[10px] font-black px-2 py-0.5 uppercase rounded-sm">
                      [DUMMY / PREVIEW]
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
                    // CASE STUDY {proj.number}
                  </span>
                  <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase tracking-tight mb-3 text-primary group-hover:text-brand-orange transition-colors">
                    {proj.title}
                  </h2>
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

        {/* Propose a build banner */}
        <div className="mt-16 bg-[#EBE7DC] border-2 border-primary brutal-shadow p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
              // HAVE AN AMBITIOUS CONCEPT?
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-primary">
              BRING YOUR PROTOTYPE TO FYI GUILD
            </h3>
            <p className="font-body text-sm text-primary mt-1">
              We provide dev boards, pair you with student engineers, and help ship working builds.
            </p>
          </div>
          <Link
            to="/join"
            className="shrink-0 bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary font-mono text-xs font-black uppercase tracking-wider px-6 py-3.5 border-2 border-primary brutal-shadow transition-all"
          >
            PITCH A PROJECT ↗
          </Link>
        </div>
      </section>
    </div>
  );
};
