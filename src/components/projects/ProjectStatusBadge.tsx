import { Project } from "@/types/project";

const statusStyles: Record<Project["status"], string> = {
  Live: "border-spidey-red/30 bg-spidey-red/10 text-spidey-red",
  Research: "border-amber-200 bg-amber-50 text-amber-800",
  "In Progress": "border-spidey-blue/30 bg-spidey-blue/10 text-spidey-blue",
};

type ProjectStatusBadgeProps = {
  status: Project["status"];
  className?: string;
};

export default function ProjectStatusBadge({
  status,
  className = "",
}: ProjectStatusBadgeProps) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[status]} ${className}`}
    >
      {status}
    </span>
  );
}
