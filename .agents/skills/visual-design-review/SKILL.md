# visual-design-review

## Activation

Use after a page is rendered or when screenshots are available.

## Purpose

Evaluate strategic fit, hierarchy, composition, type, spacing, content clarity, conversion, and distinctiveness.

## Required inputs

- Screenshots at required widths
- Page specification
- Art direction
- Project brief

## Workflow

1. Compare rendered result to strategy.
2. Score rubric.
3. Identify viewport-specific issues.
4. Use exact issue format.
5. Prioritize remediation and re-score.

## Output

Scored review and actionable remediation table.

## References

- `references/design-review-rubric.md`
- `references/screenshot-review-workflow.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Required screenshots missing
- Review lacks project context

## Quality checks

- [ ] No vague feedback
- [ ] Every deduction has evidence
- [ ] Automatic failures identified

## Dependencies

- `frontend-ui-builder`
