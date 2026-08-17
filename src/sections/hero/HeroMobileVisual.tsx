const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function MobileWebHalo() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-1/2 h-[140px] w-[140px] -translate-y-1/2 opacity-[0.16]"
      viewBox="0 0 140 140"
      fill="none"
    >
      <circle cx="70" cy="70" r="58" stroke={SPIDEY_RED} strokeWidth="0.8" />
      <circle cx="70" cy="70" r="40" stroke={SPIDEY_BLUE} strokeWidth="0.6" />
      {[0, 45, 90, 135].map((angle) => (
        <line
          key={angle}
          x1="70"
          y1="70"
          x2={70 + 62 * Math.cos((angle * Math.PI) / 180)}
          y2={70 + 62 * Math.sin((angle * Math.PI) / 180)}
          stroke={SPIDEY_RED}
          strokeWidth="0.5"
          opacity="0.65"
        />
      ))}
    </svg>
  );
}

function MobileSpiderDoodle() {
  return (
    <div
      className="hero-float-spider relative shrink-0"
      aria-hidden="true"
    >
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
        <path
          d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
          stroke={SPIDEY_RED}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function MobileWebSquare() {
  return (
    <div
      className="hero-float-web flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-dashed bg-white/[0.02] p-2.5"
      style={{ borderColor: `${SPIDEY_RED}55` }}
      aria-hidden="true"
    >
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
        <path
          d="M14 2 L14 26 M2 14 L26 14 M4 4 L24 24 M24 4 L4 24"
          stroke={SPIDEY_RED}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="14" cy="14" r="4" stroke={SPIDEY_BLUE} strokeWidth="1.2" />
      </svg>
    </div>
  );
}

export default function HeroMobileVisual() {
  return (
    <div
      className="relative mt-5 flex items-center justify-between gap-4 sm:mt-6 lg:hidden"
      aria-hidden="true"
    >
      <p
        className="font-handwritten text-[18px] leading-none sm:text-[20px]"
        style={{ color: SPIDEY_BLUE }}
      >
        always building…
      </p>

      <div className="relative flex items-center gap-3 pr-1">
        <MobileWebHalo />
        <MobileWebSquare />
        <MobileSpiderDoodle />
      </div>
    </div>
  );
}
