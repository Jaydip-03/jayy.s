import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { projects } from "@/constants/projects";
import { experiences } from "@/constants/experience";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static core routes
  const staticRoutes = [
    "",
    "/about",
    "/work",
    "/experience",
    "/recognition",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic project case study routes
  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic experience detail routes
  const experienceRoutes = experiences.map((exp) => ({
    url: `${baseUrl}/experience/${exp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
}
