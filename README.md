# Positive Plan for Corby: Interactive Map

**Live map:** https://madlockuk.github.io/Corby-Positive-Plan/ (once GitHub Pages is switched on, see [Publishing](#publishing))

One interactive Mapbox map that brings together every map from the Positive Plan for Corby films (the Greater Corby Growth Area, the Northern Orbital Road and road upgrades, village buses, cycle routes, rail and green space), plus the plan's places for health, education, housing, net zero, the arts and policing. Every part, line and marker links to that part of the plan on [northnorthantslibdems.org.uk](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan).

It is built the same way as the [Corby Pride in Place map](https://madlockuk.github.io/corby-pride-in-place/): a panel on the left, the map on the right (map on top on phones), live open-data layers, a postcode finder and a base map switcher.

## What the map shows

| Part | Page | On the map |
|---|---|---|
| 1. Vision and the Greater Corby Growth Area | [vision-and-growth-area](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/vision-and-growth-area) | Corby and its 14 parishes (official ONS parish boundaries, loaded live); Corby West, about 4,500 homes |
| 2. Corby as a Central Actor | [corby-as-a-central-actor](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/corby-as-a-central-actor) | Key points and link only |
| 3. Housing and Brownfield Regeneration | [housing](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/housing) | Priors Hall Park, Weldon Park; brownfield sites as a live layer |
| 4. Health | [health](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/health) | Willowbrook health campus, East Corby Health, Kettering General |
| 5. Education and SEND | [education-and-send](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/education-and-send) | Tresham College |
| 6. Roads, Highways and Buses | [roads-and-buses](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/roads-and-buses) | Northern Orbital Road, A6003/A43/A427 upgrades, Dingley, West Corby and Caldecott bypasses, St Luke's Road link, bus priority, Exeter estate loop, station interchange, every village by bus service |
| 7. Active Travel | [active-travel](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/active-travel) | Today's cycle paths, the council's planned routes, the plan's new routes, Pen Green and Flinders Close bridges |
| 8. Rail Connectivity | [rail](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/rail) | Corby's second platform, Welland Valley Rail (Seaton to Luffenham), lines to Kettering, Oakham, Melton, Stamford and Peterborough |
| 9. Green and Blue Infrastructure | [green-and-blue-infrastructure](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/green-and-blue-infrastructure) | Pen Green Lakes Country Park, Willow Brook, existing parks and reserves, green wedges, Rockingham Forest; storm overflows as a live layer |
| 10. Sustainability and Quality of Life | [sustainability-and-quality-of-life](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/sustainability-and-quality-of-life) | Warm-homes-first estates, Saturday market |
| 11. Investing in the Arts | [arts](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/arts) | The Core at Corby Cube |
| 12. Community Safety | [community-safety](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/community-safety) | Elizabeth Street (closed 2017); crime and neighbourhood police teams as live layers |
| 13. Funding, Delivery and Governance | [funding-delivery-and-governance](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/funding-delivery-and-governance) | Key points and link only |
| 14. How to Engage | [how-to-engage](https://www.northnorthantslibdems.org.uk/in-your-area/corby/positive-plan/how-to-engage) | Key points and link only |

Tap a part in the panel to read its key points, zoom to it and fade everything else. Untick a part to hide it. Click any line or marker for what the plan proposes and a link to that part.

**Find your postcode** says whether it's in the Greater Corby Growth Area (by its parish, from postcodes.io) and lists what the plan proposes within 2 km.

## Sharing and embedding

- **Link previews.** The page has Open Graph and X (Twitter) card tags with a 1200 × 630 preview image ([`img/preview.png`](img/preview.png)), so the link shows a card on Facebook, X, Threads, LinkedIn, Bluesky and WhatsApp.
- **Link to one part.** Add `?part=` with the part's number or page name, e.g. `https://madlockuk.github.io/Corby-Positive-Plan/?part=6` or `?part=roads-and-buses`. The panel's **Share or embed** box gives the link for whichever part is open.
- **Embed on a website.** Add `embed=1` for a compact view (map plus a small card with a part picker, the page link and the imprint), and put it in an iframe:

  ```html
  <iframe src="https://madlockuk.github.io/Corby-Positive-Plan/?part=6&embed=1" title="Positive Plan for Corby map: Part 6, Roads, Highways and Buses" width="100%" height="600" style="border:0;max-width:100%" loading="lazy" allowfullscreen></iframe>
  ```

  Each plan page can carry the map for its own part this way. The panel's **Share or embed** box writes this code for you.
- **oEmbed.** The page advertises [`oembed.json`](oembed.json) (`<link rel="alternate" type="application/json+oembed">`), so sites that embed by pasting a URL and support oEmbed discovery can turn the link into the map.

Website builders whose embed block only accepts a fixed list of providers (Facebook, Flickr, Instagram, PDF, Pinterest, Reddit, Threads, TikTok, Twitch, X, Vimeo, YouTube and similar) won't take a link from any other site, however it's built. On those, use an HTML / iframe block with the code above.

## Live open data layers

Ticked in the panel and fetched in the browser, nothing stored:

| Layer | Source | Plan part |
|---|---|---|
| Police-recorded crime and anti-social behaviour (Corby's four town wards) | [data.police.uk](https://data.police.uk/docs/) | 12 |
| Police neighbourhood teams and priorities | data.police.uk | 12 |
| Storm overflows: live status | Anglian Water via Stream (ArcGIS) | 9 |
| Planning designations: brownfield land, conservation areas, listed buildings, tree protection, ancient woodland, Article 4 | [planning.data.gov.uk](https://www.planning.data.gov.uk/docs) | 3 |

The Greater Corby Growth Area boundaries also load live, from the ONS parish boundaries (`PARNCP_DEC_2025_EW_BFC`). If that service is down, the map shows Corby's four town wards instead and says so.

## Editing the map

All map features are in [`data/positive-plan.geojson`](data/positive-plan.geojson). Each feature has:

- `part` (1 to 14) and `url` (that part's page), plus `also` for other parts it belongs to
- `layer` (`road`, `bus`, `cycle`, `rail`, `brook`, `growth`, `village`, `point`, `station`, `label`, `town`) and `status` (`existing`, `council`, `proposed`, `upgrade`, `study`, `planned`, and for villages `daily`, `thin`, `weekly`), which set the style
- `name`, a plain-English `desc`, and a `note` when the position is approximate (`approx: true`)

After editing:

```sh
node scripts/check-data.js   # every feature linked to a part and described
node scripts/embed-data.js   # copies the data into index.html
```

The parts' key points are in the `PARTS` list near the top of the script in `index.html`.

### Plain English

Every feature, part and live layer is explained in plain English for a resident with no planning background, and jargon (SEND, PCSO, Article 4) is spelled out. `scripts/check-data.js` fails if a feature has no description.

## How it was drawn

- Routes on existing roads and paths were traced with Mapbox Directions and simplified.
- New roads, new paths, the rail link, the Willow Brook band and the Corby West outline are sketched from the films' descriptions and marked indicative. A feasibility study would set the real routes.
- Rail lines are simplified.
- Village bus service is from published timetables, September 2026 (film PP06b).

## Publishing

The site is plain static files, so GitHub Pages serves it as it is:

1. Merge this branch into `main`.
2. In the repository, go to **Settings → Pages**, choose **Deploy from a branch**, then `main` and `/ (root)`.
3. The map appears at https://madlockuk.github.io/Corby-Positive-Plan/.

It uses the same public Mapbox token as the Pride in Place map. If the token is restricted by URL in the Mapbox account, add `https://madlockuk.github.io/Corby-Positive-Plan/*`.

## Sources

- Positive Plan for Corby and its film series, October to December 2026
- Parish and ward boundaries: ONS Open Geography Portal. Source: Office for National Statistics licensed under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). Contains OS data © Crown copyright and database right 2025.
- Live layers: data.police.uk (Home Office, OGL v3); Anglian Water Services storm overflow data (CC BY 4.0); Planning Data Platform (OGL v3); postcodes.io (ONS Postcode Directory, OGL)
- Base map © Mapbox © OpenStreetMap contributors

Published and promoted by A Lock (Liberal Democrat) all contactable at 11 Croyde Avenue, Corby NN18 8EG
