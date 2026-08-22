import { projects } from "@/constants/projects";
import WorkPageShell from "@/components/projects/WorkPageShell";
import AllProjectsGrid from "@/sections/projects/AllProjectsGrid";
import WorkPageHeader from "@/sections/projects/WorkPageHeader";

export const metadata = {
  title: "Projects",
  description:
    "Explore all projects, full-stack systems, research work, and engineering experiments by Jaydip Desale.",
};

export default function WorkPage() {
  return (
    <WorkPageShell backHref="/#projects" backLabel="Back to projects">
      <WorkPageHeader totalProjects={projects.length} />

      <div className="mt-12 sm:mt-16">
        <AllProjectsGrid />
      </div>
    </WorkPageShell>
  );
}
