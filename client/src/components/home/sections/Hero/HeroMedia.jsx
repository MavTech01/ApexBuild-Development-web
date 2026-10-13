import { useEffect, useRef } from 'react'
import { heroImg } from '@/assets/images'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * HeroMedia
 * Full-bleed hero photo that drifts slightly on scroll and mouse move for a
 * parallax feel. Only a real mouse drives the parallax; touch taps don't move it.
 */
export default function HeroMedia() {
  const imageRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    let frame = 0
    let mouseX = 0
    let mouseY = 0

    const paint = () => {
      frame = 0
      const node = imageRef.current
      if (!node) return
      const drift = window.scrollY * -0.12
      node.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30 + drift}px) scale(1.08)`
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    const onPointerMove = (event) => {
      if (event.pointerType !== 'mouse') return
      mouseX = event.clientX / window.innerWidth - 0.5
      mouseY = event.clientY / window.innerHeight - 0.5
      schedule()
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('scroll', schedule, { passive: true })
    schedule()
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="hero-media">
      <img ref={imageRef} src={heroImg} alt="" aria-hidden="true" draggable="false" />
    </div>
  )
}
