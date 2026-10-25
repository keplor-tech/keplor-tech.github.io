# Keplor.tech — V3 Design + Live Website Content & Functionality Migration Plan

**Purpose:** Final implementation plan for rebuilding Keplor.tech with V3 as the visual source of truth while migrating the real website's content, routes, and working interactions.

**Audit snapshot:** Public pages reviewed on 24 October 2026. Recheck the live website and local repository before implementation because pages and code may change.

## 1. Final decision: use V3 as the single visual source of truth

Use `design/prototype/reference-aligned-full-page-v3.png` and `design/prototype/reference-aligned-hero-v3.png` as the primary mockups. Use `design/KEPLOR_DESIGN_DIRECTION_V3.md` for the full visual specification and `design/canva-references/` for direct comparison with the founder-supplied Canva inspirations.

**V3 supersedes all earlier Keplor mockup versions, including V2.** Do not average, blend, or alternate between versions. Keep the content migration plan below, but implement its visual design strictly from V3.

### Visual hierarchy

- Near-black canvas (`#050507`) with large areas of clean negative space.
- Large, soft-focus colour fields bleeding in from edges: blue, cyan, indigo, violet, with occasional low-opacity magenta/warm accents when justified by the original Canva examples.
- Colour behaves like diffused light or defocused photography. The gradient field has no physical object edge and is the primary visual artwork.
- Oversized, modern sans-serif typography (use an installed family or Geist/Inter/Manrope equivalent); clear type hierarchy and disciplined line breaks.
- Minimal navigation, thin dividers, quiet labels, open columns/rows, consistent section widths, and generous vertical rhythm.
- No repetitive bento-card layout. Service and industry information should use open rows, simple lists, or a small number of purposeful groups.
- Smooth, restrained, reversible scroll-linked motion. Movement should support the content, never compete with it.
- Preserve the official Keplor K logo and brand-purple anchor (`#36006D`) without painting every surface purple.

### Strictly avoid

Literal planets, moons, hard-edged spheres/orbs, orbital rings, starfields, point-cloud globes, particle constellations, mountains/space landscapes, 3D sculptures, floating dashboards, dense technical grids, excessive glass cards, crowded bento grids, serif-led editorial layouts, and sci-fi UI overlays. Do not add an elaborate WebGL object merely to satisfy the phrase “3D website.” The approved V3 concept intentionally uses diffuse light instead of a literal object.

### Motion character

The background light drifts slowly and softly, with small scroll-linked changes to position, scale, or hue. Text and sections reveal with modest opacity and vertical movement. The page never pins or hijacks scrolling. See Section 7 and the V3 design guide for motion ranges and reduced-motion behavior.

## 2. What the live website currently contains

Public page content observed in the audit:

- Homepage: https://keplor.tech/
- Features: https://keplor.tech/features
- Pricing: https://keplor.tech/pricing
- About: https://keplor.tech/about
- Blog: https://keplor.tech/blog
- Careers: https://keplor.tech/careers
- Documentation: https://keplor.tech/documentation
- Contact: https://keplor.tech/contact

The current homepage describes Keplor as an AI SaaS platform for creators, startups, and digital teams. It lists intelligent agents, cloud-native architecture, enterprise security, analytics, collaboration, developer tools, and data management. It also shows free-trial messaging and metrics such as 10K+ users, 5M+ tasks, and 99.9% uptime.

The Features page contains AI/ML, infrastructure, security/compliance, analytics, developer experience, and collaboration sections. Pricing publishes a free tier, a $49/month tier, and an Enterprise tier. About includes company-history/funding claims, a 50+ team claim, and named leadership bios. Blog contains AI articles, product-update posts, developer guides, and a customer story claiming 70% faster processing. Careers lists multiple roles, benefits, team size, and global hiring claims. Documentation describes SDK installs, API endpoints, model management, webhooks, and language SDKs. Contact presents a form, contact channels, response-time promises, office addresses, and support availability.

These are **observed public-page contents, not independently verified truth**. Do not assume that visible links, forms, SDKs, claims, or features actually work; inspect the repository and test them.

## 3. Source-of-truth rules

Apply these rules in order:

1. The founder-provided company blueprint is authoritative for Keplor's service scope, mission, vision, target industries, and target audiences.
2. The local repository is authoritative for existing code, actual integrations, backend behavior, data models, routing, and deployed functionality.
3. The live website is a content and route inventory. Retain content that is accurate and compatible with the company blueprint; do not copy claims simply because they are currently public.
4. V3 controls the visual design and has superseded all prior visual concepts. The original Canva inspiration images in `design/canva-references/` are the primary style evidence.
5. Public competitors/references inform usability and presentation, but never provide claims to copy.

If information conflicts or cannot be verified, do not invent a resolution. Keep a concise TODO in the final report and use safe, neutral copy in the public UI.

## 4. Company content to preserve and integrate

### Company positioning

Keplor is an AI/ML and Software Solutions company that helps businesses use AI, custom software, cloud technologies, and data/analytics to innovate, improve efficiency, and grow. Keep the tone confident and capable without claiming unearned scale or traction.

