import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "../../../content/siteData";

export function About() {
  return (
    <section id="about">
      <SectionHeading label="00 — about" title="Who I am." />
      <div className="space-y-5">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base md:text-lg text-[var(--text-muted)] leading-relaxed"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
