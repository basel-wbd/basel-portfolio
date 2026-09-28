import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Container } from "@/components/ui/Container";
import { sections } from "../../content/siteData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="pt-24 pb-32 space-y-32 md:space-y-48">
          {sections.hero && <Hero />}
          {sections.highlights && <Highlights />}
          {sections.skills && (
            <ScrollReveal>
              <Skills />
            </ScrollReveal>
          )}
          {sections.about && (
            <ScrollReveal>
              <About />
            </ScrollReveal>
          )}
          {sections.contact && (
            <ScrollReveal>
              <Contact />
            </ScrollReveal>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
