import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.set('[data-hero-line]', { yPercent: 110 })
        .set('[data-hero-fade]', { opacity: 0, y: 16 })
        .to('[data-hero-eyebrow]', { opacity: 1, y: 0, duration: 0.9 }, 0.15)
        .to('[data-hero-line]', { yPercent: 0, duration: 1.3, stagger: 0.12 }, 0.3)
        .to('[data-hero-fade]', { opacity: 1, y: 0, duration: 1, stagger: 0.1 }, 0.9)
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="top"
      data-tooth="hero"
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pt-28"
    >
      {/* Ambient background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[50vmax] w-[50vmax] rounded-full bg-gradient-to-br from-mist to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[45vmax] w-[45vmax] rounded-full bg-gradient-to-tl from-cyan-soft/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <p
          data-hero-eyebrow
          className="mb-6 translate-y-4 text-[13px] font-medium uppercase tracking-widest2 text-emerald opacity-0"
        >
          Gota, Ahmedabad — By Appointment
        </p>

        <h1 className="font-display text-[13vw] leading-[0.95] tracking-tightest text-navy sm:text-[9vw] lg:text-[6.4vw]">
          <span className="block overflow-hidden">
            <span data-hero-line className="block">
              Precision,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span data-hero-line className="block italic font-normal text-dental-blue">
              made calm.
            </span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p
            data-hero-fade
            className="max-w-md text-balance text-lg leading-relaxed text-navy/70"
          >
            Lumière Dental Studio blends restorative and cosmetic dentistry
            with the quiet, considered feel of a private atelier — for
            patients who expect the same care in their smile as everywhere
            else in their life.
          </p>

          <div data-hero-fade className="flex items-center gap-5">
            <MagneticButton href="#appointment">Book a Consultation</MagneticButton>
            <MagneticButton href="#technology" variant="outline">
              Explore the Studio
            </MagneticButton>
          </div>
        </div>
      </div>

      <div
        data-hero-fade
        className="mx-auto mt-20 flex w-full max-w-6xl items-center justify-between border-t border-navy/10 pt-6 text-xs uppercase tracking-widest2 text-navy/40"
      >
        <span>Est. Gota, 2016</span>
        <span className="hidden sm:inline">Scroll to explore</span>
        <span>4.9 / 5 · 1,200+ smiles</span>
      </div>
    </section>
  )
}
