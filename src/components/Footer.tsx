import { meta } from "../../content/siteData";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
        <span>
          © {year} {meta.name}
        </span>
        <span>Built with Next.js · Tailwind CSS</span>
      </div>
    </footer>
  );
}
