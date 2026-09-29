"use client";

import { projects } from "@/constants/projects";
import ProjectFeatured from "./ProjectFeatured";
import ProjectSupportingList from "./ProjectSupportingList";

export default function ProjectGrid() {
  const displayOrder = [
    "careersync",
    "travel-website",
    "fertilizer-recommendation-system",
    "developer-management-system",
  ];

  const selectedProjects = displayOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  const mainProject = selectedProjects[0];
  const supportingProjects = selectedProjects.slice(1);

  if (!mainProject) return null;

  return (
    <div className="space-y-14 sm:space-y-16 lg:space-y-20">
      <ProjectFeatured project={mainProject} />

      {supportingProjects.length > 0 && (
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              More selected work
            </h4>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-400">
              02 — 04
            </span>
          </div>
          <ProjectSupportingList projects={supportingProjects} />
        </div>
      )}
    </div>
  );
}
