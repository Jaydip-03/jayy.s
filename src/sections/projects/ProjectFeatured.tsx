"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

import ProjectImage from "./ProjectImage";
import ProjectTech from "./ProjectTech";

type ProjectFeaturedProps = { project: Project };

export default function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const highlights = project.highlights?.slice(0, 3) ?? [];

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group grid gap-8 lg:grid-cols-[minmax(0,1.16fr)_minmax(20rem,0.84fr)] lg:items-center lg:gap-12 xl:gap-16"
    >
      <div className="rounded-[22px] border border-zinc-200 bg-white p-3 shadow-[0_18px_48px_rgba(24,24,27,0.07)] transition-shadow duration-500 group-hover:shadow-[0_26px_64px_rgba(24,24,27,0.12)] sm:p-4">
        <div className="flex h-9 items-center gap-1.5 border-b border-zinc-100 px-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 text-[10px] font-medium text-zinc-400">{project.title} / case study</span>
          <span className="ml-auto rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-700">{project.status}</span>
        </div>

        <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`} className="mt-3 block overflow-hidden rounded-xl bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
          <ProjectImage project={project} priority aspect="aspect-[16/9.4]" className="transition-transform duration-700 ease-out group-hover:scale-[1.018]" />
        </Link>
      </div>

      <div className="py-1">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-600" />
          01 / Featured case study
        </div>

        <h3 className="mt-3 font-display text-3xl font-normal leading-[1.04] tracking-[-0.04em] text-zinc-950 sm:text-4xl">
          <Link href={`/work/${project.slug}`} className="transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
            {project.title}
          </Link>
        </h3>

        <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-[15px]">{project.shortDescription}</p>

        {highlights.length > 0 && (
          <ul className="mt-6 space-y-2.5 border-l border-zinc-200 pl-4 text-sm text-zinc-600">
            {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        )}

        <ProjectTech technologies={project.technologies} max={4} className="mt-6" />

        <div className="mt-7 flex items-center gap-5 border-t border-zinc-200 pt-5 text-sm">
          <Link href={`/work/${project.slug}`} className="group/link inline-flex items-center gap-1.5 font-semibold text-zinc-950 transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
            Read case study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
              <FaGithub className="h-4 w-4" />
              Repository
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
