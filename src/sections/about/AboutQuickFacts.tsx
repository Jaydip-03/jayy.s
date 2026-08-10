import { MapPin, GraduationCap, Briefcase, Layers } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Dhule, Maharashtra" },
  { icon: GraduationCap, label: "Education", value: "B.Tech IT, 2025" },
  { icon: Briefcase, label: "Currently", value: "Robowaves Technologies" },
  { icon: Layers, label: "Focus", value: "Java + MERN Stack" },
];

export default function AboutQuickFacts() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-3">
      {facts.map((fact) => {
        const Icon = fact.icon;
        return (
          <div
            key={fact.label}
            className="rounded-xl border border-neutral-200 p-4 transition-colors hover:border-emerald-300"
          >
            <Icon size={16} className="text-emerald-600" />
            <p className="mt-3 text-xs uppercase tracking-wide text-neutral-400">
              {fact.label}
            </p>
            <p className="mt-1 text-sm font-medium text-neutral-900">
              {fact.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}