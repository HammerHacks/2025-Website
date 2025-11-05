import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="bg-white/30 backdrop-blur-lg h-30 flex sticky top-0 b-10px l-0 gap-1.5 z-100" id="header">
        <div className="pl-6 pr-4 flex items-center">
          <a href="/">
            <Image
              src="/logo.webp"
              alt="Hammer Hacks Logo"
              height="50"
              width="110"
              className="h-14 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105 drop-shadow-md rounded-md"
            />
          </a>
        </div>

        {/* desktop nav */}
        <nav className="desktop-nav hidden md:flex items-center gap-6 text-black font-bold">
          <a
            href="#about"
            className="slide-in text-2xl hover:text-blue-300 transition"
          >
            About
          </a>
          <button className="slide-in text-2xl hover:text-blue-300 transition">
            Sponsors
          </button>
          <a
            href="#faq-section"
            className="slide-in text-2xl hover:text-blue-300 transition"
          >
            FAQ
          </a>
          <a
            href="#team-section"
            className="slide-in text-2xl hover:text-blue-300 transition"
          >
            Team
          </a>
          <a
            href="https://hcb.hackclub.com/donations/start/hammerhacks"
            className="text-2xl font-bold text-white bg-blue-800 border-4 border-blue-800 rounded-full px-6 py-2 absolute top-6 right-6 hover:bg-blue-400 hover:border-blue-400 transition"
          >
            Donate
          </a>
        </nav>

        {/*TODO: fix mobile*/}
        {/* mobile nav */}
        <div className="mobile-nav md:hidden">
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="text-2xl font-bold text-white bg-orange-400 border-4 border-orange-400 rounded-full px-6 py-2 absolute top-6 right-6 hover:bg-blue-800 hover:border-blue-800 transition"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>

          {mobileOpen && (
            <div className="mobile-menu-box absolute top-20 right-4 bg-white rounded-2xl shadow-lg z-50 min-w-[180px]">
              <button
                onClick={() => (window.location.href = "#about")}
                className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200"
              >
                About
              </button>
              <button className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200">
                Sponsors
              </button>
              <button className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200">
                Schedule
              </button>
              <button
                onClick={() => (window.location.href = "#faq-section")}
                className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200"
              >
                FAQ
              </button>
              <button
                onClick={() => (window.location.href = "#team-section")}
                className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200"
              >
                Team
              </button>
              <a
                href="https://hcb.hackclub.com/donations/start/hammerhacks"
                className="block w-full text-left px-6 py-4 text-2xl font-bold text-white bg-orange-400 border-4 border-orange-400 rounded-full mt-2 hover:bg-blue-800 hover:border-blue-800 transition"
              >
                Donate
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
}