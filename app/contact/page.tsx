import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone, Gauge, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get Your Free AI Plan",
  description:
    "Tell us about the task, cost, or growth challenge on your mind, and we'll send back a free AI plan — a clear, honest view of what's worth doing and what it's worth.",
};

const assessment = [
  "Where AI can save you the most time or money",
  "A short, ranked list of ideas to start with",
  "An honest read on whether your data is ready",
  "Simple guidance on what to build vs. buy",
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-paper pb-24 pt-36 sm:pt-44">
      <p className="ghost-type pointer-events-none absolute inset-x-0 top-24 select-none text-center text-[17vw] leading-none">
        CONNECT
      </p>
      <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] blueprint-grid" />

      <div className="container-shell relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-6">
              <span className="h-px w-6 bg-accent" />
              Contact
            </p>
          </Reveal>
          <h1 className="display text-[3rem] leading-[0.92] sm:text-7xl lg:text-[5rem]">
            <TextReveal lines={["Let's talk about", "what's slowing", "you down"]} />
          </h1>
          <Reveal delay={0.25}>
            <p className="lead mt-8 max-w-2xl">
              Tell us about the task, cost, or growth challenge on your mind.
              We&apos;ll come back with a free AI plan — and an honest view of what&apos;s
              worth doing.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* assessment teaser + details */}
          <div className="space-y-6 lg:col-span-5">
            <div className="relative overflow-hidden rounded-4xl border border-paper-line bg-ink p-8 text-white shadow-soft sm:p-10">
              <div className="pointer-events-none absolute inset-0 opacity-[0.07] blueprint-grid" />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-soft">
                  <Gauge className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold">
                  Your Free AI Plan
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Every conversation starts with a free, no-pressure plan.
                  You&apos;ll come away knowing:
                </p>
                <ul className="mt-6 space-y-3">
                  {assessment.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="font-display text-3xl font-bold text-accent-soft">
                    48h
                  </span>
                  <span className="text-sm text-white/70">
                    typical turnaround from first call to your AI plan
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-paper-line bg-white p-8 shadow-card">
              <h3 className="font-display text-lg font-bold text-ink">Other ways to reach us</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash text-accent">
                    <Mail className="h-4 w-4" />
                  </span>
                  <a href={`mailto:${site.email}`} className="link-underline text-ink">
                    {site.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash text-accent">
                    <Phone className="h-4 w-4" />
                  </span>
                  <a href={`tel:${site.phone}`} className="link-underline text-ink">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash text-accent">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-ink">{site.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
