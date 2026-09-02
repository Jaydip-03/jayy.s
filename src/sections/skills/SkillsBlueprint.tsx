"use client";

import { motion } from "framer-motion";
import {
  Database,
  Globe2,
  Layers3,
  Server,
  Cpu,
  Workflow,
  ShieldCheck,
} from "lucide-react";

import { FaJava } from "react-icons/fa";
import {
  SiApachekafka,
  SiApachemaven,
  SiDocker,
  SiFramer,
  SiGithub,
  SiIntellijidea,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiSpringsecurity,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type SkillIcon = IconType | LucideIcon;

export type TechItem = {
  name: string;
  icon: SkillIcon;
  color: string;
  highlight?: boolean;
  tag?: string;
  layer: string;
  capability: string;
  shippedIn: string;
};

export type ArchitectureLayer = {
  id: string;
  layerNumber: string;
  title: string;
  protocol: string;
  icon: LucideIcon;
  technologies: TechItem[];
};

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: "backend",
    layerNumber: "01",
    title: "Core JVM & Application Engine",
    protocol: "REST APIs · JVM 21 · Spring Context",
    icon: Server,
    technologies: [
      {
        name: "Java",
        icon: FaJava,
        color: "#E76F00",
        highlight: true,
        tag: "Primary",
        layer: "Core JVM Engine",
        capability: "OOP design, Concurrency, Multithreading, JVM memory management & clean architecture.",
        shippedIn: "CareerSync, Developer Management System, Robowaves Enterprise APIs",
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6DB33F",
        highlight: true,
        tag: "Primary",
        layer: "Enterprise Framework",
        capability: "IoC container, Auto-configuration, Spring Data JPA, RESTful Controllers, Security Filter Chains.",
        shippedIn: "CareerSync, Enterprise Production Workflows",
      },
      {
        name: "Spring MVC",
        icon: SiSpringboot,
        color: "#6DB33F",
        layer: "Web Architecture",
        capability: "Model-View-Controller orchestration, Request Mapping, Exception Handlers & Interceptors.",
        shippedIn: "CareerSync, Enterprise Portals",
      },
      {
        name: "REST APIs",
        icon: Globe2,
        color: "#64748B",
        highlight: true,
        tag: "Protocol",
        layer: "Communication Layer",
        capability: "Stateless HTTP contracts, standard status codes, idempotency & JSON serialization.",
        shippedIn: "All Shipped Full-Stack Applications",
      },
      {
        name: "Hibernate / JPA",
        icon: Layers3,
        color: "#59666C",
        layer: "ORM & Mapping",
        capability: "Entity relational mapping, JPQL queries, dirty checking, cascading & connection caching.",
        shippedIn: "CareerSync, JSpiders Enterprise Architecture",
      },
      {
        name: "Servlet & JSP",
        icon: Server,
        color: "#6B7280",
        layer: "Foundations",
        capability: "Request lifecycle, Session Management, Filter chains & low-level HTTP handling.",
        shippedIn: "Developer Management System",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
        layer: "Runtime Engine",
        capability: "Asynchronous I/O, server-side utilities, NPM ecosystem tooling & lightweight services.",
        shippedIn: "Full-Stack Tooling & Scripts",
      },
      {
        name: "Maven",
        icon: SiApachemaven,
        color: "#C71A36",
        layer: "Build Pipeline",
        capability: "Dependency management, multi-module packaging, build lifecycle & plugin management.",
        shippedIn: "All Java/Spring Boot Repositories",
      },
    ],
  },
  {
    id: "data",
    layerNumber: "02",
    title: "Data Engine & Persistence",
    protocol: "ACID · Relational Schemas · Queries",
    icon: Database,
    technologies: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "#4169E1",
        highlight: true,
        tag: "Database",
        layer: "Relational Storage",
        capability: "Strict relational modeling, foreign key cascades, transactional integrity & B-tree indexes.",
        shippedIn: "CareerSync Production Database",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        layer: "Relational Storage",
        capability: "InnoDB engine, complex joins, stored procedures & connection pool tuning.",
        shippedIn: "Developer Management System",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#47A248",
        layer: "Document Store",
        capability: "Flexible document schemas, aggregation pipelines & high-throughput write performance.",
        shippedIn: "Data Pipelines & Research Prototypes",
      },
      {
        name: "SQL",
        icon: Database,
        color: "#6B7280",
        layer: "Query Language",
        capability: "DML, DDL, normalization (3NF), complex subqueries & execution plan optimization.",
        shippedIn: "Every Relational Database Backend",
      },
    ],
  },
  {
    id: "client",
    layerNumber: "03",
    title: "Client & Reactive Interfaces",
    protocol: "HTTP/HTTPS · Reactive DOM · Next.js",
    icon: Globe2,
    technologies: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#111111",
        highlight: true,
        tag: "Full-Stack",
        layer: "Modern Web Framework",
        capability: "Server Components, App Router, SSR, Turbopack, static site generation & route handlers.",
        shippedIn: "Jayy.s Portfolio, WanderSphere Architecture",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        layer: "UI Component Library",
        capability: "Declarative state, custom hooks, virtual DOM reconciliation & component modularity.",
        shippedIn: "Interactive Web Experiences",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        highlight: true,
        tag: "Type Safety",
        layer: "Typed JavaScript",
        capability: "Strict compile-time type safety, interfaces, generic constraints & zero runtime surprises.",
        shippedIn: "Modern Portfolio & Next.js Platforms",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
        layer: "Utility Styling",
        capability: "Modern design tokens, responsive typography, micro-interactions & zero bloated CSS.",
        shippedIn: "All Modern Web Interfaces",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        layer: "Web Standard",
        capability: "ES6+, Async/Await, Promises, Event Loop, DOM manipulation & Closures.",
        shippedIn: "WanderSphere, Interactive Frontends",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
        layer: "Animation Engine",
        capability: "Spring physics, layout animations, scroll choreography & interactive gestural feedback.",
        shippedIn: "Jayy.s Portfolio Motion Design",
      },
    ],
  },
  {
    id: "infra",
    layerNumber: "04",
    title: "Cloud, DevOps & Infrastructure",
    protocol: "Containers · CI/CD · Tooling",
    icon: Cpu,
    technologies: [
      {
        name: "Git & GitHub",
        icon: SiGithub,
        color: "#181717",
        highlight: true,
        tag: "Tooling",
        layer: "Version Control",
        capability: "Branching strategies, commit hygiene, PR reviews, merge conflict resolution & GitHub Actions.",
        shippedIn: "All Production Repositories",
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        layer: "Containerization",
        capability: "Container packaging, multi-stage Dockerfiles, reproducible staging & isolation.",
        shippedIn: "Backend Microservices & Staging",
      },
      {
        name: "AWS",
        icon: Globe2,
        color: "#FF9900",
        layer: "Cloud Infrastructure",
        capability: "EC2 provisioning, S3 bucket storage & foundational cloud deployments.",
        shippedIn: "Cloud Hosting & Deployments",
      },
      {
        name: "Kafka",
        icon: SiApachekafka,
        color: "#111111",
        layer: "Event Streaming",
        capability: "Event-driven messaging, producer-consumer queues & asynchronous decoupled architectures.",
        shippedIn: "Architectural Exploration & Labs",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
        layer: "API Validation",
        capability: "Automated test collections, environment variables, mock servers & endpoint contract tests.",
        shippedIn: "All Backend API Development",
      },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#FE3157",
        layer: "Primary IDE",
        capability: "Advanced JVM debugging, Spring inspector, profiler integration & refactoring tools.",
        shippedIn: "Daily Engineering Workflow",
      },
    ],
  },
  {
    id: "security",
    layerNumber: "05",
    title: "Security & Distributed Architecture",
    protocol: "Authentication · RBAC · Scalability",
    icon: ShieldCheck,
    technologies: [
      {
        name: "Spring Security",
        icon: SiSpringsecurity,
        color: "#6DB33F",
        highlight: true,
        tag: "Security",
        layer: "Enterprise Security",
        capability: "SecurityFilterChain, CORS/CSRF protection, method-level authorization & password encoders.",
        shippedIn: "CareerSync, Robowaves Access Control",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "#111111",
        layer: "Stateless Auth",
        capability: "Cryptographic token signing, claim verification, header extraction & stateless sessions.",
        shippedIn: "CareerSync Token Verification",
      },
      {
        name: "Microservices",
        icon: Workflow,
        color: "#64748B",
        layer: "System Design",
        capability: "Decoupled domain boundaries, service discovery, API gateways & independent scalability.",
        shippedIn: "Distributed System Architecture",
      },
      {
        name: "System Design",
        icon: Layers3,
        color: "#64748B",
        layer: "Architecture",
        capability: "Scalability tradeoffs, caching layers, database indexing strategies & rate limiting.",
        shippedIn: "High-Throughput Architectural Plans",
      },
      {
        name: "Swagger / OpenAPI",
        icon: SiSwagger,
        color: "#85EA2D",
        layer: "Documentation",
        capability: "Interactive API documentation, schema definitions & client code contract generation.",
        shippedIn: "CareerSync API Specs",
      },
    ],
  },
];

