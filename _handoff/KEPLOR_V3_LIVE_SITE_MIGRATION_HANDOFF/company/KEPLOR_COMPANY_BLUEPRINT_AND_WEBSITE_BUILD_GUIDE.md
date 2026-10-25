# KEPLOR — Company Blueprint, Live-Site Audit, Design System & Website Build Guide

**Status:** Master implementation brief for Codex / frontend engineering  
**Live reference reviewed:** https://keplor.tech/  
**Review date:** 20 October 2026  
**Brand anchor:** official Keplor purple `#36006D` and supplied K logo  
**Design direction:** minimal · spatial · dark · modern · confident · business-focused

> This document combines the founder-provided company blueprint, a review of the current public website, the agreed brand direction, design references, page/content architecture, scroll-transition guidance, and implementation/QA requirements. Read it fully before making code changes. This is the source of truth for the rebuild.

---

## 1. Executive direction

Rebuild Keplor.tech as a polished, confident, independent AI/ML and software solutions company. The website should communicate capability and clarity without disclosing team size, calling out that the company is new, inventing customer traction, or publishing unvalidated prices.

Preserve the actual business scope from the company blueprint:

- AI and machine learning solutions
- Custom software development
- Cloud solutions
- Research, data science, and analytics
- Business applications across healthcare, finance, education, retail/e-commerce, and manufacturing
- A target audience spanning enterprises, SMEs, healthcare providers, retailers, government bodies, and NGOs

Do not reduce Keplor to a generic AI SaaS subscription product if the real offer includes bespoke services and software development. Keep the brand’s AI/ML, software, cloud, and analytics scope visible, but organize it into a clear, elegant story rather than a huge list of capabilities on the homepage.

### Desired impression

A visitor should conclude that Keplor is a serious, technically capable, independent partner that can understand a business problem and help design, develop, integrate, and improve a practical solution. The visual design should feel current and premium, closer to excellent modern technology sites than to a crowded agency template.

### Positioning guardrails

- Do not display team size or make the company sound inexperienced.
- Do not claim a history, scale, client portfolio, funding, awards, certifications, SLA, uptime, or user/task counts without verifiable evidence.
- Do not publish prices, subscription tiers, free-trial claims, or “no credit card” promises unless these are real and currently supported.
- Do not invent named clients, customer logos, testimonials, case studies, partner lists, or example deployments.
- It is acceptable to sound assured and established in tone; it is not acceptable to fabricate proof.
- Describe capabilities as services Keplor can discuss or deliver, not as existing live products unless that product exists and can be demonstrated.

---

## 2. Company blueprint — authoritative content

The following material is supplied by the company owner and should guide content, information architecture, and positioning. Improve wording for clarity and web readability while preserving meaning.

### 2.1 Company overview

- **Company:** Keplor
- **Industry:** AI/ML and software solutions
- **Mission:** To empower businesses across sectors through AI/ML technologies and custom software solutions that support innovation, efficiency, and growth.
- **Vision:** To become a global leader in AI/ML-driven software solutions, helping businesses navigate the digital future with intelligent, scalable, data-informed strategies.

Avoid putting a long mission statement in the hero. Translate it into clear customer-facing copy, and place the fuller mission/vision on the About page.

### 2.2 Core services

#### A. AI & Machine Learning Solutions

Company-specified areas:
- Predictive analytics
- Natural language processing (NLP)
- Computer vision
- Recommendation systems
- Automation and AI-driven business intelligence

Website wording direction: “AI and machine learning built around a specific business problem.” Explain that the right model or method depends on available data, workflow constraints, validation requirements, and intended outcomes. Do not make claims of accuracy, clinical efficacy, or business impact without evidence.

#### B. Custom Software Development

Company-specified areas:
- Tailored software for specific business requirements
- Web and mobile application development
- Enterprise software systems

Website wording direction: “Purpose-built software for the way your business works.” Mention discovery, design, development, integration, and iteration when these reflect the actual working approach. Avoid claiming a particular delivery track record unless verifiable.

