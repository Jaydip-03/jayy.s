import { FaGithub, FaInstagram, FaLinkedin, FaMedium, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "GitHub", href: "https://github.com/Jaydip-03", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jaydip-desale-760770234/",
    icon: FaLinkedin,
  },
  { name: "X", href: "https://x.com/Desale_Jay27", icon: FaXTwitter },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "Medium", href: "#", icon: FaMedium },
];

export default function HeroSocials() {
  return (
    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-spidey-pill group inline-flex h-8 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-[12px] font-medium text-zinc-400 sm:h-9 sm:px-4 sm:text-[13px]"
          >
            <Icon
              size={14}
              className="social-spidey-icon text-zinc-400 transition-colors duration-300"
            />
            {social.name}
          </a>
        );
      })}
    </div>
  );
}
