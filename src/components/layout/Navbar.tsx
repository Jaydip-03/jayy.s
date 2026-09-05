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

  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = ["projects", "experience"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/#projects") {
      if (pathname === "/work" || pathname.startsWith("/work/")) return true;
      if (pathname === "/" && activeSection === "projects") return true;
      return false;
    }
    if (href === "/#experience") {
      if (pathname === "/experience" || pathname.startsWith("/experience/")) return true;
      if (pathname === "/" && activeSection === "experience") return true;
      return false;
    }
    if (href === "/about") return pathname === "/about";
    if (href === "/blog") return pathname.startsWith("/blog");
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
              <span className="font-mono text-base font-medium tracking-tight text-white transition-opacity group-hover:opacity-90">
                &lt;jayy<span className={effectiveSpidey ? "text-[#006fb9]" : "text-zinc-500 transition-colors group-hover:text-emerald-400"}>/</span>&gt;
              </span>
            </Link>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <div
            className="hidden items-center justify-center gap-1 md:flex"
            onMouseLeave={() => setHoveredLink(null)}
          >
            {navLinks.map((link) => {
              const active = isActiveLink(link.href);
              const isHovered = hoveredLink === link.name;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : isHovered
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {/* Floating glass pill indicator */}
                  {(isHovered || (active && !hoveredLink)) && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className={`absolute inset-0 rounded-full ${
                        effectiveSpidey
                          ? active
                            ? "border border-[#e23636]/40 bg-[#e23636]/20 shadow-[0_0_12px_rgba(226,54,54,0.2)]"
                            : "border border-[#e23636]/20 bg-[#e23636]/10"
                          : active
                          ? "border border-white/15 bg-white/10 shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                          : "border border-white/[0.08] bg-white/[0.05]"
                      }`}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                  {active && !isHovered && (
                    <span
                      className={`absolute bottom-0 left-1/2 h-[2px] w-3 -translate-x-1/2 rounded-full ${
                        effectiveSpidey ? "bg-[#e23636]" : "bg-emerald-400/80"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions: Search Circle, Mode Toggle Circle & Let's Talk CTA */}
          <div className="flex items-center justify-end gap-2 sm:gap-2.5">
            
            {/* Command Palette Trigger Button (Circle) */}
            <button
              type="button"
              onClick={() => openCommandPalette()}
              aria-label="Open command palette (Cmd+K)"
              title="Search or quick jump (⌘K / Ctrl+K)"
              className={`group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                effectiveSpidey
                  ? "border border-[#e23636]/40 bg-[#e23636]/10 text-zinc-300 shadow-[0_0_15px_rgba(226,54,54,0.15)] hover:border-[#e23636] hover:text-white hover:scale-105"
                  : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:scale-105"
              }`}
            >
              <Search className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Minimal Icon-Only Mode Toggle (Circle) */}
            <button
              type="button"
              onClick={toggleMode}
              suppressHydrationWarning
              aria-label={effectiveSpidey ? "Switch to normal mode" : "Switch to Spidey mode"}
              title={effectiveSpidey ? "Switch to normal mode" : "Switch to Spidey mode"}
              className={`group relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                effectiveSpidey
                  ? "border border-[#e23636]/60 bg-[#e23636]/15 text-white shadow-[0_0_20px_rgba(226,54,54,0.3)] hover:border-[#e23636] hover:scale-105"
                  : "border border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-white hover:scale-105"
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
              className={`group inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs text-white transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                effectiveSpidey
                  ? "border-[#e23636]/50 bg-[#e23636]/10 hover:border-[#e23636] hover:bg-[#e23636]/20 shadow-[0_0_15px_rgba(226,54,54,0.15)]"
                  : "border-white/10 bg-black/40 hover:border-white/25 hover:bg-white/[0.06]"
              }`}
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

                {navLinks.map((link) => {
                  const active = isActiveLink(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between py-4 text-[15px] transition-colors ${
                        active
                          ? effectiveSpidey
                            ? "font-medium text-[#e23636]"
                            : "font-medium text-emerald-400"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      {active && (
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            effectiveSpidey ? "bg-[#e23636]" : "bg-emerald-400"
                          }`}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
