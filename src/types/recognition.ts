export interface Recognition {
  id: number;
  title: string;
  organization: string;
  category: "Certification" | "Publication" | "Program";
  description: string;
  year: string;
  credential?: string;
  image?: string;
  slug: string;
}