"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

type Status = "idle" | "submitting" | "done";

const fields = [
  { name: "name", label: "Full name", type: "text", placeholder: "Jane Cooper", required: true, autoComplete: "name" },
  { name: "company", label: "Company", type: "text", placeholder: "Acme Inc.", required: true, autoComplete: "organization" },
  { name: "email", label: "Work email", type: "email", placeholder: "jane@acme.com", required: true, autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", placeholder: "+1 (555) 000-0000", required: false, autoComplete: "tel" },
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("submitting");
    // Simulated submission — wire to your endpoint / CRM here.
    setTimeout(() => setStatus("done"), 1100);
  };

  return (
    <div className="flex h-full flex-col rounded-4xl border border-paper-line bg-white p-8 shadow-soft sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex min-h-[420px] flex-1 flex-col items-center justify-center text-center"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-wash text-accent">
              <Check className="h-8 w-8" strokeWidth={2.5} />
            </span>
            <h3 className="mt-6 font-display text-3xl font-bold text-ink">
              Thanks — we&apos;re on it.
            </h3>
            <p className="mt-3 max-w-sm text-ink-muted">
              We&apos;ll review your details and reply within one business day to
              set up your call.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col space-y-5"
          >
            <div className="mb-6">
              <h2 className="font-display text-xl font-bold text-ink">
                Book a call
              </h2>
              <p className="mt-1 text-sm text-ink-muted">
                A few details and a real human will be in touch.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="mb-2 block text-sm font-medium text-ink">
                    {f.label}
                    {f.required ? (
                      <>
                        <span aria-hidden className="text-accent"> *</span>
                        <span className="sr-only"> (required)</span>
                      </>
                    ) : (
                      <span className="font-normal text-ink-muted"> (optional)</span>
                    )}
                  </span>
                  <input
                    type={f.type}
                    name={f.name}
                    required={f.required}
                    autoComplete={f.autoComplete}
                    placeholder={f.placeholder}
                    className="w-full rounded-2xl border border-paper-line bg-paper-warm px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink-muted/70 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
                  />
                </label>
              ))}
            </div>

            <label className="flex flex-1 flex-col">
              <span className="mb-2 block text-sm font-medium text-ink">
                What are you trying to solve?
                <span aria-hidden className="text-accent"> *</span>
                <span className="sr-only"> (required)</span>
              </span>
              <textarea
                name="message"
                required
                placeholder="Tell us about the task, cost, or growth challenge on your mind…"
                className="min-h-[7rem] w-full flex-1 resize-none rounded-2xl border border-paper-line bg-paper-warm px-4 py-3 text-sm text-ink outline-none transition-all placeholder:text-ink-muted/70 focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-accent ring-1 ring-inset ring-accent/40 shadow-card transition-colors duration-300 hover:bg-accent hover:text-white hover:ring-accent disabled:opacity-70"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Book my call
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-ink-muted">
              No spam. No obligation. A real human replies within one business day.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
