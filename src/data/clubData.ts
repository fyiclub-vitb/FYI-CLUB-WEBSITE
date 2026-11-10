import { Project, ActivitySprint, EventItem, TeamMember, FaqItem, RoadmapMilestone } from '../types';

// ============================================================================
// DYNAMIC TEMPORAL SYSTEM (Zero hardcoded year maintenance)
// Automatically updates every year across the entire website & portal
// ============================================================================
export const CURRENT_YEAR = new Date().getFullYear();
export const CURRENT_COHORT = `COHORT ${CURRENT_YEAR}`;
export const ADMISSION_EMAIL_YEAR = CURRENT_YEAR - 1;

export const getCopyrightNotice = () => `© ${CURRENT_YEAR} FYI VIT BHOPAL.`;
export const getAdmissionEmailPlaceholder = (prefix = 'first') => `${prefix}.${ADMISSION_EMAIL_YEAR}@vitbhopal.ac.in`;

export const CLUB_META = {
  name: "FYI BHOPAL",
  fullName: "Fraternity of Young Innovators",
  campus: "VIT Bhopal University",
  domain: "https://fyiclubvitbpl.web.app",
  established: "EST. 2024",
  status: "STATUS: BUILDING WEIRD & USEFUL THINGS ⚡",
  email: "chapter@fyi-vitbhopal.tech",
  heroSubtitle: "While campus sleeps, we compile.",
  narrative: "An official student-run technical and innovation chapter under the Dean of Student Welfare (DSW) at VIT Bhopal University. Founded to bring together curious student minds obsessed with writing real code, soldering physical hardware, and shipping working prototypes.",
  socials: {
    instagram: "https://www.instagram.com/fyivitbhopal/",
    linkedin: "https://www.linkedin.com/company/fyi-vitbhopal",
    github: "https://github.com/fyi-vitbhopal",
    discord: "https://discord.gg/fyivitbhopal",
    email: "mailto:chapter@fyi-vitbhopal.tech",
  },
  // Genuine, verified club telemetry (no synthetic stats)
  metrics: [
    { stamp: "CAMPUS", value: "VIT", label: "Bhopal Chapter", highlight: false },
    { stamp: "ESTABLISHED", value: "2024", label: "Student Innovation Guild", highlight: false },
    { stamp: CURRENT_COHORT, value: "OPEN", label: "Rolling Admissions", highlight: true },
    { stamp: "GOAL", value: "100%", label: "Hands-on Code & Hardware", highlight: "yellow" },
  ],
  rules: [
    {
      num: "RULE 01",
      badgeColor: "bg-primary text-white",
      title: "The Syllabus is Not a Ceiling",
      desc: "If classroom theory stops at basics, we explore kernel concepts, custom network protocols, and real embedded microcontrollers."
    },
    {
      num: "RULE 02",
      badgeColor: "bg-brand-orange text-white",
      title: "Good Code Needs Solder Smoke",
      desc: "Software gets exciting when connected to the physical world. We bridge web interfaces with microcontrollers, sensors, and robotics."
    },
    {
      num: "RULE 03",
      badgeColor: "bg-brand-cyan text-primary",
      title: "Aesthetics Are Not Optional",
      desc: "High-speed systems without aesthetic taste are incomplete. We reject generic Bootstrap templates and sterile enterprise dashboards."
    },
    {
      num: "RULE 04",
      badgeColor: "bg-primary text-white",
      cardBg: "bg-brand-yellow",
      title: "If It Runs, Deploy It",
      desc: "No code trapped on localhost forever. Ship the public URL, release the repo, publish the hardware schematic."
    }
  ]
};

