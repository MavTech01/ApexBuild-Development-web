export default function MarqueeStrip() {
  const items = ['CONSTRUCTION', 'PROPERTY DEVELOPMENT', 'RENOVATION', 'PROJECT MANAGEMENT', 'ARCHITECTURAL CONSULTING']
  const text = items.join('   •   ')
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-line bg-paper">
      <div className="relative h-10 w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-[marquee_40s_linear_infinite] whitespace-nowrap font-display text-[11px] font-semibold tracking-[0.22em] text-ink-500 uppercase">
            <span className="mx-8">{text}</span>
            <span className="mx-8">{text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
