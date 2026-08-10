export type ProficiencyLevel = "expert" | "advanced" | "intermediate";

export interface Skill {
  name: string;
  level?: ProficiencyLevel; // omit for "Currently Exploring" items
}