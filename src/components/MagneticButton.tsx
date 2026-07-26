import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type Props = {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'solid' | 'outline'
  className?: string
  href?: string
}

export default function MagneticButton({
  children,
  onClick,
  variant = 'solid',
  className = '',
  href,
}: Props) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  function handleMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * 0.35)
    y.set(relY * 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const base =
    'relative inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-4'
  const styles =
    variant === 'solid'
      ? `${base} bg-navy text-pearl hover:bg-emerald`
      : `${base} border border-navy/25 text-navy hover:border-navy/60 bg-transparent`

  const Comp: any = href ? motion.a : motion.button

  return (
    <Comp
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`${styles} ${className}`}
    >
      {children}
    </Comp>
  )
}
