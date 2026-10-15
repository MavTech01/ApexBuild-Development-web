/**
 * CraneIcon
 * A slim tower-crane line drawing used as a decorative accent in the services
 * section. Purely decorative (`aria-hidden`); pass positioning/animation
 * classes through `className`.
 */
export default function CraneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 46 190" aria-hidden="true" className={className}>
      <path d="M23 0V120" stroke="#2563eb" strokeWidth="3" />
      <rect x="14" y="116" width="18" height="16" rx="3" fill="#F2A900" />
      <path
        d="M23 132v18a13 13 0 1 1-13-13"
        fill="none"
        stroke="#F2A900"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}
