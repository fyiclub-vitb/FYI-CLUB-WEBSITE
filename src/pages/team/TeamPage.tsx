import React, { useState } from 'react';
import { PageHeader } from '../../components/common/PageHeader';
import { TEAM_MEMBERS } from '../../data/clubData';
import { Link } from 'react-router-dom';
import { KineticMarqueeRibbon, TextScramble } from '../../components/animations';

const CLUB_TEAMS = [
  {
    name: "TECHNICAL TEAM",
    focus: "Full-Stack Web, Systems Architecture, Embedded Microcontrollers & Robotics",
    desc: "Writing high-speed network protocols, custom memory allocators, ESP32 firmware, and autonomous rovers. Built for real deployments, not dummy slide decks."
  },
  {
    name: "DESIGN & CONTENT TEAM",
    focus: "Brutalist Creative Direction, WebGL Fragment Shaders & Technical Writing",
    desc: "Crafting bold cyberpunk zine aesthetics, interactive canvas shaders, and translating complex distributed architectures into razor-sharp editorial prose."
  },
  {
    name: "EVENT MANAGEMENT TEAM",
    focus: "36-Hour Shipathons, Whitepaper Jams, Lab Logistics & Hardware Desks",
    desc: "Producing fast-paced sleepless hackathons with zero PowerPoint presentations. Securing hardware workbench tools, oscilloscopes, and midnight supplies."
  },
  {
    name: "PHOTOGRAPHY & MEDIA TEAM",
    focus: "Visual Cinematography, Event Shutter, Analog Film Aesthetic & Reels",
    desc: "Documenting the raw exhaustion and triumphant sparks of midnight builds. Producing high-energy visual reels and archival documentation of club history."
  },
  {
    name: "PR & OUTREACH TEAM",
    focus: "University Alliances, DSW Liaison, External Chapters & Hackathon Bounties",
    desc: "Representing FYI guild across university departments, securing national competition grants, corporate hardware kits, and cloud compute sponsorships."
  },
  {
    name: "SOCIAL MEDIA TEAM",
    focus: "Instagram Viral Strategy, Developer Culture, Memetics & Discord Architecture",
    desc: "Turning student terminal logs into viral developer culture. Managing official chapter broadcasts (@fyivitbhopal) and our 24/7 student discord hub."
  }
];

