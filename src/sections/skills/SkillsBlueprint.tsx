"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Globe2,
  Layers3,
  Server,
  Cpu,
  Workflow,
  Sparkles,
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

type SkillIcon = IconType | LucideIcon;

type TechItem = {
  name: string;
  icon: SkillIcon;
  color: string;
  highlight?: boolean;
};

type ArchitectureLayer = {
  id: string;
  layerNumber: string;
  title: string;
  protocol: string;
  icon: LucideIcon;
  technologies: TechItem[];
};

const layers: ArchitectureLayer[] = [
  {
    id: "client",
    layerNumber: "01",
    title: "Client & Interface Engine",
    protocol: "HTTP/HTTPS · Reactive DOM",
    icon: Globe2,
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#111111" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    ],
  },
  {
    id: "backend",
    layerNumber: "02",
    title: "Core Backend & Application Logic",
    protocol: "REST APIs · JVM · Spring Context",
    icon: Server,
    technologies: [
      { name: "Java", icon: FaJava, color: "#E76F00", highlight: true },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", highlight: true },
      { name: "Spring MVC", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs", icon: Globe2, color: "#64748B", highlight: true },
      { name: "Hibernate / JPA", icon: Layers3, color: "#59666C" },
      { name: "Servlet & JSP", icon: Server, color: "#6B7280" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Maven", icon: SiApachemaven, color: "#C71A36" },
    ],
  },
  {
    id: "data",
    layerNumber: "03",
    title: "Data Engine & Persistence",
    protocol: "ACID · Relational Schemas · Queries",
    icon: Database,
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", highlight: true },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQL", icon: Database, color: "#6B7280" },
    ],
  },
  {
    id: "infra",
    layerNumber: "04",
    title: "Cloud, DevOps & Tooling",
    protocol: "CI/CD · Version Control · Environments",
    icon: Cpu,
    technologies: [
      { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: Globe2, color: "#FF9900" },
      { name: "Kafka", icon: SiApachekafka, color: "#111111" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "IntelliJ IDEA", icon: SiIntellijidea, color: "#FE3157" },
    ],
  },
  {
    id: "exploring",
    layerNumber: "05",
    title: "Advanced Systems & Security",
    protocol: "Active Exploration · Scalability",
    icon: Sparkles,
    technologies: [
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#111111" },
      { name: "Microservices", icon: Workflow, color: "#64748B" },
      { name: "System Design", icon: Layers3, color: "#64748B" },
      { name: "Swagger / OpenAPI", icon: SiSwagger, color: "#85EA2D" },
    ],
  },
];

export default function SkillsBlueprint() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
      {layers.map((layer, index) => {
        const isHovered = hoveredId === layer.id;

        return (
          <motion.div
            key={layer.id}
            onMouseEnter={() => setHoveredId(layer.id)}
            onMouseLeave={() => setHoveredId(null)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group py-5 sm:py-6 transition-colors duration-300 ${
              isHovered ? "bg-white/40 px-3 sm:px-4 rounded-xl -mx-3 sm:-mx-4" : ""
            }`}
          >
            {/* Layer Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-semibold text-neutral-400">
                  {layer.layerNumber}
                </span>
                <span className="text-neutral-300">·</span>
                <h4 className="font-display text-base font-normal tracking-[-0.015em] text-neutral-950 sm:text-lg">
                  {layer.title}
                </h4>
              </div>

              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-neutral-400">
                {layer.protocol}
              </span>
            </div>

            {/* Technologies Nodes */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 sm:gap-2.5">
              {layer.technologies.map((tech) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={tech.name}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-200 ${
                      tech.highlight
                        ? "border-neutral-950 bg-neutral-950 text-white shadow-2xs hover:bg-neutral-800"
                        : "border-neutral-200/80 bg-white/80 text-neutral-800 hover:border-neutral-400 hover:bg-white hover:shadow-2xs"
                    }`}
                  >
                    <Icon
                      className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:scale-110"
                      style={{
                        color: tech.highlight ? "#ffffff" : tech.color,
                      }}
                      aria-hidden="true"
                    />
                    <span className="leading-none">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
