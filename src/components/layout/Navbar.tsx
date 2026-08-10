"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 px-6">
      <nav className="mx-auto max-w-[1440px]">
        <div className="flex h-[65px] items-center justify-between rounded-full border border-white/[0.08] bg-black/70 px-6 backdrop-blur-md md:px-8">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group inline-flex items-center font-mono text-[22px] font-semibold tracking-tight"
          >
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">&lt;</span>
            <span className="text-white">jayy</span>
            <span className="text-emerald-400">/</span>
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-[15px] text-zinc-400 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[15px] text-zinc-400 transition-colors hover:text-white after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-emerald-500 after:transition-all hover:after:w-full"
            >
              Resume
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* CTA — visible at every screen size, mobile included */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black px-4 py-2.5 text-sm text-white transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_30px_rgba(16,185,129,.15)] md:px-6 md:py-3 md:text-base"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/[0.08] bg-black/90 backdrop-blur-md md:hidden"
            >
              <div className="flex flex-col divide-y divide-white/[0.08] px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-4 text-base text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="py-4 text-base text-zinc-300 transition-colors hover:text-white"
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}