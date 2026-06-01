import { founderDay } from "@/lib/data";
import { site } from "@/lib/site";
import MagneticButton from "@/components/ui/MagneticButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Check, Clock, FileText } from "lucide-react";

/**
 * Signature offer block — the founder-led discovery day.
 * Styled as a light, premium panel that matches the rest of the site, so it
 * reads as THE StayClever experience. Reused on the services page.
 */
export default function FounderDay({ id = "day-with-founder" }: { id?: string }) {
  return (
    <section id={id} className="relative overflow-hidden bg-paper py-24 scroll-mt-24 sm:py-32">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-paper-line bg-white px-6 py-16 shadow-soft sm:px-12 sm:py-20 lg:px-16">
          {/* ghost type + grid wash, matched to the rest of the site */}
          <p className="ghost-type pointer-events-none absolute inset-x-0 -top-2 select-none text-center text-[16vw] leading-none text-accent/[0.05]">
            ONE DAY
          </p>
          <div className="pointer-events-none absolute inset-0 opacity-40 blueprint-grid" />

          <div className="relative">
            {/* header */}
            <div className="max-w-3xl">
              <Reveal delay={0.05}>
                <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-[3.6rem]">
                  {founderDay.name}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-4 font-display text-xl italic text-accent">
                  {founderDay.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                  {founderDay.intro}
                </p>
              </Reveal>
            </div>

            {/* the day, step by step */}
            <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {founderDay.steps.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="flex h-full flex-col rounded-3xl border border-paper-line bg-paper-warm p-6">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      <span className="font-display text-lg font-bold text-ink/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step.time}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            {/* deliverable + what you get */}
            <div className="mt-10 grid gap-5 lg:grid-cols-12">
              {/* deliverable callout */}
              <Reveal className="lg:col-span-5">
                <div className="flex h-full flex-col rounded-3xl border border-accent/20 bg-accent-wash p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-white">
                    <FileText className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink">
                    {founderDay.deliverable.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {founderDay.deliverable.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-paper-line pt-5">
                    <Clock className="h-5 w-5 text-accent" strokeWidth={2} />
                    <span className="text-sm text-ink-muted">
                      <span className="font-display text-xl font-bold text-accent">
                        {founderDay.deliverable.turnaround}
                      </span>{" "}
                      from the day to your written plan
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* highlights */}
              <Reveal delay={0.05} className="lg:col-span-7">
                <div className="flex h-full flex-col rounded-3xl border border-paper-line bg-white p-7">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    What you get
                  </h3>
                  <ul className="mt-5 grid flex-1 gap-3 sm:grid-cols-2">
                    {founderDay.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-ink">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 rounded-2xl border border-paper-line bg-paper-warm p-4 text-sm leading-relaxed text-ink-muted">
                    {founderDay.pricing}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* CTA */}
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <MagneticButton href={site.cta.primary.href} variant="primary">
                  Book a Day With the Founder
                </MagneticButton>
                <MagneticButton href="/case-studies" variant="ghost" showArrow>
                  See the results
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
