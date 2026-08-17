import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function ProjectHeader() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-px w-10"
            style={{
              background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE})`,
            }}
          />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Selected Work
          </p>
        </div>

        <h2 className="mt-4 font-display text-4xl font-normal leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:text-[3.25rem]">
          Projects
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-[17px] sm:leading-8">
          Full-stack builds, frontend experiments, and backend systems I&apos;ve
          shipped — Spring Boot, Java, and product work.
        </p>
      </div>

      <Link
        href="/work"
        className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-300/80 bg-white/60 px-4 py-2 text-sm font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-950 hover:text-white md:mb-1.5"
      >
        All projects
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
