# GPC Avatar Maker

Avatar/profile-pic builder for **Gue Punya Cerita**. Layered PNG system:
base body → clothes → hair, downloadable as PNG, with an editable header
(site title + logo) right on the page.

## Stack

Next.js 14 (App Router) + TypeScript + Tailwind CSS. No backend, no
database — everything runs client-side, so it deploys as a static/edge
app on Vercel with zero config.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/                  Pages, layout, global styles
components/
  Header.tsx           Editable title + logo upload (saved to localStorage)
  AvatarMaker.tsx       Tabs, live layered preview, randomize, PNG export
  AssetGrid.tsx          Thumbnail picker grid (shared by all 3 categories)
lib/
  assets.ts             Single source of truth: every body/hair/clothes option
public/assets/
  body/                  10 base body PNGs (already included)
  hair/                  Empty — add your own PNGs (see README.md inside)
  clothes/               Empty — add your own PNGs (see README.md inside)
```

## Adding hair & clothes assets

`lib/assets.ts` currently lists placeholder filenames for hair and
clothes (e.g. `hair_001.png`) that don't exist on disk yet. The UI
handles this gracefully — missing options show a dashed "belum ada"
placeholder in the picker and are just skipped during export.

To wire up real assets:

1. Export your artwork as transparent PNGs, **2000x2000**, aligned the
   same way as `public/assets/body/body_001.png`.
2. Drop the files into `public/assets/hair/` or `public/assets/clothes/`
   using the filenames already listed in `lib/assets.ts` (or edit that
   file to match whatever filenames you used).
3. Refresh — no other code changes needed.

To add more style *options* (not just fill in the placeholders), add a
new object to the relevant array in `lib/assets.ts`:

```ts
{ id: "hair_007", name: "Mohawk", file: "hair_007.png" }
```

## Editing the header on the live site

Click the round logo badge top-left to upload your own logo image, or
click directly on the title text to edit it in place. Both are saved to
the visitor's browser (`localStorage`) so it's a real editable header,
not just for you — every visitor can customize their own view, but if
you want the header locked to specific branding for everyone, hardcode
`DEFAULT_TITLE` and remove the upload button in `components/Header.tsx`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset auto-detects as Next.js — no extra config needed.
4. Deploy.

## Notes / next steps

- Body assets are already square (2000x2000), matching `ASSET_CANVAS_SIZE`
  in `lib/assets.ts`. Keep hair/clothes at the same size.
- Download exports at full 2000x2000 resolution regardless of on-screen
  preview size.
- No color-tinting system — each style is a fully painted PNG. If you
  want color variants of the same hairstyle, add them as separate
  entries (e.g. `hair_001_black.png`, `hair_001_brown.png`).
