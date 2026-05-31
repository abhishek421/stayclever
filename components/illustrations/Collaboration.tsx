"use client";

import { motion } from "framer-motion";

/**
 * Human + AI collaboration: a person at a laptop sketching ideas with a
 * small robot companion. Blueprint-doodle aesthetic, light-blue accents.
 */
export default function Collaboration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 460 340"
      fill="none"
      className={className}
      role="img"
      aria-label="Hand-drawn illustration of a person and an AI robot collaborating"
    >
      <g
        stroke="#0A0A0B"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* desk */}
        <path d="M40 286 L420 286" strokeWidth={2.6} />
        <path d="M70 286 L78 322 M390 286 L382 322" />

        {/* ---- Person (left) ---- */}
        {/* head */}
        <circle cx="150" cy="120" r="26" />
        {/* hair sketch */}
        <path d="M126 112 C128 96 144 88 156 92 M174 116 C178 104 172 94 162 92" />
        {/* face */}
        <path d="M142 122 a2 2 0 0 0 0.1 0 M158 122 a2 2 0 0 0 0.1 0" strokeWidth={3} />
        <path d="M146 132 c4 4 10 4 14 0" strokeWidth={2} />
        {/* body */}
        <path d="M150 146 C150 160 150 168 150 168 L116 232 C112 240 116 248 124 248 L186 248 C194 248 196 240 192 232 L162 176" />
        {/* arm to laptop */}
        <path d="M170 186 C196 188 214 196 226 214" />

        {/* ---- Laptop (center) ---- */}
        <path d="M214 248 L300 248 L312 214 L226 214 Z" fill="#EFF4FF" />
        <path d="M226 214 L312 214" />
        {/* screen */}
        <path d="M236 208 L304 208 L304 168 C304 164 302 162 298 162 L242 162 C238 162 236 164 236 168 Z" fill="#fff" />
        {/* code lines on screen */}
        <path d="M248 176 L292 176 M248 186 L278 186 M248 196 L286 196" stroke="#2563EB" strokeWidth={1.8} />

        {/* ---- Robot companion (right) ---- */}
        <g>
          {/* antenna */}
          <path d="M366 150 l0 -12" />
          <motion.circle
            cx="366"
            cy="134"
            r="5"
            fill="#BFDBFE"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "366px 134px" }}
          />
          {/* head */}
          <rect x="338" y="152" width="56" height="46" rx="12" fill="#EFF4FF" />
          <circle cx="356" cy="175" r="5" fill="#0A0A0B" />
          <circle cx="376" cy="175" r="5" fill="#0A0A0B" />
          <path d="M356 186 c5 4 11 4 16 0" strokeWidth={2} />
          {/* body */}
          <path d="M344 198 L388 198 L388 248 C388 248 380 252 366 252 C352 252 344 248 344 248 Z" />
          <rect x="356" y="212" width="20" height="16" rx="4" fill="#BFDBFE" />
          {/* arm reaching to laptop */}
          <path d="M344 214 C326 218 314 224 308 234" />
        </g>
      </g>

      {/* connection spark between human + AI */}
      <g stroke="#2563EB" strokeWidth={1.8} strokeLinecap="round">
        <motion.path
          d="M226 150 C262 130 300 130 332 150"
          strokeDasharray="2 9"
          animate={{ strokeDashoffset: [0, -33] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        <path d="M278 120 l0 -10 M273 114 l10 0" opacity={0.8} />
      </g>

      {/* floating idea doodles */}
      <g stroke="#0A0A0B" strokeWidth={1.8} strokeLinecap="round" opacity={0.55}>
        <circle cx="92" cy="86" r="10" />
        <path d="M92 96 l0 6 M88 104 l8 0" />
      </g>
    </svg>
  );
}
