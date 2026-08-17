import { projects } from "@/constants/projects";
import WorkPageShell from "@/components/projects/WorkPageShell";
import AllProjectsGrid from "@/sections/projects/AllProjectsGrid";

export default function WorkPage() {
  return (
    <WorkPageShell backHref="/#projects" backLabel="Back to projects">
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
            All Work
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-[17px] sm:leading-8">
            Everything I&apos;ve built — featured work, experiments, research,
            and backend systems. More projects coming soon.
          </p>
          <p className="mt-3 text-sm font-medium text-zinc-500">
            {projects.length} projects
          </p>
        </div>
      </div>

      <AllProjectsGrid />
    </WorkPageShell>
  );
}
