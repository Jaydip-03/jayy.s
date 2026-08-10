export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  slug: string;
  description: string;
  technologies: string[];
  current?: boolean;
  location?: string;
  achievements?: string[];
  relatedProject?: string;
}