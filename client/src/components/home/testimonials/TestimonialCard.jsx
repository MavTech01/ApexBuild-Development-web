import { Quote } from 'lucide-react'
import Avatar from '../../ui/Avatar.jsx'
import StarRating from '../../ui/StarRating.jsx'

/**
 * TestimonialCard - Displays a client testimonial with quote, rating, and author info
 */
export default function TestimonialCard({ testimonial }) {
  const { quote, name, title, company, rating } = testimonial

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_2px_8px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(37_99_235/0.12)] sm:p-8">
      {/* Header with Quote icon and Stars */}
      <div className="flex items-start justify-between">
        <Quote
          className="h-8 w-8 text-blue-500/30 transition-colors duration-300 group-hover:text-blue-500/50"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <StarRating rating={rating} />
      </div>

      {/* Testimonial Quote */}
      <blockquote className="mt-4 flex-1">
        <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      {/* Author Info with Avatar */}
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
        <Avatar name={name} />
        <div>
          <cite className="not-italic">
            <p className="font-display text-base font-semibold text-ink-950">{name}</p>
            <p className="mt-0.5 text-sm text-ink-600">
              {title}, {company}
            </p>
          </cite>
        </div>
      </div>
    </article>
  )
}
