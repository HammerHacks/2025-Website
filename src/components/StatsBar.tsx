"use client";

import CountUp from "@/components/CountUp";

const STATS = [
  { target: 140, suffix: "+", label: "Hackers" },
  { target: 47, suffix: "", label: "Projects" },
  { target: 17, suffix: "", label: "Schools" },
  { target: 40, suffix: "+", label: "Mentors" },
];

/**
 * StatsBar — Horizontal bar with animated counters.
 * Gradient bridges the hero's green hills into the off-white About section.
 */
export default function StatsBar() {
  return (
    <section
      className="w-full py-12 md:py-16"
      style={{
        background: "linear-gradient(180deg, #A8E05F 0%, #c8e89f 40%, #F8F9F0 100%)",
      }}
      aria-label="Event statistics"
    >
      <div
        className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        style={{ color: "var(--navy)" }}
      >
        {STATS.map((stat) => (
          <CountUp
            key={stat.label}
            target={stat.target}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}

