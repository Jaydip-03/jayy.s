const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "PostgreSQL",
  "REST APIs",
  "Git",
  "Docker",
];

export default function HeroTech() {
  return (
    <div className="hidden lg:flex items-center justify-center">
      <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-muted">
          Core Stack
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 px-4 py-2 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}