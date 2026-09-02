"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Database, GitBranch, Mail, Sparkles } from "lucide-react";

import { Experience } from "@/types/experience";

type ExperienceFeaturedCardProps = {
  experience: Experience;
};

const achievementIcons = [Sparkles, Database, Mail, GitBranch];

export default function ExperienceFeaturedCard({
  experience,
}: ExperienceFeaturedCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-8 border-b border-white/[0.10] py-12 md:grid-cols-[150px_minmax(0,1fr)] md:gap-10 lg:grid-cols-[170px_minmax(0,1fr)] lg:py-14"
    >
      {/* Left Period Column */}
      <div className="relative md:pr-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-white/30">
          Now
        </p>
        <p className="mt-4 max-w-[120px] text-sm leading-6 text-white/50">
          {experience.duration}
        </p>
        {experience.location && (
          <p className="mt-1 text-xs text-white/35">
            · {experience.location}
          </p>
        )}
      </div>

      {/* Right Content Column with Timeline Rail */}
      <div className="relative border-l border-white/[0.10] pl-7 md:pl-10">
        <span
          aria-hidden="true"
          className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-[#050505] bg-emerald-400 ring-2 ring-emerald-400/20"
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
            {experience.company}
          </p>
          <span className="text-white/15">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Currently here
          </span>
        </div>

        <h3 className="mt-3 font-display text-2xl font-normal leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-[2.25rem]">
          {experience.role}
        </h3>

        {experience.highlight && (
          <p className="mt-2.5 font-display text-base italic text-white/40 sm:text-lg">
            {experience.highlight}
          </p>
        )}

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/55 sm:text-[15px] sm:leading-7">
          {experience.description}
        </p>

        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mt-6 max-w-3xl">
            {experience.achievements.slice(0, 4).map((point, index) => {
              const Icon = achievementIcons[index] ?? Sparkles;

              return (
                <div
                  key={point}
                  className="group/point flex items-start gap-3.5 border-b border-white/[0.06] py-3 first:border-t"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 stroke-[1.7] text-white/70 transition-transform duration-300 group-hover/point:scale-110"
                  />
                  <p className="text-xs leading-relaxed text-white/55 sm:text-sm sm:leading-6">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <Link
          href={`/experience#${experience.slug}`}
          className="group/link mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-white/70"
        >
          <span>Read the full story</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
