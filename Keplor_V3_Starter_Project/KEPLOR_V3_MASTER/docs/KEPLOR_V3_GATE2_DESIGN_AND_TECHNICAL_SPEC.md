# Keplor V3 — Gate 2 Design and Technical Specification

**Status:** Proposed, implementation-ready design  
**Gate:** 2 — Principal creative direction, design system, and WebGL architecture  
**Date:** 2026-10-30  
**Scope:** Documentation only. No application code, dependency, route, or reference-file changes are part of Gate 2.

> **Evidence labels:** **Verified** means observed in the repository, supplied reference register, or official documentation consulted for this gate. **Proposed** means a design or implementation decision for Gate 3. Proposed values must be benchmarked before release.

## 1. Executive direction

Keplor is a premium AI engineering and automation studio. The experience should communicate **calm technical authority**, not a generic AI SaaS template: editorial typography leads, one coherent particle system demonstrates intelligence in motion, and the page leaves enough negative space for the offer to be understood in under three seconds.

The WebGL lane is **data/particle intelligence with a cinematic campaign layer**. The particle field is one physical system whose identities persist while its target formations change. Violet is the system body; cyan-white is the signal; obsidian is the space between them. The 3D scene is subordinate to semantic HTML copy and CTA controls.

The governing design rules are:

1. One signature motif: the Keplor Arc evolving into helix, wave, vortex, and orbit.
2. One dominant renderer: one transparent WebGL canvas, never an opaque Canvas 2D layer over it.
3. One scroll authority: GSAP ScrollTrigger owns the normalized master progress.
4. Time adds only low-amplitude life; scroll performs the structural transformation.
5. Content remains present and readable in the DOM without relying on the canvas.
6. Every high-motion path has a static, natural-flow, reduced-motion equivalent.
7. No fabricated metrics, products, clients, testimonials, openings, or telemetry.

## 2. Reference interpretation

### 2.1 Priority and translation

The supplied motion reference governs choreography, not branding. It shows a five-stage scroll-scrubbed particle demonstration: portal, helix, wave terrain, accretion vortex, and tilted orbital formation. The Keplor hero and full-page references govern composition, typography, palette, and section rhythm.

The hero reference establishes:

- near-black `#050507` ground;
- left-aligned oversized editorial sans-serif copy;
- violet/cyan atmospheric light;
- a luminous right-side Arc with substantial negative space;
- two clear actions.

The full-page reference establishes:

- an open four-column Services list titled “Ideas into intelligent solutions”;
- a quiet horizontal Industries chapter;
- a four-step linear Approach chapter;
- a contact banner and structured footer;
- restraint over card grids.

The current homepage's three-card PositioningSection is therefore not the approved final Services treatment. It must not replace the four-column list in Gate 3.

### 2.2 External procedures applied

- **WebGL Landing Steering:** selected a data/particle intelligence lane with a campaign-grade sequence, while retaining message, performance, accessibility, and reliability gates.
- **Animation Systems:** defined a small motion vocabulary, hierarchy, timing bands, and one authoritative timeline.
- **High-End Visual Design:** used optical alignment, micro-contrast, smoked-glass depth, and restrained material lighting rather than extra decorative effects.
- **Improve Animations:** treated the current motion as an audit input; continuous scene choreography is separated from one-shot viewport reveals.
- **Animation on Scroll:** IntersectionObserver remains appropriate for normal-flow chapter entrances, but not for the five-stage continuous scrub.
- **UI/UX Pro Max:** the local design-system search selected scroll-triggered storytelling, motion-driven dark presentation, Inter-like technical typography, contrast/focus/reduced-motion gates, and breakpoints at 375, 768, 1024, and 1440.
- **Image to Code:** the named endpoint returned 404 during this gate. Layout proportions therefore use the supplied reference register and source-level project tokens, not a claimed automated measurement.

The local 21st exploration skill requires three conceptual directions for an intentional exploration task. Gate 2 has two homepage composition alternatives because the brief explicitly requires two; no hosted generation or 21st package installation is needed.

## 3. Final design system

### 3.1 Color tokens

