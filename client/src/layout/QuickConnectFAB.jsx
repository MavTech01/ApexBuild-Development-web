import { MessageSquare, X } from 'lucide-react'
import { useQuickConnectFab } from '@/layout/useQuickConnectFab.js'
import QuickConnectActions from '@/layout/QuickConnectActions.jsx'

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
  const { isOpen, containerRef, toggle, close } = useQuickConnectFab()

  return (
    <aside
      ref={containerRef}
      aria-label="Quick communication channels"
      className="fixed bottom-4 right-2 z-40 sm:bottom-6 sm:right-3"
    >
      <QuickConnectActions isOpen={isOpen} onAction={close} />

      {/* Main Trigger FAB */}
      <button
        type="button"
        onClick={toggle}
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
