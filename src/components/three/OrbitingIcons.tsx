import { Coffee } from "lucide-react";
import { SiReact, SiNextdotjs, SiSpringboot } from "react-icons/si";

const icons = [
  { Icon: Coffee, start: "0deg", color: "#e76f51" },
  { Icon: SiSpringboot, start: "90deg", color: "#6db33f" },
  { Icon: SiReact, start: "180deg", color: "#61dafb" },
  { Icon: SiNextdotjs, start: "270deg", color: "#ffffff" },
];

export default function OrbitingIcons() {
  return (
    <div
      className="absolute inset-0 pointer-events-none hidden lg:block"
      style={{ ["--orbit-size" as string]: "440px", ["--orbit-duration" as string]: "18s" }}
    >
      {icons.map(({ Icon, start, color }, i) => (
        <div
          key={i}
          className="orbit-ring"
          style={{ ["--start" as string]: start }}
        >
          <div className="orbit-icon">
            <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center -translate-y-1/2">
              <Icon size={18} style={{ color }} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}