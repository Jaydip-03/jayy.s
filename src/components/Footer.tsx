"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
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
  const { name, role, email, links } = siteConfig;

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
              <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em]" style={{ color: SPIDEY_RED }}>
                SIGNAL THE SQUAD // LET&apos;S CONNECT
              </p>
            </div>
          ) : (
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400">
                Let&apos;s Connect
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
              className="inline-flex items-center font-mono text-xl font-semibold"
            >
              <span className="text-zinc-600">&lt;</span>
              <span className="text-white">jayy</span>
              <span style={{ color: SPIDEY_BLUE }}>/</span>
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
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                    style={{
                      transition: "color 0.2s ease",
                    }}
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
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  <span>{email}</span>
                </a>
              </li>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaLinkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity hover:opacity-100" />
                </a>
              </li>
              <li>
                <a
                  href={links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <FaXTwitter className="h-4 w-4" />
                  <span>{twitterHandle}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-neutral-500 sm:flex-row">
          <p>
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
          <p className="font-mono text-[11px]">
            Pune, INDIA 🇮🇳
          </p>
        </div>
      </Container>
    </footer>
  );
}
