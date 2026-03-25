"use client"

import { useState } from "react";

const faqData = [
  { q: "What is a hackathon?", a: "A hackathon is a collaborative event where participants build projects and solve problems using technology within a limited time frame." },
  { q: "Who can participate?", a: "HammerHacks is open to all Hamilton high-school students, regardless of experience level.", right: true },
  { q: "Do I need coding experience?", a: "No prior coding experience is required! We welcome beginners and provide workshops to help you get started." },
  { q: "How much does it cost?", a: "Participation is free! Just bring your creativity and enthusiasm.", right: true },
  { q: "What should I bring?", a: "Bring a laptop, charger, and any materials you need for your project. Snacks and meals will be provided." },
  { q: "Can I work in a team?", a: "Yes! Teams of up to 4 are encouraged, but you're free to work alone if you wish. You can form a team before or during the event.", right: true },
  { q: "What if I don't have a team?", a: "No worries! We'll help you find teammates at the event if you'd like to join a group." },
  { q: "How do I register?", a: <>Registration isn't out yet! Check our <a href="https://www.instagram.com/hammerhacks_/following/" className="underline text-orange-500">Instagram</a></>, right: true },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number|null>(null);

  return (
    <section id="faq-section" className="faq-section flex flex-col items-center justify-center w-full py-16 bg-white">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#263272]">Frequently Asked Questions</h2>
      <div className="faq-grid flex justify-center w-full">
        <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-6 sm:gap-x-12 sm:gap-y-12 w-full max-w-6xl">
          {faqData.map((item, i) => {
            const open = expanded === i;
            return (
              <div key={i} className={`faq-item flex items-center relative ${item.right ? "right" : ""} ${open ? "expanded" : ""}`}>
                <div className="faq-ring cursor-pointer" onClick={() => setExpanded(open ? null : i)}>
                  <span className="faq-gear-container relative flex items-center justify-center w-[12.5rem] h-[12.5rem]">
                    <img src="/blueGear.png" alt="Gear" className="faq-gear-img w-full h-full object-contain absolute left-0 top-0 transition-transform duration-400 ease-in-out z-[2]" />
                    <span className="faq-gear-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#263272] text-[1rem] font-bold text-center w-[7rem] pointer-events-none z-4 transition-transform duration-400 ease-in-out">
                      {item.q}
                    </span>
                  </span>
                </div>
                <div className="faq-answer bg-[#53c2ec] rounded-xl shadow-md px-8 py-6 text-[#263272] text-base min-w-[260px] max-w-[300px] absolute left-0 top-1/2 -translate-y-1/2 text-center">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}