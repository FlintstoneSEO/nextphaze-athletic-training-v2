# Visual section model

## Decision

Replace each page's single raw-document block with one `visual_section` block per top-level page section. This is the correct editing unit for the existing Championship Editorial design: editors can select, add, remove, and reorder full sections in the Visual Editor without handling a page-sized HTML document.

## What stays fixed

- The visual system, CSS classes, semantic HTML, verified facts, links, and image paths remain unchanged.
- The booking form's controls and `data-*` hooks remain within its own section so its client-side request behavior remains intact.
- The 404 remains a one-shot hardcoded system page.

## What becomes visually editable

- Each content route's hero, editorial sections, cards, lists, stat bands, CTA bands, source lists, and booking/form section.
- Shared branding, logo, navigation labels/URLs, contact information, footer tagline, and cancellation note via the Site settings data file.

## Editor experience

- The page sidebar shows named sections rather than one opaque “Page content” block.
- The canvas displays an editable region for each section and normal block controls for reorder/add/remove.
- Rich content is edited through the normal visual/rich-text interface; no page-wide raw HTML/code block is presented.
