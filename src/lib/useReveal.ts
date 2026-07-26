import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Options = {
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

/** Reveals direct children of the returned ref on scroll, with cinematic easing. */
export function useReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const targets = el.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.set(targets, { y: options.y ?? 40, opacity: 0 })
      gsap.to(targets, {
        y: 0,
        opacity: 1,
        duration: options.duration ?? 1.1,
        stagger: options.stagger ?? 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start ?? 'top 78%',
        },
      })
    }, el)

    return () => ctx.revert()
  }, [])

  return ref
}
