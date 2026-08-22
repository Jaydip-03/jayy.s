import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";

import ProjectEditorialImage from "./ProjectEditorialImage";

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
    <article className="group grid gap-6 border-t border-zinc-900/[0.10] py-9 first:border-t-0 sm:grid-cols-[42px_minmax(0,250px)_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:grid-cols-[64px_minmax(0,300px)_minmax(0,1fr)_60px] lg:items-center lg:gap-8 lg:py-11">
      {/* Number */}
      <div className="flex items-center gap-3 sm:block sm:self-start sm:pt-1">
        <span
          className={`font-display text-xl tracking-[-0.04em] ${
            index % 2 === 0 ? "text-spidey-red" : "text-spidey-blue"
          }`}
        >
          {number}
        </span>

        <span
          aria-hidden="true"
          className={`block h-px w-6 sm:mt-3 sm:w-8 ${
            index % 2 === 0
              ? "bg-spidey-red/40"
              : "bg-spidey-blue/40"
          }`}
        />
      </div>

      {/* Image */}
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="block w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
      >
        <ProjectEditorialImage
          project={project}
          priority={priority}
        />
      </Link>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
          <span className="text-spidey-blue">
            {project.category}
          </span>

          {project.status && (
            <>
              <span className="text-zinc-300">·</span>

              <span className="text-emerald-600">
                {project.status}
              </span>
            </>
          )}
        </div>

        <h3 className="mt-2 font-display text-[1.7rem] font-normal leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-[1.9rem]">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors duration-300 hover:text-spidey-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
          >
            {project.title}
          </Link>
        </h3>

        {description && (
          <p className="mt-2.5 max-w-[560px] text-[13px] leading-6 text-zinc-600 sm:text-[14px]">
            {description}
          </p>
        )}

        <div className="mt-3.5 flex items-center gap-5 text-[12px] font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-spidey-red transition-colors hover:text-zinc-950"
          >
            {project.live ? "View case study" : "View project"}

            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-500 transition-colors hover:text-zinc-950"
            >
              GitHub

              <FaGithub className="h-3 w-3" />
            </Link>
          )}
        </div>
      </div>

      {/* Year */}
      <div className="hidden self-start pt-1 text-right text-[11px] font-medium tracking-[0.08em] text-zinc-400 lg:block">
        {project.year}
      </div>
    </article>
  );
}