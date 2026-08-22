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
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-[16/9] overflow-hidden rounded-[7px] bg-zinc-100 ring-1 ring-zinc-900/[0.07]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 300px, 90vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <ProjectFallback project={project} />
        )}
      </div>

      {/* Tiny signature dots */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 opacity-50"
      >
        <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-spidey-red" />

        <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-spidey-blue/60" />
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
    <div className="flex h-full w-full items-center justify-center bg-zinc-950">
      <div className="text-center">
        <span className="font-display text-3xl text-white">
          {initials}
        </span>

        <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-white/40">
          {project.category}
        </p>
      </div>
    </div>
  );
}