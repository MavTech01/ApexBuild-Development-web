import { useState } from 'react'
import { Eye } from 'lucide-react'
import ImageLightbox from '@/components/ui/ImageLightbox.jsx'

/**
 * ProjectCardMedia
 * Encapsulates the project image thumbnail with smooth hover effects,
 * soft translucent dark overlay, eye button, and integrated lightbox modal.
 */
export default function ProjectCardMedia({ image, title }) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleOpenPreview = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLightboxOpen(true)
  }

  const handleClosePreview = () => {
    setIsLightboxOpen(false)
  }

  return (
    <>
      <div className="relative aspect-[16/9] overflow-hidden bg-ink-50">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out-premium group-hover:scale-105 motion-reduce:group-hover:scale-100"
        />

        {/* Soft, translucent dark overlay on hover (not too dark: black/35) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink-950/35 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 ease-out-premium group-hover:opacity-100"
        />

        {/* Eye action button to trigger lightbox */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <button
            type="button"
            onClick={handleOpenPreview}
            aria-label={`View enlarged image for ${title}`}
            title="Preview full image"
            className="pointer-events-auto inline-flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-lg backdrop-blur-xs opacity-0 transition-all duration-300 ease-out-premium hover:scale-110 hover:bg-white hover:text-blue-600 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 group-hover:scale-100 group-hover:opacity-100"
          >
            <Eye className="h-5 w-5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={handleClosePreview}
        image={image}
        title={title}
      />
    </>
  )
}
