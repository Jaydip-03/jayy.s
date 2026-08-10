import ContactHero from "@/components/contact/ContactHero";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-white text-neutral-900">
      <ContactHero />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
            <ContactDetails />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}