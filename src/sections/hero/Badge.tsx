type BadgeProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
};

export default function Badge({
  icon,
  children,
  active = false,
}: BadgeProps) {
  return (
    <div
        className={`inline-flex h-9 items-center gap-2 rounded-full border px-4 text-[13px] font-medium transition-all duration-300 ${
            active
            ? "border-emerald-500/20 bg-emerald-500/5"
            : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.05]"
        }`}
        >
      {icon}

      <span>{children}</span>
    </div>
  );
}