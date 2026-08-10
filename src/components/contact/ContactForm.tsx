"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

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
    <div>
      <p className="mb-8 text-xs uppercase tracking-[0.35em] text-neutral-500">
        Send a Message
      </p>

      <form onSubmit={handleSubmit} className="space-y-10">
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-400">Name</label>
          <input
            type="text" name="name" required placeholder="Your name"
            className="w-full border-b border-neutral-300 bg-transparent pb-3 text-lg outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-black"
          />
        </div>

        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-400">Email</label>
          <input
            type="email" name="email" required placeholder="you@example.com"
            className="w-full border-b border-neutral-300 bg-transparent pb-3 text-lg outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-black"
          />
        </div>

        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-400">Subject</label>
          <input
            type="text" name="subject" placeholder="Project / Opportunity"
            className="w-full border-b border-neutral-300 bg-transparent pb-3 text-lg outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-black"
          />
        </div>

        <div>
          <label className="mb-3 block text-xs uppercase tracking-[0.3em] text-neutral-400">Message</label>
          <textarea
            rows={6} name="message" required placeholder="Tell me about your project..."
            className="w-full resize-none border-b border-neutral-300 bg-transparent pb-3 text-lg outline-none transition-all duration-300 placeholder:text-neutral-400 focus:border-black"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center gap-3 border border-black px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-600">Message sent — I&apos;ll get back to you soon.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-600">Something went wrong — email me directly instead.</p>
        )}
      </form>
    </div>
  );
}