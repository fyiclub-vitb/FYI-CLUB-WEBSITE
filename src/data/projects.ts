import type { Project } from '../types';
import chakravyuhImg from '../assets/images/chakravyuh.webp';
import worklinImg from '../assets/images/worklin.webp';
import schedlyxImg from '../assets/images/schedlyx.webp';
import swiftcheckImg from '../assets/images/swiftcheck.webp';
import fyiWebsiteImg from '../assets/images/fyi-website.webp';

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
    image: chakravyuhImg,
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
    image: worklinImg,
    version: "Web App • Open Source",
    demoUrl: "https://worklin-fyi.vercel.app/"
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
    image: schedlyxImg,
    version: "Web App • Open Source",
    demoUrl: "https://schedlyx-fyi.vercel.app/"
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
    image: swiftcheckImg,
    version: "Web App • Live",
    demoUrl: "https://swiftcheck-fyi.vercel.app/"
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
    image: fyiWebsiteImg,
    version: "Website • Live",
    repoUrl: "https://github.com/fyiclub-vitb/FYI-CLUB-WEBSITE",
    demoUrl: "https://fyiclubvitbpl.web.app/"
  }
];