#### C. Cloud Solutions

Company-specified areas:
- Cloud-based infrastructure and application development
- Scalable cloud solutions
- Hybrid-cloud and multi-cloud strategies

Website wording direction: “Cloud systems designed around your applications, data, operational needs, and growth.” Do not claim multi-region operation, specific cloud certifications, guaranteed availability, or named provider partnerships unless verifiable.

#### D. Research & Analytics

Company-specified areas:
- Data science and advanced analytics
- Data visualization and reporting
- Real-time and batch data processing
- Research-driven AI models for different industries

Website wording direction: “Turn complex data into information your team can use.” Distinguish research, exploratory analysis, production analytics, and validated models accurately. Do not imply that all work is real-time or production-deployed by default.

### 2.3 Target industries and illustrative use cases

Use the five sectors below as a curated industry section. Use concise descriptions and one or two illustrative examples per sector rather than exposing every sub-bullet on the homepage.

1. **Healthcare**
   - Medical-imaging / diagnostic-support exploration, subject to clinical validation and applicable regulation
   - Healthcare research analytics
   - Automation of administrative or operational processes

2. **Finance**
   - Fraud and anomaly detection
   - Risk analysis
   - Forecasting and financial analytics
   - Algorithmic trading only where the scope, regulation, controls, and responsibilities are explicitly understood; do not imply financial outcomes or investment advice

3. **Education**
   - Personalized learning experiences
   - Student-performance analysis
   - E-learning platforms and learning workflows

4. **Retail & E-commerce**
   - Customer-behavior analysis
   - Supply-chain and inventory optimization
   - Recommendation and personalization systems

5. **Manufacturing**
   - Predictive-maintenance analysis
   - Production workflow automation
   - Demand forecasting

These are use-case areas, not evidence of completed deployments. When they appear on the public site, label them as application areas or possible use cases, not as customer outcomes or live case studies.

### 2.4 Target audience

- Enterprises pursuing AI-enabled transformation or better use of data
- Small and medium businesses needing fit-for-purpose software
- Healthcare providers seeking research analytics or operational automation
- Retailers seeking analytics, forecasting, personalization, or better-connected workflows
- Government bodies and NGOs seeking data analysis and decision support

The interface should help visitors find the relevant service or use case quickly. Do not create a separate landing page for every audience unless there is enough truthful, useful content to justify that page.

---

## 3. Live-site review: what to retain and what to correct

Review the live site directly before implementing. Public pages may change; re-check the current output, links, and source code rather than treating this audit as permanent.

### Current homepage

Public homepage: https://keplor.tech/

The current live homepage presents Keplor as “AI SaaS Solutions Engineered for Everyone,” describes cloud-native automation tools, and lists features such as intelligent agents, cloud-native architecture, enterprise security, analytics, performance, collaboration, APIs/SDKs, global scale, and data management. It also displays `10K+ Active Users`, `99.9% Uptime`, and `5M+ AI Tasks Completed`, along with “Start Free,” no-credit-card, and immediate-use messaging. Source: https://keplor.tech/ (reviewed 20 October 2026).

**Action:** preserve the broad AI/software/automation message but re-align it to the supplied company blueprint. Do not continue advertising unsupported scale, performance, security, current API/SDK availability, active-user numbers, free plans, or a live self-serve product unless the owner can substantiate those claims and the functionality exists.

### Current About page

Public page: https://keplor.tech/about

The current page claims a 2021 founding date, 50+ team members, 10K+ users, named executives with detailed prior-employer and education claims, a $15M Series A in 2023, SOC 2 compliance, and global multi-region deployment. Source: https://keplor.tech/about (reviewed 20 October 2026).

**Action:** remove or verify every company-history, employee, person, funding, user, compliance, and deployment claim. Never invent a leadership team or biography. Replace it with the company mission, vision, values, service philosophy, and an accurate description of how Keplor works. Do not mention team size. A concise, capable About page is preferable to a long invented chronology.

### Other existing routes

