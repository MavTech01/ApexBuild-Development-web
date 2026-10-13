import { projectCategories } from '@/features/projects/projects.data.js'

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {projectCategories.map((cat) => (
        <button
          key={cat.slug}
          type="button"
          onClick={() => onChange(cat.slug)}
          className={`rounded-[4px] px-4 py-2.5 font-display text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-300 ease-out-premium sm:px-5 sm:py-3 sm:text-sm ${
            active === cat.slug
              ? 'bg-blue-600 text-white shadow-blue'
              : 'border border-line bg-surface text-ink-600 hover:-translate-y-0.5 hover:border-blue-500/40 hover:text-blue-700 hover:shadow-[0_4px_12px_rgb(37_99_235/0.1)]'
          }`}
          aria-pressed={active === cat.slug}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
