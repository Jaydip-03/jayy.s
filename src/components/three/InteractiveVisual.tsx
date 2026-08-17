"use client";

import { useEffect, useRef } from "react";
import HeroCube from "./HeroCube";
import OrbitingIcons from "./OrbitingIcons";

type Rotation = {
  x: number;
  y: number;
};

export default function InteractiveVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const cubeRef = useRef<HTMLDivElement>(null);

  const targetRotation = useRef<Rotation>({
    x: 0,
    y: 0,
  });

  const currentRotation = useRef<Rotation>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const container = ref.current;
    const cube = cubeRef.current;

    if (!container || !cube) return;

    let animationFrame: number;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();

      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      targetRotation.current.x = py * -14;
      targetRotation.current.y = px * 14;
    };

    const handlePointerLeave = () => {
      targetRotation.current.x = 0;
      targetRotation.current.y = 0;
    };

    const animate = () => {
      const easing = 0.08;

      currentRotation.current.x +=
        (targetRotation.current.x - currentRotation.current.x) * easing;

      currentRotation.current.y +=
        (targetRotation.current.y - currentRotation.current.y) * easing;

      cube.style.transform = `
        rotateX(${currentRotation.current.x}deg)
        rotateY(${currentRotation.current.y}deg)
      `;

      animationFrame = requestAnimationFrame(animate);
    };

    container.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    container.addEventListener("pointerleave", handlePointerLeave);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center"
      style={{
        width: "430px",
        height: "430px",
        perspective: "1000px",
      }}
    >
      <OrbitingIcons />

      <div ref={cubeRef} className="hero-cube-tilt hero-cube-tilt--compact">
        <HeroCube />
      </div>
    </div>
  );
}
