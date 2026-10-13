import { Link } from 'react-router-dom'
import { quickConnectActions } from './quickConnect.data.js'

/**
 * QuickConnectActions
 * The expanded speed-dial action items (WhatsApp, Direct Call, Project Enquiry).
 */
export default function QuickConnectActions({ isOpen, onAction }) {
  return (
    <div
      className={`absolute bottom-[72px] right-0 flex flex-col items-end gap-2.5 transition-all duration-300 ease-out-premium ${
        isOpen
          ? 'visible opacity-100 translate-y-0 pointer-events-auto'
          : 'invisible opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      {quickConnectActions.map((action, idx) => {
        const Icon = action.icon
        const content = (
          <div className="flex items-center gap-2.5 pr-1.5">
            {/* Tooltip / Label Card */}
            <div className="rounded-lg border border-line bg-surface/95 px-3 py-1.5 shadow-md backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02]">
              <p className="font-display text-xs font-semibold text-ink-950 whitespace-nowrap">
                {action.label}
              </p>
              <p className="text-[11px] text-ink-500 font-normal whitespace-nowrap">
                {action.description}
              </p>
            </div>

            {/* Action Circle Button (centered with main FAB trigger) */}
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-out-premium hover:scale-110 ${action.colorClass}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>
        )

        if (action.to) {
          return (
            <Link
              key={action.id}
              to={action.to}
              onClick={onAction}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
            >
              {content}
            </Link>
          )
        }

        return (
          <a
            key={action.id}
            href={action.href}
            target={action.isExternal ? '_blank' : undefined}
            rel={action.isExternal ? 'noopener noreferrer' : undefined}
            onClick={onAction}
            style={{ transitionDelay: `${idx * 40}ms` }}
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
          >
            {content}
          </a>
        )
      })}
    </div>
  )
}
