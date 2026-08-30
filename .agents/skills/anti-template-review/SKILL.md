# anti-template-review

## Activation

Use before direction approval and release.

## Purpose

Detect generic AI composition and brand-industry mismatch.

## Required inputs

- Project brief
- Art direction
- Screenshots/components

## Workflow

1. Run context, concept, composition, content, responsive, and implementation gates.
2. Apply red-team questions.
3. Identify replaceable generic patterns.
4. Recommend structural alternatives.

## Output

Pass/fail checklist and exact redesign actions.

## References

- `research/anti-template-patterns.md`
- `research/design-taxonomy.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- No project brief or selected direction

## Quality checks

- [ ] Structural critique, not taste alone
- [ ] Cards/gradients/radii justified
- [ ] Distinct without logo

## Dependencies

- `art-direction-generator`
- `visual-design-review`