// ============================================================================
// PROJECTS & EXPERIMENTS (RESTORED PREVIEW DATA - CLEARLY MARKED AS DUMMY)
// ============================================================================
export const PROJECTS: Project[] = [
  {
    id: "aether-os",
    number: "001",
    title: "AETHER OS",
    tags: ["DUMMY CONCEPT", "P2P PROTOCOL", "RUST + WASM", "ZERO CENTRAL RELAY"],
    description: "[DUMMY SPECIFICATION] Campus P2P Mesh Protocol. Designed to explore torrent-speed peer-to-peer data distribution across student hostel blocks with zero central server dependencies during high-traffic exam periods.",
    specs: [
      { label: "Concept Speed", value: "14.2 MB/s" },
      { label: "Target Density", value: "128+ Peers" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    version: "V1.4 • [DUMMY PROTOTYPE]",
    repoUrl: "https://github.com/fyi-vitbhopal"
  },
  {
    id: "neurocanvas",
    number: "002",
    title: "NEUROCANVAS",
    tags: ["DUMMY CONCEPT", "CREATIVE AI", "WEBGL SHADERS", "IN-BROWSER ONNX"],
    description: "[DUMMY SPECIFICATION] Zero-Cloud Latent Space Synthesizer. Concept simulation running localized neural diffusion models directly inside client browser memory via WebGL 2.0 at 60fps without cloud server costs.",
    specs: [
      { label: "Target FPS", value: "60 FPS" },
      { label: "Local Latency", value: "18ms" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    version: "WEBGL 2.0 • [DUMMY PROTOTYPE]",
    demoUrl: "#"
  },
  {
    id: "pulsebotics",
    number: "003",
    title: "PULSEBOTICS",
    tags: ["DUMMY CONCEPT", "AUTONOMOUS HARDWARE", "LORAWAN", "ROS 2"],
    description: "[DUMMY SPECIFICATION] Autonomous Agro-Field Rover. Low-cost custom carbon-fiber chassis blueprint equipped with multi-spectral crop diagnostic cameras and long-range LoRa sub-GHz telemetry.",
    specs: [
      { label: "Telemetry Range", value: "15.8 KM" },
      { label: "Endurance", value: "9.5 Hours" },
      { label: "Status", value: "DUMMY PREVIEW", highlight: true }
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    version: "CUSTOM PCB • [DUMMY PROTOTYPE]",
    demoUrl: "#"
  }
];

export const ACTIVITIES: ActivitySprint[] = [
  {
    id: "sprint-1",
    number: "01",
    title: "DISCOVER",
    description: "Deconstructing internet protocols, studying raw browser engines, compiler AST explorations, and system architecture deep-dives.",
    format: "Weekly Whitepaper Jams",
    icon: "explore",
    tagColor: "text-brand-orange"
  },
  {
    id: "sprint-2",
    number: "02",
    title: "LEARN",
    description: "Hands-on bare-metal C workshops, WebGL fragment shader math masterclasses, and peer design critiques without egos.",
    format: "Intensive Masterclasses",
    icon: "school",
    tagColor: "text-brand-cyan"
  },
  {
    id: "sprint-3",
    number: "03",
    title: "EXPERIMENT",
    description: "Hardware shipathons, edge AI model testing, custom sensor soldering, and fast fail-first rapid prototyping.",
    format: "Solder & Ship Weekends",
    icon: "science",
    tagColor: "text-brand-yellow bg-primary px-1"
  },
  {
    id: "sprint-4",
    number: "04",
    title: "SHIP",
    description: "Deploying open-source packages, releasing live web products, and entering hackathons to solve actual campus challenges.",
    format: "Live Production Releases",
    icon: "rocket_launch",
    tagColor: "text-primary"
  }
];

// ============================================================================
// EVENTS & GATHERINGS (RESTORED PREVIEW DATA - CLEARLY MARKED AS DUMMY)
// ============================================================================
export const EVENTS: EventItem[] = [
  {
    id: "hack-night",
    tag: "DUMMY SHIPATHON",
    tagBg: "bg-brand-orange text-white",
    date: "PREVIEW",
    dateBg: "bg-brand-yellow text-primary",
    title: "HACK_NIGHT 0x07 • 36-HR SPRINT [DUMMY]",
    description: "[DUMMY PREVIEW] Zero PowerPoint presentations allowed. Turn up with a clean repo and an idea that borders on impractical. Pizza, chai, and GPU compute provided.",
    location: "LOC: Central Block [SAMPLE]"
  },
  {
    id: "webgl-shaders",
    tag: "DUMMY MASTERCLASS",
    tagBg: "bg-brand-cyan text-primary",
    date: "PREVIEW",
    dateBg: "bg-white text-primary",
    title: "WEBGL & SHADER CRAFT • 101 [DUMMY]",
    description: "[DUMMY PREVIEW] Demystifying GLSL fragment math, raymarching volumetric noise, and writing fluid Canvas 2D/3D simulations with zero framework bloat.",
    location: "LOC: Lab 02 [SAMPLE]"
  },
  {
    id: "rover-run",
    tag: "DUMMY FIELD RUN",
    tagBg: "bg-primary text-brand-yellow",
    date: "PREVIEW",
    dateBg: "bg-brand-yellow text-primary",
    title: "ROVER FIELD RUN • SEHORE [DUMMY]",
    description: "[DUMMY PREVIEW] Taking Pulsebotics rover out of the lab and into rough agricultural topography. Testing LoRa mesh packets and obstacle avoidance in live terrain.",
    location: "LOC: Sehore Testbed [SAMPLE]"
  }
];

// ============================================================================
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

export const FAQS: FaqItem[] = [
  {
    id: "q1",
    question: "Can freshers join right away?",
    answer: "Yes. We don't care about your resume, your CGPA, or how many generic online certificates you've stockpiled. We care if you are genuinely curious about making things work and willing to learn fast."
  },
  {
    id: "q2",
    question: "Is FYI strictly a software club?",
    answer: "No. We love bare-metal microcontrollers, 3D printing, autonomous robotics, and shader aesthetics just as much as backend Rust and TypeScript. If it computes, moves, or looks incredible, it belongs here."
  },
  {
    id: "q3",
    question: "How do weekly sprints work?",
    answer: "Sprints are hands-on work sessions focused on building actual projects and discussing whitepapers. We respect exam periods strictly, but during active project seasons, we build together on campus."
  },
  {
    id: "q4",
    question: "What skills do I need to apply?",
    answer: "Curiosity, consistency, and a desire to build. Whether you are starting out or already writing code and soldering boards, FYI is a collaborative space to grow together."
  }
];

// ============================================================================
// AUTHENTIC CLUB ROADMAP (Real Timeline & Goals)
// ============================================================================
export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    step: "01",
    date: "JAN 2024",
    tag: "GUILD INCEPTION",
    tagBg: "bg-brand-yellow text-primary",
    title: "Founding the Fraternity of Young Innovators",
    subtitle: "Official VIT Bhopal Chapter",
    desc: "Established as an official technical and student-led innovation guild under the Dean of Student Welfare (DSW) at VIT Bhopal University to cultivate a hands-on builder culture.",
    metricBadge: "FOUNDED • VIT BHOPAL",
    metricHighlight: false,
    toolType: "bulb",
    toolTitle: "Incandescent Filament Spark",
    toolDetails: ["Innovation Chapter", "VIT Bhopal DSW", "Student Driven"],
  },
  {
    step: "02",
    date: "FALL 2024",
    tag: "CAMPUS ALLOCATION",
    tagBg: "bg-brand-cyan text-primary",
    title: "Securing the Prototyping Workbench",
    subtitle: "Central Innovation Space",
    desc: "Setting up designated assembly stations, solder equipment, microcontrollers, and collaborative workspace for hardware and software experimentation.",
    metricBadge: "WORKBENCH SETUP UNDERWAY",
    metricHighlight: false,
    toolType: "chip",
    toolTitle: "Hardware & Firmware Workbench",
    toolDetails: ["Microcontrollers", "Soldering Tools", "Collaborative Space"],
  },
  {
    step: "03",
    date: "SPRING 2026",
    tag: "COHORT ADMISSIONS",
    tagBg: "bg-brand-orange text-white",
    title: "Cohort 2026 Open Admissions",
    subtitle: "Freshmen & Sophomores Welcome",
    desc: "Opening admissions for students across Software, Robotics, WebGL, AI, and Product Design. Applications are reviewed on genuine curiosity, not resume fluff.",
    metricBadge: "ADMISSIONS OPEN NOW ↗",
    metricHighlight: true,
    toolType: "terminal",
    toolTitle: "Admissions Portal Live",
    toolDetails: ["Open to All Branches", "No Resume Required", "Rolling Review"],
  },
  {
    step: "04",
    date: "SUMMER 2026",
    tag: "INAUGURAL SHIPATHON",
    tagBg: "bg-brand-yellow text-primary",
    title: "First 36-Hour Hardware & Software Sprint",
    subtitle: "Campus Hackathon & Showcase",
    desc: "An intensive sprint where teams build functional hardware and software prototypes in one sleepless weekend, judged strictly on working code and working circuits.",
    metricBadge: "COMING SOON • SUMMER 2026",
    metricHighlight: false,
    toolType: "rover",
    toolTitle: "Sprint Assembly Session",
    toolDetails: ["Rapid Prototyping", "Peer Mentorship", "Zero Slide Decks"],
  },
  {
    step: "05",
    date: "LATE 2026",
    tag: "PRODUCTION DEPLOYS",
    tagBg: "bg-primary text-white",
    title: "Publishing Open Source Crates & Prototypes",
    subtitle: "National Hackathons & Public Releases",
    desc: "Deploying production software crates, open-sourcing hardware schematics, and representing VIT Bhopal in national innovation challenges and tech fests.",
    metricBadge: "COMING SOON • ROADMAP 2026",
    metricHighlight: true,
    toolType: "reactor",
    toolTitle: "Production Deployments",
    toolDetails: ["Open-Source Repos", "Tech-Fest Exhibits", "Student Products"],
  },
];
