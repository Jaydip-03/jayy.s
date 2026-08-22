import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { projects } from "@/constants/projects";
import { getAdjacentExperiences } from "@/lib/experience";
import { Experience } from "@/types/experience";

type ExperienceDetailProps = {
  experience: Experience;
};

export default function ExperienceDetail({ experience }: ExperienceDetailProps) {
  const { prev, next } = getAdjacentExperiences(experience.slug);
  const relatedProject = experience.relatedProject
    ? projects.find((project) => project.slug === experience.relatedProject)
    : null;

  return (
    <article className="mx-auto max-w-3xl pb-16">
      {/* Header Metadata */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          {experience.duration}
        </p>
        {experience.location && (
          <p className="font-mono text-xs text-zinc-600">· {experience.location}</p>
        )}
        {experience.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Current Role
          </span>
        )}
      </div>

      {/* Role Title */}
      <h1 className="mt-4 font-display text-4xl font-normal leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl">
        {experience.role}
      </h1>
      <p className="mt-3 font-mono text-sm uppercase tracking-[0.2em] text-zinc-400">
        {experience.company}
      </p>

      {/* Description */}
      <p className="mt-6 text-base leading-relaxed text-zinc-300 sm:text-lg sm:leading-8">
        {experience.description}
      </p>

      {/* Key Contributions */}
      {experience.achievements && experience.achievements.length > 0 && (
        <section className="mt-12 border-t border-zinc-800/80 pt-10">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
            Key Responsibilities & Deliverables
          </h2>
          <ul className="mt-6 space-y-3.5">
            {experience.achievements.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3.5 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-7"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-white/70" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech Stack */}
      <section className="mt-10 border-t border-zinc-800/80 pt-10">
        <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
          Core Technologies
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-zinc-800 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Related Project Link */}
      {relatedProject && (
        <section className="mt-10 border-t border-zinc-800/80 pt-10">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500">
            Directly Related Project
          </h2>
          <Link
            href={`/work/${relatedProject.slug}`}
            className="group mt-5 flex items-center justify-between rounded-xl border border-zinc-800/80 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <div>
              <p className="font-display text-lg font-normal text-white group-hover:text-zinc-200 sm:text-xl">
                {relatedProject.title}
              </p>
              <p className="mt-1 text-xs text-zinc-500 sm:text-sm">
                {relatedProject.shortDescription}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </Link>
        </section>
      )}

      {/* Chapter Navigation Footer */}
      {(prev || next) && (
        <nav
          aria-label="Experience chapter navigation"
          className="mt-16 flex items-center justify-between border-t border-zinc-800/80 pt-8"
        >
          {prev ? (
            <Link
              href={`/experience/${prev.slug}`}
              className="group flex flex-col items-start gap-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Chapter
              </span>
              <span className="font-display text-lg font-normal text-white transition-colors group-hover:text-zinc-300 sm:text-xl">
                {prev.role}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/experience/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-500 transition-colors group-hover:text-zinc-300">
                Next Chapter
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-display text-lg font-normal text-white transition-colors group-hover:text-zinc-300 sm:text-xl">
                {next.role}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
