import { type ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import TextReveal from "@/components/ui/TextReveal";

export default function PageHero({
  eyebrow,
  titleLines,
  ghost,
  intro,
  children,
}: {
  eyebrow: string;
  titleLines: string[];
  ghost?: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-paper pb-16 pt-36 sm:pt-44">
      {ghost && (
        <p className="ghost-type pointer-events-none absolute inset-x-0 top-24 select-none text-center text-[17vw] leading-none">
          {ghost}
        </p>
      )}
      <div className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] blueprint-grid" />

      <div className="container-shell relative">
        <Reveal>
          <p className="eyebrow mb-6">
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </p>
        </Reveal>
        <h1 className="display max-w-5xl text-[3rem] leading-[0.92] sm:text-7xl lg:text-[5.2rem]">
          <TextReveal lines={titleLines} />
        </h1>
        {intro && (
          <Reveal delay={0.2}>
            <p className="lead mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        )}
        {children && (
          <Reveal delay={0.28}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
