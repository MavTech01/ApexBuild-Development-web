/**
 * ServiceCardMedia
 * The service image viewport: a rounded, full-bleed image that zooms softly on
 * hover, with a subtle depth gradient at its base. Used inside the accordion
 * rows of the "What We Deliver" section.
 */
export default function ServiceCardMedia({ image, title }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line bg-ink-100">
      <img
        src={image.src}
        alt={image.alt || title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-out-premium group-hover:scale-105"
      />

      {/* Subtle lighting gradient at the base for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/35 via-transparent to-transparent"
      />
    </div>
  )
}