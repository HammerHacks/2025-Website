"use client";

import { SCHEDULE_ITEMS } from "@/data/schedule-items";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ScheduleCard({
  item,
  index,
}: {
  item: (typeof SCHEDULE_ITEMS)[number];
  index: number;
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <div
      ref={ref}
      className={`scroll-reveal flex gap-4 md:gap-6 items-start ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center shrink-0">
        {/* Gear-shaped dot */}
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0"
          style={{
            background: index % 2 === 0 ? "var(--orange)" : "var(--navy)",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 md:w-6 md:h-6"
            fill="white"
            aria-hidden="true"
          >
            <path d="M12,2 L13.5,4.5 L16,4 L15.5,6.5 L18,8 L15.5,9.5 L16,12 L13.5,11.5 L12,14 L10.5,11.5 L8,12 L8.5,9.5 L6,8 L8.5,6.5 L8,4 L10.5,4.5 Z" />
            <circle cx="12" cy="8" r="2.5" fill="currentColor" opacity="0.3" />
          </svg>
        </div>

        {/* Connector line (not on last item) */}
        {index < SCHEDULE_ITEMS.length - 1 && (
          <div
            className="w-0.5 flex-1 min-h-[40px]"
            style={{ background: "var(--navy)", opacity: 0.15 }}
          />
        )}
      </div>

      {/* Content card */}
      <div className="card mb-4 flex-1 group hover:border-orange transition-colors">
        <span
          className="inline-block text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2"
          style={{
            background: index % 2 === 0 ? "var(--orange)" : "var(--navy)",
            color: "white",
            fontFamily: "var(--font-display)",
          }}
        >
          {item.time}
        </span>
        <h3
          className="text-lg md:text-xl font-bold mt-1"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-display)",
          }}
        >
          {item.title}
        </h3>
        <p className="text-gray-600 mt-1 text-sm md:text-base">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-display)",
          }}
        >
          Event Schedule
        </h2>

        <div className="flex flex-col">
          {SCHEDULE_ITEMS.map((item, i) => (
            <ScheduleCard key={item.time} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
