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
