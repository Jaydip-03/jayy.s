export type JourneyMilestone = {
  id: string;
  chapter: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "highschool",
    chapter: "01",
    year: "2020",
    title: "Completed 12th",
    subtitle: "Higher Secondary · Dhule, Maharashtra",
    description:
      "Science stream — where problem-solving clicked before I even knew I'd write code for a living.",
  },
  {
    id: "college",
    chapter: "02",
    year: "2021 — 2025",
    title: "B.Tech in Information Technology",
    subtitle: "SVKM's Institute of Technology, Dhule",
    description:
      "Four years of programming fundamentals, databases, projects, and learning how software is actually built — not just for exams.",
  },
  {
    id: "jspiders",
    chapter: "03",
    year: "2024",
    title: "Java Full Stack Training",
    subtitle: "JSpiders · Pune",
    description:
      "The turning point — Core Java through Spring Boot, hands-on projects, and the shift from student to someone who ships.",
  },
];
