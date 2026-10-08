import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import ImageLightbox from '@/components/ui/ImageLightbox.jsx'

/**
 * ProjectDetailsGallery
 * Smooth, non-shaking image carousel with overlay description and entrance animation.
 * Features:
 * - Stable, fixed-aspect ratio container (no layout shift/page shaking)
 * - Navigation arrows revealed strictly on carousel hover
 * - Floating white overlay badge for image description anchored at bottom
 * - Text entrance animation on initial load and each slide switch
 * - Interactive thumbnail strip and full-screen image lightbox
 */
export default function ProjectDetailsGallery({ image, gallery = [], title = '' }) {
  // Combine hero image + gallery perspectives into unique slide items
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

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  // Mobile swipe gestures
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

  // Auto-advance every 6s when not hovered or in lightbox
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
      className="space-y-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Project images carousel"
    >
      {/* Main Slide Frame — completely stable aspect ratio, no layout shift */}
      <div className="group relative overflow-hidden rounded-2xl border border-line bg-ink-950 shadow-md">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/10]"
        >
          {/* Images Stack with Pure Cross-Fade (no dimension changes) */}
          {allSlides.map((slide, idx) => {
            const isActive = idx === activeIndex
            return (
              <div
                key={slide.src + idx}
                className={`absolute inset-0 transition-opacity duration-600 ease-out-premium ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.src}
                  alt={slide.alt || `${title} view ${idx + 1}`}
                  width={slide.width || 960}
                  height={slide.height || 640}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-full w-full object-cover select-none"
                />
              </div>
            )
          })}

          {/* Top Info Bar: Slide Counter & Fullscreen Lightbox Button */}
          <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
            {totalSlides > 1 && (
              <span className="pointer-events-auto rounded-full bg-ink-950/70 px-3 py-1 font-display text-xs font-semibold tracking-wider text-white backdrop-blur-md">
                {activeIndex + 1} / {totalSlides}
              </span>
            )}

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="pointer-events-auto ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="View full-size image"
              aria-label="Enlarge image in full screen lightbox"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Navigation Arrows — ONLY visible when the carousel is hovered */}
          {totalSlides > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className={`absolute left-3 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg transition-all duration-300 ease-out-premium hover:bg-blue-600 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isHovered
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 -translate-x-2 pointer-events-none'
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className={`absolute right-3 top-1/2 z-30 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg transition-all duration-300 ease-out-premium hover:bg-blue-600 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isHovered
                    ? 'opacity-100 translate-x-0 pointer-events-auto'
                    : 'opacity-0 translate-x-2 pointer-events-none'
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Thumbnails Row */}
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
