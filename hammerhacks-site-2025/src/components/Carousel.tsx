"use client";

import { CAROUSEL_IMAGE_COUNT } from "../data/recap-stats";

const images = Array.from({ length: CAROUSEL_IMAGE_COUNT }, (_, i) => ({
  src: `/carousel/${i + 1}.jpg`,
  alt: `HammerHacks event photo ${i + 1}`,
}));

export default function Carousel() {
  return (
    <div className="carousel overflow-hidden my-24 w-full">
      <div className="carousel-track flex items-center gap-4 animate-carousel-scroll">
        {[...images, ...images].map((img, i) => (
          <div key={i} className="flex-none">
            <img
              src={img.src}
              alt={img.alt}
              className="h-[120px] w-auto rounded-2xl shadow-md object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
