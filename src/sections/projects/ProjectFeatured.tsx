"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import { Project } from "@/types/project";
import ProjectImage from "./ProjectImage";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

type ProjectFeaturedProps = {
  project: Project;
};

export default function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const { isSpideyMode } = useTheme();
  const description = project.shortDescription || project.description;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10 xl:gap-14">
        {/* Dominant Image Presentation */}
        <div className="relative">
          <Link
            href={`/work/${project.slug}`}
            className="block w-full overflow-hidden rounded-xl bg-zinc-200/50 ring-1 ring-zinc-900/5 shadow-sm transition-all duration-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
            aria-label={`View ${project.title} case study`}
          >
            <div className="transition-transform duration-700 ease-out group-hover:scale-[1.012]">
              <ProjectImage
                project={project}
                priority
                aspect="aspect-[16/9]"
                className="w-full"
              />
            </div>
          </Link>

          {/* Spidey Mode Classified Dossier Stamp */}
          {isSpideyMode && (
            <div className="pointer-events-none absolute -top-3 -right-3 z-10 hidden sm:block">
              <div className="rotate-6 rounded-md border border-[#e23636]/60 bg-[#e23636] px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider text-white shadow-md">
                🕷️ CLASSIFIED // PRIORITY 01
              </div>
            </div>
          )}
        </div>

        {/* Editorial Content */}
        <div className="flex flex-col justify-center">
          {/* Subtle Metadata */}
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
            <span>{project.category}</span>
            {project.status && (
              <>
                <span className="text-zinc-300">·</span>
                <span className={`font-medium ${isSpideyMode ? "text-[#e23636]" : "text-emerald-600"}`}>
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

          {/* Editorial Display Heading */}
          <h3 className="mt-3 font-display text-2xl font-normal leading-[1.08] tracking-[-0.03em] text-zinc-950 transition-colors duration-300 group-hover:text-zinc-700 sm:text-3xl lg:text-[2.25rem]">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
            >
              {project.title}
            </Link>
          </h3>

          {/* Short Project Description */}
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-[15px] sm:leading-7">
            {description}
          </p>

          {/* Editorial Divider & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/80 pt-5 text-xs font-medium">
            <div className="flex items-center gap-6">
              <Link
                href={`/work/${project.slug}`}
                className="group/link inline-flex items-center gap-1.5 text-zinc-950 transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                <span>{isSpideyMode ? "Inspect Dossier ↗" : "View Case Study"}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>

            {/* Handwritten Note in Spidey Mode */}
            {isSpideyMode && (
              <span className="font-handwritten text-[13px] tracking-wide" style={{ color: SPIDEY_BLUE }}>
                web-slinging code 🕸️ ⤷
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
