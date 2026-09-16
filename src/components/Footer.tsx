"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowUpRight, ArrowUp, Copy, Check, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { useTheme } from "@/context/ThemeContext";

const quickLinks = [
  { name: "Home",        href: "/" },
  { name: "Projects",    href: "/#projects" },
  { name: "Experience",  href: "/#experience" },
  { name: "About",       href: "/about" },
  { name: "Skills",      href: "/#skills" },
  { name: "Recognition", href: "/#recognition" },
  { name: "Contact",     href: "/contact" },
  { name: "Blog",        href: "/blog", soon: true },
] as const;

const twitterHandle = siteConfig.links.twitter.replace(
  /^https?:\/\/(www\.)?(x|twitter)\.com\//,
  "@",
);

const SPIDEY_RED  = "#e23636";
const SPIDEY_BLUE = "#006fb9";

// ── Spider-Verse animated web corner threads ─────────────────────────
function WebCorners() {
  return (
    <>
      {/* Top-left web */}
      <svg aria-hidden="true" className="pointer-events-none absolute left-0 top-0 w-40 opacity-[0.13]" viewBox="0 0 160 160" fill="none">
        <path d="M0 0 Q80 40 160 80" stroke={SPIDEY_RED}  strokeWidth="0.8" />
        <path d="M0 0 Q60 60 120 160" stroke={SPIDEY_BLUE} strokeWidth="0.8" />
        <path d="M0 0 L80 0 M0 0 L0 80" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.6" />
        <circle cx="0" cy="0" r="30" stroke={SPIDEY_BLUE} strokeWidth="0.5" fill="none" opacity="0.5" />
        <circle cx="0" cy="0" r="60" stroke={SPIDEY_RED}  strokeWidth="0.4" fill="none" opacity="0.35" />
        <circle cx="0" cy="0" r="100" stroke={SPIDEY_BLUE} strokeWidth="0.35" fill="none" opacity="0.2" />
      </svg>

      {/* Bottom-right web */}
      <svg aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 w-52 opacity-[0.11]" viewBox="0 0 200 200" fill="none">
        <path d="M200 200 Q100 140 0 80"  stroke={SPIDEY_BLUE} strokeWidth="0.8" />
        <path d="M200 200 Q140 120 60 0"  stroke={SPIDEY_RED}  strokeWidth="0.8" />
        <path d="M200 200 L120 200 M200 200 L200 120" stroke={SPIDEY_RED} strokeWidth="0.5" opacity="0.6" />
        <circle cx="200" cy="200" r="40" stroke={SPIDEY_RED}  strokeWidth="0.5" fill="none" opacity="0.5" />
        <circle cx="200" cy="200" r="80" stroke={SPIDEY_BLUE} strokeWidth="0.4" fill="none" opacity="0.3" />
        <circle cx="200" cy="200" r="130" stroke={SPIDEY_RED} strokeWidth="0.3" fill="none" opacity="0.18" />
      </svg>
    </>
  );
}

// ── Normal mode: subtle dot-grid texture ─────────────────────────────
function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    />
  );
}

