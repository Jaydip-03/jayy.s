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
      <div className="relative md:pr-6">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-white/30">
          Now
        </p>
        <p className="mt-5 max-w-[120px] text-sm leading-6 text-white/45">
          {experience.duration}
        </p>
        {experience.location && (
          <p className="mt-2 text-sm leading-6 text-white/35">
            · {experience.location}
          </p>
        )}
      </div>

      <div className="relative border-l border-white/[0.10] pl-7 md:pl-10">
        <span
          aria-hidden="true"
          className="absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border-2 border-[#050505] bg-emerald-400 ring-1 ring-emerald-400/20"
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/45">
            {experience.company}
          </p>
          <span className="text-white/15">·</span>
          <span className="inline-flex items-center gap-1.5 border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Currently here
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          {experience.role}
        </h3>

        {experience.highlight && (
          <p className="mt-3 font-display text-base italic text-white/40 sm:text-lg">
            {experience.highlight}
          </p>
        )}

        <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/55 sm:text-base">
          {experience.description}
        </p>

        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mt-7 max-w-3xl">
            {experience.achievements.slice(0, 4).map((point, index) => {
              const Icon = achievementIcons[index] ?? Sparkles;

              return (
                <div
                  key={point}
                  className="group/point flex items-start gap-4 border-b border-white/[0.08] py-3.5 first:border-t"
                >
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 stroke-[1.7] text-[#f59e0b] transition-transform duration-300 group-hover/point:scale-110"
                  />
                  <p className="text-sm leading-6 text-white/55 sm:text-[15px]">
                    {point}
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <Link
          href={`/experience/${experience.slug}`}
          className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#f59e0b]"
        >
          Read the full story
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
