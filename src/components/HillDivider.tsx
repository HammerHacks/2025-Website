/**
 * HillDivider — SVG wave/hill section divider.
 *
 * Props:
 *  - variant: "green-to-white" | "white-to-navy" | "navy-to-white" | "white-to-green"
 *  - flip: invert vertically (for bottom-of-section usage)
 *  - className: additional CSS classes
 */

interface HillDividerProps {
  variant?: "green-to-white" | "white-to-navy" | "navy-to-white" | "green-to-navy" | "offwhite-to-footer" | "bottom-recap";
  flip?: boolean;
  className?: string;
}

const VARIANTS = {
  "green-to-white": {
    bg: "transparent",
    fills: ["#4CBB17", "#7EC850", "#A8E05F"],
  },
  "white-to-navy": {
    bg: "transparent",
    fills: ["#263262", "#2d3a6e", "#34427a"],
  },
  "navy-to-white": {
    bg: "transparent",
    fills: ["#263262", "#2d3a6e", "#263262"],
  },
  "green-to-navy": {
    bg: "transparent",
    fills: ["#263262", "#1e2a52", "#263262"],
  },
  "offwhite-to-footer": {
    bg: "#F8F9F0",
    fills: ["#263262", "#2d3a6e", "#263262"],
  },
  "bottom-recap": {
    bg: "transparent",
    fills: ["#263262", "#2d3a6e", "#1F284F"],
  },
};

