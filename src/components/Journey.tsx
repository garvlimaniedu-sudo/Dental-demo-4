import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../lib/useReveal'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    title: 'Consultation',
    body: 'A relaxed, unhurried conversation about your goals, concerns, and history — no clinical rush.',
  },
  {
    title: 'Digital Scan & Plan',
    body: 'A 3D scan builds a precise map of your smile. We design the outcome together before treatment begins.',
  },
  {
    title: 'Treatment',
    body: 'Procedures are scheduled around your life, with sedation options available for longer visits.',
  },
  {
    title: 'Review & Refine',
    body: 'We check fit, feel, and bite together, adjusting until the result feels effortless.',
  },
  {
    title: 'Aftercare',
    body: 'A maintenance plan and direct line to the studio for anything that comes up after you leave.',
  },
]

export default function Journey() {
  const ref = useReveal<HTMLDivElement>()
  const lineRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const line = lineRef.current
    if (!wrap || !line) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        },
      )
    }, wrap)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" data-tooth="journey" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
          Treatment Journey
        </p>
        <h2 data-reveal className="max-w-xl font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
          Five steps, always in this order.
        </h2>

        <div ref={wrapRef} className="relative mt-20 pl-10 sm:pl-14">
          <div className="absolute left-[3px] top-1 h-full w-[1.5px] bg-navy/10 sm:left-[7px]" />
          <div
            ref={lineRef}
            className="absolute left-[3px] top-1 h-full w-[1.5px] origin-top bg-emerald sm:left-[7px]"
            style={{ transform: 'scaleY(0)' }}
          />

          <ol className="flex flex-col gap-16">
            {STEPS.map((step, i) => (
              <li key={step.title} data-reveal className="relative">
                <span className="absolute -left-10 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pearl ring-2 ring-emerald sm:-left-14">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                </span>
                <span className="text-xs uppercase tracking-widest2 text-navy/40">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl text-navy">{step.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-navy/60">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