Use the supplied company blueprint's mission and vision as the canonical statements unless the founder-approved source file in the repository says otherwise.

### Core services

1. **AI & Machine Learning Solutions** — predictive analytics, NLP, computer vision, recommendation systems, automation, AI-driven business intelligence.
2. **Custom Software Development** — tailored business software, web/mobile applications, enterprise systems.
3. **Cloud Solutions** — cloud infrastructure and app development, scalable cloud, hybrid and multi-cloud strategies.
4. **Research & Analytics** — data science, advanced analytics, visualisation/reporting, real-time and batch processing, research-driven AI models.

Keep meaningful overlapping live-site service/feature copy but reorganize it into these four pillars. Do not silently remove technical details that are accurate and useful.

### Target industries

Healthcare, Finance, Education, Retail & E-Commerce, Manufacturing. Describe the example use cases supplied in the company blueprint. Avoid wording that implies a deployed or certified clinical/financial product unless verified.

### Target audiences

Enterprises, small and medium businesses, healthcare providers, retailers, and government/NGO organizations.

### Existing live-site product language

Copy or adapt compatible information about AI-powered workflows, intelligent agents, analytics, automation, custom integrations, cloud architecture, developer experience, and data management only where these describe actual offerings or capabilities. If a claim cannot be confirmed in source code or by the founder, rephrase as a service capability or remove it rather than representing it as a live product feature.

## 5. Route-by-route migration map

Maintain backwards compatibility for current public URLs and verify all navigation targets after the redesign.

### `/` — Home

Use V3's spacious hero and diffuse gradient field. Preserve the strongest core message from the live site while shifting the proposition from "AI SaaS for everyone" to business-oriented AI/ML and software solutions consistent with the company blueprint.

Recommended content order:
1. Minimal brand navigation and direct contact CTA.
2. Clear hero statement about intelligent systems/software for business, concise supporting paragraph, primary project-discussion CTA, secondary services link.
3. The four core service pillars in open columns/rows.
4. Five target industries as an understated index/list.
5. Four-step approach: Understand, Design, Build, Improve (label each stage consistently).
6. Mission/vision or short About preview.
7. Contact CTA and minimal footer.

Preserve real email signup only if an actual backend/list integration exists and is intended to continue. Otherwise remove it or replace it with an honest project-contact CTA; do not fake a signup success state.

### `/features` — keep URL

Preserve the route. Reorganize verified content into the four core service families. If it genuinely is a separate product-feature page backed by working features, keep the product feature details but label them accurately and make the relationship to Keplor's service offerings clear. Do not just duplicate the homepage at length.

Optional `/services` alias may redirect or render the same service page, but must not create duplicate/conflicting navigation.

### `/pricing` — preserve route, not unsupported prices

The founder has specified that Keplor should not publish public pricing at this stage. Remove the $49 plan, free-trial promises, API limits, and billing claims unless the founder confirms they are real and wants them public.

Keep `/pricing` working by redirecting to `/contact?topic=pricing` or rendering a short "Discuss your project" page with a CTA to Contact. Do not leave a dead link, fake pricing table, or blank route.

### `/about` — keep route

Retain compatible mission, vision, values, and company philosophy. Use the supplied company blueprint for canonical mission/vision. Remove or verify team member names/bios/photos, founding timeline, funding, certifications, global expansion, team-size, and active-user claims. Do not mention team size just to explain the company's stage. A confident, capabilities-led About page is preferable.

### `/blog` — keep route if content is useful

Inventory the actual article store/content files and test search/category behavior. Keep genuine technical articles and article-reader behavior. Remove fabricated author identities, fake product-version news, fake customer stories, made-up performance outcomes, and category counts that are not backed by real data. If only placeholders exist, replace the listing with a small set of genuinely authored/approved evergreen insights or keep the route minimal until real content is available. Do not create article links that do nothing.

### `/careers` — keep route, but truthful

Inspect whether actual positions and application submission exist. Remove fake open positions, employee statistics, location claims, perks, benefits, and culture claims that are not approved/true. If no roles are open, retain the route with a concise statement that there are no listed openings at this time and provide an open-interest contact path only if the company wants applications. Do not invent a large team.

### `/documentation` and `/api` — inspect before keeping product claims

The live docs currently display SDK install commands, API references, webhooks, and model management. Verify actual SDK packages, API endpoints, auth, examples, and links in the repository and accessible service. If these are real public products, preserve working docs search/navigation and code-copy behavior. If they're placeholders or fictional, do not present them as live APIs. Keep old routes from breaking: redirect to a truthful technical-capabilities/engineering page or clearly mark docs as planned only if the founder approves that message.

### `/contact` — preserve and make it truly work

Keep the core form journey and fields where useful: name, email, company/organization, service interest, industry, and project brief. Verify submission endpoint, validation, success/error feedback, spam handling, and privacy handling. If there is no backend integration, do not show a false "message sent" state; use the existing genuine mail/form provider if configured or a clear fallback that prepares an email draft.

