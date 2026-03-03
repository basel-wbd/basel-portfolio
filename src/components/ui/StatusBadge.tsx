import type { ProjectStatus } from "../../../content/siteData";

const styles: Record<ProjectStatus, string> = {
  Live: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  "In Progress":
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
  Planned: "bg-[var(--bg-subtle)] text-[var(--text-muted)]",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={`text-xs font-mono px-2.5 py-1 rounded-full font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
