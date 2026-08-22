"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export default function ProjectCard({
  project,
  priority = false,
}: ProjectCardProps) {
  const description = project.shortDescription || project.description;

  return (
    <article className="group flex flex-col">
      {/* Sleek Framed Image Link */}
      <Link
        href={`/work/${project.slug}`}
        aria-label={`View ${project.title} case study`}
        className="block overflow-hidden rounded-xl bg-zinc-200/50 ring-1 ring-zinc-900/5 shadow-2xs transition-all duration-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
      >
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.015]">
          <ProjectImage
            project={project}
            priority={priority}
            aspect="aspect-[16/9]"
            className="w-full"
          />
        </div>
      </Link>

      {/* Editorial Content */}
      <div className="mt-4 flex flex-1 flex-col justify-between">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-[0.18em] text-zinc-400">
            <span>{project.category}</span>
            {project.status && (
              <>
                <span className="text-zinc-300">·</span>
                <span
                  className={
                    project.status === "Live"
                      ? "font-medium text-emerald-600"
                      : "text-zinc-400"
                  }
                >
                  {project.status}
                </span>
              </>
            )}
            {project.year && (
              <>
                <span className="text-zinc-300">·</span>
                <span>{project.year}</span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="mt-1.5 font-display text-lg font-normal leading-snug tracking-[-0.025em] text-zinc-950 transition-colors duration-300 group-hover:text-zinc-700 sm:text-xl md:text-[1.3rem]">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="mt-1.5 text-xs leading-relaxed text-zinc-600 line-clamp-2 sm:text-[13px] sm:leading-6">
            {description}
          </p>
        </div>

        {/* Action Links */}
        <div className="mt-3.5 flex items-center gap-4 border-t border-zinc-200/60 pt-3 text-xs font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-1 text-zinc-950 transition-colors hover:text-zinc-600"
          >
            <span>Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-500 transition-colors hover:text-zinc-950"
            >
              <FaGithub className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}