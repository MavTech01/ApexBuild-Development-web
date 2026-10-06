import BlueprintGrid from '@/components/decorative/BlueprintGrid.jsx'
import IsometricBuilding from '@/components/decorative/IsometricBuilding.jsx'

export default function WhyChooseUsBackground() {
  return (
    <>
      {/* Original radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_65%_at_75%_25%,rgb(37_99_235/0.12),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_25%_75%,rgb(59_130_246/0.08),transparent_65%)]"
      />

      {/* Blueprint grid pattern */}
      <BlueprintGrid />

      {/* Isometric building - top right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 text-blue-600 opacity-[0.06] animate-float-slow"
      >
        <IsometricBuilding />
      </div>

      {/* Isometric building - bottom left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 text-blue-700 opacity-[0.04] animate-float-slower"
      >
        <IsometricBuilding />
      </div>

      {/* Isometric building - center right (smaller) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-12 h-48 w-48 -translate-y-1/2 text-blue-500 opacity-[0.05]"
        style={{ animationDelay: '2s' }}
      >
        <IsometricBuilding />
      </div>
    </>
  )
}
