import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "../../../content/siteData";

export function Skills() {
  return (
    <section id="skills">
      <SectionHeading label="Capabilities" title="Skills." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-[var(--border)] pt-10">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-5">
              {group.category}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
