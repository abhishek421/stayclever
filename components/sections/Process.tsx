"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

// useLayoutEffect on the client, useEffect on the server (avoids SSR warning).
const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const lastStep = useRef(-1);

  // `enhanced` gates the pinned horizontal experience. It's false on first
  // paint, on mobile, and for reduced-motion users — all of whom get the
  // static grid fallback that shows every step.
  const [enhanced, setEnhanced] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnhanced(wide.matches && !reduce.matches);
    update();
    wide.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useIso(() => {
    if (!enhanced) return;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    gsap.registerPlugin(ScrollTrigger);
    // Function-based values are re-evaluated on every refresh/resize, so the
    // travel distance always matches the current layout.
    const dist = () => Math.max(0, track.scrollWidth - section.clientWidth);

    const tween = gsap.to(track, {
      x: () => -dist(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + dist(),
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (fillRef.current) {
            fillRef.current.style.transform = `scaleX(${self.progress})`;
          }
          const idx = Math.min(
            processSteps.length - 1,
            Math.floor(self.progress * processSteps.length)
          );
          if (idx !== lastStep.current) {
            lastStep.current = idx;
            setActiveStep(idx);
          }
        },
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: "transform" });
    };
  }, [enhanced]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`relative bg-paper ${
        enhanced
          ? "overflow-hidden lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0"
          : "py-24 sm:py-32"
      }`}
    >
      <div className="container-shell">
        <Reveal>
          <p className="eyebrow mb-5">
            <span className="h-px w-6 bg-accent" />
            How we work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display max-w-2xl text-4xl sm:text-5xl lg:text-[3.4rem]">
            A clear path from{" "}
            <span className="italic text-accent">problem to results</span>
          </h2>
        </Reveal>

        {/* progress rail — only while pinned */}
        {enhanced && (
          <div className="mt-9 hidden max-w-2xl lg:block" aria-hidden>
            <div className="flex items-center justify-between text-sm">
              {processSteps.map((s, i) => (
                <span
                  key={s.no}
                  className={`font-medium transition-colors duration-300 ${
                    i <= activeStep ? "text-ink" : "text-ink-muted/60"
                  }`}
                >
                  <span className="mr-1.5 font-display text-accent">{s.no}</span>
                  {s.title}
                </span>
              ))}
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-paper-line">
              <div
                ref={fillRef}
                className="h-full w-full origin-left scale-x-0 rounded-full bg-accent"
              />
            </div>
          </div>
        )}
      </div>

      {/* Steps: horizontal track when enhanced, responsive grid otherwise */}
      <div
        ref={trackRef}
        className={
          enhanced
            ? "mt-12 flex flex-row gap-8 pb-16 pr-16 pl-[max(4rem,calc((100vw-88rem)/2+4rem))]"
            : "container-px mx-auto mt-12 grid w-full max-w-8xl grid-cols-1 gap-6 sm:grid-cols-2"
        }
      >
        {processSteps.map((step, i) => (
          <div
            key={step.no}
            className={`relative rounded-4xl border border-paper-line bg-white p-8 shadow-card sm:p-10 ${
              enhanced ? "shrink-0 lg:w-[460px]" : "w-full"
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="font-display text-6xl font-bold leading-none text-accent/15 sm:text-7xl">
                {step.no}
              </span>
              <span className="mt-3 h-px flex-1 bg-paper-line" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {step.title}
            </h3>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
              {step.description}
            </p>

            {i < processSteps.length - 1 && (
              <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                <ArrowRight className="h-3.5 w-3.5" />
                Next: {processSteps[i + 1].title}
              </div>
            )}
          </div>
        ))}

        {/* closing beat — now visible on every layout */}
        <div
          className={`flex flex-col justify-center ${
            enhanced ? "shrink-0 pr-16 lg:w-[300px]" : "w-full sm:col-span-2"
          }`}
        >
          <p className="font-display text-2xl italic text-ink-muted">
            …then we measure, refine, and do it again.
          </p>
        </div>
      </div>
    </section>
  );
}
