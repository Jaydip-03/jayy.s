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
        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.06] text-zinc-700"
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
      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <FaGithub className="h-4 w-4" />
    </Link>
  );
}
