import type { TeamMember } from '../types';

// TEAM & ROSTER (AUTHENTIC FYI CLUB WINGS — DUMMY ROSTER WITH TWO26 METRICS)
// Executive Council (President & VP) + 6 Core Functional Wings (Lead & Co-Lead)
// ============================================================================
export const TEAM_MEMBERS: TeamMember[] = [
  // ── Executive Council ───────────────────────────────────────────────────────
  {
    id: "pres-lead",
    name: "Aarav Sharma",
    initials: "AS",
    department: "Executive Council",
    position: "President",
    roleTag: "PRESIDENT",
    roleBg: "bg-brand-orange text-white",
    avatarBg: "bg-primary",
    textColor: "text-brand-orange",
    specialty: "Chapter Direction & Strategic Guild Vision",
    quote: "\"Building a culture of relentless student builders where shipped code matters more than pitch decks.\"",
    handle: "@aarav_lead",
    badge: "EXECUTIVE 01",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/fyi-vitbhopal",
    }
  },
  {
    id: "vp-lead",
    name: "Rhea Sen",
    initials: "RS",
    department: "Executive Council",
    position: "Vice President",
    roleTag: "VICE PRESIDENT",
    roleBg: "bg-brand-cyan text-primary",
    avatarBg: "bg-[#111111]",
    textColor: "text-brand-cyan",
    specialty: "Cross-Wing Operations & Prototyping Roadmap",
    quote: "\"Bridging hardware, software, and creative squads into one synchronized shipathon engine.\"",
    handle: "@rhea_vp",
    badge: "EXECUTIVE 02",
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com/fyi-vitbhopal",
    }
  },

  // ── 1. Technical Team ───────────────────────────────────────────────────────
  {
    id: "tech-lead",
    name: "Kabir Verma",
    initials: "KV",
    department: "Technical Team",
    position: "Lead",
    roleTag: "TECH LEAD",
    roleBg: "bg-brand-yellow text-primary",
    avatarBg: "bg-primary",
    textColor: "text-brand-yellow",
    specialty: "Systems Architecture, Rust Kernels & Cloud Infrastructure",
    quote: "\"Compiling bare-metal kernels and distributed consensus while campus sleeps.\"",
    handle: "@kabir_tech",
    badge: "TECH WING 01",
    socialLinks: {
      github: "https://github.com/fyi-vitbhopal",
      linkedin: "https://linkedin.com",
    }
  },
  {
    id: "tech-colead",
    name: "Devanshi Patel",
    initials: "DP",
    department: "Technical Team",
    position: "Co-Lead",
    roleTag: "TECH CO-LEAD",
    roleBg: "bg-white text-primary border border-primary",
    avatarBg: "bg-brand-cyan",
    textColor: "text-primary",
    specialty: "Embedded Microcontrollers, ESP32 & Robotics Telemetry",
    quote: "\"If your software doesn't produce solder smoke or blink physical LEDs, keep hacking.\"",
    handle: "@devanshi_firmware",
    badge: "TECH WING 02",
    socialLinks: {
      github: "https://github.com/fyi-vitbhopal",
    }
  },

  // ── 2. Design & Content Team ───────────────────────────────────────────────
  {
    id: "design-lead",
    name: "Ananya Iyer",
    initials: "AI",
    department: "Design & Content",
    position: "Lead",
    roleTag: "DESIGN LEAD",
    roleBg: "bg-primary text-brand-cyan",
    avatarBg: "bg-brand-cyan",
    textColor: "text-primary",
    specialty: "Creative Direction, Brutalist UI/UX & WebGL Shaders",
    quote: "\"Rejecting boring corporate templates. Every screen should feel like a collectible cyberpunk zine.\"",
    handle: "@ananya_craft",
    badge: "DESIGN 01",
    socialLinks: {
      linkedin: "https://linkedin.com",
    }
  },
  {
    id: "design-colead",
    name: "Siddharth Nair",
    initials: "SN",
    department: "Design & Content",
    position: "Co-Lead",
    roleTag: "CONTENT CO-LEAD",
    roleBg: "bg-brand-orange text-white",
    avatarBg: "bg-surface-dim",
    textColor: "text-primary",
    specialty: "Technical Copywriting, Editorial Zines & Visual Typography",
    quote: "\"Distilling complex distributed algorithms and hardware schematics into razor-sharp prose.\"",
    handle: "@sid_editorial",
    badge: "DESIGN 02",
  },

  // ── 3. Event Management Team ───────────────────────────────────────────────
  {
    id: "event-lead",
    name: "Tanvi Kulkarni",
    initials: "TK",
    department: "Event Management",
    position: "Lead",
    roleTag: "EVENT LEAD",
    roleBg: "bg-brand-yellow text-primary",
    avatarBg: "bg-primary",
    textColor: "text-brand-orange",
    specialty: "36-Hour Shipathons, Whitepaper Jams & Hackathon Production",
    quote: "\"Zero PowerPoint pitch contests. We orchestrate pure build sessions powered by chai and pizza.\"",
    handle: "@tanvi_events",
    badge: "OPS WING 01",
    socialLinks: {
      linkedin: "https://linkedin.com",
    }
  },
  {
    id: "event-colead",
    name: "Aditya Chopra",
    initials: "AC",
    department: "Event Management",
    position: "Co-Lead",
    roleTag: "EVENT CO-LEAD",
    roleBg: "bg-white text-primary border border-primary",
    avatarBg: "bg-brand-yellow",
    textColor: "text-primary",
    specialty: "Lab Logistics, Hardware Workbench Desks & Hardware Sourcing",
    quote: "\"Securing oscilloscopes, soldering fume extractors, and microcontrollers for every builder.\"",
    handle: "@aditya_logistics",
    badge: "OPS WING 02",
    socialLinks: {
      linkedin: "https://linkedin.com",
    }
  },

  // ── 4. Photography & Media Team ───────────────────────────────────────────
  {
    id: "photo-lead",
    name: "Rohan Malhotra",
    initials: "RM",
    department: "Photography",
    position: "Lead",
    roleTag: "PHOTO LEAD",
    roleBg: "bg-primary text-white",
    avatarBg: "bg-brand-orange",
    textColor: "text-white",
    specialty: "Cinematography, 35mm Analog Grain & Low-Light Lab Shutter",
    quote: "\"Capturing the raw 3 AM exhausted smiles when the LED finally blinks for the first time.\"",
    handle: "@rohan_visuals",
    badge: "MEDIA 01",
  },
  {
    id: "photo-colead",
    name: "Meera Joshi",
    initials: "MJ",
    department: "Photography",
    position: "Co-Lead",
    roleTag: "MEDIA CO-LEAD",
    roleBg: "bg-brand-cyan text-primary",
    avatarBg: "bg-surface",
    textColor: "text-primary",
    specialty: "Motion Graphics, Video Post-Production & Vertical Teasers",
    quote: "\"Cutting high-energy build reels that capture the visceral speed of student engineering.\"",
    handle: "@meera_motion",
    badge: "MEDIA 02",
  },

  // ── 5. PR & Outreach Team ───────────────────────────────────────────────────
  {
    id: "pr-lead",
    name: "Varun Singhania",
    initials: "VS",
    department: "PR & Outreach",
    position: "Lead",
    roleTag: "PR LEAD",
    roleBg: "bg-brand-orange text-white",
    avatarBg: "bg-primary",
    textColor: "text-brand-cyan",
    specialty: "Campus Relations, DSW University Alliances & Press Releases",
    quote: "\"Connecting FYI guild directly with industry mentors, engineering directors, and university leaders.\"",
    handle: "@varun_pr",
    badge: "OUTREACH 01",
    socialLinks: {
      linkedin: "https://linkedin.com",
    }
  },
  {
    id: "pr-colead",
    name: "Diya Menon",
    initials: "DM",
    department: "PR & Outreach",
    position: "Co-Lead",
    roleTag: "OUTREACH CO-LEAD",
    roleBg: "bg-brand-yellow text-primary",
    avatarBg: "bg-brand-orange",
    textColor: "text-white",
    specialty: "Open-Source Grants, Hackathon Bounties & External Chapters",
    quote: "\"Securing developer kits, cloud compute credits, and national competition partnerships.\"",
    handle: "@diya_outreach",
    badge: "OUTREACH 02",
    socialLinks: {
      linkedin: "https://linkedin.com",
    }
  },

  // ── 6. Social Media Team ───────────────────────────────────────────────────
  {
    id: "social-lead",
    name: "Pranav Deshmukh",
    initials: "PD",
    department: "Social Media",
    position: "Lead",
    roleTag: "SOCIAL LEAD",
    roleBg: "bg-brand-cyan text-primary",
    avatarBg: "bg-primary",
    textColor: "text-brand-orange",
    specialty: "Instagram Viral Strategy, Memetic Engineering & Build Threads",
    quote: "\"Turning student terminal logs and breadboard schematics into viral developer culture.\"",
    handle: "@pranav_social",
    badge: "BROADCAST 01",
  },
  {
    id: "social-colead",
    name: "Kritika Roy",
    initials: "KR",
    department: "Social Media",
    position: "Co-Lead",
    roleTag: "COMMUNITY CO-LEAD",
    roleBg: "bg-white text-primary border border-primary",
    avatarBg: "bg-brand-cyan",
    textColor: "text-primary",
    specialty: "Discord Architecture, Student Onboarding & Live Streams",
    quote: "\"Building a 24/7 digital clubhouse where student hackers peer-debug and share live repos.\"",
    handle: "@kritika_discord",
    badge: "BROADCAST 02",
  }
];
