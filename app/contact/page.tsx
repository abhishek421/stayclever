import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";
import ContactForm from "@/components/sections/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Book Your Free Call",
  description:
    "Tell us about the task, cost, or growth challenge on your mind, and book a free call — a clear, honest view of what's worth doing and what it's worth.",
};

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

          {/* contact details */}
          <div className="space-y-6 lg:col-span-5">
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
