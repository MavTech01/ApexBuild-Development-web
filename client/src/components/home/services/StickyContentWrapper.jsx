/**
 * StickyContentWrapper - Wrapper component that makes content sticky
 * Used for sections where content should stick while user scrolls
 */
export default function StickyContentWrapper({ children, className = '' }) {
  return (
    <div className={`lg:sticky lg:top-10 lg:py-8 ${className}`}>
      {children}
    </div>
  )
}
