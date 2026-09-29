# INTIK — site concept v1

Stack: **React + Vite + plain CSS**. No backend, no extra libraries.
Cart persists in `localStorage`; checkout opens WhatsApp with a pre-filled order.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Pages (hash routing, no router lib)

| Route          | Contenu                                                            |
| -------------- | ------------------------------------------------------------------ |
| `#/`           | Hero → marquee → incontournables → menu preview → histoire → social proof → restaurants → CTA |
| `#/menu`       | Carte interactive (tabs Burgers / Loaded Fries / Pasta / Sides / Drinks) |
| `#/commande`   | Panier + infos client + génération du message WhatsApp             |
| `#/restaurants`| Branches, carte, itinéraire, téléphone                             |

## Design tokens (sampled from Intik's own assets)

| Token      | Value      | Source                                  |
| ---------- | ---------- | --------------------------------------- |
| `--accent` | `#FB6F03`  | mascot's shirt (logo pixels)            |
| `--ink`    | `#0D0C0B`  | wordmark / print (sampled #000)         |
| `--paper`  | `#FFFFFF`  | their IG post canvas                    |
| `--bg`     | `#F5F3EE`  | warm off-white page ground              |
| Display    | Anton      | wordmark energy (INTIK)                 |
| Serif      | Abril Fatface | menu headings / product titles      |
| Body       | Inter      | UI, descriptions, buttons               |

Radius: pill buttons / 20px cards / 24px media / 14px inputs. 8px spacing grid.
Rule: 90% neutral, 8% dark, 2% accent.

## Edit business data

Everything lives in **`src/data.js`**: menu items + prices (transcribed from the
official menu screenshots), best sellers, IG posts, branches, phone/WhatsApp,
Instagram handle, story copy.

### TODO before launch (owner input needed)
- [ ] Confirm exact Instagram handle (currently placeholder `@intik.burgers`)
- [ ] Real address(es) + opening hours per branch
- [ ] Extra branches (each branch can carry its own WhatsApp number later)
- [ ] Owner's real story (replace placeholder in `STORY`)
- [ ] Fresh product photos for pasta / sides / drinks (typo cards used meanwhile)

## Assets

`public/img/` — cropped from Intik's real Instagram posts & packaging photos:
`food-*.jpg` (food zone crops), `post-*.jpg` (full square posts for the IG grid),
`logo.png` (oval sticker, background removed), `bag1/2.jpg` (packaging).
