import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Parallax } from "@/components/Parallax";
import { meta, hero } from "../../../content/siteData";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[calc(100svh-6rem)] flex flex-col justify-center"
    >
      <div className="grid md:grid-cols-12 gap-12 md:gap-10 items-end">
        <Parallax speed={-0.15} className="md:col-span-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-6">
            {hero.eyebrow}
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] mb-8">
            {meta.name}
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-muted)] leading-snug max-w-2xl mb-6">
            {hero.statement}
          </p>

          <p className="text-sm text-[var(--text-muted)] mb-10">
            {hero.proof.join("  ·  ")}
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {meta.resumePdfPath && (
              <a
                href={meta.resumePdfPath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition-opacity"
              >
                <Download size={15} />
                Download CV
              </a>
            )}
            <a
              href={`mailto:${meta.email}`}
              className="group inline-flex items-center gap-1 text-sm font-medium hover:text-[var(--accent)] transition-colors"
            >
              Email
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            {meta.linkedin && (
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1 text-sm font-medium hover:text-[var(--accent)] transition-colors"
              >
                LinkedIn
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            )}
          </div>
        </Parallax>

        <Parallax speed={-0.05} className="md:col-span-4">
          <dl className="space-y-6 border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0 md:pl-10">
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted)] mb-1.5">
                  {f.label}
                </dt>
                <dd className="text-sm leading-relaxed">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Parallax>
      </div>

      <a
        href="#work"
        className="mt-20 hidden md:inline-flex items-center gap-2 self-start text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
      >
        <ArrowDown size={14} />
        Selected work
      </a>
    </section>
  );
}
