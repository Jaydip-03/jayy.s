

import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectGithubProps = {
  github: string;
};

export default function ProjectGithub({ github }: ProjectGithubProps) {
  if (!github) {
    return (
      <span
        aria-label="Repository link coming soon"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce3eb] text-slate-300"
      >
        <FaGithub className="h-4 w-4" />
      </span>
    );
  }

  return (
    <Link
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${github.replace(/^https?:\/\/(www\.)?/, "")} on GitHub`}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#dce3eb] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
    >
      <FaGithub className="h-4 w-4" />
    </Link>
  );
}