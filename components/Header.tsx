"use client";

import { useEffect, useRef, useState } from "react";

const TITLE_KEY = "gpc-avatar-maker:site-title";
const LOGO_KEY = "gpc-avatar-maker:logo-data-url";
const DEFAULT_TITLE = "GPC Avatar Maker";
const DEFAULT_LOGO = "/logo-default.png";

export default function Header() {
  const [title, setTitle] = useState(DEFAULT_TITLE);
  const [logo, setLogo] = useState<string | null>(DEFAULT_LOGO);
  const [hydrated, setHydrated] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Load saved header customization once the component mounts in the browser.
  useEffect(() => {
    const savedTitle = window.localStorage.getItem(TITLE_KEY);
    const savedLogo = window.localStorage.getItem(LOGO_KEY);
    if (savedTitle) setTitle(savedTitle);
    if (savedLogo) setLogo(savedLogo);
    setHydrated(true);
  }, []);

  function handleTitleInput() {
    const text = titleRef.current?.textContent?.trim() || DEFAULT_TITLE;
    setTitle(text);
    window.localStorage.setItem(TITLE_KEY, text);
  }

  function handleLogoPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setLogo(dataUrl);
      window.localStorage.setItem(LOGO_KEY, dataUrl);
    };
    reader.readAsDataURL(file);
  }

  const initial = (hydrated ? title : DEFAULT_TITLE).trim()[0]?.toUpperCase() || "G";

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-7 py-4 bg-panel border-b-[3px] border-ink">
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Klik buat ganti logo"
          className="relative w-14 h-14 rounded-full border-[3px] border-ink bg-sun overflow-hidden flex items-center justify-center shrink-0"
        >
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          ) : (
            <span className="font-display font-bold text-xl">{initial}</span>
          )}
          <span className="absolute -bottom-1 -right-1 bg-ink text-paper text-[10px] px-1 rounded">
            edit
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleLogoPick}
          className="hidden"
        />
        <div>
          <h1
            ref={titleRef}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            onInput={handleTitleInput}
            className="editable-title font-display font-bold text-2xl md:text-[26px] tracking-tight"
          >
            {title}
          </h1>
          <div className="text-xs text-[#5a5670] mt-0.5">
            bikin profile pic karakter kamu — base body, hair, clothes
          </div>
        </div>
      </div>
      <span className="border-2 border-ink rounded-full px-3 py-1.5 bg-teal text-white font-semibold text-xs">
        Gue Punya Cerita
      </span>
    </header>
  );
}
