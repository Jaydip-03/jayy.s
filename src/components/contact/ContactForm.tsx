"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { contactContent } from "@/data/contact";
import { useTheme } from "@/context/ThemeContext";

type Status = "idle" | "loading" | "success" | "error";

const SPIDEY_RED = "#e23636";
const DEFAULT_KEY = "1f77d07a-3c07-4dba-be54-887a159371d7";

export default function ContactForm() {
  const { isSpideyMode } = useTheme();
  const [status, setStatus] = useState<Status>("idle");

  const fieldClassName =
    "w-full border-b border-neutral-300 bg-transparent pb-3 text-sm sm:text-base outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-neutral-950";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || DEFAULT_KEY;
    formData.append("access_key", accessKey);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-neutral-200/80 bg-white/80 p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.04)] backdrop-blur-md sm:p-8"
      style={{
        borderColor: isSpideyMode ? `${SPIDEY_RED}25` : undefined,
      }}
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-400">
          {isSpideyMode ? "TRANSMISSION // DISPATCH FORM" : contactContent.formLabel}
        </p>
        {isSpideyMode && (
          <span className="font-mono text-[9px] font-bold text-red-500">
            ENCRYPTED · DIRECT
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />

        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400"
          >
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400"
          >
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-subject"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400"
          >
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            placeholder="Project / opportunity"
            className={fieldClassName}
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            rows={4}
            name="message"
            required
            placeholder="Tell me what you're building..."
            className={`${fieldClassName} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50"
          style={{
            backgroundColor: isSpideyMode ? SPIDEY_RED : "#0a0a0a",
          }}
        >
          <span>
            {status === "loading"
              ? "Transmitting..."
              : isSpideyMode
                ? "Send Transmission ⚡"
                : "Send Message"}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {status === "success" ? (
          <p className="text-xs font-medium text-emerald-600">
            ✓ Message sent successfully! I&apos;ll get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-xs text-red-600">
            Something went wrong — copy my email and reach out directly.
          </p>
        ) : null}
      </form>
    </motion.div>
  );
}
