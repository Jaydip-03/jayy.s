import { projects } from "@/constants/projects";
import Container from "@/components/ui/Container";
import AllProjectsGrid from "@/sections/projects/AllProjectsGrid";
import WorkPageHeader from "@/sections/projects/WorkPageHeader";

export const metadata = {
  title: "Projects",
  description:
    "Explore all projects, full-stack systems, research work, and engineering experiments by Jaydip Desale.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      {/* ── 1. Deep Black Hero Header Banner ── */}
      <WorkPageHeader totalProjects={projects.length} />

      {/* ── 2. Light Paper Exhibition Canvas Below ── */}
      <section className="relative overflow-hidden bg-[#f5f5f0] py-12 text-zinc-950 sm:py-16 md:py-20">
        {/* Subtle Architectural Paper Dot Grid Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage: "radial-gradient(#18181b 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Swiss Precision Crosshairs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-6 top-8 font-mono text-[11px] text-zinc-400 select-none"
        >
          +
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-8 font-mono text-[11px] text-zinc-400 select-none"
        >
          +
        </div>

        <Container className="relative z-10">
          <AllProjectsGrid />
        </Container>
      </section>
    </main>
  );
}
