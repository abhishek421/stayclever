"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import MagneticButton from "@/components/ui/MagneticButton";
import Robot from "@/components/illustrations/Robot";
import Collaboration from "@/components/illustrations/Collaboration";
import FloatingIcons from "@/components/illustrations/FloatingIcons";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yGhost = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yArt = useTransform(scrollYProgress, [0, 1], [0, 70]);
  // Everything decorative fades out together on scroll — no asymmetric exit.
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-paper pt-32 pb-20 sm:pt-36 lg:pt-40"
    >
      {/* Background ghost type — non-duplicative of the H1, anchored behind the
          illustration on the right, hidden on small screens to avoid overflow. */}
      <motion.div
        style={{ y: yGhost, opacity: fade }}
        className="pointer-events-none absolute right-0 top-[22%] z-0 hidden select-none lg:block"
      >
        <p className="ghost-type whitespace-nowrap text-right text-[12vw] leading-[0.8]">
          BUILD
          <br />
          AUTOMATE
          <br />
          SCALE
        </p>
      </motion.div>

      {/* subtle blueprint wash, kept faint */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] blueprint-grid" />

      <FloatingIcons className="z-10" />

      <div className="container-shell relative z-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper-line bg-white/70 px-4 py-1.5 text-xs font-medium text-ink-muted backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent/40" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              AI consulting &amp; automation studio
            </motion.div>

            {/* H1 is fully visible at first paint (LCP-safe): a single block with
                a subtle opacity/translate entrance — never clipped out of view. */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="display text-[3.4rem] leading-[0.9] sm:text-7xl lg:text-[5.4rem] xl:text-[6rem]"
            >
              Practical AI that
              <br />
              solves real
              <br />
              <span className="text-accent">business problems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              className="lead mt-7 max-w-xl"
            >
              We help startups, small businesses, and D2C brands use AI to
              automate everyday work, answer customers faster, and cut costs —
              measured in real results, not buzzwords.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <MagneticButton href={site.cta.primary.href} variant="primary">
                {site.cta.primary.label}
              </MagneticButton>
              {/* Differentiated secondary path — sends to proof, not the same
                  destination as the primary CTA. */}
              <MagneticButton href="/case-studies" variant="secondary">
                See the results
              </MagneticButton>
            </motion.div>

            {/* Concrete, on-brand proof — no fake avatars or unsourced star
                ratings. These numbers come straight from the site's stats. */}
            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-paper-line pt-6"
            >
              {proof.map((p) => (
                <div key={p.label} className="flex flex-col">
                  <dt className="font-display text-2xl font-bold leading-none text-ink">
                    {p.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-ink-muted">
                    {p.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: illustration stack — robot + collaboration card, fading and
              parallaxing together as one unit on scroll. */}
          <motion.div
            style={{ y: yArt, opacity: fade }}
            className="relative lg:col-span-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease, delay: 0.25 }}
              className="relative z-10 mx-auto w-[64%] max-w-[280px] animate-float-slow"
            >
              <Robot className="h-auto w-full drop-shadow-[0_30px_40px_rgba(16,24,40,0.12)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.4 }}
              className="relative z-20 -mt-10 rounded-4xl border border-paper-line bg-white/85 p-5 shadow-soft backdrop-blur-sm"
            >
              <Collaboration className="h-auto w-full" />
              <p className="mt-2 text-center font-display text-sm italic text-ink-muted">
                humans + AI, working as one team
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scrolling marquee strip */}
      <div className="relative z-20 mt-20 border-y border-paper-line bg-white/60 py-5">
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-12 pr-12">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-3 whitespace-nowrap text-sm font-medium text-ink-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Kept distinct from the "Who we are" stat block (50+ / 10x / 24-7 / 99%)
// so the same numbers don't repeat within one scroll.
const proof = [
  { value: "8", label: "Industries served" },
  { value: "2021", label: "Operating since" },
  { value: "Global", label: "Remote-first team" },
];

const marquee = [
  "Build",
  "Automate",
  "Scale",
  "AI Strategy",
  "Workflow Automation",
  "Predictive Analytics",
  "AI Agents",
  "Voice AI",
  "Solve · Automate · Grow",
];
