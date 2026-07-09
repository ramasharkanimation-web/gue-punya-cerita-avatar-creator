/**
 * lib/assets.ts
 * ---------------------------------------------------------------------------
 * Single source of truth for every avatar layer option.
 *
 * To add a new option: drop the PNG into the matching folder under
 * /public/assets/<category>/ and add one entry to the array below with the
 * EXACT filename. Nothing else needs to change — the UI and the canvas
 * exporter both read from these arrays.
 *
 * Asset rules (see the README.md inside each /public/assets/<category>/
 * folder for the long version):
 *   - Transparent background PNG
 *   - Same square canvas size for every file in a category (body assets
 *     here are 2000x2000 — keep hair/clothes at 2000x2000 too so they align)
 *   - Character centered the same way in every file so layers line up
 * ---------------------------------------------------------------------------
 */

export type AssetCategory = "body" | "hair" | "clothes";

export interface AssetItem {
  /** Stable id used in component state, e.g. "body_003" */
  id: string;
  /** Label shown in the picker UI */
  name: string;
  /** Filename inside /public/assets/<category>/ — empty string = no layer ("None") */
  file: string;
}

/* ============================================================================
   BODY — base face/body. This is the bottom layer.
   ========================================================================= */
export const BODY_ASSETS: AssetItem[] = [
  { id: "body_001", name: "Cengiran Lebar", file: "body_001.png" },
  { id: "body_002", name: "Kalem Merona", file: "body_002.png" },
  { id: "body_003", name: "Nyengir Pede", file: "body_003.png" },
  { id: "body_004", name: "Ketawa Ngakak", file: "body_004.png" },
  { id: "body_005", name: "Senyum Tipis", file: "body_005.png" },
  { id: "body_006", name: "Cengiran Riang", file: "body_006.png" },
  { id: "body_007", name: "Kacamata Kalem", file: "body_007.png" },
  { id: "body_008", name: "Ceria Merona", file: "body_008.png" },
  { id: "body_009", name: "Ketawa Lepas", file: "body_009.png" },
  { id: "body_010", name: "Kacamata Manis", file: "body_010.png" }
];

/* ============================================================================
   HAIR — the TOP layer (rendered above clothes), so long styles can drape
   naturally over the shoulders/collar.
   NOTE: placeholder list. Files don't exist yet — upload PNGs to
   /public/assets/hair/ using these exact filenames (or edit the filenames
   here to match whatever you upload). The "Botak" entry has an empty file,
   meaning: render no hair layer at all.
   ========================================================================= */
export const HAIR_ASSETS: AssetItem[] = [
  { id: "hair_none", name: "Botak", file: "" },
  { id: "hair_001", name: "Pendek", file: "hair_001.png" },
  { id: "hair_002", name: "Panjang", file: "hair_002.png" },
  { id: "hair_003", name: "Kuncir", file: "hair_003.png" },
  { id: "hair_004", name: "Keriting", file: "hair_004.png" },
  { id: "hair_005", name: "Poni", file: "hair_005.png" },
  { id: "hair_006", name: "Undercut", file: "hair_006.png" }
];

/* ============================================================================
   CLOTHES — the MIDDLE layer: above body, below hair (adjust the stacking
   order in AvatarMaker.tsx / downloadAvatar() if a hoodie-style asset needs
   to cover the head and should render above hair instead).
   NOTE: placeholder list, same idea as hair above.
   ========================================================================= */
export const CLOTHES_ASSETS: AssetItem[] = [
  { id: "clothes_001", name: "Kaos Polos", file: "clothes_001.png" },
  { id: "clothes_002", name: "Hoodie", file: "clothes_002.png" },
  { id: "clothes_003", name: "Kemeja", file: "clothes_003.png" },
  { id: "clothes_004", name: "Jaket", file: "clothes_004.png" },
  { id: "clothes_005", name: "Turtleneck", file: "clothes_005.png" },
  { id: "clothes_006", name: "Dress", file: "clothes_006.png" }
];

export const ASSET_CANVAS_SIZE = 2000;

export function assetsFor(category: AssetCategory): AssetItem[] {
  if (category === "body") return BODY_ASSETS;
  if (category === "hair") return HAIR_ASSETS;
  return CLOTHES_ASSETS;
}

export function publicPath(category: AssetCategory, file: string): string {
  if (!file) return "";
  return `/assets/${category}/${file}`;
}
