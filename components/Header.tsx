const SITE_TITLE = "Gue Punya Cerita Avatar Creator";
const LOGO_SRC = "/logo-default.png";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-7 py-4 bg-panel border-b-[3px] border-ink">
      <div className="flex items-center gap-3.5">
        <div className="relative w-14 h-14 rounded-full border-[3px] border-ink bg-sun overflow-hidden flex items-center justify-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_SRC} alt="Gue Punya Cerita" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl md:text-[26px] tracking-tight">
            {SITE_TITLE}
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
