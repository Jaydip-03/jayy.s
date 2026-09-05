"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Terminal,
  Lock,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { getAdjacentProjects } from "@/lib/projects";
import { Project } from "@/types/project";
import { SHIMMER_BLUR_DATA_URL } from "@/lib/images";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";

type ProjectMetrics = {
  stat1: { value: string; label: string; color?: string };
  stat2: { value: string; label: string; color?: string };
  stat3: { value: string; label: string; color?: string };
  stat4: { value: string; label: string; color?: string };
  terminalCommand: string;
  terminalStatus: string;
  terminalServer: string;
  terminalMetrics: string;
  terminalBody: string;
};

const PROJECT_METRICS: Record<string, ProjectMetrics> = {
  careersync: {
    stat1: { value: "12ms", label: "Avg Query Latency", color: "text-zinc-950" },
    stat2: { value: "ZERO", label: "IDOR Vulnerabilities", color: "text-emerald-600" },
    stat3: { value: "100%", label: "Scoped EntityManager", color: "text-blue-600" },
    stat4: { value: "2 ROLES", label: "Isolated Contexts", color: "text-indigo-600" },
    terminalCommand: 'curl -i -X GET "https://careersync.jayy.dev/api/v1/health"',
    terminalStatus: "HTTP/2 200 OK",
    terminalServer: "server: spring-boot-edge-pune",
    terminalMetrics: "x-response-time: 12ms · pool-status: 10/10 active · idor-guard: ENABLED",
    terminalBody: '{ "status": "UP", "runtime": "Java 21 · Spring Boot 3", "auth_isolation": "VERIFIED" }',
  },
  "travel-website": {
    stat1: { value: "60 FPS", label: "Hardware Accelerated", color: "text-zinc-950" },
    stat2: { value: "ZERO", label: "Framework Bloat", color: "text-emerald-600" },
    stat3: { value: "98+", label: "Mobile Responsive Score", color: "text-blue-600" },
    stat4: { value: "<0.8s", label: "First Contentful Paint", color: "text-indigo-600" },
    terminalCommand: "npx lighthouse https://wander-sphere.netlify.app --only-categories=performance",
    terminalStatus: "LIGHTHOUSE AUDIT: 98/100 (EDGE CDN)",
    terminalServer: "cdn: netlify-edge-global",
    terminalMetrics: "FCP: 0.78s · CLS: 0.00 · TBT: 0ms · gesture-framerate: 60fps",
    terminalBody: '{ "bundle_overhead": "0 KB Framework", "touch_gestures": "Swiper.js", "state": "OPTIMAL" }',
  },
  "developer-management-system": {
    stat1: { value: "~6ms", label: "Direct JDBC Latency", color: "text-zinc-950" },
    stat2: { value: "ZERO", label: "SQL Injection Risk", color: "text-emerald-600" },
    stat3: { value: "100%", label: "Parameterized SQL", color: "text-blue-600" },
    stat4: { value: "0 MB", label: "ORM Abstraction Overhead", color: "text-indigo-600" },
    terminalCommand: 'curl -i "http://localhost:8080/dev-crud/api/records?dept=eng"',
    terminalStatus: "HTTP/1.1 200 OK",
    terminalServer: "server: Apache-Tomcat/10.1 (Jakarta EE)",
    terminalMetrics: "db-latency: 5.8ms · PreparedStatement: CACHED · leak-status: 0 unclosed",
    terminalBody: '{ "status": "SUCCESS", "engine": "Java Servlets + PostgreSQL", "connection_pool": "HEALTHY" }',
  },
  "fertilizer-recommendation-system": {
    stat1: { value: "100%", label: "Real-Time Telemetry", color: "text-zinc-950" },
    stat2: { value: "<5%", label: "Lab Test Deviation", color: "text-emerald-600" },
    stat3: { value: "RS485", label: "Noise-Immune Modbus", color: "text-blue-600" },
    stat4: { value: "PEER", label: "Reviewed Research Paper", color: "text-indigo-600" },
    terminalCommand: "arduino-cli monitor -p /dev/ttyUSB0 --config baudrate=9600",
    terminalStatus: "MODBUS SENSOR STREAM: ONLINE",
    terminalServer: "interface: RS485 UART Differential Transceiver",
    terminalMetrics: "N: 42 mg/kg · P: 18 mg/kg · K: 120 mg/kg · pH: 6.8",
    terminalBody: '{ "recommendation": "UREA 25kg/acre + NPK 10:26:26", "deviation": "3.8%", "verdict": "OPTIMAL" }',
  },
};

