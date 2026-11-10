import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { submitCohortApplication, ApplicationResult } from './join.service';
import type { JoinApplication } from '../../types';
import { CLUB_META } from '../../data/clubData';

export const JoinPage: React.FC = () => {
  const [formData, setFormData] = useState<Omit<JoinApplication, 'createdAt'>>({
    name: '',
    email: '',
    regNumber: '',
    githubOrPortfolio: '',
    guildInterest: 'Software',
    aboutYou: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ApplicationResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await submitCohortApplication({
        ...formData,
        createdAt: new Date().toISOString(),
      });
      setResult(res);
    } catch (err: any) {
      setErrorMsg(err.message || 'Error transmitting application. Please retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <PageHeader
        tag="06 • COHORT 2025 ADMISSIONS"
        badge="ROLLING SUBMISSIONS"
        title="APPLY TO JOIN THE GUILD"
        subtitle="No memorized syntax trivia. Tell us what you build, break, or solder late into the night."
      />

      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form Area */}
          <div className="lg:col-span-7 bg-white border-2 border-primary brutal-shadow-lg p-6 sm:p-10">
            {result ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-brand-cyan border-2 border-primary brutal-shadow-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl font-black">check</span>
                </div>
                <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-1">
                  [APPLICATION CONFIRMED • ID: {result.id.slice(0, 10)}]
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-black uppercase text-primary mb-3">
                  TRANSMISSION RECEIVED
                </h2>
                <p className="font-body text-base text-primary mb-6 max-w-md mx-auto leading-relaxed">
                  {result.message}
                </p>
                <div className="p-4 bg-[#F6F3EB] border border-primary font-mono text-xs mb-6 text-left">
                  <div className="font-bold text-primary mb-1">REGISTERED DATA:</div>
                  <div>Applicant: {formData.name} ({formData.regNumber})</div>
                  <div>Wing: {formData.guildInterest} Wing</div>
                  <div>Status: Queued for Lead Architect Review</div>
                </div>
                <button
                  onClick={() => {
                    setResult(null);
                    setFormData({
                      name: '',
                      email: '',
                      regNumber: '',
                      githubOrPortfolio: '',
                      guildInterest: 'Software',
                      aboutYou: '',
                    });
                  }}
                  className="bg-primary text-white hover:bg-brand-orange font-mono text-xs font-black uppercase tracking-wider px-6 py-3 border-2 border-primary brutal-shadow transition-all"
                >
                  SUBMIT ANOTHER TRANSMISSION ↗
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-8 pb-4 border-b-2 border-primary">
                  <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
                    // FRESHMEN &amp; SOPHOMORES WELCOME
                  </span>
                  <h2 className="font-headline text-3xl font-black uppercase text-primary">
                    CANDIDATE DOSSIER
                  </h2>
                </div>

                {errorMsg && (
                  <div className="mb-6 p-4 bg-red-100 border-2 border-red-600 text-red-900 font-mono text-xs font-bold">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono text-xs">
                  <div>
                    <label className="block font-bold uppercase text-primary mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold uppercase text-primary mb-1">
                        COLLEGE EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="first.2024@vitbhopal.ac.in"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-bold uppercase text-primary mb-1">
                        REGISTRATION NUMBER *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 24BCE10042"
                        value={formData.regNumber}
                        onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                        className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-primary mb-1">
                      PRIMARY WING INTEREST *
                    </label>
                    <select
                      value={formData.guildInterest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          guildInterest: e.target.value as JoinApplication['guildInterest'],
                        })
                      }
                      className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange"
                    >
                      <option value="Software">Software &amp; Systems (Rust, TypeScript, Mesh Networking)</option>
                      <option value="Hardware">Hardware &amp; Autonomous (STM32, ROS 2, PCB Layout)</option>
                      <option value="Design & Creative">Design &amp; Creative (WebGL Shaders, 3D, Brutalist Editorial)</option>
                      <option value="Ecosystem & Growth">Ecosystem &amp; Hackathons (Bounties, Seed Grants)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-primary mb-1">
                      GITHUB / PORTFOLIO / SCHEMATICS LINK *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="github.com/yourhandle or live URL"
                      value={formData.githubOrPortfolio}
                      onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
                      className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase text-primary mb-1">
                      WHAT IS SOMETHING IMPRACTICAL YOU WANT TO BUILD?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="e.g. A localized P2P chat that transmits over audio frequencies in lecture halls..."
                      value={formData.aboutYou}
                      onChange={(e) => setFormData({ ...formData, aboutYou: e.target.value })}
                      className="w-full bg-[#F6F3EB] border-2 border-primary p-3 font-mono text-sm focus:outline-none focus:bg-white focus:border-brand-orange transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full magnetic-btn btn-elastic bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary p-4 font-mono font-black text-sm uppercase tracking-wider border-2 border-primary brutal-shadow transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'TRANSMITTING DOSSIER...' : 'SUBMIT APPLICATION TO GUILD ↗'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Right Rules & Comms Area */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#EBE7DC] border-2 border-primary brutal-shadow p-6">
              <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">
                • THE EVALUATION CRITERIA
              </span>
              <h3 className="font-headline text-2xl font-black uppercase text-primary mb-4">
                WHAT WE ACTUALLY CARE ABOUT
              </h3>

              <div className="flex flex-col gap-3 font-body text-xs sm:text-sm">
                <div className="bg-white p-3 border border-primary">
                  <span className="text-brand-orange font-bold font-mono block mb-0.5">✅ WE CARE ABOUT:</span>
                  Obsessive curiosity, building things unprompted, staying up late to fix weird compiler bugs.
                </div>
                <div className="bg-white p-3 border border-primary">
                  <span className="text-primary font-bold font-mono block mb-0.5">❌ WE DO NOT CARE ABOUT:</span>
                  CGPA numbers, corporate resume templates, or stockpiled online certificate badges.
                </div>
              </div>
            </div>

            <div className="bg-brand-yellow border-2 border-primary brutal-shadow p-6">
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-widest block mb-1">
                • DIRECT COMMS &amp; SOCIALS
              </span>
              <h4 className="font-headline text-xl font-black uppercase mb-2">CONNECT DIRECTLY</h4>
              <p className="font-body text-xs text-primary mb-4">
                Reach out to the team directly on our official inbox or visit our official handles.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={CLUB_META.socials.email}
                  className="inline-flex items-center justify-between bg-primary text-white hover:bg-brand-orange font-mono text-xs font-bold px-4 py-2 border border-black uppercase transition-colors"
                >
                  <span>{CLUB_META.email}</span>
                  <span>↗</span>
                </a>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={CLUB_META.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs bg-white text-primary border border-primary px-3 py-1 font-bold hover:bg-brand-orange hover:text-white transition-all uppercase"
                  >
                    Instagram @fyivitbhopal ↗
                  </a>
                  <a
                    href={CLUB_META.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs bg-white text-primary border border-primary px-3 py-1 font-bold hover:bg-brand-yellow transition-all uppercase"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href={CLUB_META.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs bg-white text-primary border border-primary px-3 py-1 font-bold hover:bg-brand-cyan transition-all uppercase"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

