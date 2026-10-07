import { useState, useRef, useEffect, forwardRef, useId } from 'react'
import { ChevronDown, Check } from 'lucide-react'

/**
 * Custom SelectField
 * Clean, lightweight, and accessible replacement for native <select>.
 * Split into modular, focused logic:
 * - Custom trigger matching Input styling
 * - Smooth dropdown panel with active checkmark
 * - Keyboard navigation & outside-click dismissal
 * - Hidden native select for form serialization
 */
const Select = forwardRef(({
  label,
  error,
  helperText,
  required = false,
  options = [],
  placeholder = 'Select an option',
  className = '',
  value,
  defaultValue,
  onChange,
  name,
  disabled = false,
  id,
  ...props
}, ref) => {
  const generatedId = useId()
  const selectId = id || `select-${name || generatedId}`
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue || '')

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const selectedOption = options.find((opt) => opt.value === currentValue)
  const hasError = !!error

  // Close when clicking outside
  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('pointerdown', handleClickOutside)
    return () => document.removeEventListener('pointerdown', handleClickOutside)
  }, [isOpen])

  const handleSelect = (val) => {
    if (disabled) return
    if (!isControlled) setInternalValue(val)
    onChange?.({ target: { name: name || selectId, value: val } })
    setIsOpen(false)
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return
    if (e.key === 'Escape') {
      setIsOpen(false)
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
      return
    }
    if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
        return
      }
      const currentIdx = options.findIndex((opt) => opt.value === currentValue)
      const nextIdx = e.key === 'ArrowDown'
        ? (currentIdx + 1) % options.length
        : (currentIdx - 1 + options.length) % options.length
      if (options[nextIdx]) {
        handleSelect(options[nextIdx].value)
      }
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Field Label */}
      {label && (
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-medium text-ink-950"
        >
          {label}
          {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
        </label>
      )}

      {/* Hidden Native Select for Form Compatibility */}
      <select
        ref={ref}
        id={`${selectId}-native`}
        name={name}
        value={currentValue || ''}
        onChange={(e) => handleSelect(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        required={required}
        disabled={disabled}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Custom Trigger */}
      <div className="relative">
        <button
          type="button"
          id={selectId}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-invalid={hasError}
          disabled={disabled}
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
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

        {/* Dropdown Options List */}
        {isOpen && (
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
                  onClick={() => handleSelect(option.value)}
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
        )}
      </div>

      {/* Validation Message */}
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* Optional Helper Text */}
      {!error && helperText && (
        <p id={`${selectId}-helper`} className="mt-1.5 text-sm text-ink-600">
          {helperText}
        </p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

export default Select
