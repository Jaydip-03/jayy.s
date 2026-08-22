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
    <div className="flex items-center gap-4 sm:gap-5">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="social-spidey-icon text-zinc-500 transition-colors duration-200 hover:text-zinc-200"
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
