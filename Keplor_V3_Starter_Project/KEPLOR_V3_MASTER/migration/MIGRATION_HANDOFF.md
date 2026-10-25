# Keplor V3 Migration Handoff

## Goal
Replace the old local project with this clean V3 project after reviewing the ZIP. The package is designed as a fresh baseline, not a migration of old code.

## Safe migration sequence
1. Keep a backup of the old project until the new site is reviewed in a browser.
2. Extract `KEPLOR_V3_MASTER` to a new directory.
3. Install dependencies and run the development server.
4. Review all eight routes, responsive states, arc rendering, and links.
5. Add verified official logo assets to `public/brand/` and update the wordmark component.
6. Compare against the original approved reference if still available locally; adjust only where the specification and original reference require.
7. Run typecheck, lint and build.
8. Only after acceptance, replace the working directory. Do not deploy automatically.

## Git
Initialize a new branch or repository only if desired. Inspect status and diff before commits. Never force-push or overwrite remote history as part of this handoff.
