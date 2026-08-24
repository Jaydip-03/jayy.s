import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

const socials = [
  { name: "GitHub", href: siteConfig.links.github, icon: FaGithub },
  { name: "LinkedIn", href: siteConfig.links.linkedin, icon: FaLinkedin },
  { name: "X", href: siteConfig.links.twitter, icon: FaXTwitter },
  { name: "Medium", href: siteConfig.links.medium, icon: FaMedium },
  { name: "Instagram", href: siteConfig.links.instagram, icon: FaInstagram },
];

export default function HeroSocials() {
  return (
    <div className="flex items-center gap-3.5 sm:gap-4">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.08] hover:text-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
          >
            <Icon size={14} className="transition-transform duration-200 group-hover:scale-110" />
          </a>
        );
      })}
    </div>
  );
}
