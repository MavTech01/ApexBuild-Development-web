import React, { useCallback, useEffect, useRef, useState } from 'react'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { heroImage, site } from '../../config/site.js'

const headlines = [
  { text: 'WE BUILD SPACES THAT', accent: 'LAST.' },
  { text: 'WE CREATE SPACES THAT', accent: 'MATTER.' },
  { text: 'WE BUILD FOR A BETTER', accent: 'FUTURE.' },
  { text: 'WE CREATE VALUE THAT', accent: 'LASTS.' },
]

const INTERVAL_MS = 4500

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animState, setAnimState] = useState('visible')
  const timeoutRef = useRef(null)
  const intervalRef = useRef(null)

  const cycle = useCallback(() => {
    setAnimState('exiting')
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % headlines.length)
      setAnimState('entering')
      timeoutRef.current = setTimeout(() => {
        setAnimState('visible')
      }, 600)
    }, 500)
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(cycle, INTERVAL_MS)
    return () => {
      clearInterval(intervalRef.current)
      clearTimeout(timeoutRef.current)
    }
  }, [cycle])

  const transitionClass =
    animState === 'exiting'
      ? 'hero-headline-exit'
      : animState === 'entering'
        ? 'hero-headline-enter'
        : ''

  return (
    <section aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-gradient-to-br from-ink-950 via-ink-900 to-ink-950 text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_75%_15%,rgb(37_99_235/0.28),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_15%_85%,rgb(59_130_246/0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:80px_80px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent"
      />

      <Container size="wide">
        <div className="grid items-center gap-14 pt-14 pb-12 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-16 xl:gap-16 xl:pt-28 xl:pb-16">
          <div className="lg:col-span-6 xl:col-span-5">
            <p
              style={{ animationDelay: '0ms' }}
              className="animate-rise flex items-center gap-3 font-display text-xs font-semibold tracking-[0.22em] text-blue-300 uppercase"
            >
              <span aria-hidden="true" className="h-px w-10 bg-blue-500" />
              {site.name}
            </p>

            <div style={{ animationDelay: '80ms' }} className="animate-rise mt-6">
              <h1
                id="hero-heading"
                className={`text-4xl leading-[1.02] text-paper sm:text-5xl lg:text-6xl xl:text-7xl ${transitionClass}`}
              >
                {headlines[activeIndex].text}{' '}
                <span className="text-blue-400">{headlines[activeIndex].accent}</span>
              </h1>
            </div>

            <p
              style={{ animationDelay: '160ms' }}
              className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-ink-400 sm:text-lg"
            >
              From construction to property development, we create spaces designed for quality, functionality and
              long-term value.
            </p>

            <div
              style={{ animationDelay: '240ms' }}
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button to="/projects" variant="onDark" className="w-full sm:w-auto">
                Explore Our Projects
              </Button>
              <Button to="/contact" variant="outlineOnDark" className="w-full sm:w-auto">
                Start a Project
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 xl:col-span-7">
            <figure style={{ animationDelay: '120ms' }} className="animate-reveal relative">
              <span
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 hidden h-full w-full border border-blue-500/40 lg:block"
              />
              <div className="relative overflow-hidden">
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover lg:h-[clamp(26rem,58vh,42rem)] lg:aspect-auto [animation:hero-drift_40s_ease-in-out_infinite_alternate]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 to-transparent" />
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}
