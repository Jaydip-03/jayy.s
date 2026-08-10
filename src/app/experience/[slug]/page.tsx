import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { experiences } from "@/constants/experience";
import { projects } from "@/constants/projects";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ExperienceDetailPage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = experiences.find((item) => item.slug === slug);

  if (!experience) notFound();
  const currentIndex = experiences.findIndex((item) => item.slug === slug);
  const prevExp = currentIndex > 0 ? experiences[currentIndex - 1] : null;
  const nextExp =
    currentIndex < experiences.length - 1 ? experiences[currentIndex + 1] : null;

  const relatedProject = experience.relatedProject
    ? projects.find((p) => p.slug === experience.relatedProject)
    : null;

  return (
    <main className="min-h-screen bg-black px-6 pb-24 pt-32 text-white">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/experience"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to journey
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <p className="text-sm tracking-wide text-zinc-500">{experience.duration}</p>
          {experience.current && (
            <span className="rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs uppercase tracking-widest text-emerald-300">
              Current
            </span>
          )}
        </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {experience.role}
        </h1>
        <p className="mt-3 text-xl text-zinc-400">
          {experience.company}
          {experience.location && <span className="text-zinc-600"> · {experience.location}</span>}
        </p>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300">
          {experience.description}
        </p>

        {experience.achievements && (
          <div className="mt-12 border-t border-zinc-800 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              Key contributions
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {experience.achievements.map((point) => (
                <li key={point} className="flex gap-3 text-zinc-300">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 border-t border-zinc-800 pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Technologies
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-emerald-500/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {relatedProject && (
          <div className="mt-12 border-t border-zinc-800 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              What this role produced
            </h2>
            <Link
              href={`/work/${relatedProject.slug}`}
              className="group mt-6 flex items-center justify-between rounded-2xl border border-zinc-800 p-6 transition-all hover:border-emerald-500/40 hover:bg-white/[0.02]"
            >
              <div>
                <p className="text-lg font-semibold">{relatedProject.title}</p>
                <p className="mt-1 text-sm text-zinc-500">{relatedProject.shortDescription}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-500 transition-colors group-hover:text-emerald-400" />
            </Link>
          </div>
        )}

           {(prevExp || nextExp) && (
          <div className="mt-16 grid gap-4 border-t border-zinc-800 pt-10 sm:grid-cols-2">
            {prevExp ? (
              <Link
                href={`/experience/${prevExp.slug}`}
                className="group rounded-2xl border border-zinc-800 p-6 transition-all hover:border-emerald-500/40 hover:bg-white/[0.02]"
              >
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </p>
                <p className="mt-3 text-lg font-semibold group-hover:text-emerald-300">
                  {prevExp.role}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{prevExp.company}</p>
              </Link>
            ) : (
              <div />
            )}

            {nextExp && (
              <Link
                href={`/experience/${nextExp.slug}`}
                className="group rounded-2xl border border-zinc-800 p-6 text-right transition-all hover:border-emerald-500/40 hover:bg-white/[0.02]"
              >
                <p className="flex items-center justify-end gap-2 text-xs uppercase tracking-widest text-zinc-500">
                  Next
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </p>
                <p className="mt-3 text-lg font-semibold group-hover:text-emerald-300">
                  {nextExp.role}
                </p>
                <p className="mt-1 text-sm text-zinc-500">{nextExp.company}</p>
              </Link>
            )}
          </div>
        )}
      </article>
    </main>
  );
}