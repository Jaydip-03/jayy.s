"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { contactContent } from "@/data/contact";
import { siteConfig } from "@/lib/site";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: siteConfig.links.github },
  { icon: FaLinkedin, label: "LinkedIn", href: siteConfig.links.linkedin },
  {
    icon: FaXTwitter,
    label: "X",
    href: siteConfig.links.twitter,
    display: siteConfig.links.twitter.replace(
      /^https?:\/\/(www\.)?(x|twitter)\.com\//,
      "@",
    ),
  },
] as const;

export default function ContactIntro() {
  const { isSpideyMode } = useTheme();
  const [copied, setCopied] = useState(false);
  const { email, location } = siteConfig;

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
      <div className="flex items-center gap-2.5">
        {isSpideyMode ? (
          <>
            <span className="h-2 w-2 rounded-full animate-pulse" style={{ backgroundColor: SPIDEY_RED }} />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.28em]" style={{ color: SPIDEY_RED }}>
              SPIDER-SIGNAL // DIRECT LINE
            </p>
          </>
        ) : (
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-neutral-400">
            {contactContent.label}
          </p>
        )}
      </div>

      <h1 className="mt-3 font-display text-4xl font-normal leading-[1.08] tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
        {contactContent.title}
        <br />
        <span className="italic font-normal text-neutral-500">
          {contactContent.italic}
        </span>
        {isSpideyMode && (
          <span
            className="ml-2 font-display italic text-2xl sm:text-3xl"
            style={{ color: SPIDEY_BLUE }}
          >
            ✦
          </span>
        )}
      </h1>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base sm:leading-7">
        {isSpideyMode
          ? "Ready for the next mission. Whether you have an open role, an engineering challenge, or a new system to build — reach out."
          : contactContent.description}
      </p>

      <div className="mt-6 inline-flex items-center gap-2.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-neutral-500">
          {isSpideyMode ? "ACTIVE & READY ON-CALL" : contactContent.availability}
        </span>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="group mt-8 flex w-full max-w-md items-center justify-between rounded-xl border border-neutral-200/80 bg-white/80 px-5 py-3.5 text-left transition-all duration-300 hover:border-neutral-300 hover:bg-white hover:shadow-xs"
        style={{
          borderColor: isSpideyMode ? `${SPIDEY_RED}30` : undefined,
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
            style={{ backgroundColor: isSpideyMode ? SPIDEY_RED : "#0a0a0a" }}
          >
            <Mail className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Email
            </p>
            <p className="mt-0.5 text-sm font-medium text-neutral-900">
              {email}
            </p>
          </div>
        </div>
        <span
          className="font-mono text-xs uppercase tracking-[0.14em] transition-colors"
          style={{ color: isSpideyMode ? SPIDEY_BLUE : undefined }}
        >
          {copied ? "Copied!" : "Copy"}
        </span>
      </button>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-9 items-center gap-2 rounded-lg border border-neutral-200/80 bg-white/70 px-3.5 text-xs font-medium text-neutral-700 transition-all duration-200 hover:border-neutral-400 hover:bg-white hover:text-neutral-950"
            >
              <Icon className="h-3.5 w-3.5" />
              <span>{"display" in item ? item.display : item.label}</span>
              <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          );
        })}
      </div>

      <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-neutral-400">
        Based in {location}
      </p>

      <p
        className="pointer-events-none mt-8 rotate-[-4deg] font-handwritten text-[22px]"
        style={{ color: isSpideyMode ? SPIDEY_BLUE : "#a3a3a3" }}
        aria-hidden="true"
      >
        {isSpideyMode ? "drop a line anytime 🕷️" : contactContent.handwritten}
      </p>
    </motion.div>
  );
}