| Token | Value | Use |
|---|---|---|
| `--kp-ink` | `#050507` | page and canvas ground |
| `--kp-surface` | `#0A090F` | elevated dark surface |
| `--kp-surface-glass` | `rgba(11, 9, 20, .72)` | floating navigation and HUD |
| `--kp-violet-deep` | `#36006D` | ambient ultraviolet |
| `--kp-violet` | `#4A009E` | active accent and edge light |
| `--kp-violet-soft` | `#A78BFA` | readable accent text |
| `--kp-cyan` | `#78D9EF` | signal and secondary accent |
| `--kp-text` | `#F4F0FA` | primary text |
| `--kp-text-secondary` | `#D8D0E8` | supporting copy |
| `--kp-muted` | `#9A92A8` | labels and metadata |
| `--kp-line` | `rgba(226, 215, 245, .12)` | quiet dividers |
| `--kp-line-strong` | `rgba(226, 215, 245, .22)` | focus/active border |
| `--kp-danger` | `#F87171` | validation/error only |

Use cyan sparingly. It identifies signal, not general decoration. Do not introduce a second gradient system.

### 3.2 Typography

- **Primary:** existing Inter stack (`"Inter", "Segoe UI", system-ui, sans-serif`) unless a licensed local font is verified.
- **Proposed accent:** Instrument Serif italic for “Thoughtfully” only, loaded locally if licensing and font files are verified. Otherwise use the primary face italic; never depend on a remote font for first paint.
- Hero statement: `clamp(3.2rem, 8.6vw, 8.75rem)`, `font-weight: 500`, `line-height: .92`, `letter-spacing: -.055em`; cap measure at `9.5ch` for the main block.
- Chapter headline: `clamp(2.4rem, 5vw, 5.5rem)`, line-height `.96`, letter-spacing `-.045em`.
- Body: `clamp(1rem, .95rem + .25vw, 1.1rem)`, line-height `1.55`, measure `58ch`.
- Eyebrow/metadata: `.7rem–.8rem`, uppercase, letter-spacing `.12em`, monospace only for system labels.

The required hero copy is:

> Intelligent systems. Thoughtfully built.

Do not substitute the earlier “Built around your business” wording in the new hero specification.

### 3.3 Layout, surfaces, and controls

- Content max width: `1280px`; wide editorial max width: `1440px`.
- Desktop gutter: `clamp(1.5rem, 5vw, 5rem)`; mobile gutter: `1rem–1.5rem`.
- Section rhythm: `clamp(6rem, 12vw, 10rem)` desktop; `4rem–6rem` mobile.
- Navigation: fixed/floating capsule, `rgba(11, 9, 20, .72)`, `backdrop-filter: blur(24px)`, 1px ultraviolet border, 999px radius, minimum 44px controls.
- `.liquid-glass`: translucent surface, fine specular border, low-opacity noise, inner violet glow, and a cursor light driven by `--mouse-x`/`--mouse-y`; no abrupt hue swap.
- Primary button: light text on ultraviolet fill, 44px minimum height, 12px radius, 150–200ms transform/opacity feedback.
- Secondary button: transparent/obsidian fill, strong border, same height and focus treatment.
- Focus: two-color ring equivalent to `0 0 0 2px #050507, 0 0 0 4px #A78BFA`.
- Disabled: opacity `.45`, no hover lift, `aria-disabled` only when the element remains interactive; use native `disabled` on buttons.
- Cards are reserved for genuinely grouped information. Services and Industries remain open lists.

Footer uses a 12-column Obsidian Vault grid:

- columns 1–3: Keplor mark, brand signature, contact route;
- columns 4–6: Explore links;
- columns 7–9: capabilities/services links;
- columns 10–12: contact/social/legal links;
- thin rules and quiet metadata, no fabricated operating status.

Display the static signature exactly as:

`SYSTEMS NOMINAL // QUANTUM ULTRAVIOLET v3.0`

It is a brand signature, not telemetry.

## 4. Eight-route architecture

The core navigation is `/`, `/about`, `/services`, `/features`, `/products`, `/blog`, `/careers`, and `/contact`. `/testimonials` is not a core route. Testimonials may appear only when genuine source material is verified.

| Route | Promise and content state |
|---|---|
| `/` | five-stage cinematic intro, Services, Industries, Approach, Contact |
| `/about` | purpose, working approach, genuine company facts only |
| `/services` | AI engineering, automation, and implementation engagements |
| `/features` | technical/functional capabilities, not services copy |
| `/products` | real Keplor products only; otherwise an honest “product work in progress” state |
| `/blog` | published insights only; otherwise an honest empty state |
| `/careers` | genuine openings only; otherwise an honest hiring-status state |
| `/contact` | functioning contact path and honest response expectations |

