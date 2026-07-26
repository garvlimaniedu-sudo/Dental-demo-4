import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({
  index,
  title,
  description,
  duration,
}: {
  index: number
  title: string
  description: string
  duration: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <motion.button
      data-reveal
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className="group w-full border-b border-navy/10 py-8 text-left"
    >
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-6">
          <span className="font-display text-sm text-navy/30">
            {String(index).padStart(2, '0')}
          </span>
          <h3 className="font-display text-2xl text-navy transition-colors group-hover:text-dental-blue sm:text-3xl">
            {title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy"
        >
          +
        </motion.span>
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="grid gap-3 pl-0 pt-5 sm:grid-cols-[1fr_auto] sm:pl-14">
          <p className="max-w-lg text-sm leading-relaxed text-navy/60">{description}</p>
          <span className="text-xs uppercase tracking-widest2 text-navy/40">{duration}</span>
        </div>
      </motion.div>
    </motion.button>
  )
}
