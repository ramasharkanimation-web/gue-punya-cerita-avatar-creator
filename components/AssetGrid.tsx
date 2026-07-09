"use client";

import { useState } from "react";
import type { AssetCategory, AssetItem } from "@/lib/assets";
import { publicPath } from "@/lib/assets";

interface AssetGridProps {
  category: AssetCategory;
  items: AssetItem[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function AssetGrid({ category, items, selectedId, onSelect }: AssetGridProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5">
      {items.map((item) => (
        <AssetThumb
          key={item.id}
          category={category}
          item={item}
          active={item.id === selectedId}
          onClick={() => onSelect(item.id)}
        />
      ))}
    </div>
  );
}

function AssetThumb({
  category,
  item,
  active,
  onClick
}: {
  category: AssetCategory;
  item: AssetItem;
  active: boolean;
  onClick: () => void;
}) {
  const [broken, setBroken] = useState(false);
  const src = publicPath(category, item.file);
  const showPlaceholder = !item.file || broken;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 rounded-xl border-[2.5px] border-ink py-2.5 px-1.5 font-body text-[11px] font-semibold transition-transform hover:-translate-y-0.5 ${
        active ? "bg-sun shadow-comic-sm" : "bg-paper"
      }`}
    >
      <div className="w-11 h-11 rounded-lg overflow-hidden flex items-center justify-center">
        {showPlaceholder ? (
          <div className="w-full h-full rounded-lg asset-thumb-missing flex items-center justify-center text-[9px] text-center leading-tight text-[#5a5670] px-1">
            {item.file ? "belum ada" : "none"}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={item.name}
            className="w-full h-full object-contain"
            onError={() => setBroken(true)}
          />
        )}
      </div>
      <span>{item.name}</span>
    </button>
  );
}
