# QA Acceptance Checklist

## Visual
- [ ] Near-black / violet brand system is consistent.
- [ ] Header, typography, dividers, spacing and hero hierarchy feel deliberate.
- [ ] Predictive Arc appears as pixel arch, not a sphere or generic particle field.
- [ ] No visible canvas rectangle or broken visual asset.
- [ ] No generic bento-grid redesign or unapproved color palette.

## Functional
- [ ] All eight routes load and navigation links work.
- [ ] Mobile navigation opens, closes, and supports keyboard.
- [ ] CTA links have valid destinations.
- [ ] Contact page does not imply a non-existent backend.
- [ ] Blog, testimonials and careers do not fabricate content.

## Engineering
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes or known lint limitations are documented.
- [ ] `npm run build` passes and static `out/` output exists.
- [ ] Browser screenshots reviewed at 1440×900, 1920×1080, 390×844 and 375px width.
- [ ] Reduced-motion mode checked.
- [ ] No deployment, push, merge, DNS or hosting change performed.
