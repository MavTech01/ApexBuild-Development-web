import BuildingIcon1 from '@/shared/components/decorative/BuildingIcon1.jsx'
import BuildingIcon2 from '@/shared/components/decorative/BuildingIcon2.jsx'

export default function StatsDecorations() {
  return (
    <>
      {/* Top-right building decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 h-48 w-48 opacity-[0.06] animate-float-slow"
      >
        <BuildingIcon1 />
      </div>

      {/* Bottom-left building decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 opacity-[0.05] animate-float-slower"
      >
        <BuildingIcon2 />
      </div>
    </>
  )
}
