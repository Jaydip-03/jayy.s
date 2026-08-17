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
    <article className="mx-auto max-w-3xl">
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <p className="text-sm tracking-wide text-zinc-500">{experience.duration}</p>
        {experience.location && (
          <p className="text-sm text-zinc-600">· {experience.location}</p>
        )}
        {experience.current && (
          <span className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300">
            Current
          </span>
        )}
      </div>

      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {experience.role}
      </h1>
      <p className="mt-3 text-xl text-zinc-400">{experience.company}</p>

      <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
        {experience.description}
      </p>

      {experience.achievements && experience.achievements.length > 0 && (
        <section className="mt-12 border-t border-zinc-800 pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Key contributions
          </h2>
          <ul className="mt-5 space-y-3">
            {experience.achievements.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-7 text-zinc-300 sm:text-[15px]"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-zinc-500" />
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-10 border-t border-zinc-800 pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Technologies
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {relatedProject && (
        <section className="mt-10 border-t border-zinc-800 pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Related project
          </h2>
          <Link
            href={`/work/${relatedProject.slug}`}
            className="group mt-5 flex items-center justify-between rounded-2xl border border-zinc-800 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
          >
            <div>
              <p className="text-lg font-semibold text-white group-hover:text-zinc-200">
                {relatedProject.title}
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                {relatedProject.shortDescription}
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-white" />
          </Link>
        </section>
      )}

      {(prev || next) && (
        <nav
          aria-label="Experience navigation"
          className="mt-14 grid gap-4 border-t border-zinc-800 pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/experience/${prev.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-white/[0.02] p-5 transition-colors hover:border-white/20"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous
              </span>
              <p className="mt-2 text-base font-semibold text-white group-hover:text-zinc-200">
                {prev.role}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{prev.company}</p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/experience/${next.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-white/[0.02] p-5 text-right transition-colors hover:border-white/20 sm:ml-auto"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-base font-semibold text-white group-hover:text-zinc-200">
                {next.role}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{next.company}</p>
            </Link>
          ) : null}
        </nav>
      )}
    </article>
  );
}
