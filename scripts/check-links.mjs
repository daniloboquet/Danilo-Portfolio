// Verifies that every internal link in dist/ resolves to a built file.
// Run after `npm run build`: npm run check:links
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");

if (!fs.existsSync(dist)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
const missing = new Map();

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const clean = href.split("#")[0].split("?")[0];
    if (!clean || clean === "/") continue;

    const target = path.join(dist, clean);
    const resolved =
      fs.existsSync(target) &&
      (fs.statSync(target).isDirectory()
        ? fs.existsSync(path.join(target, "index.html"))
        : true);
    const withIndex = !resolved && fs.existsSync(path.join(target, "index.html"));

    if (!resolved && !withIndex) {
      missing.set(clean, (missing.get(clean) ?? 0) + 1);
    }
  }
}

if (missing.size === 0) {
  console.log(`Link check passed — ${htmlFiles.length} pages, no broken internal links.`);
} else {
  console.error("Broken internal links:");
  for (const [url, count] of missing) {
    console.error(`  ${url} (${count}\u00d7)`);
  }
  process.exit(1);
}
