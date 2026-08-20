# Subrosa Beauty

A 3D, motion-driven marketing site for **Subrosa Beauty** — vegan lip gloss.
Built with React + Vite, [Framer Motion](https://www.framer.com/motion/) for
page/scroll animation, and [react-three-fiber](https://docs.pmnd.rs/react-three-fiber)
for the procedurally-built, interactive 3D lip gloss bottle (no external `.glb`
model or HDRI needed — it's all primitives + lights, so it works fully offline).

## Pages

1. **Our Story** (`/`) — brand story, "sub rosa" narrative, founder photo, values.
2. **Speciality** (`/speciality`) — the vegan formula, ingredients, free-from claims, application ritual.
3. **Shades** (`/shades`) — interactive 3D shade picker (click a swatch, the bottle's liquid recolors) + full grid.
4. **Buy Now** (`/buy-now`) — shop grid, bundle offer, slide-in cart drawer, checkout form.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Adding your real brand assets

I couldn't pull the logo/product images you pasted into chat as files, so the
site currently ships with a **recreated "SB" monogram** (SVG, in
`src/components/Logo.jsx`) and a **placeholder founder photo** (gradient +
monogram, in `src/components/PhotoFrame.jsx`) using your gold/cream palette.
Swap in the real files like this:

- **Logo**: drop your logo file at `public/brand/logo.svg` (or `.png`), then
  replace the `<svg>` in `src/components/Logo.jsx` with
  `<img src="/brand/logo.svg" ... />`.
- **Founder photo**: drop the photo at `public/brand/founder.jpg`, then on the
  Our Story page (`src/pages/BrandStory.jsx`) change
  `<PhotoFrame />` to `<PhotoFrame src="/brand/founder.jpg" />`.
- **Product photography**: if you'd rather use your real bottle photos instead
  of the procedural 3D bottle / CSS vial graphics, drop images at
  `public/brand/shades/<shade-id>.jpg` and swap them into
  `src/components/GlossVial.jsx` / the shade cards.

## Shades

Shade names, colors, and copy in `src/data/shades.js` are pulled from your
product line photo: Cafe Confessions, Pure Secret, Rose Whisper, Cerise Éclat,
Garden Secret. Prices ($22 / $92 for the full set) are placeholders — update
them in `src/pages/BuyNow.jsx`.

## Checkout

The "Buy Now" page is a fully working cart UI (add/remove, bundle pricing,
totals) but the checkout form is a placeholder — it doesn't charge a card. To
go live, wire the form submit in `src/pages/BuyNow.jsx` to a real processor
(Stripe Checkout, Shopify Buy Button, etc.).

## Deploying

This is a static Vite build — `npm run build` outputs `dist/`, which can be
deployed as-is to Vercel, Netlify, Cloudflare Pages, or any static host.
