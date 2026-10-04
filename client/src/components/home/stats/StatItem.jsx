import { useCountUp } from '../../../hooks/useCountUp.js'

export default function StatItem({ stat, index, revealed }) {
  // Extract the numeric value from the stat value string
  const numericValue = parseInt(stat.value.replace(/\D/g, ''), 10) || 0
  const suffix = stat.value.replace(/[0-9]/g, '')

  const count = useCountUp(numericValue, 2000, 0, revealed)

  return (
    <div
      style={{ animationDelay: `${index * 90}ms` }}
      className={`text-center ${revealed ? 'animate-rise' : 'opacity-0 translate-y-4'}`}
    >
      <dd className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
        {count}{suffix}
      </dd>
      <dt className="mt-2 text-sm text-blue-100 sm:text-base">{stat.label}</dt>
    </div>
  )
}
