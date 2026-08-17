"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Skills", href: "/#skills" },
  { name: "Recognition", href: "/#recognition" },
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

function FooterBackdrop() {
  return (
    <>
      <FooterWebPattern />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(226,54,54,0.07),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(0,111,185,0.06),transparent_35%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 right-[4%] select-none font-mono text-[clamp(5.5rem,16vw,12rem)] font-bold leading-none tracking-[-0.06em] text-white/[0.045]"
      >
        jayy/
      </p>
    </>
  );
}

export default function Footer() {
  const { name, role, email, links } = siteConfig;

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-black text-white">
      <FooterBackdrop />

      <Container className="relative z-10 pt-24 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-emerald-400">
            Let&apos;s Connect
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-[1.12] tracking-[-0.03em] md:text-5xl">
            Got a role, a project, or just a question?{" "}
            <span className="font-display italic font-normal text-zinc-400">
              Let&apos;s talk.
            </span>
          </h2>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-7 py-3.5 font-medium text-black transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,.2)]"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <Link
              href="/"
              className="inline-flex items-center font-mono text-xl font-semibold"
            >
              <span className="text-zinc-600">&lt;</span>
              <span className="text-white">jayy</span>
              <span className="text-spidey-blue">/</span>
              <span className="text-zinc-600">&gt;</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-neutral-400">
              {role} building clean, scalable software — one project at a time.
            </p>
            <p className="mt-6 text-xs text-neutral-600">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-spidey-blue"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-spidey-blue"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-spidey-blue"
                >
                  <FaGithub className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-spidey-blue"
                >
                  <FaLinkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-spidey-blue"
                >
                  <FaXTwitter className="h-4 w-4" />
                  {twitterHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-neutral-700">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </Container>
    </footer>
  );
}
