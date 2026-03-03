"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { meta, sections } from "../../content/siteData";

const navLinks = [
  { label: "About", href: "#about", show: sections.about },
  { label: "Skills", href: "#skills", show: sections.skills },
  { label: "Experience", href: "#experience", show: sections.experience },
  { label: "Projects", href: "#projects", show: sections.projects },
  { label: "Contact", href: "#contact", show: sections.contact },
].filter((l) => l.show);

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () =>
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / name */}
        <a
          href="#"
          className="font-display text-lg tracking-tight hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          {meta.name.split(" ")[0]}
          <span className="text-[var(--accent)] font-display">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md hover:bg-[var(--bg-subtle)] transition-colors text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md hover:bg-[var(--bg-subtle)] transition-colors text-[var(--text-muted)]"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-[var(--bg-subtle)] transition-colors text-[var(--text-muted)]"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
