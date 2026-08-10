

import { Project } from "@/types/project";
import ProjectContent from "./ProjectContent";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[18px] border border-[#d8ddd9] bg-[#fffefd] p-2 shadow-[0_10px_28px_rgba(26,45,69,0.06)] transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#a7d9c3] hover:shadow-[0_18px_40px_rgba(16,185,129,0.12)] sm:p-2.5">
      <ProjectImage project={project} />
      <ProjectContent project={project} />
    </article>
  );
}