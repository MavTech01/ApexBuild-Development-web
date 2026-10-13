import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * useActiveService
 * Tracks which service in the "What we do" list is currently active while the
 * page scrolls, so the media panel can cross-fade to the matching photo.
 *
 * The section is a two column grid on desktop (list left, sticky panel right)
 * and a single scrolling column on mobile (sticky panel on top, list below).
 * Because the panel sits higher on mobile, the "active line" it watches for is
 * different on each layout.
 */

// Must match the `min-[900px]` breakpoint used by ServicesSection.
const MOBILE_MAX_WIDTH = 900

/**
 * The vertical position (in viewport coordinates) that a service has to cross
 * to become the active one.
 * - Desktop: the centre of the sticky panel.
 * - Mobile: a line in the space below the panel, so each item activates as it
 *   scrolls up underneath the photo.
 */
function getActiveLine(panel) {
  const rect = panel.getBoundingClientRect()
  if (window.innerWidth <= MOBILE_MAX_WIDTH) {
    return rect.bottom + (window.innerHeight - rect.bottom) * 0.3
  }
  return rect.top + rect.height / 2
}

export function useActiveService() {
  const [active, setActive] = useState(0)
  const panelRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    let frame = 0

    const update = () => {
      frame = 0
      const line = getActiveLine(panel)
      let bestIndex = 0
      let bestDistance = Infinity

      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const rect = item.getBoundingClientRect()
        const distance = Math.abs(rect.top + rect.height / 2 - line)
        if (distance < bestDistance) {
          bestDistance = distance
          bestIndex = index
        }
      })

      setActive((prev) => (prev === bestIndex ? prev : bestIndex))
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  /** Smoothly scroll a service to the position where it becomes active. */
  const scrollToService = useCallback((index) => {
    const panel = panelRef.current
    const item = itemRefs.current[index]
    if (!panel || !item) return

    const target =
      window.scrollY + item.getBoundingClientRect().top + item.offsetHeight / 2 - getActiveLine(panel)

    window.scrollTo({ top: target, behavior: 'smooth' })
  }, [])

  return { active, panelRef, itemRefs, scrollToService }
}
