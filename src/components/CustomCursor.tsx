"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);
  const isActive = useRef(false);
  const isHovering = useRef(false);
  const isClicking = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;

    if (!cursor || !ring || !dot) return;

    const applyVisualState = () => {
      cursor.classList.toggle("opacity-100", isActive.current);
      cursor.classList.toggle("opacity-0", !isActive.current);

      ring.classList.toggle("h-10", isHovering.current);
      ring.classList.toggle("w-10", isHovering.current);
      ring.classList.toggle("bg-white/10", isHovering.current);
      ring.classList.toggle("border-white", isHovering.current);
      ring.classList.toggle("h-7", !isHovering.current);
      ring.classList.toggle("w-7", !isHovering.current);
      ring.classList.toggle("bg-transparent", !isHovering.current);
      ring.classList.toggle("scale-75", isClicking.current);
      ring.classList.toggle("scale-100", !isClicking.current);

      dot.classList.toggle("h-1", isHovering.current);
      dot.classList.toggle("w-1", isHovering.current);
      dot.classList.toggle("opacity-70", isHovering.current);
      dot.classList.toggle("h-1.5", !isHovering.current);
      dot.classList.toggle("w-1.5", !isHovering.current);
      dot.classList.toggle("opacity-100", !isHovering.current);
      dot.classList.toggle("scale-50", isClicking.current);
      dot.classList.toggle("scale-100", !isClicking.current);
    };

    const stopAnimation = () => {
      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
    };

    const animate = () => {
      if (!isActive.current || document.hidden) {
        stopAnimation();
        return;
      }

      const easing = 0.16;

      current.current.x += (target.current.x - current.current.x) * easing;
      current.current.y += (target.current.y - current.current.y) * easing;

      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;

      animationFrame.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationFrame.current !== null || document.hidden) return;
      animationFrame.current = requestAnimationFrame(animate);
    };

    let hasPosition = false;

    const handlePointerMove = (event: PointerEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;

      if (!hasPosition) {
        current.current.x = event.clientX;
        current.current.y = event.clientY;
        hasPosition = true;
      }

      if (!isActive.current) {
        isActive.current = true;
        applyVisualState();
      }

      startAnimation();
    };

    const handlePointerLeave = () => {
      isActive.current = false;
      applyVisualState();
      stopAnimation();
    };

    const handlePointerDown = () => {
      isClicking.current = true;
      applyVisualState();
    };

    const handlePointerUp = () => {
      isClicking.current = false;
      applyVisualState();
    };

    const isInteractive = (element: EventTarget | null) => {
      if (!(element instanceof Element)) return false;

      return Boolean(
        element.closest("a, button, input, textarea, select, [role='button']")
      );
    };

    const handlePointerOver = (event: PointerEvent) => {
      isHovering.current = isInteractive(event.target);
      applyVisualState();
    };

    const handlePointerOut = (event: PointerEvent) => {
      isHovering.current = isInteractive(event.relatedTarget);
      applyVisualState();
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
        return;
      }

      if (isActive.current) {
        startAnimation();
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerover", handlePointerOver);
    window.addEventListener("pointerout", handlePointerOut);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    applyVisualState();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      stopAnimation();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden opacity-0 transition-opacity duration-200 lg:block"
      style={{ willChange: "transform" }}
    >
      <div
        ref={ringRef}
        className="flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 scale-100 items-center justify-center rounded-full border border-white/70 bg-transparent transition-[width,height,background-color,border-color,transform] duration-200 ease-out"
      >
        <span
          ref={dotRef}
          className="block h-1.5 w-1.5 scale-100 rounded-full bg-white opacity-100 transition-all duration-150 ease-out"
        />
      </div>
    </div>
  );
}
