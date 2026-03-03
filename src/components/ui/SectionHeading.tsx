export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <span className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2 block">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl text-[var(--text)]">
        {title}
      </h2>
    </div>
  );
}
