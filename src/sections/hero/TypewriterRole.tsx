"use client";

import { useEffect, useState } from "react";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Engineer",
  "MERN Stack Developer",
  "React & Next.js Builder",
];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 35 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1300);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-emerald-400">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-emerald-400 ml-1 align-middle animate-pulse" />
    </span>
  );
}