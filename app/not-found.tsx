import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";
import Robot from "@/components/illustrations/Robot";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper pt-24">
      <p className="ghost-type pointer-events-none absolute inset-x-0 top-1/4 select-none text-center text-[28vw] leading-none">
        404
      </p>
      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-5">
            <span className="h-px w-6 bg-accent" />
            Lost the thread
          </p>
          <h1 className="display text-5xl sm:text-6xl lg:text-7xl">
            This page took
            <br />
            <span className="italic text-accent">an unplanned detour.</span>
          </h1>
          <p className="lead mt-6 max-w-md">
            Even the smartest systems hit a dead end now and then. Let&apos;s get you
            back to something useful.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="/" variant="primary">
              Back home
            </MagneticButton>
            <MagneticButton href="/services" variant="secondary" showArrow={false}>
              Browse services
            </MagneticButton>
          </div>
        </div>
        <div className="relative mx-auto w-[60%] max-w-xs animate-float-slow lg:w-[72%]">
          <Robot className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
