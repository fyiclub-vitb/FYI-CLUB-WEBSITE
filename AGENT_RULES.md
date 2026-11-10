# 🛡️ AI Agent Development Guidelines & Guardrails

> **Target Audience:** Any AI coding assistant (Antigravity, Cursor, Copilot, Claude, Gemini, Windsurf, etc.) working on the **FYI Club Website (`fyi.vitbhopal`)**.
> **Enforcement Level:** **STRICT & MANDATORY**. Any violation will corrupt the core brand experience.

---

## ⛔ 1. STRICTLY LOCKED & RESTRICTED FILES (DO NOT EDIT)

Under **NO circumstances** should an AI assistant modify, overwrite, refactor, simplify, or delete any of the following files without explicit, unambiguous user confirmation:

| Locked File Path | Reason for Protection |
| :--- | :--- |
| `src/components/intro/IntroLoader.tsx` | **CRITICAL:** High-precision mathematical SVG vector assembly engine based on Framer physics. Editing this disrupts easing math, dash arrays, path geometries, and canvas synchronization. |
| `src/components/intro/*` | Contains the core theatrical intro loader system and barrel exports. |
| `src/lib/sound.ts` | Zero-dependency Web Audio API sound synthesizer calibrated for tactile clicks, micro-ticks, and spark discharges. |
| `public/fyi-logo.jpg` | Official university chapter branding emblem. |
| `firebase.json` | Core Firebase Hosting routing rewrites. |

> ⚠️ **RULE FOR INTRO FILE:** If a user asks general styling or page layout questions, **LEAVE `IntroLoader.tsx` UNTOUCHED**. The intro plays automatically and is finalized.

---

## ✅ 2. PERMITTED & SAFELY EDITABLE FILES

AI assistants are permitted and encouraged to edit the following files to update content, features, and styles:

### 1. Data Layer (Single Source of Truth)
- `src/data/clubData.ts`
  - Safe to update club metadata, project listings, event dates, FAQs, and team member profiles.
  - Squads: Executive Council (President & VP) and the 6 functional teams (Technical, Design & Content, Event Management, Photography, PR & Outreach, Social Media) with Lead and Co-Lead pairings.

### 2. Page Views & Sections
- `src/pages/home/*` (e.g. `HeroSection.tsx`, `BulbWireRoadmap.tsx`, `SelectedWorks.tsx`, `UpcomingEvents.tsx`, `GuildTeam.tsx`, `ManifestoSection.tsx`, `FaqSection.tsx`)
- `src/pages/about/AboutPage.tsx`
- `src/pages/projects/ProjectsPage.tsx`
- `src/pages/events/EventsPage.tsx`
- `src/pages/team/TeamPage.tsx`
- `src/pages/gallery/GalleryPage.tsx`
- `src/pages/join/JoinPage.tsx`

### 3. Layout & Common UI Components
- `src/components/layout/Navbar.tsx` (Maintain `fyi.vitbhopal` brandmark and large logo `w-14 h-14` or larger)
- `src/components/layout/Footer.tsx` (Maintain social links and large logo `w-14 h-14`)
- `src/components/common/PageHeader.tsx`
- `src/components/common/JoinModal.tsx`
- `src/components/ui/CustomCursor.tsx`

### 4. Styles & Tokens
- `src/index.css` (Tailwind layers, custom brutalist box-shadows, animations)
- `tailwind.config.js` (Color extensions: `brand-orange`, `brand-cyan`, `brand-yellow`, `surface`)

### 5. Services & Types
- `src/types/index.ts` (TypeScript interfaces)
- `src/lib/firebase.ts` (Firestore REST submission endpoints)

---

## 🎨 3. Design Language & Aesthetics Guidelines

When creating or modifying components, AI agents **MUST** respect the established visual design:
1. **Neo-Brutalism & Tactical Grid:** Use `#111111` 2px or 3px solid borders, heavy drop-shadows (`brutal-shadow`, `brutal-shadow-sm`, `brutal-shadow-orange`, `brutal-shadow-cyan`), and corner crosshairs (`+`).
2. **Typography Hierarchy:**
   - Headlines: `font-headline` (Syne)
   - Body copy: `font-body` (Hanken Grotesk)
   - Monospace telemetry / labels: `font-mono` (JetBrains Mono)
3. **Palette Harmony:**
   - Backgrounds: `#F6F3EB` (surface), `#EBE7DC` (surface-dim), `#FFFFFF` (card)
   - Accents: `#FF4800` (Electric Orange), `#00E5FF` (Electric Cyan), `#FFE600` (Tactical Yellow)
4. **Interaction Quality:**
   - Add `data-tilt` on interactive cards for gyroscopic 3D perspective tilt.
   - Use `.magnetic-btn` and `.btn-elastic` for springy hover physics.
   - Never remove `playClickSound()` or `playHoverTick()` tactile audio feedback.

---

*This document was created to preserve the artistic and architectural integrity of the FYI Club website.*

