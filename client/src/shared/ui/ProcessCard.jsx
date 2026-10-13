import React from 'react'
import BuildingSilhouette from '@/shared/components/decorative/BuildingSilhouette.jsx'

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
      <BuildingSilhouette />

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
