import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";

import ProjectImage from "./ProjectImage";
import ProjectTech from "./ProjectTech";

type FeaturedProjectCardProps = {
  project: Project;
};

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group relative grid items-center gap-6 rounded-[28px] border border-zinc-200/70 bg-white/60 p-4 backdrop-blur-sm transition-all duration-500 hover:border-spidey-red/20 hover:shadow-[0_40px_90px_-40px_rgba(226,54,54,0.28),0_20px_50px_-30px_rgba(0,111,185,0.22)] sm:p-5 lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:p-6">
      <div className="lg:pl-1">
        <ProjectImage project={project} priority aspect="aspect-[16/10]" />
      </div>

      <div className="flex flex-col lg:pr-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-spidey-red to-spidey-blue px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
            Featured
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-normal leading-[1.05] tracking-[-0.03em] text-zinc-950 transition-colors group-hover:text-spidey-blue sm:text-[2.5rem]">
          {/* Stretched link makes the whole card open the case study */}
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3.5 max-w-md text-pretty text-[15px] leading-7 text-zinc-600">
          {project.description ?? project.shortDescription}
        </p>

        <ProjectTech technologies={project.technologies} max={6} className="mt-5" />

        <div className="relative z-10 mt-7 flex items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-spidey-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-red"
            >
              Visit live site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-spidey-blue hover:text-spidey-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spidey-blue"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          )}
          <span className="link-spidey-underline ml-auto hidden text-sm font-medium text-zinc-500 sm:inline-flex">
            Case study →
          </span>
        </div>
      </div>
    </article>
  );
}
