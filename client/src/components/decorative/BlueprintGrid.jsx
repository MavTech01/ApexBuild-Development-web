export default function BlueprintGrid() {
  return (
    <>
      {/* Vertical blueprint lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              rgb(37 99 235) 0,
              rgb(37 99 235) 1px,
              transparent 1px,
              transparent 80px
            ),
            repeating-linear-gradient(
              90deg,
              rgb(37 99 235) 0,
              rgb(37 99 235) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
        }}
      />

      {/* Horizontal blueprint lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgb(37 99 235) 0,
              rgb(37 99 235) 1px,
              transparent 1px,
              transparent 80px
            ),
            repeating-linear-gradient(
              0deg,
              rgb(37 99 235) 0,
              rgb(37 99 235) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
        }}
      />

      {/* Diagonal accent lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgb(37 99 235) 100px,
              rgb(37 99 235) 101px
            )
          `,
        }}
      />
    </>
  )
}
