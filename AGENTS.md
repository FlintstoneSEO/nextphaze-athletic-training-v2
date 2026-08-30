# AGENTS.md

## Mission

Create websites that are strategically appropriate, visually distinctive, accessible, responsive, performant, conversion-focused, and search-engine comprehensible.

## Non-negotiable sequence

Do not code a page until these artifacts exist:

1. Completed project brief, including visible unknowns and assumptions
2. Three substantially different art directions
3. Selected art direction and decision rationale
4. Approved information architecture
5. Page specification for the page being implemented

A substantially different art direction changes composition, content emphasis, image behavior, density, component grammar, and interaction treatment. A palette or font swap does not qualify.

## Truthfulness

- Never invent client facts, awards, reviews, ratings, prices, availability, addresses, credentials, results, statistics, team members, or testimonials.
- Mark unresolved values as `[NEEDS CLIENT INPUT: ...]`.
- Mark temporary implementation copy as `[PLACEHOLDER: ...]`.
- Record consequential assumptions in `templates/design-decision-log.md`.

## Design rules

- Design from business context and user intent, not from a default landing-page formula.
- Do not automatically use an oversized hero, centered headline, three cards, gradient background, glass panels, pills, or rounded containers.
- Use cards only for separate objects users benefit from scanning, comparing, sorting, or selecting.
- Every section must have a defined user or business purpose.
- Major design choices require a rationale.
- The visual identity should remain recognizable when the logo is removed.
- Do not reproduce the identifiable composition, artwork, copy, or interaction sequence of a reference website.
- Prefer authentic client imagery. Disclose and constrain AI imagery. Never imply synthetic people are actual staff, customers, beneficiaries, or athletes.
- Compose mobile deliberately. Do not merely stack desktop columns.
- Use semantic HTML before ARIA. Use native controls whenever possible.
- Accessibility, SEO, and performance are planning constraints, not final audits.

## Default quality targets

- WCAG 2.2 Level AA
- No horizontal overflow at 320 CSS pixels
- Functional keyboard path and visible focus
- Text contrast at least 4.5:1, or 3:1 for qualifying large text
- Core Web Vitals at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1
- Exactly one descriptive H1 on normal content pages
- Unique title and meta description for indexable pages
- Valid canonical strategy, sitemap, robots directives, and structured data
- No fabricated structured-data properties
- Visual review at 375, 390, 768, 1024, and 1440 pixels

## Skill routing

- Ambiguous or incomplete project: `design-discovery`
- Need market conventions and differentiation: `industry-design-research`
- Need three concepts: `art-direction-generator`
- Need sitemap or navigation: `information-architecture`
- Need page-level planning: `page-content-planner`
- Ready to implement: `frontend-ui-builder`
- Rendered interface needs critique: `visual-design-review`
- Multi-viewport behavior needs critique: `responsive-design-review`
- Accessibility compliance: `accessibility-audit`
- Search implementation: `technical-seo-audit`
- Runtime and payload performance: `performance-review`
- Generic AI-pattern check: `anti-template-review`
- Integrated pre-release verification: `website-qa`

## Required review output format

Every issue must contain:

- Severity: blocker, high, medium, or low
- Element or file
- Viewport, route, or state
- Observed problem
- Evidence
- Exact recommended change
- Reason
- Expected outcome
- Verification method

Avoid vague feedback such as “make it pop,” “clean it up,” or “improve spacing.”

## Stop conditions

Stop implementation and request or visibly record missing input when:

- The primary conversion is unknown.
- The organization or product facts are unverified.
- Required legal, pricing, location, schedule, or availability content is absent.
- The intended audience is materially ambiguous.
- The chosen visual direction conflicts with available media or accessibility requirements.
