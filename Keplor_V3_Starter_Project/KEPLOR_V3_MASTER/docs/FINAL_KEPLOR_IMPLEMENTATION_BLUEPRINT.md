# Final Keplor V3 Implementation Blueprint

**Stage:** 1 — Read-only audit (no application source code modified)  
**Date:** 2026-10-30  
**Author:** Principal Creative Technologist / Senior Frontend Architect  
**Workspace:** `D:\Projects\projects\Keplor\project\Keplor_V3_Starter_Project\KEPLOR_V3_MASTER`  
**Git branch:** `feat/hero-scroll-transition`  
**Dev port:** 3001 (3000 was in use)

---

## 1. Canonical Original Design Interpretation

The approved original design source of truth is:

`D:\Projects\projects\Keplor\project\_handoff\KEPLOR_V3_LIVE_SITE_MIGRATION_HANDOFF\design\prototype\index.html`

### Verified design characteristics (from source inspection)

| Characteristic | Value / Detail |
|---|---|
| Background | Obsidian-black `#050507` |
| Font stack | `Inter, "Helvetica Neue", Arial, sans-serif` |
| Primary text | `#f7f7fa` |
| Muted text | `#aaaab7` |
| Dim text | `#747482` |
| Divider line | `rgba(255,255,255,0.15)` |
| Purple accent | `#36006d` |
| Violet accent | `#a76aff` |
| Cyan accent | `#1689ce` |
| Accent highlight | `#bba0ff` |
| Layout padding | `clamp(24px, 6.2vw, 100px)` |
| Header height | 88px |
| Scroll padding | 88px |
| Grain overlay | Fixed SVG fractal noise, opacity 0.035, z-index 10 |
| Ambient wash | Fixed, blurred 42px, cursor-tracking `--mx`/`--my` transform |
| Hero | `min-height: calc(100svh - 88px)`, eyebrow + h1 + hero-copy + hero-actions + hero-bottom |
| Hero h1 | `clamp(54px, 8vw, 128px)`, line-height 0.96, letter-spacing -0.075em, weight 500 |
| Section padding | `clamp(85px, 11vw, 160px) var(--pad)` |
| Section divider | `border-top: 1px solid rgba(255,255,255,0.12)` |
| Section in-view glow | Radial gradient, opacity transition on `.in-view` class |
| Services | Open 4-column grid `repeat(4, minmax(0, 1fr))`, border-top/bottom, border-right separators |
| Industries | Horizontal list `.8fr 1.2fr`, hover translate + color |
| Approach | 4-step grid `.8fr 1.2fr`, step numbers + titles + descriptions |
| About | Belief statement + mission/vision 2-column grids |
| Contact | Contact grid + contact details + footer |
| Footer | Brand image + 5 nav links + copyright year |
| Reveals | IntersectionObserver threshold 0.14, staggered delays `Math.min(i*55, 260)ms` |
| Reduced motion | All animations disabled, transitions instant |
| No emojis anywhere | Confirmed |
| No generic cards | Confirmed — services use open rows, not cards |

### Section order (canonical)

1. Hero (`id="home"`)
2. Services (`id="services"`)
3. Industries (`id="industries"`)
4. Approach (`id="approach"`)
5. About (`id="about"`)
6. Contact (`id="contact"`)

---

## 2. Exact Logo and Asset Usage

| Asset | Path | Dimensions | Format | Usage |
|---|---|---|---|---|
| Primary logo | `.../design/prototype/brand/keplor-primary.png` | 500 × 500 | PNG, RGBA (color type 6) | Header brand mark (31×31px display), footer brand |
| Secondary logo | `.../brand/keplor-stamp.png` | 1024 × 1024 | PNG, RGB (color type 2) | Secondary brand asset |
| Hero reference | `.../prototype/reference-aligned-hero-v3.png` | — | PNG | Visual reference for hero composition |
| Full-page reference | `.../prototype/reference-aligned-full-page-v3.png` | — | PNG | Visual reference for full page |

