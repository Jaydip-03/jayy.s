"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  FileText,
  Briefcase,
  Code2,
  User,
  Award,
  BookOpen,
  Mail,
  CornerDownLeft,
  Sparkles,
  Copy,
  Check,
  Download,
  ExternalLink,
  Layers,
  Cpu,
  Globe,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";
import { replayIntro } from "@/lib/intro";

const SPIDEY_RED = "#e23636";
const SPIDEY_BLUE = "#006fb9";

export const COMMAND_PALETTE_EVENT = "open-command-palette";

export function openCommandPalette() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(COMMAND_PALETTE_EVENT));
  }
}

type CommandCategory = "Navigation" | "Projects" | "Actions";

interface CommandItem {
  id: string;
  title: string;
  description: string;
  category: CommandCategory;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  action: () => void;
  keywords?: string[];
}

export default function CommandPalette() {
  const router = useRouter();
  const { isSpideyMode, toggleMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedToast, setCopiedToast] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("jaydesale003@gmail.com");
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2200);
      closePalette();
    } catch {
      window.location.href = "mailto:jaydesale003@gmail.com";
      closePalette();
    }
  }, [closePalette]);

  const downloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Jaydip_Desale_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    closePalette();
  }, [closePalette]);

  const items: CommandItem[] = useMemo(
    () => [
      // ── Navigation ──
      {
        id: "nav-home",
        title: "Home",
        description: "Back to hero overview & featured work",
        category: "Navigation",
        icon: Globe,
        action: () => {
          router.push("/");
          closePalette();
        },
        keywords: ["start", "landing", "root", "main"],
      },
      {
        id: "nav-work",
        title: "Projects Archive",
        description: "Explore all production systems and case studies",
        category: "Navigation",
        icon: Code2,
        badge: "4 Systems",
        action: () => {
          router.push("/work");
          closePalette();
        },
        keywords: ["portfolio", "works", "apps", "code", "showcase"],
      },
      {
        id: "nav-experience",
        title: "Experience",
        description: "Robowaves Technologies, JSpiders & university journey",
        category: "Navigation",
        icon: Briefcase,
        action: () => {
          router.push("/experience");
          closePalette();
        },
        keywords: ["career", "work", "history", "jobs", "internship"],
      },
      {
        id: "nav-about",
        title: "About Jaydip",
        description: "Philosophy, interactive studio desk & story",
        category: "Navigation",
        icon: User,
        action: () => {
          router.push("/about");
          closePalette();
        },
        keywords: ["bio", "story", "music", "radio", "desk", "who"],
      },
      {
        id: "nav-recognition",
        title: "Recognition & Certifications",
        description: "Springer research publication & accredited credentials",
        category: "Navigation",
        icon: Award,
        action: () => {
          router.push("/recognition");
          closePalette();
        },
        keywords: ["springer", "paper", "iit bombay", "awards", "certificates"],
      },
      {
        id: "nav-blog",
        title: "Engineering Blog",
        description: "Notes on Spring Boot architecture & full-stack systems",
        category: "Navigation",
        icon: BookOpen,
        badge: "Coming Soon",
        action: () => {
          router.push("/blog");
          closePalette();
        },
        keywords: ["writing", "articles", "posts", "thoughts"],
      },
      {
        id: "nav-contact",
        title: "Get in Touch",
        description: "Send direct encrypted message or email",
        category: "Navigation",
        icon: Mail,
        action: () => {
          router.push("/contact");
          closePalette();
        },
        keywords: ["message", "hire", "email", "reach", "talk"],
      },

      // ── Projects Direct Jump ──
      {
        id: "proj-careersync",
        title: "CareerSync",
        description: "Full-Stack Job Portal · Spring Boot 3 & PostgreSQL",
        category: "Projects",
        icon: Layers,
        badge: "Full Stack",
        action: () => {
          router.push("/work/careersync");
          closePalette();
        },
        keywords: ["spring boot", "java 21", "backend", "postgresql", "idor"],
      },
      {
        id: "proj-wandersphere",
        title: "WanderSphere",
        description: "Travel Exploration Platform · Vanilla JS & 60 FPS Swiper",
        category: "Projects",
        icon: Globe,
        badge: "Frontend",
        action: () => {
          router.push("/work/travel-website");
          closePalette();
        },
        keywords: ["travel", "frontend", "javascript", "css", "responsive"],
      },
      {
        id: "proj-dev-mgmt",
        title: "Developer Management System",
        description: "Direct JDBC & Jakarta Servlets · ~6ms Query Latency",
        category: "Projects",
        icon: Code2,
        badge: "Backend",
        action: () => {
          router.push("/work/developer-management-system");
          closePalette();
        },
        keywords: ["servlet", "jsp", "jdbc", "tomcat", "sql"],
      },
      {
        id: "proj-fertilizer",
        title: "Fertilizer Recommendation System",
        description: "IoT Soil Telemetry · RS485 Modbus & Research Paper",
        category: "Projects",
        icon: Cpu,
        badge: "IoT & Paper",
        action: () => {
          router.push("/work/fertilizer-recommendation-system");
          closePalette();
        },
        keywords: ["iot", "arduino", "npk", "sensors", "springer", "hardware"],
      },

      // ── Actions ──
      {
        id: "act-spidey",
        title: isSpideyMode ? "Switch to Normal Mode" : "Activate Spidey Mode",
        description: isSpideyMode
          ? "Return to clean architectural obsidian layout"
          : "Unleash Miles Morales Spider-Verse theme & Sunflower soundtrack",
        category: "Actions",
        icon: Sparkles,
        badge: isSpideyMode ? "Normal" : "Spidey",
        action: () => {
          toggleMode();
          closePalette();
        },
        keywords: ["spidey", "spider-man", "theme", "music", "audio", "mode", "toggle", "dark"],
      },
      {
        id: "act-copy-email",
        title: "Copy Email Address",
        description: "jaydesale003@gmail.com",
        category: "Actions",
        icon: Copy,
        action: copyEmail,
        keywords: ["email", "copy", "contact", "gmail", "address"],
      },
      {
        id: "act-resume",
        title: "Download Resume",
        description: "Jaydip_Desale_Resume.pdf (Direct download)",
        category: "Actions",
        icon: Download,
        badge: "PDF",
        action: downloadResume,
        keywords: ["cv", "resume", "pdf", "hire", "bio", "experience"],
      },
      {
        id: "act-replay-intro",
        title: "Replay Welcome Intro",
        description: "Re-run the cinematic intro sequence & greeting experience",
        category: "Actions",
        icon: RotateCcw,
        action: () => {
          closePalette();
          replayIntro();
        },
        keywords: ["intro", "welcome", "greeting", "replay", "animation", "start"],
      },
      {
        id: "act-github",
        title: "Visit GitHub Profile",
        description: "github.com/Jaydip-03 (Repositories & open-source code)",
        category: "Actions",
        icon: FaGithub,
        action: () => {
          window.open("https://github.com/Jaydip-03", "_blank", "noopener,noreferrer");
          closePalette();
        },
        keywords: ["git", "github", "source", "code", "repos"],
      },
      {
        id: "act-linkedin",
        title: "Visit LinkedIn Profile",
        description: "linkedin.com/in/jaydip-desale-760770234",
        category: "Actions",
        icon: FaLinkedin,
        action: () => {
          window.open("https://www.linkedin.com/in/jaydip-desale-760770234/", "_blank", "noopener,noreferrer");
          closePalette();
        },
        keywords: ["linkedin", "social", "network", "connect"],
      },
      {
        id: "act-konami",
        title: "Spider Secret (Konami Code)",
        description: "Type ↑ ↑ ↓ ↓ ← → ← → B A anywhere on your keyboard",
        category: "Actions",
        icon: Sparkles,
        badge: "Easter Egg",
        action: () => {
          closePalette();
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("trigger-konami-easter-egg"));
          }
        },
        keywords: ["konami", "cheat", "secret", "easter egg", "spider", "game", "code"],
      },
    ],
    [closePalette, copyEmail, downloadResume, isSpideyMode, router, toggleMode]
  );

  // Filter items according to search query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;

    return items.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(q);
      const inDesc = item.description.toLowerCase().includes(q);
      const inCategory = item.category.toLowerCase().includes(q);
      const inKeywords = item.keywords?.some((k) => k.toLowerCase().includes(q));
      return inTitle || inDesc || inCategory || inKeywords;
    });
  }, [items, query]);

  // Keep selected index in valid range
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K, Esc, Arrows, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle Command Palette with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closePalette();
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length === 0 ? 0 : (prev + 1) % filteredItems.length));
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length === 0 ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
        );
        return;
      }

      if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closePalette, filteredItems, isOpen, selectedIndex]);

  // Listen for custom trigger event
  useEffect(() => {
    const handleCustomOpen = () => {
      setIsOpen(true);
    };

    window.addEventListener(COMMAND_PALETTE_EVENT, handleCustomOpen);
    return () => window.removeEventListener(COMMAND_PALETTE_EVENT, handleCustomOpen);
  }, []);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-scroll highlighted item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
    if (activeEl && typeof activeEl.scrollIntoView === "function") {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  return (
    <>
      {/* ── COPIED TOAST NOTIFICATION ── */}
      <AnimatePresence>
        {copiedToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[10001] flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-[#0e1713] px-4 py-2.5 text-xs font-mono text-emerald-400 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <Check className="h-4 w-4 text-emerald-400" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── COMMAND PALETTE MODAL ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-[10vh] sm:pt-[14vh] px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closePalette}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className={`relative w-full max-w-2xl overflow-hidden rounded-2xl border shadow-[0_24px_70px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-colors duration-300 ${
                isSpideyMode
                  ? "border-[#e23636]/40 bg-[#09090c]/95 shadow-[0_20px_60px_rgba(226,54,54,0.15)]"
                  : "border-white/10 bg-[#0e0e12]/95"
              }`}
            >
              {/* Spider-Verse HUD Header Strip (Spidey Mode only) */}
              {isSpideyMode && (
                <div className="flex items-center justify-between border-b border-[#e23636]/20 bg-[#e23636]/10 px-4 py-1.5 font-mono text-[9.5px] uppercase tracking-widest text-[#e23636]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e23636] animate-pulse" />
                    SPIDER-COMMAND // HUD INTERFACE
                  </span>
                  <span className="text-zinc-400">PUNE · SECTOR 01</span>
                </div>
              )}

              {/* Search Bar Input */}
              <div className="relative flex items-center border-b border-white/[0.08] px-4 sm:px-5">
                <Search
                  className={`h-5 w-5 shrink-0 transition-colors ${
                    isSpideyMode ? "text-[#e23636]" : "text-zinc-400"
                  }`}
                />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    isSpideyMode
                      ? "Search mission dossier, projects, actions..."
                      : "Type a command or search projects, pages, actions..."
                  }
                  className="h-14 w-full bg-transparent px-3 text-sm sm:text-base text-white placeholder-zinc-500 outline-none focus:outline-none"
                />

                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="rounded-md p-1 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">Clear search</span>
                    <span className="font-mono text-xs text-zinc-500">ESC</span>
                  </button>
                ) : (
                  <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-zinc-500">
                    <kbd className="rounded bg-white/[0.06] px-1.5 py-0.5 border border-white/10">ESC</kbd>
                    <span>to close</span>
                  </div>
                )}
              </div>

              {/* Action List */}
              <div
                ref={listRef}
                className="max-h-[58vh] overflow-y-auto p-2 sm:p-3 divide-y divide-white/[0.03] scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-zinc-500">
                    <p className="font-mono text-xs uppercase tracking-wider">No matching commands</p>
                    <p className="mt-1 text-xs text-zinc-600">Try searching for &quot;Spring&quot;, &quot;Spidey&quot;, &quot;Resume&quot;, or &quot;Contact&quot;</p>
                  </div>
                ) : (
                  // Group items by category
                  (["Navigation", "Projects", "Actions"] as CommandCategory[]).map((cat) => {
                    const catItems = filteredItems.filter((i) => i.category === cat);
                    if (catItems.length === 0) return null;

                    return (
                      <div key={cat} className="py-1.5 first:pt-0 last:pb-0">
                        <p className="px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                          {isSpideyMode ? `// ${cat.toUpperCase()}` : cat}
                        </p>

                        <div className="mt-1 space-y-0.5">
                          {catItems.map((item) => {
                            const globalIdx = filteredItems.indexOf(item);
                            const isSelected = globalIdx === selectedIndex;
                            const IconComponent = item.icon;

                            return (
                              <button
                                key={item.id}
                                data-index={globalIdx}
                                type="button"
                                onClick={item.action}
                                onMouseEnter={() => setSelectedIndex(globalIdx)}
                                className={`group flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-150 ${
                                  isSelected
                                    ? isSpideyMode
                                      ? "bg-[#e23636]/15 text-white ring-1 ring-[#e23636]/40"
                                      : "bg-white/[0.08] text-white ring-1 ring-white/10"
                                    : "text-zinc-300 hover:bg-white/[0.04]"
                                }`}
                              >
                                <div className="flex items-center gap-3 min-w-0">
                                  <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                      isSelected
                                        ? isSpideyMode
                                          ? "bg-[#e23636] text-white"
                                          : "bg-white text-zinc-950"
                                        : "bg-white/[0.05] text-zinc-400"
                                    }`}
                                  >
                                    <IconComponent className="h-4 w-4" />
                                  </div>

                                  <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                      <span className="font-medium text-xs sm:text-sm text-white truncate">
                                        {item.title}
                                      </span>
                                      {item.badge && (
                                        <span
                                          className={`rounded-full px-2 py-0.2 font-mono text-[9px] font-semibold uppercase tracking-wider ${
                                            isSpideyMode
                                              ? "bg-[#e23636]/20 text-[#e23636] border border-[#e23636]/30"
                                              : "bg-white/[0.08] text-zinc-300 border border-white/10"
                                          }`}
                                        >
                                          {item.badge}
                                        </span>
                                      )}
                                    </div>
                                    <p className="truncate text-[11px] text-zinc-400 group-hover:text-zinc-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </div>

                                <div className="shrink-0">
                                  {isSelected ? (
                                    <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-400">
                                      <span>Select</span>
                                      <CornerDownLeft className="h-3 w-3" />
                                    </div>
                                  ) : (
                                    <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-60 transition-opacity text-zinc-500" />
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Keyboard Footer Bar */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-black/40 px-4 py-2.5 font-mono text-[10px] text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white/[0.08] px-1.5 py-0.5 border border-white/10">↑</kbd>
                    <kbd className="rounded bg-white/[0.08] px-1.5 py-0.5 border border-white/10">↓</kbd>
                    <span>navigate</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="rounded bg-white/[0.08] px-1.5 py-0.5 border border-white/10">↵</kbd>
                    <span>select</span>
                  </span>
                  <span className="hidden sm:flex items-center gap-1">
                    <kbd className="rounded bg-white/[0.08] px-1.5 py-0.5 border border-white/10">esc</kbd>
                    <span>close</span>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-400">
                  <span>Jaydip Desale</span>
                  <span>·</span>
                  <span className={isSpideyMode ? "text-[#e23636]" : "text-emerald-400"}>
                    {isSpideyMode ? "SPIDEY PROTOCOL" : "ONLINE"}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
