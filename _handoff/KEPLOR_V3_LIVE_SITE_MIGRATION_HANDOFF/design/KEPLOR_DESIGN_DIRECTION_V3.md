# Keplor Design Direction V3 — Canva Reference-Aligned

## Why this revision exists

The previous concepts looked too similar because they repeatedly used the same space-orb/planet visual, particle field, and modular card layout. This version explicitly replaces that approach. Treat the supplied Canva reference images as the primary visual source of truth.

## What the references actually share

- Near-black canvas with large areas of clean negative space.
- Oversized, modern sans-serif typography with simple, confident line breaks.
- Large, soft-focus colour fields bleeding in from the edges: cyan, electric blue, indigo, violet, and occasionally magenta/warm highlights.
- Colour behaves like light or defocused photography, not a literal object.
- Minimal top bar, thin separators, small quiet labels, and little interface chrome.
- Text stays readable and dominant; background lighting supports it rather than competing with it.
- Motion is slow, soft, cinematic, and driven by the movement of colour, not busy UI elements.

## Hard exclusions

Do not use planets, moons, orbs with a defined rim, orbital rings, starfields, point-cloud spheres, mountain/space landscapes, particle constellations, 3D sculptures, floating dashboards, repeated bento cards, or a dense technical grid. Do not make another version of the previous sci-fi hero. No serif headline or editorial-magazine look.

## Visual system

- Background: near-black `#050507`.
- Main type: near-white `#F7F7FA`.
- Secondary type: cool grey `#B9BAC6`.
- Brand purple: `#36006D` from the supplied Keplor logo; a lighter lavender can be used sparingly for emphasis.
- Ambient colours: soft blue/cyan and violet; warm magenta/amber only in occasional low-opacity accents when present in the reference.
- Typography: clean grotesk/sans-serif (Inter, Geist, Manrope or a suitable installed equivalent). Use large responsive type, negative tracking, line-height around 0.95–1.05, and avoid overstyled italics/serifs.
- Spacing: broad section padding, readable maximum copy width, simple 1px dividers, and generous vertical separation.
- Components: plain links and restrained outlined/filled CTA buttons. Service content uses open columns or separated rows, not repeated rounded cards.

## Page structure and source content

Retain the existing Keplor proposition and company blueprint. The prototype contains:
1. Hero: “Intelligent systems. Built around your business.”
2. Four services: AI & Machine Learning; Custom Software; Cloud Solutions; Research & Analytics.
3. Five target industries: Healthcare, Finance, Education, Retail & E-Commerce, Manufacturing.
4. Approach: Understand, Design, Build, Improve.
5. About, mission and vision.
6. Contact and compact footer.

Use confident business language. Do not disclose team size, publicly show pricing, or invent customers, logos, metrics, case studies, awards, certifications, uptime promises, or product capabilities. Review `/contact` CTA destinations and replace the example email address with Keplor's verified public contact before production if needed.

## Scroll/motion direction

The lighting—not an object—is the signature visual. Use several very large radial gradients with soft edges and low opacity; blend them into one diffuse field. Keep the field mostly stationary and shift it gradually with scroll progress and subtle pointer position. It should feel like a soft studio light changing through smoked glass.

- Hero load: copy reveals with opacity 0 → 1 and Y 16–24px → 0 over 700–1000ms; no dramatic overshoot.
- Scroll into services: hero light field drifts slightly upward/outward; section content fades in and rises only 12–20px. Stagger siblings by 50–80ms.
- Industries: background shifts subtly from blue toward violet; list rows reveal with simple opacity/underline changes.
- Approach: draw the thin process line left-to-right once, then reveal each step in sequence. No floating 3D step cards.
- About: keep the visual almost still; prioritize mission/vision readability.
- Contact: diffuse glow slowly gathers toward one edge; form/CTA settles in with opacity and a small Y translate.
- Transitions between sections must not hijack scrolling or pin the user for long periods. Use native smooth anchor scrolling and IntersectionObserver/GSAP only where it clearly helps.
- Use `prefers-reduced-motion`; stop ambient movement and reveal content immediately when requested.

Suggested timings: 700–1000ms section reveal; 250–350ms hover states; 0.05–0.08s stagger. Suggested easing: `cubic-bezier(.22, 1, .36, 1)`. Prefer transform/opacity and respect mobile performance.

## Stitch and Lium: what to borrow

Use Google Stitch as a reference for keeping a coherent reusable design system and iterating from actual screens; do not copy its product UI onto a marketing website. Use Lium as a content-structure reference for a clear proposition, capability descriptions, a process/story, industry context, and an unambiguous contact path. Neither should override the Canva visual references.

## Deliverable/QA

Use `index.html` as the visual direction prototype, not as permission to throw away the current repository. Integrate the visual system into the current app architecture. Keep existing routes/functions that are genuine and remove or redirect unsupported pages rather than leaving broken links. Test desktop widths 1440/1920px and mobile 390px, verify internal links, keyboard menu behavior, contact path, console output, and production build. Compare screenshots against the supplied original reference assets in `/references/` and the visual previews under `/prototype/`.
