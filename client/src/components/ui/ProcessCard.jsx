import React from 'react'

/**
 * ProcessCard
 * Architectural execution step card featuring:
 * - Clean, professional surface with no top or bottom lines
 * - Architectural building silhouette watermark that smoothly rises from bottom-right on hover
 * - High-contrast icon badge with smooth blue fill on hover
 * - Responsive typographic hierarchy and subtle phase indicator
 */
export default function ProcessCard({
  step,
  title,
  description,
  icon,
  index,
}) {
  const Icon = icon

  return (
    <article
      style={{ animationDelay: `${index * 80}ms` }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-line bg-surface p-7 sm:p-8 shadow-[0_2px_10px_rgb(0_0_0/0.03)] transition-all duration-400 ease-out-premium hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-lift sm:min-h-[280px]"
    >
      {/* Architectural Building Silhouette — rises smoothly from bottom-right on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-4 -right-3 translate-y-full opacity-0 transition-all duration-700 ease-out-premium group-hover:translate-y-0 group-hover:opacity-100"
      >
        <BuildingSilhouette />
      </div>

      <div className="relative">
        {/* Top Header Row: Icon Badge & Phase Number */}
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            {Icon && <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />}
          </span>

          <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink-300 transition-colors duration-300 group-hover:text-blue-600/70 tabular-nums">
            {step}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="mt-6 font-display text-xl font-bold tracking-tight text-ink-950 transition-colors duration-200 group-hover:text-blue-700 sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-600 sm:text-[15px]">
          {description}
        </p>
      </div>

      {/* Subtle Bottom Phase Tag */}
      <div className="relative mt-6 border-t border-line/70 pt-4 flex items-center justify-between">
        <span className="font-display text-[11px] font-semibold tracking-wider text-ink-400 uppercase transition-colors group-hover:text-blue-700">
          Phase {step}
        </span>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-line-strong transition-colors duration-300 group-hover:bg-blue-600"
        />
      </div>
    </article>
  )
}

/**
 * BuildingSilhouette
 * Minimal architectural skyline SVG used as a hover watermark.
 */
function BuildingSilhouette() {
  return (
    <svg
      width="140"
      height="120"
      viewBox="0 0 140 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-blue-500/[0.08]"
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
  )
}
