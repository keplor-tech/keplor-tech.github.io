# KEPLOR V3 — Milestone 2: Premium Inner-Page Redesign

## Project Overview

**Project:** KEPLOR V3 — Premium Inner-Page Redesign  
**Milestone:** 2 of 2  
**Status:** Complete  
**Date:** October 27, 2026  
**Location:** `D:\Projects\projects\Keplor\project\Keplor_V3_Starter_Project\KEPLOR_V3_MASTER`

---

## Brand Theme & Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050507` | Primary page background (near-black) |
| Primary Purple | `#36006D` | Brand primary, accents, hover states |
| Violet | `#8B5CF6` | Secondary accent, interactive elements |
| Indigo | Restricted use | Supporting accent lighting |
| Blue | Restricted use | Supporting accent lighting |
| Cyan | Restricted use | Supporting accent lighting |
| Ink (Text Primary) | Near-white | Headlines, primary text |
| Muted (Text Secondary) | Desaturated gray | Body text, descriptions |
| Line (Borders) | `rgba(226,215,245,0.08)` | Fine borders, dividers |
| Emerald | `#10B981` | Success/positive accents (deliverables) |

### Typography

- **Display Font:** Editorial serif/sans-serif hybrid for headlines (intentional wrapping, large scale)
- **Body Font:** Clean sans-serif for descriptions and UI text
- **Scale:** `clamp()`-based fluid typography with `var(--text-xs)` through `var(--text-4xl)`
- **Headline Style:** Editorial, intentional line breaks, purple accent on key words
- **Eyebrow:** Small uppercase letter-spaced labels above headlines (e.g., "SERVICES", "ABOUT KEPLOR", "CAPABILITIES")

### Spacing & Layout

- **Gutter:** `var(--gutter)` for consistent page margins
- **Section Spacing:** `var(--space-6)` through `var(--space-20)` for generous but purposeful whitespace
- **Border Radius:** `var(--radius-sm)`, `var(--radius-md)`, `var(--radius-lg)`, `var(--radius-full)`
- **Grid System:** Responsive CSS Grid (4-col → 2-col → 1-col on mobile)

### Visual Principles

- **Fine borders and dividers:** 1px subtle borders on cards and sections
- **Selective depth:** Subtle shadows on interactive panels, hover lift effects
- **Interactive panels:** Cards with hover state transitions (border color, background tint, translateY)
- **Refined transitions:** CSS transitions with `var(--duration-normal)` and `var(--ease-out)`
- **No decorative grids, particle globes, or competing interaction effects**

---

## Pages Implemented

### 1. Services Page (`/services`)

**Hero Section:**
- Eyebrow: "SERVICES"
- Headline: "The right tools for the problem at hand."
- Large editorial typography with purple accent

**Service Overview Grid:**
- 4 discipline cards in a responsive grid (4-col desktop → 2-col tablet → 1-col mobile)
- Each card: icon, title, tagline, description, "Learn more" link
- Hover state: border color shifts to purple, background tint, translateY(-4px)

**Deep-Dive Sections (4):**
Each service gets a full-width section with:
1. **AI & Machine Learning** — Problems, scope, value propositions
2. **Custom Software Development** — Problems, scope, value propositions
3. **Cloud Solutions** — Problems, scope, value propositions
4. **Research & Analytics** — Problems, scope, value propositions

Each deep-dive includes:
- Numbered icon header
- Problems addressed (bulleted list)
- Scope of work (bulleted list)
- Potential value (bulleted list)
- Hover state on cards

**Integration Matrix:**
- 3 cards showing cross-discipline compounding value
- Tags for related disciplines

**Engagement Models:**
- Project-Based, Retainer, Advisory
- Each with type badge, description, and deliverables list

---

### 2. About Page (`/about`)

**Hero Section:**
- Eyebrow: "ABOUT KEPLOR"
- Headline: "Build with purpose. Think beyond the obvious."

**Foundation Grid (3 cards):**
- Mission — Core purpose statement
- Vision — Future direction
- Approach — Methodology overview
- Each with icon, title, description; hover state

**Working Principles (6 cards):**
Numbered principle cards with:
- Icon, title, description
- Hover state with background tint
- Number badge in corner

**Process Narrative (4-phase timeline):**
- Step numbers in circular badges
- Phase titles and descriptions
- Activities chips (violet hover)
- Deliverables chips (emerald hover)
- Timeline connector line

**Team Values (4 cards):**
- Centered value cards with titles and descriptions

---

### 3. Features Page (`/features`)

