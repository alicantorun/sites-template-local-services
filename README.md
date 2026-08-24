# Local Services template

A starter for a business people call or visit: what you do, where you work, when you are open,
and how to reach you. Used by the alicantorun.com website builder.

- **Stack:** Next.js App Router, React 19, Tailwind v4. Identical to the other starters so the
  editor sandbox, the baked OCI image and the publish path handle all of them the same way.
- **Content contract:** every business fact lives in `lib/content.ts`. A content change is a
  one-line edit there; the page and the SEO metadata both read from it.
- **Sections:** hero, services, service areas, opening hours, contact. The enquiry path is the
  phone and email until the portal's lead-capture endpoint ships.
