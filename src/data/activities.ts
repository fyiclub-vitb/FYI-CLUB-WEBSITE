import type { ActivitySprint } from '../types';

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
