import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "../../../content/siteData";

export function Achievements() {
  return (
    <section id="achievements">
      <SectionHeading label="05 — achievements" title="Milestones." />
      <div className="space-y-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className="flex gap-4 items-start border-t border-[var(--border)] pt-6"
          >
            <span className="font-mono text-xs text-[var(--accent)] pt-0.5 shrink-0">
              {a.year}
            </span>
            <div>
              <h3 className="font-display text-lg text-[var(--text)] mb-1">
                {a.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {a.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
