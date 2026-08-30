# Build and test

- `npm run build`: passed after the Astro migration.
- `npm run check`: passed; validates the six indexable routes.
- Output routes verified: `/`, `/about/`, `/training/`, `/booking/`, `/contact/`, `/media/`, and `/404.html`.
- `data-editable="source"` is present on each migrated page body in generated HTML.

CloudCannon-side verification remains required: create/import the site, confirm the configured build succeeds, open each page in the Visual Editor, edit a representative source region, and confirm saved changes land in the expected HTML file.
