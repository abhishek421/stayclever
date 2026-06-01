import Link from "next/link";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function ServicesOverview() {
  // Duplicate the set so the -50% marquee loops seamlessly.
  const loop = [...services, ...services];

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
            intro="Five focused ways we put AI to work. Each one is judged by a single question: does it move a number that matters to your business?"
          />
          <div className="hidden lg:block">
            <MagneticButton href="/services" variant="secondary" showArrow>
              All services
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Auto-scrolling carousel — drifts left→right, pauses on hover.
          Full-bleed with a soft edge fade. Honors reduced-motion. */}
      <div className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 px-6 [animation-duration:55s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={`${s.slug}-${i}`}
                className="w-[300px] shrink-0 sm:w-[340px] lg:w-[360px]"
                aria-hidden={i >= services.length}
              >
                <Link
                  href={`/services#${s.slug}`}
                  aria-label={`${s.title} — ${s.proof}`}
                  tabIndex={i >= services.length ? -1 : undefined}
                  className="group/card block h-full rounded-3xl outline-none"
                >
                  <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-paper-line bg-white p-6 shadow-card transition-all duration-500 ease-out-expo group-hover/card:-translate-y-1.5 group-hover/card:shadow-card-hover group-focus-visible/card:-translate-y-1.5 group-focus-visible/card:shadow-card-hover group-focus-visible/card:ring-2 group-focus-visible/card:ring-accent group-focus-visible/card:ring-offset-2">
                    {/* top row: icon + index kicker */}
                    <div className="flex items-start justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-wash text-accent transition-colors duration-500 group-hover/card:bg-ink group-hover/card:text-white group-focus-visible/card:bg-ink group-focus-visible/card:text-white">
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
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all duration-300 group-hover/card:-translate-y-0.5 group-hover/card:translate-x-0.5 group-hover/card:text-accent group-focus-visible/card:text-accent" />
                    </div>

                    {/* hover/focus accent line */}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out-expo group-hover/card:scale-x-100 group-focus-visible/card:scale-x-100" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-shell mt-10 lg:hidden">
        <MagneticButton href="/services" variant="secondary" showArrow>
          All services
        </MagneticButton>
      </div>
    </section>
  );
}
