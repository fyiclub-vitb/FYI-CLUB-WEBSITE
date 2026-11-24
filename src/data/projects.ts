import type { Project } from '../types';

// PROJECTS & EXPERIMENTS (RESTORED PREVIEW DATA - CLEARLY MARKED AS DUMMY)
// ============================================================================
// export const PROJECTS: Project[] = [
//   {
//     id: "chakravyuh",
//     number: "001",
//     title: "Chakravyuh",
//     tags: ["Game", "Web", "Multiplayer", "Puzzle"],
//     description: "A multiplayer espionage puzzle game that combines strategy, deduction, and teamwork to create an immersive experience. Players must collaborate to solve complex challenges, decode encrypted messages, and outwit their opponents in a race against time.",
//     specs: [
//       { label: "Concept Speed", value: "14.2 MB/s" },
//       { label: "Target Density", value: "128+ Peers" },
//       // { label: "Status", value: "DUMMY PREVIEW", highlight: true }
//     ],
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
//     version: "V1.4 • [DUMMY PROTOTYPE]",
//     repoUrl: "https://github.com/fyiclub-vitb/Chakravyuh"
//   },
//   {
//     id: "swiftcheck-fyi",
//     number: "002",
//     title: "SwiftCheck-FYI",
//     tags: ["AI", "Attendance", "Management", "Automation"],
//     description: "An intelligent, AI-powered attendance management platform designed to streamline campus operations and enhance the student experience. SwiftCheck replaces traditional manual attendance with a seamless, automated system that saves time, reduces errors, and provides valuable insights.",
//     specs: [
//       { label: "Target FPS", value: "60 FPS" },
//       { label: "Local Latency", value: "18ms" },
//       // { label: "Status", value: "DUMMY PREVIEW", highlight: true }
//     ],
//     image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
//     version: "WEBGL 2.0 • [DUMMY PROTOTYPE]",
//     demoUrl: "https://swiftcheck-fyi.vercel.app/"
//   },
//   {
//     id: "worklin",
//     number: "003",
//     title: "WorkLin",
//     tags: ["Open Source", "Workspace", "Productivity", "Collaborative"],
//     description: "A powerful, open-source workspace platform inspired by Notion. WorkLin combines the flexibility of block-based editing with real-time collaboration, AI assistance, and enterprise-grade features.",
//     specs: [
//       { label: "Telemetry Range", value: "15.8 KM" },
//       { label: "Endurance", value: "9.5 Hours" },
//       // { label: "Status", value: "DUMMY PREVIEW", highlight: true }
//     ],
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
//     version: "CUSTOM PCB • [DUMMY PROTOTYPE]",
//     demoUrl: "https://worklin-fyi.vercel.app/"
//   },
//   {
//     id: "schedlyx",
//     number: "004",
//     title: "Schedlyx",
//     tags: ["Web", "Scheduling", "Management", "AI"],
//     description: "Schedlyx is an open-source platform for scheduling people, managing events, and coordinating registrations — from 1-on-1 meetings to hackathons, workshops, and group sessions.",
//     specs: [
//       { label: "Telemetry Range", value: "15.8 KM" },
//       { label: "Endurance", value: "9.5 Hours" },
//       // { label: "Status", value: "DUMMY PREVIEW", highlight: true }
//     ],
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
//     version: "CUSTOM PCB • [DUMMY PROTOTYPE]",
//     demoUrl: "https://schedlyx-fyi.vercel.app/"
//   },
//   {
//     id: "fyi",
//     number: "005",
//     title: "FYI-WEBSITE",
//     tags: ["Web", "Portfolio", "AI", "Interactive"],
//     description: "This is the website for the FYICLUB, a club at VIT Bhopal. It is a place for students to learn about technology and innovation.",
//     specs: [
//       { label: "Telemetry Range", value: "15.8 KM" },
//       { label: "Endurance", value: "9.5 Hours" },
//       // { label: "Status", value: "DUMMY PREVIEW", highlight: true }
//     ],
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
//     version: "CUSTOM PCB • [DUMMY PROTOTYPE]",
//     demoUrl: "https://fyiclubvitbpl.web.app"
//   }
// ];

