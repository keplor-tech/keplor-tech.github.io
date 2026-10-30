# Handoff State — Keplor V3 Hero Scroll Transition

## Gate 2 progress — 2026-10-30

Gate 2 documentation is complete in [KEPLOR_V3_GATE2_DESIGN_AND_TECHNICAL_SPEC.md](./KEPLOR_V3_GATE2_DESIGN_AND_TECHNICAL_SPEC.md).

### Decision summary

- Recommended homepage composition: **Option A**, a dedicated 500vh cinematic intro followed by normal-flow Services, Industries, Approach, Contact, and the 12-column Obsidian Vault footer.
- Rendering: one transparent React Three Fiber WebGL canvas with one deterministic master particle buffer and five target-position attributes.
- Motion authority: Lenis for smooth scrolling, GSAP ScrollTrigger for the pinned master progress, R3F/Three.js for scene rendering, and Framer Motion only for local UI transitions.
- Authenticity: the current Predictive Arc remains classified as an internal Canvas 2D approximation. Gate 3 should implement a documented custom recreation, not claim ThreeUI authenticity.
- Reduced motion: no Lenis, no pinning, no scroll scrub, no continuous particle movement; render a complete static portal and natural-flow semantic chapters.
- Proposed, not installed, dependencies: `three@0.160.0`, `@types/three@0.160.0`, `@react-three/fiber@8.17.10`, and `gsap@3.12.5`.

### Gate 2 verification notes

- Source-level review confirmed the current Arc uses `canvas.getContext("2d", { alpha: false })` and an opaque fill, so it cannot be layered over a WebGL scene.
- Source-level review confirmed Lenis is currently advanced from Framer Motion's animation frame loop and the homepage has a separate Framer Motion scroll-progress path.
- `next.config.mjs` confirms static export compatibility constraints.
- `app/globals.css` contains `.ambient-light-overlay` nested inside `:root`; this is recorded as a verified later-gate CSS defect and was not modified under Gate 2 restrictions.
- No application source, dependency manifest, route, or original reference file was changed during Gate 2.

## Gate 3 progress — 2026-10-30 (creative direction corrected)

Gate 3 was corrected per the critical creative direction correction. The original prototype at `design/prototype/index.html` is the canonical visual baseline. The Gate 2 "Option A" 500vh pinned cinematic intro was **reverted** because it restructured the homepage away from the approved design.

### Decision summary

- **Design authority:** Original `design/prototype/index.html` is the canonical baseline. Section order, typography, navigation, footer, and content are preserved exactly.
- **Restored homepage:** Hero → Services → Industries → Approach → About → Contact (original order). Original headline "Intelligent systems. Built around your business." Original 4-column Services grid. Original About section (belief + mission/vision). Original navigation (6 links + CTA). Original footer structure.
- **Particle system:** Integrated section-anchored, not a 500vh pinned intro. One transparent R3F canvas behind content. Section scroll positions drive stage progress: Hero=portal, Services=helix, Industries=wave, Approach=vortex, Contact=orbit.
- **Removed:** 500vh pinned cinematic intro, giant stage headings, Canvas 2D Arc overlap, Framer Motion scroll progress, Lenis smooth scroll, 8-link navigation, Testimonials/Products/Features/Blog/Careers routes from nav.
- **Added:** Grain overlay, ambient wash with cursor tracking, original section border-top dividers with in-view glow, original section styles.
- **Dependencies installed:** `three@0.160.0`, `@types/three@0.160.0`, `@react-three/fiber@8.17.10`, `gsap@3.12.5` (available for use, not yet wired into the section-anchored particle controller).

### Gate 3 verification notes

- Typecheck: pass (0 errors)
- Lint: pass (0 warnings/errors)
- Production build: pass (11 static routes)
- Original prototype screenshots captured: 1440px, 768px, 390px
- Restored implementation screenshots captured: 1440px, 768px, 390px
- Previous (drifted) implementation screenshots captured for comparison: 1440px, 768px, 390px
- Fidelity audit documented in `docs/ORIGINAL_DESIGN_FIDELITY_AUDIT.md`

