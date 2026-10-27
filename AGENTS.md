# wanderlust

Next.js 16 App Router project (`create-next-app`-style, `src/` layout). Frontend-only for now: no API routes, database, or tests exist yet.

## Commands

- Package manager is **npm** (package-lock.json, CI-free personal project).
- `npm run dev` / `npm run build` — Turbopack is always used; don't add `--turbopack` or expect webpack config to apply.
- `npm run lint` — bare `eslint` (flat config in `eslint.config.mjs`), run at repo root, no dir arg.
- `npx tsc --noEmit` — there is no typecheck script; `{tsconfig,jsconfig,package}.json` scripts don't cover it.
- `.next/` is generated (build artifacts + route types fed into tsconfig's `include`); don't reference it as source.

## Toolchain quirks that differ from defaults

- **`cacheComponents: true`** in `next.config.ts`: uncached data fetching must live under the cache model — use the `use cache` directive / `<Suspense>` boundaries, not `baseline` caching assumptions. See bundled guides: `node_modules/next/dist/docs/01-app/02-guides/` (e.g. `migrating-to-cache-components.md`).
- **React Compiler enabled** (`reactCompiler: true`): do not hand-write `useMemo`/`useCallback`/`memo`; the compiler handles memoization.
- **Tailwind v4, CSS-first config**: theme lives in `src/app/globals.css` via `@tailwindcss/turbopack`. There is no `tailwind.config.*` file — add design tokens/exports in `globals.css`, not a JS config.
- **shadcn/ui is the `base-nova` style** (`components.json`): generated components in `src/components/ui/` use **Base UI (`@base-ui/react`) primitives, not Radix**. Regenerate with `npx shadcn add <component>` rather than hand-porting Radix examples.
- Import alias `@/*` → `./src/*`; use `cn` from `@/lib/utils`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