The current homepage navigation exposes Features, Pricing, API/Documentation, About, Blog, Careers, and Contact. Inspect each current route in the browser and repository. Some direct pages may be inaccessible to automated web retrieval, so do not infer their actual implementation solely from a URL.

Route policy:
- **Features:** retain the URL or redirect it to Services; organize the real four service pillars here.
- **Pricing:** do not publish invented tiers. Offer a tailored project conversation and explain that scope, milestones, and commercial terms are discussed before work begins. Do not say “pricing is confidential” or suggest free services unless true.
- **API / Documentation:** retain only if actual, maintained APIs or docs exist. Do not fabricate endpoint documentation, SDKs, API keys, or sample results. If absent, remove these links from primary navigation and create an explicit, graceful redirect/fallback rather than a dead link.
- **Blog:** retain only real, useful articles. Do not seed placeholder posts or fabricated thought leadership attributed to real people.
- **Careers:** list active opportunities only. If none are published, remove it from the prominent navigation and provide a graceful route fallback.
- **About / Contact:** retain and rewrite using the approved blueprint.
- All existing or externally linked paths should resolve usefully. Where redirects are supported, preserve legacy URLs with appropriate redirects. If not, provide an informative route with working internal links.

Do not break functioning integrations or valid SEO metadata without a deliberate reason.

---

## 4. Recommended positioning and website copy

Use this as a copy framework, not a mandate to discard every existing line. Prefer concise, direct, outcome-oriented language. Sound confident without inventing scale.

### Main brand proposition

**Eyebrow:** `AI / SOFTWARE / DATA`

**Preferred hero headline:** `Intelligent solutions for real business challenges.`

Alternative if the existing brand voice uses “build” language: `Build smarter with AI, software and data.`

**Supporting copy:** `Keplor helps businesses turn complex needs into practical AI/ML, custom software, cloud and analytics solutions — designed around the way work actually happens.`

**Primary CTA:** `Discuss a project` → Contact page / form  
**Secondary CTA:** `Explore capabilities` → Services page / section

Do not put every industry, methodology, technology acronym, or sub-service in the hero.

### Services section

Section heading: **`Technology shaped around your business.`**
Supporting line: `From applied AI and data to custom applications and cloud systems, we focus on the problem first and the technology that fits it.`

Four service entries:

- **AI & Machine Learning** — `Predictive models, language and vision systems, recommendation engines, automation and decision support shaped around real use cases.`
- **Custom Software** — `Web, mobile and enterprise applications designed around your workflows, requirements and users.`
- **Cloud Solutions** — `Cloud-based applications and infrastructure, including scalable, hybrid and multi-cloud approaches where they fit.`
- **Research & Analytics** — `Data science, visualization, reporting, data processing and research-led modeling to make complex information more useful.`

Keep claims at the capability level. Do not say “our platform already does X” unless a real product demonstrates that.

### Context / problem section

Possible heading: **`The right solution starts with the right problem.`**
Copy direction: explain that a useful technology solution must take account of data, people, tools, exceptions, decisions, operational constraints, and the intended business outcome. This section connects software and AI capabilities with the actual work that needs improving.

### Approach section

Use four simple steps:
1. **Understand** — clarify goals, existing systems, users, data, constraints, and desired outcomes.
2. **Explore** — compare options, test assumptions, and choose a practical direction.
3. **Build** — develop and integrate the solution in focused, reviewable stages.
4. **Improve** — evaluate what works, refine the implementation, and plan next steps.

Only make commitments such as testing, handover, maintenance, or ongoing support if they are available for the engagement being discussed.

### Industries section

Heading: **`Different industries. Practical technology.`**
Use five concise sector entries: Healthcare, Finance, Education, Retail & E-commerce, and Manufacturing. Each entry should show relevant illustrative use cases without implying completed client deployments or guaranteed outcomes. A secondary “Other sectors” note may mention government, NGOs, and other business domains if space allows.

### Mission and vision

On About, retain the meaning of the founder-provided mission and vision. Suggested polished versions:

