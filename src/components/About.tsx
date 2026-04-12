"use client";

import Image from "next/image";
import { ABOUT_CONTENT } from "@/data/about-content";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{ background: "var(--off-white)" }}
      id="about"
    >
      <div className="text-center">
        <div
          className="card mx-auto mt-4 p-8 md:p-12 max-w-3xl relative"
          style={{ background: "var(--white)" }}
        >
          {/* Decorative gear icon */}
          <div className="flex justify-center mb-4">
            <svg
              viewBox="0 0 32 32"
              className="w-10 h-10"
              fill="var(--orange)"
              aria-hidden="true"
            >
              <path d="M16,4 L18,7 L21,6 L20.5,9.5 L24,11 L21,13 L22,16 L18.5,15.5 L16,18 L13.5,15.5 L10,16 L11,13 L8,11 L11.5,9.5 L11,6 L14,7 Z" />
              <circle cx="16" cy="11" r="3" fill="white" />
            </svg>
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--navy)",
            }}
          >
            {ABOUT_CONTENT.title}
          </h2>

          <p
            className="text-left text-lg md:text-xl font-bold mt-8"
            style={{ color: "var(--navy)" }}
          >
            {ABOUT_CONTENT.greeting}
          </p>

          {ABOUT_CONTENT.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 30)}
              className="text-base md:text-lg mt-4 text-gray-700 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <p
            className="text-left text-lg md:text-xl font-bold mt-8 caps"
            style={{ color: "var(--navy)" }}
          >
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
