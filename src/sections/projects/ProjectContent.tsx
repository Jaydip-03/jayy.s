import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

type ProjectContentProps = {
  project: Project;
};

export default function ProjectContent({
  project,
}: ProjectContentProps) {
  return (
    <div className="mt-4 flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em]">
            <span className="text-spidey-blue">
              {project.category}
            </span>

            {project.status && (
              <>
                <span className="text-zinc-300">·</span>

                <span
                  className={
                    project.status === "Live"
                      ? "text-emerald-600"
                      : "text-zinc-400"
                  }
                >
                  {project.status}
                </span>
              </>
            )}
          </div>

          <h3 className="mt-1.5 font-display text-[1.4rem] font-normal leading-[1.05] tracking-[-0.035em] text-zinc-950 transition-colors duration-300 group-hover:text-spidey-blue sm:text-[1.5rem]">
            {project.title}
          </h3>
        </div>

        {project.year && (
          <span className="shrink-0 pt-0.5 text-[10px] font-medium tabular-nums tracking-[0.04em] text-zinc-400">
            {project.year}
          </span>
        )}
      </div>

      <p className="mt-2 max-w-[480px] text-[12.5px] leading-5.5 text-zinc-600 sm:text-[13px] sm:leading-6">
        {project.shortDescription}
      </p>

      <span className="mt-3.5 inline-flex w-fit items-center gap-1.5 text-[11px] font-medium text-spidey-red transition-colors duration-300 group-hover:text-zinc-950">
        {project.live ? "View case study" : "View project"}

        <ArrowUpRight
          aria-hidden="true"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </div>
  );
}