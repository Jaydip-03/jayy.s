"use client";

import { useEffect, useState } from "react";

import Intro from "@/components/intro/Intro";
import {
  clearIntroActive,
  hasIntroBeenSeen,
  INTRO_COMPLETE_MS,
  INTRO_REPLAY_EVENT,
} from "@/lib/intro";

export default function IntroGate() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = hasIntroBeenSeen();
    if (!seen) {
      setShowIntro(true);
    } else {
      clearIntroActive();
    }

    const handleReplay = () => {
      setShowIntro(true);
    };
    window.addEventListener(INTRO_REPLAY_EVENT, handleReplay);
    return () => window.removeEventListener(INTRO_REPLAY_EVENT, handleReplay);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const fallbackTimer = window.setTimeout(() => {
      clearIntroActive();
      setShowIntro(false);
    }, INTRO_COMPLETE_MS + 1000);

    return () => window.clearTimeout(fallbackTimer);
  }, [showIntro]);

  if (!mounted || !showIntro) {
    return null;
  }

  return (
    <Intro
      onFinished={() => {
        clearIntroActive();
        setShowIntro(false);
      }}
    />
  );
}