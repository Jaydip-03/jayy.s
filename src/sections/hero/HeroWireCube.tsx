type HeroWireCubeProps = {
  size?: number;
  className?: string;
};

export default function HeroWireCube({
  size = 36,
  className = "text-zinc-500/70",
}: HeroWireCubeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M28 4L50 16L28 28L6 16L28 4Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M6 16L28 28V52L6 40V16Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
      <path
        d="M50 16L28 28V52L50 40V16Z"
        stroke="currentColor"
        strokeWidth="1.15"
      />
    </svg>
  );
}
