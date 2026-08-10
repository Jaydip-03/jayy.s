import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram, FaMedium } from "react-icons/fa6";

const socials = [
  { name: "GitHub", href: "https://github.com/Jaydip-03", icon: FaGithub },
  { name: "LinkedIn", href: "#", icon: FaLinkedin },
  { name: "X", href: "#", icon: FaXTwitter },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Medium", href: "#", icon: FaMedium },
];

export default function HeroSocials() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex h-9 items-center gap-2 rounded-full
              border border-white/10 bg-white/[0.03] px-4
              text-[13px] font-medium text-zinc-400
              transition-all duration-300
              hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:text-white
            "
          >
            <Icon size={14} className="transition-colors group-hover:text-emerald-400" />
            {social.name}
          </a>
        );
      })}
    </div>
  );
}