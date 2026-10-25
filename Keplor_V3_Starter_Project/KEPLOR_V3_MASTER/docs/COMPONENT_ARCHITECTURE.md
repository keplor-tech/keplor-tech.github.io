# Component Architecture

- `SiteHeader`: shared desktop/mobile navigation.
- `SiteFooter`: complete sitemap and closing brand signature.
- `PredictiveArc`: isolated client-side canvas hero visual.
- `Reveal`: optional restrained reveal primitive; no hidden content when JavaScript is disabled.
- `SectionLabel`: small eyebrow / section index.
- `ActionLink`: consistent link CTA.
- Page content should compose shared primitives instead of cloning the global design system.