export default function HillDivider({
  variant = "green-to-white",
  flip = false,
  className = "",
}: HillDividerProps) {
  const { fills, bg } = VARIANTS[variant];
  const isOcean = variant !== "green-to-white";

  return (
    <div
      className={`relative z-20 w-full leading-none overflow-x-clip overflow-y-visible ${className}`}
      style={{
        background: bg,
        transform: flip ? "scaleY(-1)" : undefined,
        marginTop: "-1px",
        marginBottom: "-1px"
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        className="block w-full h-auto"
        style={{ minHeight: "60px" }}
      >
        {isOcean ? (
          <>
            <defs>
              <filter id="ocean-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Back Ocean */}
            <path
              d="M0,180 L0,60 Q200,-10 400,55 T800,45 T1200,35 T1440,55 L1440,180 Z"
              fill="rgba(255,255,255,0.15)"
            />
            <path
              d="M0,180 L0,70 Q200,10 400,60 T800,50 T1200,40 T1440,60 L1440,180 Z"
              fill={fills[0]}
            />

            {/* Middle Ocean */}
            <path
              d="M0,180 L0,110 Q150,40 350,105 T700,80 T1100,100 T1440,75 L1440,180 Z"
              fill="rgba(255,255,255,0.2)"
            />
            <path
              d="M0,180 L0,120 Q150,60 350,110 T700,90 T1100,110 T1440,80 L1440,180 Z"
              fill={fills[1]}
            />

            {/* Front Ocean */}
            <path
              d="M0,180 L0,140 Q250,70 450,125 T850,100 T1250,120 T1440,115 L1440,180 Z"
              fill="rgba(255,255,255,0.25)"
            />
            <path
              d="M0,180 L0,150 Q250,90 450,130 T850,110 T1250,130 T1440,120 L1440,180 Z"
              fill={fills[2]}
            />

            {/* Sparkles */}
            <g filter="url(#ocean-glow)" fill="#ffffff">
              <path d="M 150 140 L 152 145 L 157 147 L 152 149 L 150 154 L 148 149 L 143 147 L 148 145 Z" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.8;0.2" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M 450 160 L 452 163 L 455 165 L 452 167 L 450 170 L 448 167 L 445 165 L 448 163 Z" opacity="0.4">
                <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.5s" repeatCount="indefinite" />
              </path>
              <path d="M 850 150 L 852 153 L 855 155 L 852 157 L 850 160 L 848 157 L 845 155 L 848 153 Z" opacity="0.8">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="4s" repeatCount="indefinite" />
              </path>
              <path d="M 1250 140 L 1253 144 L 1257 147 L 1253 150 L 1250 154 L 1247 150 L 1243 147 L 1247 144 Z" opacity="0.5">
                <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3.5s" repeatCount="indefinite" />
              </path>
              <path d="M 250 90 L 251 92 L 253 93 L 251 94 L 250 96 L 249 94 L 247 93 L 249 92 Z" opacity="0.7">
                <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2s" repeatCount="indefinite" />
              </path>
              <path d="M 1050 80 L 1052 83 L 1055 85 L 1052 87 L 1050 90 L 1048 87 L 1045 85 L 1048 83 Z" opacity="0.6">
                <animate attributeName="opacity" values="0.2;0.9;0.2" dur="3.2s" repeatCount="indefinite" />
              </path>
            </g>

            {/* Subtly overlapping wave crest lines for texture */}
            <path d="M 100 165 Q 120 155 140 165" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 110 172 Q 130 162 150 172" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />

            <path d="M 500 135 Q 520 125 540 135" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 510 142 Q 530 132 550 142" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />

            <path d="M 900 125 Q 920 115 940 125" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            <path d="M 910 132 Q 930 122 950 132" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
          </>
        ) : (
          <>
            {/* Back hill layer */}
            <path
              d="M0,180 L0,100 Q200,30 400,80 Q600,140 800,70 Q1050,10 1200,60 Q1350,100 1440,70 L1440,180 Z"
              fill={fills[0]}
            />
            {/* Middle hill layer */}
            <path
              d="M0,180 L0,120 Q180,60 380,100 Q580,150 750,90 Q950,40 1100,80 Q1300,130 1440,90 L1440,180 Z"
              fill={fills[1]}
            />
            {/* Front hill layer */}
            <path
              d="M0,180 L0,140 Q250,90 450,120 Q650,160 850,110 Q1050,70 1250,110 Q1380,140 1440,120 L1440,180 Z"
              fill={fills[2]}
            />
          </>
        )}
      </svg>

      {/* Decorative Ocean Surface Elements */}
      {isOcean && !flip && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-visible">
          {/* Sailboat */}
          <picture>
            <img
              src="/sailboat.png"
              alt="Sailboat"
              className="absolute ocean-sailboat object-contain drop-shadow-md"
              style={{ width: "32%", minWidth: "55px", maxWidth: "160px", left: "30%", bottom: "37%", rotate: "-3deg" }}
            />
          </picture>

          {/* Seagulls */}
          <svg className="absolute text-white opacity-40 ocean-seagull" style={{ width: "40px", top: "2%", left: "10%" }} viewBox="0 0 40 20">
            <path d="M 0 10 Q 10 0 20 6 Q 30 0 40 10 Q 30 15 20 8 Q 10 15 0 10 Z" fill="black" />
          </svg>
          <svg className="absolute text-white opacity-30 ocean-seagull-delayed" style={{ width: "30px", top: "18%", left: "46%" }} viewBox="0 0 40 20">
            <path d="M 0 10 Q 10 0 20 6 Q 30 0 40 10 Q 30 15 20 8 Q 10 15 0 10 Z" fill="grey" />
          </svg>
          <svg className="absolute text-white opacity-30 ocean-seagull-delayed" style={{ width: "30px", top: "25%", left: "45%" }} viewBox="0 0 40 20">
            <path d="M 0 10 Q 10 0 20 6 Q 30 0 40 10 Q 30 15 20 8 Q 10 15 0 10 Z" fill="grey" />
          </svg>
          <svg className="absolute text-white opacity-30 ocean-seagull-delayed" style={{ width: "45px", top: "14%", left: "95%" }} viewBox="0 0 40 20">
            <path d="M 0 10 Q 10 0 20 6 Q 30 0 40 10 Q 30 15 20 8 Q 10 15 0 10 Z" fill="black" />
          </svg>
        </div>
      )
      }
    </div >
  );
}
