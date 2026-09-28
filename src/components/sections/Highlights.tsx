import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { caseStudies } from "../../../content/siteData";

const steps = [
  { key: "problem", label: "Problem" },
  { key: "action", label: "What I did" },
  { key: "outcome", label: "Outcome" },
] as const;

export function Highlights() {
  return (
    <section id="work">
      <SectionHeading label="Selected work" title="Highlights." />
      <div>
        {caseStudies.map((study, i) => (
          <article
            key={study.title}
            className="grid md:grid-cols-12 gap-8 md:gap-10 border-t border-[var(--border)] py-12 md:py-16"
          >
            {/* Left: title + metrics */}
            <ScrollReveal className="md:col-span-5">
              <span className="text-xs tabular-nums text-[var(--text-muted)] block mb-4">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-3">
                {study.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-8">
                {study.context}
              </p>
              <dl className="flex gap-10">
                {study.metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd>
                      <span className="block text-2xl font-semibold tracking-tight text-[var(--accent)]">
                        {m.value}
                      </span>
                      <span className="block text-xs text-[var(--text-muted)] mt-1">
                        {m.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>

            {/* Right: problem → action → outcome */}
            <ScrollReveal delay={120} className="md:col-span-7">
              <dl className="space-y-6">
                {steps.map(({ key, label }) => (
                  <div
                    key={key}
                    className="grid sm:grid-cols-[7.5rem_1fr] gap-1 sm:gap-6"
                  >
                    <dt className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] pt-1">
                      {label}
                    </dt>
                    <dd className="text-base leading-relaxed">{study[key]}</dd>
                  </div>
                ))}
              </dl>

              <div className="sm:pl-[9rem] mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="text-xs text-[var(--text-muted)]">
                  {study.tags.join("  ·  ")}
                </p>
                {study.link && (
                  <a
                    href={study.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]"
                  >
                    {study.link.label}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}
              </div>
            </ScrollReveal>
          </article>
        ))}
      </div>
    </section>
  );
}
