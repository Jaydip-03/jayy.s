import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";

import ProjectEditorialImage from "./ProjectEditorialImage";
import ProjectTech from "./ProjectTech";

type ProjectEditorialRowProps = {
  project: Project;
  index: number;
  priority?: boolean;
};

export default function ProjectEditorialRow({
  project,
  index,
  priority = false,
}: ProjectEditorialRowProps) {
  const number = String(index + 1).padStart(2, "0");
  const description = project.description ?? project.shortDescription;

  return (
    <article className="group relative grid gap-7 border-t border-zinc-900/[0.10] py-10 first:border-t-0 first:pt-0 sm:gap-9 sm:py-12 lg:grid-cols-[56px_minmax(0,0.92fr)_minmax(360px,1fr)] lg:items-center lg:gap-8 lg:py-14">
      <div className="flex items-center gap-3 lg:block lg:self-start lg:pt-2">
        <span className="font-display text-2xl font-normal tracking-[-0.04em] text-spidey-red sm:text-3xl">
          {number}
        </span>
        <span className="block h-px w-8 bg-spidey-red/45 lg:mt-4" />
      </div>

      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="relative block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
      >
        <ProjectEditorialImage project={project} priority={priority} />
      </Link>

      <div className="min-w-0 lg:pr-4">
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[10px] font-semibold uppercase tracking-[0.18em]">
          <span className="text-spidey-blue">{project.category}</span>
          {project.year && <span className="text-zinc-400">· {project.year}</span>}
          {project.status && <span className="text-emerald-600">· {project.status}</span>}
        </div>

        <h3 className="mt-2.5 font-display text-3xl font-normal leading-[1.02] tracking-[-0.035em] text-zinc-950 sm:text-4xl">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors duration-300 hover:text-spidey-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 max-w-xl text-[14px] leading-6 text-zinc-600 sm:text-[15px] sm:leading-7">
          {description}
        </p>

        <ProjectTech
          technologies={project.technologies}
          max={5}
          className="mt-4"
        />

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="link-spidey-underline inline-flex items-center gap-1.5 text-spidey-red transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
          >
            {project.live ? "View Case Study" : "View Project"}
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex items-center gap-1.5 text-zinc-700 transition-colors hover:text-spidey-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-blue"
            >
              GitHub
              <FaGithub className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
