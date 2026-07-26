import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../lib/useReveal'
import BeforeAfterSlider from './BeforeAfterSlider'

gsap.registerPlugin(ScrollTrigger)

const CASES = [
  { title: 'Porcelain Veneers', note: '6-unit smile makeover, 3 visits' },
  { title: 'Clear Aligners', note: 'Anterior crowding correction, 9 months' },
  { title: 'Implant Restoration', note: 'Single molar implant, 4 months' },
  { title: 'Full-Mouth Rehab', note: 'Combined function & aesthetics, 6 visits' },
  { title: 'Teeth Whitening', note: 'In-studio session, 1 visit' },
]

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const introRef = useReveal<HTMLDivElement>()

  useEffect(() => {
    const track = trackRef.current
    const wrap = wrapRef.current
    if (!track || !wrap) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 1024) return

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - wrap.clientWidth
      if (distance <= 0) return
      gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: () => `+=${distance}`,
          pin: true,
          scrub: 0.6,
        },
      })
    }, wrap)

    return () => ctx.revert()
  }, [])

  return (
    <section id="gallery" data-tooth="gallery" className="relative">
      <div ref={introRef} className="px-6 pt-32">
        <div className="mx-auto max-w-6xl">
          <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
            Smile Gallery
          </p>
          <h2 data-reveal className="max-w-2xl font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
            Results, not renderings.
          </h2>
        </div>
      </div>

      <div ref={wrapRef} className="mt-16 overflow-hidden lg:h-screen lg:items-center lg:flex">
        <div
          ref={trackRef}
          className="flex flex-col gap-8 px-6 lg:flex-row lg:gap-10 lg:px-[10vw]"
        >
          <div className="w-full shrink-0 lg:w-[32vw]">
            <BeforeAfterSlider />
          </div>
          {CASES.map((c) => (
            <div key={c.title} className="w-full shrink-0 lg:w-[26vw]" data-reveal>
              <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-ivory via-mist to-beige shadow-[0_20px_60px_-30px_rgba(15,36,54,0.3)]" />
              <h3 className="mt-5 font-display text-xl text-navy">{c.title}</h3>
              <p className="mt-1 text-sm text-navy/50">{c.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
