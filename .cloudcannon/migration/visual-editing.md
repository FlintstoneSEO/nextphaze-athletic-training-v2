# Visual editing census and implementation

## Census

| Route | Visible sections | Treatment | Implementation |
| --- | --- | --- | --- |
| `/` | Header, hero, ledger, eight content sections, footer | Page builder + shared site settings | Ten named visual sections; header/footer from Site settings |
| `/about/` | Header, hero, profile, timeline, two feature sections, footer | Page builder + shared site settings | Six named visual sections; header/footer from Site settings |
| `/training/` | Header, hero, lanes, session guide, formats, comparison, sports, footer | Page builder + shared site settings | Six named visual sections; header/footer from Site settings |
| `/booking/` | Header, hero, form, booking-aside, footer | Page builder + shared site settings | Two visual sections; form hooks retained inside its protected section |
| `/contact/` | Header, hero, contact methods, availability, CTA, footer | Page builder + shared site settings | Four named visual sections; header/footer from Site settings |
| `/media/` | Header, hero, source lists, rights policy, footer | Page builder + shared site settings | Four named visual sections; header/footer from Site settings |
| `/404.html` | Error message and links | Hardcoded exception | One-shot system page; not content-team editable |

## Infrastructure

- `@cloudcannon/editable-regions` and its Astro integration were already present.
- Added `componentMap`, `BlockRenderer`, and `registerComponents` wiring for `visual_section`, `site_header`, and `site_footer`.
- The content route dynamically loads component registration only inside CloudCannon's Visual Editor.

## Completeness decision

Every editable public route has a `content_blocks` array with `data-component-key="_type"`; each item has both `data-editable="array-item"` and `data-component="visual_section"`. The registered block has a `data-editable="text"` / `data-prop="content"` rich HTML host. Header and footer are registered, data-file-backed components using `@data[site]`; their brand, navigation, image, contact, and footer fields are editable in the canvas and Site settings.

This preserves the current document grammar without exposing a page-sized raw-content editor. A later refinement can move individual cards and statistics into specialized fields without changing route output.
