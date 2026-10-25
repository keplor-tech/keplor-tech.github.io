# Keplor V3 — Master Website Specification

## 1. Product intent
Keplor is an AI/ML and software solutions company. The website should communicate clarity, technical depth, thoughtful execution, and a premium design sensibility without pretending to have traction or capabilities that have not been verified.

## 2. Creative direction
**Premium editorial technology studio.** Quiet confidence, near-black space, purposeful violet light, strong typographic hierarchy, thin rules, and deliberate composition. Avoid generic SaaS templates and noisy visual effects.

### Design tokens
- Background: `#050507`
- Surface: `#0A090F`
- Primary brand purple: `#36006D`
- Main text: `#F4F0FA`
- Muted text: `#AAA3B8`
- Hairline border: `rgba(226, 215, 245, 0.14)`
- Accent light: restrained violet, indigo, blue and cyan.
- Typography: use a modern neutral sans-serif stack with editorial proportions; avoid adding paid or external fonts without approval. Prefer locally available/system fallbacks for reliability.
- Radius: restrained; avoid making every block a rounded card.
- Layout: generous spacing, readable line lengths, open rows and fine dividers.

## 3. Visual hierarchy
1. Clear headline and one-sentence positioning.
2. One primary CTA and one quiet secondary link.
3. Signature arc as a supporting hero visual, not a distraction behind the copy.
4. Short service descriptions with clear distinctions.
5. Strong section rhythm through spacing and dividers rather than excessive cards.

## 4. Hero visual
Use a violet pixel arch / Predictive Arc visual on the hero's right side, behind or beside copy without reducing legibility. It should feel like a field of small luminous pixels, with subtle changes in intensity and slow continuous motion. Do not create a visible rectangular canvas edge. Support reduced-motion preference and pause or reduce work when not visible where feasible.

## 5. Sitemap
- `/` — Home
- `/about/` — About
- `/services/` — Services
- `/features/` — Capabilities / working principles; do not invent shipped product features
- `/blog/` — Field notes / insights; empty state is acceptable until real articles exist
- `/testimonials/` — Feedback page; do not fabricate testimonials
- `/careers/` — Careers; do not claim roles are open unless verified
- `/contact/` — Contact / project inquiry
- No public pricing route.

## 6. Home page order
1. Hero and primary CTA
2. Positioning / operating belief
3. Four service pillars
4. Approach: Understand → Design → Build → Validate
5. Industries served
6. Field notes / editorial entry point (real content only)
7. Closing project CTA
8. Footer

## 7. Service pillars
- AI & ML Solutions: predictive analytics, NLP, computer vision, recommendation systems, automation and AI-supported business intelligence.
- Custom Software Development: tailored web/mobile experiences and business systems.
- Cloud Solutions: cloud infrastructure and application development, scalability, and hybrid/multi-cloud planning.
- Research & Analytics: data science, visualization/reporting, real-time and batch processing, and research-led model development.

These are positioning categories, not guarantees that every listed capability is already productized. Scope is project-dependent.

## 8. Industries
Healthcare, Finance, Education, Retail & E-Commerce, Manufacturing. Avoid implying named clients or regulatory certifications.

## 9. Content integrity
Never fabricate:
- Customer names/logos, testimonials, case studies, metrics or uptime claims.
- Team bios, funding, certifications, open roles, office locations or contact information.
- Public pricing or unsupported API/SDK claims.

Use transparent empty states when content is not yet available. Avoid fake urgency and invented counters.

## 10. Navigation
Keep the header understated and readable. Use the official logo asset when provided; otherwise a simple text wordmark placeholder. Primary CTA: “Discuss a project” or “Start a conversation.” The footer may contain the full sitemap. Keep mobile navigation keyboard-accessible.

## 11. Motion
- Use motion to clarify hierarchy and create atmosphere, not to decorate every element.
- Short hover transitions, restrained reveal-on-scroll, gentle CTA feedback, and a subtle hero animation.
- Never use fake loading delays or fake progress counters.
- Respect `prefers-reduced-motion`.
- Keep content available without animation and prevent layout shift.

## 12. Accessibility and responsiveness
Semantic landmarks, heading order, descriptive links, focus-visible states, contrast, keyboard support, reduced motion, mobile navigation, and comfortable tap targets. Verify at narrow mobile, tablet, laptop, and wide desktop widths.

## 13. Technical baseline
- Next.js 14 App Router, React 18, TypeScript, Tailwind CSS 3.
- Static export (`output: "export"`); use `trailingSlash: true` and unoptimized local Next images if using `next/image`.
- Do not depend on server actions, Next runtime APIs, or server-only form handling in the exported site.
- External form integrations must be configured and tested before describing a form as live.
