// Generates meta-refresh stubs in public/ for the legacy URLs from the old site,
// so old links land on the closest new route after launch.
// Run: node scripts/generate-legacy-stubs.mjs
import fs from "node:fs";
import path from "node:path";

const target = path.resolve("public");
const site = "https://danilo-designer.com";

const redirects = [
  ["portfolio.html", "/#earlier-work"],
  ["portfolio-details.html", "/#earlier-work"],
  ["portfolio-details-01.html", "/#earlier-work"],
  ["portfolio-details-02.html", "/#earlier-work"],
  ["portfolio-details-03.html", "/#earlier-work"],
  ["portfolio-details-04.html", "/#earlier-work"],
  ["portfolio-details-05.html", "/#earlier-work"],
  ["portfolio-details-06.html", "/#earlier-work"],
  ["portfolio-details-09.html", "/#earlier-work"],
  ["about.html", "/about/"],
  ["contact.html", "/#contact"],
  ["services.html", "/#work"],
  ["service-details.html", "/#work"],
  ["resume.html", "/resume/"],
];

const stub = (to) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${to}" />
    <link rel="canonical" href="${site}${to}" />
    <title>Redirecting — Danilo Boquet</title>
  </head>
  <body>
    <p>This page moved. <a href="${to}">Continue to the new page</a>.</p>
  </body>
</html>
`;

for (const [file, to] of redirects) {
  fs.writeFileSync(path.join(target, file), stub(to));
}

console.log(`Stubs written: ${redirects.length} files in public/`);
