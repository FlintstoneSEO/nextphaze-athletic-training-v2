import { readFileSync, existsSync, statSync } from "node:fs";
import { dirname, join } from "node:path";

const routes = ["index.html", "about/index.html", "training/index.html", "booking/index.html", "media/index.html", "contact/index.html"];
let failed = false;
const titles = new Set();
const descriptions = new Set();

for (const route of routes) {
  const html = readFileSync(route, "utf8");
  const h1s = html.match(/<h1\b/g) || [];
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const checks = [
    [h1s.length === 1, `exactly one H1 (found ${h1s.length})`],
    [Boolean(title), "a title"],
    [Boolean(description), "a meta description"],
    [/rel="canonical"/.test(html), "a canonical"],
    [/<main\b/.test(html), "a main landmark"],
    [/href="#main-content"/.test(html), "a skip link"]
  ];
  for (const [ok, label] of checks) {
    if (!ok) { failed = true; console.error(`${route}: missing ${label}`); }
  }
  if (titles.has(title)) { failed = true; console.error(`${route}: duplicate title`); }
  if (descriptions.has(description)) { failed = true; console.error(`${route}: duplicate description`); }
  titles.add(title); descriptions.add(description);

  for (const image of html.matchAll(/<img\b([^>]+)>/g)) {
    const attributes = image[1];
    for (const required of ["src", "width", "height", "alt"]) {
      if (!new RegExp(`\\b${required}=`).test(attributes)) {
        failed = true; console.error(`${route}: image missing ${required}`);
      }
    }
  }

  for (const link of html.matchAll(/href="([^"]+)"/g)) {
    const href = link[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const path = href.split(/[?#]/)[0];
    let target = path === "/" ? "index.html" : path.replace(/^\//, "");
    if (target.endsWith("/")) target += "index.html";
    if (!existsSync(target) || statSync(target).isDirectory()) {
      failed = true; console.error(`${route}: broken internal link ${href}`);
    }
  }

  for (const prohibited of [/\bAFL experience\b/i, /\bIFL experience\b/i, /aggregateRating/i, /\[PLACEHOLDER:/i, /\[NEEDS CLIENT INPUT:/i]) {
    if (prohibited.test(html)) { failed = true; console.error(`${route}: prohibited publication text matched ${prohibited}`); }
  }
}

for (const asset of [
  "assets/css/site.css", "assets/js/site.js", "assets/images/nextphaze-logo.png",
  "assets/images/carrington-action-480.jpg", "assets/images/carrington-action-768.jpg",
  "assets/images/carrington-action-971.jpg", "assets/images/carrington-portrait-360.jpg",
  "assets/images/carrington-portrait-550.jpg", "robots.txt"
]) {
  if (!existsSync(asset)) { failed = true; console.error(`Missing asset: ${asset}`); }
}

if (failed) process.exit(1);
console.log(`Static QA passed for ${routes.length} routes.`);
