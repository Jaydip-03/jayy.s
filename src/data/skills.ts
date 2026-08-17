import { Skill } from "@/types/skills";

export const skillCategories: { title: string; skills: Skill[]; learning?: boolean }[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: "expert" },
      { name: "SQL", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "TypeScript", level: "intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", level: "advanced" },
      { name: "Spring MVC", level: "advanced" },
      { name: "Hibernate / JPA", level: "advanced" },
      { name: "Servlet & JSP", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "JDBC", level: "advanced" },
      { name: "Node.js", level: "intermediate" },
      { name: "Express.js", level: "intermediate" },
      { name: "Maven", level: "intermediate" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: "advanced" },
      { name: "CSS3", level: "advanced" },
      { name: "React", level: "intermediate" },
      { name: "Next.js", level: "intermediate" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "intermediate" },
      { name: "GSAP", level: "intermediate" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: "advanced" },
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "intermediate" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: "advanced" },
      { name: "Postman", level: "advanced" },
      { name: "IntelliJ IDEA", level: "advanced" },
    ],
  },
  {
    title: "Currently Exploring",
    learning: true,
    skills: [
      { name: "Spring Security" },
      { name: "JWT" },
      { name: "Microservices" },
      { name: "Docker" },
      { name: "Kafka" },
      { name: "AWS" },
      { name: "Swagger / OpenAPI" },
      { name: "System Design" },
    ],
  },
];
