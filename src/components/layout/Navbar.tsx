"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Moon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

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

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isSpideyMode, toggleMode } = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Smooth scroll handler for anchor links */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setIsOpen(false);

    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/blog" && pathname.startsWith("/blog")) return true;
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-5 z-50 sm:top-6">
      <nav className="container-custom">
        <div className="grid h-[58px] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/[0.08] bg-black/75 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:h-[60px] sm:px-6 md:px-7">
          
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group inline-flex items-center font-mono text-[20px] font-semibold tracking-tight sm:text-[22px]"
          >
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">
              &lt;
            </span>
            <span className="text-white">jayy</span>
            <span style={{ color: SPIDEY_BLUE }}>/</span>
            <span className="text-zinc-600 transition-colors group-hover:text-zinc-400">
              &gt;
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center justify-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              return link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-spidey-underline text-[14px] tracking-[0.01em] text-zinc-400 hover:text-white"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`link-spidey-underline text-[14px] tracking-[0.01em] transition-colors ${
                    active ? "text-white font-medium" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions: Mode Toggle & Let's Talk CTA */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3">
            
            {/* Minimal Icon-Only Mode Toggle */}
            <button
              type="button"
              onClick={toggleMode}
              aria-label={isSpideyMode ? "Switch to normal mode" : "Switch to Spidey mode"}
              title={isSpideyMode ? "Switch to normal mode" : "Switch to Spidey mode"}
              className={`group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                isSpideyMode
                  ? "border border-[#e23636]/60 bg-[#e23636]/15 text-white shadow-[0_0_20px_rgba(226,54,54,0.3)] hover:border-[#e23636] hover:scale-105"
                  : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {isSpideyMode ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 28 28"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                >
                  <ellipse cx="14" cy="14" rx="11" ry="12" fill={SPIDEY_RED} />
                  <path d="M14 2V26M3 14H25M6 6L22 22M22 6L6 22" stroke="#18181b" strokeWidth="1" opacity="0.6" />
                  <path d="M7 11Q11 11 13 14Q10 17 6 15Z" fill="white" stroke="#18181b" strokeWidth="1.2" />
                  <path d="M21 11Q17 11 15 14Q18 17 22 15Z" fill="white" stroke="#18181b" strokeWidth="1.2" />
                </svg>
              ) : (
                <Moon className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:text-white" />
              )}
            </button>

            {/* Let's Talk Button */}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3.5 py-1.5 text-xs text-white transition-all duration-300 hover:border-white/25 sm:px-4 sm:py-2 sm:text-sm"
              style={{
                borderColor: isSpideyMode ? `${SPIDEY_RED}50` : undefined,
              }}
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-300 transition-colors hover:border-white/15 hover:text-white md:hidden"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
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
                      onClick={(e) => handleNavClick(e, link.href)}
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
