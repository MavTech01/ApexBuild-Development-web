import { Quote } from 'lucide-react'

export default function TestimonialCard({ testimonial }) {
  const { quote, name, title, company, rating } = testimonial

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-line bg-surface p-6 shadow-[0_2px_8px_rgb(0_0_0/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgb(37_99_235/0.12)] sm:p-8">
      <Quote
        className="h-8 w-8 text-blue-500/30 transition-colors duration-300 group-hover:text-blue-500/50"
        strokeWidth={1.5}
        aria-hidden="true"
      />

      <blockquote className="mt-4 flex-1">
        <p className="text-base leading-relaxed text-ink-700 sm:text-lg">
          &ldquo;{quote}&rdquo;
        </p>
      </blockquote>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <div>
          <cite className="not-italic">
            <p className="font-display text-base font-semibold text-ink-950">{name}</p>
            <p className="mt-0.5 text-sm text-ink-600">
              {title}, {company}
            </p>
          </cite>
        </div>

        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 fill-amber-400 text-amber-400"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
    </article>
  )
}
