import { About, Hero, Projects, Skills, Testimonials, Brands, ContactCTA } from "@/components/Sections";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects showViewAllLink />
      <Testimonials />
      <Skills />
      <Brands />
      <ContactCTA />
    </main>
  );
}
