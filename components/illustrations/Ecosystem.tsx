"use client";

import { motion } from "framer-motion";

/**
 * Hand-drawn "AI helping teams" ecosystem: a central brain/hub linked by
 * sketchy dashed lines to little workstations and a robot. Blueprint feel.
 */
export default function Ecosystem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      className={className}
      role="img"
      aria-label="Hand-drawn ecosystem of an AI hub connected to teams"
    >
      {/* connecting dashed lines */}
      <g stroke="#2563EB" strokeWidth={1.8} strokeLinecap="round">
        {[
          "M240 200 C160 160 120 120 92 96",
          "M240 200 C330 160 370 120 392 96",
          "M240 200 C160 250 120 290 96 312",
          "M240 200 C330 250 372 292 392 312",
          "M240 200 L240 96",
          "M240 200 L240 318",
        ].map((d, i) => (
          <motion.path
            key={i}
            d={d}
            strokeDasharray="2 9"
            animate={{ strokeDashoffset: [0, -44] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: i * 0.18 }}
            opacity={0.75}
          />
        ))}
      </g>

      <g
        stroke="#0A0A0B"
        strokeWidth={2.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* central hub - brain/chip */}
        <circle cx="240" cy="200" r="44" fill="#fff" />
        <circle cx="240" cy="200" r="44" />
        <rect x="222" y="182" width="36" height="36" rx="8" fill="#EFF4FF" />
        <path d="M240 174 l0 -8 M226 178 l-5 -6 M254 178 l5 -6 M240 226 l0 8 M226 222 l-5 6 M254 222 l5 6" />
        <path d="M232 196 c4 -6 12 -6 16 0 M232 206 c4 6 12 6 16 0" stroke="#2563EB" strokeWidth={1.8} />

        {/* node: laptop top-left */}
        <g>
          <rect x="58" y="64" width="68" height="44" rx="6" fill="#EFF4FF" />
          <path d="M66 100 L118 100" stroke="#2563EB" strokeWidth={1.6} />
          <path d="M50 116 L134 116" />
        </g>
        {/* node: people top-right (robot) */}
        <g>
          <rect x="360" y="60" width="64" height="50" rx="12" fill="#fff" />
          <circle cx="378" cy="84" r="4" fill="#0A0A0B" />
          <circle cx="406" cy="84" r="4" fill="#0A0A0B" />
          <path d="M378 95 c6 4 14 4 20 0" strokeWidth={2} />
          <path d="M392 60 l0 -8" />
          <circle cx="392" cy="50" r="4" fill="#BFDBFE" />
        </g>
        {/* node: gear top-center */}
        <g>
          <circle cx="240" cy="74" r="20" fill="#fff" />
          <circle cx="240" cy="74" r="9" />
          <path d="M240 50 l0 -8 M240 98 l0 8 M216 74 l-8 0 M264 74 l8 0 M223 57 l-6 -6 M257 57 l6 -6 M223 91 l-6 6 M257 91 l6 6" />
        </g>
        {/* node: chat bottom-left */}
        <g>
          <path d="M58 296 L122 296 C128 296 130 300 130 304 L130 330 C130 334 128 338 122 338 L96 338 L82 350 L82 338 L64 338 C58 338 56 334 56 330 L56 304 C56 300 58 296 58 296 Z" fill="#EFF4FF" />
          <path d="M70 312 L116 312 M70 322 L100 322" stroke="#2563EB" strokeWidth={1.6} />
        </g>
        {/* node: chart bottom-right */}
        <g>
          <rect x="360" y="294" width="64" height="48" rx="6" fill="#fff" />
          <path d="M370 330 L382 314 L394 322 L414 302" stroke="#2563EB" strokeWidth={2} />
          <path d="M370 334 L414 334" strokeWidth={1.6} />
        </g>
        {/* node: doc bottom-center */}
        <g>
          <path d="M222 304 L250 304 L262 316 L262 350 L222 350 Z" fill="#EFF4FF" />
          <path d="M250 304 L250 316 L262 316" />
          <path d="M230 326 L254 326 M230 336 L246 336" stroke="#2563EB" strokeWidth={1.6} />
        </g>
      </g>
    </svg>
  );
}
