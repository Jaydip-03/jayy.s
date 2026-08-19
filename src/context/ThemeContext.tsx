"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ThemeMode = "spidey" | "normal";

type ThemeContextType = {
  mode: ThemeMode;
  isSpideyMode: boolean;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

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

  /*
   * Restore the selected mode for this browser tab.
   *
   * sessionStorage survives refreshes,
   * but is cleared when the tab/session is closed.
   */
  useEffect(() => {
    const savedMode = window.sessionStorage.getItem(
      THEME_SESSION_KEY
    );

    if (savedMode === "spidey" || savedMode === "normal") {
      setMode(savedMode);
    }
  }, []);

  /*
   * Keep the DOM and session storage synchronized.
   */
  useEffect(() => {
    document.documentElement.dataset.theme = mode;

    window.sessionStorage.setItem(
      THEME_SESSION_KEY,
      mode
    );
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,

      isSpideyMode: mode === "spidey",

      toggleMode: () => {
        setMode((current) =>
          current === "spidey"
            ? "normal"
            : "spidey"
        );
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
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}