"use client";

import { getFeaturedProjects } from "@/lib/projects";
import { useTheme } from "@/context/ThemeContext";
import ProjectFeatured from "./ProjectFeatured";
import ProjectSupportingList from "./ProjectSupportingList";

const SPIDEY_BLUE = "#006fb9";

export default function ProjectGrid() {
  const { isSpideyMode } = useTheme();
  const featuredProjects = getFeaturedProjects();
  const mainProject = featuredProjects[0];
  const supportingProjects = featuredProjects.slice(1);

  if (!mainProject) return null;

  return (
    <div className="space-y-12 sm:space-y-16 lg:space-y-20">
      {/* Featured Main Project */}
      <ProjectFeatured project={mainProject} />

      {/* Supporting Editorial Project List */}
      {supportingProjects.length > 0 && (
        <div className="pt-4 sm:pt-6">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
              {isSpideyMode ? "Archived Dossiers // More Work" : "More Selected Work"}
            </h4>
            {isSpideyMode && (
              <span
                className="font-handwritten text-[16px] leading-none"
                style={{ color: SPIDEY_BLUE }}
              >
                built with spider-precision 🕸️
              </span>
            )}
          </div>
          <ProjectSupportingList projects={supportingProjects} />
        </div>
      )}
    </div>
  );
}