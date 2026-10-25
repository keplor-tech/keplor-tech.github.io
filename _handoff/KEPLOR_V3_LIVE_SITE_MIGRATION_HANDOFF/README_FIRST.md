# Keplor V3 + Live Site Migration Handoff

## Final decision

**Use V3 as the only visual source of truth.** This package updates the previous V2 live-site migration handoff. The company/content migration logic remains, but the final layout, styling, and motion must follow `design/KEPLOR_DESIGN_DIRECTION_V3.md` and the original Canva references. Do not combine or blend versions; V2 is superseded.

## Start here

1. Read `CODEX_PROMPT.txt`.
2. Read `KEPLOR_V3_LIVE_SITE_MIGRATION_PLAN.md` in full.
3. Review `design/KEPLOR_DESIGN_DIRECTION_V3.md` and open all `design/canva-references/` images.
4. Review `design/prototype/reference-aligned-full-page-v3.png` and `reference-aligned-hero-v3.png`.
5. Read `company/KEPLOR_COMPANY_BLUEPRINT_AND_WEBSITE_BUILD_GUIDE.md` and `research/COMPETITOR_INTELLIGENCE_REPORT.md`.
6. Open the actual Keplor repository in Codex. Give it access to this package and run `CODEX_PROMPT.txt`.

## Package contents

- `CODEX_PROMPT.txt` — exact instruction for the coding agent.
- `KEPLOR_V3_LIVE_SITE_MIGRATION_PLAN.md` — route-by-route inventory, claim safeguards, migration and QA requirements.
- `design/` — V3 design rules, prototype source, screenshots, SVGs, original Canva reference images, prototype index.
- `brand/` — official primary K logo and circular stamp.
- `company/` — owner-provided company blueprint/content guide.
- `research/` — competitor intelligence and Stitch/Lium design/content-structure review.

## Important boundaries

The HTML prototype is a design reference, not a replacement application. The package does not edit or deploy the public site. Codex must work in the user's real repository, preserve valid code and user changes, validate every route and integration, and be honest about tests. Public claims in the current live site are observed copy, not proof that those claims are true. Verify or remove unsupported claims. No public pricing unless the founder approves it.
