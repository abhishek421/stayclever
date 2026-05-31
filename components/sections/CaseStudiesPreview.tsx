import Link from "next/link";
import { caseStudies } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight, TrendingUp, TrendingDown } from "lucide-react";

export default function CaseStudiesPreview() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-paper py-24 sm:py-32"
    >
      <div className="container-shell relative">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Case studies"
            title={
              <>
                Real results.{" "}
                <span className="italic text-accent">Real impact.</span>
              </>
            }
            intro="We measure success the way our clients do — in orders shipped, losses prevented, and hours given back."
          />
          <div className="hidden lg:block">
            <MagneticButton href="/case-studies" variant="secondary" showArrow>
              All case studies
            </MagneticButton>
          </div>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs) => {
            const Trend = cs.metric.direction === "down" ? TrendingDown : TrendingUp;
            return (
              <StaggerItem key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  aria-label={`${cs.industry} case study: ${cs.headline}`}
                  className="group block h-full rounded-3xl outline-none"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-paper-line bg-white p-8 shadow-card transition-all duration-500 ease-out-expo group-hover:-translate-y-1.5 group-hover:shadow-card-hover group-focus-visible:-translate-y-1.5 group-focus-visible:shadow-card-hover group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-paper-line px-3 py-1 text-xs font-medium text-ink-muted">
                        {cs.industry}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-focus-visible:text-accent" />
                    </div>

                    <div className="mt-8 flex items-end gap-2">
                      <span className="font-display text-6xl font-bold leading-none tracking-tight text-accent">
                        {cs.metric.value}
                      </span>
                      <Trend className="mb-1.5 h-6 w-6 text-accent" strokeWidth={2.2} />
                    </div>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink">
                      {cs.metric.label}
                    </p>

                    <p className="mt-6 flex-1 text-sm leading-relaxed text-ink-muted">
                      {cs.summary}
                    </p>

                    <p className="mt-6 border-t border-paper-line pt-5 text-sm font-semibold text-ink">
                      {cs.client}
                    </p>

                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 lg:hidden">
          <MagneticButton href="/case-studies" variant="secondary" showArrow>
            All case studies
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
