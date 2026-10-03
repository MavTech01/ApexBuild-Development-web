import { HardHat, Building2, Hammer, ClipboardList } from 'lucide-react'

const icons = {
  construction: HardHat,
  development: Building2,
  renovation: Hammer,
  management: ClipboardList,
}

export default function ServiceIcon({ name, className = 'h-6 w-6', strokeWidth = 1.5 }) {
  const Icon = icons[name]

  if (!Icon) return null

  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" focusable="false" />
}
