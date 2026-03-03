import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { education } from "../../../content/siteData";

export function Education() {
  return (
    <section id="education">
      <SectionHeading label="04 — education" title="Where I study." />
      <div className="space-y-10">
        {education.map((edu, i) => (
          <div key={i} className="border-t border-[var(--border)] pt-8">
            <div className="mb-5">
              <p className="text-xs font-mono text-[var(--accent)] mb-1">
                {edu.period}
              </p>
              <h3 className="font-display text-2xl text-[var(--text)] mb-1">
                {edu.degree}
              </h3>
              <p className="text-[var(--text-muted)] text-sm">
                {edu.institution} · {edu.location}
              </p>
              {edu.gpa && (
                <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
                  GPA: {edu.gpa}
                </p>
              )}
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <Chip key={course} label={course} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
