import { DONATE_URL, REGISTER_URL } from "@/data/nav-links";
import { SITE_CONFIG } from "@/data/site-config";
import Image from "next/image";
import HillDivider from "@/components/HillDivider";

export default function Footer() {
  return (
    <>
      {/* Wave transition into footer */}
      <HillDivider variant="offwhite-to-footer" />

      <footer
        id="footer"
        className="foot pt-16 pb-10 px-6"
      >
        <div className="max-w-6xl mx-auto">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Column 1: Logo + tagline + socials */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Image
                src="/logo.webp"
                alt="HammerHacks Logo"
                width={80}
                height={80}
                className="w-16 h-16 drop-shadow-md"
              />
              <p className="text-white/80 text-sm max-w-[220px] text-center md:text-left">
                Hamilton&apos;s largest high school hackathon. Adding Glamour to the Hammer with the next generation
                of innovators.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick links */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Quick Links
              </h3>
              <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                About
              </a>
              {/*<a href="#schedule" className="text-white/60 hover:text-white transition-colors text-sm">
              Schedule
              </a>*/}
              <a href="#faq-section" className="text-white/60 hover:text-white transition-colors text-sm">
                FAQ
              </a>
              <a href="#team-section" className="text-white/60 hover:text-white transition-colors text-sm">
                Team
              </a>
              <a
                href={REGISTER_URL}
                className="text-sm font-semibold transition-colors"
                style={{ color: "var(--orange)" }}
              >
                Register Now →
              </a>
            </div>

            {/* Column 3: CTA + contact */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Involved
              </h3>
              <a href={REGISTER_URL} className="btn-primary text-sm py-2 px-5">
                Register Now
              </a>
              <a href={DONATE_URL} className="btn-secondary text-sm py-2 px-5 text-white border-white/30 hover:bg-white hover:text-navy">
                Donate
              </a>
              <p className="text-white/60 text-sm mt-2">
                Questions?{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="underline transition-colors"
                  style={{ color: "var(--orange)" }}
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 text-center text-xs text-white/40 space-y-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p>
              Our{" "}
              <a href={SITE_CONFIG.githubUrl} className="underline hover:text-white/60 transition-colors">
                website
              </a>{" "}
              and{" "}
              <a href={SITE_CONFIG.hhHcbUrl} className="underline hover:text-white/60 transition-colors">
                finances
              </a>{" "}
              are open
            </p>
            <p>
              HammerHacks is fiscally sponsored by The Hack Foundation (d.b.a.{" "}
              <a href={SITE_CONFIG.hcbUrl} className="underline hover:text-white/60 transition-colors">
                Hack Club
              </a>
              ), a 501(c)(3) nonprofit (EIN: 81-2908499)
            </p>
          </div>
        </div>
      </footer >
    </>
  );
}
