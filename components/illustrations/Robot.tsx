"use client";

import { motion } from "framer-motion";

/**
 * Friendly hand-drawn AI robot. Black sketch strokes with light-blue accents.
 * Antenna pulses, eyes blink subtly.
 */
export default function Robot({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 300"
      fill="none"
      className={className}
      role="img"
      aria-label="Hand-drawn friendly AI robot"
    >
      <g
        stroke="#0A0A0B"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* antenna */}
        <path d="M130 44 C128 30 132 24 130 14" />
        <motion.circle
          cx="130"
          cy="12"
          r="7"
          fill="#BFDBFE"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "130px 12px" }}
        />

        {/* head */}
        <path d="M70 70 C70 56 82 50 96 50 L164 50 C178 50 190 56 190 72 L190 132 C190 148 178 154 162 154 L98 154 C82 154 70 146 70 130 Z" />
        {/* face screen */}
        <path
          d="M88 78 L172 78 C176 78 178 80 178 84 L178 122 C178 126 176 128 172 128 L88 128 C84 128 82 126 82 122 L82 84 C82 80 84 78 88 78 Z"
          fill="#EFF4FF"
        />
        {/* eyes */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.45, 0.5, 0.55, 1] }}
          style={{ transformOrigin: "130px 100px" }}
        >
          <circle cx="112" cy="100" r="8" fill="#0A0A0B" />
          <circle cx="148" cy="100" r="8" fill="#0A0A0B" />
        </motion.g>
        {/* smile */}
        <path d="M110 116 C120 124 140 124 150 116" strokeWidth={2.2} />
        {/* ears */}
        <path d="M70 92 L58 92 C54 92 52 96 52 100 L52 110 C52 114 54 116 58 116 L70 116" />
        <path d="M190 92 L202 92 C206 92 208 96 208 100 L208 110 C208 114 206 116 202 116 L190 116" />

        {/* neck */}
        <path d="M118 154 L118 168 M142 154 L142 168" />

        {/* body */}
        <path d="M86 170 C86 166 90 164 96 164 L164 164 C170 164 174 166 174 172 L174 250 C174 262 166 268 152 268 L108 268 C94 268 86 260 86 248 Z" />
        {/* chest panel */}
        <rect x="106" y="186" width="48" height="34" rx="6" fill="#EFF4FF" />
        <path d="M116 196 L144 196 M116 206 L136 206" strokeWidth={2} />
        {/* buttons */}
        <circle cx="118" cy="238" r="5" fill="#BFDBFE" />
        <circle cx="142" cy="238" r="5" />

        {/* arms */}
        <path d="M86 188 C66 192 56 206 56 226 C56 240 64 250 76 252" />
        <path d="M174 188 C194 192 204 206 204 226 C204 240 196 250 184 252" />
        {/* hands */}
        <circle cx="74" cy="256" r="8" fill="#fff" />
        <circle cx="186" cy="256" r="8" fill="#fff" />

        {/* legs */}
        <path d="M112 268 L112 288 M148 268 L148 288" />
        <path d="M100 290 L124 290 M136 290 L160 290" strokeWidth={3} />
      </g>

      {/* sketchy accent doodles */}
      <g stroke="#2563EB" strokeWidth={1.6} strokeLinecap="round" opacity={0.7}>
        <path d="M30 60 l8 -8 M34 56 l-2 12" />
        <path d="M228 168 l10 -4 M232 162 l2 12" />
      </g>
    </svg>
  );
}
