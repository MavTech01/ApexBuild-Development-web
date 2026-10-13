import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { site } from '@/config/site.js'
import Brand from '@/components/ui/Brand.jsx'

/**
 * FooterBrandColumn
 * Brand logo (with a one-time entrance animation), description and tagline.
 */
export default function FooterBrandColumn({ revealed }) {
  const logoRef = useRef(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    if (revealed && !hasAnimatedRef.current && logoRef.current) {
      hasAnimatedRef.current = true

      gsap.fromTo(
        logoRef.current,
        { scale: 0.9, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.7)', delay: 0.2 }
      )
    }
  }, [revealed])

  return (
    <div className="min-[900px]:col-span-1">
      <div ref={logoRef}>
        <Brand />
      </div>
      <p className="mt-5 max-w-[34em] text-[0.95rem] leading-[1.55]">{site.description}</p>
      <em className="mt-[18px] block font-display text-[0.95rem] font-semibold not-italic text-gold">{site.tagline}</em>
    </div>
  )
}
