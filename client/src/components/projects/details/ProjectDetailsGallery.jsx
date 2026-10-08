import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import ImageLightbox from '@/components/ui/ImageLightbox.jsx'

/**
 * ProjectDetailsGallery
 * Carousel display for project details images.
 * Replaces the multi-image stack with a single focused slide view,
 * thumbnail previews, navigation controls, auto-play pause on hover,
 * and integrated full-screen lightbox preview.
 */
export default function ProjectDetailsGallery({ image, gallery = [], title = '' }) {
  // Combine hero image + gallery perspectives into one unified array of slides
  const allSlides = [
    image,
    ...gallery.filter((g) => g && g.src && g.src !== image?.src),
  ].filter(Boolean)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const timerRef = useRef(null)

  const totalSlides = allSlides.length
  const currentSlide = allSlides[activeIndex] || image

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index) => {
    setActiveIndex(index)
  }

  // Keyboard navigation when focused
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide()
    if (touchStart - touchEnd < -50) prevSlide()
  }

  // Subtle auto-advance every 6 seconds when not hovered or engaged
  useEffect(() => {
    if (totalSlides <= 1 || isHovered || isLightboxOpen) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(nextSlide, 6000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [totalSlides, isHovered, isLightboxOpen, nextSlide])

  if (!currentSlide) return null

  return (
    <div
      className="space-y-4 animate-rise"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Project images carousel"
    >
      {/* Main Active Slide Display */}
      <figure className="group relative overflow-hidden rounded-2xl border border-line bg-ink-950 shadow-md">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-[21/10]"
        >
          {allSlides.map((slide, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={slide.src + idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-out-premium ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.src}
                  alt={slide.alt || `${title} perspective ${idx + 1}`}
                  width={slide.width || 960}
                  height={slide.height || 640}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out-premium group-hover:scale-102"
                />
              </div>
            )
          })}

          {/* Vignette Gradient Overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink-950/40 via-transparent to-ink-950/20"
          />

          {/* Top Info Bar: Slide Counter & Fullscreen Lightbox Button */}
          <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
            {totalSlides > 1 && (
              <span className="rounded-full bg-ink-950/60 px-3 py-1 font-display text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                {activeIndex + 1} / {totalSlides}
              </span>
            )}

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-white backdrop-blur-md transition-all hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Enlarge image"
              aria-label="Enlarge image in full screen lightbox"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Arrows (visible if > 1 slide) */}
          {totalSlides > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-md backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-md backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-90 sm:opacity-0 sm:group-hover:opacity-100"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        {currentSlide.alt && (
          <figcaption className="border-t border-line/40 bg-surface/95 px-4 py-2.5 text-xs text-ink-600 backdrop-blur-sm sm:px-5">
            {currentSlide.alt}
          </figcaption>
        )}
      </figure>

      {/* Thumbnails Row (when multiple slides are available) */}
      {totalSlides > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1">
          {allSlides.map((slide, idx) => {
            const isSelected = idx === activeIndex
            return (
              <button
                key={slide.src + idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Go to image perspective ${idx + 1}`}
                aria-current={isSelected ? 'true' : 'false'}
                className={`relative aspect-[16/10] h-16 sm:h-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ease-out-premium focus:outline-none ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-500/20 scale-[1.02]'
                    : 'border-line/70 opacity-60 hover:opacity-100 hover:border-blue-400'
                }`}
              >
                <img
                  src={slide.src}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </button>
            )
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={currentSlide}
        title={title || currentSlide.alt}
      />
    </div>
  )
}
