


"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Experience } from "@/types/experience";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

export default function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-20"
    >
      <div
        className={`absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border bg-[#050505] text-sm font-semibold text-white z-10 ${
          experience.current ? "border-emerald-500/60" : "border-zinc-700"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="pb-14 border-b border-zinc-800 -mx-4 px-4 rounded-2xl transition-colors duration-300 hover:bg-white/[0.02]">
        <p className="text-sm tracking-wide text-zinc-500">
          {experience.duration}
        </p>

        <div className="mt-3 flex items-start justify-between gap-8">
          <div>
            <h3 className="text-3xl font-semibold text-white leading-tight">
              {experience.role}
            </h3>

            <Link
              href={`/experience/${experience.slug}`}
              className="group mt-3 inline-flex items-center gap-2 text-zinc-400 transition-all duration-300 hover:text-white"
            >
              {experience.company}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {experience.current && (
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/5 px-4 py-2 text-xs uppercase tracking-widest text-emerald-300">
              Current
            </span>
          )}
        </div>

        <p className="mt-6 max-w-xl text-[16px] leading-8 text-zinc-400">
          {experience.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-emerald-500/50 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}