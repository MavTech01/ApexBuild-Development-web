import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

/**
 * VideoModal
 * Portal-based modal attached directly to document.body, so it is never
 * trapped inside parent cards, relative wrappers, or transform contexts.
 * - Closes on Escape, backdrop click, or the close button
 * - Locks background scroll while open
 * - Plays a 16:9 <video> with native controls and the given poster
 */
export default function VideoModal({ isOpen, onClose, src, poster, title }) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen || !src || typeof document === 'undefined') return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Video player'}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
    >
      {/* Dark backdrop — closes the player on click */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-950/85 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Player */}
      <div className="relative z-10 w-full max-w-4xl animate-rise">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video player"
          className="absolute -top-13 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="aspect-video w-full rounded-2xl border border-white/10 bg-black object-cover shadow-2xl"
        />
      </div>
    </div>,
    document.body
  )
}