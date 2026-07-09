# Clothes assets

Drop transparent PNGs here matching the filenames listed in `lib/assets.ts`
under `CLOTHES_ASSETS`, currently:

```
clothes_001.png   Kaos Polos
clothes_002.png   Hoodie
clothes_003.png   Kemeja
clothes_004.png   Jaket
clothes_005.png   Turtleneck
clothes_006.png   Dress
```

Rules:
- Transparent background PNG
- **2000x2000** canvas (same as the body assets in `/public/assets/body/`)
- Positioned the same way as the body layer so the collar/shoulders line up

Stacking order is body → clothes → hair (see `AvatarMaker.tsx`), so long
hairstyles drape over the collar naturally. If a clothing item needs to
cover the head (e.g. a hood-up hoodie), you'll want to either draw that
hood as part of a hair-layer asset instead, or adjust the layer order in
`downloadAvatar()` and the preview JSX in `AvatarMaker.tsx`.

Want different names or more styles? Edit `CLOTHES_ASSETS` in
`lib/assets.ts` — the picker grid updates automatically.
