import Image from "next/image";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { SHIMMER_BLUR_DATA_URL } from "@/lib/images";

type ProjectImageProps = {
  project: Project;
  priority?: boolean;
  className?: string;
  aspect?: string;
};

export default function ProjectImage({
  project,
  priority = false,
  className,
  aspect = "aspect-[16/9]",
}: ProjectImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden bg-zinc-100", aspect, className)}>
      <Image
        src={project.image}
        alt={`${project.title} interface preview`}
        fill
        priority={priority}
        placeholder="blur"
        blurDataURL={SHIMMER_BLUR_DATA_URL}
        sizes="(min-width: 1024px) 55vw, 94vw"
        className="object-cover object-top"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-zinc-950/10 via-transparent to-transparent" />
    </div>
  );
}
