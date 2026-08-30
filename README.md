# NextPhaze Athletic Training

This is an **Astro website**. Astro is the single application runtime and source of generated HTML; the repository does not maintain a separate hand-authored static site.

## Primary stack

- Astro content collections and static output
- CloudCannon page editing and visual editing
- Shared semantic Astro layout/components
- Content-driven Markdown pages
- Minimal framework-free browser JavaScript
- External booking/payment integration planned

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
```

- `npm run dev` starts Astro's development server.
- `npm run build` generates the production site in `dist/`.
- `npm run preview` serves the generated Astro build.
- `npm run check` builds the site, then validates routes, metadata, landmarks, H1 usage, links, image attributes, required assets, prohibited claims, and removal of the legacy static architecture.
- `npm run sitemap -- https://confirmed-production-domain.example` generates a sitemap after the real production domain is confirmed.

## Architecture

- `src/pages/[...slug].astro` maps the page content collection to `/`, `/about/`, `/training/`, `/booking/`, `/media/`, and `/contact/`.
- `src/pages/404.astro` owns the generated not-found page.
- `src/layouts/BaseLayout.astro` owns document metadata, global assets, header/footer, landmarks, and shared scripts.
- `src/content/pages/*.md` contains CloudCannon-editable page metadata and visual content blocks.
- `src/components/` contains shared rendering, header, and footer components.
- `src/cloudcannon/` registers editable Astro components.
- `src/data/site.json` is the editable global brand, navigation, and contact source.
- `public/assets/` contains the only deployable CSS, JavaScript, and responsive image copies.
- `Project_Source/` preserves supplied source documents and original images for provenance.
- `docs/` preserves requirements, research, decisions, handoff notes, and QA evidence.

Do not add root-level route HTML or a second root `assets/` tree. Generated HTML belongs only in ignored `dist/`.

## Source of truth

**PRIMARY BUSINESS REQUIREMENTS:**

`Project_Source/NEWNextPhaze_Athletic_Training_Website_Content_Updated.docx`

**SECONDARY RESEARCH / HISTORICAL CONTEXT:**

`Project_Source/NextPhaze_Athletic_Training_Website_Content_Research_Brief.docx`

Verified external sources may support Carrington Thompson's career information. Explicit client requirements in the updated document take priority, and unresolved client information must never be guessed.

## Editing in CloudCannon

CloudCannon reads page entries from `src/content/pages`, global site data from `src/data/site.json`, and uploads from `public/assets/images`. Page content remains a visual-section page builder to preserve the existing editing workflow. Shared header/footer values should be edited through site data rather than duplicated into pages.

## Booking integration boundary

The current booking page is an honest request-preparation workflow. It does not reserve a live slot, process cards, prevent double bookings, sync Google Calendar, send reminders, or provide Carrington's dashboard. See `docs/handoff/booking-integration.md` before connecting a third-party scheduling/payment platform.

## Before public launch

1. Resolve blockers in `docs/research/missing-input-register.md` and `docs/qa/qa-report.md`.
2. Select and configure the external booking/payment provider.
3. Confirm media publication rights and follow `docs/handoff/media-replacement.md`.
4. Confirm the production domain, generate the sitemap, and add its absolute URL to `public/robots.txt`.
5. Complete browser accessibility, performance, and device QA.
