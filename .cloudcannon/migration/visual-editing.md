# Visual editing

| Surface | Treatment | Reason |
| --- | --- | --- |
| Each legacy page body | `data-editable="source"` | Preserves the existing verified HTML while enabling CloudCannon source editing. |
| Header/footer/sections | Included in the page source region | They are presently duplicated in source files; no shared data model exists yet. |

`@cloudcannon/editable-regions` is installed and its Astro integration is enabled. `src/cloudcannon/registerComponents.ts` is intentionally empty until section components and a page-builder collection are introduced.

This is an editing fallback, not the intended long-term visual-editing model. The next pass should extract reusable components and add per-field / array editable regions.
