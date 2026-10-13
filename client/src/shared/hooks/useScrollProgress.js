import { useEffect, useRef, useState } from 'react'

/**
 * useScrollProgress
 *
 * Tracks how far a specific element has scrolled through the viewport and
 * returns a value between 0 and 1. We use it for the scroll-driven "statement"
 * text and the pinned "process" section.
 *
 * @param {object} ref - React ref pointing at the element to measure.
 * @param {(rect: DOMRect, viewportHeight: number) => number} compute
 *        A small function that turns the element's position into a progress
 *        number. Keeping this outside the hook means each section can define
 *        its own timing without duplicating scroll plumbing.
 */
export function useScrollProgress(ref, compute) {
  const [progress, setProgress] = useState(0)
  const computeRef = useRef(compute)

  // Keep the latest `compute` function without re-subscribing every render.
  useEffect(() => {
    computeRef.current = compute
  })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = element.getBoundingClientRect()
      const raw = computeRef.current(rect, window.innerHeight)
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ref])

  return progress
}