- **Mission:** `To help businesses use AI/ML and custom software to work more effectively, make better decisions, and create room for innovation and growth.`
- **Vision:** `A future where organizations can use intelligent, scalable, data-informed technology to adapt and make progress.`

If the owner wants the original “global leader” wording, use it as an aspiration in the Vision section; do not describe Keplor as already being a global leader.

### Contact section

Headline: **`Let's discuss what your business needs.`**
Supporting copy: `Tell us about a workflow, a technical challenge, or an idea you want to explore. We'll start by understanding the problem and discussing a practical next step.`

Suggested fields: name, work email, company/organization (optional), area of interest (AI/ML, Custom Software, Cloud, Research & Analytics, Not sure yet), and a short message. Do not request unnecessary personal or sensitive information.

Only show email, telephone, address, response-time promise, social URLs, or a form-submission success state if wired to real, verified destinations and behavior. A static prototype can use a clearly explained email-draft flow; the production implementation should use an approved, tested form endpoint.

---

## 5. Visual design direction

### Overall design language

Minimal, spatial, dark, modern, confident. Use the level of care found in high-quality modern product and developer websites: strong typography, clear navigation, low-clutter page composition, readable content, and purposeful motion.

### Primary design references

- Prisma Noir — near-black visual field, modern type, controlled lighting: https://github.com/pulkitxm/claude-directory/tree/main/hero-sections/prisma-noir-h52
- Woven Light — dimensional particle concept; use the idea, not its inefficient implementation: https://github.com/pulkitxm/claude-directory/tree/main/hero-sections/woven-light-hero
- ThreeUI Tideform: https://threeui.com/hero/tideform-page
- ThreeUI Anima: https://threeui.com/hero/anima
- ThreeUI Emerald Horizon: https://threeui.com/emerald-horizon
- ThreeUI Structure Flow: https://threeui.com/structure-flow--structure-flow
- ThreeUI Aural: https://threeui.com/aural-landing-page
- ThreeUI Umbra: https://threeui.com/landing-pages/umbra-landing-page
- Full directory of UI experiments: https://github.com/pulkitxm/claude-directory

### Brand assets

Use the provided official primary K mark and circular stamp, keeping proportions intact. Prefer the existing project's approved assets if present; avoid duplicate asset copies.

- Primary logo source in this handoff: `brand-assets/keplor-mark.png`
- Circular stamp: `brand-assets/keplor-stamp.png`
- Core brand purple: `#36006D`

### Palette tokens (starting point)

| Token | Suggested value | Use |
|---|---|---|
| Background | `#08070D` | Main canvas |
| Raised background | `#0D0B14` | Alternating section surface |
| Surface | `#111019` | Select panels only |
| Primary brand | `#36006D` | Official purple anchor |
| Violet accent | `#8B5CF6` | CTA / active states / light field |
| Soft violet | `#C4B5FD` | Sparse highlights |
| Main text | `#F5F4F8` | Body / headings |
| Muted text | `#A7A3B4` | Supporting content |
| Hairline | `rgba(245,244,248,.12)` | Quiet boundaries |
| Focus | `#C4B5FD` | Keyboard focus |

Check real contrast and adjust if needed. Do not use neon purple on every element or multiple competing gradients.

### Typography

- Modern sans-serif only: prefer existing local project fonts, or one of Geist, Inter, Manrope, or DM Sans.
- No editorial serif system.
- Hero headline roughly `clamp(3.25rem, 6vw, 6.2rem)`, adjusted to form 2–3 deliberate lines.
- Body at 16–18px desktop and 15–17px mobile, with comfortable line-height.
- Micro labels may use restrained letter-spacing, but never rely on tiny uppercase text for essential information.
- Give body copy a comfortable maximum width; avoid content spanning the full viewport.

### Composition

