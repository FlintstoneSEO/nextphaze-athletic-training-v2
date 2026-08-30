# page-content-planner

## Activation

Use before building each page.

## Purpose

Convert strategy, IA, SEO, and art direction into an implementation-ready page specification.

## Required inputs

- Project brief
- Selected art direction
- Route and page type
- Verified content

## Workflow

1. Define objective, audience, intent, conversion, search intent, metadata, H1, hierarchy, proof, links, schema, media, mobile, accessibility, and performance.
2. Mark missing content.
3. Define acceptance criteria.

## Output

One page specification per route.

## References

- `references/page-brief-template.md`
- `research/seo-standards.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Critical facts or conversion are unknown
- Proposed page duplicates another page’s purpose

## Quality checks

- [ ] No filler sections
- [ ] Proof near claims
- [ ] SEO integrated
- [ ] LCP candidate identified

## Dependencies

- `information-architecture`
- `art-direction-generator`
