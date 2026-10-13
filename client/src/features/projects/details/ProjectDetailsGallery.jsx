import ImageLightbox from '@/shared/ui/ImageLightbox.jsx'
import GalleryThumbnails from '@/features/projects/details/GalleryThumbnails.jsx'
import GalleryStage from '@/features/projects/details/GalleryStage.jsx'
import { useGalleryCarousel } from '@/features/projects/details/useGalleryCarousel.js'

/**
 * ProjectDetailsGallery
 * Stable-aspect image carousel with a description overlay, navigation arrows
 * (revealed on hover), a thumbnail strip and a full-screen lightbox.
 */
export default function ProjectDetailsGallery({ image, gallery = [], title = '' }) {
  const {
    allSlides,
    totalSlides,
    activeIndex,
    currentSlide,
    isLightboxOpen,
    setIsLightboxOpen,
    isHovered,
    setIsHovered,
    nextSlide,
    prevSlide,
    goToSlide,
    handleKeyDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useGalleryCarousel({ image, gallery })

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
      <GalleryStage
        slides={allSlides}
        activeIndex={activeIndex}
        totalSlides={totalSlides}
        isHovered={isHovered}
        title={title}
        onNext={nextSlide}
        onPrev={prevSlide}
        onOpenLightbox={() => setIsLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />

      {/* Thumbnails */}
      {totalSlides > 1 && (
        <GalleryThumbnails slides={allSlides} activeIndex={activeIndex} onSelect={goToSlide} />
      )}

      {/* Fullscreen Lightbox */}
      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        image={currentSlide}
        title={title || currentSlide.alt}
      />
    </div>
  )
}
