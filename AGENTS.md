# TristanTrommer

The personal site at tristantrommer.com: one Next.js 16 page (plus the legal pages) on Cloudflare Workers via OpenNext, with Sentry, a Turnstile-protected contact form that sends through the Worker's `SEND_EMAIL` binding, the Medium feed as the blog and Zaraz for consent.

`README.md` is the GitHub profile page of this account, not documentation: keep repository notes out of it.

## Validation

Run before you finish (CI runs the same four):

- `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`.
- `npm run cf:build` after a change to config, routing or dependencies. CI builds only when it deploys, and `next build` type-checks through TypeScript 6 (`npm run typecheck:ts6` is the quick parity check).

Never run as a check: `cf:deploy*` or `wrangler deploy` (they ship), `wrangler secret put`, and `npm run format` (it rewrites the whole repository; format what you changed with `npx prettier --write <files>`).

## CI and deploys

- GitHub Actions (`.github/workflows/web.yml`) is the only deploy path: `preview` → preview.tristantrommer.com, `main` → tristantrommer.com, promoted by fast-forwarding `main` to `preview`. A `main` run skips the checks for a commit that already passed on `preview`, so a promotion must be a pure fast-forward. Pull requests into `preview` run the checks and never deploy.
- The secrets and variables CI needs are listed at the top of `web.yml`. `EMAIL_DOMAIN` and `TURNSTILE_SECRET` are Worker secrets in Cloudflare. `NEXT_PUBLIC_*` values are inlined at build time, so they come from the workflow, not from `wrangler.jsonc`.
- Dependabot opens weekly grouped PRs against `preview` after a 5-day cooldown. Update by hand with the same cooldown: `npm install --min-release-age=5 <pkg>@<range>`.

## Tooling traps (do not undo)

- `typescript` is the TS 6 alias (`@typescript/typescript6`) that `next build` uses; `tsc` is TS 7 (`@typescript/native`). Keep both.
- `eslint` stays at `^9`: the react, import and jsx-a11y plugins of `eslint-config-next` don't support 10. `next` and `eslint-config-next` are pinned exactly and move together.
- `next.config.ts` aliases `@sentry/nextjs` to its Workers build on the server; Next would otherwise bundle the Node SDK into the Worker.
- `helper/sentry-options.ts` is shared by browser, server and edge. Its `dataCollection` keeps Sentry 11 from sending request bodies (the contact form's name, email and message), cookies and user info; don't drop it.
- `typecheck` runs `next typegen` first: `next-env.d.ts` is gitignored and declares the image imports.

## Code rules

- A section reports itself as active by the name of its header link (`useActiveHash('Blog')`), and the link points to the section's `id`. `tests/components/header.test.tsx` holds the three together.
- What a visitor types reaches the contact emails as text only (`escapeHtml` in `actions/email.ts`); one of them goes to an address the visitor chose.

## Tests

- Vitest with jsdom and Testing Library: logic in `tests/unit`, rendered components in `tests/components`, fixtures in `tests/fixtures`.
- jsdom has no IntersectionObserver: `tests/setup.ts` installs a stub, and `intersect(element)` from `tests/helpers/intersection-observer.ts` scrolls a section into view.
- Mock what leaves the page: `fetch` (`vi.stubGlobal`), the server actions, `@opennextjs/cloudflare` and `react-turnstile`. Environment variables go through `vi.stubEnv`; the config restores both after each test.
