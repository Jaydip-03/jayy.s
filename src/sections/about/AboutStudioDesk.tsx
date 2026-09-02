"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Disc3, Headphones, Volume2, VolumeX, Crosshair, RefreshCw } from "lucide-react";

import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";

const SPIDEY_RED = "#e23636";

// ── Normal Mode Playlist ─────────────────────────────────────────────

type Track = {
  id: string;
  trackNum: string;
  title: string;
  artist: string;
  vibe: string;
  audioSrc: string;
  glowColor: string;
  textColor: string;
  frequency: string;
};

const normalPlaylist: Track[] = [
  {
    id: "sunflower",
    trackNum: "01",
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    vibe: "Spider-Man: Into the Spider-Verse · Late-night flow",
    audioSrc: "/audio/sunflower-preview.mp3",
    glowColor: "#f59e0b",
    textColor: "#fbbf24",
    frequency: "104.2 MHZ",
  },
  {
    id: "all-the-stars",
    trackNum: "02",
    title: "All The Stars",
    artist: "Kendrick Lamar, SZA",
    vibe: "Black Panther OST · Cosmic focus & deep bass",
    audioSrc: "/audio/all-the-stars.mp3",
    glowColor: "#a855f7",
    textColor: "#c084fc",
    frequency: "98.5 MHZ",
  },
  {
    id: "gone-gone-gone",
    trackNum: "03",
    title: "Gone, Gone, Gone",
    artist: "Phillip Phillips",
    vibe: "The Amazing Spider-Man 2 · Acoustic drive & relentless passion",
    audioSrc: "/audio/gone-gone-gone.mp3",
    glowColor: "#38bdf8",
    textColor: "#7dd3fc",
    frequency: "101.9 MHZ",
  },
  {
    id: "stereo-love",
    trackNum: "04",
    title: "Stereo Love",
    artist: "Edward Maya, Vika Jigulina",
    vibe: "Nostalgic Eurodance · Accordion synth high energy",
    audioSrc: "/audio/stereo-love.mp3",
    glowColor: "#f43f5e",
    textColor: "#fb7185",
    frequency: "106.8 MHZ",
  },
];

// ── Bug Targets for Playable Web-Slinger Arcade ─────────────────────

type BugTarget = {
  id: number;
  label: string;
  icon: string;
  trapped: boolean;
};

const initialBugs: BugTarget[] = [
  { id: 1, label: "NullPointer", icon: "🐛", trapped: false },
  { id: 2, label: "SQL Injection", icon: "👾", trapped: false },
  { id: 3, label: "Memory Leak", icon: "🐞", trapped: false },
  { id: 4, label: "Deadlock", icon: "⚡", trapped: false },
];

type WebShot = {
  id: number;
  targetX: number;
  targetY: number;
  text: string;
};

