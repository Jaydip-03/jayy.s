"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Project } from "@/types/project";

type ProjectSupportingListProps = {
  projects: Project[];
};

export default function ProjectSupportingList({ projects }: ProjectSupportingListProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="divide-y divide-zinc-200/80 border-y border-zinc-200/80">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link
            href={`/work/${project.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 px-3 transition-colors duration-300 hover:bg-white/60 sm:gap-6 sm:py-6 sm:px-4 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
          >
            {/* Square Thumbnail */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-200/60 ring-1 ring-zinc-900/5 sm:h-20 sm:w-20">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="80px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-white font-display text-sm tracking-wider">
                  {project.title
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>

            {/* Title & Short Description */}
            <div className="min-w-0 pr-2">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400">
                <span>{project.category}</span>
                {project.year && (
                  <>
                    <span className="text-zinc-300">·</span>
                    <span>{project.year}</span>
                  </>
                )}
              </div>

              <h4 className="mt-1 font-display text-lg font-normal tracking-[-0.02em] text-zinc-950 transition-colors duration-300 group-hover:text-zinc-700 sm:text-xl md:text-2xl">
                {project.title}
              </h4>

              <p className="mt-1 text-xs text-zinc-500 line-clamp-1 sm:text-sm">
                {project.shortDescription || project.description}
              </p>
            </div>

            {/* Minimal Arrow Cue */}
            <div className="flex shrink-0 items-center justify-center pl-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/80 bg-white/80 text-zinc-500 transition-all duration-300 group-hover:border-zinc-400 group-hover:bg-zinc-950 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
