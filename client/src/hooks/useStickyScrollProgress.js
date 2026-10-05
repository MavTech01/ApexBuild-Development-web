import { useState, useEffect, useRef } from 'react'

/**
 * Hook to track scroll progress through a sticky section
 * Returns the active index based on scroll position
 *
 * @param {number} totalItems - Total number of items to progress through
 * @param {boolean} isEnabled - Whether the tracking is enabled
 * @returns {Object} - { sectionRef, activeIndex }
 */
export function useStickyScrollProgress(totalItems = 4, isEnabled = true) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!isEnabled) return

    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionRect = sectionRef.current.getBoundingClientRect()
      const sectionTop = sectionRect.top
      const sectionHeight = sectionRect.height

      // Check if section is in the sticky zone (when top reaches 0 or above)
      if (sectionTop <= 0 && Math.abs(sectionTop) < sectionHeight) {
        // Calculate how far through the section we've scrolled (0 to 1)
        const scrollProgress = Math.abs(sectionTop) / sectionHeight

        // Map scroll progress to item index
        // Multiply by 2 to slow down progression (more scroll per item)
        const itemIndex = Math.min(
          Math.floor(scrollProgress * totalItems * 2),
          totalItems - 1
        )

        setActiveIndex(itemIndex)
      }
    }

    // Initial check
    handleScroll()

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isEnabled, totalItems])

  return { sectionRef, activeIndex }
}
