# NextPhaze Athletic Training

Dependency-free, multi-page release candidate for NextPhaze Athletic Training.

## Run locally

On Windows PowerShell, use the `.cmd` executable because local script execution policy may block `npm.ps1`:

```powershell
npm.cmd run dev
```

Open `http://localhost:4173/`.

## Validate

```powershell
npm.cmd run check
```

The check validates all six indexable routes, metadata, one-H1 structure, landmarks, internal links, image attributes, required assets and prohibited publication text.

## Before deployment

1. Resolve the launch blockers in `docs/research/missing-input-register.md` and `docs/qa/qa-report.md`.
2. Connect the booking/payment platform described in `docs/handoff/booking-integration.md`.
3. Confirm media rights and follow `docs/handoff/media-replacement.md`.
   Regenerate responsive derivatives after replacing the source files:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/generate-assets.ps1
```

4. Generate the sitemap only after the production domain is confirmed:

```powershell
npm.cmd run sitemap -- https://confirmed-production-domain.com
```

5. Add the resulting sitemap URL to `robots.txt` and run browser-based visual, accessibility and performance QA.

## Source documents

Planning and implementation use `Project_Source/NextPhaze_Athletic_Training_Website_Content_Research_Brief.docx` as the factual source of truth. Design/research artifacts live under `docs/`; unresolved client input is never guessed in production copy.
