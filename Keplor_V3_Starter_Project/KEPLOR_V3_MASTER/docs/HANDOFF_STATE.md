# Handoff State — Keplor V3 Hero Scroll Transition

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