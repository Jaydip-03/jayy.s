const SPIDEY_BLUE = "#006fb9";

type HeroNameNoteProps = {
  variant: "desktop" | "mobile";
};

export default function HeroNameNote({ variant }: HeroNameNoteProps) {
  if (variant === "desktop") {
    return (
      <div
        className="pointer-events-none absolute left-full top-0 z-20 ml-10 hidden whitespace-nowrap sm:ml-12 lg:block lg:ml-14"
        aria-hidden="true"
      >
        <svg
          width="40"
          height="28"
          viewBox="0 0 40 28"
          fill="none"
          className="absolute -left-8 top-1"
          style={{ color: SPIDEY_BLUE }}
        >
          <path
            d="M36 4C28 6 20 12 12 18C8 21 5 23 2 24"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M4 22L2 24L6 25"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p
          className="rotate-[-6deg] font-handwritten text-[20px] leading-none sm:text-[24px]"
          style={{ color: SPIDEY_BLUE }}
        >
          or just jayy
        </p>
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none relative mt-2 w-fit pl-6 lg:hidden"
      aria-hidden="true"
    >
      <svg
        width="32"
        height="22"
        viewBox="0 0 32 22"
        fill="none"
        className="absolute left-0 top-0"
        style={{ color: SPIDEY_BLUE }}
      >
        <path
          d="M28 2C20 4 12 8 6 14C4 16 3 17 2 18"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M3 16L2 18L5 19"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <p
        className="rotate-[-5deg] font-handwritten text-[18px] leading-none sm:text-[20px]"
        style={{ color: SPIDEY_BLUE }}
      >
        or just jayy
      </p>
    </div>
  );
}
