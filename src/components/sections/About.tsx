import { SectionHeading } from "@/components/ui/SectionHeading";
import { about, education } from "../../../content/siteData";

export function About() {
  return (
    <section id="about">
      <SectionHeading label="About & education" title="Background." />
      <div className="grid md:grid-cols-12 gap-12 md:gap-10 border-t border-[var(--border)] pt-10">
        <div className="md:col-span-7 space-y-6">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-[var(--text-muted)]">
              {p}
            </p>
          ))}
        </div>

        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-2">
            {education.period}
          </p>
          <h3 className="text-xl font-semibold tracking-tight mb-1">
            {education.degree}
          </h3>
          <p className="text-sm text-[var(--text-muted)] mb-8">
            {education.institution}
          </p>

          <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {education.facts.map((f) => (
              <div key={f.label} className="flex justify-between gap-6 py-3.5 text-sm">
                <dt className="text-[var(--text-muted)]">{f.label}</dt>
                <dd className="font-medium text-right tabular-nums">{f.value}</dd>
              </div>
            ))}
          </dl>

          <p className="text-sm text-[var(--text-muted)] leading-relaxed mt-6">
            <span className="text-[var(--text)]">Coursework: </span>
            {education.coursework.join(", ")}
          </p>
        </div>
      </div>
    </section>
  );
}
