# Visual editing census and implementation

## Census

| Route | Visible sections | Treatment | Implementation |
| --- | --- | --- | --- |
| `/` | Header, hero, ledger, eight content sections, footer | Page-builder block | One `raw_html` page-content block; HTML input edits every visible value and preserves markup |
| `/about/` | Header, hero, profile, timeline, two feature sections, footer | Page-builder block | One `raw_html` page-content block |
| `/training/` | Header, hero, lanes, session guide, formats, comparison, sports, footer | Page-builder block | One `raw_html` page-content block |
| `/booking/` | Header, hero, form, booking-aside, footer | Page-builder block | One `raw_html` page-content block; booking hooks retained |
| `/contact/` | Header, hero, contact methods, availability, CTA, footer | Page-builder block | One `raw_html` page-content block |
| `/media/` | Header, hero, source lists, rights policy, footer | Page-builder block | One `raw_html` page-content block |
| `/404.html` | Error message and links | Hardcoded exception | One-shot system page; not content-team editable |

## Infrastructure

- `@cloudcannon/editable-regions` and its Astro integration were already present.
- Added `componentMap`, `BlockRenderer`, and `registerComponents` wiring for the `raw_html` block.
- The content route dynamically loads component registration only inside CloudCannon's Visual Editor.

## Completeness decision

Every editable public route has a `content_blocks` array with `data-component-key="_type"`; its item has both `data-editable="array-item"` and `data-component="raw_html"`. The registered block has a `data-editable="text"` / `data-prop="content"` rich HTML host. Header, footer, navigation, images, CTA copy, and form labels are intentionally contained in that page-owned block so that no visible route content remains trapped in the Astro template.

This preserves the current document grammar. A later refinement can split each raw block into smaller semantic components and extract shared header/footer data without changing route output.
