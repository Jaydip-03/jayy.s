export default function ExperienceHeader() {
  return (
    <div className="sticky top-32 self-start">
      <div className="flex items-center gap-4">
        <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
          Experience
        </span>
        <div className="h-px w-16 bg-zinc-700" />
      </div>

      <h2 className="mt-8 text-6xl font-bold leading-none text-white">
        My
        <br />
        Experience
      </h2>

      <p className="mt-8 max-w-sm text-lg leading-9 text-zinc-400">
        Building enterprise-grade backend applications through
        internships, intensive training and continuous learning in
        Java Full Stack Development.
      </p>

      <div className="mt-10 h-px w-24 bg-zinc-700" />

      <a
        href="/resume.pdf"
        target="_blank"
        className="mt-12 inline-flex items-center gap-3 text-white text-lg font-medium transition hover:gap-5"
      >
        View Resume
        <span className="text-2xl">→</span>
      </a>
    </div>
  );
}