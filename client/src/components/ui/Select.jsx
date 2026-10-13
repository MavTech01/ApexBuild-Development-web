import { forwardRef } from 'react'
import { useSelect } from './useSelect.js'
import SelectTrigger from './SelectTrigger.jsx'
import SelectListbox from './SelectListbox.jsx'

/**
 * Select
 * Clean, lightweight, and accessible replacement for native <select>.
 * Composed from focused concerns:
 * - useSelect       → controlled/uncontrolled state, outside-click, keyboard nav
 * - SelectTrigger   → combobox button matching Input styling
 * - SelectListbox   → dropdown panel with active checkmark
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
  const {
    selectId,
    containerRef,
    isOpen,
    setIsOpen,
    currentValue,
    selectedOption,
    handleSelect,
    handleKeyDown,
  } = useSelect({ id, name, value, defaultValue, options, onChange, disabled })

  const hasError = !!error

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

      {/* Custom Trigger + Dropdown */}
      <div className="relative">
        <SelectTrigger
          selectId={selectId}
          isOpen={isOpen}
          hasError={hasError}
          disabled={disabled}
          selectedOption={selectedOption}
          placeholder={placeholder}
          className={className}
          onToggle={() => setIsOpen((prev) => !prev)}
          onKeyDown={handleKeyDown}
        />

        {isOpen && (
          <SelectListbox
            options={options}
            currentValue={currentValue}
            onSelect={handleSelect}
          />
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
