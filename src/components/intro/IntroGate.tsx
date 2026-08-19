"use client";

import { useLayoutEffect, useState } from "react";

import Intro from "@/components/intro/Intro";
import {
  clearIntroActive,
  hasIntroBeenSeen,
} from "@/lib/intro";

export default function IntroGate() {
  const [showIntro, setShowIntro] = useState(false);

  useLayoutEffect(() => {
    const shouldShowIntro = !hasIntroBeenSeen();

    setShowIntro(shouldShowIntro);

    if (!shouldShowIntro) {
      clearIntroActive();
    }
  }, []);

  if (!showIntro) {
    return null;
  }

  return (
    <Intro
      onFinished={() => {
        setShowIntro(false);
      }}
    />
  );
}