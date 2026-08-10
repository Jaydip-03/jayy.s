export interface KeyFix {
  issue: string;
  fix: string;
}


export interface Project {
  id: number;

  slug: string;

  title: string;

  category: "Frontend" | "Backend" | "Full Stack" | "IoT";

  featured: boolean;

  status: "Live" | "Research" | "In Progress";

  shortDescription: string;

  description: string;

  technologies: string[];

  github: string;

  live?: string;

  image: string;

  featuredImage?: string;

  keyFixes?: KeyFix[];
  impact?: string;
}