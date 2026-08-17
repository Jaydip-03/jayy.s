import { Project } from "@/types/project";

import ProjectTech from "./ProjectTech";

type ProjectContentProps = {
  project: Project;
};

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="mt-6 flex flex-1 flex-col sm:mt-7">
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-zinc-950 transition-colors group-hover:text-spidey-blue sm:text-xl">
            {project.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            {project.category}
          </span>
        </div>
        {project.year && (
          <span className="shrink-0 text-xs font-medium tabular-nums text-zinc-400">
            {project.year}
          </span>
        )}
      </div>

      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600 sm:text-[15px] sm:leading-7">
        {project.shortDescription}
      </p>

      <ProjectTech technologies={project.technologies} className="mt-auto pt-3" />
    </div>
  );
}