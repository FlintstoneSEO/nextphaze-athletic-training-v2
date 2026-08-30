# CloudCannon content migration

## Changes

- Created `src/content/pages/` with `index.md`, `about.md`, `training.md`, `booking.md`, `contact.md`, and `media.md`.
- Each entry has consistent `_schema`, `title`, `description`, and `content_blocks` fields matching `src/content.config.ts` and the CloudCannon schema template.
- Split each page into its top-level visual sections. Named blocks preserve the existing markup, verified factual copy, images, links, and booking-form `data-*` hooks; no facts were invented or changed.
- Moved shared brand, navigation, contact, and footer values into `src/data/site.json`.
- The original static HTML files are retained as a recoverable source reference; Astro now builds the content-collection entries instead.

## Review

- No MDX, markdown body, inline-HTML-in-markdown, date, reference, or folder-per-post migration patterns apply.
- The HTML block deliberately uses a rich HTML input with custom markup enabled because the source content has semantic tables, forms, headings, links, images, and form attributes that must survive editing.
