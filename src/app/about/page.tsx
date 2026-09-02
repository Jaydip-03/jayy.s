import AboutIntro from "@/sections/about/AboutIntro";
import AboutStory from "@/sections/about/AboutStory";
import AboutTestimonials from "@/sections/about/AboutTestimonials";
import AboutJourney from "@/sections/about/AboutJourney";
import AboutSnapshot from "@/sections/about/AboutSnapshot";
import AboutCollage from "@/sections/about/AboutCollage";
import AboutStudioDesk from "@/sections/about/AboutStudioDesk";
import AboutSignOff from "@/sections/about/AboutSignOff";
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
      <AboutCollage />
      <AboutStudioDesk />
      <AboutSignOff />
    </main>
  );
}