// export const PROJECTS: Project[] = [
//   {
//     id: "chakravyuh",
//     number: "001",
//     title: "Chakravyuh",
//     tags: ["Game", "Web", "Multiplayer", "Puzzle"],
//     description: "A multiplayer espionage puzzle game that combines strategy, deduction, and teamwork. Players collaborate to solve complex challenges, decode encrypted messages, and outwit opponents in a race against time.",
//     specs: [
//       { label: "Mode", value: "Multiplayer" },
//       { label: "Genre", value: "Puzzle / Strategy" },
//     ],
//     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
//     version: "v1.4 • Web",
//     repoUrl: "https://github.com/fyiclub-vitb/Chakravyuh"
//   },
//   {
//     id: "swiftcheck-fyi",
//     number: "002",
//     title: "SwiftCheck-FYI",
//     tags: ["AI", "Attendance", "Management", "Automation"],
//     description: "An AI-powered attendance management platform built to streamline campus operations. SwiftCheck replaces manual attendance with an automated system that saves time, reduces errors, and provides useful insights.",
//     specs: [
//       { label: "Focus", value: "Automation" },
//       { label: "Use Case", value: "Campus Attendance" },
//     ],
//     image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
//     version: "Web App • Live",
//     demoUrl: "https://swiftcheck-fyi.vercel.app/"
//   },
//   {
//     id: "worklin",
//     number: "003",
//     title: "WorkLin",
//     tags: ["Open Source", "Workspace", "Productivity", "Collaborative"],
//     description: "An open-source workspace platform inspired by Notion. WorkLin combines block-based editing with real-time collaboration, AI assistance, and enterprise-grade features.",
//     specs: [
//       { label: "Editing", value: "Block-based" },
//       { label: "Collaboration", value: "Real-time" },
//     ],
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
//     version: "Web App • Open Source",
//     demoUrl: "https://worklin-fyi.vercel.app/"
//   },
//   {
//     id: "schedlyx",
//     number: "004",
//     title: "Schedlyx",
//     tags: ["Web", "Scheduling", "Management", "AI"],
//     description: "An open-source platform for scheduling people, managing events, and coordinating registrations, from 1-on-1 meetings to hackathons, workshops, and group sessions.",
//     specs: [
//       { label: "Scope", value: "Meetings to Events" },
//       { label: "Feature", value: "Registrations" },
//     ],
//     image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80",
//     version: "Web App • Open Source",
//     demoUrl: "https://schedlyx-fyi.vercel.app/"
//   },
//   {
//     id: "fyi",
//     number: "005",
//     title: "FYI-WEBSITE",
//     tags: ["Web", "Community", "Interactive"],
//     description: "The official website of FYI Club at VIT Bhopal, a space for students to explore technology and innovation, and to find the club's projects and events.",
//     specs: [
//       { label: "Audience", value: "Students" },
//       { label: "Host", value: "VIT Bhopal" },
//     ],
//     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
//     version: "Website • Live",
//     demoUrl: "https://fyiclubvitbpl.web.app"
//   }
// ];

export const PROJECTS: Project[] = [
  {
    id: "chakravyuh",
    number: "001",
    title: "Chakravyuh",
    tags: ["Game", "Web", "Multiplayer", "Puzzle"],
    description: "A multiplayer espionage puzzle game that combines strategy, deduction, and teamwork. Players collaborate to solve complex challenges, decode encrypted messages, and outwit opponents in a race against time.",
    specs: [
      { label: "Mode", value: "Multiplayer" },
      { label: "Genre", value: "Puzzle / Strategy" },
    ],
    image: "/images/chakravyuh.jpg",
    version: "v1.4 • Web",
    repoUrl: "https://github.com/fyiclub-vitb/Chakravyuh"
  },
  {
    id: "swiftcheck-fyi",
    number: "002",
    title: "SwiftCheck-FYI",
    tags: ["AI", "Attendance", "Management", "Automation"],
    description: "An AI-powered attendance management platform built to streamline campus operations. SwiftCheck replaces manual attendance with an automated system that saves time, reduces errors, and provides useful insights.",
    specs: [
      { label: "Focus", value: "Automation" },
      { label: "Use Case", value: "Campus Attendance" },
    ],
    image: "/images/swiftcheck.jpg",
    version: "Web App • Live",
    demoUrl: "https://swiftcheck-fyi.vercel.app/"
  },
  {
    id: "worklin",
    number: "003",
    title: "WorkLin",
    tags: ["Open Source", "Workspace", "Productivity", "Collaborative"],
    description: "An open-source workspace platform inspired by Notion. WorkLin combines block-based editing with real-time collaboration, AI assistance, and enterprise-grade features.",
    specs: [
      { label: "Editing", value: "Block-based" },
      { label: "Collaboration", value: "Real-time" },
    ],
    image: "/images/worklin.jpg",
    version: "Web App • Open Source",
    demoUrl: "https://worklin-fyi.vercel.app/"
  },
  {
    id: "schedlyx",
    number: "004",
    title: "Schedlyx",
    tags: ["Web", "Scheduling", "Management", "AI"],
    description: "An open-source platform for scheduling people, managing events, and coordinating registrations, from 1-on-1 meetings to hackathons, workshops, and group sessions.",
    specs: [
      { label: "Scope", value: "Meetings to Events" },
      { label: "Feature", value: "Registrations" },
    ],
    image: "/images/schedlyx.jpg",
    version: "Web App • Open Source",
    demoUrl: "https://schedlyx-fyi.vercel.app/"
  },
  {
    id: "fyi",
    number: "005",
    title: "FYI-WEBSITE",
    tags: ["Web", "Community", "Interactive"],
    description: "The official website of FYI Club at VIT Bhopal, a space for students to explore technology and innovation, and to find the club's projects and events.",
    specs: [
      { label: "Audience", value: "Students" },
      { label: "Host", value: "VIT Bhopal" },
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    version: "Website • Live",
    demoUrl: "https://fyiclubvitbpl.web.app"
  }
];