**Critical finding:** The current `SiteShell.tsx` header renders the brand as text-only ("Keplor" with a `brand-mark` span but no ``). The original prototype uses `<img src="brand/keplor-primary.png" alt="">` with the wordmark text beside it. The actual logo image **must** be used.

The `keplor-stamp.png` asset exists at:
`D:\Projects\projects\Keplor\project\_handoff\KEPLOR_V3_LIVE_SITE_MIGRATION_HANDOFF\brand\keplor-stamp.png`

---

## 3. Eight-Page Navigation and Content Architecture

### Required routes (exactly eight)

| # | Route | Page | Status |
|---|---|---|---|
| 1 | `/` | Home | Exists — matches original prototype structure |
| 2 | `/about` | About | Exists — principles + process steps |
| 3 | `/services` | Services | Exists — detailed service data |
| 4 | `/features` | Features | Exists — capability areas with SVG diagrams |
| 5 | `/products` | Products | **MISSING** — route does not exist |
| 6 | `/blog` | Blog | Exists — honest empty state |
| 7 | `/careers` | Careers | Exists — honest empty state |
| 8 | `/contact` | Contact | Exists — ContactForm component |

### Routes that must NOT exist as top-level destinations

- Industries (content stays on Home)
- Approach (content stays on Home)
- Testimonials (content may appear within Home/About/Services/Products, but not a top-level route)
- Pricing
- Documentation
- API

### Navigation consistency requirement

Header, mobile menu, and footer must all link to the same eight pages. Current `SiteShell.tsx` uses anchor links (`#services`, `#industries`, `#approach`, `#about`, `#contact`) which is incorrect for the eight-page architecture.

---

## 4. Content Expansion Plan

### Products (`/products`) — must be created

Illustrative product concepts (clearly marked as preview/demo):
- Working titles, descriptions, intended audiences, feature summaries
- Product detail layout
- Clear preview/concept status — do not imply commercial release

### Case studies

Illustrative project scenarios within relevant pages:
- Project context, problem, approach, solution concept, expected/hypothetical outcome
- Clearly marked as illustrative scenarios, not verified client engagements

### Testimonials

Polished testimonial layout examples within Home/About/Services/Products:
- Clearly identified sample content, not real people or companies
- Replaceable with genuine quotations later

### Blog (`/blog`)

Visually complete editorial layout:
- Meaningful sample articles, categories, excerpts, detail layouts
- Marked as preview/demo content where appropriate
- Current honest empty state is acceptable until real content exists

### Careers (`/careers`)

Illustrative example roles:
- Job title, department, location/type, responsibilities, skills, application CTA
- Clearly identified as preview listings, not confirmed vacancies
- Current honest empty state is acceptable until real openings exist

### Contact (`/contact`)

Complete contact experience:
- Name, email, organisation, enquiry type, project description fields
- Validation, clear success/failure feedback
- Verified contact options (mailto:hello@keplor.tech)
- No fake backend delivery — disclose limitation if no backend configured
- Current ContactForm uses clipboard copy (honest about no backend)

### Data-driven content

All illustrative content should be in separate editable data files for later replacement.

---

## 5. Illustrative/Demo Content Policy and Replacement Structure

- All illustrative content must be clearly distinguishable from verified company claims
- Sample content must be replaceable via data files
- No fabricated metrics, client identities, company affiliations, or job openings
- No emojis anywhere
- Content must communicate: thoughtful engineering, practical AI, human understanding, collaboration, purposeful technology

---

## 6. Actual Route Status

