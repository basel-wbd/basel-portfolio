import { ArrowUpRight } from "lucide-react";
import { meta, contact } from "../../../content/siteData";

const linkClass =
  "group inline-flex items-center gap-1 text-sm font-medium hover:text-[var(--accent)] transition-colors";

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--border)] pt-16 md:pt-24">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4 block">
        Contact
      </span>
      <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
        {contact.heading}
      </h2>
      <p className="text-lg text-[var(--text-muted)] leading-relaxed max-w-xl mb-10">
        {contact.body}
      </p>

      <a
        href={`mailto:${meta.email}`}
        className="inline-block text-2xl md:text-4xl font-medium tracking-tight underline decoration-[var(--border)] decoration-2 underline-offset-8 hover:decoration-[var(--accent)] transition-colors mb-12 break-all"
      >
        {meta.email}
      </a>

      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {meta.linkedin && (
          <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
            LinkedIn
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
        {meta.github && (
          <a href={meta.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
            GitHub
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
        {meta.resumePdfPath && (
          <a href={meta.resumePdfPath} download className={linkClass}>
            Download CV
            <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </section>
  );
}
