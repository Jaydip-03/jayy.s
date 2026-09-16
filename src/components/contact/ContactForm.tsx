"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Send, RefreshCw } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

type Status = "idle" | "loading" | "success" | "error";

const SPIDEY_RED  = "#e23636";
const CHAR_LIMIT  = 600;

const fields = [
  { id: "contact-name",    name: "name",    type: "text",  label: "Your Name",    placeholder: "Jaydip Desale",              required: true  },
  { id: "contact-email",   name: "email",   type: "email", label: "Email Address", placeholder: "you@example.com",           required: true  },
  { id: "contact-subject", name: "subject", type: "text",  label: "Subject",       placeholder: "Role / Project / Just hi!", required: true  },
] as const;

function FloatInput({
  id, name, type, label, placeholder, required, isSpideyMode,
}: {
  id: string; name: string; type: string; label: string;
  placeholder: string; required?: boolean; isSpideyMode: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const [filled,  setFilled]  = useState(false);
  const accent = isSpideyMode ? SPIDEY_RED : "#0a0a0a";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="absolute left-0 top-0 origin-left font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-200"
        style={{ color: focused ? accent : "#6b7280" }}
      >
        {label}{required && <span className="ml-0.5 opacity-60">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setFilled(e.target.value.length > 0); }}
        onChange={(e) => setFilled(e.target.value.length > 0)}
        className="mt-5 w-full border-b bg-transparent pb-2.5 text-sm text-neutral-900 outline-none transition-colors duration-200 placeholder:text-neutral-300 sm:text-[15px]"
        style={{ borderColor: focused ? accent : "#d1d5db" }}
      />
      {/* Animated underline */}
      <span
        className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-300"
        style={{ width: focused ? "100%" : filled ? "30%" : "0%", backgroundColor: accent }}
      />
    </div>
  );
}

export default function ContactForm() {
  const { isSpideyMode } = useTheme();
  const [status,  setStatus]  = useState<Status>("idle");
  const [charCount, setCharCount] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const accent = isSpideyMode ? SPIDEY_RED : "#0a0a0a";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form    = e.currentTarget;
    const fd      = new FormData(form);
    const key     = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "1f77d07a-3c07-4dba-be54-887a159371d7";
    fd.append("access_key", key);
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setStatus("error");
    }
  };

  const accentShadow = isSpideyMode
    ? `0 0 35px ${SPIDEY_RED}30, 0 4px 24px rgba(0,0,0,0.06)`
    : "0 4px 24px rgba(0,0,0,0.06)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border bg-white p-6 sm:p-8"
      style={{ borderColor: isSpideyMode ? `${SPIDEY_RED}22` : "#e5e7eb", boxShadow: accentShadow }}
    >
      {/* Top gradient accent line */}
      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
        style={{ background: isSpideyMode
          ? `linear-gradient(90deg, ${SPIDEY_RED}, #006fb9)`
          : "linear-gradient(90deg, #18181b, #52525b, transparent)" }} />

      {/* Header */}
      <div className="mb-7 flex items-center justify-between">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.26em] text-neutral-400">
          {isSpideyMode ? "Transmission // Dispatch" : "Send a message"}
        </p>
        {isSpideyMode && (
          <span className="rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest"
            style={{ borderColor: `${SPIDEY_RED}40`, color: SPIDEY_RED, backgroundColor: `${SPIDEY_RED}0a` }}>
            Encrypted · Direct
          </span>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* ── SUCCESS STATE ── */}
        {status === "success" ? (
          <motion.div key="success"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center py-10 text-center"
          >
            <motion.div
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 280, damping: 18 }}
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: `${accent}12` }}
            >
              <CheckCircle2 className="h-7 w-7" style={{ color: accent }} />
            </motion.div>
            <h3 className="mt-5 text-lg font-semibold text-neutral-900">Message received!</h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-500">
              {isSpideyMode
                ? "Transmission locked in. Spider-Jaydip will web-swing back within 24 hours. 🕷️"
                : "Thanks for reaching out — I'll get back to you within 24 hours."}
            </p>
            <button onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-400 transition hover:text-neutral-700">
              <RefreshCw className="h-3 w-3" /> Send another
            </button>
          </motion.div>

        ) : (
          /* ── FORM STATE ── */
          <motion.form key="form" ref={formRef} onSubmit={handleSubmit} className="space-y-7"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            {fields.map((f) => (
              <FloatInput key={f.id} {...f} isSpideyMode={isSpideyMode} />
            ))}

            {/* Textarea with char counter */}
            <div className="relative">
              <label htmlFor="contact-message"
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-400">
                Message <span className="opacity-60">*</span>
              </label>
              <textarea
                id="contact-message" name="message" rows={4} required
                maxLength={CHAR_LIMIT}
                placeholder={isSpideyMode ? "What's the mission, chief?" : "Tell me what you're building…"}
                onChange={(e) => setCharCount(e.target.value.length)}
                className="mt-3 w-full resize-none border-b bg-transparent pb-2 text-sm text-neutral-900 outline-none transition-colors duration-200 placeholder:text-neutral-300 focus:border-neutral-950 sm:text-[15px]"
                style={{ borderColor: "#d1d5db" }}
              />
              {/* Counter */}
              <span className={`absolute bottom-3 right-0 font-mono text-[9px] transition-colors ${
                charCount > CHAR_LIMIT * 0.85
                  ? charCount >= CHAR_LIMIT ? "text-red-500" : "text-amber-500"
                  : "text-neutral-300"
              }`}>
                {charCount}/{CHAR_LIMIT}
              </span>
            </div>

            {/* Error banner */}
            {status === "error" && (
              <motion.div initial={{ opacity: 0, y:-6 }} animate={{ opacity:1, y:0 }}
                className="flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                <p className="text-xs text-red-600">
                  Something went wrong — try{" "}
                  <a href="mailto:jaydesale003@gmail.com" className="underline">emailing directly</a>.
                </p>
              </motion.div>
            )}

            {/* Submit */}
            <button type="submit" disabled={status === "loading"}
              className="group relative w-full overflow-hidden rounded-xl py-3.5 text-sm font-semibold text-white transition-all duration-300 disabled:opacity-60"
              style={{ backgroundColor: accent, boxShadow: isSpideyMode ? `0 0 28px ${SPIDEY_RED}35` : "none" }}>
              {/* Shimmer */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative inline-flex items-center justify-center gap-2">
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Transmitting…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {isSpideyMode ? "Send Transmission ⚡" : "Send Message"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </span>
            </button>

            <p className="text-center font-mono text-[10px] text-neutral-400">
              Usually replies within 24h · No spam, ever.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
