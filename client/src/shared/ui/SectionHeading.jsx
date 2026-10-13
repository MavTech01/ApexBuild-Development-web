export default function SectionHeading({ id, eyebrow, title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">{eyebrow}</p>
      )}
      <h2 id={id} className="text-2xl text-ink-950 sm:text-3xl lg:text-[2.25rem]">
        {title}
      </h2>
      {description && <p className="text-base leading-relaxed text-ink-500">{description}</p>}
    </div>
  )
}
