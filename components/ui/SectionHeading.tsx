import { Reveal } from "@/components/ui/Reveal";
import { type ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <p className={`eyebrow mb-5 ${isCenter ? "justify-center" : ""}`}>
            <span className="h-px w-6 bg-accent" />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="display text-balance text-4xl sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className={`lead mt-6 ${isCenter ? "mx-auto" : ""}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
