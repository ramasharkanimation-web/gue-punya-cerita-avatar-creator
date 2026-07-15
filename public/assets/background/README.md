# Background assets

8 backgrounds currently live here, matching `BACKGROUND_ASSETS` in `lib/assets.ts`:

```
(none)          "—"  (empty file = no background, falls back to white on export)
BG_001.png      01
BG_002.png      02
BG_003.png      03
BG_004.png      04
BG_005.png      05
BG_006.png      06
BG_007.png      07
BG_008.png      08
```

Rules for adding more:
- **2000x2000** canvas (same as body/hair/clothes)
- Can be fully opaque (backgrounds don't need transparency, unlike other layers)

Stacking order is background -> body -> clothes -> hair (background is the
bottom-most layer, see `AvatarMaker.tsx`).

Add more backgrounds anytime by editing `BACKGROUND_ASSETS` in
`lib/assets.ts` — the picker grid updates automatically.
