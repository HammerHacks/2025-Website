"use client";

import Image from "next/image";
import { ABOUT_CONTENT } from "@/data/about-content";

export default function About() {
  return (
    <section className="bg-gray-100 p-12 my-12" id="about">
      <div className="text-center text-black">
        <div className="letter bg-white border border-gray-400 shadow-lg mx-auto mt-8 p-8 max-w-4xl relative slide-in">
          <h2 className="glowing-text text-3xl font-bold mb-4 slide-in">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-left text-xl font-bold text-gray-800 mt-8 slide-in">
            {ABOUT_CONTENT.greeting}
          </p>

          {ABOUT_CONTENT.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 30)} className="text-lg mt-4 slide-in">
              {paragraph}
            </p>
          ))}

          <p className="text-left text-xl font-bold text-gray-800 mt-8 slide-in caps">
            {ABOUT_CONTENT.signOff}
          </p>
          <Image
            src="/signatures.png"
            alt="Organizer signatures"
            width={500}
            height={100}
            className="responsive-signature-img"
          />
        </div>
      </div>
    </section>
  );
}
