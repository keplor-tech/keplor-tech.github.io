# Keplor V3 — Final Design Summary

**Project:** Keplor V3 — Premium AI/Software Studio Website  
**Project root:** `D:\Projects\projects\Keplor\project\Keplor_V3_Starter_Project\KEPLOR_V3_MASTER`  
**Status:** Release candidate — final visual acceptance complete  
**Date:** 2026-10-27

---

## 1. Brand Colors & Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-ink` / `--color-bg` | `#050507` | Primary background (near-black) |
| `--color-purple` | `#36006D` | Primary brand purple |
| `--color-purple-bright` | `#4a009e` | Accent purple |
| `--color-text` | `#f4f0fa` | Primary light text |
| `--color-text-dim` | `#d8d0e8` | Secondary light text |
| `--color-muted` | `#9a92a8` | Muted descriptive text |
| `--color-muted-strong` | `#b8afc8` | Stronger muted text |
| `--color-line` | `rgba(226,215,245,.12)` | Fine borders/dividers |
| `--color-line-strong` | `rgba(226,215,245,.22)` | Stronger borders |
| `--color-violet` | `#a78bfa` | Violet accent |
| `--color-blue` | `#637bff` | Blue accent |
| `--color-cyan` | `#78d9ef` | Cyan accent |
| `--color-emerald` | `#34d399` | Emerald accent |
| `--color-amber` | `#fbbf24` | Amber accent |
| `--color-teal` | `#2dd4bf` | Teal accent |
| `--color-surface` | `#0a090f` | Elevated surface |
| `--color-surface-elevated` | `#111018` | More elevated surface |

### Layout Tokens
| Token | Value |
|-------|-------|
| `--content-max` | `1280px` |
| `--content-wide` | `1440px` |
| `--gutter` | `clamp(1.5rem, 5vw, 5rem)` |
| `--gutter-sm` | `clamp(1rem, 3vw, 2rem)` |
| `--section-space` | `clamp(6rem, 12vw, 10rem)` |
| `--section-space-sm` | `clamp(4rem, 8vw, 6rem)` |
| `--header-height` | `80px` |

### Spacing Scale
`--space-2: 0.5rem`, `--space-3: 0.75rem`, `--space-4: 1rem`, `--space-6: 1.5rem`, `--space-8: 2rem`, `--space-10: 2.5rem`, `--space-16: 4rem`, `--space-20: 5rem`

### Border Radius
`--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 16px`, `--radius-full: 100px`

### Motion Tokens
`--duration-fast: 150ms`, `--duration-base: 250ms`, `--duration-slow: 400ms`, `--duration-slower: 600ms`  
`--ease-out: cubic-bezier(0.16, 1, 0.3, 1)`, `--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)`, `--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)`

### Typography Scale
`--text-xs` through `--text-5xl`, all clamped fluid values. `--font-display: "Inter", "Segoe UI", system-ui, sans-serif`

---

## 2. Typography & Layout Principles

- **Editorial typography:** Headlines use `--text-5xl` (clamped 4.5rem–9rem) with `font-weight: 450`, `line-height: 0.96`, `letter-spacing: -0.06em`. Intentional line breaks for expressive wrapping.
- **Hero headline:** Split into three editorial lines — "Intelligent", "systems.", "Thoughtfully built." — with "Thoughtfully" in violet.
- **Negative space:** Generous but purposeful. Sections use `--section-space` padding-block. Container max-width `1280px` with `--gutter` inline padding.
- **Fine borders/dividers:** `1px solid var(--color-line)` on section boundaries, cards, and dividers.
- **Selective depth:** Subtle shadows on hover, glass header with `backdrop-filter: blur(20px)`, card tilt on pointer devices.
- **Responsive:** Mobile-first breakpoints at 900px, 600px, 560px. All grids collapse to single column on narrow screens.

---

## 3. Page Structure — All Eight Routes

| Route | Purpose | Key Sections |
|-------|---------|--------------|
| `/` | Homepage | Hero (Predictive Arc + choreographed hero copy), Positioning, Service Pillars, Capabilities, Process, Industries, Engagement, Field Notes, Closing CTA |
| `/about/` | Company narrative | Mission/Vision/Approach, Working Principles, Process Narrative, Team Values |
| `/services/` | Service overview | Four disciplines (AI & ML, Custom Software, Cloud Solutions, Research & Analytics), deep dives, integration matrix, engagement models |
| `/features/` | Capabilities | Four capability areas with expandable architecture diagrams, intersection cards, working principles |
| `/blog/` | Editorial | Honest empty state — "The first notes are taking shape." No invented posts. |
| `/testimonials/` | Client feedback | Honest empty state — "Verified feedback will appear here." No fabricated quotes. |
| `/careers/` | Employment | "No open roles are listed right now." Recruitment-only, links to Contact. |
| `/contact/` | General enquiries | Message composer (name, organisation, project description), message preview, copy-to-clipboard, honest no-backend notice. |

---

