import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    slug: "robowaves",
    company: "Robowaves Technologies",
    role: "Java Full Stack Developer Intern",
    duration: "May 2026 – Aug 2026",
    location: "Remote",
    chapter: "01",
    yearMark: "2026",
    highlight: "Enterprise Java in production — not just coursework.",
    aside: "shipping real features",
    description:
      "Working on enterprise Java applications with Spring Boot, REST APIs, PostgreSQL, and email services — building backend systems that actually get reviewed, refactored, and shipped.",
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
      "Hibernate",
    ],
    current: true,
    achievements: [
      "Built and maintained REST APIs powering core application features using Spring Boot and Spring Data JPA.",
      "Designed and integrated PostgreSQL database schemas following MVC architecture.",
      "Implemented email notification services and role-based access control.",
      "Collaborated on Git workflows, code reviews, and Agile delivery.",
    ],
    relatedProject: "careersync",
  },
  {
    id: 2,
    slug: "jspiders",
    company: "JSpiders",
    role: "Java Full Stack Training",
    duration: "2024 – 2025",
    location: "Pune, India",
    chapter: "02",
    yearMark: "24",
    highlight: "The foundation — Core Java through Spring Boot.",
    aside: "where it all clicked",
    description:
      "Intensive full-stack training across Core Java, Advanced Java, JDBC, Hibernate, Spring Boot, and SQL — with hands-on projects that turned syntax into systems thinking.",
    technologies: [
      "Core Java",
      "Advanced Java",
      "Hibernate",
      "Spring Boot",
      "SQL",
    ],
    achievements: [
      "Completed structured training from Core Java through Spring Boot and Hibernate ORM.",
      "Built multiple hands-on projects applying MVC architecture and REST API design.",
      "Practiced SQL, JPQL, and database design principles.",
    ],
  },
];
