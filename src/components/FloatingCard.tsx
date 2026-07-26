import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function FloatingCard({
  title,
  body,
  icon,
}: {
  title: string
  body: string
  icon: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-40, 40], [8, -8]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-40, 40], [-8, 8]), { stiffness: 200, damping: 20 })

  function handleMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      data-reveal
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative rounded-3xl border border-navy/10 bg-pearl/80 p-8 shadow-[0_20px_60px_-30px_rgba(15,36,54,0.3)] backdrop-blur-sm transition-shadow duration-500 hover:shadow-[0_30px_80px_-30px_rgba(15,36,54,0.4)]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-mist text-dental-blue">
        {icon}
      </div>
      <h3 className="font-display text-xl text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy/60">{body}</p>
    </motion.div>
  )
}