export const TeamPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('ALL');

  const departments = [
    'ALL',
    'Executive Council',
    'Technical Team',
    'Design & Content',
    'Event Management',
    'Photography',
    'PR & Outreach',
    'Social Media'
  ];

  const filteredMembers = selectedDept === 'ALL'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.department === selectedDept);

  return (
    <div className="w-full">
      <PageHeader
        tag="04 • ARCHITECTS &amp; INSTIGATORS"
        badge="100% STUDENT DRIVEN"
        title="OUR SQUADS &amp; LEADERSHIP"
        subtitle="No corporate bureaucracy. President, Vice President, and 6 core functional teams leading software, hardware, creative craft, and campus operations."
      />

      <KineticMarqueeRibbon
        items={['TECHNICAL TEAM', 'DESIGN & CONTENT', 'EVENT MANAGEMENT', 'PHOTOGRAPHY', 'PR & OUTREACH', 'SOCIAL MEDIA', '100% STUDENT DRIVEN']}
        angle={-1}
        bg="bg-brand-cyan"
        textColor="text-primary"
      />

      {/* Main Team Showcase */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-14 border-b-2 border-primary">
        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b-2 border-primary">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`font-mono text-xs font-black uppercase px-4 py-2 border-2 border-primary transition-all ${
                selectedDept === dept
                  ? 'bg-brand-orange text-white brutal-shadow-sm -translate-y-0.5'
                  : 'bg-white text-primary hover:bg-brand-yellow'
              }`}
            >
              {dept === 'ALL' ? 'ALL 14 BUILDERS' : dept}
            </button>
          ))}
        </div>

        {/* Members Grid with Two26-Style 3D Perspective Tilt & Tactical Stamps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              data-tilt
              data-tilt-max="6"
              className="bg-white border-2 border-primary brutal-shadow p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300 relative cursor-pointer"
            >
              {/* Tactical Corner Crosshair */}
              <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>
              <div className="absolute top-2 left-2 font-mono text-[9px] text-primary/30 group-hover:text-primary transition-colors select-none">+</div>

              {/* Avatar Box with Monogram */}
              <div
                className={`w-full aspect-square ${member.avatarBg} border-2 border-primary rounded-sm mb-4 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform`}
              >
                <span className={`font-headline text-5xl font-black ${member.textColor}`}>
                  {member.initials}
                </span>

                {/* Role Pill */}
                <div
                  className={`absolute bottom-2 left-2 ${member.roleBg} font-mono text-[9px] font-black px-2 py-0.5 border border-primary brutal-shadow-sm uppercase tracking-wider`}
                >
                  {member.roleTag}
                </div>

                {member.badge && (
                  <div className="absolute top-2 right-2 bg-primary text-white font-mono text-[8px] font-bold px-1.5 py-0.5 border border-white/20">
                    {member.badge}
                  </div>
                )}
              </div>

              {/* Department Tag */}
              <div className="font-mono text-[10px] text-brand-muted font-bold uppercase tracking-wider mb-1">
                {member.department}
              </div>

              {/* Member Name */}
              <span className="font-headline text-xl font-black uppercase text-primary group-hover:text-brand-orange transition-colors">
                <TextScramble text={member.name} triggerOnHover={true} />
              </span>

              {/* Specialty */}
              <span className="font-mono text-xs font-bold text-brand-orange uppercase mb-3 line-clamp-2">
                {member.specialty}
              </span>

              {/* Quote Block */}
              <div className="bg-[#F6F3EB] border border-primary p-2.5 font-mono text-[11px] text-primary mb-4 leading-relaxed font-medium">
                {member.quote}
              </div>

              {/* Footer Links */}
              <div className="mt-auto pt-3 border-t border-primary/20 flex items-center justify-between font-mono text-xs text-brand-muted">
                <span className="font-bold text-primary">{member.handle}</span>
                <div className="flex items-center gap-2">
                  {member.socialLinks?.github && (
                    <a
                      href={member.socialLinks.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-orange"
                      title="GitHub"
                    >
                      GH
                    </a>
                  )}
                  {member.socialLinks?.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-brand-cyan"
                      title="LinkedIn"
                    >
                      LI
                    </a>
                  )}
                  <span className="text-brand-orange font-bold">↗</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 6 Functional Club Teams Breakdown */}
      <section className="w-full bg-[#EBE7DC] py-16 border-b-2 border-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10 pb-4 border-b-2 border-primary flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-1">
                // ORGANIZATIONAL HIERARCHY
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase text-primary tracking-tight">
                THE 6 CORE FYI TEAMS
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm font-bold text-primary max-w-sm">
              Each squad is spearheaded by a Lead &amp; Co-Lead coordinating with the President and Vice President.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CLUB_TEAMS.map((team, idx) => (
              <div
                key={idx}
                data-tilt
                className="bg-white border-2 border-primary brutal-shadow p-6 flex flex-col justify-between hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b-2 border-primary pb-2">
                    <span className="font-mono text-xs font-black uppercase text-brand-orange">
                      SQUAD 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] font-bold bg-brand-cyan text-primary px-2 py-0.5 border border-primary">
                      ACTIVE SPRINT
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-black uppercase mb-2 text-primary">
                    {team.name}
                  </h3>
                  <p className="font-body text-sm text-primary mb-4 leading-relaxed font-medium">
                    {team.desc}
                  </p>
                </div>
                <div className="bg-[#F6F3EB] p-3 border border-primary font-mono text-xs mt-4">
                  <span className="text-[10px] text-brand-orange block font-bold uppercase">DOMAIN SCOPE:</span>
                  <span className="font-bold text-primary">{team.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Join a Squad CTA */}
          <div className="mt-12 bg-white border-3 border-primary brutal-shadow-lg p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl">
            <div>
              <span className="font-mono text-xs text-brand-orange font-black uppercase tracking-wider block mb-1">
                // RECRUITING ACROSS ALL 6 SQUADS
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase text-primary">
                WANT TO JOIN A SPECIFIC FYI SQUAD?
              </h3>
              <p className="font-body text-sm text-brand-muted mt-1 font-medium">
                Admissions for freshmen and sophomores are rolling across Technical, Design, Events, Photography, PR, and Social Media.
              </p>
            </div>
            <Link
              to="/join"
              className="shrink-0 bg-brand-orange text-white hover:bg-brand-yellow hover:text-primary font-mono text-xs font-black uppercase px-8 py-4 border-2 border-primary brutal-shadow transition-all rounded"
            >
              CHOOSE YOUR SQUAD ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

