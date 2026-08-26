# Local Services template

A starter for a business people call or visit: what you do, where you work, when you are open,
and how to reach you. Used by the alicantorun.com website builder.

**Stack:** Next.js 16 App Router, React 19, Tailwind v4, React Query, Zod. Identical to the
other starters (`coach-landing`, `portfolio`) so the editor sandbox, the baked OCI image and the
publish path handle all three the same way.

## Running it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm verify     # lint + typecheck + production build, the same three the sandbox runs
```

No environment variables are required. `lib/consts.ts` reads `NEXT_PUBLIC_SITE_URL` when the
platform sets it on a deployment and falls back to localhost, and `middleware.ts` no-ops when the
Supabase variables are absent — so a preview with no database still serves every route.

## The content contract

Every business fact lives in **`lib/content.ts`**. Changing the phone number, a price or an
opening hour is a one-line edit there; the page, the nav and the SEO metadata all read from it.

The SHAPE of that file is not this template's to choose. It is the `Site` interface in
**`lib/site-schema.ts`**, which is byte-identical in all three templates, and `content.ts` is
annotated with it — so a renamed field or a dropped section fails `pnpm typecheck` instead of
rendering blank. Sections marked optional on `Site` may be absent, and every component here
handles the absence by rendering nothing rather than an empty heading.

Two things worth knowing before editing it:

- **`business.phoneHref` must stay dialable** — digits and a leading `+` only, no spaces. It is
  what the `tel:` links are built from. The number is stated once, in a single `PHONE_HREF`
  const, because the hero's call button used to carry a second hardcoded copy of it.
- **Sections rendered:** hero, services, service areas, opening hours, contact. There is no
  `about` or `work` block in this template; those fields simply stay absent.

## The contact form

The phone number is the primary action on this site and stays first and biggest — a trades
customer phones. The form in `components/contact-form.tsx` is the out-of-hours path, not a
replacement, and `components/contact.tsx` lays the section out that way on purpose.

How it works:

- The form posts through `useContact()` (`lib/hooks/use-contact.ts`) → `fetchApi` → **`POST
/api/contact`**. Never a raw `fetch` in a component.
- The route (`app/api/contact/route.ts`) runs rate-limit → validate → deliver → envelope, each
  step early-returning. Input bounds are in `lib/validation.ts`.
- A hidden `company` field is a honeypot. A bot fills it; the route answers exactly as if the
  send succeeded, because telling a bot it was caught only teaches it to stop filling the field.
  Renaming that field on either side disables the check silently.
- Three render states, kept apart: a failure shows the message in a `role="alert"` and leaves the
  typed text in place, a pending submit disables the button, and a success replaces the form.

**By default nothing is sent anywhere.** `lib/services/contact.ts` LOGS the submission and says
so, rather than pretending — a form that appears to send and does not is worse than no form. Two
ways to make it real, in that file's own order of preference: this site's own database (a table
with row-level security on and an INSERT-only policy for `anon`), or a mailer whose key is read
through `requireEnv()` so a missing one fails closed.

## Brand tokens

`app/globals.css` holds three tokens — `--color-brand`, `--color-brand-dark`, `--color-brand-tint`.
Changing those three re-skins the site. No component hardcodes a palette colour for a branded
surface; a tint comes from an opacity modifier (`border-brand/20`) rather than a fourth token.

## Layout of the repo

| Path                       | What it is                                                                   |
| -------------------------- | ---------------------------------------------------------------------------- |
| `lib/content.ts`           | every business fact, and the only file a content change touches              |
| `lib/site-schema.ts`       | the shared `Site` contract — identical in every template                     |
| `lib/validation.ts`        | Zod schemas + `validateRequest`; every public input is capped here           |
| `lib/api/`                 | the `{ success, message, data }` envelope and the one client-side `fetchApi` |
| `lib/services/`            | where a submission actually goes (`server-only`)                             |
| `lib/hooks/`               | React Query hooks and the query keys they use                                |
| `app/api/contact/route.ts` | the site's one write path                                                    |
| `components/`              | one file per section, each reading from `lib/content.ts`                     |
