


import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  aspect?: string;
};

export default function ProjectImage({
  project,
  priority,
  className,
  aspect = "aspect-[16/8.4]",
}: ProjectImageProps) {
  return (
    <div
      className={cn(
  "mx-auto w-[58%] min-w-[190px] transition-transform duration-500 group-hover:-translate-y-1",
  className,
)}
    >
      {/* Browser chrome */}
      <div className="mb-2 flex items-center gap-1.5 px-1">
        <span className="h-2 w-2 rounded-full bg-spidey-red/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-spidey-blue/60" />
      </div>

      <div
        className={cn(
          "relative overflow-hidden rounded-xl ring-1 ring-black/[0.05] transition-shadow duration-500 group-hover:ring-spidey-red/25 group-hover:shadow-[0_24px_60px_-18px_rgba(226,54,54,0.22),0_12px_32px_-16px_rgba(0,111,185,0.18)]",
          aspect,
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} interface preview`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 30vw, 55vw"
            className="object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ProjectFallback project={project} />
        )}

        {project.live && (
          <span className="absolute right-2 top-2 z-10 inline-flex items-center gap-1 rounded-full border border-white/80 bg-white/90 px-2 py-0.5 text-[10px] font-medium text-zinc-700 backdrop-blur-sm">
            Live
            <ArrowUpRight className="h-2.5 w-2.5" />
          </span>
        )}

        {/* Hover cue */}
        <span className="pointer-events-none absolute bottom-2 right-2 z-10 flex h-7 w-7 translate-y-2 items-center justify-center rounded-full bg-zinc-950/85 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

/**
 * Branded placeholder for projects without a screenshot (e.g. backend/API work).
 * Looks intentional instead of an empty gray box.
 */
function ProjectFallback({ project }: { project: Project }) {
  const initials = project.title
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#1b1b1f]">
      {/* mesh glow */}
      <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-spidey-red/25 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-spidey-blue/30 blur-3xl" />
      {/* dotted grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 font-display text-lg font-normal text-white ring-1 ring-white/15 backdrop-blur-sm">
          {initials}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
          {project.category}
        </span>
      </div>
    </div>
  );
}