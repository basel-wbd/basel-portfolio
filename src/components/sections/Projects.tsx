import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Chip } from "@/components/ui/Chip";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../../content/siteData";

export function Projects() {
  return (
    <section id="projects">
      <SectionHeading label="03 — projects" title="Things I've built." />
      <div className="space-y-10">
        {projects.map((project, i) => (
          <article
            key={i}
            className="border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--text-muted)] transition-colors bg-[var(--bg-subtle)]/40"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-xl text-[var(--text)]">
                    {project.title}
                  </h3>
                  <StatusBadge status={project.status} />
                </div>
                <p className="text-xs font-mono text-[var(--text-muted)]">
                  {project.year}
                </p>
              </div>

              {/* Links */}
              {project.links.length > 0 && (
                <div className="flex gap-2">
                  {project.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                    >
                      {link.label.toLowerCase().includes("github") ? (
                        <Github size={12} />
                      ) : (
                        <ExternalLink size={12} />
                      )}
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Problem / Solution */}
            <div className="space-y-3 mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                  Problem
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                  Approach
                </span>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Outcomes */}
            {project.outcomes.length > 0 && (
              <ul className="space-y-1 mb-4">
                {project.outcomes.map((o, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-[var(--text-muted)]"
                  >
                    <span className="text-[var(--accent)] font-mono shrink-0">✓</span>
                    {o}
                  </li>
                ))}
              </ul>
            )}

            {/* Tools */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-[var(--border)]">
              {project.tools.map((tool) => (
                <Chip key={tool} label={tool} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
