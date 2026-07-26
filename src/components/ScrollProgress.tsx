import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1)
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${scrolled})`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed left-0 top-0 z-[90] h-[2px] w-full bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-dental-blue via-emerald to-cyan-soft"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
