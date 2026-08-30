# Replacing placeholder-quality media with approved originals

1. Confirm in writing that NextPhaze may publish the image and that any identifiable subjects have appropriate consent.
2. Record the photographer/creator, required credit, permitted placements, modification rights and any expiration in `docs/research/media-provenance.md`.
3. Place the approved original in `Project_Source/Images/` and keep a lossless master outside the public `assets/` folder.
4. Replace the matching public derivatives in `assets/images/` while preserving the current aspect ratio unless the page specification is updated.
5. Generate at least the current responsive widths: action image at 480, 768 and 971px; portrait at 360 and 550px. Use modern formats if the deployment pipeline supports them reliably.
6. Preserve explicit `width` and `height`, update `srcset`/`sizes`, and keep below-fold images lazy-loaded.
7. Rewrite alt text for what the final image communicates in that exact page context. Do not identify children or athletes unless necessary and approved.
8. Review crops at 375, 390, 768, 1024 and 1440px, then rerun the asset budget and accessibility checks.

Third-party news or sports photography must not be substituted into the local asset folder without explicit permission. When rights remain unknown, keep the attributed publisher link instead.