- Max content width around 1180–1320px, using existing grid conventions where suitable.
- Desktop outer margins generally 40–64px; mobile 20–24px.
- Use broad, generous section spacing; not every section needs a card.
- Make the hero headline and main spatial visual the two clear focal points.
- Use the spatial motif sparingly and evolve it across the page; do not duplicate a giant glowing orb behind every section.
- Do not reproduce generated-board text, made-up customer logos, fictitious metrics, or sample dashboards as if real.

---

## 6. Recommended information architecture

Use only routes that have a real purpose and working content. A recommended structure is:

1. `/` — Home: proposition, four service pillars, process preview, selected industries, CTA.
2. `/services` — full service descriptions for AI/ML, custom software, cloud, and research/analytics.
3. `/industries` — use-case areas for healthcare, finance, education, retail/e-commerce, and manufacturing; mention other audiences where relevant.
4. `/approach` — understand, explore, build, improve; outline a practical engagement journey.
5. `/about` — company overview, mission, vision, values, and working philosophy; no fake chronology or team roster.
6. `/contact` — working enquiry path.

If the current codebase has other valid routes that are genuinely used, preserve them. Do not create unnecessary pages just to increase page count.

### Legacy routes

- `/features` should resolve to `/services` or a useful services view.
- `/pricing` should resolve to a no-price project-engagement page or the contact page; no invented subscription tiers.
- `/api` and `/documentation` should be visible only if genuine technical resources exist. If they do not, remove their primary-nav links and provide a sensible fallback/redirect.
- `/blog` and `/careers` should contain only real, maintained posts or active roles. Do not invent content.

All visible links must have valid targets. No `href="#"`, dead buttons, fake menu items, or forms that pretend to submit without doing so.

---

## 7. Page-by-page experience

### Home

1. Compact header with official logo, Services, Industries, Approach, About, Contact, and one CTA.
2. Hero with a confident business-focused message, clear body copy, one spatial visual, and two clear actions.
3. Four services, displayed as a clean editorial list or simple cards.
4. A context-first section explaining how Keplor thinks about business problems.
5. Industries section, concise and scannable.
6. Four-step approach.
7. About/value statement and contact CTA.
8. Minimal footer with valid links only.

Do not force every service and industry sub-bullet onto Home; let Services and Industries pages provide the depth.

### Services

A clear introductory message followed by four service sections. Each has a short value statement, included capabilities, potential applications, and a “Discuss this service” link that carries the selected service into the contact form (for example via URL query parameter or form state). Do not claim specific deployments.

### Industries

Use five main sectors and illustrative use cases. Be careful with high-stakes domains such as healthcare and finance: clearly present use cases as possible applications, not validated products, medical diagnoses, trading recommendations, or regulatory guarantees.

### Approach

Explain Understand → Explore → Build → Improve in plain language. Use a restrained line/progress animation, not a full-screen scroll-jacking interaction. The section should be useful even when animation is off.

### About

Use the company overview, mission, vision and values. Suggested values: practical problem-solving, technical clarity, responsible application of data/AI, and collaboration. Do not fabricate personal biographies, corporate timeline, team size, awards, funding, or number of clients.

### Contact

Provide accessible validation, an understandable success/fallback state, and a real submission path. If the production endpoint is unknown, inspect project/environment settings and ask for access only if genuinely needed; never hardcode secrets. For a local static prototype, implement a mailto fallback and clearly identify it as an email draft, not a sent message.

---

## 8. Scroll-transition and motion guide

**Native scrolling stays in control.** The experience should feel spatial and alive but remain easy to read, navigate, and use.

### Global motion tokens

| Token | Target |
|---|---|
| Standard reveal | 500–750ms |
| Small hover state | 160–240ms |
| Stagger interval | 50–90ms |
| Ease | `cubic-bezier(0.22, 1, 0.36, 1)` or similarly restrained ease-out |
| Entry translation | 12–24px, rarely more |
| Scrub smoothing | Subtle; do not delay content or make controls lag |
| Always-on ambient drift | 18–35 seconds per cycle, low amplitude |

Do not apply all effects everywhere. Establish a hierarchy: one hero reveal, one ambient spatial visual, small section reveals, restrained hover details.

