"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, X, ShieldAlert, Volume2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const KONAMI_CODE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export default function KonamiEasterEgg() {
  const { isSpideyMode, toggleMode } = useTheme();
  const [unlocked, setUnlocked] = useState(false);
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const [webBursts, setWebBursts] = useState<{ id: number; x: number; y: number; angle: number }[]>([]);

  const closeEasterEgg = useCallback(() => {
    setUnlocked(false);
  }, []);

  const triggerKonami = useCallback(() => {
    setUnlocked(true);

    // Generate web blast bursts
    const bursts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() * 40 - 20),
      y: 50 + (Math.random() * 40 - 20),
      angle: (i / 12) * 360,
    }));
    setWebBursts(bursts);

    // Switch to Spidey Mode if currently in Normal Mode
    if (!isSpideyMode) {
      toggleMode();
    }
  }, [isSpideyMode, toggleMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when user is typing inside an input, textarea, or contentEditable
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (unlocked && e.key === "Escape") {
        closeEasterEgg();
        return;
      }

      const key = e.key.toLowerCase();
      setInputSequence((prev) => {
        const next = [...prev, key];
        if (next.length > KONAMI_CODE.length) {
          next.shift();
        }

        // Check if sequence matches
        const matches = KONAMI_CODE.every((val, index) => val === next[index]);
        if (matches) {
          triggerKonami();
          return [];
        }

        return next;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeEasterEgg, triggerKonami, unlocked]);

  // Also allow triggering from Command Palette or dev console
  useEffect(() => {
    const handleCustomTrigger = () => triggerKonami();
    window.addEventListener("trigger-konami-easter-egg", handleCustomTrigger);
    return () => window.removeEventListener("trigger-konami-easter-egg", handleCustomTrigger);
  }, [triggerKonami]);

  return (
    <AnimatePresence>
      {unlocked && (
        <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4">
          {/* Dark Comic Backdrop with Radial Vignette */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEasterEgg}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          />

          {/* Web Blast Particles Bursting from Center */}
          <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
            {webBursts.map((burst) => (
              <motion.div
                key={burst.id}
                initial={{ opacity: 1, scale: 0.2, x: "50vw", y: "50vh" }}
                animate={{
                  opacity: [1, 0.8, 0],
                  scale: [0.2, 1.8, 2.4],
                  x: `calc(50vw + ${Math.cos((burst.angle * Math.PI) / 180) * 350}px)`,
                  y: `calc(50vh + ${Math.sin((burst.angle * Math.PI) / 180) * 350}px)`,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute h-px w-36 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${SPIDEY_RED}, ${SPIDEY_BLUE}, transparent)`,
                  transform: `rotate(${burst.angle}deg)`,
                }}
              />
            ))}
          </div>

          {/* Retro Comic Dialogue Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
            transition={{ type: "spring", stiffness: 350, damping: 24 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border-2 border-[#e23636] bg-[#0c0c10] p-6 sm:p-8 text-white shadow-[0_0_80px_rgba(226,54,54,0.35)]"
          >
            {/* Top Comic Halftone Banner */}
            <div className="flex items-center justify-between border-b border-[#e23636]/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e23636]/20 text-[#e23636] border border-[#e23636]/40">
                  <ShieldAlert className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.25em] text-[#e23636]">
                    SECRET LEVEL 5 OVERRIDE
                  </p>
                  <p className="font-mono text-[9px] text-zinc-400">
                    KONAMI CODE VERIFIED · PUNE MULTIVERSE
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeEasterEgg}
                className="rounded-full p-1.5 text-zinc-400 hover:bg-white/10 hover:text-white transition-colors"
                aria-label="Close easter egg"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Main Punchy Comic Content */}
            <div className="mt-6 text-center">
              <motion.div
                animate={{ rotate: [-2, 2, -2], scale: [1, 1.04, 1] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                className="inline-block rounded-xl border-2 border-[#e23636] bg-[#e23636] px-5 py-1 text-white font-black font-mono text-2xl uppercase tracking-widest shadow-[0_6px_20px_rgba(226,54,54,0.5)] -rotate-2"
              >
                THWIP! 🕸️
              </motion.div>

              <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                You Found The Secret Protocol!
              </h3>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-sans">
                &ldquo;With great engineering power comes great responsibility... and zero IDOR vulnerabilities.&rdquo;
              </p>

              <p className="mt-2 text-xs font-mono text-zinc-500">
                You entered <span className="text-[#e23636] font-bold">↑ ↑ ↓ ↓ ← → ← → B A</span>. Spider-Verse audio &amp; HUD are now active!
              </p>
            </div>

            {/* Achievement Footer Badges */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 pt-4 border-t border-white/10 text-left font-mono text-xs">
              <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-[10px] text-zinc-500 uppercase tracking-wider">Achievement</p>
                <p className="font-semibold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3" />
                  Code Explorer
                </p>
              </div>

              <div className="rounded-xl border border-[#e23636]/30 bg-[#e23636]/10 p-3">
                <p className="text-[10px] text-[#e23636] uppercase tracking-wider">Current State</p>
                <p className="font-semibold text-white mt-0.5 flex items-center gap-1.5">
                  <Volume2 className="h-3 w-3 text-[#e23636]" />
                  Sunflower OST
                </p>
              </div>
            </div>

            {/* Dismiss CTA */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={closeEasterEgg}
                className="inline-flex items-center gap-2 rounded-full bg-[#e23636] px-6 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-[0_4px_20px_rgba(226,54,54,0.4)] hover:bg-[#c92c2c] transition-colors"
              >
                <span>Resume Mission [ESC]</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
