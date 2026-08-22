"use client";

import {
  Code2,
  Database,
  Globe2,
  Layers3,
  Server,
  Terminal,
} from "lucide-react";

import { FaJava } from "react-icons/fa";

import {
  SiApachekafka,
  SiApachemaven,
  SiCss,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGithub,
  SiHtml5,
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

type SkillChipProps = {
  label: string;
  learning?: boolean;
};

type SkillIcon = IconType | LucideIcon;

type IconConfig = {
  icon: SkillIcon;
  color: string;
};

const iconMap: Record<string, IconConfig> = {
  Java: { icon: FaJava, color: "#E76F00" },
  SQL: { icon: Database, color: "#6B7280" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Spring MVC": { icon: SiSpringboot, color: "#6DB33F" },
  "Hibernate / JPA": { icon: Layers3, color: "#59666C" },
  "Servlet & JSP": { icon: Server, color: "#6B7280" },
  "REST APIs": { icon: Globe2, color: "#64748B" },
  JDBC: { icon: Database, color: "#64748B" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#111827" },
  Maven: { icon: SiApachemaven, color: "#C71A36" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#111111" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  GSAP: { icon: Code2, color: "#88CE02" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Git & GitHub": { icon: SiGithub, color: "#181717" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  "IntelliJ IDEA": { icon: SiIntellijidea, color: "#FE3157" },
  "Spring Security": { icon: SiSpringsecurity, color: "#6DB33F" },
  JWT: { icon: SiJsonwebtokens, color: "#111111" },
  Microservices: { icon: Server, color: "#64748B" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kafka: { icon: SiApachekafka, color: "#111111" },
  AWS: { icon: Globe2, color: "#FF9900" },
  "Swagger / OpenAPI": { icon: SiSwagger, color: "#85EA2D" },
  "System Design": { icon: Layers3, color: "#64748B" },
};

export default function SkillChip({
  label,
  learning = false,
}: SkillChipProps) {
  const config = iconMap[label];
  const Icon = config?.icon ?? Terminal;
  const iconColor = config?.color ?? "#737373";

  return (
    <span
      className={`group/skill inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[13px] font-medium transition-all duration-200 hover:bg-white hover:text-neutral-950 hover:shadow-2xs ${
        learning ? "text-amber-900/90" : "text-neutral-800"
      }`}
    >
      <Icon
        className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover/skill:scale-110"
        style={{
          color: learning ? "#d97706" : iconColor,
        }}
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
}