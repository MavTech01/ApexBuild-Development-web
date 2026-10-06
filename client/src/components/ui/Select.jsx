import { forwardRef } from 'react'

const Select = forwardRef(({
  label,
  error,
  helperText,
  required = false,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}, ref) => {
  const selectId = props.id || `select-${label?.replace(/\s+/g, '-').toLowerCase()}`
  const hasError = !!error

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-medium text-ink-950"
        >
          {label}
          {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        aria-invalid={hasError}
        aria-describedby={error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
          hasError
            ? 'border-red-300 bg-red-50/50 text-ink-950 focus:border-red-500 focus:ring-red-500/20'
            : 'border-line bg-surface text-ink-950 hover:border-ink-300 focus:border-blue-500 focus:ring-blue-500/20'
        } ${className}`}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${selectId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
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
