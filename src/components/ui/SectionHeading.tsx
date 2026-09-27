export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)] mb-4 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--text)]">
        {title}
      </h2>
    </div>
  );
}
