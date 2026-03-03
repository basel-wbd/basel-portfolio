import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { skills } from "../../../content/siteData";

export function Skills() {
  return (
    <section id="skills">
      <SectionHeading label="01 — skills" title="What I bring." />
      <div className="space-y-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-3">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
