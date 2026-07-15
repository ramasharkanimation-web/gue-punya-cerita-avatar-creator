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
 *
 * NOTE: display names are just zero-padded numbers ("01", "02", ...) per
 * request — swap in real names anytime by editing the `name` field below.
 * ---------------------------------------------------------------------------
 */

export type AssetCategory = "background" | "body" | "hair" | "clothes";

export interface AssetItem {
  /** Stable id used in component state, e.g. "body_003" */
  id: string;
  /** Label shown in the picker UI */
  name: string;
  /** Filename inside /public/assets/<category>/ — empty string = no layer ("None") */
  file: string;
}

/* ============================================================================
   BACKGROUND — the BOTTOM layer, sits behind everything else.
   ========================================================================= */
export const BACKGROUND_ASSETS: AssetItem[] = [
  { id: "bg_none", name: "—", file: "" },
  { id: "bg_001", name: "01", file: "BG_001.png" },
  { id: "bg_002", name: "02", file: "BG_002.png" },
  { id: "bg_003", name: "03", file: "BG_003.png" },
  { id: "bg_004", name: "04", file: "BG_004.png" },
  { id: "bg_005", name: "05", file: "BG_005.png" },
  { id: "bg_006", name: "06", file: "BG_006.png" },
  { id: "bg_007", name: "07", file: "BG_007.png" },
  { id: "bg_008", name: "08", file: "BG_008.png" }
];

/* ============================================================================
   BODY — base face/body. Sits above the background, below clothes/hair.
   ========================================================================= */
export const BODY_ASSETS: AssetItem[] = [
  { id: "body_001", name: "01", file: "body_001.png" },
  { id: "body_002", name: "02", file: "body_002.png" },
  { id: "body_003", name: "03", file: "body_003.png" },
  { id: "body_004", name: "04", file: "body_004.png" },
  { id: "body_005", name: "05", file: "body_005.png" },
  { id: "body_006", name: "06", file: "body_006.png" },
  { id: "body_007", name: "07", file: "body_007.png" },
  { id: "body_008", name: "08", file: "body_008.png" },
  { id: "body_009", name: "09", file: "body_009.png" },
  { id: "body_010", name: "10", file: "body_010.png" }
];

/* ============================================================================
   HAIR — the TOP layer (rendered above clothes), so long styles can drape
   naturally over the shoulders/collar.
   ========================================================================= */
export const HAIR_ASSETS: AssetItem[] = [
  { id: "hair_none", name: "—", file: "" },
  { id: "hair_001", name: "01", file: "hair_001.png" },
  { id: "hair_002", name: "02", file: "hair_002.png" },
  { id: "hair_003", name: "03", file: "hair_003.png" },
  { id: "hair_004", name: "04", file: "hair_004.png" },
  { id: "hair_005", name: "05", file: "hair_005.png" },
  { id: "hair_006", name: "06", file: "hair_006.png" },
  { id: "hair_007", name: "07", file: "hair_007.png" },
  { id: "hair_008", name: "08", file: "hair_008.png" },
  { id: "hair_009", name: "09", file: "hair_009.png" },
  { id: "hair_010", name: "10", file: "hair_010.png" },
  { id: "hair_011", name: "11", file: "hair_011.png" },
  { id: "hair_012", name: "12", file: "hair_012.png" },
  { id: "hair_013", name: "13", file: "hair_013.png" },
  { id: "hair_014", name: "14", file: "hair_014.png" },
  { id: "hair_015", name: "15", file: "hair_015.png" }
];

/* ============================================================================
   CLOTHES — the MIDDLE layer: above body, below hair (adjust the stacking
   order in AvatarMaker.tsx / downloadAvatar() if a hoodie-style asset needs
   to cover the head and should render above hair instead).
   ========================================================================= */
export const CLOTHES_ASSETS: AssetItem[] = [
  { id: "clothes_001", name: "01", file: "clothes_001.png" },
  { id: "clothes_002", name: "02", file: "clothes_002.png" },
  { id: "clothes_003", name: "03", file: "clothes_003.png" },
  { id: "clothes_004", name: "04", file: "clothes_004.png" },
  { id: "clothes_005", name: "05", file: "clothes_005.png" },
  { id: "clothes_006", name: "06", file: "clothes_006.png" },
  { id: "clothes_007", name: "07", file: "clothes_007.png" },
  { id: "clothes_008", name: "08", file: "clothes_008.png" },
  { id: "clothes_009", name: "09", file: "clothes_009.png" },
  { id: "clothes_010", name: "10", file: "clothes_010.png" },
  { id: "clothes_011", name: "11", file: "clothes_011.png" },
  { id: "clothes_012", name: "12", file: "clothes_012.png" },
  { id: "clothes_013", name: "13", file: "clothes_013.png" },
  { id: "clothes_014", name: "14", file: "clothes_014.png" },
  { id: "clothes_015", name: "15", file: "clothes_015.png" },
  { id: "clothes_016", name: "16", file: "clothes_016.png" },
  { id: "clothes_017", name: "17", file: "clothes_017.png" },
  { id: "clothes_018", name: "18", file: "clothes_018.png" },
  { id: "clothes_019", name: "19", file: "clothes_019.png" }
];

export const ASSET_CANVAS_SIZE = 2000;

export function assetsFor(category: AssetCategory): AssetItem[] {
  if (category === "background") return BACKGROUND_ASSETS;
  if (category === "body") return BODY_ASSETS;
  if (category === "hair") return HAIR_ASSETS;
  return CLOTHES_ASSETS;
}

export function publicPath(category: AssetCategory, file: string): string {
  if (!file) return "";
  return `/assets/${category}/${file}`;
}
