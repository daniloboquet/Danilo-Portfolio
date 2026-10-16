// Generates the 1200x630 Open Graph card used site-wide (public/og.png).
// Run: node scripts/generate-og.mjs
import sharp from "sharp";

const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#fafaf7"/>
  <rect x="0" y="0" width="1200" height="8" fill="#2e5bff"/>
  <text x="80" y="150" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#6b6e76" letter-spacing="3">DANILO BOQUET — SENIOR PRODUCT DESIGNER</text>
  <text x="80" y="300" font-family="Helvetica, Arial, sans-serif" font-size="62" font-weight="700" fill="#141519">I design complex platforms</text>
  <text x="80" y="378" font-family="Helvetica, Arial, sans-serif" font-size="62" font-weight="700" fill="#141519">that feel effortless.</text>
  <text x="80" y="480" font-family="Helvetica, Arial, sans-serif" font-size="28" fill="#565a64">SusTern AI-Commerce · TPL Platform · noryX</text>
  <text x="80" y="566" font-family="Helvetica, Arial, sans-serif" font-size="24" fill="#6b6e76">danilo-designer.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("public/og.png written (1200x630)");
