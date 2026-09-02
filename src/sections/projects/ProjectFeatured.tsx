"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Code2, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "@/types/project";
import ProjectImage from "./ProjectImage";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_BLUE = "#006fb9";

type ProjectFeaturedProps = {
  project: Project;
};

export default function ProjectFeatured({ project }: ProjectFeaturedProps) {
  const { isSpideyMode } = useTheme();
  const [viewMode, setViewMode] = useState<"ui" | "blueprint">("ui");

  const description = project.description || project.shortDescription;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div className="grid gap-10 lg:grid-cols-[1.22fr_1fr] lg:items-center lg:gap-12 xl:gap-16">
        
        {/* ── Exhibition Matte Presentation with Maker's Proof Toggle ── */}
        <div className="relative">
          {/* Outer Matte Frame */}
          <div className="relative rounded-2xl bg-white/90 p-2.5 sm:p-3.5 shadow-[0_24px_55px_rgba(0,0,0,0.07)] ring-1 ring-zinc-950/10 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.11)]">
            
            {/* Top Interactive Mode Switcher */}
            <div className="flex items-center justify-between px-2 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600 border-b border-zinc-100 pb-2.5 mb-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setViewMode("ui")}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-0.5 transition-all duration-200 ${
                    viewMode === "ui"
                      ? "bg-zinc-950 text-white font-semibold shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>01 // UI PREVIEW</span>
                </button>

                <button
                  type="button"
                  onClick={() => setViewMode("blueprint")}
                  className={`flex items-center gap-1.5 rounded-md px-2 py-0.5 transition-all duration-200 ${
                    viewMode === "blueprint"
                      ? "bg-zinc-950 text-white font-semibold shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-950 hover:bg-zinc-100"
                  }`}
                >
                  <Code2 className="h-3 w-3" />
                  <span>02 // ARCHITECTURE AUDIT</span>
                </button>
              </div>

              <span className="hidden sm:inline text-zinc-400 font-mono">
                {`${project.technologies[1] || "SPRING BOOT 3"} · ${project.technologies[0] || "JVM 21"}`.toUpperCase()}
              </span>
            </div>

            {/* Main Interactive Screen Area */}
            <div className="relative min-h-[360px] sm:min-h-0 sm:aspect-[16/9.8] overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-zinc-900/5">
              <AnimatePresence mode="wait">
                {viewMode === "ui" ? (
                  <motion.div
                    key="ui"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="h-full w-full"
                  >
                    <Link
                      href={`/work/${project.slug}`}
                      className="block h-full w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
                      aria-label={`View ${project.title} case study`}
                    >
                      <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]">
                        <ProjectImage
                          project={project}
                          priority
                          aspect="aspect-[16/9.8]"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key="blueprint"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full w-full flex-col justify-between overflow-y-auto p-4 sm:p-6 text-zinc-200 font-mono"
                  >
                    {/* Architectural Ledger Header */}
                    <div>
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 text-[10px] uppercase tracking-widest text-zinc-400">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                          <Terminal className="h-3 w-3" />
                          <span>MAKER ARCHITECTURE AUDIT</span>
                        </span>
                        <span>LATENCY: 18ms</span>
                      </div>

                      <div className="mt-3.5 space-y-2.5 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="text-emerald-400">●</span>
                          <p className="text-zinc-300">
                            <span className="text-white font-semibold">IDOR Hardened:</span> Added session-validated DAO authorization layers to block unauthorized resume/application access.
                          </p>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-blue-400">●</span>
                          <p className="text-zinc-300">
                            <span className="text-white font-semibold">Concurrency Guard:</span> Rewrote JPAUtil to allocate request-scoped EntityManagers with try/finally cleanup.
                          </p>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-purple-400">●</span>
                          <p className="text-zinc-300">
                            <span className="text-white font-semibold">Async Notification:</span> Decoupled Jakarta Mail SMTP triggers from HTTP response cycle.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Code Snippet Proof */}
                    <div className="rounded-lg bg-black/60 p-3 text-[11px] border border-zinc-800/80 text-zinc-400">
                      <span className="text-emerald-400">{`// Auth Guard: Validate ownership before returning data`}</span>
                      <p className="text-zinc-300 mt-1">
                        if (!app.getCandidateId().equals(sessionUser.getId())) &#123;
                        <br />
                        &nbsp;&nbsp;throw new UnauthorizedException(&quot;Access Denied&quot;);
                        <br />
                        &#125;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-zinc-800/80 text-[9px] uppercase tracking-wider text-zinc-500">
                      <span>POSTGRESQL 15 ACID COMPLIANT</span>
                      <span>100% PRODUCTION READY</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Matte Coordinates */}
            <div className="flex items-center justify-between px-2 pt-2 font-mono text-[8.5px] uppercase tracking-[0.22em] text-zinc-600">
              <span>SCALE // 1:1 REPO AUDIT</span>
              <span>VERIFIED ENTERPRISE ENGINE</span>
            </div>
          </div>

          {/* Spidey Mode Classified Dossier Stamp */}
          {isSpideyMode && (
            <div className="pointer-events-none absolute -top-3 -right-3 z-10 hidden sm:block">
              <div className="rotate-6 rounded-md border border-[#e23636]/60 bg-[#e23636] px-2.5 py-1 font-mono text-[9px] font-black uppercase tracking-wider text-white shadow-md">
                🕷️ CLASSIFIED // PRIORITY 01
              </div>
            </div>
          )}
        </div>

        {/* ── Editorial Content Column ── */}
        <div className="flex flex-col justify-center">
          {/* Subtle Category & Status */}
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-zinc-600">
            <span>{project.category}</span>
            {project.status && (
              <>
                <span className="text-zinc-300">·</span>
                <span className={`font-medium ${isSpideyMode ? "text-[#e23636]" : "text-emerald-700"}`}>
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
          <h3 className="mt-3 font-display text-3xl font-normal leading-[1.06] tracking-[-0.035em] text-zinc-950 transition-colors duration-300 group-hover:text-zinc-700 sm:text-4xl lg:text-[2.5rem]">
            <Link
              href={`/work/${project.slug}`}
              className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-950"
            >
              {project.title}
            </Link>
          </h3>

          {/* Project Narrative */}
          <p className="mt-3.5 text-sm leading-relaxed text-zinc-600 sm:text-[15px] sm:leading-7">
            {description}
          </p>

          {/* 3 Architectural Craft Callout Chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {(project.highlights && project.highlights.length > 0
              ? project.highlights.slice(0, 3).map((h, i) => `0${i + 1} / ${h}`)
              : [
                  "01 / Role-Based Access",
                  "02 / IDOR Hardened",
                  "03 / Clean JPA Pool",
                ]
            ).map((chip) => (
              <span
                key={chip}
                className="rounded-md border border-zinc-900/10 bg-white/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-700 shadow-2xs"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Editorial Divider & Actions */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200/90 pt-5 text-xs font-medium">
            <div className="flex items-center gap-6">
              <Link
                href={`/work/${project.slug}`}
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
              >
                <span>{isSpideyMode ? "Inspect Dossier ↗" : "Inspect Case Study"}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition-colors hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>Repository</span>
                </a>
              )}
            </div>

            {/* Handwritten Note */}
            <span
              className="font-handwritten text-[15px] leading-none"
              style={{ color: isSpideyMode ? SPIDEY_BLUE : "#71717a" }}
            >
              {isSpideyMode ? "web-slinging code 🕸️ ⤷" : "architected from scratch ⤷"}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