| Route | Exists | Visual Composition | Content Complete | Generic or Meaningful | Logo Correct | Typography Matches | Motion Restrained | Interactions Work | Missing |
|---|---|---|---|---|---|---|---|---|---|
| `/` | Yes | Hero → Services → Industries → Approach → About → Contact | Yes | Meaningful | No (text only in header) | Yes | Yes | Yes | Products route link, actual logo image |
| `/about` | Yes | PageHero + principles + process steps | Yes | Meaningful | N/A | Yes | Yes | Yes | — |
| `/services` | Yes | PageHero + detailed service cards | Yes | Meaningful | N/A | Yes | Yes | Yes | — |
| `/features` | Yes | PageHero + capability areas with SVG diagrams | Yes | Meaningful | N/A | Yes | Yes | Yes | — |
| `/products` | **No** | — | — | — | — | — | — | — | **Entire route missing** |
| `/blog` | Yes | PageHero + honest empty state | Yes (honest) | Meaningful | N/A | Yes | Yes | Yes | — |
| `/careers` | Yes | PageHero + honest empty state | Yes (honest) | Meaningful | N/A | Yes | Yes | Yes | — |
| `/contact` | Yes | PageHero + ContactForm | Yes | Meaningful | N/A | Yes | Yes | Yes | Backend disclosure |
| `/testimonials` | Yes | PageHero + honest empty state | Yes (honest) | Meaningful | N/A | Yes | Yes | Yes | Not in 8-route architecture |

---

## 7. Motion Hierarchy

Per the Stage 1 instructions, the priority hierarchy is:

1. **Central hero Arc and its particle transformation** (highest priority)
2. Subtle ambient lighting
3. Meaningful scroll-linked transformations
4. Limited parallax on selected visual layers
5. Gentle page transitions
6. Soft hover/focus feedback

**Avoid:**
- Every paragraph animating separately
- Endless floating cards
- Repeated large stagger effects
- Constant rotation
- Aggressive scale changes
- Large hover lifts
- Excessive blur
- Abrupt colour swaps
- Multiple simultaneous parallax layers

The website should feel calm, sophisticated, and intentionally engineered. Most copy and content should remain still.

---

## 8. Arc Positioning and Renderer Assessment

### Current R3F implementation files

| File | Purpose | Assessment |
|---|---|---|
| `lib/cinematic/quality-tiers.ts` | Quality tier selection (high/medium/low/static) | Technically sound |
| `lib/cinematic/particle-geometry.ts` | Deterministic seeded particle targets for 5 stages | Technically sound, deterministic identities |
| `lib/cinematic/useCinematicTimeline.ts` | Lenis + GSAP ScrollTrigger sync adapter | Uses 500vh pinned scene — **superseded** by Stage 1 direction |
| `components/cinematic/particle/MasterParticleScene.tsx` | Transparent R3F Canvas, ShaderMaterial, 5 target attributes, additive blending | Technically sound, transparent context |
| `components/cinematic/particle/masterParticle.vert.glsl` | Vertex shader with stage interpolation + low-amplitude flow | Sound |
| `components/cinematic/particle/masterParticle.frag.glsl` | Fragment shader with soft point glow | Sound |
| `components/cinematic/fallback/StaticPortal.tsx` | Canvas 2D static portal fallback | Sound |
| `components/cinematic/CinematicIntro.tsx` | 500vh pinned cinematic intro with stage labels | **Unused** — not imported in current page.tsx |

### Current homepage integration

`app/page.tsx` uses a section-anchored approach:
- Single transparent WebGL canvas behind content (`cinematic-canvas-layer`)
- IntersectionObserver on `section[id]` elements drives stage progress
- Section-to-stage mapping: home=0 (portal), services=1 (helix), industries=2 (wave), approach=3 (vortex), contact=4 (orbit)
- Fallback: `StaticPortal` when WebGL unavailable or reduced motion

### Arc positioning requirement

The Arc must be in the **CENTRE** of the hero's reserved visual region:
- Not hidden behind text
- Not pushed to the extreme right
- Not clipped
- Not a tiny faint purple cloud
- Not a fixed GIF
- Visible, living particle structure with violet particle field, luminous cyan-white signal core, real depth, subtle continuous movement
- Transparent canvas output, correct blending with ambient background
- No visible rectangular canvas background or overlap with opaque renderer

### Current issues

