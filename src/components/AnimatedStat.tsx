import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion'

export default function AnimatedStat({
  target,
  suffix = '',
  label,
}: {
  target: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 30, stiffness: 60 })

  useEffect(() => {
    if (inView) motionValue.set(target)
  }, [inView, target, motionValue])

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString()
    })
  }, [spring])

  return (
    <div>
      <div className="font-display text-4xl text-navy sm:text-5xl">
        <motion.span ref={ref}>0</motion.span>
        {suffix}
      </div>
      <p className="mt-2 text-xs uppercase tracking-widest2 text-navy/50">{label}</p>
    </div>
  )
}
