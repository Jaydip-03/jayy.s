"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowUpRight, ArrowUp, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { useTheme } from "@/context/ThemeContext";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Skills", href: "/#skills" },
  { name: "Recognition", href: "/#recognition" },
  { name: "Contact", href: "/contact" },
] as const;

const twitterHandle = siteConfig.links.twitter.replace(
  /^https?:\/\/(www\.)?(x|twitter)\.com\//,
  "@",
);

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

function FooterWebPattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="footer-web"
          width="120"
          height="120"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M60 0 L60 120 M0 60 L120 60 M0 0 L120 120 M120 0 L0 120"
            stroke={SPIDEY_RED}
            strokeWidth="0.6"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="18"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.5"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r="36"
            stroke={SPIDEY_BLUE}
            strokeWidth="0.4"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-web)" />
    </svg>
  );
}

export default function Footer() {
  const { isSpideyMode } = useTheme();
  const pathname = usePathname();
  const { name, role, email, links } = siteConfig;

  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-black text-white">
      {/* Background Decor */}
      {isSpideyMode ? (
        <>
          <FooterWebPattern />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.07),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.06),transparent_35%)]"
          />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_60%)]"
        />
      )}

      {/* Subtle giant watermark */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-[4%] select-none font-mono text-[clamp(5.5rem,16vw,12rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.035]"
      >
        jayy/
      </p>

      <Container className="relative z-10 pt-20 pb-12 sm:pt-24">
        {/* Top CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {isSpideyMode ? (
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e23636] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e23636]" />
              </span>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em]" style={{ color: SPIDEY_RED }}>
                SIGNAL THE SQUAD // LET&apos;S CONNECT
              </p>
            </div>
          ) : (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-3.5 py-1">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-400 font-medium">
                Available for New Roles · Remote &amp; Pune
              </p>
            </div>
          )}

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-5xl">
            Got a role, a project, or just a question?{" "}
            <span className={isSpideyMode ? "font-display italic font-normal text-white" : "font-display italic font-normal text-zinc-400"}>
              Let&apos;s talk.
            </span>
          </h2>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300"
            style={{
              backgroundColor: isSpideyMode ? SPIDEY_RED : "#ffffff",
              color: isSpideyMode ? "#ffffff" : "#000000",
              boxShadow: isSpideyMode ? "0 0 30px rgba(226,54,54,0.3)" : "0 0 25px rgba(255,255,255,0.1)",
            }}
          >
            <span>{isSpideyMode ? "Fire Up Web-Line ⚡" : "Get In Touch"}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent sm:my-16" />

        {/* 3-Column Content Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <Link
              href="/"
              className="group inline-flex items-center font-mono text-xl font-semibold"
            >
              <span className="text-zinc-600">&lt;</span>
              <span className="text-white">jayy</span>
              <span
                className={
                  isSpideyMode
                    ? "text-[#006fb9]"
                    : "text-zinc-500 transition-colors group-hover:text-emerald-400"
                }
              >
                /
              </span>
              <span className="text-zinc-600">&gt;</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-400">
              {role} building clean, scalable software — one project at a time.
            </p>
            <p className="mt-6 font-mono text-xs text-neutral-500">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href)}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              Connect
            </p>
            <ul className="space-y-3">
              <li className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-white" />
                  <span className="truncate max-w-[170px] sm:max-w-none">{email}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[10.5px] text-neutral-400 transition-all duration-200 hover:border-white/25 hover:text-white shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-2.5 w-2.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-2.5 w-2.5 text-neutral-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </li>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaGithub className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-white" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaLinkedin className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-white" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaXTwitter className="h-4 w-4 text-neutral-500 transition-colors group-hover:text-white" />
                  <span>{twitterHandle}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Utilities */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {/* Live IST Time */}
            <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Pune, IN</span>
              <span className="text-neutral-600">·</span>
              <span suppressHydrationWarning>{time || "01:30 AM"} IST</span>
              <span className="text-neutral-600">·</span>
              <span>🇮🇳</span>
            </div>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className={`group inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-all duration-300 ${
                isSpideyMode
                  ? "border-[#e23636]/30 bg-[#e23636]/10 text-zinc-300 hover:border-[#e23636] hover:text-white shadow-[0_0_12px_rgba(226,54,54,0.15)]"
                  : "border-white/10 bg-white/[0.04] text-neutral-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              }`}
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
