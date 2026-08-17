const SPIDEY_RED = "#e23636";

export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2.5">
      <div
        className="h-2 w-2 animate-pulse rounded-full"
        style={{ backgroundColor: SPIDEY_RED }}
      />

      <span className="font-mono text-[13px] text-zinc-400">
        open to full-time roles
      </span>
    </div>
  );
}
