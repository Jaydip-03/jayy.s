"use client";

import { useLayoutEffect, useState } from "react";

import Intro from "@/components/intro/Intro";
import { hasIntroBeenSeen } from "@/lib/intro";

export default function IntroGate() {
  const [showIntro, setShowIntro] = useState(false);

  useLayoutEffect(() => {
    if (!hasIntroBeenSeen()) {
      setShowIntro(true);
    }
  }, []);

  if (!showIntro) {
    return null;
  }

  return <Intro onFinished={() => setShowIntro(false)} />;
}
