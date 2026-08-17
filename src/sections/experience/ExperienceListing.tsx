"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ExperiencePageShell from "@/components/experience/ExperiencePageShell";
import { experiences } from "@/constants/experience";

export default function ExperienceListing() {
  return (
    <ExperiencePageShell backHref="/#experience" backLabel="Back to experience">
      <div className="mt-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
          Career
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Full timeline
        </h1>
        <p className="mt-4 text-base leading-8 text-zinc-400 sm:text-[17px]">
          Every chapter — internship, training, and the work that shaped how I
          build with Java and Spring Boot.
        </p>
      </div>

      <div className="mt-14 space-y-5 md:mt-16">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <Link
              href={`/experience/${experience.slug}`}
              className="group block overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-white/20 sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-zinc-600">
                  {experience.chapter ?? String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-zinc-500">
                  {experience.duration}
                </span>
                {experience.current && (
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-300">
                    Current
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
                    {experience.company}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white group-hover:text-zinc-200 sm:text-3xl">
                    {experience.role}
                  </h2>
                  {experience.highlight && (
                    <p className="mt-2 font-display text-base italic text-zinc-500">
                      {experience.highlight}
                    </p>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition group-hover:text-white">
                  Open
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </ExperiencePageShell>
  );
}
