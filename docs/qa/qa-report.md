# Release-candidate QA report

Review date: 2026-08-30

Status: **No-go for public launch; implementation complete for stakeholder review.** The site is usable as a local/static release candidate, but production-domain setup, legal/business inputs, booking/payment integration, media rights confirmation, and screenshot-based viewport review remain unresolved.

## Evidence produced

- `npm.cmd run check`: passed for six routes; checks one H1, unique titles/descriptions, canonicals, main landmarks, skip links, internal links, image dimensions/alt attributes, required assets, and prohibited publication claims.
- `node --check`: passed for the shared interaction script and all Node utility scripts.
- Local HTTP responses: 200 for `/`, `/about/`, `/training/`, `/booking/`, `/media/`, and `/contact/`; 404 for a missing route.
- Production HTML scan: no `[NEEDS CLIENT INPUT]`, `[PLACEHOLDER]`, exact AFL/IFL experience claim, or `aggregateRating` text.
- Asset inventory: 563,509 bytes across shared CSS, JavaScript, logo, and responsive image variants; a representative home load does not request every derivative.
- Browser screenshot evidence: not produced because no in-app or connected browser was available. No visual score, Lighthouse metric, axe result, or browser/device pass is claimed.

## Findings and remediation

### QA-01 — Mobile navigation initially remained open

- Severity: high
- Element or file: `assets/js/site.js`, global primary navigation
- Viewport, route, or state: under 800px, initial page load
- Observed problem: the mobile menu button appeared, but navigation was not initially collapsed.
- Evidence: code inspection showed `hidden` was only changed after a breakpoint-change event or button click.
- Exact recommended change: initialize the menu's `hidden` state from the narrow-screen media query and reset it on breakpoint changes.
- Reason: a permanently open menu delays content and makes the control state inaccurate.
- Expected outcome: the menu is collapsed on initial narrow-screen load and open on desktop.
- Verification method: implemented; static code review confirms initial state and `aria-expanded` updates. Browser interaction retest remains required.

### QA-02 — Saturday requests allowed times outside verified availability

- Severity: high
- Element or file: `assets/js/site.js`, booking preferred date/time
- Viewport, route, or state: `/booking/`, Saturday selected
- Observed problem: any time could be submitted even though Saturday availability is 9:00 AM–12:00 PM.
- Evidence: the first validation pass rejected Sundays but did not validate the Saturday time.
- Exact recommended change: apply a custom validity message when a Saturday time is earlier than 09:00 or later than 12:00.
- Reason: the UI must not imply availability that contradicts the verified brief.
- Expected outcome: Saturday requests remain inside the published window.
- Verification method: implemented; JavaScript syntax check passed. Browser form-interaction retest remains required.

### QA-03 — Booking, payment and business management are not live

- Severity: blocker
- Element or file: `/booking/`; scheduling/payment integration
- Viewport, route, or state: form submission and business-side management
- Observed problem: no backend/provider exists for real-time slots, online card payment, reminders, rescheduling, calendar sync, history, blocked dates or double-booking prevention.
- Evidence: the starting repository had no application/backend or credentials; the implemented form explicitly prepares an email and disables online payment.
- Exact recommended change: select and configure a scheduling/payment provider after service duration, capacity, location, policies, processor and waiver requirements are confirmed; map the existing fields and status labels to that provider.
- Reason: claiming a confirmed booking or collecting card details without an operational system would be false and unsafe.
- Expected outcome: live availability, protected payments, confirmations, reminders and business-side management become operational.
- Verification method: complete an end-to-end test in sandbox mode for group/cash, one-on-one/card, conflict prevention, cancellation, reschedule, reminder and calendar-sync flows.

### QA-04 — Production domain and XML sitemap are unresolved

- Severity: blocker
- Element or file: `robots.txt`, canonical strategy, `scripts/generate-sitemap.mjs`
- Viewport, route, or state: production crawl/indexing
- Observed problem: no verified production origin exists, so an absolute sitemap cannot be published truthfully. Pages use origin-relative canonical URLs.
- Evidence: the source brief and repository contain no confirmed domain; `robots.txt` intentionally omits a live Sitemap directive.
- Exact recommended change: after confirming the production domain, run `npm run sitemap -- https://confirmed-domain`, add `Sitemap: https://confirmed-domain/sitemap.xml` to `robots.txt`, and verify the deployed canonical resolution.
- Reason: sitemap `<loc>` values require absolute URLs, and inventing a domain would violate the truthfulness rule.
- Expected outcome: valid sitemap discovery and consistent canonical URLs on the deployed origin.
- Verification method: fetch deployed pages and sitemap, validate 200 status/canonical targets, and submit the sitemap in the relevant search-console account.

