import SkillChip from "./SkillChip";
import type { Skill } from "@/types/skills";

type SkillCategoryProps = {
  category: {
    title: string;
    skills: Skill[];
    learning?: boolean;
  };
};

export default function SkillCategory({
  category,
}: SkillCategoryProps) {
  return (
    <section
      className={[
        "grid gap-5 py-7 first:pt-0 last:pb-0",
        "md:grid-cols-[150px_minmax(0,1fr)]",
        category.learning ? "text-[#b45309]" : "",
      ].join(" ")}
    >
      {/* Category */}
      <h3
        className={[
          "self-start text-[13px] font-semibold uppercase",
          "leading-[0.9] tracking-[-0.035em]",
          "md:text-[32px]",
          "break-words",
          category.learning
            ? "text-[#c17a12]"
            : "text-neutral-400",
        ].join(" ")}
      >
        {category.title}
      </h3>

      {/* Skills */}
      <div className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.skills.map((skill) => (
          <SkillChip
            key={skill.name}
            label={skill.name}
            level={skill.level}
            learning={category.learning}
          />
        ))}
      </div>
    </section>
  );
}