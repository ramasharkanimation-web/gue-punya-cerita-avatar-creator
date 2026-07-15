# Clothes assets

19 styles currently live here, matching `CLOTHES_ASSETS` in `lib/assets.ts`:

```
clothes_001.png   Kemeja Kerah Krem
clothes_002.png   Turtleneck Navy
clothes_003.png   Hoodie Mustard
clothes_004.png   Kaos Tali Pink
clothes_005.png   Rompi Argyle
clothes_006.png   Gaun Merah Pita Hati
clothes_007.png   Jaket Bulu Cokelat
clothes_008.png   Gaun Krem Bertitik
clothes_009.png   Kemeja Dasi Berlian
clothes_010.png   Gaun Pink Emas
clothes_011.png   Overall Denim
clothes_012.png   Atasan Ruffle Peach
clothes_013.png   Sailor Pita Biru
clothes_014.png   Gaun Hijau Bros Hati
clothes_015.png   Gaun Maroon Ruffle
clothes_016.png   Kaos Tali Coral
clothes_017.png   Jaket Varsity Navy
clothes_018.png   Jaket Ransel Krem
clothes_019.png   Flanel Kotak Maroon
```

Rules for adding more:
- Transparent background PNG
- **2000x2000** canvas (same as the body assets in `/public/assets/body/`)
- Positioned the same way as the body layer so the collar/shoulders line up

Stacking order is body -> clothes -> hair (see `AvatarMaker.tsx`), so long
hairstyles drape over the collar naturally. If a clothing item needs to
cover the head (e.g. a hood-up hoodie), you'll want to either draw that
hood as part of a hair-layer asset instead, or adjust the layer order in
`downloadAvatar()` and the preview JSX in `AvatarMaker.tsx`.

Add more styles or rename any of these anytime by editing `CLOTHES_ASSETS`
in `lib/assets.ts` — the picker grid updates automatically.
