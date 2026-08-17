import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

import ProjectLinks from "@/components/projects/ProjectLinks";
import ProjectStatusBadge from "@/components/projects/ProjectStatusBadge";
import { getAdjacentProjects } from "@/lib/projects";
import { Project } from "@/types/project";

type ProjectCaseStudyProps = {
  project: Project;
};

const categoryDotClass: Record<Project["category"], string> = {
  Frontend: "bg-sky-500",
  Backend: "bg-violet-500",
  "Full Stack": "bg-spidey-red",
  IoT: "bg-amber-500",
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="mx-auto max-w-3xl">
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
          <span
            className={`h-2 w-2 rounded-full ${categoryDotClass[project.category]}`}
          />
          {project.category}
        </span>
        <ProjectStatusBadge status={project.status} />
      </div>

      <h1 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
        {project.shortDescription}
      </p>

      <div className="mt-7">
        <ProjectLinks github={project.github} live={project.live} />
      </div>

      <div className="relative mt-10 overflow-hidden rounded-2xl bg-[#e8e8e3] p-4 sm:p-5">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#dddcd7]">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-[linear-gradient(145deg,#ececea,#dddcd7)] px-6 text-center">
              <span className="text-sm font-medium text-zinc-500">
                {project.title}
              </span>
            </div>
          )}
        </div>
      </div>

      <section className="mt-12 border-t border-zinc-200/80 pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Overview
        </h2>
        <p className="mt-4 text-base leading-8 text-zinc-700">
          {project.description}
        </p>
      </section>

      {project.highlights && project.highlights.length > 0 && (
        <section className="mt-10 border-t border-zinc-200/80 pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Highlights
          </h2>
          <ul className="mt-5 space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-7 text-zinc-700 sm:text-[15px]"
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-spidey-blue" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {project.keyFixes && project.keyFixes.length > 0 && (
        <section className="mt-10 border-t border-zinc-200/80 pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            What I found &amp; fixed
          </h2>
          <div className="mt-6 space-y-4">
            {project.keyFixes.map((item) => (
              <div
                key={item.issue}
                className="rounded-2xl border border-zinc-200/80 bg-white/70 p-5"
              >
                <div className="flex items-start gap-3 text-sm leading-7 text-zinc-700">
                  <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                  <p>{item.issue}</p>
                </div>
                <div className="mt-3 flex items-start gap-3 text-sm leading-7 text-zinc-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  <p>{item.fix}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {project.impact && (
        <section className="mt-10 border-t border-zinc-200/80 pt-10">
          <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            Impact
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-700">
            {project.impact}
          </p>
        </section>
      )}

      <section className="mt-10 border-t border-zinc-200/80 pt-10">
        <h2 className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
          Built with
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200/80 bg-white/60 px-3 py-1.5 text-sm text-zinc-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {(prev || next) && (
        <nav
          aria-label="Project navigation"
          className="mt-14 grid gap-4 border-t border-zinc-200/80 pt-10 sm:grid-cols-2"
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group rounded-2xl border border-zinc-200/80 bg-white/60 p-5 transition-colors hover:border-zinc-300 hover:bg-white"
            >
              <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                <ArrowLeft className="h-3.5 w-3.5" />
                Previous
              </span>
              <p className="mt-2 text-base font-semibold text-zinc-950 group-hover:text-emerald-800">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group rounded-2xl border border-zinc-200/80 bg-white/60 p-5 text-right transition-colors hover:border-zinc-300 hover:bg-white sm:ml-auto"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Next
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="mt-2 text-base font-semibold text-zinc-950 group-hover:text-emerald-800">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      )}
    </article>
  );
}
