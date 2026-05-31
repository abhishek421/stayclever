"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "0px 0px -20% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1600, bounce: 0 });
  const [reduce, setReduce] = useState(false);

  // SSR / no-JS renders the real final value (never "0"). Once mounted with
  // motion allowed, prime the number to 0 off-screen so the count-up has a
  // start point. Reduced-motion users keep the final value, no animation.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    if (!mq.matches && numRef.current) numRef.current.textContent = "0";
  }, []);

  useEffect(() => {
    if (inView && !reduce) mv.set(to);
  }, [inView, reduce, mv, to]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (numRef.current) numRef.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  return (
    <span ref={wrapRef} className={className}>
      <span ref={numRef}>{to}</span>
      {suffix}
    </span>
  );
}
