import { writeFileSync } from "node:fs";

const origin = process.argv[2]?.replace(/\/$/, "");
if (!origin || !/^https:\/\//.test(origin)) {
  console.error("Usage: npm run sitemap -- https://your-confirmed-production-domain.com");
  process.exit(1);
}
const routes = ["/", "/about/", "/training/", "/booking/", "/media/", "/contact/"];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route}</loc></url>`).join("\n")}
</urlset>
`;
writeFileSync("sitemap.xml", xml);
console.log(`Generated sitemap.xml for ${origin}`);
