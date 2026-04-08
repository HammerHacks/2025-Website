"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Displays a number that animates from 0 to target on scroll.
 *
 * Props:
 *  - target: the final number
 *  - suffix: optional string appended after the number (e.g. "+")
 *  - label: descriptive text below the number
 *  - duration: animation duration in ms (default 1200)
 */

interface CountUpProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export default function CountUp({
  target,
  suffix = "",
  label,
  duration = 1200,
}: CountUpProps) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const value = useCountUp(target, { start: isVisible, duration });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span
        className="text-5xl md:text-6xl font-extrabold"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {value}
        {suffix}
      </span>
      <span className="text-base md:text-lg mt-2 uppercase tracking-wider opacity-80">
        {label}
      </span>
    </div>
  );
}
