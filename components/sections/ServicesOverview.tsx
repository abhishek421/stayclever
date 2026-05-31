import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section id="services" className="relative bg-paper py-24 sm:py-32">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                AI solutions that solve{" "}
                <span className="italic text-accent">real business problems</span>
              </>
            }
            intro="Eight focused capabilities. Each one is judged by a single question: does it move a number that matters to your business?"
          />
          <div className="hidden lg:block">
            <MagneticButton href="/services" variant="secondary" showArrow>
              All services
            </MagneticButton>
          </div>
        </div>

        <Stagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  aria-label={`${s.title} — ${s.proof}`}
                  className="group block h-full rounded-3xl outline-none"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-paper-line bg-white p-6 shadow-card transition-all duration-500 ease-out-expo group-hover:-translate-y-1.5 group-hover:shadow-card-hover group-focus-visible:-translate-y-1.5 group-focus-visible:shadow-card-hover group-focus-visible:ring-2 group-focus-visible:ring-accent group-focus-visible:ring-offset-2">
                    {/* top row: icon + index kicker */}
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-wash text-accent transition-colors duration-500 group-hover:bg-ink group-hover:text-white group-focus-visible:bg-ink group-focus-visible:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-2xl font-bold leading-none text-ink/15">
                        {s.index}
                      </span>
                    </div>

                    {/* title — reserves two lines so rows align */}
                    <h3 className="mt-6 flex min-h-[3.25rem] items-start font-display text-xl font-bold leading-snug tracking-tight text-ink">
                      {s.title}
                    </h3>

                    {/* concrete description, not the tagline */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                      {s.description}
                    </p>

                    {/* footer: proof metric + affordance */}
                    <div className="mt-6 flex items-center justify-between border-t border-paper-line pt-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {s.proof}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent group-focus-visible:text-accent" />
                    </div>

                    {/* hover/focus accent line */}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 lg:hidden">
          <MagneticButton href="/services" variant="secondary" showArrow>
            All services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
