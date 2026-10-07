import useParallax from '@/hooks/useParallax.js'

export default function ParallaxImage({ src, alt = '', width, height }) {
  const parallaxRef = useParallax(0.4, 1.15)

  return (
    <div
      ref={parallaxRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-20 will-change-transform"
      style={{ transform: 'translateY(0) scale(1.15)' }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-full w-full object-cover opacity-35 sm:opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/40 to-ink-950/60" />
    </div>
  )
}
