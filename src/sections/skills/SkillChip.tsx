import type { ProficiencyLevel } from "@/types/skills";

const levelStyles: Record<ProficiencyLevel, string> = {
  expert: "bg-neutral-900",
  advanced: "bg-neutral-600",
  intermediate: "bg-neutral-400",
};

type SkillChipProps = {
  label: string;
  level?: ProficiencyLevel;
  learning?: boolean;
};

export default function SkillChip({ label, level, learning = false }: SkillChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ${
        learning
          ? "bg-amber-50 border border-amber-200 text-amber-900"
          : "bg-neutral-100 text-neutral-800"
      }`}
    >
      <span
        className={`w-2 h-2 shrink-0 rounded-sm ${
          learning ? "bg-amber-500" : levelStyles[level ?? "advanced"]
        }`}
      />
      {label}
    </span>
  );
}