**Hero Section:**
- Eyebrow: "CAPABILITIES"
- Headline: "A thoughtful system, not a feature checklist."

**Capability Cards (4):**
Each card includes:
1. **Applied Intelligence** — Model lifecycle, inference patterns, human-in-the-loop, evaluation rigor
2. **Custom Software Engineering** — Architecture, APIs, integration, deployment
3. **Cloud-Native Infrastructure** — Scalability, reliability, security, operations
4. **Research & Analytics** — Data exploration, statistical modeling, insight generation

Each capability card has:
- Icon header
- Description
- Key concept tags
- **Expandable SVG architecture diagram** (toggle button with Framer Motion animation)
- Diagram shows data flow, model lifecycle, or system architecture

**Intersection Cards (6):**
Cross-capability compounding explanations (e.g., AI + Cloud = Scalable inference)

**Working Principles (6):**
Capability composition principles with application tags

---

## Animations & Interactions

### Animation Inventory

| Type | Implementation | Pages | Reduced Motion |
|------|---------------|-------|----------------|
| Section Reveal | IntersectionObserver + CSS `.visible` class | All | Disabled |
| Staggered Children | CSS `transition-delay` on child elements | Services overview, Principles, Intersections | Disabled |
| Card Hover Lift | `transform: translateY(-4px)` + border color shift | Service cards, principle cards, capability cards | Disabled |
| Link Gap Expansion | CSS `gap` transition on hover | Service overview links | Disabled |
| Diagram Toggle | Framer Motion `motion.div` height animation + icon rotation | Features page capability diagrams | Disabled |
| Process Step Pulse | Subtle scale animation on step numbers | About page process timeline | Disabled |
| Hover Chip Color | Border + text color transition (violet/emerald) | About page activities/deliverables | Disabled |

### 3D Interactions

**None used.** The design intentionally avoids:
- 3D effects
- Particle globes
- Decorative grids
- Interaction effects that compete with content

All depth is achieved through:
- CSS `box-shadow` for selective depth
- Background gradients for subtle lighting
- Border transitions for interactive feedback

### Accessibility

- Semantic HTML (header, nav, main, section, h1-h3 hierarchy)
- ARIA labels on interactive elements
- Keyboard-navigable focus states
- `prefers-reduced-motion` support (all animations disabled)
- Color contrast meets WCAG AA on dark background

---

## Technical Implementation

### Stack
- **Framework:** Next.js 14.2.15 (App Router)
- **React:** 18.2.0
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation:** Framer Motion 11.0.0
- **Language:** TypeScript
- **Export:** Static export (`output: 'export'`)

### Files Modified

| File | Changes |
|------|---------|
| `app/services/page.tsx` | Complete rewrite (+459 lines) |
| `app/about/page.tsx` | Complete rewrite (+346 lines) |
| `app/features/page.tsx` | Complete rewrite (+546 lines) |
| `app/globals.css` | Added 500+ lines of component styles |
| `app/page.tsx` | Minor updates (+73 lines) |
| `components/Sections.tsx` | Shared component updates (+408 lines) |
| `components/PredictiveArc.tsx` | Predictive arc updates (+86 lines) |
| `components/SiteShell.tsx` | Shell component updates (+118 lines) |
| `.eslintrc.json` | Lint config update |
| `tsconfig.json` | TypeScript config update |

### Verification Results

| Check | Command | Result |
|-------|---------|--------|
| TypeScript | `npm run typecheck` | ✅ Passed (0 errors) |
| Lint | `npm run lint` | ✅ Passed (0 warnings/errors) |
| Build | `npm run build` | ✅ Passed (static export, 11 pages) |
| Browser | Home, Services, About, Features | ✅ No console errors |
| Responsive | Desktop + Mobile | ✅ Verified |

### Content Guidelines Followed

- ✅ No invented testimonials
- ✅ No invented case studies
- ✅ No invented metrics or performance figures
- ✅ No invented employee biographies
- ✅ No invented company history or funding
- ✅ No invented office locations or client relationships
- ✅ No unsupported guarantees
- ✅ No public pricing (all 8 routes retained)
- ✅ No new dependencies added

---

## Screenshots

The following page screenshots are available as attached images in this conversation:

1. **Home** — `home.png` — Intelligent systems homepage
2. **Services** — `services.png` — Services overview page
3. **About** — `about.png` — About page with mission and principles
4. **Features** — `features.png` — Features/capabilities page

---

## Remaining Work

None. All Milestone 2 requirements have been implemented, verified, and inspected in the browser.