1. The `CinematicIntro.tsx` component is unused dead code
2. `useCinematicTimeline.ts` implements a 500vh pinned scene that contradicts the Stage 1 direction
3. The Arc's visual prominence in the hero needs verification (current implementation may be too faint or small)
4. No verification that the Arc is centered in the hero's visual region

---

## 9. Five-Stage Particle-to-Section Mapping Proposal

| Section | Route | Particle Stage | Visual State |
|---|---|---|---|
| Hero | `/` | Stage 0 | Luminous energy portal |
| Services | `/services` | Stage 1 | Vertical neural helix |
| Industries | (on Home) | Stage 2 | Sweeping wave horizon |
| Approach | (on Home) | Stage 3 | Gravitational vortex |
| Contact | `/contact` | Stage 4 | Tilted orbital formation |

These are visual states of the same continuous system, not newly created content sections. Section boundaries and scroll positions serve as anchors. No 500vh pinned spacer.

---

## 10. Smooth Page Transition Architecture

- Gentle page transitions between the eight routes
- Next.js App Router handles route changes
- No aggressive scale changes or abrupt colour swaps
- Soft hover/focus feedback only
- Most copy remains still

---

## 11. Selective Parallax Plan

- Limited parallax on selected visual layers only
- Ambient wash cursor tracking (already in original prototype)
- No multiple simultaneous parallax layers
- No constant rotation

---

## 12. Hover/Focus Behavior

- Soft hover/focus feedback
- No large hover lifts
- No aggressive scale changes
- Focus rings visible
- Transition duration 150–250ms

---

## 13. Mobile Behavior

- Responsive breakpoints: 390×844, 375×812, 768px
- Quality tiers: low (mobile), medium (tablet), high (desktop)
- DPR capped at 1–1.25 on mobile
- No horizontal overflow
- Safe canvas bounds
- Reduced motion respected

---

## 14. Skills Verified and Applied

| Skill | Source | Status | Applied To |
|---|---|---|---|
| 21st UI Explore | `.agents/skills/21st-ui-explore/SKILL.md` | Verified on disk | Gate 2 exploration |
| 21st UI Review | `.agents/skills/21st-ui-review/SKILL.md` | Verified on disk | Gate 1 & Gate 5 audit |
| 21st UI Build | `.agents/skills/21st-ui-build/SKILL.md` | Verified on disk | Gate 4 implementation |
| 21st CLI Use | `.agents/skills/21st-cli-use/SKILL.md` | Verified on disk | Component retrieval |
| UI/UX Pro Max | `.github/prompts/ui-ux-pro-max.prompt.md` | Verified on disk, CLI executed | Design system reasoning |
| WebGL Landing Steering | ui-skills.com | Consulted | Spatial composition, camera lane |
| Animation Systems | ui-skills.com | Consulted | Motion vocabulary, timing |
| Animation on Scroll | ui-skills.com | Consulted | Viewport reveals vs continuous scrub |
| High-End Visual Design | ui-skills.com | Consulted | Typography, optical alignment |
| Improve Animations | ui-skills.com | Consulted | Motion audit methodology |
| Redesign Existing Projects | ui-skills.com | Consulted | Preservation of verified routes |
| Better Accessibility | ui-skills.com | Consulted | WCAG AA, focus, reduced motion |

---

## 15. File-by-File Implementation Plan

### Phase 1: Fix navigation and logo (no new dependencies)

1. **`components/SiteShell.tsx`** — Replace anchor links with the eight page routes (`/`, `/about`, `/services`, `/features`, `/products`, `/blog`, `/careers`, `/contact`). Use actual `keplor-primary.png` image in header brand.
2. **`app/page.tsx`** — Footer brand: use actual `keplor-primary.png` image instead of text-only "Keplor".
3. **Remove dead code** — `components/cinematic/CinematicIntro.tsx` and `lib/cinematic/useCinematicTimeline.ts` are unused and implement the superseded 500vh pinned approach.

