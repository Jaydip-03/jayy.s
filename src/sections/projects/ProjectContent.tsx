
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

import ProjectGithub from "./ProjectGithub";
import ProjectTech from "./ProjectTech";

import Link from "next/link";

type ProjectContentProps = {
  project: Project;
};

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <div className="flex flex-1 flex-col px-1 pb-1 pt-3 sm:px-1.5 sm:pb-1.5">
      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/work/${project.slug}`}
          className="group/title focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
        >
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-[#172033] transition-colors group-hover/title:text-emerald-700 sm:text-xl">
            {project.title}
          </h3>
        </Link>
        <Link
          href={`/work/${project.slug}`}
          aria-label={`View ${project.title} case study`}
          className="mt-0.5 shrink-0 rounded-md text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:translate-x-0.5 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
        >
          <ArrowUpRight className="h-4.5 w-4.5" />
        </Link>
      </div>

      <p className="mt-1.5 text-[13px] leading-5 text-slate-600 line-clamp-2">
        {project.shortDescription}
      </p>

      <ProjectTech technologies={project.technologies} />

      <div className="mt-3 flex items-center justify-between border-t border-[#e6e9e7] pt-2.5">
        <span className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <span className={categoryDotClass[project.category]} />
          {project.category}
        </span>

        <div className="flex items-center gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="group/case-study inline-flex items-center gap-1 text-xs font-bold text-slate-500 transition-colors hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
          >
            Case Study
            <span className="transition-transform duration-300 group-hover/case-study:translate-x-0.5">
              →
            </span>
          </Link>
          <ProjectGithub github={project.github} />
        </div>
      </div>
    </div>
  );
}

const categoryDotClass = {
  Frontend: "h-2 w-2 rounded-full bg-sky-500",
  Backend: "h-2 w-2 rounded-full bg-violet-500",
  "Full Stack": "h-2 w-2 rounded-full bg-emerald-600",
  IoT: "h-2 w-2 rounded-full bg-emerald-500",
};