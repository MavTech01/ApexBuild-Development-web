import { useState, useRef, useEffect, useId } from 'react'

/**
 * useSelect
 * Headless logic for the custom Select field: controlled/uncontrolled value,
 * outside-click dismissal and keyboard navigation.
 */
export function useSelect({ id, name, value, defaultValue, options, onChange, disabled }) {
  const generatedId = useId()
  const selectId = id || `select-${name || generatedId}`
  const containerRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const [internalValue, setInternalValue] = useState(defaultValue || '')

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue
  const selectedOption = options.find((opt) => opt.value === currentValue)

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
      if (options[nextIdx]) handleSelect(options[nextIdx].value)
    }
  }

  return {
    selectId,
    containerRef,
    isOpen,
    setIsOpen,
    currentValue,
    selectedOption,
    handleSelect,
    handleKeyDown,
  }
}
