# CloudCannon configuration

## Decisions

- Added the `pages` collection at `src/content/pages` with `url: "/[slug]/"`. The filename-based `[slug]` placeholder produces `/` for `index.md` and preserves trailing-slash routes for every other page.
- Added one `page_builder` schema and a `content_blocks` structure. `visual_section` is a normal rich-text section, so editors receive named, reorderable page sections instead of a page-wide HTML/code block.
- Added `src/data/site.json` as a `data_config` source and a root-level `file_config` entry for shared navigation, brand, logo, contact, and footer settings.
- Configured `public/assets/images` as the upload location because all existing site images are plain static assets served from `public`.
- Added first-site CloudCannon build settings: npm install, `npm run build`, output `dist`.

## Validation

- Downloaded the current CloudCannon configuration and initial-settings JSON schemas to `.cloudcannon/migration/`; both are ignored by Git.
- Cross-checked the config's top-level, collection, structure, and input keys against the downloaded configuration schema.
- `npx @cloudcannon/cli validate` could not complete in this environment, so final CLI validation remains a CloudCannon-side verification item.
