"use client";

import Image from "next/image";
import { HERO_CONTENT } from "@/data/hero-content";
import { REGISTER_URL } from "@/data/nav-links";
import GearFlower from "@/components/GearFlower";

/** Color palette for the gear-flowers in the hero scene */
/** TODO: Figure out which gear flowers should be visible on mobile */
const GEAR_FLOWERS = [
  { color: "#53C2EC", height: 150, left: "8%", bottom: "38%", mobileVisible: false },
  { color: "#f4802e", height: 120, left: "22%", bottom: "42%", mobileVisible: false },
  { color: "#E83B6E", height: 100, left: "34%", bottom: "12%", mobileVisible: false },
  { color: "#3576BA", height: 140, left: "58%", bottom: "12%", mobileVisible: false },
  { color: "#E83B6E", height: 110, left: "68%", bottom: "44%", mobileVisible: false },
  { color: "#F5C623", height: 130, left: "82%", bottom: "36%", mobileVisible: false },
] as const;

export default function Hero() {
  return (
    <section
      className="hero-section relative min-h-[700px] md:min-h-screen flex flex-col items-center justify-start pt-20 md:pt-24 overflow-hidden bg-white"
      id="hero"
    >
      {/* ─── Content ─── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Logo */}
        <div className="hero-stagger hero-stagger-1 mb-4">
          <Image
            src="/logo.webp"
            alt="HammerHacks Logo"
            width={220}
            height={220}
            priority
            className="w-40 h-40 md:w-56 md:h-56 transition-transform duration-300 hover:scale-105 cursor-default select-none drop-shadow-lg"
          />
        </div>

        {/* Headline */}
        <h1
          className="hero-stagger hero-stagger-2 text-5xl md:text-7xl font-extrabold tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--orange)",
          }}
        >
          {HERO_CONTENT.headline}
        </h1>

        {/* Subheadline */}
        <p
          className="hero-stagger hero-stagger-3 mt-4 text-xl md:text-2xl font-semibold"
          style={{ color: "var(--navy)" }}
        >
          {HERO_CONTENT.subheadline}
        </p>

        {/* Season / Location */}
        <p
          className="hero-stagger hero-stagger-4 mt-2 text-base md:text-lg tracking-wide"
          style={{ color: "var(--navy)", opacity: 0.7 }}
        >
          {HERO_CONTENT.season} · {HERO_CONTENT.location}
        </p>

        {/* CTA Buttons */}
        <div className="hero-stagger hero-stagger-5 flex flex-col sm:flex-row gap-4 mt-8">
          <a href={REGISTER_URL} className="btn-primary text-lg md:text-xl">
            {HERO_CONTENT.ctaText}
          </a>
          <a
            href="#recap"
            className="btn-secondary text-lg md:text-xl text-navy"
          >
            {HERO_CONTENT.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ─── Rolling Hills + Gear Flowers ─── */}
      <div className="absolute bottom-0 left-0 w-full hero-hills" style={{ height: "55%" }}>
        {/* Gear flowers — positioned absolutely within the hills container */}
        {GEAR_FLOWERS.map((flower, i) => (
          <div
            key={i}
            className={`gear-flower-animate absolute ${!flower.mobileVisible ? "hidden md:block" : ""}`}
            style={{
              left: flower.left,
              bottom: flower.bottom,
              zIndex: 10,
            }}
          >
            <GearFlower color={flower.color} height={flower.height} />
          </div>
        ))}

        {/* Hill layers (SVG) — Desktop */}
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full hidden md:block"
          aria-hidden="true"
        >
          {/* Back hill — darkest green */}
          <path
            d="M0,500 L0,280 Q200,140 450,220 Q700,320 900,200 Q1100,100 1300,180 Q1400,220 1440,200 L1440,500 Z"
            fill="#4CBB17"
          />

          {/* Middle hill — medium green */}
          <path
            d="M0,500 L0,340 Q150,220 380,290 Q600,370 800,260 Q1000,170 1200,250 Q1380,320 1440,280 L1440,500 Z"
            fill="#7EC850"
          />

          {/* Front hill — lightest green */}
          <path
            d="M0,500 L0,380 Q250,290 480,350 Q700,410 920,330 Q1150,260 1350,340 Q1420,370 1440,350 L1440,500 Z"
            fill="#A8E05F"
          />

          {/* Grass blades (small decorative lines) - Moved here so they render on top of the hills */}
          <g stroke="#3a8c10" strokeWidth="2" opacity="0.4">
            <line x1="80" y1="340" x2="75" y2="310" />
            <line x1="90" y1="340" x2="92" y2="308" />
            <line x1="350" y1="370" x2="345" y2="340" />
            <line x1="360" y1="372" x2="363" y2="338" />
            <line x1="1100" y1="330" x2="1095" y2="310" />
            <line x1="1110" y1="332" x2="1113" y2="306" />
          </g>
        </svg>

        {/* Hill layers (SVG) — Mobile: flatter slopes to avoid obscuring content */}
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full md:hidden"
          aria-hidden="true"
        >
          {/* Back hill — darkest green (Steeper) */}
          <path
            d="M0,500 L0,300 Q360,200 720,280 Q1080,350 1440,250 L1440,500 Z"
            fill="#4CBB17"
          />

          {/* Middle hill — medium green (Steeper) */}
          <path
            d="M0,500 L0,350 Q360,280 720,330 Q1080,380 1440,310 L1440,500 Z"
            fill="#7EC850"
          />

          {/* Front hill — lightest green (Steeper) */}
          <path
            d="M0,500 L0,400 Q360,340 720,390 Q1080,440 1440,370 L1440,500 Z"
            fill="#A8E05F"
          />
        </svg>
      </div>
    </section>
  );
}
