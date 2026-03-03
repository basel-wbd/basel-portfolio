export function Chip({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] text-[var(--text-muted)] font-mono hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors cursor-default select-none">
      {label}
    </span>
  );
}
