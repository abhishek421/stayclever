"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { insights, insightCategories } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const MotionLink = motion.create(Link);

export default function InsightsList() {
  const [active, setActive] = useState<string>("All");
  const filters = ["All", ...insightCategories];
  const filtered =
    active === "All" ? insights : insights.filter((p) => p.category === active);

  const [featured, ...rest] = insights;

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="container-shell">
        {/* featured */}
        {active === "All" && (
          <Link
            href={`/insights/${featured.slug}`}
            className="group mb-12 grid overflow-hidden rounded-4xl border border-paper-line bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover lg:grid-cols-2"
          >
            <div className="relative min-h-[260px] overflow-hidden bg-accent-wash">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="flex items-center gap-3 text-xs text-ink-muted">
                <span className="rounded-full bg-accent-wash px-3 py-1 font-semibold text-accent">
                  Featured
                </span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="display mt-5 text-3xl sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                {featured.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        )}

        {/* filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === f ? "text-white" : "text-ink-muted hover:text-ink"
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="insight-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {f}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {(active === "All" ? rest : filtered).map((post) => (
              <MotionLink
                layout
                key={post.slug}
                id={post.slug}
                href={`/insights/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-paper-line bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
              >
                <div className="relative h-44 overflow-hidden border-b border-paper-line bg-accent-wash">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-ink-muted">
                    <span className="font-semibold text-accent">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                    Read more
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </MotionLink>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
