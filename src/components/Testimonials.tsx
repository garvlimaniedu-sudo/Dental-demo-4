import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReveal } from '../lib/useReveal'

const QUOTES = [
  {
    name: 'Riya Shah',
    treatment: 'Porcelain Veneers',
    quote:
      'I was nervous about even a cleaning. Dr. Mehta walked me through everything before it happened, not after. My veneers look like my own teeth, just better.',
  },
  {
    name: 'Karan Patel',
    treatment: 'Dental Implant',
    quote:
      'The 3D scan meant I saw exactly where the implant would sit before it happened. No surprises, no pain the next day either.',
  },
  {
    name: 'Meera Joshi',
    treatment: 'Clear Aligners',
    quote:
      'Nine months of aligners felt easy because the studio made every check-in quick. The space itself is genuinely calming.',
  },
  {
    name: 'Aditya Rao',
    treatment: 'Full-Mouth Rehabilitation',
    quote:
      'A complex case handled with more patience than I expected from any clinic. Every visit was mapped out weeks in advance.',
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const ref = useReveal<HTMLDivElement>()
  const current = QUOTES[index]

  return (
    <section className="relative overflow-hidden bg-navy px-6 py-32 text-pearl">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <p data-reveal className="mb-10 text-[13px] font-medium uppercase tracking-widest2 text-cyan-soft">
          Patient Voices
        </p>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-balance font-display text-2xl leading-relaxed sm:text-3xl">
                "{current.quote}"
              </p>
              <p className="mt-8 text-sm text-pearl/60">
                {current.name} — {current.treatment}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              aria-label={`Show testimonial from ${q.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-emerald-soft' : 'w-1.5 bg-pearl/25'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
