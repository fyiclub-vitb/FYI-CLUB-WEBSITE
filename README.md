# fyi.vitbhopal — Official Chapter Website

> **Fraternity of Young Innovators (FYI)**  
> *VIT Bhopal University • Under the Dean of Student Welfare (DSW)*  
> *"Ideas don't sleep in draft. We build what actually ships."*

---

## ⚡ 1. Overview & Vision

**fyi.vitbhopal** is the official digital headquarters for the **Fraternity of Young Innovators (FYI)**, an engineering and technology chapter at **VIT Bhopal University**.

Built with a bold **Two26Studio-inspired tactile neo-brutalist aesthetic**, the platform rejects cookie-cutter corporate templates in favor of rich animations, industrial circuit board textures, high-voltage glowing roadmap conduits, magnetic physics, and responsive sound design.

### Key Highlights
- **100% Student-Driven Identity:** Showcases real hardware prototypes, systems crates, and creative WebGL builds.
- **Theatrical Vector Assembly Intro:** A continuous SVG vector assembly intro powered by Framer physics that plays on page load with an immediate `[ESC / SKIP INTRO ↗]` bypass.
- **Two26 Snaking Bulb Wire Roadmap:** An interactive, scroll-driven high-voltage conduit wire glowing in Electric Cyan (`#00E5FF`) and Vivid Orange (`#FF4800`) connecting milestone stations and tool cards.
- **Organized Squad Hierarchy:** Structured roster representing the Executive Council (President & Vice President) and the 6 functional wings (Technical, Design & Content, Event Management, Photography, PR & Outreach, and Social Media) with Leads and Co-Leads.
- **Cloud Firestore REST Client:** Serverless recruitment portal using Google Cloud Firestore REST API with resilient offline `localStorage` fallback.

---

