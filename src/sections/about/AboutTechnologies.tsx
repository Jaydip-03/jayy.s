const technologies = [
  "Java",
  "Spring Boot",
  "Hibernate",
  "REST API",
  "PostgreSQL",
  "React",
  "Next.js",
  "Git",
];

export default function AboutTechnologies() {
  return (
    <div>

      {/* Heading */}

      <div className="flex items-center gap-4">

        <h3
          className="
            text-sm
            font-medium
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Technologies
        </h3>

        <div className="h-px flex-1 bg-neutral-300" />

      </div>

      {/* Grid */}

      <div className="mt-10 grid grid-cols-2 gap-4">

        {technologies.map((tech) => (
          <div
            key={tech}
            className="
              group
              border-b
              border-neutral-300
              py-5
              transition-all
              duration-300
              hover:border-black
            "
          >
            <h4
              className="
                text-lg
                font-medium
                text-neutral-900
                transition-colors
                duration-300
                group-hover:text-black
              "
            >
              {tech}
            </h4>
          </div>
        ))}

      </div>

    </div>
  );
}