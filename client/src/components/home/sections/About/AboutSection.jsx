import { useRef } from 'react'
import { aboutImg } from '@/assets/images'
import { useScrollProgress } from '@/hooks/useScrollProgress.js'
import CompanyStats from '@/components/home/CompanyStats.jsx'
import Container from '@/components/ui/Container.jsx'
import SplitHeading from '../shared/SplitHeading.jsx'
import Reveal from '../shared/Reveal.jsx'
import Eyebrow from '../shared/Eyebrow.jsx'
import Button from '@/components/ui/Button.jsx'

const statement =
  'ApexBuild brings construction expertise, thoughtful design and disciplined project management together, so every space we deliver is built to last and built to be proud of.'

const focusPoints = [
  'Quality construction',
  'Thoughtful development',
  'Disciplined project management',
]

// Turns the statement's position on screen into a 0..1 progress value.
const statementProgress = (rect, viewportHeight) =>
  (viewportHeight * 0.85 - rect.top) / (rect.height + viewportHeight * 0.3)

const statementWords = statement.split(' ')

/**
 * AboutSection
 * A scroll-lit statement paragraph followed by a two-column intro (landscape
 * image with clip-path reveal + copy) and the shared blue stats card.
 */
export default function AboutSection() {
  const statementRef = useRef(null)
  const progress = useScrollProgress(statementRef, statementProgress)

  return (
    <section id="about">
      <span className="orb" style={{ '--x': '60%', '--y': '-10%', '--s': '520px', '--c': 'rgba(37,99,235,.2)' }} />

      <Container size="wide">
        <p
          ref={statementRef}
          aria-label={statement}
          className="max-w-[20em] text-[clamp(1.5rem,3.8vw,3.3rem)] font-bold leading-[1.12] tracking-[-0.025em]"
        >
          {statementWords.map((word, i) => (
            <span
              aria-hidden="true"
              key={`${word}-${i}`}
              className="transition-opacity duration-200"
              style={{ opacity: i / statementWords.length < progress * 1.15 ? 1 : 0.16 }}
            >
              {word}
              {i < statementWords.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>

        <div className="mt-[clamp(48px,7vw,88px)] grid items-center gap-[clamp(40px,7vw,120px)] md:grid-cols-[5fr_6fr]">
          <div className="relative">
            <Reveal className="aspect-[3/2] rounded-[18px]">
              <img src={aboutImg} alt="ApexBuild team reviewing plans on site" />
            </Reveal>
            <div className="absolute bottom-8 -right-[18px] rounded-xl bg-gold px-6 py-[18px] text-2xl font-extrabold leading-none text-ink shadow-[0_14px_40px_rgba(7,18,43,0.3)]">
              10+<small className="mt-1.5 block text-[0.8rem] font-semibold leading-[1.3]">Years building in Lagos</small>
            </div>
          </div>

          <div>
            <Eyebrow>About ApexBuild</Eyebrow>
            <SplitHeading size="text-[clamp(2.3rem,5.2vw,4.6rem)]" text="Built On Quality." accent="Driven By Purpose." />
            <p className="mt-6 max-w-[36em] text-mut">
              At ApexBuild Developments, we bring together construction expertise, thoughtful design and
              disciplined project management to create spaces that deliver lasting value.
            </p>
            <ul className="mt-8 mb-10 grid gap-3">
              {focusPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3.5 font-medium before:h-[9px] before:w-[9px] before:rotate-45 before:bg-royal before:content-['']"
                >
                  {point}
                </li>
              ))}
            </ul>
            <Button href="#why">Learn more about us</Button>
          </div>
        </div>

        <CompanyStats contain={false} className="mt-[clamp(56px,8vw,104px)]" />
      </Container>
    </section>
  )
}
