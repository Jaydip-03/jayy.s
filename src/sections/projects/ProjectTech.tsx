type ProjectTechProps = {
  technologies: string[];
};

export default function ProjectTech({ technologies }: ProjectTechProps) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {technologies.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-[#dce3eb] bg-[#f5f8fc] px-2.5 py-1 text-[10px] font-semibold text-slate-600"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}