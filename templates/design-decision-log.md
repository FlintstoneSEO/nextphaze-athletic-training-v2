# Design decision log

## 2026-08-30 — Initial static multi-page architecture (superseded)

- Superseded decision: use dependency-free HTML, CSS, and minimal JavaScript.
- Context: no existing application or framework exists; the site is content-led and the booking backend is undecided.
- Rationale: lowest runtime/payload risk, broad hosting compatibility, transparent integration boundary, and easy maintenance.
- Consequence: repeated shell markup exists across pages; shared data and behavior are centralized where practical, but a future CMS/framework migration may componentize it further.

## 2026-08-30 — Championship Editorial selected

- Decision: implement Championship Editorial with a restrained progression-line motif.
- Status: agent-selected recommendation, not client-approved.
- Rationale: strongest use of the supplied authentic imagery, best balance of parent readability and athlete energy, clearest booking path, and least risk of implying unverified testing capability.
- Rejected alternatives: Training Lab as the primary system could imply measurement/science infrastructure; Journey as the primary homepage system overweights biography and lacks media for every stage.

## 2026-08-30 — Six-route information architecture

- Decision: implement Home, About, Training, Booking, Media, and Contact.
- Status: approved for implementation under the prompt's autonomous-run clause, not client-approved.
- Rationale: separates user tasks, prevents a résumé-heavy homepage, and creates clear internal conversion paths without thin sport/city doorway pages.

## 2026-08-30 — Honest booking boundary

- Decision: provide a complete, validated request-preparation UI and email/phone handoff, but no card fields or confirmation claim.
- Rationale: the source requires scheduling/payment capabilities, but no provider, backend, legal copy, or credentials exist.
- Deferred decision: select a booking/payment platform after location, policies, capacity, durations, and processor are confirmed.

## 2026-08-30 — Existing media treatment

- Decision: use the three project-supplied files and link to third-party reporting without hotlinking or republishing its media.
- Assumption: project placement authorizes design use; ownership/production rights still require client confirmation before launch.
- Rationale: respects the brief's rights rules while preserving authentic visual identity.

## 2026-08-30 — Location-neutral SEO

- Decision: omit LocalBusiness schema, address, areaServed, local titles, and city landing pages.
- Rationale: location is explicitly unverified. Organization/Person schema is limited to visible, verified facts.

## 2026-08-30 — Responsive hero and editorial image scale

- Decision: retain the split hero above 68rem and use the authentic action image as a full-bleed, shaded background at tablet and mobile widths.
- Rationale: the split composition becomes too constrained at intermediate widths, while the overlay treatment preserves the first-viewport message and accessible text contrast without hiding the client-supplied image.
- Decision: enlarge two-column editorial imagery to approximately half of the content width and separate career-timeline labels from the phase line with dedicated spacing.
- Rationale: the supplied photography should remain a visual anchor, and timeline labels must not collide with markers at any supported viewport.

## 2026-08-30 — Astro as the single application architecture

- Decision: retain the content-driven Astro implementation and remove the independently maintained root HTML routes and duplicate root assets.
- Context: the repository had both Astro source and a complete static HTML copy, so content, metadata, scripts, and assets could drift.
- Rationale: `src/pages`, `src/layouts`, `src/components`, `src/content`, and `src/data` now provide one source of truth while Astro generates deployable HTML into `dist/`.
- Preserved: Championship Editorial visual direction, six-page information architecture, CloudCannon page builder, verified content, responsive imagery, booking-request behavior, accessibility, and SEO metadata.
- Deferred: production origin, live sitemap URL, and the third-party booking/payment platform remain unresolved rather than guessed.
