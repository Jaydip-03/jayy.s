import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";
import WorkPageShell from "@/components/projects/WorkPageShell";
import { projects } from "@/constants/projects";
import { getProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Jaydip Desale`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolved = await params;
  const slug = resolved?.slug;
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) notFound();

  return (
    <WorkPageShell backHref="/work" backLabel="All projects">
      <ProjectCaseStudy project={project} />
    </WorkPageShell>
  );
}
