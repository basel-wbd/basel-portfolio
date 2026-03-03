import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sections } from "../../content/siteData";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 pt-24 pb-32 space-y-32">
        {sections.hero && <Hero />}
        {sections.about && (
          <ScrollReveal>
            <About />
          </ScrollReveal>
        )}
        {sections.skills && (
          <ScrollReveal>
            <Skills />
          </ScrollReveal>
        )}
        {sections.experience && (
          <ScrollReveal>
            <Experience />
          </ScrollReveal>
        )}
        {sections.projects && (
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
        )}
        {sections.education && (
          <ScrollReveal>
            <Education />
          </ScrollReveal>
        )}
        {sections.achievements && (
          <ScrollReveal>
            <Achievements />
          </ScrollReveal>
        )}
        {sections.contact && (
          <ScrollReveal>
            <Contact />
          </ScrollReveal>
        )}
      </main>
      <Footer />
    </>
  );
}