type SkillsBlueprintProps = {
  activeTech: TechItem | null;
  onSelectTech: (tech: TechItem | null) => void;
};

export default function SkillsBlueprint({
  activeTech,
  onSelectTech,
}: SkillsBlueprintProps) {
  return (
    <div className="divide-y divide-zinc-200/90 border-y border-zinc-200/90">
      {architectureLayers.map((layer, index) => {
        const hasActiveInLayer = layer.technologies.some(
          (t) => t.name === activeTech?.name
        );

        return (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`py-5 transition-colors duration-300 sm:py-6 ${
              hasActiveInLayer
                ? "rounded-2xl bg-white/70 px-4 -mx-4 ring-1 ring-zinc-950/10 shadow-xs"
                : ""
            }`}
          >
            {/* Layer Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-semibold text-zinc-500">
                  {layer.layerNumber}
                </span>
                <span className="text-zinc-300">/</span>
                <h4 className="font-display text-base font-normal tracking-[-0.015em] text-zinc-950 sm:text-lg">
                  {layer.title}
                </h4>
              </div>

              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                {layer.protocol}
              </span>
            </div>

            {/* Technologies Nodes Grid */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {layer.technologies.map((tech) => {
                const Icon = tech.icon;
                const isSelected = activeTech?.name === tech.name;

                return (
                  <button
                    key={tech.name}
                    type="button"
                    onClick={() =>
                      onSelectTech(isSelected ? null : tech)
                    }
                    onMouseEnter={() => onSelectTech(tech)}
                    className={`group relative inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-200 select-none ${
                      isSelected
                        ? "border-zinc-950 bg-zinc-950 text-white shadow-md scale-[1.03] z-10 ring-2 ring-zinc-950/20"
                        : tech.highlight
                        ? "border-zinc-900 bg-white text-zinc-950 shadow-2xs hover:border-zinc-950 hover:bg-zinc-50 hover:shadow-xs"
                        : "border-zinc-200/90 bg-white/90 text-zinc-800 shadow-2xs hover:border-zinc-400 hover:bg-white hover:shadow-xs"
                    }`}
                  >
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{
                        color: isSelected ? "#ffffff" : tech.color,
                      }}
                      aria-hidden="true"
                    />
                    <span className="leading-none">{tech.name}</span>

                    {tech.tag && !isSelected && (
                      <span className="ml-0.5 rounded-sm bg-zinc-100 px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-wider text-zinc-500">
                        {tech.tag}
                      </span>
                    )}

                    {isSelected && (
                      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
