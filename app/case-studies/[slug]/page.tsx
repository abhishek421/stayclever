import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { site } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import FinalCTA from "@/components/sections/FinalCTA";
import { ArrowLeft, Target, Lightbulb, Hammer, TrendingUp } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return { title: cs.headline, description: cs.summary };
}

const sectionMeta = [
  { key: "challenge", label: "Challenge", Icon: Target },
  { key: "approach", label: "Approach", Icon: Lightbulb },
  { key: "implementation", label: "Implementation", Icon: Hammer },
  { key: "results", label: "Results", Icon: TrendingUp },
] as const;

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-paper pb-20 pt-36 sm:pt-44">
        <p className="ghost-type pointer-events-none absolute -right-6 top-20 text-[16vw] leading-none">
          {cs.metric.value}
        </p>
        <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] blueprint-grid" />
        <div className="container-shell relative">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <Reveal>
            <div className="mt-8 flex items-center gap-3 text-xs">
              <span className="rounded-full bg-accent-wash px-3 py-1 font-semibold text-accent">
                {cs.industry}
              </span>
              <span className="text-ink-muted">{cs.client}</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="display mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">
              {cs.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">{cs.summary}</p>
          </Reveal>
        </div>
      </section>

      {/* KPI blocks */}
      <section className="border-b border-paper-line bg-paper">
        <div className="container-shell">
          <Stagger className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
            {cs.kpis.map((k) => (
              <StaggerItem key={k.label} className="bg-paper py-10 text-center">
                <div className="font-display text-5xl font-bold tracking-tight text-ink lg:text-6xl">
                  {k.value}
                </div>
                <p className="mt-2 text-sm text-ink-muted">{k.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* narrative */}
      <section className="bg-paper py-20 sm:py-28">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl space-y-14">
            {sectionMeta.map(({ key, label, Icon }) => (
              <Reveal key={key}>
                <article>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-wash text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                      {label}
                    </h2>
                  </div>
                  <p className="mt-5 text-lg leading-relaxed text-ink/80">
                    {cs[key]}
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-4xl border border-paper-line bg-paper-warm p-8 text-center sm:p-12">
                <p className="font-display text-2xl italic text-ink sm:text-3xl">
                  Want results like {cs.client}&apos;s?
                </p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <MagneticButton href={site.cta.primary.href} variant="primary">
                    {site.cta.primary.label}
                  </MagneticButton>
                  <MagneticButton href="/case-studies" variant="secondary" showArrow={false}>
                    More case studies
                  </MagneticButton>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