Each route remains statically exportable and uses semantic landmarks. No route is allowed to imply a customer, metric, certification, team member, article, or product that is not present in source material.

## 5. Homepage composition alternatives

### Option A — Dedicated cinematic intro (recommended)

1. A dedicated 500vh pinned cinematic intro.
2. Normal-flow Services four-column list.
3. Normal-flow Industries row.
4. Normal-flow four-step Approach.
5. Contact banner and 12-column footer.

**Strengths:** highest fidelity to the motion reference; clean separation between campaign moment and information architecture; simplest semantic fallback; predictable conversion after the spectacle; easiest to performance-test and unmount.  
**Costs:** the page is long; desktop users encounter the same subject in two modes; the 500vh section needs a visible progress cue and chapter labels.

### Option B — Chapters integrated into the editorial page

The particle scene remains pinned while each stage reveals the corresponding Services, Industries, Approach, and Contact chapter content around or below it. The scene's chapter labels change as the same scroll range progresses, then the page continues with only the final CTA and footer.

**Strengths:** less repeated content; stronger narrative continuity; shorter total page.  
**Costs:** substantially harder responsive layout; canvas and copy compete for attention; reduced-motion conversion is harder to author; the scene can obscure the open four-column Services reference; higher testing and maintenance risk.

### Recommendation

Choose **Option A**. The brief explicitly prioritizes the five-stage motion reference while requiring the approved editorial sections to remain. A bounded cinematic intro followed by clear normal-flow content protects both priorities, is more accessible, and allows mobile to collapse the scene without collapsing the information architecture. Add a small fixed chapter indicator inside the pinned scene so 500vh feels intentional rather than endless.

## 6. Five-stage scroll timeline

The scene section is `height: 500vh`; its viewport child is `position: sticky; top: 0; height: 100svh`. Define:

`uScrollProgress = clamp(0, (scrollY - start) / (end - start), 1)`

Stage intervals:

| Stage | Global range | Local progress | Editorial role |
|---|---:|---:|---|
| Portal | `0.00–0.20` | `(u - 0.00) / .20` | Keplor signal / hero |
| Helix | `0.20–0.40` | `(u - .20) / .20` | autonomous systems |
| Wave | `0.40–0.60` | `(u - .40) / .20` | audiences and scale |
| Vortex | `0.60–0.80` | `(u - .60) / .20` | momentum and possibility |
| Orbit | `0.80–1.00` | `(u - .80) / .20` | studio CTA |

Use `smoothstep` or `cubic-bezier(.16, 1, .3, 1)` for local morph interpolation. Do not snap at stage boundaries. A 5–8% overlap at both ends of each interval lets camera and copy settle without changing the master progress contract.

### Stage UI

**Stage 1 — Energy Portal**

- Left: eyebrow, required headline, short lede, primary and secondary CTA.
- Right/center: Arc portal; preserve an open text-safe region.
- Small label: `01 / SIGNAL`.
- No numeric HUD metrics.

**Stage 2 — Neural Helix**

- Scene moves toward a vertical double helix.
- Two glass HUD panels flank the scene: “Autonomous AI Agents” and “Cloud-Native Infrastructure”.
- Panels use qualitative descriptions only, with no invented counts or ratios.
- Label: `02 / SYSTEMS`.

**Stage 3 — Horizon Wave Terrain**

- Wide scene with three DOM audience labels: Creators, Businesses, Learners.
- Labels are semantic text outside the canvas and remain readable when the scene is disabled.
- Label: `03 / SCALE`.

**Stage 4 — Gravitational Vortex**

- Copy: “A universe of possibilities — already in motion.”
- Copy occupies the quiet side of the composition; vortex core never sits behind text.
- Label: `04 / MOMENTUM`.

**Stage 5 — Orbital CTA**

- Tilted orbital formation leaves a clear negative-space lane.
- Final CTA: “Build what moves your work forward.” Use only if approved as final copy; otherwise retain the route CTA wording.
- Label: `05 / CONTACT`.

The labels are navigation aids, not fake telemetry. On mobile, show one short label at a time and hide descriptive HUD body copy.

## 7. Master particle geometry

### 7.1 Shared buffer and identity

Use one deterministic seed per particle identity. Proposed attribute layout:

