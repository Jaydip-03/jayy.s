"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { contactContent } from "@/data/contact";
import { siteConfig } from "@/lib/site";

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
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
        {contactContent.label}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-5xl lg:text-[3.25rem]">
        {contactContent.title}
        <br />
        <span className="font-display italic font-normal text-neutral-500">
          {contactContent.italic}
        </span>
      </h1>

      <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
        {contactContent.description}
      </p>

      <div className="mt-8 inline-flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </span>
        <span className="font-mono text-[13px] text-neutral-500">
          {contactContent.availability}
        </span>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        className="group mt-10 flex w-full max-w-md items-center justify-between rounded-2xl border border-neutral-200/80 bg-white/70 px-5 py-4 text-left transition hover:border-neutral-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
            <Mail className="h-4 w-4" />
          </span>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-400">
              Email
            </p>
            <p className="mt-1 text-sm font-medium text-neutral-900 sm:text-[15px]">
              {email}
            </p>
          </div>
        </div>
        <span className="text-sm font-medium text-neutral-500 transition group-hover:text-neutral-950">
          {copied ? "Copied!" : "Copy"}
        </span>
      </button>

      <div className="mt-6 flex flex-wrap gap-3">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
          <Link
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-10 items-center gap-2 rounded-full border border-neutral-200/80 bg-white/60 px-4 text-[13px] font-medium text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
          >
            <Icon className="h-3.5 w-3.5" />
            {"display" in item ? item.display : item.label}
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
          </Link>
          );
        })}
      </div>

      <p className="mt-3 text-sm text-neutral-500">{location}</p>

      <p
        className="pointer-events-none mt-10 rotate-[-4deg] font-handwritten text-[26px] text-[#c17a12]"
        aria-hidden="true"
      >
        {contactContent.handwritten}
      </p>
    </motion.div>
  );
}
