import { readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const outputRoot = "dist";
const routes = ["index.html", "about/index.html", "training/index.html", "booking/index.html", "media/index.html", "contact/index.html"];
const generatedFiles = [...routes, "404.html"];
let failed = false;
const titles = new Set();
const descriptions = new Set();

const report = (ok, message) => {
  if (!ok) { failed = true; console.error(message); }
};

for (const route of generatedFiles) {
  const outputPath = join(outputRoot, route);
  report(existsSync(outputPath), `${route}: route was not generated`);
  if (!existsSync(outputPath)) continue;

  const html = readFileSync(outputPath, "utf8");
  const h1s = html.match(/<h1\b/g) || [];
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  report(h1s.length === 1, `${route}: expected exactly one H1 (found ${h1s.length})`);
  report(Boolean(title), `${route}: missing title`);
  report(Boolean(description), `${route}: missing meta description`);
  report(/rel="canonical"/.test(html), `${route}: missing canonical`);
  report(/<main\b[^>]*id="main-content"/.test(html), `${route}: missing main landmark`);
  report(/href="#main-content"/.test(html), `${route}: missing skip link`);
  if (route === "404.html") report(/name="robots" content="noindex"/.test(html), `${route}: missing noindex`);

  if (route !== "404.html") {
    report(!titles.has(title), `${route}: duplicate title`);
    report(!descriptions.has(description), `${route}: duplicate description`);
    titles.add(title);
    descriptions.add(description);
  }

  for (const image of html.matchAll(/<img\b([^>]+)>/g)) {
    for (const required of ["src", "width", "height", "alt"]) {
      report(new RegExp(`\\b${required}=`).test(image[1]), `${route}: image missing ${required}`);
    }
  }

  for (const attribute of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = attribute[1];
    if (!url.startsWith("/") || url.startsWith("//")) continue;
    const path = url.split(/[?#]/)[0];
    let target = path === "/" ? "index.html" : path.replace(/^\//, "");
    if (target.endsWith("/")) target += "index.html";
    const resolved = join(outputRoot, target);
    report(existsSync(resolved) && !statSync(resolved).isDirectory(), `${route}: broken internal asset or link ${url}`);
  }

  for (const prohibited of [/\bAFL experience\b/i, /\bIFL experience\b/i, /aggregateRating/i, /\[PLACEHOLDER:/i, /\[NEEDS CLIENT INPUT:/i]) {
    report(!prohibited.test(html), `${route}: prohibited publication text matched ${prohibited}`);
  }
}

for (const asset of [
  "assets/css/site.css", "assets/js/site.js", "assets/images/nextphaze-logo.png",
  "assets/images/carrington-action-480.jpg", "assets/images/carrington-action-768.jpg",
  "assets/images/carrington-action-971.jpg", "assets/images/carrington-portrait-360.jpg",
  "assets/images/carrington-portrait-550.jpg", "robots.txt", "site.webmanifest"
]) report(existsSync(join(outputRoot, asset)), `Missing generated asset: ${asset}`);

report(!existsSync("index.html"), "Obsolete root index.html still exists");
report(!existsSync("assets"), "Obsolete root assets directory still exists");
for (const route of ["about", "training", "booking", "media", "contact"]) {
  report(!existsSync(join(route, "index.html")), `Obsolete static source remains: ${route}/index.html`);
}

if (failed) process.exit(1);
console.log(`Astro output QA passed for ${generatedFiles.length} routes.`);
