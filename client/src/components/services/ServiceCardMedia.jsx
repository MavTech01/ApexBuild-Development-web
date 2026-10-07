import React from 'react'
import ServiceIcon from '@/components/home/services/ServiceIcon.jsx'

/**
 * ServiceCardMedia
 * High-resolution architectural photography viewport with hover zoom,
 * floating frosted glass badge, and watermark counter
 */
export default function ServiceCardMedia({ image, icon, category, index }) {
  return (
    <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink-100 border border-line">
      {/* High-Resolution Architectural Image with Smooth Zoom */}
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out-premium group-hover:scale-105 motion-reduce:group-hover:scale-100"
      />

      {/* Subtle Lighting Gradient at base of photo for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent"
      />

      {/* Top Floating Badges Bar */}
      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
        {/* Category Pill with Frosted White Glass */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/90 px-3 py-1 shadow-sm backdrop-blur-md">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <ServiceIcon name={icon} className="h-3 w-3" />
          </span>
          <span className="font-display text-[11px] font-semibold tracking-wider text-ink-800 uppercase">
            {category}
          </span>
        </div>

        {/* Index Badge */}
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-white/90 font-display text-xs font-bold text-ink-900 shadow-sm backdrop-blur-md tabular-nums">
          0{index + 1}
        </span>
      </div>
    </div>
  )
}
