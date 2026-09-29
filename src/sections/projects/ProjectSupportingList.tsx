"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

import ProjectImage from "./ProjectImage";

type ProjectSupportingListProps = { projects: Project[] };

const categoryDot = {
  Frontend: "bg-emerald-500",
  Backend: "bg-amber-400",
  "Full Stack": "bg-cyan-600",
  IoT: "bg-indigo-500",
} as const;

export default function ProjectSupportingList({ projects }: ProjectSupportingListProps) {
  return (
    <div className="border-y border-zinc-200/90">
      {projects.map((project, index) => {
        const itemNumber = String(index + 2).padStart(2, "0");

        return (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group grid gap-5 border-b border-zinc-200/90 py-6 last:border-b-0 sm:grid-cols-[2.5rem_minmax(11rem,15rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-7"
          >
            <span className="font-mono text-xs font-semibold tracking-[0.12em] text-zinc-400">{itemNumber}</span>

            <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`} className="block overflow-hidden rounded-xl border border-zinc-200 bg-white p-1.5 shadow-[0_8px_20px_rgba(24,24,27,0.04)] transition-transform duration-300 group-hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
              <div className="flex h-6 items-center gap-1 border-b border-zinc-100 px-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
              </div>
              <ProjectImage project={project} aspect="aspect-[16/8]" className="mt-1.5" />
            </Link>

            <div className="min-w-0">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[project.category]}`} />
                {project.category}
                <span className="text-zinc-300">/</span>
                {project.status}
              </div>

              <h3 className="mt-2 font-display text-2xl font-normal leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-[1.7rem]">
                <Link href={`/work/${project.slug}`} className="transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                  {project.title}
                </Link>
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 line-clamp-2">{project.shortDescription}</p>
            </div>

            <div className="flex items-center gap-3 sm:justify-self-end">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} repository`} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all hover:-translate-y-0.5 hover:border-zinc-950 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                  <FaGithub className="h-4 w-4" />
                </a>
              )}

              <Link href={`/work/${project.slug}`} aria-label={`Read ${project.title} case study`} className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-all group-hover:border-zinc-950 group-hover:bg-zinc-950 group-hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
