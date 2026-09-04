"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, Moon, Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { openCommandPalette } from "@/components/CommandPalette";
import {
  hasIntroBeenSeen,
  INTRO_COMPLETE_EVENT,
  INTRO_COMPLETE_MS,
} from "@/lib/intro";

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

type NavbarProps = {
  initialVisible?: boolean;
};

export default function Navbar({ initialVisible = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isSpideyMode, toggleMode } = useTheme();

  const [showNav, setShowNav] = useState(initialVisible);

  useEffect(() => {
    setMounted(true);

    if (initialVisible || hasIntroBeenSeen()) {
      setShowNav(true);
      return;
    }

    // First-visit intro: wait for intro to begin exiting before revealing navbar
    const handleIntroComplete = () => {
      setShowNav(true);
    };

    window.addEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);

    // Safety fallback in case intro event doesn't fire
    const fallbackTimer = window.setTimeout(() => {
      setShowNav(true);
    }, INTRO_COMPLETE_MS + 200);

    return () => {
      window.removeEventListener(INTRO_COMPLETE_EVENT, handleIntroComplete);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

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

  const effectiveSpidey = mounted ? isSpideyMode : false;

  return (
    <motion.header
      initial={initialVisible ? { y: 0, opacity: 1 } : { y: -70, opacity: 0 }}
      animate={showNav ? { y: 0, opacity: 1 } : { y: -70, opacity: 0 }}
      transition={{ duration: initialVisible ? 0.2 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4"
    >
      <nav className="container-custom">
        <div className="grid h-[58px] grid-cols-2 items-center rounded-full border border-white/10 bg-black/80 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.37)] backdrop-blur-md sm:h-[62px] sm:px-5 md:grid-cols-3">
          
          {/* Logo / Monogram */}
          <div className="flex items-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spidey-red"
              aria-label="Jaydip Desale home"
            >
              <span className="font-mono text-base font-medium tracking-tight text-white transition-opacity group-hover:opacity-80">
                &lt;jayy<span className="text-spidey-blue">/</span>&gt;
              </span>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden items-center justify-center gap-6 md:flex">
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm transition-colors duration-200 ${
                    active
                      ? "font-medium text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions: Mode Toggle & Let's Talk CTA */}
          <div className="flex items-center justify-end gap-2 sm:gap-2.5">
            
            {/* Command Palette Trigger Button */}
            <button
              type="button"
              onClick={() => openCommandPalette()}
              aria-label="Open command palette (Cmd+K)"
              title="Open command palette (Cmd+K or Ctrl+K)"
              className={`group flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-xs font-mono transition-all duration-300 ${
                effectiveSpidey
                  ? "border-[#e23636]/40 bg-[#e23636]/10 text-zinc-300 hover:border-[#e23636] hover:text-white shadow-[0_0_15px_rgba(226,54,54,0.15)]"
                  : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              <Search className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-[10.5px] font-semibold tracking-wider text-zinc-400 group-hover:text-zinc-200">
                ⌘K
              </span>
            </button>

            {/* Minimal Icon-Only Mode Toggle */}
            <button
              type="button"
              onClick={toggleMode}
              suppressHydrationWarning
              aria-label={effectiveSpidey ? "Switch to normal mode" : "Switch to Spidey mode"}
              title={effectiveSpidey ? "Switch to normal mode" : "Switch to Spidey mode"}
              className={`group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                effectiveSpidey
                  ? "border border-[#e23636]/60 bg-[#e23636]/15 text-white shadow-[0_0_20px_rgba(226,54,54,0.3)] hover:border-[#e23636] hover:scale-105"
                  : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {effectiveSpidey ? (
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
              aria-controls="mobile-nav-menu"
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
              id="mobile-nav-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 overflow-hidden rounded-3xl border border-white/[0.08] bg-black/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col divide-y divide-white/[0.06] px-5">
                {/* Command Palette Mobile Entry */}
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    openCommandPalette();
                  }}
                  className="flex items-center justify-between py-4 text-[15px] text-zinc-300 transition-colors hover:text-white font-mono"
                >
                  <span className="flex items-center gap-2.5">
                    <Search className="h-4 w-4 text-zinc-400" />
                    <span>Command Palette</span>
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-zinc-400">⌘K</span>
                </button>

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
    </motion.header>
  );
}
