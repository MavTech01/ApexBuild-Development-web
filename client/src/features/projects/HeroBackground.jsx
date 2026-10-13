export default function HeroBackground() {
  return (
    <>
      {/* Blue orb — top-right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_75%_15%,rgb(37_99_235/0.28),transparent_70%)]"
      />
      {/* Blue orb — bottom-left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_15%_85%,rgb(59_130_246/0.16),transparent_65%)]"
      />
      {/* Blueprint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:80px_80px]"
      />
      {/* Bottom accent line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      />
    </>
  )
}
