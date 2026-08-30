# CloudCannon migration audit

## Platform and build

- Original platform: dependency-free static HTML.
- Target platform: Astro 7, static output with trailing slashes.
- Package manager: npm (`package-lock.json`).
- Build command: `npm run build`.
- No framework islands, content collections, MDX, generated data, or animation/reveal system were present.
- Images are static files and are retained under `public/assets/images/` for CloudCannon-compatible uploads.

## Pages and routes

| Source | Public route | Distinct content sections | Recommended treatment |
| --- | --- | --- | --- |
| `index.html` | `/` | 8 | Source-editable legacy page during this pass |
| `about/index.html` | `/about/` | 5 | Source-editable legacy page during this pass |
| `training/index.html` | `/training/` | 5 | Source-editable legacy page during this pass |
| `booking/index.html` | `/booking/` | 2 | Source-editable legacy page during this pass |
| `contact/index.html` | `/contact/` | 3 | Source-editable legacy page during this pass |
| `media/index.html` | `/media/` | 3 | Source-editable legacy page during this pass |

The preferred end state is a `pages` content collection with page-builder blocks. That is intentionally deferred: the existing pages have substantial, visually coupled HTML and converting them without a page-by-page content-model review would risk changing verified copy or booking behavior.

## Shared UI

- Header, footer, contact details, navigation, and booking calls-to-action are duplicated in the legacy HTML.
- This pass preserves their output and makes each page source-editable. They should become a shared data file and Astro components in the next content-modeling pass.

## Migration scope

- Total public content pages: 6.
- Hardcoded-to-structured conversions deferred: 6.
- Existing collections: 0; proposed `pages` collection: 1.
- Sectioning thresholds are not met; a single follow-up content-model pass is appropriate.
