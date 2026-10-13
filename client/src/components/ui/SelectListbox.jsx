import { Check } from 'lucide-react'

/**
 * SelectListbox
 * Dropdown options panel for the custom Select field.
 */
export default function SelectListbox({ options, currentValue, onSelect }) {
  return (
    <ul
      role="listbox"
      tabIndex={-1}
      className="absolute top-full left-0 right-0 z-50 mt-1.5 max-h-60 overflow-y-auto rounded-xl border border-line bg-surface p-1.5 shadow-[0_12px_36px_rgb(0_0_0/0.12)] animate-dropdown focus:outline-none"
    >
      {options.map((option) => {
        const isSelected = option.value === currentValue
        return (
          <li
            key={option.value}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(option.value)}
            className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm transition-colors cursor-pointer select-none ${
              isSelected
                ? 'bg-blue-50 text-blue-700 font-semibold'
                : 'text-ink-800 hover:bg-paper hover:text-ink-950'
            }`}
          >
            <span className="truncate">{option.label}</span>
            {isSelected && (
              <Check className="ml-2 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
            )}
          </li>
        )
      })}
    </ul>
  )
}
