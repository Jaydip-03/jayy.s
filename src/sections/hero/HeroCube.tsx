"use client";

type HeroCubeProps = {
  isSpideyMode: boolean;
};

export default function HeroCube({ isSpideyMode }: HeroCubeProps) {
  if (isSpideyMode) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[72%] top-[55%] z-[2] hidden -translate-x-1/2 -translate-y-1/2 md:block"
    >
      <svg
        width="112"
        height="112"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-75"
      >
        {/* top face */}
        <path
          d="M36 7L60 20L36 33L12 20L36 7Z"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
        />

        {/* left face */}
        <path
          d="M12 20V47L36 61V33L12 20Z"
          stroke="rgba(255,255,255,0.17)"
          strokeWidth="1"
        />

        {/* right face */}
        <path
          d="M60 20V47L36 61V33L60 20Z"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
        />

        {/* subtle inner edge */}
        <path
          d="M36 33V61"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}