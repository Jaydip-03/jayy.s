import { recognitions } from "@/data/recognitions";

export function getFeaturedRecognitions() {
  return recognitions.filter((item) => item.featured);
}

export function getRecognitionBySlug(slug: string) {
  return recognitions.find((item) => item.slug === slug);
}
