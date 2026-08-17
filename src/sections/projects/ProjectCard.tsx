


import Link from "next/link";

import { Project } from "@/types/project";
import ProjectStatusBadge from "@/components/projects/ProjectStatusBadge";

import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      aria-label={`${project.title} — ${project.category} case study`}
      className="group relative z-10 flex h-full flex-col rounded-2xl bg-[#e9e9e3]/80 p-4 ..."
    >
      <div className="relative">
        <ProjectStatusBadge
          status={project.status}
          className="absolute left-0 top-0 z-10 shadow-sm"
        />
        <ProjectImage project={project} />
      </div>

      <ProjectContent project={project} />
    </Link>
  );
}