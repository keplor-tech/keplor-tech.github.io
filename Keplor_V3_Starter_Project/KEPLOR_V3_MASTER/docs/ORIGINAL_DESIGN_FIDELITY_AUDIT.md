# Original Design Fidelity Audit — Keplor V3

**Date:** 2026-10-30  
**Purpose:** Compare the current Next.js implementation against the approved original prototype at `design/prototype/index.html` and identify every deviation introduced by the Gate 2/Gate 3 redesign.

## 1. Original Prototype Structure (canonical)

The original prototype at `design/prototype/index.html` defines the approved visual baseline:

| Section | ID | Content |
|---|---|---|
| Hero | `home` | Eyebrow, H1 "Intelligent systems. Built around your business.", hero copy, hero actions, scroll indicator |
| Services | `services` | "01 / Services", "Ideas into intelligent solutions.", 4-column service grid (AI & ML, Custom Software, Cloud Solutions, Research & Analytics) |
| Industries | `industries` | "02 / Industries", "Technology for real-world complexity.", industry list with hover effects |
| Approach | `approach` | "03 / Approach", "A collaborative path from idea to impact.", 4 steps (Understand, Design, Build, Improve) |
| About | `about` | "04 / About Keplor", belief statement, mission, vision |
| Contact | `contact` | "05 / Contact", contact copy, primary button (mailto), contact details, footer |

**Key visual characteristics:**
- Near-black `#050507` background
- `Inter` sans-serif font system
- Grain overlay (fixed, `opacity: .035`)
- Ambient wash with cursor-tracking `--mx`/`--my` transform
- Section border-top dividers with `in-view` glow reveal
- 4-column services grid with `border-right` separators
- Industries as a horizontal list with hover translate
- Steps as a 2-column grid with step numbers
- Footer with brand, nav links, copyright
- IntersectionObserver reveals with staggered delays
- No 500vh pinned scene, no giant stage headings, no particle formations behind text

## 2. Current Implementation Deviations

| # | Area | Original | Current | Severity |
|---|---|---|---|---|
| 1 | Homepage headline | "Intelligent systems. Built around your business." | "Intelligent systems. Thoughtfully built." | High |
| 2 | Section order | Hero → Services → Industries → Approach → About → Contact | Hero → Positioning → Service Pillars → Capabilities → Process → Industries → Engagement → Field Notes → Closing CTA | Critical |
| 3 | Services layout | Open 4-column grid with borders | 3-card PositioningSection | Critical |
| 4 | About section | Present (belief + mission/vision) | Missing entirely | High |
| 5 | Testimonials route | Not in nav | Present in nav (`/testimonials`) | Medium |
| 6 | Particle system | None (static design) | 500vh pinned cinematic intro with 5 stage headings | Critical |
| 7 | Canvas | None | Opaque Canvas 2D Arc + R3F canvas overlapping | Critical |
| 8 | Navigation | 6 links + CTA (Services, Industries, Approach, About, Contact, Let's talk) | 8 links including Testimonials, Products, Features, Blog, Careers | High |
| 9 | Footer | Brand + 5 nav links + copyright | 3-column footer with different structure | High |
| 10 | Hero copy | "AI/ML, custom software, cloud and analytics..." | "We bring AI, machine learning, and custom software..." | Medium |
| 11 | Section reveals | IntersectionObserver `in-view` class with staggered delays | Framer Motion `useScroll`/`useTransform` + SectionReveal | Medium |
| 12 | Grain overlay | Present (`opacity: .035`) | Missing | Low |
| 13 | Ambient wash | Present with cursor tracking | Present (CSS vars) but different structure | Low |
| 14 | Particle motion | None | Tiny faint particle cloud, appears paused/static | Critical |

## 3. Required Corrections

1. **Restore original section order:** Hero → Services → Industries → Approach → About → Contact
2. **Restore original headline:** "Intelligent systems. Built around your business."
3. **Restore original Services:** Open 4-column grid, not 3 cards
4. **Restore About section:** Belief statement + mission/vision
5. **Remove 500vh pinned intro:** Integrate particle states into existing section scroll positions
6. **Fix particle system:** Continuous visible movement, luminous core, real depth
7. **Remove opaque Canvas 2D Arc:** Replace with transparent R3F only
8. **Preserve original navigation:** 6 links + CTA, no Testimonials/Products/Features/Blog/Careers additions
9. **Preserve original footer structure**
10. **Add grain overlay and ambient wash** from original design

## 4. Gate 3 Revised Approach

Instead of a new 500vh cinematic intro, the particle system will be integrated as follows:

| Section | Particle State | Anchor |
|---|---|---|
| Hero | Energy portal | Hero section scroll range |
| Services | Neural helix | Services section scroll range |
| Industries | Wave horizon | Industries section scroll range |
| Approach | Gravitational vortex | Approach section scroll range |
| Contact | Orbital formation | Contact section scroll range |

Each section's scroll range drives the master progress for that stage. The R3F canvas is a single transparent layer positioned behind the content, not a pinned 500vh spacer.

## 5. Files to Modify

- `app/page.tsx` — Restore original section order and content
- `app/globals.css` — Add grain overlay, restore original section styles, add R3F canvas layer
- `components/cinematic/CinematicIntro.tsx` — Replace with section-anchored particle controller
- `components/cinematic/particle/MasterParticleScene.tsx` — Keep, but drive progress from section scroll positions
- `lib/cinematic/useCinematicTimeline.ts` — Replace with section-scroll-driven progress

## 6. Acceptance Criteria (revised)

1. Site looks recognisably like the original approved prototype
2. Section order and composition unchanged
3. Typography and spacing faithful to original
4. Particle system visibly alive and properly positioned per section
5. Five stages transform smoothly as visitor scrolls through existing sections
6. No opaque canvas backgrounds overlap
7. No giant stage headings
8. No generic replacement cards or template sections
9. Original navigation, content and routes preserved
10. Desktop and mobile look deliberately designed
11. Original interactions continue to work
12. Typecheck, lint and production build pass
13. Browser screenshots demonstrate side-by-side comparison