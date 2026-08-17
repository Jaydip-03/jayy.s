import AboutIntro from "@/sections/about/AboutIntro";
import AboutJourney from "@/sections/about/AboutJourney";
import AboutSignOff from "@/sections/about/AboutSignOff";
import AboutSnapshot from "@/sections/about/AboutSnapshot";
import AboutStory from "@/sections/about/AboutStory";
import AboutTestimonials from "@/sections/about/AboutTestimonials";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `Learn more about ${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutIntro />
      <AboutStory />
      <AboutTestimonials />
      <AboutJourney />
      <AboutSnapshot />
      <AboutSignOff />
    </main>
  );
}
