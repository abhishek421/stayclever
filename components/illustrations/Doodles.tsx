"use client";

import { motion } from "framer-motion";

/** Hand-drawn underline that draws itself on view. */
export function SketchUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M3 11 C46 5 92 4 132 8 C166 11 200 9 236 5"
        stroke="#2563EB"
        strokeWidth={4}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/** Small sketchy curved arrow. */
export function SketchArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden>
      <path
        d="M10 14 C44 8 70 28 64 62"
        stroke="#0A0A0B"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <path
        d="M52 56 L64 64 L70 50"
        stroke="#0A0A0B"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Sketch star/spark. */
export function SketchStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 4 C21 14 26 19 36 20 C26 21 21 26 20 36 C19 26 14 21 4 20 C14 19 19 14 20 4 Z"
        stroke="#2563EB"
        strokeWidth={2}
        strokeLinejoin="round"
        fill="#EFF4FF"
      />
    </svg>
  );
}

/** Circular sketch annotation (for circling words). */
export function SketchCircle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 120" fill="none" className={className} preserveAspectRatio="none" aria-hidden>
      <motion.path
        d="M150 12 C232 12 290 32 290 60 C290 92 224 108 150 108 C70 108 12 90 12 60 C12 30 78 14 150 14"
        stroke="#2563EB"
        strokeWidth={3}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
