/**
 * BuildingSilhouette
 * Minimal architectural skyline SVG used as a hover watermark for cards.
 * Rises smoothly from bottom-right on hover.
 *
 * Usage:
 * - Add `overflow-hidden` to the card container
 * - Add `relative` class to card
 * - Add `group` class to card for hover state
 *
 * @param {string} className - Additional classes for color/opacity customization
 * @param {number} width - SVG width (default: 140)
 * @param {number} height - SVG height (default: 120)
 */
export default function BuildingSilhouette({
  className = "text-blue-500/[0.08]",
  width = 140,
  height = 120
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-4 -right-3 translate-y-full opacity-0 transition-all duration-700 ease-out-premium group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 pointer-coarse:duration-200"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 140 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Tall building */}
        <rect x="80" y="20" width="28" height="100" rx="1" fill="currentColor" />
        {/* Tall building windows */}
        <rect x="85" y="28" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="97" y="28" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="85" y="40" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="97" y="40" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="85" y="52" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="97" y="52" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="85" y="64" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="97" y="64" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="85" y="76" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="97" y="76" width="6" height="5" rx="0.5" className="fill-white/60" />

        {/* Short building */}
        <rect x="48" y="55" width="30" height="65" rx="1" fill="currentColor" />
        {/* Short building windows */}
        <rect x="53" y="62" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="67" y="62" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="53" y="74" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="67" y="74" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="53" y="86" width="6" height="5" rx="0.5" className="fill-white/60" />
        <rect x="67" y="86" width="6" height="5" rx="0.5" className="fill-white/60" />

        {/* Small building left */}
        <rect x="28" y="78" width="18" height="42" rx="1" fill="currentColor" />
        <rect x="32" y="84" width="4" height="4" rx="0.5" className="fill-white/60" />
        <rect x="39" y="84" width="4" height="4" rx="0.5" className="fill-white/60" />
        <rect x="32" y="94" width="4" height="4" rx="0.5" className="fill-white/60" />
        <rect x="39" y="94" width="4" height="4" rx="0.5" className="fill-white/60" />

        {/* Crane arm */}
        <line x1="94" y1="20" x2="94" y2="6" stroke="currentColor" strokeWidth="2" />
        <line x1="94" y1="8" x2="125" y2="8" stroke="currentColor" strokeWidth="1.5" />
        <line x1="124" y1="8" x2="124" y2="16" stroke="currentColor" strokeWidth="1" />
        {/* Crane counter-arm */}
        <line x1="94" y1="8" x2="82" y2="8" stroke="currentColor" strokeWidth="1.5" />
        {/* Crane cables */}
        <line x1="94" y1="6" x2="125" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
        <line x1="94" y1="6" x2="82" y2="8" stroke="currentColor" strokeWidth="0.5" opacity="0.7" />
      </svg>
    </div>
  )
}
