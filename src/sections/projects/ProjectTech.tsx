import { cn } from "@/lib/utils";

type ProjectTechProps = {
  technologies: string[];
  max?: number;
  className?: string;
};

export default function ProjectTech({
  technologies,
  max = 4,
  className,
}: ProjectTechProps) {
  const shown = technologies.slice(0, max);
  const remaining = technologies.length - shown.length;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {shown.map((tech) => (
        <li
          key={tech}
          className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-600 transition-colors group-hover:bg-zinc-200 group-hover:text-zinc-800"
        >
          {tech}
        </li>
      ))}
      {remaining > 0 && (
        <li className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] font-medium text-zinc-500">
          +{remaining}
        </li>
      )}
    </ul>
  );
}
