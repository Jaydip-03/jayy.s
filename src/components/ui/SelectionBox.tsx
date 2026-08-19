const SPIDEY_RED = "#e23636";

type SelectionBoxProps = {
  children: React.ReactNode;
  className?: string;
  isSpideyMode: boolean;
};

export default function SelectionBox({
  children,
  className = "bg-black",
  isSpideyMode,
}: SelectionBoxProps) {
  return (
    <span className="relative inline-block px-1">
      <span className="relative z-10">{children}</span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-3 -inset-y-1.5 rounded-[3px] border-2"
        style={{
          borderColor: isSpideyMode
            ? SPIDEY_RED
            : "rgba(255,255,255,0.22)",
        }}
      />

      {[
        "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
        "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-0 translate-x-1/2 -translate-y-1/2",
        "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
        "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
        "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
        "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
      ].map((position) => (
        <span
          key={position}
          aria-hidden="true"
          className={`pointer-events-none absolute h-2 w-2 rounded-[2px] border ${className} ${position}`}
          style={{
            borderColor: isSpideyMode
              ? `${SPIDEY_RED}99`
              : "rgba(255,255,255,0.16)",
          }}
        />
      ))}
    </span>
  );
}