"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Container from "@/components/ui/Container";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Jaydip-03",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaydip-desale-760770234/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:jaydesale003@gmail.com",
    icon: Mail,
  },
];

export default function AboutSignOff() {
  return (
    <section className="relative overflow-hidden bg-black pb-24 pt-16 text-white md:pb-32 md:pt-20">
      {/* Top separator */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
        aria-hidden="true"
      />

      {/* Subtle background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(226,54,54,0.6) 0%, rgba(0,111,185,0.4) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Photo + closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:gap-12 md:text-left"
          >
            {/* Photo */}
            <motion.div
              whileHover={{ scale: 1.04, rotate: -1 }}
              transition={{ duration: 0.35 }}
              className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] sm:h-32 sm:w-32"
            >
              <Image
                src="/about/jayyAbout.jpg"
                alt="Jaydip Desale"
                fill
                className="object-cover object-center"
                sizes="128px"
              />
            </motion.div>

            {/* Text */}
            <div>
              {/* Eyebrow */}
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                That&apos;s a wrap — for now
              </p>

              {/* Main closing quote */}
              <p className="font-display text-2xl italic leading-relaxed text-white/90 sm:text-3xl">
                &ldquo;Still learning. Still building.{" "}
                <span className="text-[#e23636]">Always becoming better.</span>&rdquo;
              </p>

              {/* Signature */}
              <p className="mt-5 font-handwritten text-[26px] leading-none text-zinc-400">
                — Jayy
              </p>

              {/* Sub-line */}
              <p className="mt-4 max-w-md text-[14px] leading-7 text-zinc-500">
                If something here resonated — my inbox and GitHub are always open.
                Let&apos;s build something worth talking about.
              </p>

              {/* CTA buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  See my work
                </Link>
              </div>

              {/* Social links */}
              <div className="mt-6 flex items-center gap-1">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-zinc-500 transition-all duration-300 hover:border-white/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
