import Container from '@/shared/ui/Container.jsx'

export default function PagePlaceholder({ eyebrow, title }) {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <Container>
        <p className="font-display text-xs font-semibold tracking-[0.22em] text-blue-700 uppercase">{eyebrow}</p>
        <h1 className="mt-4 text-4xl text-ink-950 sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-xl text-lg text-ink-500">Content will be built in a later phase.</p>
      </Container>
    </section>
  )
}
