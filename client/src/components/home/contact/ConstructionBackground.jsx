import { buildingObjectImg, truckObjectImg } from '@/assets/images'

export default function ConstructionBackground() {
  return (
    <>
      {/* Subtle gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgb(37_99_235/0.03),transparent_70%)]"
      />

      {/* Building/Construction Site - Top Right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-10 h-[300px] w-[400px] opacity-[0.08] lg:h-[400px] lg:w-[500px]"
      >
        <img
          src={buildingObjectImg}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Truck - Bottom Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 h-[180px] w-[250px] opacity-[0.08] lg:h-[220px] lg:w-[300px]"
      >
        <img
          src={truckObjectImg}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Additional smaller truck - Top Left (for balance) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[15%] hidden h-[120px] w-[160px] opacity-[0.05] lg:block"
      >
        <img
          src={truckObjectImg}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>

      {/* Additional smaller building - Bottom Right (for balance) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[5%] hidden h-[200px] w-[280px] opacity-[0.05] lg:block"
      >
        <img
          src={buildingObjectImg}
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
    </>
  )
}
