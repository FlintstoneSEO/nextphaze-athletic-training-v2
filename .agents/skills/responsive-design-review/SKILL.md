# responsive-design-review

## Activation

Use to inspect cross-viewport composition and mobile ergonomics.

## Purpose

Verify deliberate adaptation rather than desktop stacking.

## Required inputs

- Rendered page at 375, 390, 768, 1024, 1440
- Keyboard order
- Page specification

## Workflow

1. Inspect order, wrapping, crop, controls, navigation, density, sticky UI, tables, and overflow.
2. Check 320px reflow and zoom.
3. Recommend exact breakpoint-independent fixes where possible.

## Output

Viewport issue matrix with fixes and verification.

## References

- `references/responsive-checklist.md`
- `references/screenshot-review-workflow.md`

## Scripts and tools

Use repository-native tooling first. Applicable tools may include browser screenshots, Playwright, axe-core, Lighthouse, HTML validation, schema validation, link checking, and asset-budget scripts. Do not claim a test ran unless evidence was produced.

## Failure conditions

- Only desktop evidence available

## Quality checks

- [ ] No horizontal overflow
- [ ] Meaning preserved
- [ ] Touch and focus usable
- [ ] Images art-directed

## Dependencies

- `frontend-ui-builder`
