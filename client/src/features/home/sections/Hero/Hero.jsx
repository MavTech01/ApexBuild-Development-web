import { useEffect, useState } from 'react'
import { heroImg } from '@/shared/assets/images'
import { heroLabel, heroLead, rotatingWords } from '@/features/home/sections/Hero/hero.data.js'
import Container from '@/shared/ui/Container.jsx'
import RotatingWord from '@/features/home/components/RotatingWord.jsx'
import VideoModal from '@/shared/ui/VideoModal.jsx'
import Button from '@/shared/ui/Button.jsx'
import HeroMedia from '@/features/home/sections/Hero/HeroMedia.jsx'
import HeroPlayButton from '@/features/home/sections/Hero/HeroPlayButton.jsx'
import MarqueeStrip from '@/features/home/sections/Hero/MarqueeStrip.jsx'
import { site } from '@/shared/config/site.js'
import '@/features/home/sections/Hero/hero.css'

/**
 * Hero
 * Full-height navy hero. A photo of a live site sits behind the text with a
 * navy overlay and glow orbs.
 */
export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)

  // Flip a single flag just after mount so every hero element can play its
  // staggered entrance (the delays themselves live in Hero/hero.css).
  useEffect(() => {
    const id = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(id)
  }, [])

  const labelWords = heroLabel.split(' ')

  return (
    <section
      id="top"
      className="hero relative flex min-h-[100svh] items-center overflow-hidden bg-ink px-0 pt-[calc(env(safe-area-inset-top,0px)+88px)] pb-[clamp(72px,10vh,120px)] text-white"
    >
      <span className="orb" style={{ zIndex: 1, '--orb-x': '-8%', '--orb-y': '-10%', '--orb-size': '620px', '--orb-color': 'rgba(37,99,235,.42)' }} />
      <span className="orb" style={{ zIndex: 1, '--orb-x': '55%', '--orb-y': '30%', '--orb-size': '520px', '--orb-color': 'rgba(242,169,0,.28)', '--orb-duration': '20s' }} />

      <HeroMedia />

      <Container size="wide" className={`relative z-[2] ${loaded ? 'hero-in' : ''}`}>
        <p className={`hero-label text-azure ${loaded ? 'in' : ''}`} aria-label={heroLabel}>
          {labelWords.map((word, i) => (
            <span key={`${word}-${i}`} aria-hidden="true" style={{ '--index': i }}>
              {word}
            </span>
          ))}
        </p>

        <h1
          className="mt-4 mb-7 whitespace-nowrap text-[clamp(min(2.4rem,8.5vw),6.5vw,5.5rem)] leading-[1.06] tracking-[-0.03em]"
          aria-label={`We Create ${rotatingWords[0]} That Last.`}
        >
          <span className="hero-line" style={{ '--line-index': 0 }}>
            <span>We Create <RotatingWord words={rotatingWords} startDelay={320} /></span>
          </span>
          <span className="hero-line" style={{ '--line-index': 1 }}>
            <span>That Last.</span>
          </span>
        </h1>

        <div className="flex flex-wrap items-center gap-x-12 gap-y-14">
          <div className="w-full min-[900px]:w-auto">
            <p className="hero-fade max-w-[34em] text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed text-fog" style={{ '--index': 0 }}>{heroLead}</p>
            <div className="mt-7 flex flex-col gap-3 min-[900px]:flex-row min-[900px]:flex-wrap min-[900px]:gap-4">
              <Button className="hero-fade w-full min-[900px]:w-auto" style={{ '--index': 1 }} to="/projects">Explore our projects</Button>
              <Button variant="outline" className="hero-fade w-full justify-center min-[900px]:w-auto" style={{ '--index': 2 }} to="/contact">Start a project</Button>
            </div>
          </div>

          <div className="hero-fade grid w-full place-items-center min-[900px]:w-auto" style={{ '--index': 1 }}>
            <HeroPlayButton onClick={() => setVideoOpen(true)} />
          </div>
        </div>

        <VideoModal
          isOpen={videoOpen}
          onClose={() => setVideoOpen(false)}
          src={site.videoUrl}
          poster={heroImg}
          title="ApexBuild showreel"
        />
      </Container>

      <div className="absolute inset-x-0 bottom-0 z-[3]">
        <MarqueeStrip />
      </div>
    </section>
  )
}
