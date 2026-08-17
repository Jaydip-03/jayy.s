export const aboutContent = {
  intro: {
    line1: "A little bit more",
    line2: "about me",
    tagline: "I think in systems, not just screens.",
    cursorLabel: "Jaydip",
  },
  hero: {
    eyebrow: "About",
    headline: ["Jaydip", "Desale"],
    subline: "the developer behind the work",
    role: "Java Full Stack Developer",
    hook:
      "I build backend systems and full-stack products — from Spring Boot APIs to interfaces people actually enjoy using.",
    note: "glad you're here :)",
    status: "Open to full-time roles",
  },
  story: {
    label: "Story",
    title: "How I got here",
    italic: "and where I'm headed.",
    paragraphs: [
      "I didn't start with a fancy setup or a big break — I started with curiosity about how software actually works under the hood. Java became the anchor, and every project since has been about turning that foundation into something real.",
      "Training at JSpiders gave me structure. Interning at Robowaves gave me production — code reviews, refactors, features that ship. I care about clean architecture, clear APIs, and products that feel intentional from database to UI.",
      "Right now I'm deep in the Spring ecosystem, sharpening full-stack skills, and building things I'd be proud to show in an interview — or deploy for real users.",
    ],
    pillars: [
      {
        title: "Think in systems",
        description:
          "Backend first — data models, APIs, and architecture that scale before the polish.",
      },
      {
        title: "Ship with intention",
        description:
          "Every feature should earn its place. I'd rather deploy something solid than demo something shallow.",
      },
      {
        title: "Stay dangerously curious",
        description:
          "New tools only matter when they solve real problems — but I'm always learning what earns a spot in the stack.",
      },
    ],
    quote:
      "Good software isn't loud. It just works — and keeps working when someone else reads your code.",
  },
  snapshot: [
    { label: "Based in", value: "Mumbai, India" },
    { label: "Education", value: "B.Tech IT, 2025" },
    { label: "Currently", value: "Intern @ Robowaves" },
    { label: "Focus", value: "Java & Spring Boot" },
    { label: "Status", value: "Open to work" },
  ],
  cta: {
    line1: "Always learning.",
    line2: "Always building.",
  },
  signoff: {
    line: "Still learning. Still building. Always becoming better.",
    signature: "— Jayy",
    photo: "/about/jaydip.jpg",
    photoAlt: "Jaydip Desale",
  },
} as const;
