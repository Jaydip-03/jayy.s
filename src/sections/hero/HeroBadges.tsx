import Badge from "./Badge";
import { BriefcaseBusiness, CodeXml, GraduationCap } from "lucide-react";

export default function HeroBadges() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge icon={<CodeXml size={15} />}>
        Full Stack Developer
      </Badge>

      <Badge icon={<BriefcaseBusiness size={15} />}>
        Open to 
      </Badge>

      <Badge icon={<GraduationCap size={15} />}>
        Published Researcher
      </Badge>
    </div>
  );
}