- `aPortal: vec3`
- `aHelix: vec3`
- `aWave: vec3`
- `aVortex: vec3`
- `aOrbit: vec3`
- `aSeed: float`
- `aBand: float`
- optional `aColorSeed: float`

Generate all targets once in a pure function from a fixed integer seed. Keep particle count and identity stable for a given quality tier. Never respawn particles between stages.

Coordinate convention: world Y is vertical; X is horizontal; Z is depth toward the camera. Start with a perspective camera at `(0, 0, 7)` looking at `(0, 0, 0)`. Normalize the largest formation extent to approximately `[-1, 1]` before responsive camera scaling.

### 7.2 Portal target `aPortal`

For particle index `i`, use seeded `s0, s1, s2 ∈ [0,1)`:

```text
theta = 2π * s0
arc = mix(-0.88π, 0.88π, s1)
radius = apertureRadius * (1 + 0.16 * noise(s2))
x = radius * sin(arc) + jitter(s0) * 0.06
y = portalHeight * cos(arc) + verticalJitter(s1) * 0.08
z = depthSpread * signedNoise(s2)
```

Bias `s1` toward the silhouette and reserve 8–12% of particles for a denser inner signal core. Warp the aperture slightly toward the approved Keplor Arc silhouette; the warp must be deterministic and documented as a parameter, not a texture lookup. Color distribution is 70% deep/bright violet, 22% cyan-violet edge signal, and 8% cyan-white core. Depth affects point size and alpha, not identity.

### 7.3 Helix target `aHelix`

Assign `band = i mod 2`:

```text
t = s0 * 2π * helixTurns
y = mix(-helixHeight / 2, helixHeight / 2, s1)
phase = band * π + t + phaseJitter(s2)
x = helixRadius * cos(phase)
z = helixRadius * sin(phase)
```

Add low-amplitude longitudinal jitter and a 10% inter-strand bridge population only if it does not destroy two-strand readability. Strand 0 is violet dominant; strand 1 is cyan dominant. The depth cue is real perspective, not a horizontal screen-space offset.

### 7.4 Wave target `aWave`

Distribute points over a rectangular X/Z terrain:

```text
x = mix(-waveWidth / 2, waveWidth / 2, s0)
z = mix(-waveDepth / 2, waveDepth / 2, s1)
y = waveBase
  + amp1 * sin(freq1 * x + phase1)
  + amp2 * cos(freq2 * z + phase2)
  + amp3 * sin(freq3 * (x + z))
  + edgeFalloff(x, z) * crestNoise(s2)
```

Use layered depth bands so foreground crests are more legible than distant points. Apply a gentle perspective lift toward the horizon. Violet and blue dominate the distant layers; cyan highlights crests and signal paths. Do not use a photographic terrain texture.

### 7.5 Vortex target `aVortex`

Use a seeded radial distribution with controlled central exclusion:

```text
r = singularityRadius + pow(s0, 0.62) * vortexRadius
theta = s1 * 2π + spiralTurns * (1 - r / vortexRadius)
x = r * cos(theta)
z = r * sin(theta)
y = depthSpread * signedNoise(s2) * (0.25 + 0.75 * r / vortexRadius)
```

Reserve a dark central radius; do not place a bright point in the singularity. Density rises toward the inner disk but is capped to avoid a white blob. Velocity and shimmer increase as `r` decreases. The core energy is violet-white with cyan edge filaments.

### 7.6 Orbit target `aOrbit`

Assign particles to 3–5 rings using `band`:

```text
radius = ringRadii[band] + ringJitter(s2)
theta = s0 * 2π
x0 = radius * cos(theta)
z0 = radius * sin(theta) * eccentricity[band]
y0 = ringThickness[band] * signedNoise(s1)
position = rotateXYZ(vec3(x0, y0, z0), ringTilt[band])
```

Give each band an independent but deterministic angular phase and slow time multiplier. Use violet outer bands and cyan inner signal streams. Keep the final CTA lane empty by masking a shallow angular sector rather than deleting identities; masked particles fade by alpha and can return during reverse scroll.

## 8. Shader interpolation and continuous motion

The vertex shader receives all five target attributes. For a global progress `u`, determine the current stage `k = min(floor(u * 5), 4)` and adjacent stage `k + 1`, with a safe final-stage clamp. The CPU may provide `uStage`, `uLocal`, and `uFromStage`/`uToStage` as uniforms; the GPU performs the final interpolation.

