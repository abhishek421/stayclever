import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/data";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FinalCTA from "@/components/sections/FinalCTA";
import { Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI applications tailored to D2C, retail, FinTech, healthcare, SaaS, logistics, real estate, and professional services.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        ghost="SECTORS"
        titleLines={["AI that speaks", "your industry"]}
        intro="The highest-leverage AI use case in one sector is often irrelevant in another. We bring domain judgment to every engagement."
      >
        <MagneticButton href={site.cta.primary.href} variant="primary">
          {site.cta.primary.label}
        </MagneticButton>
      </PageHero>

      {industries.map((ind, i) => {
        const flipped = i % 2 === 1;
        const outcomeContent = (
          <>
            <span className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-white" />
            Representative outcome: {ind.outcome}
          </>
        );
        return (
          <section
            key={ind.slug}
            id={ind.slug}
            className="scroll-mt-24 border-t border-paper-line bg-paper py-20 sm:py-24"
          >
            <div className="container-shell">
              <div className="grid items-start gap-12 lg:grid-cols-12">
                <div className={`lg:col-span-5 ${flipped ? "lg:order-2" : ""}`}>
                  <Reveal>
                    <span className="font-display text-6xl font-bold leading-none text-accent/15 sm:text-7xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl">
                      {ind.name}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="lead mt-5 max-w-lg">{ind.blurb}</p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    {ind.caseStudySlug ? (
                      <Link
                        href={`/case-studies/${ind.caseStudySlug}`}
                        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-accent shadow-card ring-1 ring-inset ring-accent/40 transition-colors duration-300 hover:bg-accent hover:text-white hover:ring-accent"
                      >
                        {outcomeContent}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    ) : (
                      <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-accent shadow-card ring-1 ring-inset ring-accent/40">
                        {outcomeContent}
                      </div>
                    )}
                  </Reveal>
                </div>

                <div className={`lg:col-span-7 ${flipped ? "lg:order-1" : ""}`}>
                  <Stagger className="grid gap-4 sm:grid-cols-2">
                    {ind.applications.map((app) => (
                      <StaggerItem key={app.title}>
                        <div className="flex h-full flex-col rounded-2xl border border-paper-line bg-white p-6">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-wash text-accent">
                            <Check className="h-4 w-4" strokeWidth={3} />
                          </span>
                          <h3 className="mt-4 font-display text-lg font-bold leading-tight text-ink">
                            {app.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                            {app.detail}
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </Stagger>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FinalCTA />
    </>
  );
}
