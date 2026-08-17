import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ExperienceDetail from "@/components/experience/ExperienceDetail";
import ExperiencePageShell from "@/components/experience/ExperiencePageShell";
import { experiences } from "@/constants/experience";
import { getExperienceBySlug } from "@/lib/experience";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};

  return {
    title: `${experience.role} at ${experience.company} | Jaydip Desale`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({
  params,
}: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) notFound();

  return (
    <ExperiencePageShell backHref="/experience" backLabel="Full timeline">
      <ExperienceDetail experience={experience} />
    </ExperiencePageShell>
  );
}
