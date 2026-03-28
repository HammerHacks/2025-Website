"use client";

import Image from "next/image";
import { HERO_CONTENT } from "../data/hero-content";

export default function Hero() {
  return (
    <section className="hero-section h-[700px] flex flex-col p-8 gap-2 bg-[#3e5caa] bg-[url(/background.webp)] bg-no-repeat bg-center bg-cover text-center text-white">
      <div className="slide-in mx-auto w-auto">
        <Image
          src="/logo.webp"
          alt="Hammer Hacks Logo"
          width={400}
          height={400}
          priority
          className="h-100 w-max my-20 mx-auto transition-transform duration-300 hover:scale-105 cursor-default select-none"
        />
        <div className="slide-in relative bottom-15 font-bold text-4xl p-5 from-white to-[#b3dbf4]/80 transition-transform duration-300 hover:scale-105">
          <p className="slide-in text-black text-4xl font-bold mt-2">
            {HERO_CONTENT.season}
          </p>
          <p className="slide-in text-black font-bold">
            {HERO_CONTENT.location}
          </p>
        </div>
      </div>
    </section>
  );
}