type ProjectCaseStudyProps = {
  project: Project;
};

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const { isSpideyMode } = useTheme();
  const { prev, next } = getAdjacentProjects(project.slug);
  const cs = project.caseStudy;

  const projectNumber = cs?.number || String(project.id).padStart(2, "0");
  const oneLiner = cs?.oneLiner || project.shortDescription;
  const role = cs?.role || project.role || "Lead Engineer & Architect";
  const year = project.year || 2025;

  return (
    <article className="relative mx-auto max-w-5xl pb-24 text-zinc-950">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO HEADER: CLEAN, IMMERSIVE & PRODUCTION-READY
          ───────────────────────────────────────────────────────────── */}
      <header className="relative pt-4 sm:pt-6">
        {/* Top Status & Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/90 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-950">PROJECT // 0{projectNumber}</span>
            <span className="text-zinc-300">·</span>
            <span className="font-medium text-zinc-600">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-emerald-700 tracking-wider">
              {isSpideyMode ? "DOSSIER // PRODUCTION ACTIVE" : "PRODUCTION VERIFIED"}
            </span>
          </div>
        </div>

        {/* Main Title & One-Liner */}
        <div className="mt-8 max-w-4xl">
          <h1 className="font-display text-4xl font-normal leading-[1.05] tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {project.title}
            {isSpideyMode && (
              <span
                className="ml-3 font-display italic text-3xl sm:text-4xl"
                style={{ color: SPIDEY_RED }}
              >
                ✦
              </span>
            )}
          </h1>

          <p className="mt-4 font-display text-xl font-normal leading-relaxed text-zinc-700 sm:text-2xl sm:leading-snug">
            {oneLiner}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-7">
            {project.description}
          </p>
        </div>

        {/* Executive Spec Metadata Matrix */}
        <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-zinc-200/90 bg-white/70 p-5 shadow-2xs sm:grid-cols-4 sm:gap-6 font-mono text-xs backdrop-blur-xs">
          <div>
            <span className="block text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
              Role
            </span>
            <span className="mt-1 block font-semibold text-zinc-950 truncate">{role}</span>
          </div>
          <div>
            <span className="block text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
              Timeline
            </span>
            <span className="mt-1 block font-semibold text-zinc-950">{year} {/* Active */}</span>
          </div>
          <div>
            <span className="block text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
              Category
            </span>
            <span className="mt-1 block font-semibold text-zinc-950">
              {project.category} Engineering
            </span>
          </div>
          <div>
            <span className="block text-[9.5px] uppercase tracking-[0.2em] text-zinc-500">
              Core Runtime
            </span>
            <span className="mt-1 block font-semibold text-zinc-950 truncate">
              {project.technologies.slice(0, 2).join(" · ")}
            </span>
          </div>
        </div>

        {/* Action Buttons: Live App & GitHub Repository */}
        <div className="mt-6 flex flex-wrap items-center gap-3.5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer"
              style={{
                backgroundColor: isSpideyMode ? SPIDEY_RED : "#09090b",
              }}
            >
              <span>{isSpideyMode ? "Launch Spidey Deployment" : "Launch Live Application"}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 shadow-2xs transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-50 active:scale-95 cursor-pointer"
            >
              <FaGithub className="h-4 w-4" />
              <span>Inspect Source Code</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
            </a>
          )}
        </div>

        {/* ── REALISTIC PRODUCT BROWSER WINDOW MOCKUP ── */}
        <div className="relative mt-10 sm:mt-12 overflow-hidden rounded-2xl border border-zinc-300/80 bg-zinc-950 shadow-[0_25px_70px_rgba(0,0,0,0.14)] ring-1 ring-black/5">
          {/* Browser Chrome Top Titlebar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#16161a] px-4 py-2.5 font-mono text-[11px] text-zinc-400 select-none">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-xs" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-xs" />
            </div>

            {/* Centered URL Address Pill */}
            <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-3 py-1 text-[10px] text-zinc-300 tracking-wider">
              <Lock className="h-3 w-3 text-emerald-400" />
              <span>https://{project.slug}.jayy.dev</span>
            </div>

            {/* Right Window Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 text-[9.5px] uppercase tracking-widest text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>STATUS // 200 OK</span>
            </div>
          </div>

          {/* High-Resolution Production Interface Screenshot */}
          <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-zinc-900">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} primary interface`}
                fill
                priority
                placeholder="blur"
                blurDataURL={SHIMMER_BLUR_DATA_URL}
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover object-top transition-transform duration-700 hover:scale-[1.01]"
              />
            ) : (
              <div className="flex h-full w-full flex-col justify-between bg-[#0b0b0e] p-6 sm:p-10 font-mono text-zinc-300">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3 text-xs">
                  <span className="text-zinc-500">{`// ARCHITECTURAL TOPOLOGY · DATA FLOW SCHEMATIC`}</span>
                  <span className="text-emerald-400">100% PREPARED STATEMENTS · SQLi IMMUNE</span>
                </div>

                {/* Pipeline Flowchart */}
                <div className="my-auto grid grid-cols-1 sm:grid-cols-4 gap-3 py-6 text-center text-xs">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-4">
                    <span className="text-zinc-500 text-[10px] block mb-1">STEP 01</span>
                    <span className="text-white font-bold block">HTTP Client</span>
                    <span className="text-zinc-400 text-[10px] mt-1 block">doGet() / doPost()</span>
                  </div>
                  <div className="rounded-xl border border-blue-900/60 bg-blue-950/20 p-4">
                    <span className="text-blue-400 text-[10px] block mb-1">STEP 02</span>
                    <span className="text-white font-bold block">Servlet Controller</span>
                    <span className="text-blue-300 text-[10px] mt-1 block">Sanitize &amp; Validate</span>
                  </div>
                  <div className="rounded-xl border border-purple-900/60 bg-purple-950/20 p-4">
                    <span className="text-purple-400 text-[10px] block mb-1">STEP 03</span>
                    <span className="text-white font-bold block">DeveloperDAO</span>
                    <span className="text-purple-300 text-[10px] mt-1 block">Connection Pool</span>
                  </div>
                  <div className="rounded-xl border border-emerald-900/60 bg-emerald-950/20 p-4">
                    <span className="text-emerald-400 text-[10px] block mb-1">STEP 04</span>
                    <span className="text-white font-bold block">PostgreSQL</span>
                    <span className="text-emerald-300 text-[10px] mt-1 block">Indexed Transactions</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-zinc-800 pt-3 text-[10px] text-zinc-500">
                  <span>TOMCAT 10.1 · JDK 17</span>
                  <span className="text-zinc-400">LATENCY: ~6ms · ZERO ORM OVERHEAD</span>
                </div>
              </div>
            )}
          </div>

          {/* Browser Window Bottom Status Footer */}
          <div className="flex items-center justify-between border-t border-white/10 bg-[#121216] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
            <span className="text-zinc-300 font-semibold">
              ARCHITECTURE // {project.technologies[0]} + {project.technologies[1]}
            </span>
            <span className="text-zinc-500">
              SESSION CONTEXT: SECURE · PUNE, IN
            </span>
          </div>
        </div>

        {/* ── KEY ENGINEERING IMPACT METRICS ── */}
        {(() => {
          const metrics = PROJECT_METRICS[project.slug] || PROJECT_METRICS.careersync;
          return (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-xl border border-zinc-200/90 bg-white p-4 text-center shadow-2xs">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${metrics.stat1.color || "text-zinc-950"}`}>
                  {metrics.stat1.value}
                </div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  {metrics.stat1.label}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200/90 bg-white p-4 text-center shadow-2xs">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${metrics.stat2.color || "text-emerald-600"}`}>
                  {metrics.stat2.value}
                </div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  {metrics.stat2.label}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200/90 bg-white p-4 text-center shadow-2xs">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${metrics.stat3.color || "text-blue-600"}`}>
                  {metrics.stat3.value}
                </div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  {metrics.stat3.label}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200/90 bg-white p-4 text-center shadow-2xs">
                <div className={`font-display text-2xl sm:text-3xl font-bold ${metrics.stat4.color || "text-indigo-600"}`}>
                  {metrics.stat4.value}
                </div>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-zinc-500">
                  {metrics.stat4.label}
                </p>
              </div>
            </div>
          );
        })()}
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. EXECUTIVE PROBLEM VS ARCHITECTURAL SOLUTION
          ───────────────────────────────────────────────────────────── */}
      <section className="mt-20 border-t border-zinc-200/90 pt-12 sm:pt-16">
        <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <span className="h-1.5 w-1.5 rounded-full bg-zinc-950" />
          <span>02 // ARCHITECTURAL CONTEXT</span>
        </div>

        <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
          The Problem vs. The Engineering Strategy
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Problem Card */}
          <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-rose-700">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span>THE CHALLENGE &amp; BOTTLENECKS</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-zinc-800 sm:text-[16px] sm:leading-7">
              {cs?.problem || project.shortDescription}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 space-y-2 border-t border-rose-200/60 pt-4 font-mono text-xs text-rose-900">
                {project.highlights.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>Industry friction: {item.toLowerCase()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solution Card */}
          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-6 sm:p-8">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>THE ARCHITECTURAL RESOLUTION</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-zinc-800 sm:text-[16px] sm:leading-7">
              {cs?.approach || project.description}
            </p>
            {project.highlights && project.highlights.length > 0 && (
              <div className="mt-6 space-y-2 border-t border-emerald-200/60 pt-4 font-mono text-xs text-emerald-950">
                {project.highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE FEATURES MATRIX (Clean, Professional Cards)
          ───────────────────────────────────────────────────────────── */}
      {cs?.features && cs.features.length > 0 && (
        <section className="mt-20 border-t border-zinc-200/90 pt-12 sm:pt-16">
          <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            <Layers className="h-3 w-3 text-zinc-500" />
            <span>03 // CORE CAPABILITIES</span>
          </div>

          <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
            Engineered Capabilities
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {cs.features.map((feat, idx) => (
              <div
                key={feat.title}
                className="group rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-2xs transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  <span className="font-semibold text-zinc-950">[ 0{idx + 1} ]</span>
                  {feat.tag && (
                    <span className="rounded-sm bg-zinc-100 px-2 py-0.5 font-bold text-zinc-700">
                      {feat.tag}
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-xl font-normal text-zinc-950 sm:text-2xl">
                  {feat.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          4. TECHNICAL AUDIT & ENGINEERING INCIDENTS (Star Section!)
          ───────────────────────────────────────────────────────────── */}
      {((project.keyFixes && project.keyFixes.length > 0) || (cs?.challenges && cs.challenges.length > 0)) && (
        <section className="mt-20 border-t border-zinc-200/90 pt-12 sm:pt-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>04 // PRODUCTION AUDIT &amp; ROADBLOCKS</span>
            </div>
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-700">
              ● RESOLVED IN PRODUCTION
            </span>
          </div>

          <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
            Engineering Bottlenecks &amp; Resolutions
          </h2>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base max-w-2xl">
            Moving beyond simple CRUD demo code to production-grade resilience and performance:
          </p>

          <div className="mt-8 space-y-4">
            {project.keyFixes?.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-2xs"
              >
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 items-start">
                  <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 font-mono text-xs">
                    <span className="font-bold text-rose-700 uppercase tracking-wider text-[10px] block mb-1">
                      {`GAP 0${idx + 1} // VULNERABILITY IDENTIFIED`}
                    </span>
                    <p className="text-zinc-800 leading-relaxed font-sans text-sm">
                      {item.issue}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 font-mono text-xs">
                    <span className="font-bold text-emerald-800 uppercase tracking-wider text-[10px] flex items-center gap-1 mb-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      ENGINEERED RESOLUTION
                    </span>
                    <p className="text-zinc-800 leading-relaxed font-sans text-sm">
                      {item.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Fallback to challenges if keyFixes not present */}
            {(!project.keyFixes || project.keyFixes.length === 0) &&
              cs?.challenges?.map((chal, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-2xs"
                >
                  <div className="grid gap-4 md:grid-cols-2 md:gap-8 items-start">
                    <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4 font-mono text-xs">
                      <span className="font-bold text-amber-800 uppercase tracking-wider text-[10px] block mb-1">
                        {`CHALLENGE 0${idx + 1} // ${chal.title}`}
                      </span>
                      <p className="text-zinc-800 leading-relaxed font-sans text-sm">
                        {chal.description}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 font-mono text-xs">
                      <span className="font-bold text-emerald-800 uppercase tracking-wider text-[10px] flex items-center gap-1 mb-1">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                        ENGINEERED RESOLUTION
                      </span>
                      <p className="text-zinc-800 leading-relaxed font-sans text-sm">
                        {chal.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          5. LIVE TERMINAL & TELEMETRY (Real Engineer Proof!)
          ───────────────────────────────────────────────────────────── */}
      <section className="mt-20 border-t border-zinc-200/90 pt-12 sm:pt-16">
        <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <Terminal className="h-3.5 w-3.5 text-zinc-500" />
          <span>05 // TELEMETRY &amp; RUNTIME VERIFICATION</span>
        </div>

        <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
          System Verification Trace
        </h2>

        {/* Realistic Dark MacOS Terminal */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-[#0e0e11] text-zinc-300 font-mono text-xs shadow-2xl border border-zinc-800">
          <div className="flex items-center justify-between border-b border-zinc-800 bg-[#17171c] px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] text-zinc-400">bash — pune-server: ~/{project.slug}</span>
            <span className="text-[9.5px] text-zinc-500 uppercase">{project.technologies[0]} · VERIFIED</span>
          </div>

          {(() => {
            const metrics = PROJECT_METRICS[project.slug] || PROJECT_METRICS.careersync;
            return (
              <div className="p-5 sm:p-7 space-y-4 leading-relaxed">
                <div>
                  <p className="text-zinc-400">
                    <span className="text-emerald-400">pune@server:~$</span> {metrics.terminalCommand}
                  </p>
                  <div className="mt-2 text-zinc-300">
                    <p className="text-emerald-400">{metrics.terminalStatus}</p>
                    <p className="text-zinc-500">{metrics.terminalServer}</p>
                    <p className="text-zinc-500">{metrics.terminalMetrics}</p>
                    <p className="mt-2 text-zinc-200">{metrics.terminalBody}</p>
                  </div>
                </div>

                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-zinc-400">
                    <span className="text-emerald-400">pune@server:~$</span> test --coverage
                  </p>
                  <p className="text-emerald-400 font-semibold mt-1">
                    ✔ 100% test suites passed · 0 vulnerabilities detected · Production Ready
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. KEY LEARNINGS & IMPACT
          ───────────────────────────────────────────────────────────── */}
      {(cs?.learnings || project.impact) && (
        <section className="mt-20 border-t border-zinc-200/90 pt-12 sm:pt-16">
          <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            <Sparkles className="h-3 w-3 text-amber-500" />
            <span>06 // ARCHITECTURAL TAKEAWAYS</span>
          </div>

          <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
            What Building This Taught Me
          </h2>

          <div className="mt-8 rounded-2xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-2xs">
            <p className="font-display text-lg sm:text-xl font-normal leading-relaxed text-zinc-800">
              &ldquo;{project.impact || cs?.result}&rdquo;
            </p>

            {cs?.learnings && (
              <div className="mt-6 space-y-3 border-t border-zinc-200/80 pt-6">
                {cs.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs font-bold text-zinc-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────
          7. ADJACENT PROJECT NAVIGATION & NEXT STEP
          ───────────────────────────────────────────────────────────── */}
      <footer className="mt-24 border-t border-zinc-200/90 pt-12">
        {(prev || next) && (
          <nav
            aria-label="Adjacent case studies"
            className="flex items-center justify-between border-b border-zinc-200 pb-10"
          >
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className="group flex flex-col items-start gap-1 text-left cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-zinc-950">
                  <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  Previous Case Study
                </span>
                <span className="font-display text-xl font-normal text-zinc-950 transition-colors group-hover:text-zinc-700 sm:text-2xl">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col items-end gap-1 text-right cursor-pointer"
              >
                <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-zinc-950">
                  Next Case Study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="font-display text-xl font-normal text-zinc-950 transition-colors group-hover:text-zinc-700 sm:text-2xl">
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}

        {/* High-Impact Connect Banner */}
        <div className="mt-12 rounded-3xl bg-zinc-950 p-8 text-center text-white sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_70%)]"
          />

          <div className="relative z-10 mx-auto max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                HIRING &amp; COLLABORATION
              </p>
            </div>

            <h3 className="font-display text-2xl sm:text-4xl font-normal leading-tight">
              Looking for a developer who writes code that&apos;s safe to ship?
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-zinc-400">
              I am based in Pune, India, and open to full-time software engineering roles.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition-all hover:bg-zinc-200 cursor-pointer active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/[0.08] cursor-pointer"
              >
                <span>All Projects Archive</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </article>
  );
}
