import { cn } from "@/lib/utils";

type ProjectTechProps = {
  technologies: string[];
  max?: number;
  className?: string;
};

export default function ProjectTech({
  technologies,
  max = 5,
  className,
}: ProjectTechProps) {
  const shown = technologies.slice(0, max);
  const remaining = technologies.length - shown.length;

  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {shown.map((tech) => (
        <li
          key={tech}
          className="rounded-md border border-zinc-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors group-hover:border-spidey-blue/25 group-hover:text-zinc-800"
        >
          {tech}
        </li>
      ))}
      {remaining > 0 && (
        <li className="rounded-md border border-zinc-200/80 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-zinc-500">
          +{remaining}
        </li>
      )}
    </ul>
  );
}