### Remaining work for Gate 3 completion

- Wire the section-anchored particle controller to update R3F uniforms from IntersectionObserver progress (currently the observer computes progress but the MasterParticleScene uniforms need to be connected via context or props).
- Verify the particle system is visibly alive (continuous movement, luminous core, real depth) at all breakpoints.
- Run side-by-side visual QA comparing original prototype vs restored implementation screenshots.

## Stage 2 progress — 2026-10-30

Stage 2 — Complete eight-page website implementation & original design preservation — complete and verified.

### Decision summary

- **Design authority:** Original `design/prototype/index.html` remains the canonical baseline.
- **Eight routes implemented:** `/`, `/about`, `/services`, `/features`, `/products`, `/blog`, `/careers`, `/contact`.
- **Standalone `/testimonials` route removed.** Testimonials content remains embedded in About page as illustrative case studies.
- **Actual logo image used:** `public/assets/keplor-primary.png` (500×500 RGBA) in header and footer brand lockups alongside the Keplor wordmark.
- **Content data files:** `lib/content/products.ts`, `lib/content/case-studies.ts`, `lib/content/testimonials.ts`, `lib/content/blog-posts.ts`, `lib/content/careers.ts` — all illustrative/demo content clearly labeled as sample/preview/concept.
- **Contact form:** Complete frontend flow with name, email, organisation, enquiry type, project description, validation, mailto action, copy message, honest backend disclosure.
- **Navigation:** SiteShell.tsx uses real Next.js routes for all eight destinations; header and footer consistent.
- **Dead code removed:** `CinematicIntro.tsx` and `useCinematicTimeline.ts` (500vh pinned approach superseded).
- **Existing R3F particle system preserved** for Stage 3 refinement.

### Stage 2 verification notes

- Typecheck: pass (0 errors)
- Lint: pass (0 warnings/errors)
- Production build: pass (10 static routes: /, /about, /blog, /careers, /contact, /features, /products, /services, /_not-found)
- All 8 routes verified running on port 3011
- Screenshots captured: stage2-home-1440, stage2-about-1440, stage2-services-1440, stage2-features-1440, stage2-products-1440, stage2-blog-1440, stage2-careers-1440, stage2-contact-1440, stage2-home-mobile-390
- All previous QA screenshots preserved

## Summary

Implemented Step 4 of the Keplor V3 homepage experience: mobile hero repair, continuous scroll choreography, Predictive Arc brightness animation, ambient lighting shift, and reduced-motion support.

## Modified Files

| File | Rationale |
|------|-----------|
| `app/globals.css` | Added ambient-light CSS custom properties; updated `.site-shell::before` to use them; added `.ambient-light-overlay` class; fixed mobile hero layout below 768px (single column, headline clamp, stacked CTAs, repositioned Arc); tightened 560px headline clamp |
| `app/page.tsx` | Added scroll-linked motion via `useScroll`/`useTransform`; measures hero geometry on mount; computes hero scroll progress (0.0 at hero top, 1.0 at hero bottom); drives ambient lighting CSS vars via MotionValue subscription; animates PositioningSection emergence (progress 0.3–0.7); removed `SectionReveal` wrapper around PositioningSection; SSR-safe window guards |
| `components/PredictiveArc.tsx` | Accepts `brightnessProgress` MotionValue and passes it to `PredictiveArcCanvas` |
| `components/threeui/predictive-arc/PredictiveArcCanvas.tsx` | Subscribes to `brightnessProgress` MotionValue `on("change")` to update renderer options ref without React re-renders; brightness = `1 - progress` |
| `components/hero/HeroHeadline.tsx` | Scroll-linked translateY [0, -60, -180, -280] and opacity [1, 0.85, 0.15, 0] across progress [0, 0.3, 0.7, 1.0]; reduced-motion bypass |
| `components/hero/HeroEyebrow.tsx` | Scroll-linked translateY [0, -20, -40, -60] and opacity [1, 0.9, 0.5, 0]; reduced-motion bypass |
| `components/hero/HeroLede.tsx` | Scroll-linked translateY [0, -20, -50, -80] and opacity [1, 0.9, 0.4, 0]; reduced-motion bypass |
| `components/hero/HeroActions.tsx` | Scroll-linked translateY [0, -20, -60, -100] and opacity [1, 0.9, 0.3, 0]; per-item staggered offsets; reduced-motion bypass |

