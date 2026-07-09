# Hair assets

Drop transparent PNGs here matching the filenames listed in `lib/assets.ts`
under `HAIR_ASSETS`, currently:

```
hair_001.png   Pendek
hair_002.png   Panjang
hair_003.png   Kuncir
hair_004.png   Keriting
hair_005.png   Poni
hair_006.png   Undercut
```

Rules:
- Transparent background PNG
- **2000x2000** canvas (same as the body assets in `/public/assets/body/`)
  so every layer lines up without extra positioning code
- Character/hair positioned the same way as the body layer — compare
  against `body_001.png` while drawing to keep alignment consistent

Want different names or more styles? Just edit the `HAIR_ASSETS` array in
`lib/assets.ts` — the id, the label shown in the UI, and the filename are
all defined there. The picker grid updates automatically.

Until a file exists, its slot in the UI shows a dashed "belum ada"
placeholder and is silently skipped when exporting — nothing breaks.
