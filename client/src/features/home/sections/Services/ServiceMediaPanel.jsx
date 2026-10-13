/**
 * ServiceMediaPanel
 * The sticky photo panel for the "What we do" section. Each service gets a
 * full-bleed photo stacked on top of the others; the active one fades in (see
 * `.services-scene` in services.css). A small overlay shows progress bars, the
 * count, the active title and its caption.
 *
 * Layout mirrors the original prototype:
 * - Mobile: pinned near the top, above the list, so the text scrolls beneath.
 * - Desktop: sits in the right column and sticks while the list scrolls.
 */
export default function ServiceMediaPanel({ services, active, panelRef }) {
  const current = services[active]

  return (
    <div
      id="svi"
      ref={panelRef}
      className="sticky top-[calc(env(safe-area-inset-top,0px)_+_76px)] z-[5] h-[36svh] overflow-hidden rounded-[18px] bg-[#0b2a6b] shadow-[0_14px_40px_rgba(0,0,0,0.45)] min-[900px]:order-2 min-[900px]:top-[calc(env(safe-area-inset-top,0px)_+_96px)] min-[900px]:h-[min(72svh,620px)] min-[900px]:shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
    >
      {services.map((service, index) => (
        <div key={service.id} className={`services-scene${index === active ? ' on' : ''}`}>
          <img src={service.image} alt={service.imageAlt} loading="lazy" />
        </div>
      ))}

      <div className="absolute inset-x-[10px] bottom-[10px] rounded-xl bg-[rgba(7,18,43,0.8)] px-[14px] py-[10px] backdrop-blur-[10px] min-[900px]:inset-x-[18px] min-[900px]:bottom-[18px] min-[900px]:px-5 min-[900px]:py-4">
        <div className="mb-2 flex items-center gap-3 min-[900px]:mb-4">
          {services.map((service, index) => (
            <i
              key={service.id}
              className={`h-[3px] w-8 rounded-full transition-colors ${
                index <= active ? 'bg-gold' : 'bg-white/25'
              }`}
            />
          ))}
        </div>
        <em className="not-italic text-[0.8rem] font-semibold text-azure">
          0{active + 1} / 0{services.length}
        </em>
        <b className="block font-display text-[1.1rem] font-semibold">{current.title}</b>
        <span className="hidden text-[0.9rem] text-slate-soft min-[900px]:inline">
          {current.caption}
        </span>
      </div>
    </div>
  )
}
