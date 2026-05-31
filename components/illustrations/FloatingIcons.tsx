"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Zap } from "lucide-react";

// Positioned only over the right (illustration) zone — never over the
// left copy column — so chips never occlude headline or body text.
const items = [
  { Icon: Sparkles, x: "70%", y: "6%", d: 0, dur: 7 },
  { Icon: Cpu, x: "93%", y: "30%", d: 0.8, dur: 7.5 },
  { Icon: Zap, x: "88%", y: "74%", d: 0.4, dur: 7 },
];

/**
 * Sketch-style floating AI icons scattered behind/around hero content.
 */
export default function FloatingIcons({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ""}`} aria-hidden>
      {items.map(({ Icon, x, y, d, dur }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: x, top: y }}
          animate={{ y: [0, -16, 0], rotate: [0, i % 2 ? 6 : -6, 0] }}
          transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: d }}
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-paper-line bg-white/80 shadow-card backdrop-blur-sm">
            <Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
          </span>
        </motion.div>
      ))}
    </div>
  );
}
