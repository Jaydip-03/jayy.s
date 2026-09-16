"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Clock, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { contactContent } from "@/data/contact";
import { siteConfig } from "@/lib/site";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED  = "#e23636";
const SPIDEY_BLUE = "#006fb9";

const socialLinks = [
  { icon: FaGithub,   label: "GitHub",   href: siteConfig.links.github, handle: "Jaydip-03" },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.links.linkedin, handle: "jaydip-desale" },
  { icon: FaXTwitter, label: "X",        href: siteConfig.links.twitter,
    handle: siteConfig.links.twitter.replace(/^https?:\/\/(www\.)?(x|twitter)\.com\//, "@") },
] as const;

const stats = [
  { icon: Clock,  label: "Response time",  value: "< 24h" },
  { icon: MapPin, label: "Timezone",        value: "IST (UTC+5:30)" },
];

export default function ContactIntro() {
  const { isSpideyMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const { email } = siteConfig;
  const accent = isSpideyMode ? SPIDEY_RED : "#0a0a0a";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="lg:self-start"
    >
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5">
        {isSpideyMode ? (
          <>
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: SPIDEY_RED }} />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
              Spider-Signal // Direct Line
            </p>
          </>
        ) : (
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
            {contactContent.label}
          </p>
        )}
      </div>

      {/* Heading */}
      <h1 className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
        {contactContent.title}
        <br />
        <span className="italic font-normal text-neutral-400">
          {contactContent.italic}
        </span>
        {isSpideyMode && (
          <span className="ml-2 font-display italic text-2xl" style={{ color: SPIDEY_BLUE }}>
            ✦
          </span>
        )}
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-sm text-[15px] leading-7 text-neutral-600">
        {isSpideyMode
          ? "Ready for the next mission. Whether you have an open role, an engineering challenge, or a new system to build — reach out."
          : contactContent.description}
      </p>

      {/* Availability pill */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3.5 py-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.15em] text-emerald-600">
          {isSpideyMode ? "Active & Ready On-Call" : contactContent.availability}
        </span>
      </div>

      {/* Quick stats */}
      <div className="mt-6 flex gap-3">
        {stats.map(({ icon: Icon, label, value }) => (
          <div key={label}
            className="flex items-center gap-2 rounded-xl border border-neutral-200/80 bg-white/60 px-3.5 py-2.5 backdrop-blur-sm">
            <Icon className="h-3.5 w-3.5 text-neutral-400" />
            <div>
              <p className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-neutral-400">{label}</p>
              <p className="mt-0.5 text-xs font-semibold text-neutral-800">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Email copy card */}
      <button type="button" onClick={handleCopy}
        className="group mt-7 flex w-full max-w-sm items-center justify-between rounded-xl border border-neutral-200/80 bg-white/80 px-4 py-3.5 text-left shadow-sm transition-all duration-300 hover:border-neutral-300 hover:shadow-md"
        style={{ borderColor: isSpideyMode ? `${SPIDEY_RED}30` : undefined }}>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all duration-300 group-hover:scale-105"
            style={{ backgroundColor: accent }}>
            <Mail className="h-4 w-4" />
          </span>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-400">Email</p>
            <p className="mt-0.5 text-sm font-medium text-neutral-900">{email}</p>
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span key="copied" initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
              className="flex items-center gap-1 font-mono text-[10px] text-emerald-600">
              <Check className="h-3 w-3" /> Copied!
            </motion.span>
          ) : (
            <motion.span key="copy" initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0 }}
              className="flex items-center gap-1 font-mono text-[10px] text-neutral-400 transition-colors group-hover:text-neutral-700">
              <Copy className="h-3 w-3" /> Copy
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Social links */}
      <div className="mt-5 flex flex-wrap gap-2">
        {socialLinks.map(({ icon: Icon, label, href, handle }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="group inline-flex h-9 items-center gap-2 rounded-xl border border-neutral-200/80 bg-white/70 px-3.5 text-xs font-medium text-neutral-600 shadow-sm transition-all duration-200 hover:border-neutral-300 hover:bg-white hover:text-neutral-950 hover:-translate-y-0.5 hover:shadow-md">
            <Icon className="h-3.5 w-3.5" />
            <span>{handle}</span>
            <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      {/* Handwritten note */}
      <p className="pointer-events-none mt-8 rotate-[-3deg] font-handwritten text-[22px] leading-none"
        style={{ color: isSpideyMode ? SPIDEY_BLUE : "#a3a3a3" }}
        aria-hidden="true">
        {isSpideyMode ? "drop a line anytime 🕷️" : contactContent.handwritten}
      </p>
    </motion.div>
  );
}
