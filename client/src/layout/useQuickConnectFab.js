import { useState, useEffect, useRef } from 'react'

/**
 * useQuickConnectFab
 * Open/close state for the QuickConnect speed-dial with outside-click and
 * Escape dismissal.
 */
export function useQuickConnectFab() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return {
    isOpen,
    containerRef,
    toggle: () => setIsOpen((prev) => !prev),
    close: () => setIsOpen(false),
  }
}
