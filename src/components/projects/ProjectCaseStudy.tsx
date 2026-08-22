"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { getAdjacentProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function HangingSpider() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-2 top-0 hidden sm:block md:right-4"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <div className="h-10 w-px bg-zinc-400/60" />
        <svg width="26" height="26" viewBox="0 0 34 34" fill="none">
          <circle cx="17" cy="14" r="5" stroke={SPIDEY_RED} strokeWidth="1.8" />
          <path
            d="M17 19V24 M11 16L5 13 M23 16L29 13 M12 11L7 7 M22 11L27 7 M13 18L8 22 M21 18L26 22"
            stroke={SPIDEY_RED}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function ClassifiedStamp() {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 shadow-xs"
      style={{
        borderColor: `${SPIDEY_RED}50`,
        backgroundColor: `${SPIDEY_RED}0f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        DOSSIER · VERIFIED RECORD
      </span>
    </div>
  );
}

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { isSpideyMode } = useTheme();
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article className="relative mx-auto max-w-3xl pb-16">
      {isSpideyMode && <HangingSpider />}

      {/* Header Metadata */}
      <div className="mt-8 flex flex-wrap items-center gap-2.5 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500">
        {isSpideyMode ? (
          <>
            <span style={{ color: SPIDEY_RED }}>SPIDER-FILES // {project.category}</span>
            <ClassifiedStamp />
          </>
        ) : (
          <span>{project.category}</span>
        )}
        {project.status && (
          <>
            <span className="text-zinc-300">·</span>
            <span
              className={
                project.status === "Live"
                  ? "font-medium text-emerald-600"
                  : "text-zinc-500"
              }
            >
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

      {/* Main Title */}
      <h1 className="mt-4 font-display text-4xl font-normal leading-[1.08] tracking-[-0.035em] text-zinc-950 sm:text-5xl md:text-6xl">
        {project.title}
        {isSpideyMode && (
          <span
            className="ml-2 font-display italic text-2xl sm:text-3xl"
            style={{ color: SPIDEY_BLUE }}
          >
            ✦
          </span>
        )}
      </h1>

      {/* Lead Subtitle */}
      <p className="mt-5 text-lg leading-relaxed text-zinc-600 sm:text-xl sm:leading-8">
        {project.shortDescription}
      </p>

      {/* Action Links */}
      {(project.github || project.live) && (
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:shadow-sm"
              style={{
                backgroundColor: isSpideyMode ? SPIDEY_RED : "#0a0a0a",
              }}
            >
              <span>{isSpideyMode ? "Launch Live Mission" : "Live Application"}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 bg-white/80 px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-950 hover:text-zinc-950"
            >
              <FaGithub className="h-4 w-4" />
              <span>View Source</span>
            </a>
          )}
        </div>
      )}

      {/* Hero Visual Container */}
      <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-xl bg-zinc-200/50 ring-1 ring-zinc-900/5 shadow-xs sm:mt-12">
        <div className="relative aspect-[16/9] overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} interface preview`}
              fill
              priority
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-950 text-center text-white">
              <div>
                <span className="font-display text-4xl">
                  {project.title
                    .split(" ")
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join("")
                    .toUpperCase()}
                </span>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
                  {project.category}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Overview Section */}
      <section className="mt-14 border-t border-zinc-200/80 pt-10 sm:pt-12">
        <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
          {isSpideyMode ? "DOSSIER BRIEFING // OVERVIEW" : "Overview"}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-[17px] sm:leading-8">
          {project.description}
        </p>
      </section>

      {/* Highlights Section */}
      {project.highlights && project.highlights.length > 0 && (
        <section className="mt-12 border-t border-zinc-200/80 pt-10 sm:pt-12">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            {isSpideyMode ? "SYSTEM SPECS // KEY ARCHITECTURE" : "Key Architecture & Features"}
          </h2>
          <ul className="mt-6 space-y-3.5">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 sm:text-base sm:leading-7"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0"
                  style={{ color: isSpideyMode ? SPIDEY_RED : "#0a0a0a" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* What I Found & Fixed Section */}
      {project.keyFixes && project.keyFixes.length > 0 && (
        <section className="mt-12 border-t border-zinc-200/80 pt-10 sm:pt-12">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            {isSpideyMode ? "INCIDENT RESOLUTIONS // BUG SQUASHING" : "Engineering Insights & Fixes"}
          </h2>
          <div className="mt-6 space-y-4">
            {project.keyFixes.map((item) => (
              <div
                key={item.issue}
                className="rounded-xl border border-zinc-200/80 bg-white/70 p-5 shadow-2xs sm:p-6"
                style={{
                  borderColor: isSpideyMode ? `${SPIDEY_RED}30` : undefined,
                }}
              >
                <div className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 sm:text-[15px] sm:leading-7">
                  <ShieldAlert className="mt-1 h-4 w-4 shrink-0 text-red-500" />
                  <div>
                    <span className="font-semibold text-zinc-900">Issue: </span>
                    <span>{item.issue}</span>
                  </div>
                </div>
                <div className="mt-3.5 flex items-start gap-3 border-t border-zinc-100 pt-3.5 text-sm leading-relaxed text-zinc-700 sm:text-[15px] sm:leading-7">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                  <div>
                    <span className="font-semibold text-zinc-900">Resolution: </span>
                    <span>{item.fix}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Impact Section */}
      {project.impact && (
        <section className="mt-12 border-t border-zinc-200/80 pt-10 sm:pt-12">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
            {isSpideyMode ? "MISSION OUTCOME // IMPACT" : "Impact & Learnings"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-[17px] sm:leading-8">
            {project.impact}
          </p>
        </section>
      )}

      {/* Tech Stack Section */}
      <section className="mt-12 border-t border-zinc-200/80 pt-10 sm:pt-12">
        <h2 className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400">
          Built With
        </h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-lg border border-zinc-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-700 sm:text-sm"
              style={{
                borderColor: isSpideyMode ? `${SPIDEY_BLUE}30` : undefined,
              }}
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Adjacent Project Navigation Footer */}
      {(prev || next) && (
        <nav
          aria-label="Case study navigation"
          className="mt-16 flex items-center justify-between border-t border-zinc-200/80 pt-8"
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex flex-col items-start gap-1 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              <span
                className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400 transition-colors group-hover:text-zinc-600"
                style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </span>
              <span className="font-display text-lg font-normal text-zinc-950 transition-colors group-hover:text-zinc-700 sm:text-xl">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
            >
              <span
                className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-zinc-400 transition-colors group-hover:text-zinc-600"
                style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
              >
                Next Project
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="font-display text-lg font-normal text-zinc-950 transition-colors group-hover:text-zinc-700 sm:text-xl">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      )}
    </article>
  );
}
