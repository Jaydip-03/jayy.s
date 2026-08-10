"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Recognition", href: "/#recognition" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-16 pt-24 pb-10">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-4">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight max-w-2xl mx-auto">
            Got a role, a project, or just a question? Let&apos;s talk.
          </h2>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white text-black px-7 py-3.5 font-medium transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,.2)]"
          >
            Get In Touch
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Bottom grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo + tagline */}
          <div>
            <Link href="/" className="inline-flex items-center font-mono text-xl font-semibold">
              <span className="text-zinc-600">&lt;</span>
              <span className="text-white">jayy</span>
              <span className="text-emerald-400">/</span>
              <span className="text-zinc-600">&gt;</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs">
              Java Full Stack Developer building clean, scalable software —
              one project at a time.
            </p>
            <p className="mt-6 text-xs text-neutral-600">
              © {new Date().getFullYear()} Jaydip Desale. All rights reserved.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">
              Connect
            </p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:jaydesale003@gmail.com" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" /> jaydesale003@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/Jaydip-03" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                  <FaGithub className="w-4 h-4" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jaydip-desale-760770234/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                  <FaLinkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/Desale_Jay27" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                  <FaXTwitter className="w-4 h-4" /> @Desale_Jay27
                </a>
              </li>
              <li>
                <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors">
                  <ArrowUpRight className="w-4 h-4" /> Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tech credit */}
        <p className="text-center text-xs text-neutral-700 mt-16">
          Built with Next.js, Tailwind CSS, Framer Motion &amp; Three.js
        </p>
      </div>
    </footer>
  );
}