import SkillChip from "./SkillChip";
import type { Skill } from "@/types/skills";

type SkillCategoryProps = {
  category: {
    title: string;
    skills: Skill[];
    learning?: boolean;
  };
};

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <div className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:gap-6">
      {/* Category Header */}
      <h3
        className={`font-mono text-xs uppercase tracking-[0.22em] sm:w-36 sm:shrink-0 ${
          category.learning ? "text-amber-700" : "text-neutral-400"
        }`}
      >
        {category.title}
      </h3>

      {/* Skills Inline Flow */}
      <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
        {category.skills.map((skill, index) => (
          <div key={skill.name} className="flex items-center">
            <SkillChip
              label={skill.name}
              learning={category.learning}
            />
            {index < category.skills.length - 1 && (
              <span className="text-neutral-300 select-none px-0.5">·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}