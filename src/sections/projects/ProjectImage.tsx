// import Link from "next/link";
// import Image from "next/image";

// import { Project } from "@/types/project";

// type ProjectImageProps = {
//   project: Project;
// };

// export default function ProjectImage({
//   project,
// }: ProjectImageProps) {
//   return (
//     <Link
//       href={`/work/${project.slug}`}
//       className="block overflow-hidden rounded-[14px] border border-[#cfd6df] bg-[#e8edf2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
//       aria-label={`View ${project.title} case study`}
//     >
//         <div className="flex h-8 items-center gap-1.5 border-b border-[#cfd6df] bg-[#f8fafc] px-3">
//           <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
//           <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
//           <span className="h-2 w-2 rounded-full bg-[#28c840]" />
//           <span className="ml-2 truncate text-[10px] font-medium text-slate-400">{project.title}</span>
//         </div>

//         <div className="relative aspect-[16/8] overflow-hidden bg-[#e8edf2]">
//           {project.slug === "developer-management-system" ? (
//             <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,#d9e9ff,transparent_58%),linear-gradient(135deg,#eff6ff,#e8eef4)] px-6 text-center">
//               <span className="text-sm font-semibold text-slate-500">Developer Management System</span>
//             </div>
//           ) : (
//             <Image src={project.image} alt="" fill className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]" />
//           )}
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
//           <span className="absolute right-3 top-3 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 backdrop-blur-sm">
//             {project.status}
//           </span>
//         </div>
//     </Link>
//   );
// }




import Link from "next/link";
import Image from "next/image";

import { Project } from "@/types/project";

type ProjectImageProps = {
  project: Project;
};

export default function ProjectImage({ project }: ProjectImageProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="block overflow-hidden rounded-[12px] border border-[#cfd6df] bg-[#e8edf2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600"
      aria-label={`View ${project.title} case study`}
    >
      <div className="flex h-7 items-center gap-1.5 border-b border-[#cfd6df] bg-[#f8fafc] px-3">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[10px] font-medium text-slate-400">
          {project.title}
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden bg-[#e8edf2]">
        {project.image ? (
          <Image
            src={project.image}
            alt=""
            fill
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top,#d9e9ff,transparent_58%),linear-gradient(135deg,#eff6ff,#e8eef4)] px-6 text-center">
            <span className="text-sm font-semibold text-slate-500">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
        <span className="absolute right-3 top-3 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-600 backdrop-blur-sm">
          {project.status}
        </span>
      </div>
    </Link>
  );
}