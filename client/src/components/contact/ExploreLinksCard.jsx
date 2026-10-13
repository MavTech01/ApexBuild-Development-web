import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const linkClass =
  'group flex items-center justify-between rounded-lg border border-line/80 bg-surface px-4 py-3 text-sm font-semibold text-ink-800 transition-colors hover:border-blue-500/50 hover:text-blue-600 active:border-blue-500/50 active:text-blue-600'

/**
 * ExploreLinksCard
 * Quick navigation shortcuts shown on the contact page sidebar.
 */
export default function ExploreLinksCard() {
  return (
    <div
      style={{ animationDelay: '360ms' }}
      className="rounded-2xl border border-line bg-paper/60 p-6 sm:p-7 animate-rise"
    >
      <h4 className="font-display text-sm font-bold tracking-wider text-ink-900 uppercase">
        Explore Before Inquiring
      </h4>
      <p className="mt-1 text-xs text-ink-600">
        Review our recent projects or full service capabilities:
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        <Link to="/projects" className={linkClass}>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
            View Featured Projects
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" aria-hidden="true" />
        </Link>

        <Link to="/services" className={linkClass}>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
            Explore Our Capabilities
          </span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-active:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}
