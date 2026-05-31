import Link from "next/link";
import { site } from "@/lib/site";
import { services } from "@/lib/data";
import Logo from "@/components/layout/Logo";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper-line bg-paper-warm">
      {/* giant ghost wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
        <p className="ghost-type whitespace-nowrap text-center text-[22vw] leading-none">
          StayClever
        </p>
      </div>

      <div className="container-shell relative">
        {/* CTA band */}
        <div className="grid gap-8 border-b border-paper-line py-16 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4">Let&apos;s build something that pays off</p>
            <h2 className="display text-4xl sm:text-5xl">
              Stay curious.
              <br />
              <span className="italic text-accent">Stay clever.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <MagneticButton href={site.cta.primary.href} variant="primary">
              {site.cta.primary.label}
            </MagneticButton>
            <MagneticButton href={site.cta.secondary.href} variant="secondary" showArrow={false}>
              {site.cta.secondary.label}
            </MagneticButton>
          </div>
        </div>

        {/* link columns */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              {site.description}
            </p>
            <div className="mt-6 space-y-1 text-sm text-ink-muted">
              <p>{site.location}</p>
              <a className="link-underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-ink/80 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-ink/80 transition-colors hover:text-accent"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              Connect
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="inline-flex items-center gap-1 text-ink/80 transition-colors hover:text-accent"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper-line py-8 text-xs text-ink-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-4">
            <Link href="#" className="hover:text-ink">Privacy</Link>
            <Link href="#" className="hover:text-ink">Terms</Link>
            <span>Built with intent, not hype.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