export default function Footer() {
  const { isSpideyMode } = useTheme();
  const pathname  = usePathname();
  const router    = useRouter();
  const { name, role, email, links } = siteConfig;

  const [copied,      setCopied]      = useState(false);
  const [time,        setTime]        = useState<string>("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit", minute: "2-digit", hour12: true,
      }).format(now));
    };
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleQuickLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      if (pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 600);
      }
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#080808] text-white">

      {/* ── Mode-specific backgrounds ── */}
      {isSpideyMode ? (
        <>
          <WebCorners />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(226,54,54,0.09) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,111,185,0.07) 0%, transparent 50%)" }} />
        </>
      ) : (
        <>
          <DotGrid />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.025) 0%, transparent 60%)" }} />
        </>
      )}

      {/* ── Watermark ── */}
      <p aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 right-[3%] select-none font-mono font-bold leading-none tracking-[-0.06em] opacity-[0.028]"
        style={{ fontSize: "clamp(5rem,15vw,11rem)", color: isSpideyMode ? SPIDEY_RED : "#fff" }}>
        jayy/
      </p>

      <Container className="relative z-10 pb-10 pt-20 sm:pt-24">

        {/* ══ CTA AREA ══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          {/* Availability badge */}
          {isSpideyMode ? (
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
              style={{ borderColor: `${SPIDEY_RED}50`, backgroundColor: `${SPIDEY_RED}0f` }}>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ backgroundColor: SPIDEY_RED }} />
                <span className="relative inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: SPIDEY_RED }} />
              </span>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: SPIDEY_RED }}>
                Signal the Squad · Let&apos;s Connect
              </p>
            </div>
          ) : (
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-emerald-400">
                Available for New Roles · Remote &amp; Pune
              </p>
            </div>
          )}

          {/* Main heading */}
          <h2 className="mx-auto max-w-2xl text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-5xl">
            {isSpideyMode ? (
              <>
                Web up. Got a role or{" "}
                <br className="hidden sm:block" />a project?{" "}
                <span className="font-display italic font-normal" style={{ color: SPIDEY_RED }}>
                  Let&apos;s swing.
                </span>
              </>
            ) : (
              <>
                Got a role, a project,{" "}
                <br className="hidden sm:block" />or just a question?{" "}
                <span className="font-display italic font-normal bg-gradient-to-r from-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                  Let&apos;s talk.
                </span>
              </>
            )}
          </h2>

          {/* Sub-line */}
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-zinc-500">
            {isSpideyMode
              ? "Spider-Jaydip is always on the line — day or night, rain or web-slinging."
              : "I read every message. Whether it's a role, a collab, or just to say hi."}
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300"
              style={isSpideyMode ? {
                backgroundColor: SPIDEY_RED,
                color: "#fff",
                boxShadow: `0 0 35px ${SPIDEY_RED}45, 0 4px 20px rgba(0,0,0,0.4)`,
              } : {
                backgroundColor: "#ffffff",
                color: "#000000",
                boxShadow: "0 0 30px rgba(255,255,255,0.12), 0 4px 20px rgba(0,0,0,0.3)",
              }}>
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Sparkles className="h-4 w-4" />
              <span>{isSpideyMode ? "Fire Up Web-Line ⚡" : "Get In Touch"}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-medium text-zinc-400 transition-all duration-300 hover:border-white/20 hover:text-white">
              <Mail className="h-4 w-4" />
              Email directly
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* ══ 3-COLUMN GRID ══ */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center font-mono text-xl font-semibold">
              <span className="text-zinc-600">&lt;</span>
              <span className="text-white">jayy</span>
              <span className={isSpideyMode
                ? "text-[#006fb9]"
                : "text-zinc-500 transition-colors group-hover:text-emerald-400"}>
                /
              </span>
              <span className="text-zinc-600">&gt;</span>
            </Link>

            <p className="mt-4 max-w-[240px] text-[13.5px] leading-relaxed text-zinc-500">
              {role} building clean, scalable software — one project at a time.
            </p>

            {/* Social icon row */}
            <div className="mt-6 flex items-center gap-2">
              {[
                { href: links.github,   Icon: FaGithub,   label: "GitHub" },
                { href: links.linkedin, Icon: FaLinkedin, label: "LinkedIn" },
                { href: links.twitter,  Icon: FaXTwitter, label: "Twitter" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="group flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white hover:-translate-y-0.5">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            <p className="mt-6 font-mono text-[11px] text-zinc-600">
              © {new Date().getFullYear()} {name}. All rights reserved.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.28em] text-zinc-500">
              Quick Links
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleQuickLink(e as any, link.href)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group flex items-center gap-1.5 text-[13.5px] text-zinc-500 transition-colors duration-200 hover:text-white"
                  >
                    <span
                      className="h-px w-3 shrink-0 transition-all duration-300 group-hover:w-4"
                      style={{
                        backgroundColor: hoveredLink === link.name && isSpideyMode
                          ? SPIDEY_RED
                          : hoveredLink === link.name
                          ? "#fff"
                          : "#3f3f46",
                      }}
                    />
                    <span>{link.name}</span>
                    {"soon" in link && link.soon && (
                      <span className="rounded px-1 py-px font-mono text-[8px] uppercase tracking-wider text-zinc-600"
                        style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                        soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Connect */}
          <div>
            <p className="mb-5 font-mono text-[10.5px] uppercase tracking-[0.28em] text-zinc-500">
              Connect
            </p>
            <ul className="space-y-3.5">
              {/* Email with copy */}
              <li className="flex items-center justify-between gap-2">
                <a href={`mailto:${email}`}
                  className="group flex items-center gap-2.5 text-[13.5px] text-zinc-500 transition-colors duration-200 hover:text-white">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
                  <span className="truncate max-w-[155px] sm:max-w-none">{email}</span>
                </a>
                <button type="button" onClick={handleCopyEmail}
                  className="flex shrink-0 items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-zinc-500 transition-all duration-200 hover:border-white/20 hover:text-white">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span key="check" initial={{ opacity:0,scale:0.8 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0 }}
                        className="flex items-center gap-1 text-emerald-400">
                        <Check className="h-2.5 w-2.5" />Copied
                      </motion.span>
                    ) : (
                      <motion.span key="copy" initial={{ opacity:0,scale:0.8 }} animate={{ opacity:1,scale:1 }} exit={{ opacity:0 }}
                        className="flex items-center gap-1">
                        <Copy className="h-2.5 w-2.5" />Copy
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </li>

              {[
                { href: links.github,   Icon: FaGithub,   label: "GitHub",    text: "Jaydip-03" },
                { href: links.linkedin, Icon: FaLinkedin, label: "LinkedIn",   text: "jaydip-desale" },
                { href: links.twitter,  Icon: FaXTwitter, label: "Twitter/X",  text: twitterHandle },
              ].map(({ href, Icon, label, text }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="group flex items-center gap-2.5 text-[13.5px] text-zinc-500 transition-colors duration-200 hover:text-white">
                    <Icon className="h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-white" />
                    <span>{text}</span>
                    <ArrowUpRight className="ml-auto h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ══ BOTTOM BAR ══ */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-7 sm:flex-row">
          <p className="font-mono text-[11px] text-zinc-600">
            Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span>Pune, IN</span>
              <span className="text-zinc-700">·</span>
              <span suppressHydrationWarning>{time || "—"} IST</span>
              <span className="text-zinc-700">·</span>
              <span>🇮🇳</span>
            </div>
            <button type="button" onClick={scrollToTop} aria-label="Back to top"
              className={
                "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-all duration-300 " +
                (isSpideyMode
                  ? "border-[#e23636]/30 bg-[#e23636]/[0.08] text-zinc-400 hover:border-[#e23636]/60 hover:text-white"
                  : "border-white/[0.08] bg-white/[0.03] text-zinc-500 hover:border-white/20 hover:text-white")
              }>
              Back to top
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </Container>
    </footer>
  );
}
