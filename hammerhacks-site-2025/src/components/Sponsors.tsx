"use client";

import { SITE_CONFIG } from "../data/site-config";

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
    hammer: "h-64",
    platinum: "h-48",
    titanium: "h-32",
    silver: "h-24",
    aluminum: "h-16",
  }[tier];

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center ${tierStyles} ${tier} cursor-pointer`}
    >
      <img
        src={image}
        alt={name}
        className="object-contain max-h-full max-w-full opacity-90 hover:opacity-100 transition-opacity"
      />
    </a>
  );
}

//TODO: Use real sponsor info when available
export default function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="flex justify-center items-center px-6 md:px-12 w-screen"
    >
      <div className="w-full p-8">
        <div className="py-4">
          <h2 className="text-5xl font-bold mb-6 text-center text-blue-900">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-700 text-center max-w-2xl mx-auto mb-2">
            Become a part of Hamilton&apos;s largest high school hackathon. Your
            support helps inspire the next generation of innovators and leaders in
            technology.
          </p>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Looking to make an impact? Email us at{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="underline text-orange-500"
            >
              {SITE_CONFIG.email}
            </a>
          </p>

          <div className="flex flex-col gap-12 md:gap-6">
            {/* Gold sponsors: 2 per row capacity, centered */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">

            </div>

            {/* Silver sponsors: 3 per row capacity, centered */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">

            </div>

            {/* Aluminum sponsors: 4 per row capacity, centered */}
            {/*TODO: Update sponsor tiers once we get more sponsors. Best Buy and Barangas are currently placeholders. */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              <SponsorCard
                name="Best Buy"
                image="/sponsors/bestbuy.png"
                tier="hammer"
                link="https://www.bestbuy.ca/"
              />
              <SponsorCard
                name="Barangas On The Beach"
                image="/sponsors/barangas.png"
                tier="hammer"
                link="https://barangas.ca/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}