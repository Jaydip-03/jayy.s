"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Project } from "@/types/project";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  index?: number;
};

export default function ProjectCard({
  project,
  priority = false,
  index = 0,
}: ProjectCardProps) {
  const description = project.shortDescription || project.description;
  const itemNumber = String(index + 1).padStart(2, "0");

  return (
    <article className="group flex flex-col justify-between">
      {/* ── Exhibition Matte Image Frame ── */}
      <div>
        <div className="relative rounded-2xl bg-white/90 p-2 sm:p-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.06)] ring-1 ring-zinc-950/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_24px_55px_rgba(0,0,0,0.09)]">
          {/* Top Architectural Metadata Header */}
          <div className="flex items-center justify-between px-2 py-1 font-mono text-[8.5px] uppercase tracking-[0.2em] text-zinc-400">
            <span className="flex items-center gap-1.5 font-semibold text-zinc-600">
              [ {itemNumber} ] // {project.category}
            </span>
            {project.status && (
              <span className="text-emerald-700 font-medium">{project.status}</span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block overflow-hidden rounded-xl bg-zinc-100 ring-1 ring-zinc-900/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
          >
            <div className="transition-transform duration-700 ease-out group-hover:scale-[1.018]">
              <ProjectImage
                project={project}
                priority={priority}
                aspect="aspect-[16/9.5]"
                className="w-full"
              />
            </div>
          </Link>
        </div>

        {/* ── Editorial Content ── */}
        <div className="mt-4 px-1">
          {/* Title */}
          <h3 className="font-display text-xl font-normal leading-snug tracking-[-0.025em] text-zinc-950 transition-colors duration-300 group-hover:text-zinc-700 sm:text-2xl">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              {project.title}
            </Link>
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs leading-relaxed text-zinc-600 line-clamp-2 sm:text-[13.5px] sm:leading-6">
            {description}
          </p>

          {/* Inline Tech Stack Chips */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-zinc-200/80 bg-white/80 px-2 py-0.5 font-mono text-[10px] text-zinc-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── Action Links ── */}
      <div className="mt-5 flex items-center justify-between border-t border-zinc-200/80 px-1 pt-3.5 text-xs font-medium">
        <Link
          href={`/work/${project.slug}`}
          className="group/link inline-flex items-center gap-1 font-semibold text-zinc-950 transition-colors hover:text-zinc-600"
        >
          <span>Inspect Case Study</span>
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
            <span>Repository</span>
          </a>
        )}
      </div>
    </article>
  );
}