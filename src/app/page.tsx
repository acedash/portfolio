import { About, Hero, Projects, Skills, Testimonials, Brands, ContactCTA, ServicesPreview } from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects showViewAllLink />
      <Testimonials />
      <Skills />
      <ServicesPreview />
      <Brands />
      <ContactCTA />
    </main>
  );
}
