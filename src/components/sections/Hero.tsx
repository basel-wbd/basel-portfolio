"use client";
import { useState } from "react";
import { ExternalLink, Download, Github, Mail } from "lucide-react";
import { meta } from "../../../content/siteData";

export function Hero() {
  const [phoneRevealed, setPhoneRevealed] = useState(false);

  return (
    <section
      id="hero"
      className="pt-8 md:pt-16 min-h-[70vh] flex flex-col justify-center"
    >
      {/* Optional headshot */}
      {meta.headshot && (
        <div className="mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meta.headshot}
            alt={`${meta.name} headshot`}
            className="w-16 h-16 rounded-full object-cover grayscale border-2 border-[var(--border)]"
          />
        </div>
      )}

      {/* Status dot */}
      <div className="flex items-center gap-2 mb-6">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
        </span>
        <span className="text-xs font-mono text-[var(--text-muted)]">
          Dubai, UAE · Open to opportunities
        </span>
      </div>

      {/* Name */}
      <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-4">
        Basel
        <br />
        BaderEddin
        <span className="text-[var(--accent)]">.</span>
      </h1>

      {/* Title */}
      <p className="text-lg md:text-xl text-[var(--text-muted)] mb-3 font-light">
        Industrial Engineering Student · RIT Dubai
      </p>

      {/* Tagline */}
      <p className="text-base text-[var(--text-muted)] max-w-lg mb-10 leading-relaxed">
        {meta.subTagline}
      </p>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--text)] text-[var(--bg)] text-sm font-medium hover:opacity-80 transition-opacity"
        >
          View Projects
        </a>

        {meta.resumePdfPath && (
          <a
            href={meta.resumePdfPath}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <Download size={14} />
            Download CV
          </a>
        )}

        {meta.linkedin && (
          <a
            href={meta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <ExternalLink size={14} />
            LinkedIn
          </a>
        )}

        {meta.github && (
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        )}

        {/* Phone: Option A — never shown publicly */}
        <button
          onClick={() => setPhoneRevealed(true)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border)] text-sm font-medium hover:bg-[var(--bg-subtle)] transition-colors text-[var(--text-muted)]"
          aria-label="Request phone number"
        >
          {phoneRevealed ? (
            <span className="flex items-center gap-1.5">
              <Mail size={14} />
              Email me to request phone number
            </span>
          ) : (
            "Request phone number"
          )}
        </button>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 hidden md:flex items-center gap-2 text-[var(--text-muted)]">
        <div className="h-px w-8 bg-[var(--border)]" />
        <span className="text-xs font-mono">scroll to explore</span>
      </div>
    </section>
  );
}