## 🛠️ 2. Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [React 18](https://react.dev) + [TypeScript 5](https://www.typescriptlang.org) |
| **Bundler** | [Vite 6](https://vite.dev) |
| **Styling** | [Tailwind CSS 3](https://tailwindcss.com) + Custom Brutalist Design Tokens |
| **Routing** | [React Router v6](https://reactrouter.com) (Client-Side SPA) |
| **Audio Synthesis** | Zero-dependency Web Audio API Synthesizer (synthesizes clicks, ticks, and electrical sparks in real time without audio files) |
| **Database & Auth** | Google Cloud Firestore REST API (`src/lib/firebase.ts`) |
| **Hosting & CI/CD** | Firebase Hosting + GitHub Actions CI/CD (`.github/workflows/firebase-deploy.yml`) |

---

## 📁 3. File & Directory Architecture

```
FYI CLUB WEBISTE/
├── public/                               # Static assets served at web root
│   ├── fyi-logo.jpg                      # Official FYI VIT Bhopal Chapter Logo
│   └── vite.svg
│
├── src/
│   ├── assets/                           # Bundled media and branding assets
│   │
│   ├── components/                       # Modular, reusable UI components
│   │   ├── common/                       # Cross-page shared components
│   │   │   ├── PageHeader.tsx            # Unified brutalist header banner for all subpages
│   │   │   ├── JoinModal.tsx             # Quick RSVP modal and fast-apply dialog
│   │   │   └── index.ts                  # Barrel export
│   │   │
│   │   ├── intro/                        # Theatrical opening experience
│   │   │   ├── IntroLoader.tsx           # Continuous Framer vector assembly, progress counter & skip button
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/                       # Primary navigation and structure shell
│   │   │   ├── Navbar.tsx                # Brand lockup (fyi.vitbhopal), responsive drawer & CTA
│   │   │   ├── Footer.tsx                # Terminal footer, social media links & midnight chai note
│   │   │   └── index.ts
│   │   │
│   │   └── ui/                           # Micro-interaction elements
│   │       ├── CustomCursor.tsx          # Dual-ring cursor with magnetic proximity & card morphing
│   │       └── index.ts
│   │
│   ├── data/                             # Central single source of truth (SSOT)
│   │   └── clubData.ts                   # Club metadata, projects, activities, events, team roster & FAQs
│   │
│   ├── hooks/                            # Custom animation and sensor hooks
│   │   ├── use3DTilt.ts                  # Gyroscopic 3D perspective card tilt ([data-tilt])
│   │   ├── useMagneticButtons.ts         # Proximity magnetic pull on .magnetic-btn elements
│   │   ├── useScrollReveal.ts            # High-performance scroll-driven unmasking (.reveal-on-scroll)
│   │   └── index.ts
│   │
│   ├── lib/                              # Services and engines
│   │   ├── firebase.ts                   # Firestore REST client with offline localStorage queue
│   │   └── sound.ts                      # Synthesizes tactile clicks, sparks, and hover ticks via Web Audio API
│   │
│   ├── pages/                            # Full-page route views
│   │   ├── about/
│   │   │   └── AboutPage.tsx             # Club narrative, operating rules, and roadmap
│   │   ├── events/
│   │   │   └── EventsPage.tsx            # Hackathons, workshops, and perforated ticket claims
│   │   ├── gallery/
│   │   │   └── GalleryPage.tsx           # Photo archive, hardware bench snapshots & zine gallery
│   │   ├── home/
│   │   │   ├── sections/                 # Modular home page sections
│   │   │   │   ├── HeroSection.tsx       # Monumental headline, live Bhopal IST clock & stickers
│   │   │   │   ├── BulbWireRoadmap.tsx   # Two26 Electric Blue & Orange animated snaking conduit wire
│   │   │   │   ├── SelectedWorks.tsx     # Featured 3D perspective build cards
│   │   │   │   ├── UpcomingEvents.tsx    # Perforated student ticket passes
│   │   │   │   ├── GuildTeam.tsx         # Core leadership spotlight
│   │   │   │   ├── ManifestoSection.tsx  # Operating laws & core philosophy
│   │   │   │   ├── FaqSection.tsx        # Brutalist collapsible accordion
│   │   │   │   └── index.ts
│   │   │   └── HomePage.tsx              # Home orchestrator assembling all sections
│   │   ├── join/
│   │   │   ├── join.service.ts           # Application submission dispatcher
│   │   │   └── JoinPage.tsx              # Comprehensive cohort membership application form
│   │   ├── projects/
│   │   │   └── ProjectsPage.tsx          # Filterable build showcase with hardware/software tags
│   │   ├── team/
│   │   │   └── TeamPage.tsx              # Complete 14-member roster & 6 squad domain breakdowns
│   │   └── index.ts                      # Clean barrel export for all route views
│   │
│   ├── types/                            # Strict TypeScript interface contracts
│   │   └── index.ts                      # Project, TeamMember, EventItem, Application types
│   │
│   ├── App.tsx                           # Master router, intro coordinator, error boundary & sound manager
│   ├── index.css                         # Tailwind directives, custom fonts, neo-brutalist shadows & animations
│   ├── main.tsx                          # React 18 DOM mount point
│   └── vite-env.d.ts                     # Vite client type definitions
│
├── .env.example                          # Environment variable template for Firebase credentials
├── .firebaserc                           # Firebase project configuration
├── .gitignore                            # Standard git exclusions (node_modules, dist, briefs)
├── firebase.json                         # Firebase Hosting single-page application (SPA) rewrites
├── index.html                            # HTML entry point with Google Fonts preconnects
├── package.json                          # Project scripts and dependencies
├── postcss.config.js                     # PostCSS with Tailwind and Autoprefixer
├── tailwind.config.js                    # Custom palette (brand-orange, brand-cyan, surface), fonts & keyframes
├── tsconfig.json                         # Strict TypeScript configuration
└── vite.config.ts                        # Vite configuration with React plugin
```

---

## 👥 4. Organizational Squad Structure

The team roster in `src/data/clubData.ts` and `src/pages/team/TeamPage.tsx` mirrors the true structure of the FYI Club:

```
                      [ EXECUTIVE COUNCIL ]
                    President • Vice President
                               │
       ┌──────────────┬────────┼────────┬──────────────┐
       │              │        │        │              │
[ TECHNICAL ]  [ DESIGN & ] [ EVENT ] [ PHOTO & ] [ PR & ]   [ SOCIAL ]
    TEAM        CONTENT      MGMT       MEDIA     OUTREACH    MEDIA
 Lead / Co-Lead Lead / Co-Lead Lead/Co  Lead/Co   Lead/Co    Lead/Co
```

1. **Executive Council:** Chapter President & Vice President overseeing strategic guild roadmap and university liaison.
2. **Technical Team:** Full-stack architecture, Rust crates, embedded systems, microcontrollers (ESP32/STM32), and autonomous rovers.
3. **Design & Content Team:** Brutalist cyberpunk zine identity, WebGL shaders, UI/UX, and technical documentation.
4. **Event Management Team:** 36-hour sprint logistics, whitepaper teardowns, hardware bench sourcing, and venue coordination.
5. **Photography & Media Team:** Event documentation, cinematic storytelling, 35mm visual aesthetics, and high-energy video reels.
6. **PR & Outreach Team:** University and DSW relations, industry sponsorships, national hackathon bounties, and inter-chapter partnerships.
7. **Social Media Team:** Broadcast channels (@fyivitbhopal on Instagram), memetic developer culture, and student Discord community.

---

## 🚀 5. Development & Build Workflow

### Prerequisites
- [Node.js](https://nodejs.org) (v18 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd "FYI CLUB WEBISTE"

# Install dependencies
npm install
```

### Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### Production Build
```bash
npm run build
```
Executes TypeScript type-checking (`tsc -b`) followed by optimized Vite bundling into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
Spins up a local HTTP server serving the compiled `dist/` bundle to verify production behavior.

---

## 🌐 6. Deployment Guide

### Deploying to Firebase Hosting
1. Ensure [Firebase CLI](https://firebase.google.com/docs/cli) is installed:
   ```bash
   npm install -g firebase-tools
   ```
2. Log in and initialize:
   ```bash
   firebase login
   firebase use --add
   ```
3. Deploy the compiled build:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Automated CI/CD
A GitHub Actions workflow is pre-configured at `.github/workflows/firebase-deploy.yml` to automatically run builds and deploy to Firebase Hosting on push to the `main` branch.

---

## 📄 7. License

Built with pride by the student engineers and creative technologists of **FYI • VIT Bhopal University Chapter**.  
All software and prototypes are open source by default.
