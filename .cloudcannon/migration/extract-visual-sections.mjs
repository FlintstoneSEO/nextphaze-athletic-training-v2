import fs from "node:fs";

const pages = [
  ["index.html", "index"],
  ["about/index.html", "about"],
  ["training/index.html", "training"],
  ["booking/index.html", "booking"],
  ["contact/index.html", "contact"],
  ["media/index.html", "media"],
].filter(([, id]) => !process.argv[2] || id === process.argv[2]);

const voidTags = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);

function topLevelElements(html) {
  const parts = [];
  const tag = /<\/?([a-z][\w-]*)\b[^>]*>/gi;
  let match;
  let depth = 0;
  let start = 0;

  while ((match = tag.exec(html))) {
    const isClose = match[0].startsWith("</");
    const name = match[1].toLowerCase();
    if (voidTags.has(name) || match[0].endsWith("/>")) continue;
    if (!isClose && depth++ === 0) start = match.index;
    if (isClose && --depth === 0) parts.push(html.slice(start, tag.lastIndex).trim());
  }
  return parts;
}

function labelFor(section, number) {
  const heading = section.match(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/i)?.[1]
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .trim();
  return heading ? heading.slice(0, 56) : `Section ${number}`;
}

let patch = "*** Begin Patch\n";
for (const [file, id] of pages) {
  const html = fs.readFileSync(file, "utf8");
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) ?? [, id])[1].trim();
  const description = (html.match(/<meta name="description" content="([^"]*)/i) ?? [, ""])[1];
  const main = (html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) ?? [, ""])[1];
  const sections = topLevelElements(main);
  const blocks = sections.map((section, index) => {
    const content = section.split("\n").map((line) => `      ${line}`).join("\n");
    return `  - _type: visual_section\n    label: ${JSON.stringify(labelFor(section, index + 1))}\n    content: |-\n${content}`;
  }).join("\n");
  const fileContent = `---\n_schema: page_builder\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\ncontent_blocks:\n${blocks}\n---\n`;
  patch += `*** Add File: src/content/pages/${id}.md\n${fileContent.split("\n").filter(Boolean).map((line) => `+${line}`).join("\n")}\n`;
}
patch += "*** End Patch";
process.stdout.write(patch);
