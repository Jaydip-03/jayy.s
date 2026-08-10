import Container from "@/components/ui/Container";
import { skillCategories } from "@/data/skills";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-16 md:py-20 text-black">
      <Container>
        <div className="mb-10 flex items-center gap-6">
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-500">05 / SKILLS</span>
          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 h-fit">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">WHAT I WORK WITH</p>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
              I don't collect frameworks.
              <br />
              I learn what earns their place.
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
              Java is my foundation. Every other technology I learn serves one purpose — to
              build better software through clean architecture and practical experience.
            </p>
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">Primary Focus</p>
              <div className="mt-3 space-y-2">
                <p className="text-base font-medium">Java Full Stack Development</p>
                <p className="text-base font-medium">Spring Ecosystem</p>
                <p className="text-base font-medium">Backend Architecture</p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-black" />
              <span className="text-sm font-medium tracking-wide">Always Learning.</span>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
              {skillCategories.map((category) => (
                <SkillCategory key={category.title} category={category} />
              ))}
            </div>
            <div className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-neutral-200 text-xs text-neutral-500">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-neutral-900" /> Expert</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-neutral-600" /> Advanced</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-sm bg-neutral-400" /> Intermediate</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}