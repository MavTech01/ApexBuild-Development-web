export default function MarqueeStrip() {
  const items = ['CONSTRUCTION', 'PROPERTY DEVELOPMENT', 'RENOVATION', 'PROJECT MANAGEMENT', 'ARCHITECTURAL CONSULTING']
  const text = items.join('   ◆   ')
  return (
    <div aria-hidden="true" className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-blue-600)_0%,transparent_15%,transparent_85%,var(--color-blue-600)_100%)] opacity-20" />
      <div className="relative h-12 w-full">
        <div className="absolute inset-0 flex items-center">
          <div className="animate-[marquee_40s_linear_infinite] whitespace-nowrap font-display text-[11px] font-semibold tracking-[0.25em] text-blue-300/80 uppercase">
            <span className="mx-8">{text}</span>
            <span className="mx-8">{text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
