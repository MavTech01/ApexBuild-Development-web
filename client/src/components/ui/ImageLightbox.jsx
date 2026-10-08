import { useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'

/**
 * ImageLightbox
 * Minimal, accessible modal for viewing project images in large scale.
 * - Backdrop click to close
 * - Esc key to close
 * - Traps scroll while open
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

  if (!isOpen || !image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} full image` : 'Project Image Lightbox'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-reveal"
    >
      {/* Semi-transparent dark backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink-950/75 backdrop-blur-xs transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Lightbox Container */}
      <div className="relative z-10 max-h-[90vh] max-w-5xl overflow-hidden rounded-xl bg-surface shadow-2xl ring-1 ring-white/10 animate-rise">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between border-b border-line bg-paper/95 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-ink-950 font-display text-sm font-semibold tracking-wide">
            <ZoomIn className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="truncate max-w-[260px] sm:max-w-md">{title || 'Project Preview'}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-950 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close image preview"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Large Image Preview */}
        <div className="relative flex items-center justify-center overflow-auto bg-ink-950/5 p-2 sm:p-4">
          <img
            src={image.src}
            alt={image.alt || title || 'Project image preview'}
            className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-sm"
          />
        </div>
      </div>
    </div>
  )
}
