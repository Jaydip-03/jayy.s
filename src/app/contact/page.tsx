import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactForm from "@/components/contact/ContactForm";
import ContactIntro from "@/components/contact/ContactIntro";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} — ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen text-neutral-900">
      <ContactFAQ />

      <section className="relative bg-[#f5f5f0] pb-20 pt-16 md:pb-24 md:pt-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.08]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#f5f5f0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e23636]" />
          </span>
        </div>
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,0.9fr)_1fr] lg:gap-16">
            <ContactIntro />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
