export interface KeyFix {
  issue: string;
  fix: string;
}

export interface CaseStudyFeature {
  title: string;
  description: string;
  tag?: string;
  image?: string;
}

export interface CaseStudyExperienceItem {
  title: string;
  caption: string;
  image?: string;
  codeSnippet?: string;
  layout?: "image-left" | "image-right" | "full-bleed";
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
}

export interface TechnicalArchitecture {
  stackOverview: string;
  database?: string;
  apiDesign?: string;
  keyDecisions: TechnicalDecision[];
}

export interface TechnicalChallenge {
  title: string;
  description: string;
  solution: string;
  takeaway?: string;
}

export interface CaseStudyOverview {
  what: string;
  why: string;
  targetAudience: string;
}

export interface ProjectCaseStudyDetail {
  number: string; // "01", "02", "03", "04"
  oneLiner: string;
  role: string;
  overview: CaseStudyOverview;
  problem: string;
  approach: string;
  features: CaseStudyFeature[];
  productExperience?: CaseStudyExperienceItem[];
  technical: TechnicalArchitecture;
  challenges: TechnicalChallenge[];
  learnings: string[];
  result: string;
  future: string[];
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
  year?: number;
  role?: string;
  keyFixes?: KeyFix[];
  impact?: string;
  highlights?: string[];
  caseStudy?: ProjectCaseStudyDetail;
}