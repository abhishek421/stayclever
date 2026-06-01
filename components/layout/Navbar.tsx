"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Star } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import Logo from "@/components/layout/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ease-out-expo ${
          scrolled
            ? "border-b border-paper-line bg-white/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-shell flex h-[72px] items-center justify-between">
          <Link href="/" className="relative z-10" aria-label={`${site.name} home`}>
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              // Services gets a dropdown of the individual services.
              if (item.href === "/services") {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        active ? "text-ink" : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full bg-accent-wash"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* dropdown — appears on hover or keyboard focus */}
                    <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 ease-out-expo group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="w-[19rem] rounded-3xl border border-paper-line bg-white p-2 shadow-soft">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services#${s.slug}`}
                            className="flex items-center justify-between gap-3 rounded-2xl px-4 py-2.5 text-sm text-ink/80 transition-colors hover:bg-accent-wash hover:text-accent"
                          >
                            <span>{s.title}</span>
                            <span className="font-display text-xs font-bold text-ink/15">
                              {s.index}
                            </span>
                          </Link>
                        ))}
                        <div className="my-1.5 h-px bg-paper-line" />
                        <Link
                          href="/services#day-with-founder"
                          className="flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent-wash"
                        >
                          <Star className="h-3.5 w-3.5" strokeWidth={2.2} />
                          A Day With the Founder
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    active ? "text-ink" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent-wash"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <MagneticButton href={site.cta.primary.href} variant="primary">
              {site.cta.primary.label}
            </MagneticButton>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper-line bg-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden"
          >
            <div className="container-px mx-auto max-w-8xl border-b border-paper-line bg-white pb-8 pt-2">
              <div className="flex flex-col">
                {site.nav.map((item) => {
                  // Services expands to show the individual services.
                  if (item.href === "/services") {
                    return (
                      <div key={item.href} className="border-b border-paper-line/70 py-4">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="font-display text-2xl text-ink"
                        >
                          {item.label}
                        </Link>
                        <div className="mt-3 flex flex-col gap-1 pl-1">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services#${s.slug}`}
                              onClick={() => setOpen(false)}
                              className="py-1.5 text-base text-ink-muted"
                            >
                              {s.title}
                            </Link>
                          ))}
                          <Link
                            href="/services#day-with-founder"
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-base font-semibold text-accent"
                          >
                            <Star className="h-4 w-4" strokeWidth={2.2} />
                            A Day With the Founder
                          </Link>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-paper-line/70 py-4 font-display text-2xl text-ink"
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col gap-3">
                <MagneticButton href={site.cta.primary.href} variant="primary" className="w-full">
                  {site.cta.primary.label}
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
