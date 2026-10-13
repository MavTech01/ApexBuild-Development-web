import { ChevronDown } from 'lucide-react'

/**
 * SelectTrigger
 * Presentational combobox button for the custom Select field.
 */
export default function SelectTrigger({
  selectId,
  isOpen,
  hasError,
  disabled,
  selectedOption,
  placeholder,
  className = '',
  onToggle,
  onKeyDown,
}) {
  return (
    <button
      type="button"
      id={selectId}
      role="combobox"
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      aria-invalid={hasError}
      disabled={disabled}
      onClick={onToggle}
      onKeyDown={onKeyDown}
      className={`group flex w-full items-center justify-between rounded-lg border px-4 py-3 text-left text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
        hasError
          ? 'border-red-300 bg-red-50/50 text-ink-950 focus:border-red-500 focus:ring-red-500/20'
          : isOpen
          ? 'border-blue-500 bg-surface text-ink-950 ring-2 ring-blue-500/20'
          : 'border-line bg-surface text-ink-950 hover:border-ink-300 focus:border-blue-500 focus:ring-blue-500/20'
      } ${disabled ? 'cursor-not-allowed opacity-60 bg-paper' : 'cursor-pointer'} ${className}`}
    >
      <span className={`truncate ${selectedOption ? 'font-medium text-ink-950' : 'text-ink-400'}`}>
        {selectedOption ? selectedOption.label : placeholder}
      </span>
      <ChevronDown
        className={`ml-2 h-4 w-4 shrink-0 transition-transform duration-200 ${
          isOpen ? 'rotate-180 text-blue-600' : 'text-ink-400 group-hover:text-ink-600'
        }`}
        aria-hidden="true"
      />
    </button>
  )
}
