"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { experiences } from "@/constants/experience";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const currentExp = experiences.find((exp) => exp.current);
  const pastExp = experiences.filter((exp) => !exp.current);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute left-5 top-0 h-full w-px bg-zinc-800 lg:left-7" />
      <motion.div
        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
        className="absolute left-5 top-0 h-full w-px bg-emerald-400 lg:left-7"
      />

      <div className="space-y-16">
        {currentExp && <ExperienceItem experience={currentExp} index={0} />}

        {pastExp.length > 0 && (
          <div className="relative pl-20">
            <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-[#050505] text-sm font-semibold text-white z-10">
              02
            </div>

            <p className="mb-4 text-xs uppercase tracking-widest text-zinc-500">
              Earlier
            </p>

            <div className="flex flex-col gap-3">
              {pastExp.map((exp) => (
                <Link
                  key={exp.slug}
                  href={`/experience/${exp.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-800 px-5 py-4 transition-all hover:border-emerald-500/40 hover:bg-white/[0.02]"
                >
                  <div>
                    <p className="font-medium text-white transition-colors group-hover:text-emerald-300">
                      {exp.role}
                    </p>
                    <p className="mt-0.5 text-sm text-zinc-500">
                      {exp.company} · {exp.duration}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-zinc-600 transition-colors group-hover:text-emerald-400"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}