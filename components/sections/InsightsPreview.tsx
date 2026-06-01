"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { insights } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function InsightsPreview() {
  const items = insights.slice(0, 3);
  return (
    <section id="insights" className="relative bg-paper py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Practical AI ideas{" "}
                <span className="italic text-accent">you can use</span>
              </>
            }
            intro="No think-pieces about the future. Just clear, practical ideas you can put to work this quarter."
          />
          <div className="hidden lg:block">
            <MagneticButton href="/insights" variant="secondary" showArrow>
              Read all insights
            </MagneticButton>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-5 lg:grid-cols-3">
          {items.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/insights#${post.slug}`} className="group block h-full">
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-paper-line bg-white shadow-card transition-shadow duration-500 group-hover:shadow-card-hover"
                >
                  {/* sketch cover */}
                  <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-paper-line bg-accent-wash">
                    <div className="absolute inset-0 opacity-50 blueprint-grid" />
                    <span className="relative font-display text-2xl font-bold italic text-accent/70">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-xs text-ink-muted">
                      <span className="font-semibold text-accent">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 lg:hidden">
          <MagneticButton href="/insights" variant="secondary" showArrow>
            Read all insights
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