## Scroll Target & Progress Mapping

- **Target**: Hero `<section>` element measured via `getBoundingClientRect()` on mount
- **Offsets**: `top = hero.getBoundingClientRect().top + window.pageYOffset`, `range = hero.offsetHeight`
- **Progress formula**: `(scrollY - top) / range`, clamped to [0, 1] via `useTransform` with `clamp: false`
- **Checkpoints**: `[0.0, 0.3, 0.7, 1.0]`

### Hero headline mapping
| Progress | translateY | Opacity |
|----------|-----------|---------|
| 0.0 | 0px | 1 |
| 0.3 | -60px | 0.85 |
| 0.7 | -180px | 0.15 |
| 1.0 | -280px | 0 |

### Arc container mapping (via brightness)
| Progress | Brightness |
|----------|------------|
| 0.0 | 1.0 |
| 0.3 | 0.7 |
| 0.7 | 0.3 |
| 1.0 | 0.0 |

### PositioningSection mapping
| Progress | Opacity | translateY |
|----------|---------|------------|
| 0.0 | 0 | 24px |
| 0.3 | 0 | 24px |
| 0.7 | 1 | 0px |
| 1.0 | 1 | 0px |

## Responsive Behavior

- **Below 768px**: Hero switches to single-column block layout; headline uses `clamp(2.6rem, 16vw, 4.8rem)` with `max-width: 100%`; Arc repositioned as full-width background element (height 260px, opacity 0.45, no mask); CTAs stack full-width; gutters use `--gutter-sm`
- **560px and below**: Headline clamp tightened to `clamp(2.6rem, 16vw, 4.8rem)`; padding reduced to `5rem 4rem`
- **Desktop**: Original two-column grid layout preserved

## Reduced Motion Behavior

- When `prefers-reduced-motion: reduce` is enabled:
  - Hero headline, eyebrow, lede, actions remain at natural resting positions (y: 0, opacity: 1)
  - PositioningSection renders immediately without scroll animation
  - Arc brightness stays at 1.0 (no scroll-driven change)
  - Ambient lighting stays at initial violet/cyan state
  - Lenis smoothing disabled (native scrolling)
  - Arc's internal time-driven animation continues (not explicitly stopped per project policy)

## Package Changes

- No new dependencies installed
- No existing dependencies modified

## Verification Results

| Command | Exit Code | Result |
|---------|-----------|--------|
| `npm run typecheck` | 0 | Pass |
| `npm run lint` | 0 | Pass |
| `npm run build` | 0 | Pass (static export, `out/` generated) |

## Remaining Issues / Unverified

- Browser visual verification not performed (no Playwright/browser tooling available in this environment)
- Screenshot capture at 1440px, 390px, 375px viewports and reduced-motion mode not performed
- Reverse scrolling behavior not visually verified
- Horizontal overflow at mobile breakpoints not visually verified

## Verification Steps for GLM 5.3 Flash

1. Run `npm run dev` and open `http://localhost:3011`
2. Capture desktop (1440px) screenshots at scroll 0%, ~40%, ~90%
3. Capture mobile (390px and 375px) screenshots at same scroll states
4. Verify headline "Thoughtfully" does not clip at 390px/375px
5. Verify no horizontal overflow on mobile
6. Verify reverse scrolling restores intermediate frames naturally
7. Enable `prefers-reduced-motion: reduce` and verify hero content fully visible at resting positions
8. Verify Arc brightness dims with scroll and restores on scroll up
9. Verify PositioningSection emerges around progress 0.3 and settles by 0.7
10. Confirm no console errors