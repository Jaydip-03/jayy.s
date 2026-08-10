export default function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-5 py-2">
      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

      <span className="text-sm">
        Available for Full-Time Roles
      </span>
    </div>
  );
}