```glsl
vec3 fromPosition = targetForStage(uFromStage);
vec3 toPosition = targetForStage(uToStage);
float eased = smoothstep(0.0, 1.0, uLocal);
vec3 position = mix(fromPosition, toPosition, eased);
position += lowAmplitudeFlow(aSeed, uTime, uStage);
```

`lowAmplitudeFlow` must be less than 1.5% of the formation's normalized extent during normal operation. It may add:

- phase shimmer along helix strands;
- a slow wave ripple;
- tangential vortex drift;
- orbital precession.

Scroll controls only formation interpolation, camera framing, and editorial UI state. Time controls only the low-amplitude effects, point shimmer, and a restrained color pulse. No React state update is allowed per particle frame.

Point rendering uses `gl_PointSize` scaled by perspective and clamped by quality tier. The fragment shader renders a soft circular point with a tight core, applies depth-aware alpha, and uses additive blending only for the particle material. Avoid a full-screen bloom pass until a benchmark proves it is affordable; a single restrained CSS atmospheric layer is preferred.

## 9. Animation and frame-loop ownership

### 9.1 Authority

- **Lenis:** smooth scroll only.
- **GSAP ScrollTrigger:** pinning and normalized master progress.
- **GSAP timeline:** authoritative `uScrollProgress` and DOM chapter state.
- **R3F/Three.js:** scene, geometry, uniforms, camera, disposal.
- **Framer Motion:** local UI transitions outside the master scene only.
- **Browser:** one effective render schedule.

Do not retain Framer Motion's current hero `useScroll` as a second master timeline once the pinned scene is introduced. It may remain for unrelated local reveals only after review.

### 9.2 Scheduling proposal

Preferred sequence:

1. Lenis receives the browser scroll input and advances from one GSAP ticker callback.
2. `lenis.on("scroll", ScrollTrigger.update)` invalidates ScrollTrigger's measurements.
3. `ScrollTrigger` computes the pinned progress and writes a mutable progress store/uniform target.
4. The R3F scene reads the latest mutable values in `useFrame`; it does not set React state.
5. R3F renders once for that frame.

Avoid manually calling both `requestAnimationFrame` and `gsap.ticker` for the same work. If the R3F canvas is run with `frameloop="never"`, use `advance(timestamp)` from the one GSAP ticker callback and prove that ScrollTrigger's update happens before `advance`. If that ordering is brittle in the selected R3F version, use the default R3F render loop and update uniforms from the shared mutable store; do not force `frameloop="never"` merely for architectural purity.

Lifecycle cleanup must remove the Lenis ticker callback, `lenis.on` listener, all ScrollTriggers, GSAP contexts, R3F event handlers, resize/visibility listeners, and GPU resources.

## 10. Renderer, transparency, and layering

The proposed scene is one client-only R3F `<Canvas>` with a transparent WebGL context:

- `alpha: true`;
- `premultipliedAlpha: true`;
- `gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}`;
- transparent clear color, never an opaque full-screen fill;
- one `BufferGeometry` and one custom `ShaderMaterial` for the master points.

Layer order:

1. `z-index: 0`: page background and one CSS atmospheric light layer;
2. `z-index: 1`: transparent WebGL canvas;
3. `z-index: 2`: semantic scene copy, HUD, progress indicator, and CTA;
4. `z-index: 10+`: navigation and route-level controls;
5. focus rings must remain visible above all layers.

The current Canvas 2D Predictive Arc must be retired from the cinematic scene. It must not sit behind the R3F canvas because it uses `{ alpha: false }` and fills its backing surface. There is no second portal background and no duplicated glow.

## 11. ThreeUI authenticity decision

The repository's `components/threeui/predictive-arc/*` is a custom Canvas 2D approximation, not the authentic ThreeUI WebGL implementation. It cannot be described as ThreeUI.

Gate 3 should use **custom recreation** for the master system, with the official ThreeUI Predictive Arc used only as visual/source research unless license, source provenance, API compatibility, and bundle cost are explicitly verified. If code is copied or adapted, record the exact upstream commit, license, modified files, and attribution. Do not use `@designcodeio/threeui` unless its package, license, React compatibility, and static-export behavior are verified first.

The choices are therefore:

- **Authentic unmodified component:** not selected; it cannot provide the five-stage geometry contract.
- **Source-derived port:** possible only after legal and technical verification; not selected for the initial implementation.
- **Custom recreation:** selected; transparent, deterministic, and designed around Keplor's five target attributes.

