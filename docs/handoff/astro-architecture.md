# Astro architecture handoff

## Status

The application is fully Astro-driven. Hand-authored root route files and the duplicate root `assets/` directory were removed after their content, metadata, structured data, scripts, and accessibility behavior were audited against the Astro implementation.

## Sources of truth

| Classification | Source |
| --- | --- |
| CLIENT REQUIREMENT | `Project_Source/NEWNextPhaze_Athletic_Training_Website_Content_Updated.docx` |
| VERIFIED RESEARCH | `docs/research/` and linked publisher/athletics sources |
| DESIGN DECISION | `docs/design/` and `templates/design-decision-log.md` |
| UNRESOLVED INPUT | `docs/research/missing-input-register.md` |

## Runtime ownership

- Routing: `src/pages/[...slug].astro` and `src/pages/404.astro`
- Document shell and metadata: `src/layouts/BaseLayout.astro`
- Editable page data: `src/content/pages/*.md`
- Shared UI: `src/components/`
- Global editable data: `src/data/site.json`
- CloudCannon registration/configuration: `src/cloudcannon/`, `.cloudcannon/`, and `cloudcannon.config.yml`
- Public assets: `public/assets/`, `public/robots.txt`, and `public/site.webmanifest`
- Generated deployment output: `dist/` (ignored; never hand-edit)

## Migration inventory

### Kept

Astro content, verified Carrington career context, source documents/images, CloudCannon configuration, responsive public images, shared CSS/JavaScript, robots directives, manifest, research, design, handoff, and QA documentation.

### Migrated/refactored

The legacy pages' canonical, Open Graph, theme, favicon, manifest, structured-data, skip-link, global navigation/footer, and progressive-enhancement behavior are centralized in the Astro layout and route layer. The 404 page is native Astro rather than importing root HTML.

### Deleted

Root `index.html`, `404.html`, five route directories containing static `index.html` files, root `assets/`, duplicate root `robots.txt` and `site.webmanifest`, and the obsolete static-only development server.

## Guardrails

Do not restore root route HTML or duplicate public assets. Make page copy changes in the content collection, shell changes in the layout/components, global business/contact changes in site data, and browser behavior changes in `public/assets/js/site.js`.
