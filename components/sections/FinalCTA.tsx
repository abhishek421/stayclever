"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import MagneticButton from "@/components/ui/MagneticButton";
import { Reveal } from "@/components/ui/Reveal";
import Robot from "@/components/illustrations/Robot";
import { SketchStar } from "@/components/illustrations/Doodles";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-paper py-24 sm:py-32">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-paper-line bg-accent-wash px-6 py-16 sm:px-12 sm:py-20 lg:px-20">
          {/* ghost type */}
          <p className="ghost-type pointer-events-none absolute inset-x-0 -top-2 text-center text-[16vw] leading-none text-accent/[0.06]">
            GROW
          </p>
          <div className="pointer-events-none absolute inset-0 opacity-40 blueprint-grid" />

          <div className="relative grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="eyebrow mb-5">
                  <span className="h-px w-6 bg-accent" />
                  Your move
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display text-4xl sm:text-6xl lg:text-[4.2rem]">
                  Ready to unlock
                  <br />
                  <span className="italic text-accent">AI-powered growth?</span>
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="lead mt-6 max-w-xl">
                  Start with a free AI plan. We&apos;ll show you exactly where AI can
                  save time or make money in your business — and what the return
                  looks like — before you commit to anything.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <MagneticButton href={site.cta.primary.href} variant="primary">
                    {site.cta.primary.label}
                  </MagneticButton>
                  <MagneticButton
                    href={site.cta.secondary.href}
                    variant="secondary"
                    showArrow={false}
                  >
                    {site.cta.secondary.label}
                  </MagneticButton>
                </div>
              </Reveal>
            </div>

            <div className="relative hidden lg:col-span-4 lg:block">
              <motion.div
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto w-[78%]"
              >
                <Robot className="h-auto w-full drop-shadow-[0_30px_40px_rgba(37,99,235,0.18)]" />
              </motion.div>
              <SketchStar className="absolute right-2 top-0 h-10 w-10 animate-float" />
              <SketchStar className="absolute bottom-6 left-0 h-7 w-7 animate-float-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
