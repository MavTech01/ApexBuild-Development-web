import { useState, useEffect, useCallback, useRef } from 'react'

/**
 * useGalleryCarousel
 * All state and interaction logic for ProjectDetailsGallery: slide list,
 * navigation, keyboard/swipe handling and auto-advance.
 */
export function useGalleryCarousel({ image, gallery = [] } = {}) {
  // Combine hero image + gallery perspectives into unique slide items.
  const allSlides = [image, ...gallery.filter((g) => g && g.src && g.src !== image?.src)].filter(Boolean)

  const [activeIndex, setActiveIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const timerRef = useRef(null)

  const totalSlides = allSlides.length

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToSlide = (index) => setActiveIndex(index)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }

  // Mobile swipe gestures.
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

  // Auto-advance every 6s when not hovered or in the lightbox.
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

  return {
    allSlides,
    totalSlides,
    activeIndex,
    currentSlide: allSlides[activeIndex] || image,
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
  }
}