Verify all public email, phone, business hours, support SLAs, chat widgets, docs domains, office addresses, status/community links, and social links before retaining them. Do not invent contact channels or guarantee response times.

### Other links / legal / footer

Inventory every route and external link in the local repository, including Privacy, Terms, status, community, social, API, and documentation. Preserve working destinations. If a legal page exists, keep it and update its content only with approved information. Never link to `#` or an empty click handler just to make the design look complete.

## 6. Data and functionality migration method

Before coding:

- Inspect repository branches and `git status`; do not discard user changes.
- Identify all routes, nav/footer links, CTA actions, form handlers, analytics, API calls, auth, search/filter state, modal behavior, local storage, and external services.
- Trace visible functionality to its implementation. Record what is real, what is static, and what is broken.
- Build a migration table: existing behavior → keep/change/remove → source file → test method.

During implementation:

- Separate content/data from visual components where the existing architecture makes that practical.
- Preserve route URLs and query semantics.
- Preserve working functionality unless explicitly removed by this plan; when a product claim is invalid, replace the claim without breaking navigation.
- Use semantic HTML, keyboard accessibility, visible focus, proper labels, and truthful form feedback.
- Add redirects or helpful replacement pages for routes that can no longer legitimately serve the old content.
- Avoid introducing unnecessary libraries. The diffuse gradient fields should generally use CSS/SVG/light canvas rather than a heavyweight 3D engine unless a measurable design benefit requires it.

## 7. Motion and interaction specification

Motion is secondary to content legibility and whitespace.

- Initial page load: modest opacity + 12–20px rise, around 600–900ms, stagger 60–90ms; avoid letters flying in individually.
- Background light: continuous, slow drift (roughly 18–35s cycles), low amplitude and no visible hard object edges.
- On scroll: link light-field position/scale/opacity gently to scroll progress; do not pin or hijack the page.
- Section reveal: IntersectionObserver or an existing motion library; opacity 0→1 and translateY 16–24px→0, around 500–800ms.
- Services: small group reveal with restrained stagger, not one animated card per item.
- Process line: simple left-to-right line draw; stage markers illuminate when active.
- Hover: slight color shift, underline or arrow movement; avoid excessive glow and 3D tilt.
- Contact: let the gradient settle and reduce movement as the user reaches the form.
- Back-scroll must behave smoothly; no content should stay accidentally hidden.
- Respect `prefers-reduced-motion`. Keep all content accessible when motion is disabled.

## 8. Visual acceptance criteria

At 1440px and 1920px desktop widths:

- Hero headline dominates the left/content area without awkward wrapping.
- Background light is soft, broad, atmospheric, and objectless.
- The page has obvious whitespace and no card clutter.
- Service and industry content is scannable and not crowded.
- The V3 overall content rhythm, alignment, whitespace, and objectless light-field treatment remain recognizable.

At 390px mobile width:

- Typography remains readable and wraps naturally.
- Navigation becomes accessible and usable.
- The ambient background does not overpower content or harm contrast.
- Sections stack cleanly without horizontal overflow.
- Heavy motion is reduced and contact remains easy to reach.

## 9. Verification checklist

After implementation:

1. Run the app and production build.
2. Inspect screenshots at 1440px, 1920px, and 390px.
3. Test every internal route and footer/nav link.
4. Test the contact form's success and error paths.
5. Test old URLs such as `/pricing`, `/features`, `/documentation`, `/api`, `/blog`, `/careers`, and `/about`.
6. Test browser back/forward, query-string contact links, keyboard navigation, and reduced-motion mode.
7. Check for console errors, broken assets, missing fonts, layout shift, and horizontal overflow.
8. Report exactly which functionality was retained, removed, rebuilt, and actually tested.

Do not claim a feature or test succeeded unless it was verified in the running project.

## 10. Public sources reviewed

- Homepage: https://keplor.tech/
- Features: https://keplor.tech/features
- Pricing: https://keplor.tech/pricing
- About: https://keplor.tech/about
- Blog: https://keplor.tech/blog
- Careers: https://keplor.tech/careers
- Documentation: https://keplor.tech/documentation
- Contact: https://keplor.tech/contact
- Primary visual guide: `design/KEPLOR_DESIGN_DIRECTION_V3.md`
- V3 mockups: `design/prototype/reference-aligned-full-page-v3.png` and `reference-aligned-hero-v3.png`
- Original Canva reference images: `design/canva-references/`
- Standalone prototype: `design/prototype/index.html` (visual reference only; do not replace the current app with it)
- Company blueprint: `company/KEPLOR_COMPANY_BLUEPRINT_AND_WEBSITE_BUILD_GUIDE.md`
- Competitor intelligence: `research/COMPETITOR_INTELLIGENCE_REPORT.md`
- Stitch/Lium review: `research/REFERENCE_REVIEW_STITCH_LIUM.md`

This document is the migration plan, not permission to invent claims. Where real implementation facts are unknown, inspect source code and ask the founder only if a decision cannot be made safely.
