import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, ExternalLink } from "lucide-react";
import { meta, contact } from "../../../content/siteData";

export function Contact() {
  return (
    <section id="contact">
      <SectionHeading label="06 — contact" title={contact.heading} />
      <p className="text-base text-[var(--text-muted)] mb-8 leading-relaxed max-w-md">
        {contact.body}
      </p>

      <div className="flex flex-wrap gap-4">
        {contact.showMailtoForm && (
          <a
            href={`mailto:${meta.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Mail size={15} />
            {meta.email}
          </a>
        )}

        {meta.linkedin && (
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <ExternalLink size={15} />
            LinkedIn
          </a>
        )}
      </div>

      <p className="text-xs font-mono text-[var(--text-muted)] mt-6">
        Based in {meta.location}. Response time: usually within 24 hours.
      </p>
    </section>
  );
}
