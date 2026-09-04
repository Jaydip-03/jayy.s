import type { Metadata } from "next";
import ExperienceListing from "@/sections/experience/ExperienceListing";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Work experience and professional journey of Jaydip Desale — Java Full Stack Developer based in Pune, India.",
};

export default function ExperiencePage() {
  return <ExperienceListing />;
}
