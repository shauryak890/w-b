# Whites & Brights — website

Marketing site for **Whites & Brights** (WNB Cleantech Pvt Ltd), a laundry, dry cleaning and shoe care business with three outlets in Patna.

Live pages: Home, Services & prices, Franchise, About, CSR (Do Roti), Associate, Careers, Contact, FAQ, Help Centre, Delete Account, Privacy Policy and Terms of Service.

## Stack

- React 18 (Create React App) + React Router 7
- Chakra UI 2 for components and theming, Framer Motion for animation
- React Three Fiber / three.js for the 3D bubble hero (lazy-loaded)
- Phosphor icons via `react-icons/pi`
- Forms post to Google Apps Script (Google Sheets) — there is no backend

## Getting started

```bash
cd client
npm install
npm start
```

The site runs at http://localhost:3000. From the repo root, `npm start` and `npm run build` forward to the client.

### Environment

| Variable | Used by | Purpose |
| --- | --- | --- |
| `REACT_APP_ASSOCIATE_SHEETS_URL` | Associate form | Google Apps Script URL that receives associate applications |

Put it in `client/.env` (not committed). The Contact form's script URL is set in `client/src/pages/Contact.js`.

## Project structure

```
client/
  public/            index.html, favicon, manifest, Netlify _redirects
  src/
    theme/           Chakra theme — colours, fonts, shadows, button variants
    components/      Navbar, Footer, PageHero, LegalLayout, FaqList, AppPromo,
                     ui.js (shared primitives: Accent, Eyebrow, ArrowButton, Bezel, …)
    data/            business.js (outlets, phone, reviews), services.js (price lists), faq.js
    hooks/           usePageMeta (per-page title + meta description)
    pages/           one file per route; policies/ for legal pages
```

Business facts — phone number, outlets, Google ratings, prices and FAQ answers — live in `client/src/data/`. Update them there rather than in page files.

## Design system

"Fresh linen": off-white base, deep teal-ink (`ink.900`) for dark sections and primary buttons, and the logo cyan (`#00B4C5`) as the only accent. Headings use Geist with Instrument Serif italic for emphasis (`<Accent>`). Build new sections from the shared pieces in `components/ui.js` and `components/PageHero.js` so pages stay consistent.

## Deployment

Netlify builds `client/` with `npm run build` and publishes `client/build`. `public/_redirects` handles SPA routing and sends old APK download links to Google Play.

Netlify runs the build with `CI=true`, which turns ESLint warnings (such as an unused import) into build failures. Check locally before pushing:

```bash
cd client && CI=true npx react-scripts build
```
