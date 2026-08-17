"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { contactContent } from "@/data/contact";

type Status = "idle" | "loading" | "success" | "error";

const fieldClassName =
  "w-full border-b border-neutral-300 bg-transparent pb-3 text-base outline-none transition-colors duration-300 placeholder:text-neutral-400 focus:border-neutral-950 sm:text-lg";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");

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
      className="rounded-[24px] border border-neutral-200/70 bg-white p-6 shadow-[0_16px_48px_rgba(0,0,0,0.04)] sm:p-8"
    >
      <p className="text-xs font-medium uppercase tracking-[0.28em] text-neutral-500">
        {contactContent.formLabel}
      </p>

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
            className="mb-3 block text-xs uppercase tracking-[0.22em] text-neutral-400"
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
            className="mb-3 block text-xs uppercase tracking-[0.22em] text-neutral-400"
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
            className="mb-3 block text-xs uppercase tracking-[0.22em] text-neutral-400"
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
            className="mb-3 block text-xs uppercase tracking-[0.22em] text-neutral-400"
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
          className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send message"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>

        {status === "success" ? (
          <p className="text-sm text-emerald-700">
            Message sent — I&apos;ll get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-600">
            Something went wrong — copy my email and reach out directly.
          </p>
        ) : null}
      </form>
    </motion.div>
  );
}
