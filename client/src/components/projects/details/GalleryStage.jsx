import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const arrowClass =
  'absolute top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink-950 shadow-lg transition-all duration-300 ease-out-premium hover:bg-blue-600 hover:text-white hover:scale-105 active:bg-blue-600 active:text-white active:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500'

/**
 * GalleryStage
 * The main slide frame: cross-fading image stack, slide counter, fullscreen
 * button and hover-revealed navigation arrows.
 */
export default function GalleryStage({
  slides,
  activeIndex,
  totalSlides,
  isHovered,
  title,
  onNext,
  onPrev,
  onOpenLightbox,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-ink-950 shadow-md">
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[21/10]"
      >
        {/* Images Stack with Pure Cross-Fade */}
        {slides.map((slide, idx) => {
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

        {/* Top Info Bar: slide counter + fullscreen button */}
        <div className="pointer-events-none absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
          {totalSlides > 1 && (
            <span className="pointer-events-auto rounded-full bg-ink-950/70 px-3 py-1 font-display text-xs font-semibold tracking-wider text-white backdrop-blur-md">
              {activeIndex + 1} / {totalSlides}
            </span>
          )}

          <button
            type="button"
            onClick={onOpenLightbox}
            className="pointer-events-auto ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/70 text-white backdrop-blur-md transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:bg-blue-600 active:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            title="View full-size image"
            aria-label="Enlarge image in full screen lightbox"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Arrows — only visible when hovered */}
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={onPrev}
              className={`${arrowClass} left-3 ${
                isHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 -translate-x-2 pointer-events-none'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2.2} />
            </button>

            <button
              type="button"
              onClick={onNext}
              className={`${arrowClass} right-3 ${
                isHovered ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </>
        )}
      </div>
    </div>
  )
}
