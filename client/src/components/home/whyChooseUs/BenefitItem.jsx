import { DraftingCompass, Users, Eye, Sprout } from 'lucide-react'

const icons = {
  drafting: DraftingCompass,
  users: Users,
  eye: Eye,
  sprout: Sprout,
}

// Renders one row only. The parent <ul> owns list semantics, so this stays a
// plain <div> to keep the markup valid.
export default function BenefitItem({ benefit }) {
  const Icon = icons[benefit.icon]

  if (!Icon) return null

  return (
    <div className="group flex gap-5 border-t border-line py-7 sm:gap-6">
      <span className="grid h-11 w-11 shrink-0 place-items-center bg-bronze-100 text-bronze-700 transition-colors duration-300 ease-standard group-hover:bg-bronze-600 group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" focusable="false" />
      </span>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg text-ink-950 transition-colors duration-300 ease-standard group-hover:text-bronze-700">
          {benefit.title}
        </h3>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-500">{benefit.description}</p>
      </div>

      <span
        aria-hidden="true"
        className="shrink-0 font-display text-xs font-semibold text-ink-500 tabular-nums"
      >
        {benefit.index}
      </span>
    </div>
  )
}