

<aside className="relative min-h-[320px] xl:min-h-[360px]"></aside>


const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";



function SpiderDoodle() {
  return (
    <div
      className="hero-float-spider absolute left-[42%] top-0 -translate-x-1/2"
      aria-hidden="true"
    >
      <svg width="38" height="38" viewBox="0 0 34 34" fill="none">
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

function WebSquare() {
  return (
    <div
      className="hero-float-web absolute right-2 top-8 xl:right-0 xl:top-6"
      aria-hidden="true"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed bg-white/[0.02] p-4 xl:h-[4.5rem] xl:w-[4.5rem]"
        style={{ borderColor: `${SPIDEY_RED}55` }}
      >
        <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
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
    </div>
  );
}

function WebHangFigure() {
  return (
    <div
      className="hero-float-swing absolute left-1/2 top-[32%] -translate-x-1/2 xl:top-[30%]"
      aria-hidden="true"
    >
      <svg
        width="168"
        height="228"
        viewBox="0 0 168 228"
        fill="none"
        className="h-[210px] w-[155px] xl:h-[228px] xl:w-[168px]"
      >
        {/* ceiling web */}
        <path
          d="M84 0V36 M84 0C64 10 46 24 30 40 M84 0C104 10 122 24 138 40 M84 0C84 16 76 28 64 38 M84 0C92 16 100 28 112 38 M84 0C72 12 60 22 48 32 M84 0C96 12 108 22 120 32"
          stroke={SPIDEY_BLUE}
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="84" cy="36" r="3" fill={SPIDEY_RED} />

        {/* hang line */}
        <path
          d="M84 36V68"
          stroke={SPIDEY_BLUE}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <g transform="translate(84 70)">
          {/* left arm — gripped on web */}
          <path
            d="M-8 2C-16 -6 -20 -18 -12 -28"
            stroke={SPIDEY_RED}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="-12" cy="-28" r="3" fill={SPIDEY_RED} />

          {/* torso — spidey suit */}
          <path
            d="M0 -2C-14 8 -16 28 -12 44C-8 56 -4 62 0 64C4 62 8 56 12 44C16 28 14 8 0 -2Z"
            fill={`${SPIDEY_RED}28`}
            stroke={SPIDEY_RED}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* web pattern on suit */}
          <path
            d="M0 8C-6 14 -8 24 -6 34 M0 8C6 14 8 24 6 34 M0 18C-10 22 -12 32 -8 42 M0 18C10 22 12 32 8 42"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.9"
            strokeLinecap="round"
            opacity="0.75"
          />

          {/* mask */}
          <ellipse
            cx="0"
            cy="-18"
            rx="13"
            ry="14"
            fill={SPIDEY_RED}
            stroke={SPIDEY_RED}
            strokeWidth="1.5"
          />
          {/* spidey eyes */}
          <path
            d="M-9 -22C-8 -14 -5 -10 -1 -12C-5 -16 -7 -20 -9 -22Z"
            fill="white"
          />
          <path
            d="M9 -22C8 -14 5 -10 1 -12C5 -16 7 -20 9 -22Z"
            fill="white"
          />
          <path
            d="M-8 -21C-6 -15 -4 -12 -2 -13"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.8"
            opacity="0.5"
          />
          <path
            d="M8 -21C6 -15 4 -12 2 -13"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.8"
            opacity="0.5"
          />

          {/* right arm — web shooter pose */}
          <path
            d="M10 4C22 0 30 8 34 18"
            stroke={SPIDEY_RED}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* web shooter wrist */}
          <rect
            x="30"
            y="14"
            width="8"
            height="7"
            rx="2"
            fill={SPIDEY_BLUE}
            transform="rotate(18 34 18)"
          />
          {/* webs shooting out */}
          <path
            d="M38 20L52 34 M38 20L58 26 M38 20L54 16 M38 20L62 38"
            stroke={SPIDEY_BLUE}
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.85"
          />
          <path
            d="M40 22C48 28 54 36 58 44"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.8"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* legs — upside-down crouch */}
          <path
            d="M-6 64C-14 72 -22 78 -28 70"
            stroke={SPIDEY_RED}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 64C16 74 26 80 34 68"
            stroke={SPIDEY_RED}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* boot tips */}
          <path
            d="M-28 70L-32 68M34 68L38 66"
            stroke={SPIDEY_BLUE}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* chest spider emblem hint */}
          <circle cx="0" cy="22" r="4" stroke={SPIDEY_BLUE} strokeWidth="1" opacity="0.8" />
          <path
            d="M0 18V26 M-3 22H3 M-2 19L2 25 M2 19L-2 25"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.7"
            strokeLinecap="round"
            opacity="0.8"
          />
        </g>

        {/* background web arcs */}
        <path
          d="M20 112C42 94 126 94 148 112"
          stroke={SPIDEY_RED}
          strokeWidth="0.9"
          opacity="0.28"
        />
        <path
          d="M32 136C48 122 120 122 136 136"
          stroke={SPIDEY_BLUE}
          strokeWidth="0.9"
          opacity="0.24"
        />
        <path
          d="M44 158C56 148 112 148 124 158"
          stroke={SPIDEY_RED}
          strokeWidth="0.8"
          opacity="0.2"
        />
      </svg>

      <p
        className="mt-3 text-center font-handwritten text-[16px] leading-none xl:mt-4 xl:text-[18px]"
        style={{ color: SPIDEY_BLUE }}
      >
        always building…
      </p>
    </div>
  );
}

function CodeBadge() {
  return (
    <div
      className="hero-float-badge absolute bottom-10 left-4 xl:bottom-12 xl:left-0"
      aria-hidden="true"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-lg"
        style={{
          backgroundColor: SPIDEY_BLUE,
          boxShadow: `0 12px 30px ${SPIDEY_BLUE}55`,
        }}
      >
        {"</>"}
      </div>
    </div>
  );
}

function WebHalo() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-[45%] opacity-[0.14] xl:h-[320px] xl:w-[320px]"
      viewBox="0 0 280 280"
      fill="none"
    >
      <circle cx="140" cy="140" r="118" stroke={SPIDEY_RED} strokeWidth="0.8" />
      <circle cx="140" cy="140" r="88" stroke={SPIDEY_BLUE} strokeWidth="0.6" />
      <circle cx="140" cy="140" r="58" stroke={SPIDEY_RED} strokeWidth="0.5" />
      {[0, 45, 90, 135].map((angle) => (
        <line
          key={angle}
          x1="140"
          y1="140"
          x2={140 + 120 * Math.cos((angle * Math.PI) / 180)}
          y2={140 + 120 * Math.sin((angle * Math.PI) / 180)}
          stroke={SPIDEY_RED}
          strokeWidth="0.5"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

export default function HeroAside() {
  return (
    <aside className="relative min-h-[320px] xl:min-h-[360px]">
      <div className="relative ml-auto h-[320px] w-full max-w-[340px] xl:h-[360px]">

        <WebHalo />
        <SpiderDoodle />
        <WebSquare />
        <WebHangFigure />
        <CodeBadge />
      </div>
    </aside>
  );
}
