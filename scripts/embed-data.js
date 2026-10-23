// Copies data/positive-plan.geojson into index.html (between the DATA:start and DATA:end markers),
// so the page works on its own, including when opened straight from disk.
// Usage: node scripts/embed-data.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "data", "positive-plan.geojson"), "utf8"));
const file = path.join(root, "index.html");
const html = fs.readFileSync(file, "utf8");
const re = /(\/\/ DATA:start\n)[\s\S]*?(\n\/\/ DATA:end)/;
if (!re.test(html)) { console.error("DATA markers not found in index.html"); process.exit(1); }
fs.writeFileSync(file, html.replace(re, (_, a, b) => a + "const DATA = " + JSON.stringify(data) + ";" + b));
console.log("Embedded " + data.features.length + " features into index.html");
