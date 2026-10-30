# Keplor V3 — Resource and Skill Register

**Generated:** 2026-10-30  
**Audit Stage:** Gate 2 — Principal Engineering & Resource Audit  
**Author:** Principal Software Architect & Creative Technologist

> Gate 2 verification is additive. Gate 1 evidence below remains historical and is not overwritten.

---

## 1. Skill Register

| Name | Type | Location | Availability | Read Status | Applied To | Constraints & Compatibility | Evidence |
|---|---|---|---|---|---|---|---|
| **21st UI Explore** | Local Repository Skill | `.agents/skills/21st-ui-explore/SKILL.md` | Installed | Read in full | Gate 1 & Gate 2 route, component & composition exploration | Requires 3 distinct conceptual directions; read `.21st/design.json` | File verified on disk (58 lines) |
| **21st UI Review** | Local Repository Skill | `.agents/skills/21st-ui-review/SKILL.md` | Installed | Read in full | Gate 1 & Gate 5 deterministic defect, token drift & accessibility audit | Evidence-based QA; priority on semantic markup, WCAG contrast & touch targets | File verified on disk (49 lines) |
| **21st UI Build** | Local Repository Skill | `.agents/skills/21st-ui-build/SKILL.md` | Installed | Read in full | Gate 4 implementation of approved design and components | Preserve established tokens; search before hand-writing; no arbitrary CSS | File verified on disk (60 lines) |
| **21st CLI Use** | Local Repository Skill | `.agents/skills/21st-cli-use/SKILL.md` | Installed | Read in full | Component & SVG logo retrieval via 21st CLI / svgl.app | CLI tool not globally on PATH; unmetered logo/metadata access only | File verified on disk (128 lines) |
| **UI/UX Pro Max** | Prompt-Based Intelligence Skill | `.github/prompts/ui-ux-pro-max.prompt.md` | Installed | Read in full | Design system reasoning, WCAG verification, and UX guidelines | Python 3 standard library only; search script `.github/prompts/ui-ux-pro-max/scripts/search.py` verified working | File verified on disk (425 lines), CLI executed |
| **Improve Animations** (Emil Kowalski) | External UI Skill | `https://www.ui-skills.com/skills/emilkowalski/improve-animations` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 1 motion audit; establishes choreography priorities | Read-only audit procedure; does not implement code directly | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Review Animations** (Emil Kowalski) | External UI Skill | `https://www.ui-skills.com/skills/emilkowalski/review-animations` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 5 post-implementation motion QA (timing, interruptibility, spatial continuity) | Requires inspectable running animation frames on port 3011 | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Animation Systems** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/animation-systems` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 2 & Gate 4 unified motion hierarchy, choreography and easing tokens | Synchronizes Lenis + GSAP + Framer Motion lifecycles | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **WebGL Landing Steering** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/webgl-landing-steering` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 2 spatial composition, 3D camera lane, and hero text-to-visual balance | Visual must reinforce positioning; must not compete with headline legibility | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **High-End Visual Design** (Leonxlnx) | External UI Skill | `https://www.ui-skills.com/skills/leonxlnx/soft-skill` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 2 & Gate 4 typographic hierarchy, optical alignment, and smoked-glass depth | Must not apply arbitrary font bans or unapproved bento cards | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Animation on Scroll** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/animation-on-scroll` | Missing (Externally consulted) | Consulted catalog & instructions | Gate 2 & Gate 4 distinction between viewport reveals and continuous scrub | Must not replace pinned continuous scrollytelling with simple IntersectionObserver | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Image to Code** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/image-to-code` | Missing (Externally consulted) | Consulted catalog & instructions | Extract measured layout geometry from Canva references | Measured ratios from PNGs take precedence over guesswork | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Design Taste Frontend** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/design-taste-frontend` | Missing (Externally consulted) | Consulted catalog & instructions | Restraint against AI design clichés (overused gradients, gratuitous orbs) | Anti-generic frontend standards | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Redesign Existing Projects** (Meng To) | External UI Skill | `https://www.ui-skills.com/skills/mengto/redesign-existing-projects` | Missing (Externally consulted) | Consulted catalog & instructions | Preservation of verified routes, working code, and static export constraints | Redesign, not rewrite from scratch | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **Better Accessibility** (Jakub Krehel) | External UI Skill | `https://www.ui-skills.com/skills/jakubkrehel/better-accessibility` | Missing (Externally consulted) | Consulted catalog & instructions | Semantic landmarks, keyboard navigation, focus visible rings, reduced-motion fallback | WCAG AA compliance, zero layout shift under reduced motion | Documented in `KEPLOR_GEMINI_ARGON_SESSION_CONTEXT.md` |
| **UI.sh Skills** (`design`, `ideas`, `brand-kit`, `componentize`, `canonicalize-tailwind`, `add-dark-mode`, `dark-mode-image`, `make-responsive`, `markup-from-image`) | External CLI / MCP Toolsuite | `https://ui.sh/skills` | Missing (Externally consulted) | Instructions consulted via documentation | Procedural design checklists applied manually | Token required for CLI installation; instructions applied as procedural checklists without unauthorized installation | Public documentation verified via web search |

