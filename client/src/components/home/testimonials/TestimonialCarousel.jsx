import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import TestimonialCard from './TestimonialCard.jsx'

function getInitialSlidesPerView() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export default function TestimonialCarousel({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlidesPerView)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isTouching, setIsTouching] = useState(false)
  const autoPlayRef = useRef(null)
  const nextSlideRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const needsCarousel = testimonials.length > slidesPerView
  const maxIndex = needsCarousel ? testimonials.length - slidesPerView : 0

  const nextSlide = useCallback(() => {
    if (!needsCarousel || isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [needsCarousel, maxIndex, isTransitioning])

  const prevSlide = useCallback(() => {
    if (!needsCarousel || isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [needsCarousel, maxIndex, isTransitioning])

  const goToSlide = useCallback((index) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  // Keep nextSlideRef up-to-date with latest callback
  useEffect(() => {
    nextSlideRef.current = nextSlide
  })

  // Autoplay interval: stable timer that executes latest nextSlide callback
  useEffect(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }

    if (!isHovered && !isTouching && needsCarousel) {
      autoPlayRef.current = setInterval(() => {
        if (nextSlideRef.current) {
          nextSlideRef.current()
        }
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
    }
  }, [isHovered, isTouching, needsCarousel])

  // Mouse hover events: only trigger on true hover-capable pointers (desktops/laptops)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleTouchStart = (e) => {
    if (!needsCarousel) return
    setIsTouching(true)
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!needsCarousel) return
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!needsCarousel) return
    if (touchStart - touchEnd > 50) {
      nextSlide()
    } else if (touchStart - touchEnd < -50) {
      prevSlide()
    }
    setTimeout(() => setIsTouching(false), 300)
  }

  const handleTouchCancel = () => {
    setIsTouching(false)
  }

  const handleKeyDown = (e) => {
    if (!needsCarousel) return
    if (e.key === 'ArrowLeft') {
      prevSlide()
    } else if (e.key === 'ArrowRight') {
      nextSlide()
    }
  }

  const visibleTestimonials = needsCarousel
    ? testimonials.slice(currentIndex, currentIndex + slidesPerView)
    : testimonials

  const totalDots = maxIndex + 1

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Testimonials carousel"
      aria-live="polite"
    >
      {/* Carousel Content - Equalized height container */}
      <div className="relative mx-auto">
        <div className="relative">
          {/* Mobile view (< sm): Grid stack where all cards occupy the same cell to equalize height to the tallest card */}
          <div className="grid grid-cols-1 [grid-template-areas:'stack'] sm:hidden">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === currentIndex
              return (
                <div
                  key={testimonial.id}
                  style={{ gridArea: 'stack' }}
                  className={`w-full transition-all duration-500 ease-out-premium ${
                    isActive
                      ? 'opacity-100 pointer-events-auto visible scale-100'
                      : 'opacity-0 pointer-events-none invisible scale-98'
                  }`}
                  aria-hidden={!isActive}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              )
            })}
          </div>

          {/* Tablet & Desktop view (>= sm): Standard multi-column grid with smooth fade */}
          <div
            className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: isTransitioning ? 0.7 : 1
            }}
          >
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="h-full transition-opacity duration-500"
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Vertically centered and VISIBLE on mobile */}
          {needsCarousel && (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 -translate-x-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-surface/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 sm:-translate-x-6 sm:bg-surface"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5 text-ink-700" />
              </button>
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 translate-x-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-surface/90 p-2 shadow-lg backdrop-blur-sm transition-all hover:bg-blue-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 sm:translate-x-6 sm:bg-surface"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5 text-ink-700" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Pagination Dots - Much closer to cards */}
      {needsCarousel && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 ${
                index === currentIndex
                  ? 'w-8 bg-blue-500'
                  : 'w-2 bg-blue-500/30 hover:bg-blue-500/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            />
          ))}
        </div>
      )}

      {/* Accessibility: Screen reader announcement */}
      {needsCarousel && (
        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Showing testimonials {currentIndex + 1} to {Math.min(currentIndex + slidesPerView, testimonials.length)} of {testimonials.length}
        </div>
      )}
    </div>
  )
}
