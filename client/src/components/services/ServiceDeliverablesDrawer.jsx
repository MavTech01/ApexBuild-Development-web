import React from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'

/**
 * ServiceDeliverablesDrawer
 * Smooth, high-contrast deliverables drawer that slides down gracefully
 */
export default function ServiceDeliverablesDrawer({ capabilities, summary, isOpen }) {
  return (
    <div
      className={`grid transition-all duration-500 ease-out-premium ${
        isOpen
          ? 'grid-rows-[1fr] opacity-100 pt-5 mt-5 border-t border-line'
          : 'grid-rows-[0fr] opacity-0 pt-0 mt-0 border-t-0'
      }`}
    >
      <div className="overflow-hidden">
        {/* Architectural Summary */}
        <p className="text-xs sm:text-sm leading-relaxed text-ink-600 bg-paper/60 p-3.5 rounded-lg border border-line/80">
          {summary}
        </p>

        {/* Deliverables Checklist */}
        <div className="mt-4">
          <p className="font-display text-[11px] font-bold tracking-wider text-blue-700 uppercase">
            Core Scope &amp; Deliverables
          </p>
          <ul className="mt-3 space-y-2.5">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <span className="text-xs sm:text-sm font-medium leading-snug text-ink-800">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-3">
          <Button to="/contact" variant="primary" size="sm" className="w-full sm:w-auto group/btn">
            Inquire About This Service
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
