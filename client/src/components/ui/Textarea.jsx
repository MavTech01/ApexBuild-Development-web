import { forwardRef } from 'react'

const Textarea = forwardRef(({
  label,
  error,
  helperText,
  required = false,
  maxLength,
  showCount = false,
  className = '',
  ...props
}, ref) => {
  const textareaId = props.id || `textarea-${label?.replace(/\s+/g, '-').toLowerCase()}`
  const hasError = !!error
  const currentLength = props.value?.length || 0

  return (
    <div className="w-full">
      {label && (
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-ink-950"
          >
            {label}
            {required && <span className="ml-1 text-red-500" aria-label="required">*</span>}
          </label>
          {showCount && maxLength && (
            <span className="text-xs text-ink-600">
              {currentLength}/{maxLength}
            </span>
          )}
        </div>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        maxLength={maxLength}
        aria-invalid={hasError}
        aria-describedby={error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 ${
          hasError
            ? 'border-red-300 bg-red-50/50 text-ink-950 focus:border-red-500 focus:ring-red-500/20'
            : 'border-line bg-surface text-ink-950 placeholder:text-ink-400 hover:border-ink-300 focus:border-blue-500 focus:ring-blue-500/20'
        } ${className}`}
        {...props}
      />
      {error && (
        <p id={`${textareaId}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${textareaId}-helper`} className="mt-1.5 text-sm text-ink-600">
          {helperText}
        </p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

export default Textarea
