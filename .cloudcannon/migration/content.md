# CloudCannon content migration

## Changes

- Created `src/content/pages/` with `index.md`, `about.md`, `training.md`, `booking.md`, `contact.md`, and `media.md`.
- Each entry has consistent `_schema`, `title`, `description`, and `content_blocks` fields matching `src/content.config.ts` and the CloudCannon schema template.
- Preserved all existing markup, verified factual copy, images, links, navigation, footer content, and booking-form `data-*` hooks inside an editable `raw_html` block. No facts were invented or changed.
- The original static HTML files are retained as a recoverable source reference; Astro now builds the content-collection entries instead.

## Review

- No MDX, markdown body, inline-HTML-in-markdown, date, reference, or folder-per-post migration patterns apply.
- The HTML block deliberately uses a rich HTML input with custom markup enabled because the source content has semantic tables, forms, headings, links, images, and form attributes that must survive editing.
