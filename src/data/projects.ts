import type { Project } from '../types';

// PROJECTS & EXPERIMENTS

export const PROJECTS: Project[] = [
  {
    id: "chakravyuh",
    number: "001",
    title: "Chakravyuh",
    tags: ["Game", "Web", "Multiplayer", "Puzzle"],
    description: "A multiplayer espionage puzzle game that combines strategy, deduction, and teamwork. Players collaborate to solve complex challenges, decode encrypted messages, and outwit opponents in a race against time.",
    specs: [
      { label: "Status", value: "Completed" },
    ],
    image: "src/assets/images/chakravyuh.webp",
    version: "v1.4 • Web",
    repoUrl: "https://github.com/fyiclub-vitb/Chakravyuh"
  },
  {
    id: "worklin",
    number: "002",
    title: "Worklin",
    tags: ["Open Source", "Workspace", "Productivity", "Collaborative"],
    description: "An open-source workspace platform inspired by Notion. WorkLin combines block-based editing with real-time collaboration, AI assistance, and enterprise-grade features.",
    specs: [
        { label: "Status", value: "Completed" },
    ],
    image: "src/assets/images/worklin.webp",
    version: "Web App • Open Source",
    repoUrl: "https://worklin-fyi.vercel.app/"
  },
  {
    id: "schedlyx",
    number: "003",
    title: "Schedlyx",
    tags: ["Web", "Scheduling", "Management", "AI"],
    description: "An open-source platform for scheduling people, managing events, and coordinating registrations, from 1-on-1 meetings to hackathons, workshops, and group sessions.",
    specs: [
      { label: "Status", value: "Completed" },
    ],
    image: "src/assets/images/schedlyx.webp",
    version: "Web App • Open Source",
    repoUrl: "https://schedlyx-fyi.vercel.app/"
  },
  {
    id: "swiftcheck-fyi",
    number: "004",
    title: "Swiftcheck",
    tags: ["Attendance", "Management", "Automation"],
    description: "An attendance management platform built to streamline campus operations. SwiftCheck replaces manual attendance with an automated system that saves time, reduces errors, and provides useful insights.",
    specs: [
      { label: "Status", value: "Completed" },
    ],
    image: "src/assets/images/swiftcheck.webp",
    version: "Web App • Live",
    repoUrl: "https://swiftcheck-fyi.vercel.app/"
  },
  {
    id: "fyi",
    number: "005",
    title: "FYI-WEBSITE",
    tags: ["Web", "Community", "Interactive"],
    description: "The official website of FYI Club at VIT Bhopal, a space for students to explore technology and innovation, and to find the club's projects and events.",
    specs: [
      { label: "Status", value: "Completed" },
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    version: "Website • Live",
    repoUrl: "https://fyiclubvitbpl.web.app"
  }
];
