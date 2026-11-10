import React from 'react';
import { TEAM_MEMBERS } from '../../../data/clubData';
import { Link } from 'react-router-dom';

export const GuildTeam: React.FC = () => {
  // Feature the President, Vice President, Technical Lead, and Design Lead on the homepage.
  const featuredMembers = TEAM_MEMBERS.slice(0, 4);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-20 border-b-2 border-primary reveal-on-scroll" id="guild">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b-2 border-primary gap-4">
        <div>
          <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
            05 • ARCHITECTS &amp; SQUADS
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-primary">
            OUR CORE BUILDERS
          </h2>
        </div>
        <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-sm">
          No corporate titles. President, Vice President &amp; 6 functional squads of student builders.
        </p>
      </div>

      {/* 4 Featured Leadership Cards with 3D Perspective Tilt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {featuredMembers.map((member, idx) => (
          <div
            key={member.id}
            data-tilt
            data-tilt-max="7"
            className="bg-white border-2 border-primary brutal-shadow p-5 flex flex-col group hover:-translate-y-1 transition-transform cursor-pointer relative"
          >
            {/* Tactical Corner Crosshair */}
            <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>

            {/* Avatar Box */}
            <div
              className={`w-full aspect-square ${member.avatarBg} border-2 border-primary rounded-sm mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform`}
            >
              <span className={`font-headline text-5xl font-black ${member.textColor}`}>
                {member.initials}
              </span>
              <div
                className={`absolute bottom-1.5 left-1.5 ${member.roleBg} font-mono text-[9px] font-black px-1.5 py-0.5 border border-primary`}
              >
                {member.roleTag}
              </div>
            </div>

            <span
              className={`font-headline text-xl font-black uppercase text-primary ${
                idx === 1 ? 'group-hover:text-brand-cyan' : 'group-hover:text-brand-orange'
              } transition-colors`}
            >
              {member.name}
            </span>
            <span
              className={`font-mono text-xs font-bold uppercase mb-2 ${
                idx === 1 || idx === 3 ? 'text-primary' : 'text-brand-orange'
              }`}
            >
              {member.specialty}
            </span>

            <div className="bg-[#F6F3EB] border border-primary p-2 font-mono text-[11px] text-primary mb-4">
              {member.quote}
            </div>

            <div className="mt-auto font-mono text-xs text-brand-muted flex items-center justify-between border-t border-primary/20 pt-2">
              <span>{member.handle}</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_outward
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Squads Link */}
      <div className="flex justify-center">
        <Link
          to="/team"
          className="magnetic-btn btn-elastic inline-flex items-center gap-2 bg-primary text-white hover:bg-brand-orange font-mono text-xs font-black uppercase px-8 py-4 border-2 border-primary brutal-shadow transition-all rounded"
        >
          <span>VIEW ALL 14 BUILDERS &amp; 6 FUNCTIONAL TEAMS</span>
          <span className="text-sm">↗</span>
        </Link>
      </div>
    </section>
  );
};
