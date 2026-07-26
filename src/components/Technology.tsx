import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    tag: '01 — Imaging',
    title: 'CBCT 3D scanning',
    body: 'A full three-dimensional map of your jaw, roots, and nerves — captured in under twenty seconds, at a fraction of typical radiation.',
  },
  {
    tag: '02 — Design',
    title: 'Digital Smile Design',
    body: 'Your new smile is modelled against your own face before treatment starts, so there are no surprises at the mirror.',
  },
  {
    tag: '03 — Fabrication',
    title: 'In-house CAD/CAM milling',
    body: 'Crowns and veneers are designed and milled on-site — many restorations are ready within a single appointment.',
  },
  {
    tag: '04 — Comfort',
    title: 'Quiet-motor instrumentation',
    body: 'Low-vibration handpieces and calibrated sedation keep even involved procedures calm and unhurried.',
  },
]

export default function Technology() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const panels = panelsRef.current
    if (!section || !panels) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.innerWidth < 1024) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('[data-tech-panel]')
      const total = items.length

      gsap.set(items, { autoAlpha: 0, y: 24 })
      gsap.set(items[0], { autoAlpha: 1, y: 0 })

      const st = ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: () => `+=${total * 500}`,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total))
          items.forEach((el, i) => {
            gsap.to(el, {
              autoAlpha: i === idx ? 1 : 0,
              y: i === idx ? 0 : 24,
              duration: 0.4,
              overwrite: 'auto',
            })
          })
          const dots = section.querySelectorAll('[data-tech-dot]')
          dots.forEach((d, i) => d.classList.toggle('bg-emerald', i === idx))
        },
      })

      return () => st.kill()
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="technology"
      data-tooth="technology"
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-32 lg:py-0"
    >
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center lg:min-h-screen">
        <p className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-cyan-soft">
          Technology
        </p>

        <div ref={panelsRef} className="relative hidden min-h-[220px] max-w-xl lg:block">
          {FEATURES.map((f) => (
            <div key={f.title} data-tech-panel className="absolute inset-0">
              <span className="text-xs uppercase tracking-widest2 text-navy/40">{f.tag}</span>
              <h3 className="mt-4 font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
                {f.title}
              </h3>
              <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-navy/60">
                {f.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 hidden gap-2 lg:absolute lg:bottom-16 lg:left-6 lg:flex">
          {FEATURES.map((f, i) => (
            <span
              key={f.title}
              data-tech-dot
              className={`h-1.5 w-8 rounded-full bg-navy/15 transition-colors duration-300 ${i === 0 ? 'bg-emerald' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile fallback: static stacked list */}
      <div className="mx-auto mt-16 flex max-w-6xl flex-col gap-14 lg:hidden">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <span className="text-xs uppercase tracking-widest2 text-navy/40">{f.tag}</span>
            <h3 className="mt-3 font-display text-3xl tracking-tightest text-navy">{f.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy/60">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
