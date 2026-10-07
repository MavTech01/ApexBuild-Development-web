import { useState, useRef, useEffect, forwardRef, useId } from 'react'
import { ChevronDown, Check } from 'lucide-react'

/**
 * Custom SelectField
 *
 * Replaces browser native select with an accessible, custom-styled dropdown matching
 * the ApexBuild architectural design system.
 *
 * Features:
 * - Custom styled trigger button matching Input styling
 * - Smooth animated popover listbox with high-contrast active states and checkmark
 * - Full keyboard navigation (ArrowDown, ArrowUp, Enter, Space, Escape, Tab, Typeahead)
 * - Accessible ARIA attributes (role="combobox", role="listbox", role="option")
 * - Outside click & focus loss dismissal
 * - Hidden native select for form integration & synthetic onChange event compatibility
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
  const triggerRef = useRef(null)
  const listboxRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue || '')
  const [highlightedIndex, setHighlightedIndex] = useState(-1)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const selectedOption = options.find((opt) => opt.value === currentValue)
  const hasError = !!error

  // Keep highlighted index in sync when opening
  useEffect(() => {
    if (isOpen) {
      const selectedIdx = options.findIndex((opt) => opt.value === currentValue)
      setHighlightedIndex(selectedIdx >= 0 ? selectedIdx : 0)
    }
  }, [isOpen, currentValue, options])

  // Scroll highlighted item into view if listbox is scrollable
  useEffect(() => {
    if (isOpen && listboxRef.current && highlightedIndex >= 0) {
      const activeEl = listboxRef.current.children[highlightedIndex]
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest' })
      }
    }
  }, [isOpen, highlightedIndex])

  // Dismiss dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('pointerdown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (val) => {
    if (disabled) return

    if (!isControlled) {
      setInternalValue(val)
    }

    if (onChange) {
      // Dispatch synthetic change event compatible with standard form handlers
      onChange({
        target: {
          name: name || selectId,
          value: val,
        },
      })
    }

    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (disabled) return

    switch (e.key) {
      case ' ':
      case 'Enter':
        e.preventDefault()
        if (isOpen) {
          if (highlightedIndex >= 0 && highlightedIndex < options.length) {
            handleSelect(options[highlightedIndex].value)
          }
        } else {
          setIsOpen(true)
        }
        break

      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0))
        }
        break

      case 'ArrowUp':
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1))
        }
        break

      case 'Escape':
        if (isOpen) {
          e.preventDefault()
          setIsOpen(false)
          triggerRef.current?.focus()
        }
        break

      case 'Tab':
        if (isOpen) {
          setIsOpen(false)
        }
        break

      default:
        // Type-to-search functionality
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
          const char = e.key.toLowerCase()
          const matchIdx = options.findIndex((opt) =>
            opt.label.toLowerCase().startsWith(char)
          )
          if (matchIdx >= 0) {
            if (!isOpen) setIsOpen(true)
            setHighlightedIndex(matchIdx)
          }
        }
        break
    }
  }

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Label */}
      {label && (
        <label
          id={`${selectId}-label`}
          htmlFor={selectId}
          onClick={() => triggerRef.current?.focus()}
          className="mb-2 block text-sm font-medium text-ink-950 cursor-pointer"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500" aria-label="required">
              *
            </span>
          )}
        </label>
      )}

      {/* Hidden Native Select for Form Submissions & Accessibility Screen Readers */}
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

      {/* Custom Trigger Button */}
      <div className="relative">
        <button
          type="button"
          ref={triggerRef}
          id={selectId}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={`${selectId}-listbox`}
          aria-labelledby={label ? `${selectId}-label ${selectId}` : selectId}
          aria-invalid={hasError}
          aria-describedby={
            error
              ? `${selectId}-error`
              : helperText
              ? `${selectId}-helper`
              : undefined
          }
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
          <span
            className={`truncate ${
              selectedOption ? 'font-medium text-ink-950' : 'text-ink-400'
            }`}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          <span className="pointer-events-none ml-2 flex items-center">
            <ChevronDown
              className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                isOpen ? 'rotate-180 text-blue-600' : 'text-ink-400 group-hover:text-ink-600'
              }`}
              aria-hidden="true"
            />
          </span>
        </button>

        {/* Custom Dropdown Popover */}
        {isOpen && (
          <ul
            ref={listboxRef}
            id={`${selectId}-listbox`}
            role="listbox"
            aria-labelledby={label ? `${selectId}-label` : undefined}
            tabIndex={-1}
            className="absolute top-full left-0 right-0 z-50 mt-1.5 max-h-60 overflow-y-auto rounded-xl border border-line bg-surface p-1.5 shadow-[0_12px_36px_rgb(0_0_0/0.12)] animate-dropdown focus:outline-none"
          >
            {options.map((option, index) => {
              const isSelected = option.value === currentValue
              const isHighlighted = index === highlightedIndex

              return (
                <li
                  key={option.value}
                  id={`${selectId}-option-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`flex items-center justify-between rounded-lg px-3.5 py-2.5 text-sm transition-colors cursor-pointer select-none ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : isHighlighted
                      ? 'bg-paper text-ink-950'
                      : 'text-ink-800 hover:bg-paper hover:text-ink-950'
                  }`}
                >
                  <span className="truncate">{option.label}</span>
                  {isSelected && (
                    <Check
                      className="ml-2 h-4 w-4 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                  )}
                </li>
              )
            })}

            {options.length === 0 && (
              <li className="px-3.5 py-3 text-center text-sm text-ink-400">
                No options available
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* Helper Text */}
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
