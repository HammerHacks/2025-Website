"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { DONATE_URL, NAV_LINKS } from "@/data/nav-links";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    },
    [],
  );

  return (
    <header
      className="bg-white/30 backdrop-blur-lg h-30 flex sticky top-0 b-10px l-0 gap-1.5 z-100"
      id="header"
    >
      {/* Logo */}
      <div className="pl-6 pr-4 flex items-center">
        <a href="/">
          <Image
            src="/logo.webp"
            alt="Hammer Hacks Logo"
            height={50}
            width={110}
            className="h-14 w-auto max-w-[160px] transition-transform duration-300 hover:scale-105 drop-shadow-md rounded-md"
          />
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="desktop-nav hidden md:flex items-center gap-6 text-black font-bold">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="slide-in text-2xl hover:text-blue-300 transition"
          >
            {link.label}
          </a>
        ))}
        <a
          href={DONATE_URL}
          className="text-2xl font-bold text-white bg-blue-800 border-4 border-blue-800 rounded-full px-6 py-2 absolute top-6 right-6 hover:bg-blue-400 hover:border-blue-400 transition"
        >
          Donate
        </a>
      </nav>

      {/* Mobile nav */}
      <div className="mobile-nav md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="text-2xl font-bold text-white bg-orange-400 border-4 border-orange-400 rounded-full px-6 py-2 absolute top-6 right-6 hover:bg-blue-800 hover:border-blue-800 transition"
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        {mobileOpen && (
          <div className="mobile-menu-box absolute top-20 right-4 bg-white rounded-2xl shadow-lg z-50 min-w-[180px]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block w-full text-left px-6 py-4 text-2xl border-b border-gray-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={DONATE_URL}
              className="block w-full text-left px-6 py-4 text-2xl font-bold text-white bg-orange-400 border-4 border-orange-400 rounded-full mt-2 hover:bg-blue-800 hover:border-blue-800 transition"
            >
              Donate
            </a>
          </div>
        )}
      </div>
    </header>
  );
}