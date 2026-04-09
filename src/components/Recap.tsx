"use client";

import { LEFT_STATS, RIGHT_STATS, RECAP_VIDEO_URL } from "@/data/recap-stats";
import Carousel from "@/components/Carousel";
import HillDivider from "@/components/HillDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Recap() {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      {/* Green-to-navy hill divider */}
      <HillDivider variant="navy-to-white" />

      <section
        className="relative pt-16 pb-10 text-white overflow-hidden"
        style={{ background: "var(--navy)" }}
        id="recap"
      >
        {/* Underwater Decor */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-black/20 to-transparent" />

          {/* Bubbles */}
          {[...Array(20)].map((_, i) => {
            const size = 10 + (i * 7) % 25;
            const left = (i * 17) % 100;
            const delay = (i * 3.1) % 15;
            const duration = 12 + (i * 4.3) % 12;
            return (
              <div
                key={i}
                className="ocean-bubble"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${left}%`,
                  bottom: "-60px",
                  animation: `bubbleRise ${duration}s ease-in infinite ${delay}s`
                }}
              />
            );
          })}
        </div>

        <div
          ref={ref}
          className={`container relative z-10 mx-auto px-4 max-w-6xl scroll-reveal ${isVisible ? "visible" : ""}`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: "var(--font-display)" }}
          >
            A Dive into HammerHacks 2024...
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
            <div className="flex flex-row lg:flex-col justify-center gap-16 lg:gap-12 text-center">
              {LEFT_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className="text-8xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xl mt-2 opacity-80">{stat.label}</span>
                </div>
              ))}
            </div>

            <div
              className="w-full max-w-[560px] aspect-video rounded-xl overflow-hidden relative z-10"
              style={{
                boxShadow: "0 0 0 3px #BEDBFF, 0 8px 40px rgba(0,0,0,0.3)",
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={RECAP_VIDEO_URL}
                title="HammerHacks Recap Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="border-0 bg-black"
              ></iframe>
            </div>

            <div className="flex flex-row lg:flex-col justify-center gap-16 lg:gap-24 text-center">
              {RIGHT_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span
                    className="text-8xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xl mt-2 opacity-80">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Carousel />
      </section>
      <HillDivider variant="bottom-recap" flip={true} />
    </>
  );
}
