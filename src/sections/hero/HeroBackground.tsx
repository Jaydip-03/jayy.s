const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function HeroWebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hero-web"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120"
            stroke={SPIDEY_RED}
            strokeWidth="0.6"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="18"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="36"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.4"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-web)" />
    </svg>
  );
}

export default function HeroBackground() {
  return (
    <>
      <HeroWebPattern />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,rgba(226,54,54,0.06),transparent_45%),radial-gradient(circle_at_72%_18%,rgba(0,111,185,0.05),transparent_35%)]"
      />
    </>
  );
}
