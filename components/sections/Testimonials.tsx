import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  // Duplicate the set so the -50% marquee loops seamlessly.
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative bg-paper-warm py-24 sm:py-32">
      <div className="container-shell">
        <SectionHeading
          align="center"
          eyebrow="In their words"
          title={
            <>
              Founders who&apos;d <span className="italic text-accent">work with us again</span>
            </>
          }
          intro="The work speaks in numbers — but the trust is what makes the numbers possible."
        />
      </div>

      {/* Auto-scrolling carousel — drifts left→right, pauses on hover.
          Full-bleed with a soft edge fade. Honors reduced-motion. */}
      <div className="group relative mt-16 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex w-max animate-marquee gap-5 px-6 [animation-duration:55s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {loop.map((t, i) => (
            <figure
              key={`${t.name}-${i}`}
              aria-hidden={i >= testimonials.length}
              className="flex w-[320px] shrink-0 flex-col rounded-3xl border border-paper-line bg-white p-8 shadow-card sm:w-[400px] lg:w-[440px]"
            >
              <Quote className="h-7 w-7 text-accent/30" />
              <blockquote className="mt-5 flex-1 font-display text-lg leading-relaxed text-ink sm:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-paper-line pt-6">
                <span className="grain flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-wash font-display text-sm font-bold text-accent">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-ink-muted">
                    {t.role}, {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
