import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import FinalCTA from "@/components/sections/FinalCTA";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies — Real AI Results in Numbers",
  description:
    "See what practical AI delivered for real businesses: 45% more repeat orders, 70% less fraud, 80% faster customer replies. Measured results, not promises.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        ghost="PROOF"
        titleLines={["Results we can", "put numbers to"]}
        intro="Every project is judged on a real business result. Here's a sample of what that looks like in practice."
      />

      <section className="bg-paper py-16 sm:py-20">
        <div className="container-shell">
          <Stagger className="grid gap-6">
            {caseStudies.map((cs, i) => (
              <StaggerItem key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block overflow-hidden rounded-4xl border border-paper-line bg-white shadow-card transition-shadow duration-500 hover:shadow-card-hover"
                >
                  <div className="grid lg:grid-cols-12">
                    <div className="border-b border-paper-line p-8 sm:p-10 lg:col-span-7 lg:border-b-0 lg:border-r">
                      <div className="flex items-center gap-3 text-xs">
                        <span className="rounded-full bg-accent-wash px-3 py-1 font-semibold text-accent">
                          {cs.industry}
                        </span>
                        <span className="text-ink-muted">{cs.client}</span>
                      </div>
                      <h2 className="display mt-6 text-2xl sm:text-3xl lg:text-4xl">
                        {cs.headline}
                      </h2>
                      <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-muted">
                        {cs.summary}
                      </p>
                      <span className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
                        Read the full story
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                    <div className="grid grid-cols-2 lg:col-span-5">
                      {cs.kpis.map((k, idx) => (
                        <div
                          key={k.label}
                          className={`flex flex-col justify-center p-6 sm:p-8 ${
                            idx % 2 === 0 ? "border-r border-paper-line" : ""
                          } ${idx < 2 ? "border-b border-paper-line" : ""}`}
                        >
                          <span className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            {k.value}
                          </span>
                          <span className="mt-1 text-xs text-ink-muted">{k.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
