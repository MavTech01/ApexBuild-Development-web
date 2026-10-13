export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {/* Building/Construction Icon */}
      <path
        d="M16 3L4 9V28H28V9L16 3Z"
        fill="currentColor"
        className="text-blue-600"
      />
      <path
        d="M16 3L4 9V12H28V9L16 3Z"
        fill="currentColor"
        className="text-blue-700"
      />
      {/* Windows */}
      <rect x="8" y="14" width="3" height="3" fill="white" opacity="0.9" />
      <rect x="14.5" y="14" width="3" height="3" fill="white" opacity="0.9" />
      <rect x="21" y="14" width="3" height="3" fill="white" opacity="0.9" />
      <rect x="8" y="19" width="3" height="3" fill="white" opacity="0.9" />
      <rect x="14.5" y="19" width="3" height="3" fill="white" opacity="0.9" />
      <rect x="21" y="19" width="3" height="3" fill="white" opacity="0.9" />
      {/* Door */}
      <rect x="13" y="24" width="6" height="4" fill="white" opacity="0.95" />
    </svg>
  )
}
