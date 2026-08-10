import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    slug: "robowaves",
    company: "Robowaves Technologies",
    role: "Java Full Stack Developer Intern",
    duration: "May 2026 – Aug 2026",
    location: "Remote",
    description:
      "Worked on enterprise Java applications using Spring Boot, REST APIs, PostgreSQL and email services while building scalable backend solutions.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API", "Hibernate"],
    current: true,
    achievements: [
      "Built and maintained REST APIs powering core application features using Spring Boot and Spring Data JPA.",
      "Designed and integrated PostgreSQL database schemas following MVC architecture.",
      "Implemented email notification services and role-based access control.",
      "Collaborated with the team on Git workflows, code reviews, and Agile practices.",
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
    description:
      "Completed intensive training in Core Java, Advanced Java, JDBC, Hibernate, Spring Boot and SQL with multiple hands-on projects.",
    technologies: ["Core Java", "Advanced Java", "Hibernate", "Spring Boot", "SQL"],
    achievements: [
      "Completed structured training covering Core Java through Spring Boot and Hibernate ORM.",
      "Built multiple hands-on projects applying MVC architecture and REST API design.",
      "Practiced SQL, JPQL, and database design principles.",
    ],
  },
];