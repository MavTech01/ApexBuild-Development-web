import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ServiceCardMedia from '@/features/services/ServiceCardMedia.jsx'
import ServiceIcon from '@/features/services/ServiceIcon.jsx'
import ServiceDeliverablesDrawer from '@/features/services/ServiceDeliverablesDrawer.jsx'

/**
 * ServiceShowcaseCard
 * A single service, laid out as a full-width accordion row: the image sits on
 * the left and the details (category, title, description, key metrics) on the
 * right. Expanding reveals the scope & specifications beneath the row only, so
 * it never changes the size of any other service.
 */
export default function ServiceShowcaseCard({ service, index }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const panelId = `${service.anchorId}-specs`

  return (
    <article
      id={service.anchorId}
      style={{ animationDelay: `${index * 70}ms` }}
      className="group relative scroll-mt-28 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_2px_12px_rgb(0_0_0/0.03)] transition-all duration-500 ease-out-premium hover:border-blue-500/40 hover:shadow-lift animate-rise"
    >
      {/* Summary row: image + details */}
      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:items-center lg:gap-8">
        <ServiceCardMedia image={service.image} title={service.title} />

        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <ServiceIcon name={service.icon} className="h-3 w-3" />
            </span>
            <span className="font-display text-[11px] font-semibold tracking-wider text-ink-700 uppercase">
              {service.category}
            </span>
          </span>

          <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ink-950 transition-colors duration-200 group-hover:text-blue-700 sm:text-2xl">
            {service.title}
          </h3>

          <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-ink-600">
            {service.description}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {service.features.map((feature) => (
              <div
                key={feature.label}
                className="rounded-lg border border-line/80 bg-paper/60 px-3 py-2 transition-colors group-hover:border-blue-500/20"
              >
                <div className="font-display text-[10px] font-semibold tracking-wider text-ink-400 uppercase">
                  {feature.label}
                </div>
                <div className="mt-0.5 truncate font-display text-xs font-bold text-ink-900">
                  {feature.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle bar */}
      <div className="flex items-center justify-between gap-4 border-t border-line/70 px-5 py-4 sm:px-6">
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded font-display text-xs font-semibold tracking-wider text-blue-700 uppercase transition-colors hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          aria-expanded={isExpanded}
          aria-controls={panelId}
        >
          <span>{isExpanded ? 'Hide Scope & Specifications' : 'View Scope & Specifications'}</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>

        <span className="font-display text-xs font-semibold text-ink-300 tabular-nums">
          0{index + 1}
        </span>
      </div>

      {/* Scope & specifications drawer */}
      <ServiceDeliverablesDrawer
        id={panelId}
        capabilities={service.capabilities}
        summary={service.summary}
        isOpen={isExpanded}
      />
    </article>
  )
}