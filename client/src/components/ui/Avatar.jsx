/**
 * Avatar - Displays a circular avatar with user initials
 * @param {string} name - Full name of the person
 * @param {string} size - Size class (default: 'h-12 w-12')
 * @param {string} textSize - Text size class (default: 'text-sm')
 */
export default function Avatar({ name, size = 'h-12 w-12', textSize = 'text-sm' }) {
  // Generate initials from name (e.g., "Sarah Mitchell" -> "SM")
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className={`${size} flex shrink-0 items-center justify-center rounded-full bg-blue-600 text-white`}>
      <span className={`font-display ${textSize} font-semibold`}>{initials}</span>
    </div>
  )
}
