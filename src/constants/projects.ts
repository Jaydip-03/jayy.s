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
      "A modern job portal platform that connects job seekers with recruiters through a seamless hiring experience.",

    description:
      "CareerSync is a full-stack job portal built using Java, Spring Boot and PostgreSQL. It includes authentication, job posting, application management, email notifications and role-based access.",

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

    keyFixes: [
    {
      issue: "Database and email credentials were hardcoded directly in persistence.xml and EmailUtil.java.",
      fix: "Moved every credential to environment variables and added a .gitignore so secrets never touch the repo again.",
    },
    {
      issue: "Any logged-in user could view or modify another user's application data just by changing an ID in the URL (IDOR).",
      fix: "Added authorization checks on every DAO and servlet endpoint, validated against the logged-in user rather than just their session.",
    },
    {
      issue: "A single shared EntityManager instance was reused across every request — not thread-safe, and a real risk under concurrent load.",
      fix: "Rewrote JPAUtil and every DAO to open and close a fresh EntityManager per request, with proper try/finally cleanup to stop connection leaks.",
    },
    {
      issue: "Passwords were Base64-encoded and treated as if that were secure — Base64 is encoding, not encryption, and it's trivially reversible.",
      fix: "Flagged and documented the gap directly. Proper hashing is the next step before this goes anywhere near real users.",
    },
  ],
  impact:
    "Turned a working feature demo into something closer to how a production codebase actually needs to look — and gave me a concrete story about the difference between code that works and code that's safe to ship.",

  },

  {
    id: 2,
    slug: "travel-website",

    title: "Travel Website",

    category: "Frontend",

    featured: true,

    status: "Live",

    shortDescription:
      "A responsive travel website with modern UI, smooth animations and engaging user experience.",

    description:
      "A visually appealing travel website developed using HTML, CSS and JavaScript featuring interactive sections, responsive layouts and modern frontend practices.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Swiper.js",
      "Responsive Design",
    ],

    github: "",

    live: "",

    image: "/projects/travel/cover.png",
  },

  {
    id: 3,
    slug: "fertilizer-recommendation-system",

    title: "Fertilizer Recommendation System",

    category: "IoT",

    featured: true,

    status: "Research",

    shortDescription:
      "Research-based IoT project that recommends suitable fertilizers using soil nutrient values.",

    description:
      "An IoT-based fertilizer recommendation system using NPK sensors to analyze soil conditions and suggest fertilizers. The project was published as a research paper.",

    technologies: [
      "Arduino",
      "IoT",
      "NPK Sensor",
      "Java",
      "Research",
    ],

    github: "",

    image: "/projects/fertilizer/cover.png",
  },

  {
    id: 4,
    slug: "developer-management-system",

    title: "Developer Management System",

    category: "Backend",

    featured: true,

    status: "Live",

    shortDescription:
      "A CRUD application for managing developer records using Java web technologies.",

    description:
      "Built using Servlets, JSP and PostgreSQL with complete CRUD functionality following the MVC architecture.",

    technologies: [
      "Java",
      "Servlet",
      "JSP",
      "PostgreSQL",
      "Bootstrap",
    ],

    github: "https://github.com/Jaydip-03/Developer-CRUD-Servlet-JSP",

    live: "",

    image: "",
  },
];
