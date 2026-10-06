export default function ProjectDetailsGallery({ image, gallery = [] }) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Featured Main Image */}
      <figure className="group relative animate-rise">
        <span
          aria-hidden="true"
          className="absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-xl border border-blue-500/30 lg:block"
        />

        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-ink-100 shadow-lift sm:aspect-[16/9] lg:aspect-[21/10]">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 ease-out-premium group-hover:scale-102 motion-reduce:group-hover:scale-100"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/20 via-transparent to-transparent" />
        </div>

        {image.alt && (
          <figcaption className="mt-2.5 text-xs text-ink-500 italic">
            {image.alt}
          </figcaption>
        )}
      </figure>

      {/* Additional Gallery Perspectives */}
      {gallery && gallery.length > 0 && (
        <div>
          <h3 className="sr-only">Project Gallery Perspectives</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {gallery.map((item, idx) => (
              <figure
                key={item.src + idx}
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
                className="group relative overflow-hidden rounded-lg border border-line bg-ink-50 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-md animate-rise"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out-premium group-hover:scale-105 motion-reduce:group-hover:scale-100"
                  />
                </div>
                {item.alt && (
                  <figcaption className="bg-surface/90 px-3.5 py-2 text-xs text-ink-600 backdrop-blur-xs">
                    {item.alt}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
