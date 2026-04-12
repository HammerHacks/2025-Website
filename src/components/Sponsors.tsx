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
    hammer: "h-34",
    platinum: "h-34",
    titanium: "h-30",
    silver: "h-30",
    aluminum: "h-26",
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

        <div className="flex flex-col gap-12 md:gap-2 mt-10">
          {/* Titanium sponsors: 2 per row capacity, centered */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
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

          {/* Silver sponsors: 3 per row capacity, centered */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <SponsorCard
              name="The Staircase"
              image="/sponsors/theStaircase.jpg"
              tier="silver"
              link="https://staircasehamilton.com/"
            />
          </div>

          {/* Aluminum sponsors: 4 per row capacity, centered */}
          {/*TODO: Update sponsor tiers once we get more sponsors.*/}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
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
    </section>
  );
}