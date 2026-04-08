"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS, REGISTER_URL, DONATE_URL } from "@/data/nav-links";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[72px] flex items-center justify-between px-6 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-[rgba(38,50,98,0.08)]"
          : "bg-transparent"
          }`}
        id="header"
      >
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Image
            src="/logo.webp"
            alt="HammerHacks Logo"
            height={44}
            width={44}
            className="h-11 w-11 transition-transform duration-300 hover:scale-105 drop-shadow-sm rounded-md"
          />
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-base font-bold transition-colors duration-200"
              style={{
                color: "var(--navy)",
                fontFamily: "var(--font-display)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--orange)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--navy)")
              }
            >
              {link.label}
            </a>
          ))}

          {/* Donate is secondary */}
          <a
            href={DONATE_URL}
            className="text-base font-bold transition-colors duration-200"
            style={{
              color: "var(--navy)",
              fontFamily: "var(--font-display)",
              opacity: 0.7,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--orange)";
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--navy)";
              e.currentTarget.style.opacity = "0.7";
            }}
          >
            Donate
          </a>

          {/* Register is primary */}
          <a href={REGISTER_URL} className="btn-primary text-sm py-2 px-5">
            Register
          </a>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="btn-primary text-sm py-2 px-5"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 z-30"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <div
            className="fixed top-0 right-0 h-full w-72 z-40 flex flex-col py-20 px-8 gap-2"
            style={{
              background: "var(--navy)",
              animation: "slideInRight 0.3s ease-out",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-bold text-white py-3 border-b border-white/10 transition-colors hover:text-orange"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={DONATE_URL}
              className="text-xl font-bold text-white/70 py-3 border-b border-white/10 transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Donate
            </a>
            <a
              href={REGISTER_URL}
              className="btn-primary text-lg mt-6 text-center justify-center"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </>
  );
}
