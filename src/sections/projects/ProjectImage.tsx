import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { SHIMMER_BLUR_DATA_URL } from "@/lib/images";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  aspect?: string;
};

export default function ProjectImage({
  project,
  priority = false,
  className,
  aspect = "aspect-[16/8]",
}: ProjectImageProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-md bg-[#0e0e13] ring-1 ring-white/10",
          "transition-all duration-500",
          "group-hover:ring-spidey-red/30",
          aspect,
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            priority={priority}
            placeholder="blur"
            blurDataURL={SHIMMER_BLUR_DATA_URL}
            sizes="(min-width: 768px) 45vw, 94vw"
            className="
              object-cover
              object-top
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.018]
            "
          />
        ) : (
          <ProjectFallback project={project} />
        )}

        {/* Minimal hover cue */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-3
            right-3
            flex
            h-8
            w-8
            translate-y-2
            items-center
            justify-center
            rounded-full
            bg-zinc-950/85
            text-white
            opacity-0
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Tiny signature accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 opacity-45"
      >
        <span className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-spidey-red" />

        <span className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-spidey-blue/60" />
      </span>
    </div>
  );
}

function ProjectFallback({
  project,
}: {
  project: Project;
}) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 30%, rgba(226,54,54,0.55), transparent 28%), radial-gradient(circle at 70% 70%, rgba(0,111,185,0.55), transparent 28%)",
        }}
      />

      <div className="relative text-center">
        <span className="font-display text-3xl text-white">
          {initials}
        </span>

        <p className="mt-1.5 text-[9px] uppercase tracking-[0.22em] text-white/45">
          {project.category}
        </p>
      </div>
    </div>
  );
}