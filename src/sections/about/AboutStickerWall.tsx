"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  StickyNote,
  Send,
  RotateCcw,
  Volume2,
  VolumeX,
  Palette,
  X,
} from "lucide-react";
import Container from "@/components/ui/Container";


// ── Web Audio Synthesizer (Realistic Thumbtack Pin & Sticker Slap) ──
class CanvasAudio {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  public playPin() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(420, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.06);
    } catch {}
  }

  public playPeel() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(950, this.ctx.currentTime + 0.07);

      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch {}
  }
}

const canvasAudio = new CanvasAudio();

// ── 3D Realistic Push Pins (Matching AboutCollage) ───────────────────
function PushPin({ color = "red" }: { color?: "red" | "purple" | "blue" | "gold" }) {
  const pinThemes = {
    red: {
      gradient: "radial-gradient(circle at 35% 30%, #ff8080 0%, #ef4444 45%, #b91c1c 85%, #7f1d1d 100%)",
      shadow: "rgba(239, 68, 68, 0.45)",
    },
    purple: {
      gradient: "radial-gradient(circle at 35% 30%, #d8b4fe 0%, #a855f7 45%, #7e22ce 85%, #581c87 100%)",
      shadow: "rgba(168, 85, 247, 0.45)",
    },
    blue: {
      gradient: "radial-gradient(circle at 35% 30%, #93c5fd 0%, #3b82f6 45%, #1d4ed8 85%, #1e3a8a 100%)",
      shadow: "rgba(59, 130, 246, 0.45)",
    },
    gold: {
      gradient: "radial-gradient(circle at 35% 30%, #fef08a 0%, #eab308 45%, #a16207 85%, #713f12 100%)",
      shadow: "rgba(234, 179, 8, 0.45)",
    },
  };

  const theme = pinThemes[color];

  return (
    <div className="pointer-events-none absolute -top-2.5 left-1/2 z-50 -translate-x-1/2">
      <div
        className="relative h-3.5 w-3.5 rounded-full shadow-md"
        style={{
          background: theme.gradient,
          boxShadow: `0 4px 8px ${theme.shadow}, 0 2px 4px rgba(0,0,0,0.6)`,
        }}
      >
        <div className="absolute left-0.5 top-0.5 h-1 w-1 rounded-full bg-white/80 blur-[0.2px]" />
      </div>
    </div>
  );
}