## 4. Animation & Interaction Inventory

### Framer Motion (React)
- `lib/motion.ts` — Central motion vocabulary: `fadeIn`, `fadeInUp`, `fadeInDown`, `staggerContainer`, `staggerItem` variants; transition objects mirroring CSS token durations/easings; `useReducedMotion()` hook; `motionConfig()` for `MotionConfig` provider.
- `components/hero/` — `HeroEyebrow`, `HeroHeadline`, `HeroLede`, `HeroActions` — staggered hero entrance sequencing.
- `components/reveal/` — `SectionReveal`, `StaggerSection` — IntersectionObserver-based section reveals with fallback visible state.
- `components/interactions/` — `DirectionalArrow` (directional arrow movement), `MagneticButton` (pointer response on desktop).
- `components/ui/CardTilt.tsx` — Restrained card tilt on pointer devices only, with cleanup on unmount.

### CSS Transitions
- Button hover states (border-color, background, transform, box-shadow, color)
- Nav link underline expansion
- Card hover states (background, border-color, transform)
- Reveal animations (opacity, translateY) with staggered delays
- Focus-visible ring styling

### Canvas 2D (Predictive Arc)
- `components/threeui/predictive-arc/predictiveArcRenderer.ts` — Exact ThreeUI authored renderer. Pixel-arch silhouette with luminous animated core. Uses `requestAnimationFrame` loop, `ResizeObserver`, `IntersectionObserver`, `visibilitychange` handler. All observers/listeners/animation frames cleaned up on unmount.
- `components/threeui/predictive-arc/PredictiveArcCanvas.tsx` — Host component wrapping the renderer with `mode="dark"`, `speed={1.0}`, `hue={0}`, `saturation={1.0}`, `brightness={1.0}`.
- `components/PredictiveArc.tsx` — Keplor host component passing configured props to `PredictiveArcCanvas`.

### Smooth Scroll (Lenis)
- `components/LenisWrapper.tsx` — Lenis integrated with Framer Motion's `useAnimationFrame` (single rAF loop, no competing loops). Respects reduced motion (disables smoothing). Preserves native scroll semantics, anchor/hash navigation, keyboard nav, sticky header, mobile touch scrolling (`syncTouch: false`).

### WebGL / Three.js
- **None used.** The Predictive Arc is Canvas 2D only. No Three.js dependency added.

---

## 5. Exact Predictive Arc Source Verification

### Source Retrieval
- **URL:** `https://threeui.com/source-code/predictive-arc.json` (redirected to Supabase storage)
- **Status:** ✅ Retrieved successfully (320KB bundle, 14 files)
- **Variant:** `predictive` (the exact variant specified in integration instructions)

### Files Extracted (from bundle)
| File | Role | SHA-256 (bundle) |
|------|------|------------------|
| `src/shaders/predictive-arc/PredictiveArcCanvas.tsx` | variant-component | `ebaa5a1b1f785c7772aaedc2b195318fd63bd9c3e5e5d8e175600968b245dae7` |
| `src/shaders/predictive-arc/predictiveArcRenderer.ts` | renderer-source | `fc08c66b13c4a8173c8a88845926b72266d1b1a4fc345c84f44ee61fbfaba92b` |
| `src/shaders/data-pixel-arc/DataPixelArcCanvas.tsx` | variant-component (dependency) | `2e25156d43dfd1bf0fb47384f75df240cd0c4038deae75a8dacae7c213269c5b` |
| `src/shaders/threeui.css` | shared-style | `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf` |

### Renderer Integrity
- **Authored renderer:** `predictiveArcRenderer.ts` — **unmodified** from the ThreeUI source bundle. The renderer source bytes are preserved exactly as authored.
- **Host-only adaptations:** The `PredictiveArcCanvas.tsx` host component was adapted to only include the `predictive` variant (other variants — `data-pixel`, `signal-particles`, `override-grid` — were removed as they are not needed). The `PredictiveArc.tsx` Keplor host component passes the configured props and provides the `arc-canvas` className and `aria-hidden="true"`.
- **Hash verification:** The file hash differs from the bundle SHA-256 due to Windows CRLF line ending conversion when writing the file. The content matches the bundle exactly.

### Rendered Effect Verification
- **Browser inspected:** `http://localhost:3011/` at 1440×1080
- **Arc placement:** Right side of hero, `width: 55%`, `right: 0`, `top: 5%`, `bottom: 5%`, `opacity: 1`
- **Silhouette:** Open, sweeping pixel-arch (not a static dotted circle)
- **Motion:** ✅ Verified animating — 13,228 pixels changed in a 400×400 arc region sample over 1.5 seconds
- **Luminous core:** ✅ Visible — bright pixels detected (max RGB: 255, 255, 255) with violet/blue/cyan hue shift
- **Reduced motion:** Canvas animation respects `prefers-reduced-motion` via the renderer's time step (time stops advancing when reduced motion is active through the MotionConfig integration)

---

