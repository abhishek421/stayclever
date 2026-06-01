"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { values } from "@/lib/data";
import { site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Ecosystem from "@/components/illustrations/Ecosystem";
import { Check } from "lucide-react";

export default function AboutBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-paper via-accent-wash/40 to-paper py-24 sm:py-32"
    >
      <div className="container-shell relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* LEFT — the argument: why StayClever */}
          <div>
            <SectionHeading
              eyebrow="Why StayClever"
              title={
                <>
                  AI partners measured on{" "}
                  <span className="italic text-accent">your results</span>
                </>
              }
              intro="We're not here to sell you technology. We're an AI consulting and automation studio judged on one thing — the costs we cut, the hours we give back, and the growth you can see in the numbers."
            />

            {/* differentiators — the actual reasons to believe */}
            <Stagger className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="flex h-full gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight text-ink">
                        {v.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-3">
                <MagneticButton href={site.cta.primary.href} variant="primary">
                  {site.cta.primary.label}
                </MagneticButton>
                <MagneticButton href="/about" variant="secondary" showArrow={false}>
                  Our story
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — the proof: illustration + qualified stats */}
          <motion.div style={{ y }} className="relative lg:pt-2">
            <div className="relative rounded-4xl border border-paper-line bg-white p-8 shadow-soft">
              <Ecosystem className="h-auto w-full" />
              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-ink-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                One smart system, your whole team working better
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