### State 0 — Initial hero

- Background begins nearly black and gains a subtle violet field.
- Spatial ring/phase field resolves over 600–1200ms, with particles becoming visible gradually.
- Logo and navigation appear first; eyebrow, headline, supporting copy, and CTA follow with 60–100ms stagger.
- Hero visual may drift/rotate slowly; the text should remain still and readable.
- Avoid long intro delays; page content should be usable immediately.

### State 1 — Scroll away from hero

- As the hero exits, fade the brightest particles and let the field stretch into a soft wave or sparse line.
- Headline and copy can translate upward 12–20px while fading slightly, but do not disappear before the section boundary.
- Avoid pinned hero behavior on mobile. Desktop scrub can be used only if tested and if native scrolling remains natural.

### State 2 — Services reveal

- Section heading fades in and moves up around 16px over 550–700ms.
- Service rows/cards stagger by 60–90ms.
- An icon, arrow, or hairline brightens on hover; a service visual may shift 2–4px or gain slight light, not perform a large 3D rotation.
- Keep the description visible and selectable; don't animate height continuously.

### State 3 — Context/AI problem section

- Spatial particle field thins into a line/network that visually connects points.
- Content reveals from one side with a small translate and opacity change.
- If a diagram is used, nodes illuminate in sequence once when entering viewport; do not run continuous attention-grabbing pulses.

### State 4 — Industry use cases

- Use a clear list, grid, or expandable rows.
- Entries stagger gently when first visible; on hover, use border/contrast change or subtle arrow movement.
- Do not spin complex 3D objects for every industry.
- Respect keyboard focus and make all entries usable without hover.

### State 5 — Approach timeline

- Draw a single thin line as the section enters or scrolls into view.
- Reveal Understand → Explore → Build → Improve in a short stagger.
- Active item can use a violet point and stronger text contrast.
- Do not pin the visitor in the timeline or force a long, scroll-controlled sequence.

### State 6 — About / mission

- Let the ambient visual settle; make the content calmer than the hero.
- A soft horizon or ring may move slightly with scroll, but text remains stable.
- Mission/vision can appear as a clean typography-led layout without cards everywhere.

### State 7 — Contact

- Background transitions gently toward a slightly brighter raised surface or a calm spatial horizon.
- Form fields appear together or with a tiny stagger; don't animate every keystroke.
- Provide clear focus states and visible success/error feedback.

### State 8 — Footer

- Footer appears naturally as the previous section leaves.
- No forced fade that hides links; all footer links must remain focusable and visible.
- Keep any final ambient light low contrast.

### Back-scroll

- Reveals should not flicker, vanish, or replay conspicuously every time the user moves a few pixels.
- Prefer one-time entry for content blocks and continuous scroll-scrub only for a meaningful background/field transformation.
- Avoid huge layout shifts. If using IntersectionObserver, choose a sensible threshold and root margin.

---

## 9. Implementation guidance

1. Inspect the real production repository, `package.json`, routing, CSS system, existing skills, and deployment configuration before editing.
2. Preserve good existing work and functioning business logic. Do not drop in the static starter prototype as a replacement for the production codebase.
3. Use the smallest compatible toolset:
   - CSS transitions + IntersectionObserver for basic reveals.
   - GSAP ScrollTrigger for a small number of scrubbed scene transitions if justified.
   - Existing Motion library if already installed.
   - Canvas 2D or WebGL for the signature spatial field, chosen based on visual quality and performance.
   - Three.js / React Three Fiber only if compatible with the stack and worth the added complexity.
4. No remote dependency should be added simply because it is listed here. Verify its documentation and compatibility first.
5. Use efficient animation loops and clean them up on unmount/navigation; pause or reduce offscreen animation when possible.
6. Cap device pixel ratio sensibly; avoid expensive per-particle object allocation; use GPU-friendly buffers/shaders for larger effects.
7. Use semantic HTML and keep primary content outside the canvas.
8. Honor `prefers-reduced-motion`, keyboard interaction, visible focus, adequate contrast, and mobile touch behavior.
9. Do not rely on hover for a critical feature. Support touch/mobile and no-JavaScript fallbacks where appropriate.
10. Avoid adding a new CSS framework or replacing the current architecture without a specific technical reason.