// ── Realistic Masking Tape Strip ────────────────────────────────────
function MaskingTape({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <div
      className={`pointer-events-none absolute z-50 h-5 bg-[#fde68a]/80 shadow-[0_2px_6px_rgba(0,0,0,0.25)] backdrop-blur-[1.5px] ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        clipPath: "polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)",
      }}
    >
      <div className="h-full w-full border-y border-amber-300/30 opacity-60" />
    </div>
  );
}

// ── Types ───────────────────────────────────────────────────────────
type CanvasBgOption = "grid" | "cork" | "noir" | "spidey";

interface PlacedItem {
  id: string;
  type: "sticker" | "note";
  content: string;
  emoji?: string;
  author?: string;
  pinColor?: "red" | "purple" | "blue" | "gold";
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  styleClass?: string;
}

// Curated Die-Cut Stickers
const stickerCatalog = [
  { id: "spidey-mask", label: "Miles Mask", emoji: "🕷️", style: "border-red-500 bg-red-600 text-white" },
  { id: "04ms", label: "0.4ms", emoji: "⚡", text: "0.4ms", style: "border-emerald-400 bg-emerald-500 text-white font-mono font-black" },
  { id: "spring", label: "Spring", emoji: "🍃", text: "SPRING", style: "border-green-400 bg-green-600 text-white font-mono font-bold" },
  { id: "cold-brew", label: "Cold Brew", emoji: "☕", text: "COLD BREW", style: "border-amber-400 bg-amber-600 text-white font-mono" },
  { id: "sunflower", label: "Sunflower", emoji: "🌻", style: "border-yellow-400 bg-yellow-400 text-neutral-950" },
  { id: "cracked", label: "Cracked", emoji: "🔥", text: "CRACKED", style: "border-rose-500 bg-rose-600 text-white font-mono font-black" },
  { id: "thwip", label: "Thwip", emoji: "🕸️", text: "THWIP!", style: "border-purple-400 bg-purple-600 text-white font-mono font-black" },
  { id: "jordan", label: "Sneaker", emoji: "👟", style: "border-white bg-neutral-900 text-white" },
  { id: "chrome-star", label: "Y2K Star", emoji: "✨", style: "border-cyan-400 bg-cyan-400 text-neutral-950" },
  { id: "mumbai", label: "Mumbai", emoji: "📍", text: "MUMBAI", style: "border-orange-400 bg-orange-600 text-white font-mono font-bold" },
];

const defaultItems: PlacedItem[] = [
  {
    id: "note-1",
    type: "note",
    content: "curiosity is the fuel. consistency is the engine.",
    author: "Jaydip",
    emoji: "⚡",
    pinColor: "red",
    x: 15,
    y: 18,
    rotate: -3,
    styleClass: "bg-[#fef08a] text-neutral-900",
  },
  {
    id: "sticker-1",
    type: "sticker",
    content: "🕷️",
    x: 72,
    y: 15,
    rotate: 8,
    scale: 1.1,
    styleClass: "bg-red-600 text-white",
  },
  {
    id: "note-2",
    type: "note",
    content: "I believe that great ideas come from continuous curiosity.",
    author: "Visitor in SF",
    emoji: "🌻",
    pinColor: "purple",
    x: 36,
    y: 45,
    rotate: 2,
    styleClass: "bg-[#dcd4ff] text-[#2e1065]",
  },
  {
    id: "sticker-2",
    type: "sticker",
    content: "0.4ms",
    emoji: "⚡",
    x: 78,
    y: 58,
    rotate: -6,
    scale: 1.0,
    styleClass: "bg-emerald-500 text-white font-mono font-black",
  },
  {
    id: "sticker-3",
    type: "sticker",
    content: "THWIP!",
    emoji: "🕸️",
    x: 18,
    y: 65,
    rotate: 5,
    scale: 0.95,
    styleClass: "bg-purple-600 text-white font-mono font-black",
  },
  {
    id: "note-3",
    type: "note",
    content: "make it. break it. understand it. build it better.",
    author: "friend",
    emoji: "🔥",
    pinColor: "blue",
    x: 55,
    y: 68,
    rotate: -2,
    styleClass: "bg-[#fbcfe8] text-[#831843]",
  },
];

export default function AboutStickerWall() {
  const [items, setItems] = useState<PlacedItem[]>([]);
  const [canvasBg, setCanvasBg] = useState<CanvasBgOption>("grid");
  const [selectedSticker, setSelectedSticker] = useState<typeof stickerCatalog[0] | null>(null);
  const [noteText, setNoteText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [noteEmoji, setNoteEmoji] = useState("🔥");
  const [notePinColor, setNotePinColor] = useState<"red" | "purple" | "blue" | "gold">("red");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isHoveringCanvas, setIsHoveringCanvas] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Load from LocalStorage or defaults
  useEffect(() => {
    try {
      const saved = localStorage.getItem("jaydip_guestbook_items_v2");
      if (saved) {
        setItems(JSON.parse(saved));
      } else {
        setItems(defaultItems);
      }
    } catch {
      setItems(defaultItems);
    }
  }, []);

  const saveItems = (updated: PlacedItem[]) => {
    setItems(updated);
    try {
      localStorage.setItem("jaydip_guestbook_items_v2", JSON.stringify(updated));
    } catch {}
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    canvasAudio.enabled = next;
    if (next) canvasAudio.playPin();
  };

  // Click on Canvas to slap down selected sticker
  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || !selectedSticker) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const xPct = Math.max(5, Math.min(88, ((e.clientX - rect.left) / rect.width) * 100));
    const yPct = Math.max(8, Math.min(85, ((e.clientY - rect.top) / rect.height) * 100));
    const randomRot = Math.floor(Math.random() * 20) - 10;

    canvasAudio.playPin();

    const newItem: PlacedItem = {
      id: `sticker-${Date.now()}`,
      type: "sticker",
      content: selectedSticker.text || selectedSticker.emoji,
      emoji: selectedSticker.text ? selectedSticker.emoji : undefined,
      x: xPct,
      y: yPct,
      rotate: randomRot,
      scale: 1.0,
      styleClass: selectedSticker.style,
    };

    saveItems([...items, newItem]);
    setSelectedSticker(null);
  };

  // Add new physical sticky note with pushpin
  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    canvasAudio.playPin();

    const randomRot = Math.floor(Math.random() * 12) - 6;
    const randomX = Math.floor(Math.random() * 55) + 15;
    const randomY = Math.floor(Math.random() * 45) + 18;

    const postItThemes = [
      { bg: "bg-[#fef08a] text-neutral-900", pin: "red" },
      { bg: "bg-[#dcd4ff] text-[#2e1065]", pin: "purple" },
      { bg: "bg-[#fbcfe8] text-[#831843]", pin: "blue" },
      { bg: "bg-[#bbf7d0] text-[#14532d]", pin: "gold" },
      { bg: "bg-[#bae6fd] text-[#0c4a6e]", pin: "blue" },
    ];
    const picked = postItThemes[Math.floor(Math.random() * postItThemes.length)];

    const newNote: PlacedItem = {
      id: `note-${Date.now()}`,
      type: "note",
      content: noteText.trim(),
      author: authorName.trim() || "friend",
      emoji: noteEmoji,
      pinColor: (picked.pin as "red" | "purple" | "blue" | "gold"),
      x: randomX,
      y: randomY,
      rotate: randomRot,
      styleClass: picked.bg,
    };

    saveItems([...items, newNote]);
    setNoteText("");
    setAuthorName("");
  };

  const removeItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    canvasAudio.playPeel();
    saveItems(items.filter((i) => i.id !== id));
  };

  const handleReset = () => {
    canvasAudio.playPeel();
    saveItems(defaultItems);
  };

  // Background Styles (The user asked for collage bg and options!)
  const bgStyles = {
    // Exact Scrapbook Graph Grid overlay matching AboutCollage
    grid: "bg-black",
    // Warm Studio Corkboard
    cork: "bg-[#1c1917]",
    // Pure Deep Noir
    noir: "bg-[#09090b]",
    // Spider-Verse Glitch Mesh
    spidey: "bg-[#140608]",
  }[canvasBg];

  return (
    <section className={`relative overflow-hidden py-10 md:py-12 text-white transition-colors duration-500 ${bgStyles}`}>
      {/* ── Background Overlays matching option selection ── */}
      {canvasBg === "grid" && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="sticker-scrapbook-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sticker-scrapbook-grid)" />
        </svg>
      )}

      {canvasBg === "cork" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#a87948 1px, transparent 1px), radial-gradient(#6b4928 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 10px 10px",
          }}
        />
      )}

      {canvasBg === "spidey" && (
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, #dc2626 0%, transparent 65%)",
          }}
        />
      )}

      {/* Subtle warm center radial spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-900/10 blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Community Scrapbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
              THE SCRAPBOOK WALL <span className="text-neutral-500 font-sans font-normal text-xl sm:text-2xl">// PIN YOUR MARK</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm mt-0.5 max-w-xl">
              An open, physical scrapbook canvas matching the collage vibe. Grab a die-cut vinyl sticker or pin a handwritten note!
            </p>
          </div>

          {/* Controls Bar: Background Options Switcher + Sound + Reset */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Background Texture Switcher Options */}
            <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-md">
              <Palette className="w-3.5 h-3.5 text-neutral-400 ml-1.5 mr-0.5" />
              {[
                { id: "grid", label: "Grid" },
                { id: "cork", label: "Cork" },
                { id: "noir", label: "Noir" },
                { id: "spidey", label: "Spidey" },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setCanvasBg(opt.id as CanvasBgOption)}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all ${
                    canvasBg === opt.id
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-all ${
                soundEnabled
                  ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                  : "bg-white/5 border-white/10 text-neutral-400 hover:text-white"
              }`}
              title="Toggle audio effects"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-purple-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>{soundEnabled ? "SOUND" : "MUTED"}</span>
            </button>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-mono text-neutral-400 hover:text-white bg-white/5 border border-white/10 transition-colors"
              title="Reset stickers to default"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* ── STICKER DOCK (Sleek Minimal Bar) ── */}
        <div className="mb-3 flex items-center justify-between gap-2.5 overflow-x-auto rounded-2xl bg-white/[0.04] border border-white/10 p-2 backdrop-blur-md no-scrollbar">
          <div className="flex items-center gap-2 flex-shrink-0 pl-1">
            <span className="text-[11px] font-mono text-neutral-400 font-bold uppercase tracking-wider">
              Pick Sticker:
            </span>
            {selectedSticker && (
              <span className="text-[10px] font-mono text-purple-400 animate-pulse">
                (Click anywhere on wall to place!)
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {stickerCatalog.map((stk) => {
              const isSelected = selectedSticker?.id === stk.id;
              return (
                <button
                  key={stk.id}
                  onClick={() => {
                    canvasAudio.playPeel();
                    setSelectedSticker(isSelected ? null : stk);
                  }}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-full border transition-all active:scale-95 ${
                    isSelected
                      ? "bg-white text-neutral-950 font-bold border-white scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                      : "bg-white/[0.06] border-white/10 text-white hover:bg-white/[0.12]"
                  }`}
                >
                  <span className="text-xs sm:text-sm">{stk.emoji}</span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold">
                    {stk.text || stk.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── THE OPEN SCRAPBOOK CANVAS (Matching Collage Vibe) ── */}
        <div
          ref={canvasRef}
          onClick={handleCanvasClick}
          onMouseEnter={() => setIsHoveringCanvas(true)}
          onMouseLeave={() => setIsHoveringCanvas(false)}
          onMouseMove={(e) => {
            if (!canvasRef.current) return;
            const rect = canvasRef.current.getBoundingClientRect();
            setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
          className={`relative w-full h-[400px] sm:h-[440px] rounded-3xl overflow-hidden border border-white/10 select-none transition-all duration-300 ${
            selectedSticker ? "cursor-crosshair ring-2 ring-purple-500/50" : "cursor-default"
          }`}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), inset 0 0 40px rgba(0, 0, 0, 0.6)",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {/* Subtle Ambient Center Branding Watermark */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.08]">
            <span className="text-6xl sm:text-9xl font-black font-mono tracking-tighter text-white uppercase select-none">
              JAYDIP
            </span>
            <span className="text-xs font-mono tracking-[0.4em] text-white uppercase mt-1">
              COMMUNITY WALL // DRAG & DROP
            </span>
          </div>

          {/* Ghost Follower for active sticker */}
          {selectedSticker && isHoveringCanvas && (
            <motion.div
              style={{ left: cursorPos.x, top: cursorPos.y }}
              className="pointer-events-none absolute z-50 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 rounded-full border-2 border-white bg-white/30 px-3 py-1 backdrop-blur-md shadow-2xl"
            >
              <span className="text-base">{selectedSticker.emoji}</span>
              {selectedSticker.text && (
                <span className="text-[10px] font-mono font-bold text-white">{selectedSticker.text}</span>
              )}
            </motion.div>
          )}

          {/* ALL PLACED STICKERS & POST-IT NOTES */}
          {items.map((item) => (
            <motion.div
              key={item.id}
              drag
              dragConstraints={canvasRef}
              dragElastic={0.1}
              onDragStart={() => canvasAudio.playPeel()}
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              whileHover={{ scale: 1.05, zIndex: 40 }}
              whileDrag={{ scale: 1.1, zIndex: 50 }}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                rotate: item.rotate,
                scale: item.scale || 1,
              }}
              className="absolute cursor-grab active:cursor-grabbing z-20 group"
            >
              {/* Subtle hover remove button */}
              {hoveredItemId === item.id && (
                <button
                  onClick={(e) => removeItem(item.id, e)}
                  className="absolute -top-3 -right-3 z-50 h-5 w-5 rounded-full bg-neutral-900 text-white border border-white/20 flex items-center justify-center text-[10px] hover:bg-red-600 transition-colors shadow-lg"
                  title="Remove"
                >
                  &times;
                </button>
              )}

              {item.type === "note" ? (
                /* PHYSICAL SCRAPBOOK STICKY NOTE (Matching AboutCollage) */
                <div
                  className={`relative w-[125px] sm:w-[140px] rounded-xl p-2.5 sm:p-3 shadow-[0_12px_28px_rgba(0,0,0,0.5)] ${item.styleClass}`}
                >
                  <PushPin color={item.pinColor || "red"} />
                  <p className="font-handwritten text-[11px] sm:text-[11.5px] font-bold tracking-wider text-neutral-900 uppercase">
                    @{item.author}
                  </p>
                  <p className="mt-1.5 font-handwritten text-[10.5px] sm:text-[11.5px] leading-snug text-neutral-800">
                    &ldquo;{item.content}&rdquo;
                  </p>
                  <div className="mt-1 flex justify-between items-center text-xs opacity-75">
                    <span>{item.emoji}</span>
                    <span className="font-handwritten text-sm">♡</span>
                  </div>
                </div>
              ) : (
                /* DIE-CUT GLOSSY VINYL STICKER WITH WHITE THICK BORDER */
                <div
                  className={`relative px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full flex items-center gap-1 shadow-[0_8px_20px_rgba(0,0,0,0.6)] drop-shadow-[0_3px_6px_rgba(0,0,0,0.5)] ${item.styleClass}`}
                  style={{
                    border: "2px solid #ffffff",
                  }}
                >
                  <span className="text-sm sm:text-base">{item.emoji || item.content}</span>
                  {item.emoji && item.content !== item.emoji && (
                    <span className="text-[9px] sm:text-[9.5px] font-mono font-black tracking-tight">
                      {item.content}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM FORM: POST A NOTE TO THE SCRAPBOOK ── */}
        <div className="mt-3 rounded-2xl bg-white/[0.04] border border-white/10 p-2.5 sm:p-3 backdrop-blur-md">
          <form onSubmit={handleAddNote} className="flex flex-col sm:flex-row items-center gap-2.5">
            <span className="text-xs font-mono text-neutral-400 font-bold uppercase tracking-wider flex-shrink-0 flex items-center gap-1.5">
              <StickyNote className="w-3.5 h-3.5 text-yellow-300" />
              <span>Pin Sticky Note:</span>
            </span>

            {/* Quick Emoji Reaction */}
            <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-xl px-2 py-1">
              {["🔥", "🕷️", "🌻", "⚡", "❤️"].map((em) => (
                <button
                  type="button"
                  key={em}
                  onClick={() => setNoteEmoji(em)}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs transition-transform ${
                    noteEmoji === em ? "bg-white/20 scale-110 ring-1 ring-white/40" : "hover:bg-white/10"
                  }`}
                >
                  {em}
                </button>
              ))}
            </div>

            {/* Name */}
            <input
              type="text"
              placeholder="Your name..."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full sm:w-36 px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
            />

            {/* Message */}
            <input
              type="text"
              placeholder="Drop a note, philosophy, or reaction..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="w-full flex-1 px-2.5 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/40"
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={!noteText.trim()}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                noteText.trim()
                  ? "bg-white text-neutral-950 hover:bg-neutral-200 active:scale-95 cursor-pointer shadow-md"
                  : "bg-white/10 text-neutral-500 cursor-not-allowed"
              }`}
            >
              <Send className="w-3 h-3" />
              <span>PIN TO WALL</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
