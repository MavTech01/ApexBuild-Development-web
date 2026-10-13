/**
 * GalleryThumbnails
 * Thumbnail strip that lets the user jump to a specific carousel slide.
 */
export default function GalleryThumbnails({ slides, activeIndex, onSelect }) {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-1 pt-1">
      {slides.map((slide, idx) => {
        const isSelected = idx === activeIndex
        return (
          <button
            key={slide.src + idx}
            type="button"
            onClick={() => onSelect(idx)}
            aria-label={`Go to image perspective ${idx + 1}`}
            aria-current={isSelected ? 'true' : 'false'}
            className={`relative aspect-[16/10] h-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 ease-out-premium focus:outline-none sm:h-20 ${
              isSelected
                ? 'border-blue-600 ring-2 ring-blue-500/20 scale-[1.02]'
                : 'border-line/70 opacity-60 hover:opacity-100 hover:border-blue-400 active:opacity-100 active:border-blue-400'
            }`}
          >
            <img src={slide.src} alt="" className="h-full w-full object-cover" />
          </button>
        )
      })}
    </div>
  )
}
