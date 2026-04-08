"use client";

import { useCallback } from "react";
import { TEAM_MEMBERS } from "@/data/team-members";
import { useDecodeText } from "@/hooks/useDecodeText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DEFAULT_DISPLAY = [
  "Hover over a team member",
  "to see their role.",
  "School info will appear here.",
  "Their description will appear here.",
];

export default function Team() {
  const [displayTexts, triggerDecode] = useDecodeText(DEFAULT_DISPLAY);
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  const handleMouseEnter = useCallback(
    (index: number) => {
      const member = TEAM_MEMBERS[index];
      triggerDecode([member.name, member.role, member.school, member.likes]);
    },
    [triggerDecode],
  );

  const handleMouseLeave = useCallback(() => {
    triggerDecode(DEFAULT_DISPLAY);
  }, [triggerDecode]);

  return (
    <section
      ref={ref}
      className={`flex flex-col w-full items-center py-16 md:py-24 scroll-reveal ${isVisible ? "visible" : ""}`}
      style={{ background: "var(--off-white)" }}
      id="team-section"
    >
      {/* Description area */}
      <div className="w-full flex flex-col items-center justify-center mb-8 px-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--navy)",
          }}
        >
          Made with 🧡 by the HammerHacks team
        </h2>
        <div className="text-lg text-gray-700 min-h-[120px] flex items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <span
                className="font-bold text-2xl"
                style={{ color: "var(--navy)" }}
              >
                {displayTexts[0]}
              </span>
              <span className="text-xl text-gray-500 mt-1">
                {displayTexts[1]}
              </span>
              <span
                className="text-lg mt-1"
                style={{ color: "var(--orange)" }}
              >
                {displayTexts[2]}
              </span>
            </div>
            <div className="mt-6 text-base text-gray-600 text-center">
              {displayTexts[3]}
            </div>
          </div>
        </div>
      </div>

      {/* Team member grid */}
      <div className="w-full flex items-center justify-center caps px-6">
        <div
          className="flex flex-row flex-wrap gap-6 justify-center items-center w-full py-8"
          style={{ borderTop: "2px solid rgba(38,50,98,0.08)" }}
        >
          {TEAM_MEMBERS.map((member, index) => {
            const imgElement = (
              <img
                src={member.photo}
                alt={member.name}
                className="team-member-img"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              />
            );

            if (member.linkedin) {
              return (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {imgElement}
                </a>
              );
            }

            return <div key={member.name}>{imgElement}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
