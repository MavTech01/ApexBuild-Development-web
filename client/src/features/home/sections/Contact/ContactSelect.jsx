import { useState, useRef, useEffect, useId } from 'react'
import { ChevronDown, Check } from 'lucide-react'

/**
 * ContactSelect
 * Custom, fully-styled replacement for the browser's native <select> so the
 * homepage enquiry form no longer uses the OS dropdown. Mirrors the form's
 * Input styling and emits a native-like event so `useProjectForm`'s
 * `handleChange` (which reads `event.target.name/value`) works unchanged.
 *
 * Options may be plain strings or `{ value, label }` objects.
 */
const triggerClass =
  'mt-2 flex w-full items-center justify-between gap-2 rounded-[10px] border border-[var(--color-hairline)] bg-white px-4 py-3.5 text-left text-base text-ink transition focus:border-royal focus:shadow-[0_0_0_4px_rgba(37,99,235,0.16)] focus:outline-none'

export default function ContactSelect({
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  id,
  error,
}) {
  const generatedId = useId()
  const selectId = id || `select-${name || generatedId}`
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)

  const normalized = options.map((option) =>
    typeof option === 'string' ? { value: option, label: option } : option,
  )
  const selected = normalized.find((option) => option.value === value)

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isOpen])

  const commit = (nextValue) => {
    onChange?.({ target: { name, value: nextValue } })
    setIsOpen(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
      return
    }
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        return
      }
      const currentIndex = normalized.findIndex((option) => option.value === value)
      const nextIndex =
        e.key === 'ArrowDown'
          ? (currentIndex + 1) % normalized.length
          : (currentIndex - 1 + normalized.length) % normalized.length
      if (normalized[nextIndex]) commit(normalized[nextIndex].value)
    }
  }

  return (
    <div ref={containerRef} className="relative min-w-0">
      <button
        type="button"
        id={selectId}
        name={name}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${selectId}-listbox`}
        aria-invalid={!!error}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className={triggerClass}
      >
        <span className={`truncate ${selected ? 'text-ink' : 'text-muted/60'}`}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${isOpen ? 'rotate-180 text-royal' : ''}`}
        />
      </button>

      {isOpen && (
        <ul
          id={`${selectId}-listbox`}
          role="listbox"
          tabIndex={-1}
          className="animate-dropdown absolute left-0 right-0 top-full z-30 mt-2 max-h-60 list-none overflow-y-auto rounded-[10px] border border-[var(--color-hairline)] bg-white p-1.5 shadow-[0_20px_50px_rgba(7,18,43,0.16)] focus:outline-none"
        >
          {normalized.map((option) => {
            const isSelected = option.value === value
            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onClick={() => commit(option.value)}
                  className={`flex w-full items-center justify-between rounded-lg px-3.5 py-2.5 text-left text-[0.95rem] transition-colors ${
                    isSelected
                      ? 'bg-royal/10 font-semibold text-royal'
                      : 'text-ink hover:bg-paper'
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-royal" aria-hidden="true" />}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
