# frontend-ui-builder

## Activation

Use only when discovery, art direction, IA, and page specification exist.

## Purpose

Implement semantic, responsive, brand-specific interfaces without importing a generic visual personality.

## Required inputs

- Page specification
- Brand profile
- Selected art direction
- Content/assets
- Technical stack

## Workflow

1. Inspect repository conventions.
2. Create semantic structure.
3. Implement tokens and intrinsic responsive layout.
4. Optimize images/fonts and limit hydration.
5. Implement states and reduced motion.
6. Run local checks and render screenshots.

## Output

Production code, tests, screenshots, and decision-log updates.

## References

- `AGENTS.md`
- `research/universal-design-principles.md`
- `research/performance-standards.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Required planning artifacts are absent
- Implementation would fabricate content

## Quality checks

- [ ] Semantic HTML
- [ ] No overflow
- [ ] Budgets respected
- [ ] Brand-specific components
- [ ] Primary action works

## Dependencies

- `page-content-planner`
