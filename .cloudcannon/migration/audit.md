# CloudCannon migration audit

## Astro version and dependencies

- SSG: Astro 7.2.9 (detected from `package.json`; the CloudCannon CLI detection command was unavailable because PowerShell blocks `npx.ps1`, and `npx.cmd` produced no result).
- Package manager: npm (`package-lock.json`). No Node engine or `.nvmrc` is present.
- Integrations: `@cloudcannon/editable-regions` 0.0.19 is already configured in `astro.config.mjs`.
- Rendering: static output with trailing slashes. There are no framework islands, MDX, Tailwind, or remark/rehype plugins.
- Astro 5 upgrade decision: not applicable; Astro 7 supports `editableRegions()`.

## Content collections and data

There is no `src/content.config.ts`, `src/content/config.ts`, or existing Astro content collection. No editable JSON/YAML data files were found. The six public content routes currently use standalone HTML files that a catch-all Astro route loads with `import.meta.glob()` and renders with `set:html`.

## Pages and routing

| Route | Current source | Data source | Target CMS pattern |
| --- | --- | --- | --- |
| `/` | `index.html` | hardcoded HTML | `pages/index.md`, page builder |
| `/about/` | `about/index.html` | hardcoded HTML | `pages/about.md`, page builder |
| `/training/` | `training/index.html` | hardcoded HTML | `pages/training.md`, page builder |
| `/booking/` | `booking/index.html` | hardcoded HTML + `assets/js/site.js` | `pages/booking.md`, page builder with fixed booking-form block |
| `/contact/` | `contact/index.html` | hardcoded HTML | `pages/contact.md`, page builder |
| `/media/` | `media/index.html` | hardcoded HTML | `pages/media.md`, page builder |
| 404 | `404.html` / `src/pages/404.astro` | hardcoded HTML | remain hardcoded |

`src/pages/[...slug].astro` has explicit static paths for the six routes and performs raw HTML injection. It will be replaced by a content-driven catch-all route. No pagination, taxonomy, redirects, server-rendered routes, or API routes are present.

## Mandatory page census

| Page file / source | Distinct content sections | Layout repeated on other pages? | Editor will add similar pages? | Recommended pattern |
| --- | --- | --- | --- | --- |
| `index.html` | hero, development lanes, coach, stats, formats, philosophy, performance, sources, availability | No | Yes | Page builder |
| `about/index.html` | hero, profile, timeline, performance, Ironmen, CTA | No | Yes | Page builder |
| `training/index.html` | hero, lanes, session questions, formats, comparison, sports/availability | No | Yes | Page builder |
| `booking/index.html` | hero, booking form, confirmed details | No | Possibly | Page builder with protected form block |
| `contact/index.html` | hero, contact methods, availability, CTA | No | Yes | Page builder |
| `media/index.html` | hero, WMU links, Ironmen links, rights policy | No | Yes | Page builder |
| `404.html` | error message and two links | No | No | Hardcoded Astro page |

## Components and visual editing

- Current hierarchy: the raw HTML documents each include their own header and footer; no reusable Astro layout or content components exist.
- `src/cloudcannon/registerComponents.ts` is an empty placeholder; no components are registered yet.
- The raw HTML wrapper uses `set:html` for head and body and `data-editable="source"` on the entire body. This is not appropriate for these multi-section pages: source editing cannot preserve the current document-level template and does not offer structured add/remove/reorder controls.
- Images use plain `<img>` URLs from `/assets/images`, resolving to public static assets. Uploads should remain under `public/assets/images`.
- There are no client directives or presentational Astro wrapper components.
- There are no registered components, so the frontmatter co-location census is not yet applicable; the new components will receive one nested frontmatter key each in Phase 3/4.

## Primitive-vs-computed census

The current route has no frontmatter interpolations. The new catch-all route will pass each block's complete object to a registered component rather than interpolate primitive or computed fields directly. This avoids computed route-level interpolation.

## Build pipeline

- Build: `astro build` (`npm.cmd run build`).
- Supporting scripts: `check` runs `node scripts/check.mjs`; sitemap generation is an explicit post-launch command.
- `astro.config.mjs`: static output, trailing slash enabled, editable-regions integration.
- No build-time environment variables or generation steps are required.

## Flags and special patterns

- Existing raw HTML contains inline `style` attributes; page-builder conversion will replace them with component CSS classes where required.
- `set:html` is used only by the temporary raw-document wrapper and will be removed from content routes.
- `assets/js/site.js` handles the booking form and navigation menu. It will remain a static script and the booking component must retain its required `data-*` hooks.
- No scroll-reveal classes, hidden-on-scroll CSS, `IntersectionObserver`, MDX, or inline-HTML-in-Markdown patterns were found.
- Existing `cloudcannon.config.yml` is only a minimal upload/editables configuration and has no collection definitions.

## Sectioning recommendation

- Total content pages: 6 (threshold >30: ok)
- Hardcoded-to-content conversions: 6 (threshold >15: ok)
- Distinct collections: 1 proposed `pages` collection (threshold >5: ok)
- Result: 0/3 thresholds tripped. A single-pass migration is appropriate.
