import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { experiences } from "@/constants/experience";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <p className="mt-8 text-xs uppercase tracking-[0.35em] text-zinc-500">
          Career
        </p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
          My Journey
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          Every role, every training, every line of code that got me here —
          from structured Java fundamentals to shipping real applications.
        </p>

        <div className="mt-20 flex flex-col gap-20">
  {experiences.map((exp, index) => (
    <div key={exp.slug}>
      <div className="flex items-center gap-4">
        <span className="shrink-0 font-mono text-xs text-emerald-400">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
        <span className="shrink-0 text-xs tracking-wide text-zinc-600">
          {exp.duration}
        </span>
      </div>

      <div className="mt-8 flex flex-wrap items-baseline justify-between gap-3">
        {exp.current && (
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs uppercase tracking-widest text-emerald-300">
            Current
          </span>
        )}
      </div>

      <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{exp.role}</h2>
      <p className="mt-1 text-lg text-zinc-400">
        {exp.company}
        {exp.location && <span className="text-zinc-600"> · {exp.location}</span>}
      </p>

      <Link
        href={`/experience/${exp.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-emerald-400 transition-all hover:gap-3"
      >
        Read full details
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  ))}
</div>
      </div>
    </main>
  );
}