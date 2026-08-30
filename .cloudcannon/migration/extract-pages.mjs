import fs from "node:fs";

const pages = [
  ["index.html", "index"],
  ["about/index.html", "about"],
  ["training/index.html", "training"],
  ["booking/index.html", "booking"],
  ["contact/index.html", "contact"],
  ["media/index.html", "media"],
].filter(([, id]) => !process.argv[2] || id === process.argv[2]);

let patch = "*** Begin Patch\n";
for (const [file, id] of pages) {
  const html = fs.readFileSync(file, "utf8");
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) ?? [, id])[1].trim();
  const description = (html.match(/<meta name="description" content="([^"]*)/i) ?? [, ""])[1];
  const body = (html.match(/<body[^>]*>([\s\S]*?)<\/body>/i) ?? [, ""])[1]
    .trim()
    .replace(/\r?\n/g, "\n");
  const content = body.split("\n").map((line) => `      ${line}`).join("\n");

  const fileContent = `---\n_schema: page_builder\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\ncontent_blocks:\n  - _type: raw_html\n    label: Page content\n    content: |-\n${content}\n---\n`;
  patch += `*** Add File: src/content/pages/${id}.md\n${fileContent.split("\n").filter(Boolean).map((line) => `+${line}`).join("\n")}\n`;
}
patch += "*** End Patch";
process.stdout.write(patch);
