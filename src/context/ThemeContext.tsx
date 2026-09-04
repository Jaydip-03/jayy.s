"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "spidey" | "normal";

type ThemeContextType = {
  mode: ThemeMode;
  isSpideyMode: boolean;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_SESSION_KEY = "portfolio-theme";

type ThemeProviderProps = {
  children: ReactNode;
  initialMode: ThemeMode;
};

export function ThemeProvider({
  children,
  initialMode,
}: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>(initialMode);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    try {
      const savedCookie = document.cookie.match(/(?:^|;\s*)portfolio-theme=([^;]+)/)?.[1] as ThemeMode | undefined;
      const savedMode = savedCookie || (window.sessionStorage.getItem(THEME_SESSION_KEY) as ThemeMode | null);
      if (savedMode === "spidey" || savedMode === "normal") {
        setMode(savedMode);
      }
    } catch (e) {}
  }, []);

  /* Sync DOM attribute + persist theme to cookie & sessionStorage on every mode change */
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      window.sessionStorage.setItem(THEME_SESSION_KEY, mode);
      document.cookie = `${THEME_SESSION_KEY}=${mode}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {}
  }, [mode]);

  /*
   * Lazy-initialize background audio ONLY when Spidey mode is activated.
   * This prevents downloading the 6MB mp3 on every page load.
   */
  useEffect(() => {
    if (mode !== "spidey") {
      // If not in spidey mode, pause & release audio if it exists
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      return;
    }

    // First time activating spidey mode: create the audio element
    if (!audioRef.current) {
      const audio = new Audio("/audio/sunflower.mp3");
      audio.loop = true;
      audio.volume = 0.4;
      audio.preload = "none"; // Don't preload until we actually play
      audioRef.current = audio;
    }

    const audio = audioRef.current;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        /* Browser autoplay policy prevented playback.
         * Resume on first user interaction (click/touch/key).
         */
        const resumeAudioOnGesture = () => {
          if (audioRef.current && audioRef.current.paused) {
            audioRef.current.play().catch(() => {});
          }
        };
        window.addEventListener("click", resumeAudioOnGesture, { once: true });
        window.addEventListener("keydown", resumeAudioOnGesture, { once: true });
        window.addEventListener("touchstart", resumeAudioOnGesture, { once: true });
      });
    }
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      isSpideyMode: mode === "spidey",
      toggleMode: () => {
        setMode((current) => {
          const next = current === "spidey" ? "normal" : "spidey";
          return next;
        });
      },
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}