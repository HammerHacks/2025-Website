"use client";

import { useCallback } from "react";
import { TEAM_MEMBERS } from "../data/team-members";
import { useDecodeText } from "../hooks/useDecodeText";

const DEFAULT_DISPLAY = [
  "Hover over a team member",
  "to see their role.",
  "School info will appear here.",
  "Their description will appear here.",
];

export default function Team() {
  const [displayTexts, triggerDecode] = useDecodeText(DEFAULT_DISPLAY);

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
      className="flex flex-col w-full bg-gray-100 mt-12 slide-in items-center"
      id="team-section"
    >
      {/* Description area */}
      <div className="w-full flex flex-col items-center justify-center mb-8 pt-8">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Made with 🧡 by the HammerHacks team
        </h2>
        <div className="text-lg text-gray-700 min-h-[120px] flex items-center justify-center">
          <div className="w-full">
            <div className="flex flex-col items-center">
              <span className="font-bold text-2xl">{displayTexts[0]}</span>
              <span className="text-xl text-gray-600 mt-1">
                {displayTexts[1]}
              </span>
              <span className="text-lg text-blue-700 mt-1">
                {displayTexts[2]}
              </span>
            </div>
            <div className="slide-in mt-6 text-base text-gray-700 text-center">
              {displayTexts[3]}
            </div>
          </div>
        </div>
      </div>

      {/* Team member grid */}
      <div className="w-full flex items-center justify-center caps">
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full border-t-2 border-gray-200 py-8">
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
