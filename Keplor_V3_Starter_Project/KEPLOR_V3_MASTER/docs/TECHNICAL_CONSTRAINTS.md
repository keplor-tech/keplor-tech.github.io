# Technical Constraints

- Next.js 14.2.x App Router, React 18.2, TypeScript 5.x, Tailwind CSS 3.x.
- Static export required. Check generated `out/` after build.
- Keep components typed and reusable.
- Avoid adding dependencies without a clear benefit and documented reason.
- Keep canvas visuals client-only and cleanup animation frames, observers and event listeners.
- No server actions or assumed runtime API routes in static export.
- Forms are not functional without a configured external provider/backend.
