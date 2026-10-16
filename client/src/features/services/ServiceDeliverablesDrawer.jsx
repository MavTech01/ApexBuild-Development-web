import { CheckCircle2, ArrowRight } from 'lucide-react'
import Button from '@/shared/ui/Button.jsx'

/**
 * ServiceDeliverablesDrawer
 * The scope & specifications panel for a service accordion row. It collapses to
 * zero height when closed and expands at full row width, listing the
 * capabilities in two columns on wider screens.
 */
export default function ServiceDeliverablesDrawer({ id, capabilities, summary, isOpen }) {
  return (
    <div
      id={id}
      className={`grid transition-all duration-500 ease-out-premium ${
        isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-line/70' : 'grid-rows-[0fr] opacity-0'
      }`}
    >
      <div className="overflow-hidden">
        <div className="px-5 py-6 sm:px-6">
          <p className="rounded-lg border border-line/80 bg-paper/60 p-3.5 text-xs leading-relaxed text-ink-600 sm:text-sm">
            {summary}
          </p>

          <div className="mt-5">
            <p className="font-display text-[11px] font-bold tracking-wider text-blue-700 uppercase">
              Core Scope &amp; Deliverables
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-medium leading-snug text-ink-800 sm:text-sm">
                    {cap}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 pt-3">
            <Button to="/contact" variant="primary" className="w-full sm:w-auto group/btn">
              Inquire About This Service
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}