---

## 2. Reference Register

| Reference Name | Type | Location | Availability | Read / Inspected Status | What It Demonstrates |
|---|---|---|---|---|---|
| **Primary Motion Video** | Screen Recording (MP4) | `C:\Users\xploit\Videos\WhatsApp Video 2026-10-30 at 5.40.55 AM.mp4` | Available on disk | Inspected in full via frame extraction | 17.43s video (523 frames, 480x854 @ 30fps) by `@TEXTURA.US` showing a trackpad-scrolled 3D particle demo through 5 distinct stages: (1) Luminous vertical particle portal/vortex with floating HUD counters (`430+`, `1x`); (2) Vertical neural helix/column; (3) Sweeping undulating wave terrain horizon with headline; (4) Gravitational vortex / galaxy accretion disk; (5) Tilted orbital ring formation framing closing CTA. Demonstrates continuous scroll scrubbing, camera transitions, and particle field density. |
| **Reference Hero Mockup** | Design Reference (PNG/SVG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\prototype\reference-aligned-hero-v3.png` | Available on disk | Inspected in full | Canonical hero composition: near-black `#050507` background, oversized left-aligned grotesk typography ("Intelligent systems. Built around your business."), violet accent highlight on keyword, diffuse smoked-glass ambient lighting (violet, blue, cyan), two CTA buttons, and right-aligned luminous pixel arc with feathered boundary. |
| **Reference Full-Page Mockup** | Design Reference (PNG/SVG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\prototype\reference-aligned-full-page-v3.png` | Available on disk | Inspected in full | Section hierarchy: (1) Hero with Predictive Arc; (2) Open 4-column Service List ("Ideas into intelligent solutions"); (3) Industries row list with quiet dividers; (4) 4-step horizontal approach ("Understand, Design, Build, Improve"); (5) Closing contact banner. Strictly excludes card grids and 3D floating orb widgets. |
| **Canva Reference 01** | Primary Brand Color Reference (PNG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\references\01-canva-blue-cyan-cover.png` | Available on disk | Inspected in full | Large, soft-focus electric blue and cyan color fields bleeding into deep black space like defocused studio photography. High contrast stark white sans-serif typography. |
| **Canva Reference 02** | Brand Color Reference (PNG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\references\02-canva-soft-blue-project-cover.png` | Available on disk | Inspected in full | Diffuse horizontal wave glow in deep royal blue and warm amber/cyan edge highlight. Broad negative space. |
| **Canva Reference 03** | Layout & Negative Space Reference (PNG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\references\03-canva-objectives-negative-space.png` | Available on disk | Inspected in full | Three horizontal columns with thin monoline line icons, quiet metric labels, generous vertical padding, and deep dark background. |
| **Canva Reference 04** | Accent Color Reference (PNG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\references\04-canva-magenta-title.png` | Available on disk | Inspected in full | Deep magenta/violet ambient light field spreading diagonally from bottom right. Clean, confident headline hierarchy. |
| **Canva Reference 05** | CTA Gradient Reference (PNG) | `D:\Projects\projects\Keplor\project\KEPLOR_TRUE_CANVA_DIRECTION_V3\references\05-canva-contact-gradient.png` | Available on disk | Inspected in full | Soft purple-violet ambient cloud at lower margin, horizontal fine divider line, monospaced metadata, and clear contact path. |
| **Official ThreeUI Predictive Arc** | External Component Reference | `https://threeui.com/predictive-arc--predictive` | Web reference | Inspected via official docs | Official component by Meng To. Canvas 2D + WebGL / Three.js r128 background shader family. Supports reactive props (`variant`, `hue`, `saturation`, `brightness`, `mode`). Note: Active codebase contains an in-house Canvas 2D simulation, not the `@designcodeio/threeui` npm package. |
| **ThreeUI Signal Particles** | External Background Reference | `https://threeui.com/backgrounds/predictive-arc/signal-particles` | Web reference | Inspected via official docs | Demonstrates luminous connective particle pulses and density behavior. Should serve as visual reference for shader particle density, not as a second competing background canvas. |
| **T3Code Cinematic Dark SaaS Template** | External Inspiration Reference | `https://t3code-cinematic-dark-saas-landing-page-template-v2.21st.app/` | Web reference | Inspected via web search | Demonstrates modern dark SaaS atmospheric lighting and Motion 3D transitions. Built with Next 16 / React 19 / Tailwind v4 (incompatible with Keplor V3's locked Next 14.2 / React 18 / Tailwind 3.3 stack; visual inspiration only). |
| **Live Keplor Repository** | Content & Flow Baseline | `https://github.com/himanshsharmaa/keplor/blob/main/app/page.tsx` | Remote Git repository | Inspected | Baseline copy, service descriptions, and operating principles. Visual layout is legacy and must not override V3 design references. |

---

## 3. Architecture & Authenticity Findings

1. **Predictive Arc Authenticity:**  
   The current file `components/threeui/predictive-arc/predictiveArcRenderer.ts` is an **internal custom Canvas 2D approximation**. It uses `canvas.getContext("2d", { alpha: false })` and manual parabolic coordinate math (`curveY = archPeakY + normX * normX * archHeight`). It is **not** an authentic Three.js/WebGL scene and does not use the `@designcodeio/threeui` npm package.
2. **Opaque Background Limitation:**  
   Because the Canvas 2D renderer initializes with `{ alpha: false }` and executes `context.fillStyle = "#030303"; context.fillRect(0, 0, width, height);`, the canvas is completely opaque. It cannot be directly layered over an R3F or WebGL scene without obscuring everything behind it.
3. **Five-Stage 3D Morphing Incompatibility:**  
   The 2D canvas draws flat rectangles in screen-space. It is mathematically incapable of transforming into a 3D neural helix, wave terrain, or gravitational accretion disk. Any 5-stage cinematic transformation must be executed inside a true Three.js / React Three Fiber scene, while the 2D Arc must either be retired, replaced by an authentic WebGL/Three.js shader, or mapped cleanly into Stage 1 as a visual handoff.
4. **Scroll Ownership Conflict:**  
   Currently, `app/page.tsx` drives scroll effects using Framer Motion (`useScroll`, `useTransform`) bound to window `scrollY`, while `LenisWrapper.tsx` handles smooth scrolling via `useAnimationFrame`. Introducing GSAP ScrollTrigger without a strict synchronization adapter (such as `lenis.on('scroll', ScrollTrigger.update)`) will cause race conditions, dropped frames, and transform fighting.

## 4. Gate 2 Verification Addendum

| Verification | Result | Evidence |
|---|---|---|
| Static export configuration | Confirmed | `next.config.mjs`: `output: "export"`, `trailingSlash: true`, unoptimized images |
| Current renderer transparency | Confirmed defect | `components/threeui/predictive-arc/predictiveArcRenderer.ts`: Canvas 2D `{ alpha: false }` plus opaque fill |
| Current frame ownership | Confirmed | `components/LenisWrapper.tsx`: Lenis advanced by Framer Motion `useAnimationFrame`; `PredictiveArcCanvas.tsx`: independent Arc rAF |
| CSS nesting report | Confirmed defect to address in a later code gate | `app/globals.css`: `.ambient-light-overlay` is nested inside `:root`; PostCSS config only declares Tailwind and Autoprefixer |
| Duplicate motion tokens | Confirmed maintainability issue | `app/globals.css`: duplicated duration declarations in `:root`; later values are currently equivalent |
| R3F/React pairing | Confirmed from official docs | R3F v8 pairs with React 18; v9 pairs with React 19 |
| Image-to-Code procedure | Unavailable for this gate | Requested `ui-skills.com/skills/mengto/image-to-code` returned HTTP 404; no automated measurement was claimed |

Gate 2 design and technical decisions are documented in `docs/KEPLOR_V3_GATE2_DESIGN_AND_TECHNICAL_SPEC.md`. Proposed dependency versions are intentionally not installed under the Gate 2 restrictions.