## 12. Proposed dependencies and compatibility

Do not install these in Gate 2. The following is the proposed Gate 3 dependency set:

| Package | Proposed version | Reason |
|---|---:|---|
| `three` | `0.160.0` | React 18-era stable Three.js baseline with typed BufferGeometry/shaders |
| `@types/three` | `0.160.0` | matching TypeScript declarations |
| `@react-three/fiber` | `8.17.10` | R3F v8 pairs with React 18 |
| `gsap` | `3.12.5` | ScrollTrigger and ticker APIs required by the design |

Peer constraints:

- `react@18.2.0` and `react-dom@18.2.0` remain unchanged.
- R3F v8 is required; R3F v9 pairs with React 19 and is not appropriate for this locked app.
- `@react-three/drei` is not required for the single custom points material and should not be added without a concrete need.
- `@designcodeio/threeui` is not required and is not selected.

These are exact proposed pins, not claims about latest releases. Gate 3 must run `npm install --package-lock-only` or the repository's package-manager equivalent in a controlled change, inspect peer resolution, and then run typecheck/build. The brief forbids that installation now.

## 13. Next.js static export and React boundaries

The verified `next.config.mjs` uses `output: "export"`, `trailingSlash: true`, and unoptimized images. Preserve this configuration.

The R3F scene and ScrollTrigger adapter must be client components. Browser-only imports and APIs (`window`, `document`, `ResizeObserver`, WebGL context, `matchMedia`) belong inside client boundaries/effects. Render a deterministic DOM fallback on the server so hydration does not depend on device capabilities.

Do not introduce API routes, Server Actions, dynamic server functions, or runtime data fetching that static export cannot serialize. All route content must remain build-time/static. If a heavy scene import is dynamically loaded, the loading state must preserve the same layout dimensions to avoid cumulative layout shift.

## 14. Responsive behavior

### Desktop: 1440px and 1920px

- 1440px: approximately 12k–18k particles, DPR cap `1.5`, perspective camera with 7–10% negative-space lane for copy.
- 1920px: up to 24k particles only if frame-time benchmark passes; DPR cap `2` on capable hardware.
- HUD panels remain lateral and never overlap the headline.
- Use the full 500vh narrative and four-column Services layout.

Counts are starting budgets, not performance guarantees.

### Tablet: 768px

- 6k–10k particles, DPR cap `1.25–1.5`.
- Camera moves back slightly and reduces orbital tilt.
- HUD panels stack as compact semantic rows below the main copy or become one panel at a time.
- Services switches from four columns to two; Industries remains a quiet row list.
- Keep CTA controls at least 44px high.

### Mobile: 390×844 and 375×812

- Do not scale desktop composition down.
- 2k–4k particles, DPR cap `1–1.25`, no bloom.
- Use a narrower camera frustum/orthographic-like framing and reduce Z depth to prevent clipping.
- Keep copy in normal DOM flow above or beside the canvas; canvas gets a bounded `min-height` rather than full-screen dominance.
- Show one HUD statement at a time; hide qualitative body copy until the stage settles or omit it.
- Stack CTAs with 12px gap and full available width.
- Hide the chapter progress rail if it crowds the copy; retain a compact textual stage indicator.
- Test both widths for no horizontal overflow and no fixed navigation overlap.

## 15. Reduced motion and failure handling

### Reduced motion

For `prefers-reduced-motion: reduce`:

- do not create Lenis;
- do not pin the 500vh scene;
- render a complete static portal poster/first frame with no continuous particle movement;
- place all five stage text chapters in natural document flow;
- keep Services, Industries, Approach, Contact, navigation, and form controls fully functional;
- remove scroll-scrub, parallax, camera drift, and decorative shimmer;
- preserve readable contrast and focus visibility.

### Failure modes

- **WebGL unavailable:** hide the canvas, show a CSS/static portal treatment, and retain all DOM content.
- **Context loss:** listen for `webglcontextlost`, prevent default, pause scene updates, show fallback; on `webglcontextrestored`, rebuild geometry/materials and resume only if the page is visible.
- **Low-memory mobile:** use a capability tier from renderer limits and `deviceMemory` where available; reduce particle count/DPR; never assume `deviceMemory` exists.
- **Tab hidden:** pause Lenis/ScrollTrigger scene work and do not schedule frames; resume on visibility.
- **Resize:** use `ResizeObserver`, update renderer size/camera projection, and refresh ScrollTrigger after layout settles.
- **Unmount/route change:** destroy the GSAP context and ScrollTriggers, cancel callbacks, disconnect observers, dispose geometry/materials, and call renderer disposal where applicable.
- **Rapid reverse scroll:** derive every state from current normalized progress; never queue directional animations or mutate one-way arrays.

