import { useRevealOnScroll } from '@/hooks/useRevealOnScroll.js'

/**
 * Reveal
 * Wraps media (usually an image) in a container that wipes open with a
 * clip-path when it scrolls into view, while the image inside scales down.
 *
 * Two elements are used on purpose: `.reveal` is the observed wrapper and stays
 * unclipped so the IntersectionObserver can see it; `.reveal-inner` carries the
 * clip-path so the media stays hidden until it gains the `in` class (styles in
 * src/styles/home/base.css).
 */
export default function Reveal({ className = '', children, style }) {
  const [ref, inView] = useRevealOnScroll(0.2)

  return (
    <div ref={ref} className={`reveal ${className}`.trim()} style={style}>
      <div className={`reveal-inner${inView ? ' in' : ''}`}>{children}</div>
    </div>
  )
}
