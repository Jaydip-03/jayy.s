import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type ProjectLinksProps = {
  github?: string;
  live?: string;
};

export default function ProjectLinks({ github, live }: ProjectLinksProps) {
  const hasGithub = Boolean(github);
  const hasLive = Boolean(live);

  if (!hasGithub && !hasLive) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {hasGithub && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-zinc-950 hover:text-zinc-950"
        >
          <FaGithub className="h-4 w-4" />
          View code
        </a>
      )}
      {hasLive && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Live site
          <ArrowUpRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
