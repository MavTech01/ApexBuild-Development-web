import { useEffect, useRef } from 'react'

/**
 * Attaches a parallax scroll effect to the referenced element.
 * @param {number} speed - Scroll multiplier (0–1). Default 0.4.
 * @param {number} scale - Base scale to prevent edge gaps. Default 1.15.
 */
export default function useParallax(speed = 0.4, scale = 1.15) {
  const ref = useRef(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (ref.current) {
            const offset = window.scrollY * speed
            ref.current.style.transform = `translateY(${offset}px) scale(${scale})`
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, scale])

  return ref
}
