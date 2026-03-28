"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq-items";

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="faq-section"
      className="faq-section flex flex-col items-center justify-center w-full py-16 bg-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[#263272]">
        Frequently Asked Questions
      </h2>
      <div className="faq-grid flex justify-center w-full">
        <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-6 sm:gap-x-12 sm:gap-y-12 w-full max-w-6xl">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={item.question}
                className={`faq-item flex items-center relative ${item.isRight ? "right" : ""} ${isOpen ? "expanded" : ""}`}
              >
                <div
                  className="faq-ring cursor-pointer"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setExpanded(isOpen ? null : i);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <span className="faq-gear-container relative flex items-center justify-center w-[12.5rem] h-[12.5rem]">
                    <img
                      src="/blueGear.png"
                      alt="Gear"
                      className="faq-gear-img w-full h-full object-contain absolute left-0 top-0 transition-transform duration-400 ease-in-out z-[2]"
                    />
                    <span className="faq-gear-text text-[#263272] text-base font-bold text-center w-28 pointer-events-none z-[3] transition-transform duration-400 ease-in-out">
                      {item.question}
                    </span>
                  </span>
                </div>
                <div className="faq-answer bg-[#53c2ec] rounded-xl shadow-md px-8 py-6 text-[#263272] text-base min-w-[260px] max-w-[300px] absolute left-0 top-1/2 text-center">
                  {item.answer}
                  {item.linkUrl && (
                    <>
                      {" "}
                      <a
                        href={item.linkUrl}
                        className="underline text-orange-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.linkText}
                      </a>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
