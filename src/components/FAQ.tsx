"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq-items";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* Gear colors that cycle for each FAQ item */
const GEAR_COLORS = [
  "var(--sky-blue)",
  "var(--orange)",
  "var(--hot-pink)",
  "var(--golden-yellow)",
  "var(--spring-green)",
  "var(--navy)",
  "var(--sky-blue)",
  "var(--orange)",
];

/* Inline SVG gear for FAQ items.
 * Uses the same 10-tooth construction as GearFlower, but flat (no stem).
 */
function FaqGearSvg({ color, size = 180 }: { color: string; size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = outerR * 0.68;
  const holeR = outerR * 0.58;
  const teeth = 10;
  const toothWidth = 0.18;

  let path = "";
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * Math.PI * 2;
    const nextAngle = ((i + 1) / teeth) * Math.PI * 2;
    const midAngle = (angle + nextAngle) / 2;

    const ox1 = cx + outerR * Math.cos(midAngle - toothWidth);
    const oy1 = cy + outerR * Math.sin(midAngle - toothWidth);
    const ox2 = cx + outerR * Math.cos(midAngle + toothWidth);
    const oy2 = cy + outerR * Math.sin(midAngle + toothWidth);
    const ix1 = cx + innerR * Math.cos(angle);
    const iy1 = cy + innerR * Math.sin(angle);
    const ix2 = cx + innerR * Math.cos(nextAngle);
    const iy2 = cy + innerR * Math.sin(nextAngle);

    if (i === 0) path += `M ${ix1} ${iy1} `;
    path += `L ${ox1} ${oy1} L ${ox2} ${oy2} L ${ix2} ${iy2} `;
  }
  path += "Z";

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full" aria-hidden="true">
      <path d={path} fill={color} />
      <circle cx={cx} cy={cy} r={holeR} fill="white" />
    </svg>
  );
}

/* Desktop gear-grid layout */
function DesktopFAQ({
  expanded,
  setExpanded,
}: {
  expanded: number | null;
  setExpanded: (val: number | null) => void;
}) {
  return (
    <div className="hidden md:block">
      <div className="faq-grid flex justify-center w-full">
        <div className="grid grid-cols-4 grid-rows-2 gap-x-12 gap-y-12 w-full max-w-6xl">
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
                  <span className="faq-gear-container relative flex items-center justify-center w-50 h-50">
                    <span className="faq-gear-img w-full h-full absolute left-0 top-0 transition-transform duration-400 ease-in-out z-2">
                      <FaqGearSvg color={GEAR_COLORS[i]} />
                    </span>
                    <span
                      className="faq-gear-text text-xs font-bold text-center w-20 leading-tight pointer-events-none z-3 transition-transform duration-400 ease-in-out"
                      style={{ color: "var(--navy)" }}
                    >
                      {item.question}
                    </span>
                  </span>
                </div>
                <div
                  className="faq-answer px-8 py-6 text-base min-w-[260px] max-w-[300px] absolute left-0 top-1/2 text-center"
                  style={{
                    background: "linear-gradient(135deg, #FFF0F5, #F0F0FF)",
                    border: "1px solid rgba(232, 59, 110, 0.15)",
                    borderRadius: "20px",
                    boxShadow: "0 4px 16px rgba(232, 59, 110, 0.08)",
                    color: "var(--navy)",
                  }}
                >
                  {item.answer}
                  {item.linkUrl && (
                    <>
                      {" "}
                      <a
                        href={item.linkUrl}
                        className="underline font-semibold"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#E83B6E" }}
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
    </div>
  );
}

/* Mobile accordion layout */
function MobileFAQ({
  expanded,
  setExpanded,
}: {
  expanded: number | null;
  setExpanded: (val: number | null) => void;
}) {
  return (
    <div className="md:hidden flex flex-col gap-3 w-full max-w-lg mx-auto">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = expanded === i;
        return (
          <div
            key={item.question}
            className="overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FFF0F5, #F0F0FF)",
              borderLeft: isOpen ? "3px solid #E83B6E" : "3px solid transparent",
              borderRadius: "16px",
              boxShadow: isOpen
                ? "0 4px 16px rgba(232, 59, 110, 0.08)"
                : "var(--shadow-sm)",
            }}
          >
            <button
              type="button"
              className="w-full flex items-center gap-3 text-left p-4"
              onClick={() => setExpanded(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {/* Mini gear icon */}
              <div className="w-8 h-8 shrink-0">
                <FaqGearSvg color={GEAR_COLORS[i]} size={32} />
              </div>
              <span
                className="font-bold text-base flex-1"
                style={{ color: "var(--navy)" }}
              >
                {item.question}
              </span>
              <span
                className="text-xl transition-transform duration-300"
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  color: "var(--navy)",
                }}
              >
                ▾
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div
                className="px-4 pb-4 text-sm leading-relaxed"
                style={{ color: "var(--navy)" }}
              >
                {item.answer}
                {item.linkUrl && (
                  <>
                    {" "}
                    <a
                      href={item.linkUrl}
                      className="underline font-semibold"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#E83B6E" }}
                    >
                      {item.linkText}
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="faq"
      className={`flex flex-col items-center justify-center w-full py-16 md:py-24 px-6 scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{ background: "var(--off-white)" }}
    >
      <h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        style={{
          color: "var(--navy)",
          fontFamily: "var(--font-display)",
        }}
      >
        Frequently Asked Questions
      </h2>

      <DesktopFAQ expanded={expanded} setExpanded={setExpanded} />
      <MobileFAQ expanded={expanded} setExpanded={setExpanded} />
    </section>
  );
}
