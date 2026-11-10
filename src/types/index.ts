export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  specs: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
  image: string;
  version: string;
  badge: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface ActivitySprint {
  id: string;
  number: string;
  title: string;
  description: string;
  format: string;
  icon: string;
  tagColor: string;
}

export interface EventItem {
  id: string;
  tag: string;
  tagBg: string;
  date: string;
  dateBg: string;
  title: string;
  description: string;
  location: string;
  claimedLink?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  department:
    | 'Executive Council'
    | 'Technical Team'
    | 'Design & Content'
    | 'Event Management'
    | 'Photography'
    | 'PR & Outreach'
    | 'Social Media';
  position: 'President' | 'Vice President' | 'Lead' | 'Co-Lead';
  roleTag: string;
  roleBg: string;
  avatarBg: string;
  textColor: string;
  specialty: string;
  quote: string;
  handle: string;
  badge?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface JoinApplication {
  name: string;
  email: string;
  regNumber: string;
  githubOrPortfolio: string;
  guildInterest: 'Software' | 'Hardware' | 'Design & Creative' | 'Ecosystem & Growth';
  aboutYou: string;
  createdAt: string;
}

export interface RoadmapMilestone {
  step: string;
  date: string;
  tag: string;
  tagBg?: string;
  title: string;
  subtitle: string;
  desc: string;
  metricBadge: string;
  metricHighlight?: boolean;
  toolType: 'bulb' | 'chip' | 'terminal' | 'rover' | 'reactor';
  toolTitle: string;
  toolDetails?: string[];
}

