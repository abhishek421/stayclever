"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-colors duration-300";

const variants: Record<Variant, string> = {
  primary:
    "bg-white text-accent px-7 py-3.5 ring-1 ring-inset ring-accent/40 hover:bg-accent hover:text-white hover:ring-accent shadow-card hover:shadow-card-hover",
  secondary:
    "bg-white text-ink px-7 py-3.5 ring-1 ring-inset ring-paper-line hover:ring-ink/30",
  ghost: "text-ink px-2 py-2 hover:text-accent",
};

export default function MagneticButton({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const inner = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          strokeWidth={2}
        />
      )}
    </>
  );

  const content = (
    <span className={`${base} ${variants[variant]} ${className}`}>{inner}</span>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex"
        aria-label={typeof children === "string" ? children : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}
