"use client";

import { SITE_CONFIG } from "@/data/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HillDivider from "./HillDivider";

function SponsorCard({
  name,
  image,
  tier,
  link,
}: {
  name: string;
  image: string;
  tier: "hammer" | "platinum" | "titanium" | "silver" | "aluminum";
  link: string;
}) {
  const tierStyles = {
    hammer: "h-40",
    platinum: "h-40",
    titanium: "h-36",
    silver: "h-34",
    aluminum: "h-32",
  }[tier];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`card p-6 flex items-center justify-center ${tierStyles} cursor-pointer group`}
      style={{ borderColor: "transparent" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--orange)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "transparent";
      }}
    >
      <img
        src={image}
        alt={name}
        className="object-contain max-h-full max-w-full opacity-85 group-hover:opacity-100 transition-opacity"
      />
    </a>
  );
}

export default function SponsorsSection() {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="sponsors"
      className={`py-16 md:py-24 px-6 md:px-12 scroll-reveal ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          style={{
            color: "var(--navy)",
            fontFamily: "var(--font-display)",
          }}
        >
          Our Sponsors
        </h2>

        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-2">
          Become a part of Hamilton&apos;s largest high school hackathon. Your
          support helps inspire the next generation of innovators and leaders in
          technology.
        </p>

        <p className="text-base md:text-lg text-gray-500 text-center max-w-2xl mx-auto">
          Looking to make an impact? Email us at{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="font-semibold transition-colors"
            style={{ color: "var(--orange)" }}
          >
            {SITE_CONFIG.email}
          </a>
        </p>

        <div className="flex flex-col gap-8 mt-12">
          {/* Titanium sponsors */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <SponsorCard
              name="Invest In Hamilton"
              image="/sponsors/investinhamilton.jpg"
              tier="titanium"
              link="https://www.investinhamilton.ca/"
            />
            <SponsorCard
              name="Yubico"
              image="/sponsors/yubico.png"
              tier="titanium"
              link="https://www.yubico.com/"
            />
          </div>

          {/* Silver sponsors */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {/* Placeholder for future sponsors */}
          </div>

          {/* Aluminum sponsors */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <SponsorCard
              name="Best Buy"
              image="/sponsors/bestbuy.png"
              tier="aluminum"
              link="https://www.bestbuy.ca/"
            />
            <SponsorCard
              name="Barangas On The Beach"
              image="/sponsors/barangas.png"
              tier="aluminum"
              link="https://barangas.ca/"
            />
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="text-center mt-12">
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Sponsorship%20Inquiry%20-%20HammerHacks`}
            className="btn-secondary text-base"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}