export default function ProjectHeader() {
  return (
    <div className="grid gap-8 border-b border-zinc-200/90 pb-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          Featured Work
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        </div>

        <h2 className="mt-4 font-display text-4xl font-normal leading-[1.02] tracking-[-0.045em] text-zinc-950 sm:text-5xl md:text-6xl">
          Selected projects.
          <span className="block font-display italic text-zinc-500">
            Built to solve real problems.
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
          A concise archive of full-stack applications, frontend experiments,
          and research-led systems from my engineering journey.
        </p>
      </div>

      <p className="border-l border-zinc-200 pl-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 md:mb-1">
        04 selected systems<br />
        2024 — 2025
      </p>
    </div>
  );
}
