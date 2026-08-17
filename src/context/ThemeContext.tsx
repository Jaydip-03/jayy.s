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

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("spidey");

  useEffect(() => {
    const savedMode = window.localStorage.getItem("portfolio-theme");

    if (savedMode === "normal" || savedMode === "spidey") {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      isSpideyMode: mode === "spidey",
      toggleMode: () => {
        setMode((current) =>
          current === "spidey" ? "normal" : "spidey"
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
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}