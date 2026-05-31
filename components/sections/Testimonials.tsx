"use client";

import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

export default function Testimonials() {
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

        <Stagger className="mt-16 columns-1 gap-5 md:columns-2 lg:columns-2 [&>*]:mb-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="break-inside-avoid rounded-3xl border border-paper-line bg-white p-8 shadow-card">
                <Quote className="h-7 w-7 text-accent/30" />
                <blockquote className="mt-5 font-display text-xl leading-relaxed text-ink">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4 border-t border-paper-line pt-6">
                  <span className="grain flex h-12 w-12 items-center justify-center rounded-full bg-accent-wash font-display text-sm font-bold text-accent">
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
