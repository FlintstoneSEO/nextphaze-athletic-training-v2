# Build and test

- Ran `npm.cmd run build` successfully after the migration.
- Astro generated all six content routes plus `/404.html` as static output.
- Build output uses the `pages` content collection, named visual-section components, and editable shared Site settings attributes.

## CloudCannon verification required

In the hosted CloudCannon site, open representative pages and verify that named sections can be selected, edited, saved, and reloaded; that section controls can add/remove/reorder; that Site settings update header/footer values; and that the booking form still prepares the email request after an edit. Confirm saved changes land in the intended `src/content/pages/*.md` or `src/data/site.json` file.