## 16. Proposed component and file architecture

```text
components/
  cinematic/
    CinematicIntro.tsx              # client boundary and reduced-motion branch
    CinematicCopy.tsx               # semantic stage copy and CTA
    CinematicProgress.tsx            # accessible stage indicator
    useCinematicTimeline.ts          # Lenis/GSAP/ScrollTrigger adapter
    particle/
      MasterParticleScene.tsx        # R3F Canvas and scene lifecycle
      MasterParticleGeometry.ts      # seeded target generation
      masterParticle.vert.glsl
      masterParticle.frag.glsl
      qualityTiers.ts
    fallback/
      StaticPortal.tsx
  layout/
    SiteNavigation.tsx
    ObsidianVaultFooter.tsx
lib/
  motion/
    motionTokens.ts
    reducedMotion.ts
```

Keep the target generators pure and unit-testable. Keep `uScrollProgress` in a mutable ref/store. Do not pass per-frame values through React props or state.

## 17. Accessibility requirements

- The canvas is decorative: `aria-hidden="true"` and no keyboard interaction is required for particles.
- All meaningful stage copy, headings, links, buttons, and HUD descriptions are semantic DOM.
- Maintain heading order and landmarks (`header`, `main`, `section`, `footer`).
- The pinned scene must not trap keyboard focus; focus order follows DOM order.
- Provide a visible “Skip cinematic intro” link that jumps to Services.
- Ensure nav, HUD buttons (if any), and CTA links have accessible names and 44px targets.
- Do not convey stage meaning by color alone; labels and text identify each stage.
- Maintain WCAG AA contrast for text over the moving background; add a local scrim behind copy if measured contrast drops.
- `aria-current="page"` belongs on the active route link.
- Any contact form has explicit labels, errors associated with fields, and a non-JavaScript submission/failure message appropriate to the existing static-site constraints.

## 18. Performance budgets and adaptive quality

These are release gates to measure, not promises:

- first meaningful text and static fallback should not wait for WebGL;
- initial scene code should be lazy-loaded after the DOM shell is usable;
- no more than one active WebGL renderer;
- no per-particle allocation or React render;
- target frame time under 16.7ms on the defined desktop baseline and under 33.3ms on the mobile baseline, subject to real-device measurement;
- cap DPR at the tier values above;
- pause offscreen/hidden rendering;
- avoid postprocessing until profiling proves it is safe;
- record particle count, DPR, average frame time, worst 1% frame time, JS heap trend, and context-loss behavior for 1440px, 768px, 390px, and reduced-motion runs.

Quality tiers:

| Tier | Trigger | Particles | DPR | Effects |
|---|---|---:|---:|---|
| High | desktop and stable frame time | 18k–24k | 1.5–2 | full depth, subtle point glow |
| Medium | tablet or frame-time pressure | 6k–12k | 1.25–1.5 | reduced depth, no expensive post FX |
| Low | mobile/low-memory/thermal pressure | 2k–4k | 1–1.25 | simplified targets, no bloom |
| Static | WebGL failure/reduced motion | 0 | n/a | static portal only |

Quality changes must preserve particle identity; regenerate only when changing tier, with a deterministic seed and a crossfade if required.

## 19. Implementation sequence and verification plan

1. Freeze copy, route states, and authenticity/license decision.
2. Add the proposed packages in one controlled dependency change; verify React 18 peer compatibility.
3. Build the static DOM fallback and reduced-motion flow first.
4. Build seeded target generators and unit-test deterministic output, bounds, strand/ring counts, and reverse interpolation.
5. Build one transparent R3F renderer with Stage 1 only.
6. Add shader interpolation and Stage 2–5 targets one at a time.
7. Add the Lenis/GSAP adapter and remove the competing hero master progress.
8. Add DOM chapter/HUD states and keyboard skip path.
9. Implement quality tiers, context loss, visibility, resize, and route unmount handling.
10. Replace the homepage's current positioning/cards treatment with the approved open Services, Industries, Approach, Contact sequence.
11. Run typecheck, lint, static build/export, and accessibility checks.
12. Browser-test 1440px, 1920px, 768px, 390px, and 375px; test forward/reverse scroll, keyboard, WebGL-disabled, context loss, hidden tab, and reduced motion.
13. Profile real devices before approving particle budgets or claiming performance.

