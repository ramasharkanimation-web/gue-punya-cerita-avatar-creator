"use client";

import { useMemo, useState } from "react";
import {
  ASSET_CANVAS_SIZE,
  BACKGROUND_ASSETS,
  BODY_ASSETS,
  HAIR_ASSETS,
  CLOTHES_ASSETS,
  publicPath
} from "@/lib/assets";
import AssetGrid from "./AssetGrid";

type Tab = "background" | "body" | "hair" | "clothes";

function randomOf<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Loads an <img> and resolves null instead of rejecting if the file 404s,
 * so a missing hair/clothes asset just gets skipped on export instead of
 * breaking the download. */
function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export default function AvatarMaker() {
  const [tab, setTab] = useState<Tab>("background");
  const [backgroundId, setBackgroundId] = useState(BACKGROUND_ASSETS[1]?.id ?? BACKGROUND_ASSETS[0].id);
  const [bodyId, setBodyId] = useState(BODY_ASSETS[0].id);
  const [hairId, setHairId] = useState(HAIR_ASSETS[0].id);
  const [clothesId, setClothesId] = useState(CLOTHES_ASSETS[0].id);
  const [downloading, setDownloading] = useState(false);

  const background = useMemo(
    () => BACKGROUND_ASSETS.find((a) => a.id === backgroundId)!,
    [backgroundId]
  );
  const body = useMemo(() => BODY_ASSETS.find((a) => a.id === bodyId)!, [bodyId]);
  const hair = useMemo(() => HAIR_ASSETS.find((a) => a.id === hairId)!, [hairId]);
  const clothes = useMemo(
    () => CLOTHES_ASSETS.find((a) => a.id === clothesId)!,
    [clothesId]
  );

  function randomize() {
    setBackgroundId(randomOf(BACKGROUND_ASSETS).id);
    setBodyId(randomOf(BODY_ASSETS).id);
    setHairId(randomOf(HAIR_ASSETS).id);
    setClothesId(randomOf(CLOTHES_ASSETS).id);
  }

  async function downloadAvatar() {
    setDownloading(true);
    try {
      const size = ASSET_CANVAS_SIZE;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Stacking order bottom -> top: background, body, clothes, hair.
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, size, size);

      const layers = [
        publicPath("background", background.file),
        publicPath("body", body.file),
        publicPath("clothes", clothes.file),
        publicPath("hair", hair.file)
      ];

      for (const src of layers) {
        const img = await loadImage(src);
        if (img) ctx.drawImage(img, 0, 0, size, size);
      }

      canvas.toBlob((blob) => {
        if (!blob) return;
        const link = document.createElement("a");
        link.download = "gpc-avatar.png";
        link.href = URL.createObjectURL(blob);
        link.click();
      }, "image/png");
    } finally {
      setDownloading(false);
    }
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 px-7 py-7 max-w-[1180px] mx-auto items-start">
      {/* Controls */}
      <section className="bg-panel border-[3px] border-ink rounded-comic shadow-comic p-5">
        <div className="flex gap-2 flex-wrap mb-4">
          {(["background", "body", "hair", "clothes"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-display font-semibold text-sm px-4 py-2 rounded-full border-[3px] border-ink capitalize transition-transform hover:-translate-y-0.5 ${
                tab === t ? "bg-coral text-white" : "bg-paper"
              }`}
            >
              {t === "background"
                ? "Background"
                : t === "body"
                ? "Body"
                : t === "hair"
                ? "Hair"
                : "Clothes"}
            </button>
          ))}
        </div>

        {tab === "background" && (
          <div>
            <div className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#5a5670] mb-2">
              Pilih background
            </div>
            <AssetGrid
              category="background"
              items={BACKGROUND_ASSETS}
              selectedId={backgroundId}
              onSelect={setBackgroundId}
            />
          </div>
        )}

        {tab === "body" && (
          <div>
            <div className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#5a5670] mb-2">
              Pilih base
            </div>
            <AssetGrid
              category="body"
              items={BODY_ASSETS}
              selectedId={bodyId}
              onSelect={setBodyId}
            />
          </div>
        )}

        {tab === "hair" && (
          <div>
            <div className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#5a5670] mb-2">
              Pilih gaya rambut
            </div>
            <AssetGrid
              category="hair"
              items={HAIR_ASSETS}
              selectedId={hairId}
              onSelect={setHairId}
            />
            <p className="text-[11px] text-[#5a5670] mt-3">
              Belum ada file? Upload PNG ke <code>/public/assets/hair/</code> sesuai nama
              file di <code>lib/assets.ts</code>, nanti otomatis muncul di sini.
            </p>
          </div>
        )}

        {tab === "clothes" && (
          <div>
            <div className="font-display font-semibold text-[13px] uppercase tracking-wider text-[#5a5670] mb-2">
              Pilih baju
            </div>
            <AssetGrid
              category="clothes"
              items={CLOTHES_ASSETS}
              selectedId={clothesId}
              onSelect={setClothesId}
            />
            <p className="text-[11px] text-[#5a5670] mt-3">
              Belum ada file? Upload PNG ke <code>/public/assets/clothes/</code> sesuai
              nama file di <code>lib/assets.ts</code>, nanti otomatis muncul di sini.
            </p>
          </div>
        )}
      </section>

      {/* Preview */}
      <section className="flex flex-col items-center gap-4 md:sticky md:top-5">
        <div className="relative w-full max-w-[320px] aspect-square rounded-[20px] border-[3px] border-ink shadow-comic p-3.5 bg-paper overflow-hidden avatar-frame-dots">
          <div className="relative w-full h-full drop-shadow-[0_6px_0_rgba(0,0,0,0.15)]">
            {/* eslint-disable @next/next/no-img-element */}
            {background.file && (
              <img
                src={publicPath("background", background.file)}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            {body.file && (
              <img
                src={publicPath("body", body.file)}
                alt="Body"
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
            {clothes.file && (
              <img
                src={publicPath("clothes", clothes.file)}
                alt="Clothes"
                className="absolute inset-0 w-full h-full object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            {hair.file && (
              <img
                src={publicPath("hair", hair.file)}
                alt="Hair"
                className="absolute inset-0 w-full h-full object-contain"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            )}
            {/* eslint-enable @next/next/no-img-element */}
          </div>
        </div>

        <div className="flex gap-2.5 flex-wrap justify-center">
          <button
            onClick={randomize}
            className="font-display font-semibold text-sm px-5 py-2.5 rounded-full border-[3px] border-ink bg-paper shadow-comic-btn active:translate-x-0.5 active:translate-y-0.5 active:shadow-comic-sm transition-all"
          >
            🎲 Acak
          </button>
          <button
            onClick={downloadAvatar}
            disabled={downloading}
            className="font-display font-semibold text-sm px-5 py-2.5 rounded-full border-[3px] border-ink bg-coral text-white shadow-comic-btn active:translate-x-0.5 active:translate-y-0.5 active:shadow-comic-sm transition-all disabled:opacity-60"
          >
            {downloading ? "Nyiapin…" : "⬇ Download PNG"}
          </button>
        </div>
      </section>
    </main>
  );
}
