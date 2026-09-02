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

  /*
   * Initialize background audio once at root provider level
   */
  useEffect(() => {
   const audio = new Audio("/audio/sunflower.mp3");
   audio.loop = true;
   audio.volume = 0.4;
   audio.preload = "auto";
   audioRef.current = audio;

   return () => {
     audio.pause();
     audio.currentTime = 0;
     audioRef.current = null;
   };
  }, []);

  /*
   * Keep DOM, cookies, session storage, and Audio perfectly synchronized.
   * If autoplay is blocked by browser on refresh, resume on first user interaction.
   */
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      window.sessionStorage.setItem(THEME_SESSION_KEY, mode);
      document.cookie = `${THEME_SESSION_KEY}=${mode}; path=/; max-age=31536000; SameSite=Lax`;
    } catch (e) {}

    const audio = audioRef.current;
    if (!audio) return;

    if (mode === "spidey") {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* Browser autoplay policy prevented playback on refresh.
           * Resume audio seamlessly on the very first user interaction (click/touch/key).
           */
          const resumeAudioOnGesture = () => {
            if (audioRef.current && mode === "spidey") {
              audioRef.current.play().catch(() => {});
            }
            window.removeEventListener("click", resumeAudioOnGesture);
            window.removeEventListener("keydown", resumeAudioOnGesture);
            window.removeEventListener("touchstart", resumeAudioOnGesture);
          };

          window.addEventListener("click", resumeAudioOnGesture, { once: true });
          window.addEventListener("keydown", resumeAudioOnGesture, { once: true });
          window.addEventListener("touchstart", resumeAudioOnGesture, { once: true });
        });
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
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