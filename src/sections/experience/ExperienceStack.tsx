"use client";

import { experiences } from "@/constants/experience";

import ExperienceChapterCard from "./ExperienceChapterCard";
import ExperienceFeaturedCard from "./ExperienceFeaturedCard";

export default function ExperienceStack() {
  const current = experiences.find((item) => item.current);
  const past = experiences.filter((item) => !item.current);

  return (
    <div className="mt-0">
      {current && <ExperienceFeaturedCard experience={current} />}

      {past.map((experience, index) => (
        <ExperienceChapterCard
          key={experience.slug}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
}
