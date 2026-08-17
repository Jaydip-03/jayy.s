"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks: {
  name: string;
  href: string;
  external?: boolean;
}[] = [
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const linkClassName =
  "link-spidey-underline text-[14px] tracking-[0.01em] text-zinc-400";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-5 z-50 sm:top-6">
      <nav className="container-custom">
        <div className="grid h-[58px] grid-cols-[1fr_auto_1fr] items-center rounded-full border border-white/[0.08] bg-black/65 px-4 backdrop-blur-xl sm:h-[60px] sm:px-6 md:px-7">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group inline-flex items-center font-mono text-[20px] font-semibold tracking-tight sm:text-[22px]"
          >
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">
              &lt;
            </span>
            <span className="text-white">jayy</span>
            <span className="text-spidey-blue">/</span>
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">
              &gt;
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  {link.name}
                </a>
              ) : (
                <Link key={link.name} href={link.href} className={linkClassName}>
                  {link.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-spidey-red/45 hover:shadow-[0_0_28px_rgba(226,54,54,0.16),0_0_36px_rgba(0,111,185,0.1)] sm:px-5 sm:py-2.5 md:text-[15px]"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-zinc-300 transition-colors hover:border-white/15 hover:text-white md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/[0.08] bg-black/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col divide-y divide-white/[0.06] px-5">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="py-4 text-[15px] text-zinc-300 transition-colors hover:text-spidey-blue"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="py-4 text-[15px] text-zinc-300 transition-colors hover:text-spidey-blue"
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
