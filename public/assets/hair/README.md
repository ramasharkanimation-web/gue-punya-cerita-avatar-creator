# Hair assets

16 options currently live here, matching `HAIR_ASSETS` in `lib/assets.ts`:

```
(none)            Botak  (empty file = renders no hair layer at all)
hair_001.png      Shag Berantakan
hair_002.png      Afro
hair_003.png      Hijab Maroon
hair_004.png      Hijab Khaki Bintang
hair_005.png      Hijab Mustard
hair_006.png      Wavy Panjang Ponytail
hair_007.png      Lurus Panjang Jepit
hair_008.png      Bob Oranye Bunga
hair_009.png      Twintail Pink Pita
hair_010.png      Kuncir Dua Kuning
hair_011.png      Kepang Dua Bando Biru
hair_012.png      Sanggul Berantakan
hair_013.png      Spiky Berantakan
hair_014.png      Poni Samping Panjang
hair_015.png      Cokelat Jambul Tebal
```

Rules for adding more:
- Transparent background PNG
- **2000x2000** canvas (same as the body assets in `/public/assets/body/`)
- Positioned the same way as the body layer so the hairline lines up

Stacking order is body -> clothes -> hair (hair renders on top, see
`AvatarMaker.tsx`), so long styles drape naturally over the collar.

Add more styles or rename any of these anytime by editing `HAIR_ASSETS`
in `lib/assets.ts` — the picker grid updates automatically.
