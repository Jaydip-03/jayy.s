import SkillChip from "./SkillChip";
import type { Skill } from "@/types/skills";

type SkillCategoryProps = {
  category: { title: string; skills: Skill[]; learning?: boolean };
};

export default function SkillCategory({ category }: SkillCategoryProps) {
  return (
    <section className={category.learning ? "sm:col-span-2" : ""}>
      <h3
        className={`mb-4 text-xs font-semibold uppercase tracking-[0.25em] ${
          category.learning ? "text-orange-600" : "text-neutral-400"
        }`}
      >
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {category.skills.map((skill) => (
          <SkillChip key={skill.name} label={skill.name} level={skill.level} learning={category.learning} />
        ))}
      </div>
    </section>
  );
}