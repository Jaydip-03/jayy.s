import { experiences } from "@/constants/experience";
import { Experience } from "@/types/experience";

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((item) => item.slug === slug);
}

export function getAdjacentExperiences(slug: string) {
  const index = experiences.findIndex((item) => item.slug === slug);

  return {
    prev: index > 0 ? experiences[index - 1] : null,
    next: index < experiences.length - 1 ? experiences[index + 1] : null,
  };
}
