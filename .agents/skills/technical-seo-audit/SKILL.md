# technical-seo-audit

## Activation

Use when planning or validating indexable pages.

## Purpose

Validate on-page, rendering, crawlability, metadata, linking, and structured data.

## Required inputs

- Routes
- Page specs
- Rendered HTML
- Sitemap/robots
- Verified organization data

## Workflow

1. Check page purpose and intent.
2. Validate titles, descriptions, headings, links, canonicals, robots, sitemap, status codes, OG, schema, and rendering.
3. Flag duplicate/thin/local doorway content.

## Output

Route-level SEO issue table and remediation plan.

## References

- `research/seo-standards.md`
- `references/seo-checklist.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Business facts required for schema are unverified

## Quality checks

- [ ] No fabricated data
- [ ] Indexability explicit
- [ ] Schema matches visible content
- [ ] Internal links validated

## Dependencies

- `page-content-planner`
- `frontend-ui-builder`
