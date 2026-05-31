"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Editorial line-by-line heading entrance. Used for above-the-fold page
 * headings, so it animates on mount (not whileInView) and uses a gentle
 * opacity + small translate rather than a full clip — the text is never
 * pushed fully out of view, keeping the LCP element paint-safe.
 */
export default function TextReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
}) {
  return (
    <span className={className} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} aria-hidden className="block">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ opacity: 0, y: "0.35em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
