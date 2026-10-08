import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { MessageSquare, X } from 'lucide-react'
import { quickConnectActions } from './quickConnect.data.js'

/**
 * QuickConnectFAB
 * Floating Action Button (FAB) at bottom-right corner of viewport.
 * Fans out 3 speed-dial channels: WhatsApp, Direct Call, and Project Enquiry.
 * Features:
 * - Outside-click & Escape dismissal
 * - Keyboard accessibility (tab-friendly, aria-expanded)
 * - Tooltip labels with descriptions
 * - Subtle status notification indicator
 */
export default function QuickConnectFAB() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const toggleOpen = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  return (
    <aside
      ref={containerRef}
      aria-label="Quick communication channels"
      className="fixed bottom-5 right-3 z-40 sm:bottom-6 sm:right-4"
    >
      {/* Expanded Speed-Dial Action Items */}
      <div
        className={`mb-3 flex flex-col items-end gap-2.5 transition-all duration-300 ease-out-premium ${
          isOpen
            ? 'visible opacity-100 translate-y-0 pointer-events-auto'
            : 'invisible opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        {quickConnectActions.map((action, idx) => {
          const Icon = action.icon
          const content = (
            <div className="flex items-center gap-2.5">
              {/* Tooltip / Label Card */}
              <div className="rounded-lg border border-line bg-surface/95 px-3 py-1.5 shadow-md backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02]">
                <p className="font-display text-xs font-semibold text-ink-950">
                  {action.label}
                </p>
                <p className="text-[11px] text-ink-500 font-normal">
                  {action.description}
                </p>
              </div>

              {/* Action Circle Button */}
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
                onClick={close}
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
              onClick={close}
              style={{ transitionDelay: `${idx * 40}ms` }}
              className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
            >
              {content}
            </a>
          )
        })}
      </div>

      {/* Main Trigger FAB */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={isOpen ? 'Close quick contact menu' : 'Open quick contact options'}
        title="Contact ApexBuild"
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300 ease-out-premium focus:outline-none focus:ring-4 focus:ring-blue-500/30 ${
          isOpen
            ? 'bg-ink-900 text-white rotate-90 scale-95 hover:bg-ink-950'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 hover:shadow-blue'
        }`}
      >
        {/* Pulsing Green Online Indicator (when closed) */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-surface bg-emerald-500" />
          </span>
        )}

        {isOpen ? (
          <X className="h-6 w-6 transition-transform duration-200" strokeWidth={2.2} />
        ) : (
          <MessageSquare className="h-6 w-6 transition-transform duration-200" strokeWidth={2.2} />
        )}
      </button>
    </aside>
  )
}
