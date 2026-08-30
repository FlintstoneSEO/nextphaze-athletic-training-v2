# Build and test

- Ran `npm.cmd run build` successfully after the migration.
- Astro generated all six content routes plus `/404.html` as static output.
- Build output uses the `pages` content collection and contains CloudCannon page-builder editable attributes.

## CloudCannon verification required

In the hosted CloudCannon site, open representative pages and verify that the page-content block can be opened, edited, saved, and reloaded; that its block controls can add/remove/reorder; that images can be selected in the HTML editor; and that the booking form still prepares the email request after an edit. Confirm saved changes land in the intended `src/content/pages/*.md` file.
