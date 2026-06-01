import type { Metadata } from "next";
import { services } from "@/lib/data";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FounderDay from "@/components/sections/FounderDay";
import FinalCTA from "@/components/sections/FinalCTA";
import { Check, X, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services — Automation, Assistants, Forecasting & More",
  description:
    "Five practical ways to put AI to work in your business: automate manual work, answer customers 24/7, forecast demand, and build what's unique to you. Each judged by the results it delivers.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        ghost="SOLVE"
        titleLines={["AI solutions, built", "around your problems"]}
        intro="We don't start with technology. We start with your problem, then add just enough AI to solve it — and show you the return."
      >
        <MagneticButton href={site.cta.primary.href} variant="primary">
          {site.cta.primary.label}
        </MagneticButton>
      </PageHero>

      {services.map((s, i) => {
        const Icon = s.icon;
        const flipped = i % 2 === 1;
        const num = String(i + 1).padStart(2, "0");
        return (
          <section
            key={s.slug}
            id={s.slug}
            className="scroll-mt-32 border-t border-paper-line bg-paper py-20 sm:py-28"
          >
            <div className="container-shell">
              <div className="grid gap-12 lg:grid-cols-12">
                {/* sticky header — side alternates for rhythm */}
                <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                  <div className="lg:sticky lg:top-32">
                    <Reveal>
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-white">
                          <Icon className="h-6 w-6" strokeWidth={1.7} />
                        </span>
                        <span className="font-display text-5xl font-bold text-ink/10">
                          {num}
                        </span>
                      </div>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <h2 className="display mt-6 text-4xl sm:text-5xl">{s.title}</h2>
                    </Reveal>
                    <Reveal delay={0.1}>
                      <p className="mt-4 font-display text-xl italic text-accent">
                        {s.tagline}
                      </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                      <p className="mt-5 text-base leading-relaxed text-ink-muted">
                        {s.description}
                      </p>
                    </Reveal>

                    {/* outcome metric */}
                    <Reveal delay={0.18}>
                      <div className="mt-7 inline-flex items-center gap-3 rounded-2xl border border-accent/20 bg-accent-wash px-5 py-3">
                        <TrendingUp className="h-5 w-5 text-accent" strokeWidth={2} />
                        <span>
                          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                            Typical outcome
                          </span>
                          <span className="block font-display text-lg font-bold text-accent">
                            {s.proof}
                          </span>
                        </span>
                      </div>
                    </Reveal>

                    <Reveal delay={0.22}>
                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <MagneticButton href={site.cta.secondary.href} variant="secondary">
                          Discuss this service
                        </MagneticButton>
                        <MagneticButton href="/case-studies" variant="ghost" showArrow>
                          See results
                        </MagneticButton>
                      </div>
                    </Reveal>
                  </div>
                </div>

                {/* detail */}
                <div className={`space-y-8 lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
                  {/* problem vs solution — color-coded before/after */}
                  <Reveal>
                    <div className="grid gap-px overflow-hidden rounded-3xl border border-paper-line bg-paper-line sm:grid-cols-2">
                      <div className="bg-ink/[0.035] p-7">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                          <X className="h-4 w-4" /> The problem
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                          {s.problem}
                        </p>
                      </div>
                      <div className="bg-accent-wash p-7">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                          <Check className="h-4 w-4" /> Our solution
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-ink">
                          {s.solution}
                        </p>
                      </div>
                    </div>
                  </Reveal>

                  {/* benefits */}
                  <Reveal>
                    <div className="rounded-3xl border border-paper-line bg-white p-7">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                        Benefits
                      </h3>
                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {s.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-sm text-ink">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-wash text-accent">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>

                  <div className="grid gap-8 sm:grid-cols-2">
                    {/* use cases */}
                    <Reveal>
                      <div className="h-full rounded-3xl border border-paper-line bg-white p-7">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                          Use cases
                        </h3>
                        <ul className="mt-5 space-y-3">
                          {s.useCases.map((u) => (
                            <li key={u} className="flex items-center gap-3 text-sm text-ink">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>

                    {/* process — vertical numbered timeline */}
                    <Reveal delay={0.05}>
                      <div className="h-full rounded-3xl border border-paper-line bg-white p-7">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                          Process
                        </h3>
                        <ol className="mt-5">
                          {s.process.map((p, idx) => (
                            <li
                              key={p}
                              className="relative flex gap-3 pb-5 last:pb-0"
                            >
                              {idx < s.process.length - 1 && (
                                <span className="absolute left-3 top-7 h-[calc(100%-1.25rem)] w-px -translate-x-1/2 bg-paper-line" />
                              )}
                              <span className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-semibold text-white">
                                {idx + 1}
                              </span>
                              <span className="pt-0.5 text-sm text-ink">{p}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Signature offer closes the page — the founder-led discovery day */}
      <FounderDay />

      <FinalCTA />
    </>
  );
}
