import { useState } from 'react'
import { motion } from 'framer-motion'
import { useReveal } from '../lib/useReveal'

const FAQS = [
  {
    q: 'Do you treat anxious or first-time patients?',
    a: 'Yes — most of our new patients tell us they\u2019ve avoided dental visits for years. We start with a conversation, not a procedure, and offer sedation options for anyone who needs them.',
  },
  {
    q: 'How long does a smile design consultation take?',
    a: 'Plan for 45–60 minutes. This includes your scan, a discussion of options, and a first look at your projected result.',
  },
  {
    q: 'Do you accept dental insurance?',
    a: 'We work with most major insurance providers and can help you understand your coverage before treatment begins.',
  },
  {
    q: 'Is parking available at the clinic?',
    a: 'Yes, complimentary parking is available directly outside the studio in Gota.',
  },
  {
    q: 'Can I get a treatment plan without committing immediately?',
    a: 'Always. Every consultation ends with a written plan and quote you can take time to consider.',
  },
]

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div data-reveal className="border-b border-navy/10 py-6">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="font-display text-lg text-navy sm:text-xl">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <p className="max-w-xl pt-4 text-sm leading-relaxed text-navy/60">{a}</p>
      </motion.div>
    </div>
  )
}

export default function FAQ() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-4xl">
        <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
          Questions
        </p>
        <h2 data-reveal className="mb-16 font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
          Everything before your first visit.
        </h2>

        <div>
          {FAQS.map((f) => (
            <AccordionItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
