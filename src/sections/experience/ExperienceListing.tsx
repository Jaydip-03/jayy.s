"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  Database,
  GitBranch,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

import Container from "@/components/ui/Container";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";

function HangingSpider() {
  return (
    <motion.div
      animate={{ y: [0, 8, 0], rotate: [-2, 3, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="pointer-events-none absolute right-4 top-[-10px] hidden sm:block md:right-10"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <div className="h-10 w-px bg-zinc-400/60" />
        <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
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

function ClassifiedBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 shadow-2xs"
      style={{
        borderColor: `${SPIDEY_RED}50`,
        backgroundColor: `${SPIDEY_RED}0f`,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
      <span className="font-mono text-[8.5px] font-black uppercase tracking-wider" style={{ color: SPIDEY_RED }}>
        VERIFIED FIELD RECORD
      </span>
    </motion.div>
  );
}

const skillCategories = [
  {
    name: "Backend Architecture",
    icon: Cpu,
    skills: ["Java (JDK 17/21)", "Spring Boot 3", "Spring Data JPA", "Hibernate ORM", "JDBC", "Java Servlets", "RESTful APIs"],
  },
  {
    name: "Database & Persistence",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "Relational Modeling", "ACID Transactions", "HikariCP Pooling", "JPQL Queries"],
  },
  {
    name: "Frontend & Interfaces",
    icon: Layers,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "JavaScript (ES6+)", "Responsive Design"],
  },
  {
    name: "Engineering Practices",
    icon: GitBranch,
    skills: ["Git & GitHub Workflows", "Maven & Gradle", "Postman API Testing", "IDOR Hardening", "MVC Pattern", "Agile Sprints"],
  },
];

export default function ExperienceListing() {
  const { isSpideyMode } = useTheme();

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-zinc-950">
      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL HEADER SECTION
          ───────────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-zinc-200/90 pb-16 pt-28 md:pt-36 sm:pb-20">
        {/* Subtle Architectural Paper Dot Grid Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Precision Crosshairs */}
        <div aria-hidden="true" className="pointer-events-none absolute left-6 top-8 font-mono text-[11px] text-zinc-400 select-none">
          +
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute right-6 top-8 font-mono text-[11px] text-zinc-400 select-none">
          +
        </div>

        <Container className="relative z-10">
          {/* Top Breadcrumb & Status */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200/90 pb-4 font-mono text-xs text-zinc-600">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-zinc-950"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to overview</span>
            </Link>

            <div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                STATUS // OPEN TO FULL-TIME ROLES
              </span>
              <span>•</span>
              <span>PUNE, IN</span>
            </div>
          </div>

          {/* Heading Content */}
          <div className="relative max-w-4xl">
            {isSpideyMode && <HangingSpider />}

            <div className="flex items-center gap-3">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500 font-semibold">
                {isSpideyMode ? "SPIDER-DOSSIER // FIELD TIMELINE" : "Career Chronology"}
              </p>
              {isSpideyMode && <ClassifiedBadge />}
            </div>

            <h1 className="mt-3 font-display text-4xl font-normal tracking-[-0.04em] text-zinc-950 sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.05]">
              {isSpideyMode ? "The Spider-Log." : "Career Timeline."}
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
              Every chapter of code, systems thinking, and production engineering.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-7">
              From foundational computer science theory and rigorous Java full-stack training, to building production enterprise applications with Spring Boot, PostgreSQL, and secure REST APIs.
            </p>

            {/* Quick Action Dock: Download CV & Contact */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer"
                style={{
                  backgroundColor: isSpideyMode ? SPIDEY_RED : "#09090b",
                }}
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download Resume (PDF)</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-900 shadow-2xs transition-all duration-300 hover:border-zinc-950 hover:bg-zinc-50 active:scale-95 cursor-pointer"
              >
                <span>Discuss Opportunities</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400" />
              </Link>
            </div>
          </div>

          {/* Quick Telemetry Strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 font-mono text-xs">
            <div className="rounded-xl border border-zinc-200/90 bg-white/80 p-4 shadow-2xs backdrop-blur-xs">
              <span className="block text-[9.5px] uppercase tracking-wider text-zinc-500">Current Role</span>
              <span className="mt-1 block font-bold text-zinc-950 truncate">Full Stack Intern</span>
              <span className="text-[10px] text-zinc-500">Robowaves Tech</span>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-white/80 p-4 shadow-2xs backdrop-blur-xs">
              <span className="block text-[9.5px] uppercase tracking-wider text-zinc-500">Specialization</span>
              <span className="mt-1 block font-bold text-zinc-950 truncate">Spring Boot &amp; Java</span>
              <span className="text-[10px] text-zinc-500">Enterprise Backend</span>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-white/80 p-4 shadow-2xs backdrop-blur-xs">
              <span className="block text-[9.5px] uppercase tracking-wider text-zinc-500">Academic Base</span>
              <span className="mt-1 block font-bold text-zinc-950 truncate">B.Tech IT (2025)</span>
              <span className="text-[10px] text-zinc-500">Pune, India</span>
            </div>
            <div className="rounded-xl border border-zinc-200/90 bg-white/80 p-4 shadow-2xs backdrop-blur-xs">
              <span className="block text-[9.5px] uppercase tracking-wider text-zinc-500">Primary Objective</span>
              <span className="mt-1 block font-bold text-emerald-700 truncate">Full-Time SDE</span>
              <span className="text-[10px] text-emerald-600">Immediate Start</span>
            </div>
          </div>
        </Container>
      </header>

      {/* ─────────────────────────────────────────────────────────────
          2. TIMELINE CHAPTERS: CLEAN STATION-RAIL DESIGN
          ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24">
        <Container className="relative z-10">
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((experience, index) => {
              const relatedProj = experience.relatedProject
                ? projects.find((p) => p.slug === experience.relatedProject)
                : null;

              return (
                <motion.article
                  key={experience.slug}
                  id={experience.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative rounded-3xl border border-zinc-200/90 bg-white p-6 sm:p-10 shadow-2xs transition-all duration-300 hover:border-zinc-400 hover:shadow-md"
                >
                  {/* Top Chapter Metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-100 pb-5 font-mono text-xs">
                    <div className="flex items-center gap-3">
                      <span
                        className="font-bold tracking-wider"
                        style={{ color: isSpideyMode ? SPIDEY_RED : "#09090b" }}
                      >
                        [ CHAPTER {experience.chapter ?? String(index + 1).padStart(2, "0")} ]
                      </span>
                      <span className="text-zinc-300">/</span>
                      <span className="text-zinc-600 font-medium">{experience.duration}</span>
                      {experience.location && (
                        <>
                          <span className="text-zinc-300">•</span>
                          <span className="text-zinc-500">{experience.location}</span>
                        </>
                      )}
                    </div>

                    {experience.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        ACTIVE DEPLOYMENT
                      </span>
                    )}
                  </div>

                  {/* Company & Role Heading */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        {experience.slug === "engineering-education" ? (
                          <GraduationCap className="h-3.5 w-3.5 text-zinc-600" />
                        ) : experience.slug === "jspiders" ? (
                          <Building2 className="h-3.5 w-3.5 text-zinc-600" />
                        ) : (
                          <Briefcase className="h-3.5 w-3.5 text-zinc-600" />
                        )}
                        <span>{experience.company}</span>
                      </div>

                      <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-950">
                        {experience.role}
                      </h2>
                    </div>

                    {experience.aside && (
                      <span className="font-mono text-[11px] text-zinc-400 italic">
                        {`// ${experience.aside}`}
                      </span>
                    )}
                  </div>

                  {experience.highlight && (
                    <p className="mt-3 font-display text-lg italic text-zinc-600 sm:text-xl">
                      &ldquo;{experience.highlight}&rdquo;
                    </p>
                  )}

                  {/* Narrative Description */}
                  <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-700 sm:text-base sm:leading-7">
                    {experience.description}
                  </p>

                  {/* Key Responsibilities & Deliverables */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mt-8 rounded-2xl bg-zinc-50/70 p-5 sm:p-6 border border-zinc-200/70">
                      <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-bold">
                        Key Responsibilities &amp; Engineering Deliverables
                      </h3>
                      <ul className="mt-4 space-y-2.5 max-w-3xl">
                        {experience.achievements.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-relaxed text-zinc-700 sm:text-[15px]"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies Chips */}
                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-100">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 mr-2">
                        Stack //
                      </span>
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-zinc-200 bg-white px-2.5 py-1 font-mono text-[10.5px] text-zinc-800 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Related Project Bridge */}
                  {relatedProj && (
                    <div className="mt-6 flex items-center justify-between rounded-xl border border-zinc-200/80 bg-zinc-50/50 px-4 py-3 font-mono text-xs">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Terminal className="h-3.5 w-3.5 text-zinc-500" />
                        <span>Connected Project: <strong className="text-zinc-950 font-semibold">{relatedProj.title}</strong></span>
                      </div>
                      <Link
                        href={`/work/${relatedProj.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-zinc-950 hover:underline cursor-pointer"
                      >
                        <span>View Architecture Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  )}
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. COMPREHENSIVE SKILLS & SYSTEMS MASTERY MATRIX
          ───────────────────────────────────────────────────────────── */}
      <section className="relative border-t border-zinc-200/90 py-16 sm:py-24 bg-white">
        <Container className="relative z-10">
          <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            <Cpu className="h-3.5 w-3.5 text-zinc-500" />
            <span>03 // TECHNICAL TELEMETRY &amp; CAPABILITIES</span>
          </div>

          <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
            Engineering Competencies &amp; Toolkit
          </h2>
          <p className="mt-2 text-sm text-zinc-600 sm:text-base max-w-2xl">
            The core tools, languages, and patterns I use to deliver performant and secure software:
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="rounded-2xl border border-zinc-200 bg-[#fbfbf9] p-5 sm:p-6 shadow-2xs"
                >
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                    <Icon className="h-4 w-4 text-zinc-700" />
                    <span>{category.name}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-zinc-200/80 bg-white px-2.5 py-1 font-mono text-[11px] text-zinc-800 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. ENGINEERING CODE VALUES & DISCIPLINE
          ───────────────────────────────────────────────────────────── */}
      <section className="relative border-t border-zinc-200/90 py-16 sm:py-24">
        <Container className="relative z-10">
          <div className="mb-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>04 // CODE QUALITY &amp; PRINCIPLES</span>
          </div>

          <h2 className="font-display text-3xl font-normal tracking-[-0.03em] text-zinc-950 sm:text-4xl">
            How I Approach Software Engineering
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                01 // SECURITY BY DEFAULT
              </span>
              <h3 className="mt-3 font-display text-xl text-zinc-950 font-normal">
                Defensive Boundary Design
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                IDOR-proof session validation on every DAO endpoint. 100% PreparedStatements for SQL injection immunity. Zero credentials checked into version control.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-xs font-bold text-blue-700 uppercase tracking-wider block">
                02 // CONCURRENCY RESILIENCE
              </span>
              <h3 className="mt-3 font-display text-xl text-zinc-950 font-normal">
                Thread-Safe Resource Lifecycle
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Request-scoped EntityManagers with rigorous try/finally cleanup. Preventing database connection pool starvation under concurrent user load.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xs">
              <span className="font-mono text-xs font-bold text-purple-700 uppercase tracking-wider block">
                03 // INTENTIONAL SIMPLICITY
              </span>
              <h3 className="mt-3 font-display text-xl text-zinc-950 font-normal">
                Mastering the Underlying Plumbing
              </h3>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                Building with raw Java Servlets and JDBC before abstracting with Spring Boot. Understanding low-level HTTP protocols, byte streams, and memory overhead.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. BOTTOM HIRING CTA
          ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-200/90 bg-zinc-950 py-16 sm:py-24 text-white">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                AVAILABLE FOR HIRE
              </p>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-normal leading-tight">
              Ready to add a dedicated Java Full-Stack Engineer to your team?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
              I am open to full-time developer roles, product engineering teams, and high-impact software challenges in Pune, India or remote.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-black shadow-lg transition-all hover:bg-zinc-200 cursor-pointer active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-white hover:bg-white/[0.08] cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" />
                <span>View Full Resume</span>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
