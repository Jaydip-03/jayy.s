"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mail, FileText, MapPin } from "lucide-react";

const links = [
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/Jaydip-03",
    action: "Visit",
    href: "https://github.com/Jaydip-03",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/jaydip-desale",
    action: "Connect",
    href: "https://www.linkedin.com/in/jaydip-desale-760770234/",
  },
  {
    icon: FaXTwitter,
    title: "X (Twitter)",
    value: "@Desale_Jay27",
    action: "Follow",
    href: "https://x.com/Desale_Jay27",
  },
  {
    icon: FileText,
    title: "Resume",
    value: "Download Resume",
    action: "Download",
    href: "/resume.pdf",
  },
];

export default function ContactDetails() {
  const [copied, setCopied] = useState(false);
  const email = "jaydesale003@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <p className="mb-8 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Let&apos;s Connect
      </p>

      <div className="border-t border-neutral-200">
        {/* Email — actually copies now, not a mailto link */}
        <button
          onClick={handleCopy}
          className="group flex w-full items-center justify-between border-b border-neutral-200 py-6 text-left"
        >
          <div className="flex items-start gap-4">
            <Mail size={18} className="mt-1 text-neutral-500" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">Email</p>
              <p className="mt-2 text-lg font-medium text-neutral-900">{email}</p>
            </div>
          </div>
          <span className="text-sm font-medium text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black">
            {copied ? "Copied!" : "Copy →"}
          </span>
        </button>

        {links.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group flex items-center justify-between border-b border-neutral-200 py-6"
            >
              <div className="flex items-start gap-4">
                <Icon size={18} className="mt-1 text-neutral-500" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">{item.title}</p>
                  <p className="mt-2 text-lg font-medium text-neutral-900">{item.value}</p>
                </div>
              </div>
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-neutral-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-black"
              >
                {item.action} →
              </Link>
            </div>
          );
        })}
      </div>

      {/* Availability — matches Hero's badge exactly */}
      <div className="mt-12">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">Availability</p>
        <div className="flex items-center gap-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-lg font-medium">Open to Full-Time Opportunities</span>
        </div>
      </div>
    </div>
  );
}