

import { projects } from "@/constants/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
      {projects.filter((project) => project.featured).map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
