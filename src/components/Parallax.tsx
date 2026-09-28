"use client";
import { useEffect, useRef } from "react";

// Shifts children vertically in proportion to their distance from the
// viewport centre. Positive speed drifts into place from below; negative
// speed lags behind the scroll. Disabled under prefers-reduced-motion.
export function Parallax({
  children,
  speed = 0.1,
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let shift = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      // Measure against the untransformed position to avoid feedback.
      const vh = window.innerHeight;
      const offset = rect.top - shift + rect.height / 2 - vh / 2;
      // Clamp so far off-screen elements don't drift unboundedly.
      shift = Math.max(-vh, Math.min(vh, offset)) * speed;
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
