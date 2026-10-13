/**
 * ServiceList
 * The scrolling list of services beside (desktop) or below (mobile) the sticky
 * media panel. The active item is fully opaque and tinted; the others fade
 * back. Clicking an item scrolls it to the active position.
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
            onClick={() => onSelect(index)}
            className={`flex min-h-[46svh] cursor-pointer flex-col items-start justify-center border-t border-white/[0.22] py-[clamp(28px,3.4vw,44px)] transition-opacity duration-500 first:border-t-0 min-[900px]:min-h-[62svh] ${
              isActive ? 'opacity-100' : 'opacity-35'
            }`}
          >
            <h3
              className={`text-[clamp(1.4rem,6vw,1.9rem)] transition-colors duration-300 min-[900px]:text-[clamp(1.6rem,3.2vw,2.6rem)] ${
                isActive ? 'text-azure' : ''
              }`}
            >
              {service.title}
            </h3>
            <p className="mb-4 mt-3 max-w-[26em] text-slate-soft min-[900px]:mb-[22px] min-[900px]:mt-4">
              {service.description}
            </p>
            <a
              href={service.href}
              onClick={(event) => event.stopPropagation()}
              className="inline-flex gap-[0.6em] font-display text-[0.9rem] font-semibold text-white transition-colors after:content-['→'] after:transition-transform hover:text-gold hover:after:translate-x-[5px]"
            >
              Learn more
            </a>
          </div>
        )
      })}
    </div>
  )
}
