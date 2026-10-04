export default function IsometricBuilding() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main building body */}
      <path
        d="M100 60 L140 80 L140 140 L100 160 L60 140 L60 80 Z"
        fill="currentColor"
        opacity="0.15"
      />

      {/* Left face */}
      <path
        d="M60 80 L60 140 L100 160 L100 100 Z"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Right face */}
      <path
        d="M100 100 L100 160 L140 140 L140 80 Z"
        fill="currentColor"
        opacity="0.12"
      />

      {/* Top face */}
      <path
        d="M100 60 L140 80 L100 100 L60 80 Z"
        fill="currentColor"
        opacity="0.2"
      />

      {/* Window grid - left side */}
      <g opacity="0.3">
        <line x1="70" y1="110" x2="90" y2="120" stroke="currentColor" strokeWidth="0.5" />
        <line x1="70" y1="120" x2="90" y2="130" stroke="currentColor" strokeWidth="0.5" />
        <line x1="70" y1="130" x2="90" y2="140" stroke="currentColor" strokeWidth="0.5" />
      </g>

      {/* Window grid - right side */}
      <g opacity="0.3">
        <line x1="110" y1="120" x2="130" y2="110" stroke="currentColor" strokeWidth="0.5" />
        <line x1="110" y1="130" x2="130" y2="120" stroke="currentColor" strokeWidth="0.5" />
        <line x1="110" y1="140" x2="130" y2="130" stroke="currentColor" strokeWidth="0.5" />
      </g>
    </svg>
  )
}
