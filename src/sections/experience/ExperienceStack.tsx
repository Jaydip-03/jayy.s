"use client";

import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { experiences } from "@/constants/experience";
import { useTheme } from "@/context/ThemeContext";

import ExperienceChapterCard from "./ExperienceChapterCard";
import ExperienceFeaturedCard from "./ExperienceFeaturedCard";

export default function ExperienceStack() {
  const { isSpideyMode } = useTheme();
  const current = experiences.find((item) => item.current);
  // Curate to 2 key industry chapters on home: Current Internship (Robowaves) + Core Java Apprenticeship (JSpiders)
  const past = experiences.filter((item) => !item.current).slice(0, 1);

  return (
    <div className="mt-0">
      {current && <ExperienceFeaturedCard experience={current} />}

      {past.map((experience, index) => (
        <ExperienceChapterCard
          key={experience.slug}
          experience={experience}
          index={index}
        />
      ))}

      {/* Bottom Bridge to Full Timeline */}
      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/15">
        <div className="flex items-center gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
            <GraduationCap className="h-5 w-5 text-white/70" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-white/40">
              Also in Archive
            </p>
            <p className="text-sm font-medium text-white/90">
              B.Tech in Information Technology (2021 – 2025) & Full Skill Matrix
            </p>
          </div>
        </div>

        <Link
          href="/experience"
          className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 shrink-0 ${
            isSpideyMode
              ? "border-[#e23636]/40 bg-[#e23636]/10 text-white hover:border-[#e23636] hover:bg-[#e23636]/20 shadow-[0_0_15px_rgba(226,54,54,0.15)]"
              : "border-white/15 bg-white/[0.05] text-white hover:border-white/30 hover:bg-white/10"
          }`}
        >
          <span>View Full Timeline</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

