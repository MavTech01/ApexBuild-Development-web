import { site } from '@/shared/config/site.js'

/**
 * FooterWatermark
 * Oversized, low-opacity brand wordmark behind the footer content. Rises into
 * place as the footer reaches the end of the scroll.
 */
export default function FooterWatermark({ progress }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 select-none whitespace-nowrap text-center font-display font-extrabold uppercase leading-none tracking-[-0.02em] text-white/5 [font-size:clamp(3.5rem,16vw,15rem)] will-change-transform"
      style={{ transform: `translateY(${(1 - progress) * 100}%)`, opacity: progress }}
    >
      {site.wordmark}
    </span>
  )
}
