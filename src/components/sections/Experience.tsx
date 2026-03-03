import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "../../../content/siteData";

export function Experience() {
  return (
    <section id="experience">
      <SectionHeading label="02 — experience" title="Where I've worked." />
      <div className="space-y-12">
        {experience.map((job, i) => (
          <div
            key={i}
            className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8 border-t border-[var(--border)] pt-8"
          >
            {/* Left: meta */}
            <div>
              <p className="text-xs font-mono text-[var(--accent)] mb-1">
                {job.period}
              </p>
              <h3 className="font-display text-xl text-[var(--text)] leading-snug mb-1">
                {job.role}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{job.org}</p>
              <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                {job.location}
              </p>
            </div>

            {/* Right: bullets */}
            <ul className="space-y-2 mt-1">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  <span className="text-[var(--accent)] shrink-0 mt-0.5 font-mono">→</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
