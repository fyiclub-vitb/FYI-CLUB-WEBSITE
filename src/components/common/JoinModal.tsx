import React, { useEffect, useState } from 'react';
import { submitJoinApplication } from '../../lib/firebase';
import type { JoinApplication } from '../../types';
import { CURRENT_COHORT, getAdmissionEmailPlaceholder } from '../../data/clubData';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEvent?: string;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose, prefilledEvent }) => {
  // Seed the optional answer from an event title when the modal first mounts with one.
  const [formData, setFormData] = useState<Omit<JoinApplication, 'createdAt'>>({
    name: '',
    email: '',
    regNumber: '',
    githubOrPortfolio: '',
    guildInterest: 'Software',
    aboutYou: prefilledEvent ? `Interested in event pass: ${prefilledEvent}` : '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<null | { id: string; source: string }>(null);

  useEffect(() => {
    if (!isOpen) return;
    setFormData((current) => ({
      ...current,
      aboutYou: prefilledEvent ? `Interested in event pass: ${prefilledEvent}` : '',
    }));
  }, [isOpen, prefilledEvent]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Keep the submit button locked while the application request is in flight.
    try {
      const res = await submitJoinApplication({
        ...formData,
        createdAt: new Date().toISOString(),
      });
      setSubmittedStatus({ id: res.id, source: res.source });
    } catch (err) {
      console.error(err);
      alert('Error submitting application. Please try again or email chapter@fyi-vitbhopal.tech directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-[#F6F3EB] border-4 border-primary brutal-shadow-lg p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 bg-white border-2 border-primary hover:bg-brand-orange hover:text-white brutal-shadow-sm font-bold"
          aria-label="Close modal"
        >
          <span className="material-symbols-outlined block text-lg">close</span>
        </button>

        {submittedStatus ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-brand-cyan border-2 border-primary brutal-shadow-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-3xl text-primary font-black">check</span>
            </div>
            <span className="font-mono text-xs font-bold text-brand-orange uppercase block mb-1">
              [TRANSMISSION RECEIVED • APPLICATION LOGGED]
            </span>
            <h3 className="font-headline text-3xl font-black uppercase text-primary mb-3">
              YOU'RE ON THE RADAR.
            </h3>
            <p className="font-body text-base text-primary mb-6">
              Your application was received. A chapter lead will review your submission and follow up.
            </p>
            <button
              onClick={() => {
                setSubmittedStatus(null);
                onClose();
              }}
              className="bg-primary text-white hover:bg-brand-orange font-mono text-xs font-black uppercase tracking-wider px-6 py-3 border-2 border-primary brutal-shadow"
            >
              RETURN TO FYI ↗
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
                {CURRENT_COHORT} ADMISSIONS
              </span>
              <h3 className="font-headline text-3xl font-black uppercase text-primary leading-tight">
                APPLY TO JOIN FYI GUILD
              </h3>
              <p className="font-mono text-xs text-brand-muted mt-1">
                NO RESUME BUZZWORDS PERMITTED. Tell us what you build.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-xs">
              <div>
                <label className="block font-bold uppercase text-primary mb-1">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
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
                    placeholder={getAdmissionEmailPlaceholder('name')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase text-primary mb-1">
                    REGISTRATION NO. *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 24BCG10042"
                    value={formData.regNumber}
                    onChange={(e) => setFormData({ ...formData, regNumber: e.target.value })}
                    className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-primary mb-1">
                  PRIMARY GUILD WING *
                </label>
                <select
                  value={formData.guildInterest}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guildInterest: e.target.value as JoinApplication['guildInterest'],
                    })
                  }
                  className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
                >
                  <option value="Software">Software &amp; Systems (Rust, TypeScript, Go)</option>
                  <option value="Hardware">Hardware &amp; Robotics (STM32, ROS 2, PCB Design)</option>
                  <option value="Design & Creative">Design &amp; Creative (WebGL Shaders, 3D, Editorial)</option>
                  <option value="Ecosystem & Growth">Ecosystem &amp; Hackathons (Bounties, Grants, Ops)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold uppercase text-primary mb-1">
                  GITHUB / PORTFOLIO / SCHEMATICS LINK *
                </label>
                <input
                  type="text"
                  required
                  placeholder="github.com/yourhandle or portfolio url"
                  value={formData.githubOrPortfolio}
                  onChange={(e) => setFormData({ ...formData, githubOrPortfolio: e.target.value })}
                  className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-primary mb-1">
                  WHAT HAVE YOU BUILT OR BROKEN RECENTLY?
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about a project, a late-night debugging story, or something you want to build."
                  value={formData.aboutYou}
                  onChange={(e) => setFormData({ ...formData, aboutYou: e.target.value })}
                  className="w-full bg-white border-2 border-primary p-2.5 font-mono text-sm focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full magnetic-btn btn-elastic bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary p-3.5 font-mono font-black text-sm uppercase tracking-wider border-2 border-primary brutal-shadow transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT APPLICATION ↗'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

