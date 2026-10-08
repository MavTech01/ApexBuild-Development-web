import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X, ZoomIn } from 'lucide-react'

/**
 * ImageLightbox
 * Portal-based modal attached directly to document.body.
 * Never trapped inside parent cards, relative wrappers, or transform contexts.
 * Features:
 * - Backdrop click to close
 * - Escape key to close
 * - Prevents background scroll while open
 * - Clean immersive full-screen viewport preview
 */
export default function ImageLightbox({ isOpen, onClose, image, title }) {
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

  if (!isOpen || !image || typeof document === 'undefined') return null

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} full preview` : 'Image preview'}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8"
    >
      {/* Semi-transparent dark overlay — not too dark, soft backdrop blur */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Floating Lightbox Card */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line/60 bg-surface shadow-2xl animate-rise">
        {/* Header Bar */}
        <div className="flex shrink-0 items-center justify-between border-b border-line/70 bg-paper/90 px-5 py-3.5 backdrop-blur-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </span>
            <p className="truncate font-display text-sm font-semibold text-ink-950">
              {title || 'Project Image Preview'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Large Image Showcase Area */}
        <div
          onClick={onClose}
          className="flex flex-1 items-center justify-center overflow-auto bg-ink-950/5 p-3 sm:p-6 cursor-zoom-out"
        >
          <img
            src={image.src}
            alt={image.alt || title || 'Project preview'}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[76vh] w-auto max-w-full rounded-xl object-contain shadow-md cursor-default"
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
