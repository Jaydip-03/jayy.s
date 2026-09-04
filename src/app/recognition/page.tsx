import type { Metadata } from "next";

import RecognitionListing from "@/sections/recognition/RecognitionListing";

export const metadata: Metadata = {
  title: "Recognition",
  description:
    "Certifications, training programs, and published research by Jaydip Desale.",
};

export default function RecognitionPage() {
  return <RecognitionListing />;
}
