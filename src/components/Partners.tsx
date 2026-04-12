"use client";

import { SITE_CONFIG } from "@/data/site-config";

function PartnerCard({
  name,
  image,
  tier,
  link,
}: {
  name: string;
  image: string;
  tier: "partner";
  link: string;
}) {

 
  const tierStyles = {
    partner: "h-28",
    
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


export default function PartnerSection() {
  return (
    <section
      id="sponsors"
      className="flex justify-center items-center px-6 md:px-12 w-full"
    >
      <div className="w-full p-8">
        <div className="py-4">
          <h3 className="text-5xl font-bold mb-6 text-center text-blue-900">
            Our Partner
          </h3>
          

          <div className="flex flex-col gap-12 md:gap-2 mt-10">
            {/* Partner(s): 2 per row capacity, centered */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <PartnerCard
                name=""
                image="/sponsors/mcmasterENG.webp"
                tier="partner"
                link="https://www.eng.mcmaster.ca/"
              />
              
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}