Acceptance requires: no opaque rectangle, one renderer, one scroll authority, deterministic reversible morphs, complete static fallback, no fabricated content, no hydration errors, and no horizontal overflow.

## 20. Verified findings, risks, and unresolved questions

### Verified repository findings

- Next.js `14.2.15`, React `18.2.0`, TypeScript `5.2.2`, Tailwind `3.3.3`, Framer Motion `11`, and Lenis `1.3.27` are present.
- `output: "export"` and `trailingSlash: true` are present in `next.config.mjs`.
- The existing Lenis wrapper advances Lenis from Framer Motion's `useAnimationFrame`.
- The current Predictive Arc calls `getContext("2d", { alpha: false })`, fills an opaque background, and schedules its own `requestAnimationFrame`.
- The existing homepage uses Framer Motion `useScroll`/`useTransform` for hero progress and several IntersectionObservers for normal-flow reveals.
- The project has no Three.js, R3F, GSAP, ScrollTrigger, or `@designcodeio/threeui` dependency.
- The current `app/globals.css` contains `.ambient-light-overlay` nested inside `:root`. The configured PostCSS plugins are Tailwind and Autoprefixer; neither is evidence that this CSS nesting is intentionally transformed. Treat this as a verified defect to fix in a later code gate, not as a Gate 2 implementation change.
- `app/globals.css` contains duplicate motion declarations (`--duration-fast`, `--duration-base`, `--duration-slow`, `--duration-slower`) in the same `:root`; the later declarations are cascade-equivalent for the duplicated values but should be consolidated when source changes are permitted.

### Risks

1. Scroll synchronization can double-schedule frames if Lenis, GSAP, and R3F are wired without an explicit order.
2. R3F/Three version drift can create peer or transpilation failures in Next 14.
3. Dense points and transparent blending can exceed mobile GPU/thermal budgets.
4. A 500vh scene can cause fatigue if chapter progress and skip controls are absent.
5. A moving background can reduce text contrast at intermediate frames.
6. The current static contact behavior must be checked before promising a functioning submission path.
7. Upstream ThreeUI provenance/license and source availability remain unverified for reuse.

### Unresolved questions for Gate 3

- Which exact Instrument Serif font asset and license are approved?
- What genuine products, articles, openings, and contact endpoints exist in source material?
- Which browser/device baseline will be used for performance sign-off?
- Should the final CTA wording be approved as written or supplied by the content owner?
- Should a controlled `frameloop="never"`/`advance` integration be used, or should R3F's default loop remain the safer choice after a synchronization spike?
- Is a static portal image permitted as a fallback asset, or must the fallback remain CSS/DOM-only?

## 21. Sources

### Repository

- `app/globals.css`
- `app/page.tsx`
- `components/LenisWrapper.tsx`
- `components/threeui/predictive-arc/predictiveArcRenderer.ts`
- `components/threeui/predictive-arc/PredictiveArcCanvas.tsx`
- `next.config.mjs`
- `postcss.config.js`
- `package.json`
- `docs/KEPLOR_RESOURCE_AND_SKILL_REGISTER.md`
- `docs/HANDOFF_STATE.md`

### Official and procedural references

- [R3F installation and React pairing](https://r3f.docs.pmnd.rs/getting-started/installation)
- [R3F hooks and frame loop](https://github.com/pmndrs/react-three-fiber/blob/master/docs/API/hooks.mdx)
- [Lenis](https://github.com/darkroomengineering/lenis)
- [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [GSAP ticker](https://gsap.com/docs/v3/GSAP/gsap.ticker/)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [WebGL Landing Steering](https://www.ui-skills.com/skills/mengto/webgl-landing-steering)
- [Animation Systems](https://www.ui-skills.com/skills/mengto/animation-systems)
- [Animation on Scroll](https://www.ui-skills.com/skills/mengto/animation-on-scroll)
- [High-End Visual Design](https://www.ui-skills.com/skills/leonxlnx/soft-skill)
- [Improve Animations](https://www.ui-skills.com/skills/emilkowalski/improve-animations)