---

## 10. Testing and acceptance criteria

### Content / truth

- Services match the four company-blueprint pillars.
- Five target industries are represented with careful use-case wording.
- The site doesn't expose team size or advertise Keplor as a new/early-stage player.
- Unsupported user counts, uptime, task counts, funding, certifications, client logos, awards, and team biographies are removed or substantiated.
- No pricing tiers or free-trial promises are published unless verified.
- No fake APIs, docs, customer results, case studies, or metrics appear.

### Design

- Dark and spatial, not cluttered.
- Modern sans-serif type; no editorial serif direction.
- Official K logo stays proportionally correct and clearly visible.
- Deep purple `#36006D` is used as a brand anchor without turning everything into purple glow.
- One main spatial focal point; no repeated orb on every section.
- Good contrast, whitespace, hierarchy, and responsive text wrapping.

### Functionality

- Every visible link navigates to a valid route, section, or external destination.
- No empty `href`, inert CTA, fake button, dead footer link, or broken menu.
- Mobile menu opens/closes, closes on Escape if modal-like, and supports keyboard navigation.
- Contact flow has validation, clear error/success behavior, and a working real endpoint or an honestly described email-draft fallback.
- Existing real service/API functionality is preserved.

### Visual / technical QA

- Inspect at 375, 390, 768, 1024, 1440, and 1920px widths.
- Check for overflow, clipping, headline breaks, content collisions, focus visibility, and touch target size.
- Test load state, scroll transitions, back-scroll, hover/focus, mobile menu, and reduced-motion.
- Run available lint, type checks, tests, and production build.
- Use browser screenshots to review the actual output and fix visible defects.
- Report only checks actually performed; disclose access limitations.

---

## 11. Prototype and handoff contents

- `prototype-images/` contains generated visual boards. Use them to understand atmosphere and section composition only. Generated text, logos, customer names, and other claims are not authoritative.
- `brand-assets/keplor-mark.png` is the official K mark.
- `brand-assets/keplor-stamp.png` is the circular stamp; use it sparingly.
- `starter-prototype/keplor-dark-site/` is a previous standalone HTML/CSS/JS prototype for reference only. It is not a substitute for inspecting Keplor's real repository.

The live-site audit and company blueprint in this document supersede inaccurate copy inside generated images or older prototypes.

---

## 12. Implementation prompt for Codex

Copy/paste the following into Codex while its working directory is the actual Keplor repository:

> Read `KEPLOR_COMPANY_BLUEPRINT_AND_WEBSITE_BUILD_GUIDE.md` completely and inspect the full current repository before changing anything. Also inspect the current live site at https://keplor.tech/ and compare its routes and claims with the founder-provided company blueprint embedded in this guide.
>
> Rebuild the existing website in place as a minimal, spatial, dark, modern, confident AI/ML and software-solutions company website. Keep the real Keplor content and four service pillars: AI & Machine Learning, Custom Software Development, Cloud Solutions, and Research & Analytics. Represent Healthcare, Finance, Education, Retail & E-commerce, and Manufacturing as target industries with carefully qualified, illustrative use cases. Retain mission and vision without claiming Keplor already leads the global industry.
>
> Do not disclose team size or present the brand as an inexperienced newcomer. Equally, do not fake scale: remove or verify unsupported 10K+ users, 5M+ tasks, 99.9% uptime, 50+ team members, $15M funding, SOC 2, fictitious leadership biographies, client logos, or other claims. Do not display public prices, free plans, API/SDK claims, or product functionality unless they genuinely exist and can be verified.
>
> Use Keplor's official logo and purple `#36006D`. Use modern sans-serif typography and one restrained spatial hero visual inspired by Prisma Noir / Woven Light and selected ThreeUI references. Build a clear information hierarchy, generous negative space, purposeful transitions, four service pillars, industry use cases, a practical approach, About, and Contact. Preserve valid existing routes and business logic, make all visible links work, and provide a real contact path.
>
> Follow the section-by-section motion specification, reduced-motion support, responsive layout rules, and QA gates in the guide. Use a minimal compatible toolset and don't install every suggested library. Keep native scrolling in control.
>
> Run the application, inspect the rendered site in a browser, capture desktop/mobile screenshots, test navigation/forms/links, run available tests and production build, fix visible defects, and report actual results honestly. Do not stop at a plan or a superficial CSS reskin. Implement the changes directly in the project.

