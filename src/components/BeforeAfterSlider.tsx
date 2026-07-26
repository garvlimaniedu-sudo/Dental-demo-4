import { useRef, useState } from 'react'

export default function BeforeAfterSlider() {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  function updateFromClientX(clientX: number) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, pct)))
  }

  return (
    <div
      ref={ref}
      data-reveal
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl shadow-[0_30px_80px_-30px_rgba(15,36,54,0.35)]"
      onPointerDown={(e) => {
        dragging.current = true
        updateFromClientX(e.clientX)
      }}
      onPointerMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      {/* "After" layer */}
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-mist via-pearl to-cyan-soft/40">
        <span className="font-display text-2xl text-navy/30">After</span>
      </div>

      {/* "Before" layer, clipped */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-beige via-ivory to-stone-warm/20"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <span className="font-display text-2xl text-navy/30">Before</span>
      </div>

      <div
        className="absolute inset-y-0 flex w-0.5 -translate-x-1/2 items-center justify-center bg-pearl"
        style={{ left: `${pos}%` }}
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-pearl text-navy shadow-lg">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 5l-6 7 6 7M16 5l6 7-6 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <span className="absolute left-5 top-5 rounded-full bg-navy/80 px-3 py-1 text-xs uppercase tracking-widest2 text-pearl">
        Veneers case
      </span>
    </div>
  )
}
