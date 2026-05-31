"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "@/lib/site";
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
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-paper-line/70 py-4 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
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
