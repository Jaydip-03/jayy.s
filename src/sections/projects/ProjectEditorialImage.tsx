import Image from "next/image";

import { Project } from "@/types/project";

import { cn } from "@/lib/utils";

type ProjectEditorialImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
};

export default function ProjectEditorialImage({
  project,
  priority = false,
  className,
}: ProjectEditorialImageProps) {
  return (
    <div className={cn("group/image relative w-full", className)}>
      <div className="relative overflow-hidden rounded-[10px] bg-white shadow-[0_16px_45px_-30px_rgba(24,24,27,0.42)] ring-1 ring-zinc-900/[0.075] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_24px_58px_-30px_rgba(24,24,27,0.34)]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            width={1200}
            height={760}
            priority={priority}
            sizes="(min-width: 1024px) 40vw, 94vw"
            className="block h-auto w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.012]"
          />
        ) : (
          <ProjectFallback project={project} />
        )}
      </div>

      {/* Tiny signature detail — deliberately quieter than the project itself. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-8 w-8 opacity-35 transition-opacity duration-500 group-hover:opacity-70"
      >
        <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-spidey-red" />
        <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-spidey-blue/65" />
        <span className="absolute left-1.5 top-1.5 h-px w-7 rotate-45 bg-spidey-red/25" />
        <span className="absolute left-1.5 top-1.5 h-px w-7 -rotate-45 bg-spidey-blue/25" />
      </span>
    </div>
  );
}

function ProjectFallback({ project }: { project: Project }) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_30%_30%,rgba(226,54,54,0.7),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(0,111,185,0.7),transparent_28%)]" />
      <div className="relative text-center">
        <span className="font-display text-4xl text-white">{initials}</span>
        <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-white/50">
          {project.category}
        </p>
      </div>
    </div>
  );
}
