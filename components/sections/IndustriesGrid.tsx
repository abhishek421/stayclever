"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { industries } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function IndustriesGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="industries" className="relative bg-paper py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          align="center"
          eyebrow="Industries"
          title={
            <>
              Built for <span className="italic text-accent">modern businesses</span>
            </>
          }
          intro="We know what works in your industry — because the best AI idea for a retail shop is rarely the right one for a clinic."
        />

        <Stagger className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                href={`/industries#${ind.slug}`}
                onMouseEnter={() => setActive(ind.slug)}
                onMouseLeave={() => setActive(null)}
                className="group relative block h-full overflow-hidden rounded-3xl border border-paper-line bg-white p-6 shadow-card transition-all duration-500 hover:shadow-card-hover"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                    {ind.name}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: active === ind.slug ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-sm leading-relaxed text-ink-muted">
                    {ind.blurb}
                  </p>
                </motion.div>

                <div className="mt-5 flex items-center gap-2 rounded-full bg-accent-wash px-3 py-1.5 text-xs font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {ind.outcome}
                </div>

                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
