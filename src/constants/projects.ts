import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "careersync",
    title: "CareerSync",
    category: "Full Stack",
    featured: true,
    status: "Live",
    shortDescription:
      "A modern job portal that connects job seekers with recruiters through posting, applications, and role-based workflows.",
    description:
      "CareerSync is a full-stack job portal built with Java, Spring Boot, and PostgreSQL. It covers authentication, job posting, application tracking, email notifications, and separate flows for candidates and recruiters — designed as a real hiring product, not just a CRUD demo.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "Bootstrap",
      "SMTP",
    ],
    github: "https://github.com/Jaydip-03/CareerSync",
    live: "",
    image: "/projects/careersync/cover.png",
    highlights: [
      "Role-based access for job seekers and recruiters",
      "Job posting, applications, and email notification flows",
      "Spring Boot backend with PostgreSQL persistence",
      "Security hardening pass on auth, IDOR, and credential handling",
    ],
    keyFixes: [
      {
        issue:
          "Database and email credentials were hardcoded directly in persistence.xml and EmailUtil.java.",
        fix: "Moved every credential to environment variables and added a .gitignore so secrets never touch the repo again.",
      },
      {
        issue:
          "Any logged-in user could view or modify another user's application data just by changing an ID in the URL (IDOR).",
        fix: "Added authorization checks on every DAO and servlet endpoint, validated against the logged-in user rather than just their session.",
      },
      {
        issue:
          "A single shared EntityManager instance was reused across every request — not thread-safe, and a real risk under concurrent load.",
        fix: "Rewrote JPAUtil and every DAO to open and close a fresh EntityManager per request, with proper try/finally cleanup to stop connection leaks.",
      },
      {
        issue:
          "Passwords were Base64-encoded and treated as if that were secure — Base64 is encoding, not encryption, and it's trivially reversible.",
        fix: "Flagged and documented the gap directly. Proper hashing is the next step before this goes anywhere near real users.",
      },
    ],
    impact:
      "Turned a working feature demo into something closer to how a production codebase actually needs to look — and gave me a concrete story about the difference between code that works and code that's safe to ship.",
  },
  {
    id: 2,
    slug: "travel-website",
    title: "WanderSphere",
    category: "Frontend",
    featured: true,
    status: "Live",
    shortDescription:
      "A responsive travel website with cinematic sections, smooth motion, and a polished booking-style landing experience.",
    description:
      "WanderSphere is a frontend travel experience built with HTML, CSS, and JavaScript. It focuses on strong visual hierarchy, responsive layouts, interactive destination sections, and smooth carousel-driven storytelling — the kind of landing page you'd expect from a modern travel brand.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Swiper.js",
      "Responsive Design",
    ],
    github: "",
    live: "https://wander-sphere.netlify.app/",
    image: "/projects/travel/cover.png",
    highlights: [
      "Fully responsive layout across mobile, tablet, and desktop",
      "Swiper.js-powered destination and gallery sections",
      "Scroll-driven sections with clean typography and spacing",
      "Deployed live on Netlify",
    ],
  },
  {
    id: 3,
    slug: "fertilizer-recommendation-system",
    title: "Fertilizer Recommendation System",
    category: "IoT",
    featured: false,
    status: "Research",
    shortDescription:
      "Research-based IoT project that recommends suitable fertilizers using real-time soil nutrient readings.",
    description:
      "An IoT-based fertilizer recommendation system using NPK sensors to analyze soil conditions and suggest fertilizers in real time. The work combined hardware sensing, data processing, and agritech logic — and was documented and published as a research paper.",
    technologies: ["Arduino", "IoT", "NPK Sensor", "Java", "Research"],
    github: "",
    live: "",
    image: "/projects/fertilizer/cover.png",
    highlights: [
      "NPK sensor integration for soil nutrient analysis",
      "Rule-based fertilizer recommendation engine",
      "Arduino + IoT pipeline for field data collection",
      "Published as a research paper",
    ],
  },
  {
    id: 4,
    slug: "developer-management-system",
    title: "Developer Management System",
    category: "Backend",
    featured: true,
    status: "Live",
    shortDescription:
      "A CRUD application for managing developer records with Java Servlets, JSP, and PostgreSQL.",
    description:
      "A backend-focused developer records system built with Servlets, JSP, and PostgreSQL. It implements full create-read-update-delete flows with form validation, MVC separation, and a Bootstrap UI layer — a solid foundation for understanding classic Java web architecture.",
    technologies: ["Java", "Servlet", "JSP", "PostgreSQL", "Bootstrap"],
    github: "https://github.com/Jaydip-03/Developer-CRUD-Servlet-JSP",
    live: "",
    image: "",
    highlights: [
      "Complete CRUD for developer records",
      "MVC-style separation with Servlets and JSP",
      "PostgreSQL-backed persistence layer",
      "Form validation and Bootstrap UI components",
    ],
  },
];
