# CloudCannon configuration

- `cloudcannon.config.yml` defines the public asset root and image-upload directory.
- `.cloudcannon/initial-site-settings.json` sets Astro, `npm ci`, `npm run build`, and `dist` output.
- No `collections_config` is defined yet because the current page sources are legacy HTML, not Astro content collections.
- The configuration intentionally avoids inventing collection schemas for verified production content.