---

## 13. Source register

### Owner-provided sources

- Company blueprint supplied in the conversation on 20 October 2026: mission, vision, four service pillars, five target industries and audience definitions.
- Supplied brand assets: primary K mark and circular Keplor Tech stamp.

### Live website

- Homepage: https://keplor.tech/
- About: https://keplor.tech/about
- Legacy features: https://keplor.tech/features
- Legacy pricing: https://keplor.tech/pricing
- Legacy documentation: https://keplor.tech/documentation
- GitHub organization/link reported publicly by Keplor: https://github.com/keplor-io/

### Design references

- Prisma Noir: https://github.com/pulkitxm/claude-directory/tree/main/hero-sections/prisma-noir-h52
- Woven Light: https://github.com/pulkitxm/claude-directory/tree/main/hero-sections/woven-light-hero
- Claude Directory: https://github.com/pulkitxm/claude-directory
- ThreeUI Tideform: https://threeui.com/hero/tideform-page
- ThreeUI Anima: https://threeui.com/hero/anima
- ThreeUI Emerald Horizon: https://threeui.com/emerald-horizon
- ThreeUI Structure Flow: https://threeui.com/structure-flow--structure-flow
- ThreeUI Aural: https://threeui.com/aural-landing-page
- ThreeUI Umbra: https://threeui.com/landing-pages/umbra-landing-page

### Technical references

- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- MDN Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- MDN reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- Motion: https://motion.dev/docs
- Three.js: https://threejs.org/docs/
- React Three Fiber: https://r3f.docs.pmnd.rs/
- OpenAI brand guidelines (use as a general example of disciplined brand assets, not as a style to copy): https://openai.com/brand/

---

## 14. Competitor intelligence and public-source watch

Use `COMPETITOR_INTELLIGENCE_REPORT.md` as the current market-reference appendix. It records the public-source snapshot reviewed on 21 October 2026, separates direct/adjacent service competitors from design benchmarks, and maps the findings into concrete recommendations for Keplor's positioning and website.

The primary competitor set is Ainrion, DataToBiz, LeewayHertz, Markovate, SoluLab, Quytech, Turing, and Thoughtworks. The watch should track public changes in positioning, service categories, target industries, case studies, public pricing/engagement models, product launches, blog/news/hiring/partnership announcements, calls to action, and visible website UX or design patterns. Treat metrics, badges, customer references, and case-study outcomes as the competitor's own claims unless independently corroborated.

A weekly public-source competitor watch has been configured for Monday mornings (Asia/Kolkata). It should report only meaningful verified changes, link directly to sources, explain likely relevance to Keplor, and recommend a response or no action. If nothing material changed, it should not send a notification.

Use only publicly accessible material. Do not access private accounts, restricted systems, or personal information; do not bypass access controls or impersonate anyone. The purpose is legitimate market intelligence and better public-facing positioning—not intrusion.

Codex must not blindly copy competitor content, visual assets, service claims, customer logos, metrics, or certifications. Learn from structure and clarity, then implement an original Keplor experience grounded in the supplied company blueprint.

## Final principle

**Make Keplor look strong through clarity, craft, and control.** A restrained dark spatial design, excellent typography, credible service architecture, and polished but quiet motion will look more confident than a congested page filled with effects, feature claims, fake trust indicators, and invented scale.
