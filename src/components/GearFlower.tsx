/**
 * SVG gear on a stem with leaves
 *
 * Props:
 *  - color: fill color for the gear head
 *  - height: total height of the flower (default 160)
 *  - className: additional CSS classes
 *  - stemColor: color of the stem and leaves (default navy)
 */

interface GearFlowerProps {
  color: string;
  height?: number;
  className?: string;
  stemColor?: string;
}

export default function GearFlower({
  color,
  height = 160,
  className = "",
  stemColor = "#263262",
}: GearFlowerProps) {
  // Scale everything proportionally based on height
  const gearRadius = height * 0.22;
  const stemLength = height * 0.55;
  const cx = height * 0.4;
  const gearCy = gearRadius + 4;
  const stemTop = gearCy + gearRadius * 0.5;
  const stemBottom = stemTop + stemLength;
  const viewBoxWidth = height * 0.8;
  const viewBoxHeight = height;

  // Generate gear tooth path (10 teeth)
  const teeth = 10;
  const innerR = gearRadius * 0.62;
  const outerR = gearRadius;
  const toothWidth = 0.18; // radians half-width

  let gearPath = "";
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * Math.PI * 2;
    const nextAngle = ((i + 1) / teeth) * Math.PI * 2;
    const midAngle = (angle + nextAngle) / 2;

    // Outer tooth tip
    const ox1 = cx + outerR * Math.cos(midAngle - toothWidth);
    const oy1 = gearCy + outerR * Math.sin(midAngle - toothWidth);
    const ox2 = cx + outerR * Math.cos(midAngle + toothWidth);
    const oy2 = gearCy + outerR * Math.sin(midAngle + toothWidth);

    // Inner valley
    const ix1 = cx + innerR * Math.cos(angle);
    const iy1 = gearCy + innerR * Math.sin(angle);
    const ix2 = cx + innerR * Math.cos(nextAngle);
    const iy2 = gearCy + innerR * Math.sin(nextAngle);

    if (i === 0) {
      gearPath += `M ${ix1} ${iy1} `;
    }
    gearPath += `L ${ox1} ${oy1} L ${ox2} ${oy2} L ${ix2} ${iy2} `;
  }
  gearPath += "Z";

  // Inner circle cutout radius
  const holeR = gearRadius * 0.32;

  // Leaf positions (one on each side of stem)
  const leafY = stemTop + stemLength * 0.35;
  const leafSize = height * 0.1;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={viewBoxWidth}
      height={viewBoxHeight}
      className={className}
      aria-hidden="true"
    >
      {/* Stem */}
      <line
        x1={cx}
        y1={stemTop}
        x2={cx}
        y2={stemBottom}
        stroke={stemColor}
        strokeWidth={height * 0.025}
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <ellipse
        cx={cx - leafSize * 0.9}
        cy={leafY}
        rx={leafSize}
        ry={leafSize * 0.45}
        fill={stemColor}
        transform={`rotate(-35, ${cx - leafSize * 0.9}, ${leafY})`}
      />

      {/* Right leaf (slightly lower) */}
      <ellipse
        cx={cx + leafSize * 0.9}
        cy={leafY + leafSize * 0.8}
        rx={leafSize}
        ry={leafSize * 0.45}
        fill={stemColor}
        transform={`rotate(35, ${cx + leafSize * 0.9}, ${leafY + leafSize * 0.8})`}
      />

      {/* Gear head */}
      <g className="gear-head">
        <path d={gearPath} fill={color} />
        {/* Inner circle (white cutout) */}
        <circle cx={cx} cy={gearCy} r={holeR} fill="white" />
      </g>
    </svg>
  );
}
