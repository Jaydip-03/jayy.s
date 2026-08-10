import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { projects } from "@/constants/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryDotClass = {
  Frontend: "h-2 w-2 rounded-full bg-sky-500",
  Backend: "h-2 w-2 rounded-full bg-violet-500",
  "Full Stack": "h-2 w-2 rounded-full bg-emerald-600",
  IoT: "h-2 w-2 rounded-full bg-emerald-500",
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} | Jaydip Desale`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-32 text-zinc-950">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-emerald-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <div className="mt-8 flex items-center gap-2.5">
          <span className={categoryDotClass[project.category]} />
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {project.category}
          </p>
          <span className="ml-1 rounded-full border border-[#dce3eb] bg-[#f5f8fc] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
            {project.status}
          </span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">
          {project.shortDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:border-emerald-600 hover:text-emerald-700">
              <FaGithub className="h-4 w-4" />
              View Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-700">
              Live Site
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {project.image && (
          <div className="mt-10 overflow-hidden rounded-2xl border border-[#cfd6df]">
            <div className="flex h-8 items-center gap-1.5 border-b border-[#cfd6df] bg-[#f8fafc] px-3">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="ml-2 truncate text-[10px] font-medium text-slate-400">{project.title}</span>
            </div>
            <div className="relative aspect-[16/9]">
              <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 768px"  loading="eager" className="object-cover object-top" />
            </div>
          </div>
        )}

        <div className="mt-10 border-t border-zinc-100 pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Overview</h2>
          <p className="mt-4 text-base leading-8 text-zinc-700">{project.description}</p>
        </div>

        {project.keyFixes && project.keyFixes.length > 0 && (
          <div className="mt-10 border-t border-zinc-100 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
              What I Found &amp; Fixed
            </h2>
            <div className="mt-6 space-y-6">
              {project.keyFixes.map((item, i) => (
                <div key={i} className="rounded-xl border border-zinc-100 p-5">
                  <div className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <p>{item.issue}</p>
                  </div>
                  <div className="mt-3 flex items-start gap-2.5 text-sm text-zinc-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <p>{item.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.impact && (
          <div className="mt-10 border-t border-zinc-100 pt-10">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Impact</h2>
            <p className="mt-4 text-base leading-8 text-zinc-700">{project.impact}</p>
          </div>
        )}

        <div className="mt-10 border-t border-zinc-100 pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Built with</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology}
                className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}