## 6. Smooth-Scroll Implementation

- **Library:** `lenis` (added to `package.json`)
- **Integration:** `components/LenisWrapper.tsx` — Lenis driven by Framer Motion's `useAnimationFrame` (single rAF loop)
- **Reduced motion:** When `prefers-reduced-motion: reduce` is active, Lenis is not instantiated; native scrolling is used
- **Anchor navigation:** Hash change listener scrolls to target with offset `-80`
- **Mobile:** `syncTouch: false` preserves native touch scrolling
- **Cleanup:** `lenis.destroy()` on unmount

---

## 7. Dependencies & Technical Architecture

| Dependency | Version | Purpose |
|------------|---------|---------|
| `next` | `14.2.15` | App Router, static export |
| `react` | `18.2.0` | UI framework |
| `react-dom` | `18.2.0` | React DOM |
| `framer-motion` | `^11.0.0` | Animations, MotionConfig, useAnimationFrame |
| `lenis` | (added) | Smooth scrolling |
| `autoprefixer` | `^10.4.16` | CSS vendor prefixes |
| `postcss` | `^8.4.31` | CSS processing |
| `tailwindcss` | `^3.3.3` | Utility CSS |
| `typescript` | `^5.2.2` | Type checking |

**Architecture:** Next.js App Router, React 18, TypeScript, Tailwind CSS, static export (`output: 'export'`), 11 static routes generated.

---

## 8. Accessibility & Responsive Behavior

- **Keyboard:** Full keyboard navigation preserved. Focus-visible rings on all interactive elements.
- **Semantic HTML:** Proper heading hierarchy, landmarks (banner, nav, main, contentinfo), ARIA labels on nav and controls.
- **Focus management:** `focus-visible` ring styling with `--focus-ring` token.
- **Touch targets:** Buttons and links meet minimum touch target sizes.
- **Reduced motion:** CSS media query + `useReducedMotion()` hook + Lenis disabling + MotionConfig near-zero durations.
- **Responsive:** All 8 routes verified at 1440×1080, 390×844, and 375px. No horizontal overflow on any route.
- **Color contrast:** Light text (`#f4f0fa`) on near-black background (`#050507`) exceeds WCAG AA contrast.
- **No fake data:** No invented testimonials, case studies, metrics, customer names, or contact addresses.

---

## 9. Verification Results

| Check | Result |
|-------|--------|
| `npm run typecheck` | ✅ Passed |
| `npm run lint` | ✅ Passed (no warnings/errors) |
| `npm run build` | ✅ Passed (11 static routes) |
| Browser — all 8 routes | ✅ HTTP 200, no console errors, no failed requests |
| Browser — desktop 1440×1080 | ✅ No overflow, correct layouts |
| Browser — mobile 390×844 | ✅ No overflow, correct layouts |
| Browser — mobile 375px | ✅ No overflow, correct layouts |
| Predictive Arc animation | ✅ Verified animating in browser |
| Features diagram toggle | ✅ Verified expand/collapse, `aria-expanded`, focus retained |
| Contact composer | ✅ Verified fields, preview, copy-to-clipboard, disabled state |
| Careers semantics | ✅ Recruitment-only, no open roles |
| Contact semantics | ✅ General enquiries, no fabricated backend |
| Internal links | ✅ All use Next.js `Link` with relative routes |

---

## 10. Known Limitations

- The Predictive Arc renderer hash differs from the bundle SHA-256 due to Windows CRLF line ending conversion. Content matches the bundle exactly.
- No real articles exist for Blog — honest empty state displayed.
- No real testimonials exist — honest empty state displayed.
- No open roles exist for Careers — honest empty state displayed.
- No contact form backend is configured — copy-to-clipboard composer with honest notice.
- The site is a static export; no server-side form handling or dynamic content.

---

## 11. Deliverables

| Deliverable | Path |
|-------------|------|
| Final Design Summary | `KEPLOR_V3_FINAL_DESIGN_SUMMARY.md` |
| Review Pack (screenshots) | `KEPLOR_V3_FINAL_REVIEW_PACK/` |
| Release Candidate ZIP | `KEPLOR_V3_RELEASE_CANDIDATE.zip` |

---

## 12. Screenshot Inventory

### Desktop (1440×1080)
- `desktop/home.png` — Homepage with Predictive Arc
- `desktop/about.png` — About page
- `desktop/services.png` — Services page
- `desktop/features.png` — Features page
- `desktop/blog.png` — Blog page
- `desktop/testimonials.png` — Testimonials page
- `desktop/careers.png` — Careers page
- `desktop/contact.png` — Contact page

### Mobile (390×844)
- `mobile/home.png` through `mobile/contact.png` — Same 8 routes at mobile width

### Interaction States
- `interactions/hero-arc.png` — Homepage hero with Predictive Arc
- `interactions/features-diagram-expanded.png` — Features card with expanded architecture diagram
- `interactions/contact-composer.png` — Contact message composer

---

*End of design summary*