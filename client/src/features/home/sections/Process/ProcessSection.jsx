import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { processSiteImg } from '@/shared/assets/images'
import { processSteps } from '@/features/home/sections/Process/process.data.js'
import SplitHeading from '@/features/home/sections/shared/SplitHeading.jsx'
import Container from '@/shared/ui/Container.jsx'

/**
 * ProcessSection
 * "How we get it done" — a sticky two-column panel (steps + photo). The photo
 * is progressively revealed as the section scrolls (clip-path), the step list
 * lights up the active item, and a warm glow appears once complete.
 */
export default function ProcessSection() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => setProgress(self.progress),
    })
    return () => trigger.kill()
  }, [])

  const activeStep = progress < 0.3 ? 0 : progress < 0.82 ? 1 : 2
  const lit = progress > 0.85

  return (
    <section
      id="process"
      ref={sectionRef}
      className="hazard-stripes grain h-[320vh] overflow-clip bg-[linear-gradient(180deg,#0b2a6b,#07122b)] p-0 text-white"
    >
      <span className="orb" style={{ '--x': '55%', '--y': '20%', '--s': '520px', '--c': 'rgba(37,99,235,.5)' }} />

      <div className="sticky top-0 h-[100svh]">
        <Container
          size="wide"
          className="grid h-full grid-cols-1 grid-rows-[auto_1fr] content-start items-center gap-8 pb-12 pt-[calc(env(safe-area-inset-top,0px)_+_96px)] min-[900px]:grid-cols-2 min-[900px]:grid-rows-1 min-[900px]:content-center min-[900px]:gap-[clamp(24px,5vw,80px)] min-[900px]:pb-8 min-[900px]:pt-[calc(env(safe-area-inset-top,0px)_+_80px)]"
        >
          <div>
            <SplitHeading
              text="How We"
              accent="Get It Done."
              accentClassName="text-gold"
              size="text-[clamp(1.75rem,4.8vw,4.3rem)]"
              className="mb-3.5 min-[900px]:mb-9"
            />

            <div className="relative pl-7">
              <span className="absolute inset-y-0 left-0 w-[3px] bg-white/20">
                <span className="block h-full origin-top bg-gold" style={{ transform: `scaleY(${progress})` }} />
              </span>
              <ul className="list-none p-0">
                {processSteps.map((step, index) => {
                  const on = index === activeStep
                  return (
                    <li key={step.title} className={`py-2 transition-opacity duration-500 min-[900px]:py-3.5 ${on ? 'opacity-100' : 'opacity-35'}`}>
                      <b className="block font-display text-[1.25rem] font-bold">{step.title}</b>
                      <span className={`block text-slate-soft ${on ? '' : 'max-[899px]:hidden'}`}>{step.description}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          <div className="relative h-full min-h-[140px] w-full overflow-hidden rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.45)] min-[900px]:h-[min(72svh,620px)] min-[900px]:min-h-0">
            <img src={processSiteImg} alt="ApexBuild site work in progress" className="block h-full w-full object-cover" />
            <div className="absolute inset-0 bg-ink" style={{ clipPath: `inset(0 0 ${progress * 100}% 0)` }} />
            <div
              className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(242,169,0,0.55),transparent_70%)] mix-blend-screen transition-opacity duration-700 ${
                lit ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
