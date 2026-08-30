# art-direction-generator

## Activation

Use after discovery and before implementation to create three genuinely different visual systems.

## Purpose

Generate, compare, and recommend three structural art directions.

## Required inputs

- Project brief
- Industry brief
- Available media and brand assets

## Workflow

1. Select three distinct taxonomy families.
2. Define strategy, emotion, type, color, layout, image, components, motion, mobile, accessibility, and performance.
3. Explain structural differences.
4. Score fit and risk.
5. Recommend one while preserving all three.

## Output

Three completed art-direction documents and recommendation.

## References

- `research/design-taxonomy.md`
- `references/art-direction-template.md`
- `research/anti-template-patterns.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Directions differ only by color/type
- Available content cannot support a direction

## Quality checks

- [ ] Distinct compositions
- [ ] Explicit mobile behavior
- [ ] Risks and tradeoffs
- [ ] No copied composition

## Dependencies

- `design-discovery`
- `industry-design-research`