export default function AboutStudioDesk() {
  const { isSpideyMode } = useTheme();

  // ── Normal Mode Radio State ──
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [rotaryAngle, setRotaryAngle] = useState(45);
  const [timeString, setTimeString] = useState("02:14:00 AM");

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = normalPlaylist[currentTrackIdx];

  // ── Spidey Mode Arcade State ──
  const [bugs, setBugs] = useState<BugTarget[]>(initialBugs);
  const [webShots, setWebShots] = useState<WebShot[]>([]);
  const [bugsTrappedCount, setBugsTrappedCount] = useState(0);
  const [stampText, setStampText] = useState<string | null>("HERO");

  // Initialize Normal Mode Audio instance once on mount
  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Sync Normal Mode Audio when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isSpideyMode) {
      audio.pause();
      return;
    }

    const targetSrc = currentTrack.audioSrc;
    if (!audio.src.endsWith(targetSrc)) {
      audio.pause();
      audio.src = targetSrc;
      audio.load();
    }

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [currentTrackIdx, isPlaying, isSpideyMode, currentTrack.audioSrc]);

  // Sync mute state
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Normal Mode Controls
  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleNext = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % normalPlaylist.length);
    setRotaryAngle((prev) => prev + 45);
  };

  const handlePrev = () => {
    setCurrentTrackIdx((prev) => (prev - 1 + normalPlaylist.length) % normalPlaylist.length);
    setRotaryAngle((prev) => prev - 45);
  };

  const handleRotaryClick = () => {
    handleNext();
  };

  // ── Spidey Mode Web-Slinging Mechanics ──
  const handleNewspaperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    const shotId = Date.now();
    const texts = ["*THWIP!*", "*ZAP!*", "*SPLAT!*"];
    const randomText = texts[Math.floor(Math.random() * texts.length)];

    setWebShots((prev) => [...prev, { id: shotId, targetX: clickX, targetY: clickY, text: randomText }]);

    setTimeout(() => {
      setWebShots((prev) => prev.filter((s) => s.id !== shotId));
    }, 900);
  };

  const handleTrapBug = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setBugs((prev) =>
      prev.map((b) => {
        if (b.id === id && !b.trapped) {
          setBugsTrappedCount((c) => c + 1);
          return { ...b, trapped: true };
        }
        return b;
      })
    );
  };

  const resetBugs = () => {
    setBugs(initialBugs);
    setWebShots([]);
    setBugsTrappedCount(0);
  };

  const slamStamp = (type: "HERO" | "MENACE") => {
    setStampText(type);
  };

  return (
    <section className="relative overflow-hidden bg-black pb-28 pt-36 text-white md:pb-36 md:pt-48 border-t border-white/[0.08]">
      {/* Subtle Studio Desk Grid Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: isSpideyMode
            ? `radial-gradient(${SPIDEY_RED} 1px, transparent 1px)`
            : "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient Desk Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-15 transition-all duration-700"
        style={{ backgroundColor: isSpideyMode ? SPIDEY_RED : currentTrack.glowColor }}
      />

      <Container className="relative z-10 max-w-4xl">
        {/* =============================================================
            1. SPIDEY MODE: AUTHENTIC PHYSICAL DAILY BUGLE BROADSHEET
            ============================================================= */}
        {isSpideyMode ? (
          <div>
            {/* Top Telemetry Header Bar */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#e23636]/30 pb-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#e23636] animate-pulse shadow-[0_0_10px_#e23636]" />
                <span className="font-semibold text-rose-300 tracking-wider">
                  THE DAILY BUGLE // PUNE MORNING EDITION
                </span>
              </div>

              <div className="flex items-center gap-4 text-[11px] text-zinc-400">
                <span className="text-rose-400 font-semibold flex items-center gap-1">
                  <Crosshair className="h-3.5 w-3.5" /> BUGS TRAPPED: {bugsTrappedCount}/{bugs.length}
                </span>
                <span className="text-zinc-600">·</span>
                <button
                  type="button"
                  onClick={resetBugs}
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>RESET BUGS</span>
                </button>
              </div>
            </div>

            {/* Section Heading */}
            <div className="mx-auto mb-7 max-w-lg text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-rose-400">
                [ AUTHENTIC NEWSPRINT ARTIFACT // CLICK TO SHOOT WEBS ]
              </p>
              <h3 className="mt-1 font-display text-2xl sm:text-3xl font-normal text-white">
                The Daily Bugle Front Page.
              </h3>
              <p className="mt-1 text-xs text-zinc-400">
                Lying on Peter&apos;s desk in Pune. Tap anywhere to fire webs or squash bugs!
              </p>
            </div>

            {/* Stamp Trigger Controls */}
            <div className="mb-5 flex items-center justify-center gap-2.5 font-mono text-xs">
              <span className="text-zinc-500 text-[10px] uppercase tracking-wider">JAMESON&apos;S STAMP:</span>
              <button
                type="button"
                onClick={() => slamStamp("HERO")}
                className={`rounded border px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer active:scale-95 ${
                  stampText === "HERO"
                    ? "border-emerald-500 bg-emerald-500 text-black shadow-md"
                    : "border-emerald-500/40 bg-emerald-950/30 text-emerald-400 hover:bg-emerald-900/50"
                }`}
              >
                STAMP &apos;HERO&apos; ✦
              </button>
              <button
                type="button"
                onClick={() => slamStamp("MENACE")}
                className={`rounded border px-2.5 py-1 text-[11px] font-bold transition-all cursor-pointer active:scale-95 ${
                  stampText === "MENACE"
                    ? "border-rose-500 bg-rose-500 text-white shadow-md"
                    : "border-rose-500/40 bg-rose-950/30 text-rose-400 hover:bg-rose-900/50"
                }`}
              >
                STAMP &apos;MENACE&apos; ⚠️
              </button>
            </div>

            {/* ── THE PHYSICAL VINTAGE NEWSPAPER SHEET ── */}
            <div className="relative mx-auto max-w-lg">
              {/* Yellow Post-It Note from J.J. Jameson Pinned to Corner */}
              <div className="absolute -top-4 -right-2 z-30 w-40 rotate-[5deg] rounded-xs bg-[#fef08a] p-2.5 text-zinc-950 shadow-[0_8px_20px_rgba(0,0,0,0.4)] ring-1 ring-yellow-400/50 pointer-events-none">
                {/* Red Push Pin */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-rose-600 shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-rose-300" />
                <p className="font-handwriting font-mono text-[9px] leading-tight font-bold text-zinc-900 mt-0.5">
                  &ldquo;PARKER! Who is this kid in Pune shipping Spring Boot code?! Get me an interview! — J.J.J.&rdquo;
                </p>
              </div>

              {/* Physical Newspaper Sheet with Sharp Paper Edges and Compact Height */}
              <div
                onClick={handleNewspaperClick}
                className="relative overflow-hidden bg-[#eee7d7] p-4 sm:p-6 pb-3.5 sm:pb-4 text-zinc-950 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_1px_3px_rgba(0,0,0,0.6)] cursor-crosshair select-none rotate-[-0.6deg] border border-[#d6cbba]"
                style={{
                  boxShadow: "0 25px 70px -10px rgba(0,0,0,0.9), 0 0 0 1px #d6cbba",
                }}
              >
                {/* Vintage Newsprint Paper Grain & Fiber Noise Overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: "radial-gradient(#1c1917 0.5px, transparent 0.5px)",
                    backgroundSize: "4px 4px",
                  }}
                />

                {/* Horizontal Center Newspaper Fold / Crease */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 bg-gradient-to-b from-black/10 via-black/5 to-transparent border-t border-black/15 shadow-[0_1px_2px_rgba(255,255,255,0.6)]"
                />

                {/* Top Iconic Red Banner Bar */}
                <div className="bg-[#b91c1c] text-white py-0.5 px-2 text-center font-mono text-[8.5px] font-black uppercase tracking-[0.22em] mb-1.5 shadow-xs">
                  THE DAILY BUGLE ★ SPECIAL LATE CITY EDITION ★ 50¢
                </div>

                {/* Masthead Subline */}
                <div className="flex items-center justify-between border-b border-zinc-950 pb-0.5 text-[8px] font-serif uppercase tracking-widest text-zinc-800">
                  <span>PUNE, MAHARASHTRA</span>
                  <span>VOL. LXII NO. 104</span>
                  <span>{timeString} IST</span>
                </div>

                {/* Bold Authentic Gothic Masthead */}
                <div className="my-1.5 text-center border-b-2 border-double border-zinc-950 pb-1.5">
                  <h2 className="font-serif text-3xl sm:text-4xl font-black uppercase tracking-[-0.04em] text-zinc-950 leading-none">
                    THE DAILY BUGLE
                  </h2>
                  <p className="mt-0.5 font-mono text-[7.5px] uppercase tracking-widest text-zinc-700">
                    &ldquo;THE VOICE OF THE CITY&rdquo; · FIRST WITH THE NEWS THAT MATTERS
                  </p>
                </div>

                {/* Main Headline */}
                <div className="mt-1.5 border-b-2 border-zinc-950 pb-1.5">
                  <span className="font-mono text-[7.5px] font-black uppercase tracking-widest text-[#b91c1c] block">
                    EXCLUSIVE FRONT PAGE SCOOP
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-black uppercase leading-tight tracking-tight text-zinc-950 mt-0.5">
                    SPIDER-MAN CAUGHT SHIPPING JAVA 21 CODE IN PUNE!
                  </h3>
                  <p className="mt-0.5 font-serif text-[10.5px] italic text-zinc-800 leading-tight">
                    Is he a neighborhood hero or a menace to monolithic architectures? Jameson demands an emergency audit!
                  </p>
                </div>

                {/* 2-Column Journalistic Layout with Real Photo */}
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-[1.1fr_1fr] gap-3.5 items-start">
                  {/* Left Column: Authentic Halftone Newsprint Photo of Jaydip in Suit */}
                  <div>
                    <div className="relative aspect-[3/3.7] w-full overflow-hidden border-2 border-zinc-950 bg-zinc-900 shadow-sm">
                      <Image
                        src="/about/jayySpidey.jpg"
                        alt="Jaydip Desale in Pune"
                        fill
                        className="object-cover object-center grayscale contrast-125 brightness-95"
                      />
                      {/* Halftone Dot Overlay on photo */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-15"
                        style={{
                          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                          backgroundSize: "3px 3px",
                        }}
                      />
                      {/* Photo Badge */}
                      <div className="absolute top-1 left-1 bg-[#b91c1c] px-1.5 py-0.5 text-[7px] font-mono font-bold uppercase tracking-wider text-white">
                        EXCLUSIVE // P. PARKER
                      </div>
                    </div>
                    <p className="mt-1 font-serif text-[8px] text-zinc-800 leading-tight italic">
                      FIG 1: Masked developer spotted in Hinjewadi Phase 1 carrying backpack full of compiled bytecodes.
                    </p>
                  </div>

                  {/* Right Column: News Columns */}
                  <div className="space-y-2 font-serif text-xs text-zinc-900 divide-y divide-zinc-400">
                    <div className="pb-1.5">
                      <h4 className="font-sans text-[9.5px] font-black uppercase tracking-wider text-zinc-950 mb-0.5">
                        OSCORP SERVERS STABILIZED
                      </h4>
                      <p className="text-[9.5px] leading-relaxed text-zinc-800">
                        Witnesses report all IDOR exploits were sealed across candidate sessions. Connection pools operate at 100% efficiency.
                      </p>
                    </div>

                    <div className="pt-1.5 pb-1.5">
                      <h4 className="font-sans text-[9.5px] font-black uppercase tracking-wider text-zinc-950 mb-0.5">
                        AUNT MAY SPEAKS OUT
                      </h4>
                      <p className="text-[9.5px] leading-relaxed text-zinc-800">
                        &ldquo;He says he is working on CareerSync, but he always comes home smelling of cutting chai with web fluid stains.&rdquo;
                      </p>
                    </div>

                    <div className="pt-1.5">
                      <span className="font-mono text-[7.5px] uppercase tracking-wider text-zinc-600 block">
                        TELEMETRY METRICS
                      </span>
                      <p className="font-mono text-[8.5px] text-emerald-800 font-bold mt-0.5">
                        ZERO NULL POINTERS · 100% UPTIME
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── INTERACTIVE BUG HUNTING DOCK ── */}
                <div className="mt-3 pt-2 border-t-2 border-zinc-950">
                  <div className="flex items-center justify-between text-[8px] font-mono uppercase text-zinc-800 mb-1">
                    <span className="font-black flex items-center gap-1 text-[#b91c1c]">
                      <Crosshair className="h-2.5 w-2.5" />
                      CLICK BUGS BELOW TO TRAP WITH WEBS:
                    </span>
                    <span>{bugsTrappedCount}/{bugs.length} NEUTRALIZED</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {bugs.map((bug) => (
                      <button
                        key={bug.id}
                        type="button"
                        onClick={(e) => handleTrapBug(e, bug.id)}
                        className={`flex items-center gap-1 px-2 py-0.5 font-mono text-[8.5px] font-bold transition-all cursor-pointer border ${
                          bug.trapped
                            ? "bg-zinc-800 text-zinc-400 line-through border-zinc-900"
                            : "bg-zinc-950 text-white hover:bg-[#b91c1c] hover:scale-105 active:scale-95 shadow-xs border-black"
                        }`}
                      >
                        <span>{bug.icon}</span>
                        <span>{bug.label}</span>
                        {bug.trapped && <span className="text-emerald-400 ml-0.5">✓</span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ── DYNAMIC WEB SHOT THREADS ON CLICK ── */}
                {webShots.map((shot) => (
                  <div key={shot.id} className="pointer-events-none absolute inset-0 z-40">
                    <svg className="absolute inset-0 h-full w-full">
                      <line
                        x1="0"
                        y1="100%"
                        x2={`${shot.targetX}%`}
                        y2={`${shot.targetY}%`}
                        stroke={SPIDEY_RED}
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        opacity="0.85"
                      />
                      <circle
                        cx={`${shot.targetX}%`}
                        cy={`${shot.targetY}%`}
                        r="14"
                        fill="none"
                        stroke={SPIDEY_RED}
                        strokeWidth="2"
                      />
                    </svg>

                    <motion.div
                      initial={{ scale: 0.2, opacity: 0, rotate: -15 }}
                      animate={{ scale: 1.15, opacity: 1, rotate: 6 }}
                      exit={{ scale: 1.3, opacity: 0 }}
                      className="absolute"
                      style={{ left: `${shot.targetX}%`, top: `${shot.targetY}%` }}
                    >
                      <div className="border border-black bg-yellow-300 px-1.5 py-0.5 font-mono text-[9px] font-black text-black shadow-md">
                        {shot.text} 🕸️
                      </div>
                    </motion.div>
                  </div>
                ))}

                {/* ── RUBBER STAMP OVERLAY ── */}
                {stampText && (
                  <motion.div
                    key={stampText}
                    initial={{ scale: 2.2, opacity: 0, rotate: -25 }}
                    animate={{ scale: 1, opacity: 0.9, rotate: -12 }}
                    className="pointer-events-none absolute right-4 bottom-14 z-40"
                  >
                    <div
                      className={`border-4 px-3 py-1 font-display text-3xl sm:text-4xl font-black uppercase tracking-widest ${
                        stampText === "HERO"
                          ? "border-emerald-700 text-emerald-800 shadow-sm"
                          : "border-[#b91c1c] text-[#b91c1c] shadow-sm"
                      }`}
                    >
                      {stampText} !
                    </div>
                  </motion.div>
                )}

                {/* Compact Newsprint Footer */}
                <div className="mt-3 pt-1.5 border-t border-zinc-950/60 flex items-center justify-between font-mono text-[7.5px] text-zinc-600">
                  <span>PRINTED ON ROTARY NEWSPRINT PRESS // PUNE, INDIA</span>
                  <span className="font-bold text-zinc-900">TAP TO SHOOT WEBS 🕸️</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =============================================================
             2. NORMAL MODE: THE JD-01 VINTAGE HI-FI RADIO DECK
             ============================================================= */
          <div>
            {/* Desk Telemetry Header Bar */}
            <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full transition-all ${
                    isPlaying ? "animate-pulse shadow-[0_0_8px_currentColor]" : "bg-zinc-600"
                  }`}
                  style={{
                    color: currentTrack.textColor,
                    backgroundColor: isPlaying ? currentTrack.glowColor : undefined,
                  }}
                />
                <span className="font-semibold text-zinc-200 tracking-wider">
                  PUNE STUDIO // NIGHT SHIFT
                </span>
              </div>

              <div className="flex items-center gap-5 text-[11px] text-zinc-400">
                <span className="hidden sm:inline">
                  LOCAL TIME: <span className="text-white font-semibold">{timeString} IST</span>
                </span>
                <span className="hidden sm:inline text-zinc-600">·</span>
                <span className="hidden sm:inline">
                  WEATHER: <span className="text-zinc-300">27°C CLEAR</span>
                </span>
                <span className="text-zinc-600">·</span>
                <span className={isPlaying ? "text-emerald-400 font-semibold" : "text-zinc-400"}>
                  {isPlaying ? `BROADCASTING: ${currentTrack.frequency}` : "JD-01 STANDBY"}
                </span>
              </div>
            </div>

            {/* Section Intro Note */}
            <div className="mx-auto mb-10 max-w-xl text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                [ PERSONAL PLAYLIST &amp; AUDIO DECK ]
              </p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl font-normal text-white">
                Jaydip&apos;s Night Shift Deck.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400">
                Late-night coding soundtrack in Pune. Press <span className="text-white font-semibold">▶ Play</span> and use <span className="text-white font-semibold">⏮ ⏭</span> to browse Jaydip&apos;s favorite anthems.
              </p>
            </div>

            {/* The Physical Vintage Cream Radio */}
            <div className="relative mx-auto max-w-xl">
              {/* Top Hardware Spec & Mute Trigger */}
              <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-500 px-1">
                <div className="flex items-center gap-2">
                  <Headphones className="h-3.5 w-3.5 text-zinc-400" />
                  <span>{isPlaying ? `NOW SPINNING [${currentTrack.trackNum}/04]` : "HEADPHONES CONNECTED"}</span>
                </div>

                <div className="flex items-center gap-3">
                  {isPlaying && (
                    <button
                      type="button"
                      onClick={() => setIsMuted(!isMuted)}
                      className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="h-3 w-3 text-rose-400" /> : <Volume2 className="h-3 w-3" />}
                      <span>{isMuted ? "MUTED" : "MUTE"}</span>
                    </button>
                  )}
                  <span>SERIES 01 // VINTAGE UNIT</span>
                </div>
              </div>

              {/* Vintage Cream Chassis Outer Body */}
              <div className="relative rounded-3xl bg-[#ece8df] p-5 sm:p-8 text-zinc-950 shadow-[0_30px_90px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-3px_6px_rgba(0,0,0,0.2)] ring-1 ring-white/10">
                {/* Device Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-mono text-base font-black tracking-tight text-zinc-900">
                      jayy.s
                    </h4>
                    <p className="font-mono text-xs tracking-wider text-zinc-600">
                      jd-01 // PUNE, IN
                    </p>
                  </div>

                  <div className="max-w-[240px] text-right font-mono text-[9.5px] leading-relaxed text-zinc-600">
                    java full stack developer. i write backends that don&apos;t crash, and interfaces that don&apos;t suck :p
                  </div>

                  <div className="hidden sm:grid grid-cols-5 gap-1.5 p-1">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-zinc-400/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]"
                      />
                    ))}
                  </div>
                </div>

                {/* Retro CRT Pixel Screen */}
                <div className="relative mt-6 overflow-hidden rounded-2xl border-2 border-[#1c1c1f] bg-[#0c0d10] p-4 sm:p-6 shadow-[inset_0_4px_16px_rgba(0,0,0,0.95),0_4px_10px_rgba(255,255,255,0.1)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 opacity-25"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -inset-10 blur-2xl transition-all duration-700 ${
                      isPlaying ? "opacity-35" : "opacity-10"
                    }`}
                    style={{ backgroundColor: currentTrack.glowColor }}
                  />

                  <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-2 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                    <span
                      className="flex items-center gap-1.5"
                      style={{ color: isPlaying ? currentTrack.textColor : "#a1a1aa" }}
                    >
                      <Disc3 className={`h-3 w-3 ${isPlaying ? "animate-spin" : ""}`} />
                      {isPlaying ? `CH ${currentTrack.trackNum} // HI-FI DECK` : "STANDBY // READY"}
                    </span>
                    <span>{isPlaying ? `VOL: 45% · ${currentTrack.frequency}` : "PAUSED · PRESS ▶"}</span>
                  </div>

                  <div className="relative z-20 mt-4 min-h-[90px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentTrack.id + (isPlaying ? "-playing" : "-paused")}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {isPlaying ? (
                          <>
                            <div className="flex items-center gap-2">
                              <h5
                                className="font-display text-xl sm:text-2xl font-normal tracking-wide"
                                style={{ color: currentTrack.textColor }}
                              >
                                {currentTrack.title}
                              </h5>
                              <span className="rounded-md bg-white/10 px-1.5 py-0.5 font-mono text-[9px] text-zinc-300">
                                {currentTrack.artist}
                              </span>
                            </div>

                            <p className="mt-1 font-mono text-xs text-white/90">
                              &ldquo;{currentTrack.vibe}&rdquo;
                            </p>

                            <p className="mt-2 font-mono text-[9px] text-zinc-400">
                              channel {currentTrack.trackNum} of 04 · streaming in stereo audio
                            </p>
                          </>
                        ) : (
                          <>
                            <h5 className="font-display text-lg sm:text-xl font-normal tracking-wide text-zinc-300">
                              {currentTrack.title} — {currentTrack.artist}
                            </h5>

                            <p className="mt-1 font-mono text-xs text-amber-400/90 animate-pulse">
                              ▶ Press Play to tune into {currentTrack.title}...
                            </p>

                            <p className="mt-2 font-mono text-[9px] text-zinc-500">
                              frequency: {currentTrack.frequency} · tap ⏭ to browse other tracks
                            </p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Equalizer Bars */}
                  <div className="relative z-20 mt-3 flex items-end gap-1 h-4">
                    {[14, 7, 16, 9, 15, 11, 16, 6, 12, 8, 14, 10, 15, 7, 13, 8].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={
                          isPlaying
                            ? {
                                height: [h, Math.max(3, (h * 1.3) % 16), Math.max(2, (h * 0.5) % 16), h],
                              }
                            : { height: 2 }
                        }
                        transition={{
                          duration: 0.7 + (i % 4) * 0.18,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-1 rounded-full transition-all duration-300"
                        style={{ backgroundColor: isPlaying ? currentTrack.textColor : "#3f3f46" }}
                      />
                    ))}
                  </div>
                </div>

                {/* LED Track Indicators */}
                <div className="mt-4 flex items-center gap-2 px-1">
                  {normalPlaylist.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCurrentTrackIdx(idx)}
                      className="flex items-center gap-1.5 focus:outline-none cursor-pointer"
                      aria-label={`Jump to track ${idx + 1}`}
                    >
                      <span
                        className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                          idx === currentTrackIdx
                            ? "shadow-[0_0_10px_currentColor] scale-125 ring-2 ring-white/40"
                            : "bg-zinc-400/50 hover:bg-zinc-400"
                        }`}
                        style={{
                          color: item.textColor,
                          backgroundColor: idx === currentTrackIdx ? item.glowColor : undefined,
                        }}
                      />
                    </button>
                  ))}

                  <span className="ml-auto font-mono text-[8.5px] uppercase tracking-wider text-zinc-600">
                    {isPlaying ? `TUNED: ${currentTrack.title.toUpperCase()}` : "DECK STANDBY · 4 TRACKS LOADED"}
                  </span>
                </div>

                {/* Playback Controls & Rotary Knob */}
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-zinc-300/80">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ded9ce] text-zinc-700 shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.7)] hover:text-zinc-950 active:scale-90 transition-all cursor-pointer"
                      aria-label="Previous Song"
                    >
                      <SkipBack className="h-4 w-4" />
                    </button>

                    <button
                      type="button"
                      onClick={togglePlay}
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full transition-all active:scale-90 cursor-pointer ${
                        !isPlaying
                          ? "bg-amber-600 text-white shadow-[0_6px_16px_rgba(217,119,6,0.4),inset_0_1px_2px_rgba(255,255,255,0.4)] hover:scale-105 animate-pulse"
                          : "bg-[#ded9ce] text-zinc-900 shadow-[0_6px_14px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.8)] hover:scale-105"
                      }`}
                      aria-label={isPlaying ? "Pause Track" : "Play Track"}
                    >
                      {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ded9ce] text-zinc-700 shadow-[0_4px_8px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(255,255,255,0.7)] hover:text-zinc-950 active:scale-90 transition-all cursor-pointer"
                      aria-label="Next Song"
                    >
                      <SkipForward className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Rotary Dial */}
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline font-mono text-[9px] uppercase tracking-wider text-zinc-600">
                      SKIP / TUNE
                    </span>

                    <button
                      type="button"
                      onClick={handleRotaryClick}
                      className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ded9ce] shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_2px_3px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.15)] ring-1 ring-black/5 active:scale-95 transition-transform cursor-pointer"
                      aria-label="Tune Rotary Knob to Next Song"
                    >
                      <motion.div
                        animate={{ rotate: rotaryAngle }}
                        transition={{ type: "spring", stiffness: 220, damping: 14 }}
                        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#ece8df] shadow-[0_4px_8px_rgba(0,0,0,0.12),inset_0_1px_2px_rgba(255,255,255,0.7)]"
                      >
                        <div
                          className="absolute top-1.5 h-3 w-1 rounded-full shadow-xs transition-colors"
                          style={{ backgroundColor: currentTrack.glowColor }}
                        />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