### QA-05 — Legal/privacy and operating policies are incomplete

- Severity: blocker
- Element or file: `/booking/`, contact/footer policy text
- Viewport, route, or state: before collecting or processing a minor athlete's booking data
- Observed problem: waiver/release, privacy, refund, no-show, weather, reschedule and late-arrival terms are not supplied; only the 12-hour cancellation window is verified.
- Evidence: all missing terms are listed in the source brief and missing-input register.
- Exact recommended change: obtain client- and counsel-approved language, publish it in an accessible policy flow, and require the appropriate consent at live checkout.
- Reason: the site should not fabricate legal terms or handle minor-related booking data without a defined policy.
- Expected outcome: users understand data handling and participation/payment terms before confirmation.
- Verification method: stakeholder/legal approval plus keyboard and screen-reader testing of consent, error and policy-link states.

### QA-06 — Media publication rights need confirmation

- Severity: blocker
- Element or file: `assets/images/*`, `docs/research/media-provenance.md`
- Viewport, route, or state: public deployment
- Observed problem: the three local images are client-supplied, but ownership, creator credit and subject consent are not confirmed.
- Evidence: no license or written permission file exists in the repository.
- Exact recommended change: obtain written rights confirmation and original files; record creator, consent, permitted uses and required credit in the provenance file.
- Reason: project placement is enough for a design build but not proof of production publication rights.
- Expected outcome: authentic imagery can ship with a defensible rights record and improved source quality.
- Verification method: stakeholder supplies permission records; final asset filenames and credits are reconciled against the provenance table.

### QA-07 — Required screenshot and browser audits are unverified

- Severity: high
- Element or file: all routes and shared responsive system
- Viewport, route, or state: 320, 375, 390, 768, 1024 and 1440px; keyboard, reduced motion and form states
- Observed problem: the configured browser surface reported no available browser, so visual-design-review and responsive-design-review lack rendered screenshots; axe/Lighthouse and screen-reader smoke tests were also unavailable.
- Evidence: browser discovery returned an empty list after the documented connection check.
- Exact recommended change: connect the in-app/extension browser, run the local site, capture each route at required widths, exercise keyboard/menu/form states, run axe and production Lighthouse, and log exact defects using this report format.
- Reason: CSS/code inspection cannot prove crop quality, reflow, contrast rendering, focus visibility, layout stability or real lab performance.
- Expected outcome: the release candidate gains viewport-specific evidence and measurable accessibility/performance results.
- Verification method: attach screenshots and tool reports; confirm no horizontal overflow at 320px and retest every fixed issue.

## Skill review summaries

- Visual design: direction and component grammar match the selected Championship Editorial plan in code; rendered review blocked by missing browser.
- Responsive design: intrinsic grids, narrow-screen recomposition, table overflow containment and 320px rules are implemented; rendered widths remain unverified.
- Accessibility: semantic landmarks, native controls, one H1, skip links, visible focus, required labels, status region, reduced motion and explicit image dimensions are present; automated/manual browser tests remain unverified.
- Technical SEO: unique metadata, semantic links, relative canonicals, 200 routes, 404 behavior and verified-only Organization/Person schema pass static checks; sitemap/domain is blocked.
- Performance: no framework, fonts, third parties or embeds; shared asset inventory is 551 KB (uncompressed on disk) with responsive JPEG variants; Lighthouse/Core Web Vitals are not claimed.
- Anti-template: pass at the code/structure level. The design uses an asymmetric image-led hero, editorial ledgers, phase rows, scorelines and square program comparison rather than glass panels, gradient blobs or repeated generic cards. Rendered distinctiveness remains to be reviewed.
- Integrated QA: no-go for public launch until QA-03 through QA-07 are resolved; suitable for local stakeholder review now.