### Phase 2: Create `/products` route

4. **`app/products/page.tsx`** — Create product page with illustrative product concepts, clearly marked as preview/demo.
5. **Data file** — Create `lib/content/products.ts` (or similar) with product data for easy replacement.

### Phase 3: Content expansion

6. **`lib/content/case-studies.ts`** — Illustrative case studies.
7. **`lib/content/testimonials.ts`** — Sample testimonials (clearly marked as sample).
8. **`lib/content/blog-posts.ts`** — Sample blog articles.
9. **`lib/content/careers.ts`** — Illustrative job listings.

### Phase 4: Arc and particle refinement

10. **`components/cinematic/particle/MasterParticleScene.tsx`** — Verify Arc is centered in hero region, visible density, luminous cyan-white core, continuous movement.
11. **`app/page.tsx`** — Ensure the Arc is not hidden behind text, not clipped, not a tiny faint cloud.

### Phase 5: Visual QA

12. Capture screenshots at 1440px, 1920px, 768px, 390px, 375px
13. Compare against original prototype
14. Verify typecheck, lint, build pass

---

## 16. Visual QA Plan

| Check | Method |
|---|---|
| Original layout preserved | Side-by-side screenshot comparison: original prototype vs implementation |
| No clipped headings | Viewport testing at 390px, 375px, 768px, 1440px, 1920px |
| No unwanted page-length increase | Compare scroll height of original vs implementation |
| No text/particle overlap | Visual inspection of hero region with Arc |
| Arc animation runs | Verify continuous particle movement, not static |
| Reverse scrolling works | Scroll up and down, verify smooth transitions |
| No horizontal overflow | Check `overflow-x: hidden` and layout at all breakpoints |
| Reduced motion readable | Test with `prefers-reduced-motion: reduce` |
| All routes work | Navigate to all 8 routes |
| Typecheck/lint/build pass | `npm run typecheck`, `npm run lint`, `npm run build` |

---

## 17. Risks and Unresolved Issues

| Risk | Severity | Mitigation |
|---|---|---|
| `/products` route missing | High | Create route in Phase 2 |
| Header brand uses text instead of logo image | High | Use `keplor-primary.png` in SiteShell |
| Footer brand uses text instead of logo image | Medium | Use `keplor-primary.png` in page.tsx footer |
| Unused dead code (CinematicIntro, useCinematicTimeline) | Low | Remove in Phase 1 |
| Arc visual prominence not verified | Medium | Visual QA at all breakpoints |
| 500vh pinned scene approach in useCinematicTimeline contradicts Stage 1 direction | Medium | Remove or repurpose |
| No backend for contact form | Low | Current clipboard copy approach is honest; disclose limitation |

---

## Verified Findings vs Recommendations

### Verified facts (observed in source)

1. Original prototype at `design/prototype/index.html` defines the canonical design
2. Logo `keplor-primary.png` is 500×500 RGBA; `keplor-stamp.png` is 1024×1024 RGB
3. Eight routes required; `/products` is missing
4. Current SiteShell uses anchor links, not page routes
5. Current header/footer brand is text-only, no logo image
6. R3F particle system files exist and are technically sound
7. `CinematicIntro.tsx` and `useCinematicTimeline.ts` are unused dead code
8. Current page.tsx uses section-anchored particle progress (correct approach per Stage 1)
9. All baseline checks pass: typecheck, lint, build

### Recommendations (for Stage 2 implementation)

1. Create `/products` route with illustrative content
2. Fix SiteShell navigation to use eight page routes
3. Use actual logo image in header and footer
4. Remove dead code (CinematicIntro, useCinematicTimeline)
5. Refine Arc positioning to be centered in hero region
6. Run visual QA with side-by-side screenshots

---

## Output Documentation Path

`docs/FINAL_KEPLOR_IMPLEMENTATION_BLUEPRINT.md` (this file)

**Stage 1 is complete.** Stop here. Wait for the next instruction before implementation.