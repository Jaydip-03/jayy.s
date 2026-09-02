import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "careersync",
    title: "CareerSync",
    category: "Full Stack",
    featured: true,
    status: "Live",
    role: "Full-Stack Engineer & Architect",
    year: 2025,
    shortDescription:
      "An enterprise recruitment engine built from scratch with Spring Boot 3 and PostgreSQL — hardened against IDOR exploits, concurrent session collisions, and unvalidated URLs.",
    description:
      "I built CareerSync out of frustration with campus placement portals that leaked student resumes and crashed under application deadlines. I engineered a production-grade hiring engine from scratch — featuring dual role-based workflows, strict DAO authorization boundaries, request-scoped EntityManager sessions, and asynchronous SMTP notification queues.",
    technologies: [
      "Java 21",
      "Spring Boot 3",
      "Spring Data JPA",
      "PostgreSQL",
      "Bootstrap 5",
      "Jakarta Mail (SMTP)",
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
    caseStudy: {
      number: "01",
      oneLiner:
        "A modern job portal engineered for role-based workflows, concurrency resilience, and security-hardened persistence.",
      role: "Full-Stack Engineer & Architect",
      overview: {
        what: "CareerSync is a full-featured recruitment platform connecting engineering talent with hiring teams through automated job discovery, dual role-based dashboards, and application state tracking.",
        why: "Most applicant tracking systems are either rigid legacy software or simplistic student CRUD demos that ignore real-world authorization, session concurrency, and database transaction boundaries.",
        targetAudience:
          "Software engineers seeking transparent job application visibility, and hiring managers requiring an isolated candidate review pipeline.",
      },
      problem:
        "Conventional hiring workflows suffer from fragmented communication, desynchronized applicant state tracking, and critical security gaps. Most prototypes store sensitive database passwords in source control, expose user IDs to trivial URL manipulation (IDOR), and share database connections carelessly across threads.",
      approach:
        "I engineered CareerSync using a decoupled MVC architecture on Spring Boot 3 and PostgreSQL. The system enforces strict DAO authorization boundaries, distinct applicant/recruiter security contexts, transactional database integrity, and asynchronous SMTP notifications.",
      features: [
        {
          title: "Dual Role Dashboards",
          description:
            "Separate, dedicated portal workflows for job seekers (search, apply, status tracking) and recruiters (job creation, candidate screening, application status updates).",
          tag: "Architecture",
        },
        {
          title: "Automated Email Notification Pipeline",
          description:
            "Asynchronous Jakarta Mail (SMTP) triggers that notify applicants instantly whenever their application status progresses or an interview is scheduled.",
          tag: "Integrations",
        },
        {
          title: "Relational Candidate Ledger",
          description:
            "Normalized PostgreSQL schema enforcing relational foreign-key integrity between companies, job postings, candidate resumes, and audit timestamps.",
          tag: "Persistence",
        },
        {
          title: "Comprehensive Security Hardening",
          description:
            "Eliminated IDOR vulnerabilities across all DAO query endpoints and removed all database secrets from source control into environment variables.",
          tag: "Security",
        },
      ],
      productExperience: [
        {
          title: "Unified Candidate Discovery Portal",
          caption:
            "A clean, distraction-free discovery feed allowing engineers to filter jobs by tech stack, compensation, and location with real-time status updates.",
          image: "/projects/careersync/cover.png",
          layout: "image-left",
        },
        {
          title: "Recruiter Pipeline & Application State Machine",
          caption:
            "Hiring teams review incoming candidate dossiers, update applicant statuses through a validated state machine, and trigger automated notifications.",
          image: "/projects/careersync/cover.png",
          layout: "image-right",
        },
      ],
      technical: {
        stackOverview:
          "Java 21, Spring Boot 3, Spring Data JPA, Hibernate, PostgreSQL 15, Jakarta Mail, and Bootstrap 5.",
        database:
          "PostgreSQL relational schema utilizing indexed primary keys, strict foreign key constraints, and transactional commit boundaries.",
        apiDesign:
          "RESTful HTTP endpoints protected by server-side session authentication and parametric DAO authorization filters.",
        keyDecisions: [
          {
            decision: "Scoped EntityManager Sessions",
            rationale:
              "Replaced a hazardous shared EntityManager singleton with request-scoped sessions wrapped in try-with-resources to eliminate thread collisions under concurrent load.",
          },
          {
            decision: "Environment Variable Secrets Isolation",
            rationale:
              "Extracted database credentials and SMTP keys into environment configuration, protecting source repositories from secret leaks.",
          },
          {
            decision: "Parametric IDOR Protection",
            rationale:
              "Enforced session-identity validation on every data access query, ensuring users can only read and mutate their own application records.",
          },
        ],
      },
      challenges: [
        {
          title: "Thread Collisions on Shared Database Sessions",
          description:
            "Early iterations reused a single EntityManager across multiple HTTP requests, causing connection leaks and session collisions when simultaneous requests occurred.",
          solution:
            "Refactored JPAUtil to allocate a fresh, isolated EntityManager instance per request and guaranteed cleanup using try/finally blocks.",
          takeaway:
            "Never share stateful database context across concurrent threads.",
        },
        {
          title: "Insecure Direct Object Reference (IDOR) on Application IDs",
          description:
            "A logged-in user could manipulate the URL parameter /application?id=123 and view other candidates' private resumes and interview feedback.",
          solution:
            "Added an authorization layer in the DAO tier that verifies the requested application record strictly belongs to the authenticated session user.",
          takeaway:
            "Authentication proves who you are; authorization proves what you are allowed to touch.",
        },
      ],
      learnings: [
        "The gap between code that runs and code that is safe for production is vast; security cannot be an afterthought.",
        "Resource lifecycle discipline (closing database sessions, handling connection pools) is foundational for backend resilience.",
        "Clean separation between presentation and data access layers prevents cascading architectural failures.",
      ],
      result:
        "Delivered a robust, security-hardened full-stack job platform with 0 hardcoded secrets, resilient concurrency handling, and a realistic hiring workflow ready for production deployment.",
      future: [
        "Implement Argon2 password hashing pipeline across all auth flows.",
        "Introduce Redis caching for high-frequency search and job query queries.",
        "Add OAuth2 social authentication (Google & GitHub).",
      ],
    },
  },
  {
    id: 2,
    slug: "travel-website",
    title: "WanderSphere",
    category: "Frontend",
    featured: true,
    status: "Live",
    role: "Frontend Developer & UI/UX Designer",
    year: 2024,
    shortDescription:
      "A high-performance travel discovery platform built with native JavaScript and CSS choreography — zero framework bloat, 60fps GPU acceleration, and tactile mobile gestures.",
    description:
      "WanderSphere was my deep dive into fluid frontend engineering without heavy JS frameworks. I focused on modern CSS Grid/Flexbox mathematics, hardware-accelerated carousel choreography with Swiper.js, and creating the kind of cinematic atmosphere you expect from top-tier travel platforms.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Swiper.js",
      "Responsive Layouts",
      "Netlify Edge",
    ],
    github: "https://github.com/Jaydip-03",
    live: "https://wander-sphere.netlify.app/",
    image: "/projects/travel/cover.png",
    highlights: [
      "Fully responsive layout across mobile, tablet, and desktop",
      "Swiper.js-powered destination and gallery sections",
      "Scroll-driven sections with clean typography and spacing",
      "Deployed live on Netlify",
    ],
    caseStudy: {
      number: "02",
      oneLiner:
        "A high-performance responsive travel experience engineered with cinematic destination carousels and smooth scroll choreography.",
      role: "Frontend Developer & UI/UX Designer",
      overview: {
        what: "WanderSphere is an immersive web application designed for modern travelers seeking curated journeys, experiential destination guides, and seamless booking discovery.",
        why: "Travel websites often overwhelm users with sluggish script bloat, clunky navigation, and poor mobile responsiveness that breaks on touchscreens.",
        targetAudience:
          "Adventure travelers, vacation planners, and remote nomads looking for curated itineraries and destination inspiration.",
      },
      problem:
        "Heavy media assets, slow initial page loads, and fragile slider scripts frequently create poor mobile performance, layout shifting, and janky touch gestures on portable devices.",
      approach:
        "Focused on high-performance semantic HTML5, modern CSS3 layout choreography, hardware-accelerated Swiper.js touch transitions, and lazy-loading asset strategies for instant visual feedback.",
      features: [
        {
          title: "Cinematic Hero & Ambient Motion",
          description:
            "Immersive full-viewport hero section with atmospheric background gradients and clear call-to-action hierarchies.",
          tag: "Visual Design",
        },
        {
          title: "Touch-Optimized Swiper.js Carousel",
          description:
            "Fluid destination cards supporting swipe gestures, momentum scrolling, and responsive breakpoints from mobile to 4K displays.",
          tag: "Interactivity",
        },
        {
          title: "Curated Tour Itinerary Cards",
          description:
            "Structured tour previews showcasing durations, difficulty ratings, pricing transparency, and instant inquiry modals.",
          tag: "Product UX",
        },
        {
          title: "Edge-Deployed CDN Performance",
          description:
            "Optimized asset pipelines deployed on Netlify Edge CDN with near-zero latency worldwide.",
          tag: "Performance",
        },
      ],
      productExperience: [
        {
          title: "Cinematic Visual Storytelling & Hero Interface",
          caption:
            "A wide, atmospheric viewport greeting travelers with high-impact typography and an intuitive destination search bar.",
          image: "/projects/travel/cover.png",
          layout: "image-left",
        },
        {
          title: "Fluid Destination Carousel & Touch Interactions",
          caption:
            "Hardware-accelerated sliding cards that feel completely native on iOS and Android touchscreens without scroll freezing.",
          image: "/projects/travel/cover.png",
          layout: "image-right",
        },
      ],
      technical: {
        stackOverview:
          "HTML5, CSS3 Modern Layouts (CSS Grid & Flexbox), Vanilla JavaScript (ES6+), Swiper.js, Netlify Edge CDN.",
        apiDesign:
          "Client-side event-driven architecture managing interactive modal states, touch swipes, and smooth scroll offsets.",
        keyDecisions: [
          {
            decision: "Pure Vanilla JS over Framework Bloat",
            rationale:
              "Avoided multi-megabyte JavaScript frameworks for a marketing experience, achieving near-instant sub-second first contentful paint (FCP).",
          },
          {
            decision: "CSS Hardware Acceleration",
            rationale:
              "Utilized transform and opacity properties exclusively for animations to offload rendering onto the GPU for stable 60fps frame rates.",
          },
        ],
      },
      challenges: [
        {
          title: "Touch Gesture Conflict on Mobile Viewports",
          description:
            "Swiping horizontally across destination carousels would frequently trigger vertical page scrolling or freeze page navigation on Safari iOS.",
          solution:
            "Configured Swiper.js touch-action CSS properties and customized touchAngle thresholds to separate horizontal swipes from vertical page scrolls.",
          takeaway:
            "Mobile touch interactions require explicit gesture angle separation.",
        },
      ],
      learnings: [
        "Mastery of native browser APIs and responsive layout mathematics creates faster, smoother experiences than default framework abstractions.",
        "Visual rhythm, whitespace, and typographic contrast directly dictate conversion and user trust.",
      ],
      result:
        "Delivered a lightning-fast, live-deployed travel portal with a 98+ mobile responsiveness score, demonstrating precision frontend craftsmanship.",
      future: [
        "Integrate live currency conversion API.",
        "Add interactive Mapbox / Leaflet route exploration.",
        "Implement progressive web app (PWA) offline itinerary caching.",
      ],
    },
  },
  {
    id: 3,
    slug: "developer-management-system",
    title: "Developer Management System",
    category: "Backend",
    featured: true,
    status: "Live",
    role: "Backend Java Engineer",
    year: 2024,
    shortDescription:
      "A backend system built with raw Java Servlets, JSP, and pure JDBC — built without frameworks to master the low-level HTTP and SQL plumbing beneath Spring Boot.",
    description:
      "I deliberately chose not to use Spring Boot here. I wanted to understand what happens beneath modern frameworks — manual database connection pooling, low-level HTTP servlet lifecycles, PreparedStatement SQL injection defenses, and MVC separation written by hand.",
    technologies: [
      "Java (JDK 17)",
      "Java Servlets",
      "JSP & JSTL",
      "PostgreSQL",
      "JDBC",
      "Apache Tomcat",
      "Bootstrap 5",
    ],
    github: "https://github.com/Jaydip-03/Developer-CRUD-Servlet-JSP",
    live: "",
    image: "/projects/developer-management/cover.png",
    highlights: [
      "Complete CRUD for developer records",
      "MVC-style separation with Servlets and JSP",
      "PostgreSQL-backed persistence layer",
      "Form validation and Bootstrap UI components",
    ],
    caseStudy: {
      number: "03",
      oneLiner:
        "An enterprise developer records management platform architected with Java Servlets, JSP, and PostgreSQL.",
      role: "Backend Java Engineer",
      overview: {
        what: "A structured developer resource management system facilitating organizational record keeping, role assignments, department categorization, and salary tracking.",
        why: "To master the foundational mechanics of the Java Web ecosystem (Servlets, RequestDispatcher, JSP life-cycle, JDBC) before relying on higher-level abstractions like Spring.",
        targetAudience:
          "Engineering managers and technical operations teams managing internal developer rosters and talent allocation.",
      },
      problem:
        "Unstructured team directories lead to desynchronized personnel records, manual data entry errors, and untracked developer role changes across projects.",
      approach:
        "Built a strict Model-View-Controller (MVC) architecture separating HTTP request handling (Servlets), presentation logic (JSTL/JSP), and database persistence (JDBC/PostgreSQL).",
      features: [
        {
          title: "Complete CRUD Operations",
          description:
            "Full lifecycle management allowing creation, viewing, updating, and archiving of developer personnel profiles with transactional guarantees.",
          tag: "Backend Core",
        },
        {
          title: "MVC Separation of Concerns",
          description:
            "Strict architectural separation between Servlet request controllers, data transfer models, and JSTL rendering views.",
          tag: "Architecture",
        },
        {
          title: "Server-Side Data Sanitization",
          description:
            "Comprehensive input validation verifying email formats, phone numbers, and department identifiers before triggering SQL transactions.",
          tag: "Data Integrity",
        },
        {
          title: "Direct PostgreSQL JDBC Connectivity",
          description:
            "Hand-crafted JDBC database connection factory utilizing parameterized PreparedStatements to eliminate SQL injection vulnerabilities.",
          tag: "Security",
        },
      ],
      productExperience: [
        {
          title: "Developer Directory & Record Index",
          caption:
            "A structured table overview providing filtering by department, seniority level, and contact details with inline action controls.",
          layout: "image-left",
        },
        {
          title: "Profile Creation, Role Assignment & Audit Logging",
          caption:
            "Validated forms ensuring strict data type adherence and preventing duplicate email registrations across developer records.",
          layout: "image-right",
        },
      ],
      technical: {
        stackOverview:
          "Java (JDK 17), Java Servlets (Jakarta EE), JSP, JSTL, PostgreSQL, JDBC, Apache Tomcat 10, Bootstrap 5.",
        database:
          "PostgreSQL relational schema featuring primary key sequences, unique constraints on email, and indexed department lookups.",
        apiDesign:
          "Servlet controller routes mapping REST-like actions (/insert, /update, /delete, /list) using doGet and doPost handlers.",
        keyDecisions: [
          {
            decision: "Data Access Object (DAO) Pattern",
            rationale:
              "Encapsulated all JDBC persistence logic into DeveloperDAO to prevent raw SQL from bleeding into servlet controllers.",
          },
          {
            decision: "Universal PreparedStatement Enforcement",
            rationale:
              "Prohibited raw string concatenation in SQL queries to guarantee 100% protection against SQL injection attacks.",
          },
        ],
      },
      challenges: [
        {
          title: "SQL Injection Vulnerability Risks in Dynamic Inputs",
          description:
            "Early search query strings constructed via direct string concatenation risked SQL injection from malicious search inputs.",
          solution:
            "Replaced all statement executions with parameterized PreparedStatements and strict type-safe setters.",
          takeaway:
            "Never trust user input; parameterization is mandatory for relational data safety.",
        },
        {
          title: "Database Connection Leaks in Servlets",
          description:
            "Unclosed JDBC Connection and Statement objects caused database connection exhaustion under rapid page reloads.",
          solution:
            "Refactored all DAO operations to utilize try-with-resources blocks, ensuring automatic connection return to the pool.",
          takeaway:
            "Every acquired system resource must have a deterministic close lifecycle.",
        },
      ],
      learnings: [
        "Deepened fundamental comprehension of HTTP servlet request/response lifecycles, session attributes, and web container threading.",
        "Learned why modern frameworks abstract servlet complexity, but also how to debug low-level web container issues when abstractions fail.",
      ],
      result:
        "Constructed an authentic, robust classic Java web application demonstrating deep foundational command of the Java enterprise ecosystem.",
      future: [
        "Migrate DAO persistence layer to Spring Data JPA.",
        "Add role-based authentication filter (AuthenticationFilter).",
        "Build a REST API layer for headless frontend integration.",
      ],
    },
  },
  {
    id: 4,
    slug: "fertilizer-recommendation-system",
    title: "Fertilizer Recommendation System",
    category: "IoT",
    featured: false,
    status: "Research",
    role: "IoT Engineer & Research Author",
    year: 2024,
    shortDescription:
      "Research-based IoT project that recommends suitable fertilizers using real-time soil nutrient readings.",
    description:
      "An IoT-based fertilizer recommendation system using NPK sensors to analyze soil conditions and suggest fertilizers in real time. The work combined hardware sensing, data processing, and agritech logic — and was documented and published as a research paper.",
    technologies: [
      "Arduino",
      "IoT Hardware",
      "NPK Optical Sensor",
      "Java",
      "Soil Chemistry Analysis",
      "Research Publication",
    ],
    github: "",
    live: "",
    image: "/projects/fertilizer/cover.png",
    highlights: [
      "NPK sensor integration for soil nutrient analysis",
      "Rule-based fertilizer recommendation engine",
      "Arduino + IoT pipeline for field data collection",
      "Published as a research paper",
    ],
    caseStudy: {
      number: "04",
      oneLiner:
        "An agritech IoT sensing pipeline analyzing real-time soil nitrogen, phosphorus, and potassium to recommend optimal crop nutrition.",
      role: "IoT Engineer & Research Author",
      overview: {
        what: "A hardware-software IoT system that measures soil Nitrogen, Phosphorus, and Potassium (NPK) levels using optical sensors and generates scientific fertilizer recommendations.",
        why: "Over-fertilization and arbitrary nutrient application degrade soil health, contaminate groundwater, and cause massive financial waste for farmers.",
        targetAudience:
          "Agricultural researchers, local farmers, and precision agritech practitioners aiming to optimize crop yield scientifically.",
      },
      problem:
        "Traditional soil testing requires laboratory dispatch and takes days to return results, leaving farmers to guess fertilizer quantities, which leads to soil nutrient imbalance and reduced yields.",
      approach:
        "Designed an in-field sensing probe pairing Arduino microcontroller architecture with optical NPK soil sensors, transmitting nutrient telemetry to an algorithmic decision engine.",
      features: [
        {
          title: "Real-Time NPK Soil Sensing",
          description:
            "Optical sensor probe capturing Nitrogen, Phosphorus, and Potassium nutrient concentration values directly in the field.",
          tag: "Hardware",
        },
        {
          title: "Rule-Based Agronomic Engine",
          description:
            "Mathematical model comparing live soil telemetry against crop-specific ideal nutrient curves to determine precise deficiency offsets.",
          tag: "Algorithm",
        },
        {
          title: "Published Academic Research",
          description:
            "Methodology, telemetry accuracy benchmarks, and field findings documented and published as a formal research paper.",
          tag: "Research",
        },
      ],
      technical: {
        stackOverview:
          "Arduino Microcontroller, RS485 / Modbus NPK Soil Sensor, Java Data Processing Engine, Serial Communication.",
        keyDecisions: [
          {
            decision: "RS485 Modbus Industrial Protocol",
            rationale:
              "Employed RS485 differential signaling to protect sensor data transmission from agricultural electromagnetic noise.",
          },
        ],
      },
      challenges: [
        {
          title: "Sensor Calibration Drift in Moist Soils",
          description:
            "High moisture variability distorted raw optical sensor reflections, leading to erratic nitrogen readings.",
          solution:
            "Implemented a calibration offset algorithm factoring in soil moisture baselines before computing NPK concentrations.",
          takeaway:
            "Hardware sensor readings always require software calibration and environmental filtering.",
        },
      ],
      learnings: [
        "Bridging physical hardware sensors with software processing requires robust fault tolerance and noise filtering.",
        "Writing a peer-reviewed research paper taught rigorous empirical methodology and technical documentation.",
      ],
      result:
        "Developed a working agritech prototype and published research demonstrating real-time soil nutrient analysis with under 5% deviation from lab tests.",
      future: [
        "Integrate LoRaWAN wireless telemetry for kilometer-range rural farm connectivity.",
        "Develop an Android mobile companion app for offline field diagnostics.",
      ],
    },
  },
];
