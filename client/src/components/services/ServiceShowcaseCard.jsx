import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ServiceCardMedia from './ServiceCardMedia.jsx'
import ServiceDeliverablesDrawer from './ServiceDeliverablesDrawer.jsx'

/**
 * ServiceShowcaseCard
 * Clean, image-focused architectural card in the primary site theme
 */
export default function ServiceShowcaseCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article
      id={service.anchorId}
      style={{ animationDelay: `${index * 80}ms` }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-5 sm:p-6 shadow-[0_2px_12px_rgb(0_0_0/0.03)] transition-all duration-400 ease-out-premium hover:border-blue-500/40 hover:shadow-lift animate-rise"
    >
      <div>
        {/* 1. Large High-Resolution Image Viewport */}
        <ServiceCardMedia
          image={service.image}
          icon={service.icon}
          category={service.category}
          index={index}
        />

        {/* 2. Primary Card Heading & Description */}
        <div className="mt-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink-950 transition-colors duration-200 group-hover:text-blue-700">
            {service.title}
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-ink-600 line-clamp-2">
            {service.description}
          </p>

          {/* 3. High-Contrast Metric Tags */}
          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {service.features.map((feature) => (
              <div
                key={feature.label}
                className="rounded-lg border border-line/80 bg-paper/60 px-3 py-2 transition-colors group-hover:border-blue-500/20"
              >
                <div className="font-display text-[10px] font-semibold tracking-wider text-ink-400 uppercase">
                  {feature.label}
                </div>
                <div className="mt-0.5 font-display text-xs font-bold text-ink-900 truncate">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Smooth Deliverables Drawer */}
        <ServiceDeliverablesDrawer
          capabilities={service.capabilities}
          summary={service.summary}
          isOpen={isExpanded}
        />
      </div>

      {/* 5. Bottom Interactive Accordion Bar */}
      <div className="mt-6 border-t border-line/70 pt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 font-display text-xs font-semibold tracking-wider text-blue-700 uppercase transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Hide Specifications' : 'View Core Scope & Specifications'}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              isExpanded ? 'rotate-180 text-blue-700' : 'text-blue-600'
            }`}
          />
        </button>

        <span className="font-display text-xs font-semibold text-ink-400 tabular-nums">
          0{index + 1}
        </span>
      </div>
    </article>
  )
}
