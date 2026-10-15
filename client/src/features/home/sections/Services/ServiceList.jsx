// Row shell. Active rows are fully opaque; the rest fade back. On desktop the
// row must be tall so the sticky media panel has room to travel.
const ITEM_CLASS = [
  'flex min-h-[46svh] cursor-pointer flex-col items-start justify-center',
  'border-t border-[var(--color-hairline)] py-[clamp(28px,3.4vw,44px)]',
  'transition-opacity duration-500 first:border-t-0 min-[900px]:min-h-[62svh]',
].join(' ')

const TITLE_CLASS =
  'text-[clamp(1.4rem,6vw,1.9rem)] transition-colors duration-300 min-[900px]:text-[clamp(1.6rem,3.2vw,2.6rem)]'

/**
 * ServiceList
 * The scrolling list of services beside (desktop) or below (mobile) the sticky
 * media panel. The active item is fully opaque and tinted; the others fade
 * back. Clicking an item scrolls it to the active position.
 *
 * The whole row is a click target, so it is also exposed as a button for
 * keyboard users (Enter / Space scroll the row into the active position).
 */
export default function ServiceList({ services, active, onSelect, itemRefs }) {
  return (
    <div className="min-[900px]:order-1">
      {services.map((service, index) => {
        const isActive = index === active

        return (
          <div
            key={service.id}
            ref={(node) => {
              itemRefs.current[index] = node
            }}
            role="button"
            tabIndex={0}
            aria-pressed={isActive}
            onClick={() => onSelect(index)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(index)
              }
            }}
            className={`${ITEM_CLASS} ${isActive ? 'opacity-100' : 'opacity-35'}`}
          >
            <h3 className={`${TITLE_CLASS} ${isActive ? 'text-royal' : ''}`}>{service.title}</h3>
            <p className="mb-4 mt-3 max-w-[26em] text-muted min-[900px]:mb-[22px] min-[900px]:mt-4">
              {service.description}
            </p>
            <a
              href={service.href}
              onClick={(event) => event.stopPropagation()}
              className="inline-flex gap-[0.6em] font-display text-[0.9rem] font-semibold text-royal transition-colors after:content-['→'] after:transition-transform hover:text-ink hover:after:translate-x-[5px]"
            >
              Learn more
            </a>
          </div>
        )
      })}
    </div>
  )
}
