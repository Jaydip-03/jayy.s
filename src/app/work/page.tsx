import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { projects } from "@/constants/projects";
import ProjectCard from "@/sections/projects/ProjectCard";

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-zinc-950">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Work
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          All Projects
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
          Every project I&apos;ve shipped or built, from full-stack Java
          applications to frontend and IoT experiments.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}