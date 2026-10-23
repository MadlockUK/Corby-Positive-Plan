// Checks data/positive-plan.geojson before it is embedded: every feature must say which part of the plan it belongs to,
// link to that part's page, and explain itself in plain English (see README, "Plain English").
// Usage: node scripts/check-data.js
const fs = require("fs");
const path = require("path");
const PLAN = "https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/";
const SLUGS = { 1: "vision-and-growth-area", 2: "corby-as-a-central-actor", 3: "housing", 4: "health", 5: "education-and-send", 6: "roads-and-buses", 7: "active-travel",
  8: "rail", 9: "green-and-blue-infrastructure", 10: "sustainability-and-quality-of-life", 11: "arts", 12: "community-safety", 13: "funding-delivery-and-governance", 14: "how-to-engage" };
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "data", "positive-plan.geojson"), "utf8"));
const problems = [];
const ids = new Set();
data.features.forEach((f, i) => {
  const p = f.properties || {}, at = `feature ${i} (${p.id || "no id"})`;
  if (!p.id) problems.push(`${at}: no id`);
  else if (ids.has(p.id)) problems.push(`${at}: duplicate id`); else ids.add(p.id);
  if (!SLUGS[p.part]) problems.push(`${at}: part must be 1-14`);
  else if (p.url !== PLAN + SLUGS[p.part]) problems.push(`${at}: url should be ${PLAN + SLUGS[p.part]}`);
  (p.also || []).forEach(n => { if (!SLUGS[n]) problems.push(`${at}: "also" has unknown part ${n}`); });
  if (!p.name) problems.push(`${at}: no name`);
  if (!p.desc && p.layer !== "station") problems.push(`${at}: no plain-English description (desc)`);
  if (p.approx && !p.note) problems.push(`${at}: marked approximate but has no note saying so`);
});
if (problems.length) { console.error(problems.join("\n")); process.exit(1); }
console.log(`OK: ${data.features.length} features, all linked to a part of the plan and described.`);
