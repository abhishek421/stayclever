import type { Metadata } from "next";
import { values, timeline } from "@/lib/data";
import { site } from "@/lib/site";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Collaboration from "@/components/illustrations/Collaboration";
import FinalCTA from "@/components/sections/FinalCTA";
import { Compass, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Practical AI Without the Jargon",
  description:
    "StayClever is an AI consulting and automation studio built on a simple belief: businesses need fewer wasted hours, not more AI hype. Meet the team behind the results.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        ghost="STORY"
        titleLines={["Built for results,", "not hype"]}
        intro="StayClever is an AI consulting and automation studio. We turn AI from a buzzword into real, measurable results for your business — less wasted time, lower costs, and steady growth."
      >
        <MagneticButton href={site.cta.primary.href} variant="primary">
          {site.cta.primary.label}
        </MagneticButton>
      </PageHero>

      {/* Story */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={
                <>
                  Born from a frustration with{" "}
                  <span className="italic text-accent">AI theatre</span>
                </>
              }
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
              <p>
                We started StayClever after watching too many businesses buy AI
                they couldn&apos;t actually use — slick demos that never touched real
                work or moved a real number.
              </p>
              <p>
                So we built the opposite kind of company. We start with how your
                business runs, find the work that&apos;s quietly costing you, and
                remove it with the smallest amount of AI that does the job. Then
                we measure it, and build on what works.
              </p>
              <p>
                Today we work with startups, small businesses, and D2C brands
                across eight industries — and we still judge ourselves on one
                thing: results we can put numbers to.
              </p>
            </div>
          </div>
          <Reveal>
            <div className="rounded-4xl border border-paper-line bg-paper-warm p-8 shadow-soft">
              <Collaboration className="h-auto w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-paper-warm py-20 sm:py-24">
        <div className="container-shell">
          <Stagger className="grid gap-5 lg:grid-cols-2">
            {[
              {
                Icon: Compass,
                label: "Mission",
                text: "Help startups, small businesses, and D2C brands use AI to automate work, save time, cut costs, and grow — practically, and in ways you can measure.",
              },
              {
                Icon: Eye,
                label: "Vision",
                text: "A world where every business — not just the tech giants — has an AI advantage they own, understand, and can grow on their own terms.",
              },
            ].map(({ Icon, label, text }) => (
              <StaggerItem key={label}>
                <div className="h-full rounded-4xl border border-paper-line bg-white p-9 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{label}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink/75">{text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            align="center"
            eyebrow="What we believe"
            title={<>Values that <span className="italic text-accent">shape the work</span></>}
          />
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="flex h-full flex-col rounded-3xl border border-paper-line bg-white p-7 shadow-card">
                  <span className="font-display text-4xl font-bold text-accent/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper-warm py-20 sm:py-28">
        <div className="container-shell">
          <SectionHeading
            eyebrow="The journey"
            title={<>From belief to <span className="italic text-accent">proof</span></>}
          />
          <div className="relative mt-16">
            <div className="absolute left-[7px] top-2 h-full w-px bg-paper-line lg:left-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year}>
                  <div
                    className={`relative grid gap-4 pl-10 lg:grid-cols-2 lg:gap-12 lg:pl-0 ${
                      i % 2 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <span className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-white lg:left-1/2 lg:-translate-x-1/2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </span>
                    <div className={`lg:[direction:ltr] ${i % 2 ? "lg:pl-12 lg:text-left" : "lg:pr-12 lg:text-right"}`}>
                      <span className="font-display text-5xl font-bold text-accent/20">{t.year}</span>
                      <h3 className="mt-1 font-display text-2xl font-bold text-ink">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.text}</p>
                    </div>
                    <div />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
