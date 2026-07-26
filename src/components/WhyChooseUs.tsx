import { useReveal } from '../lib/useReveal'
import FloatingCard from './FloatingCard'
import AnimatedStat from './AnimatedStat'

const CARDS = [
  {
    title: 'Digital-first diagnostics',
    body: 'Intraoral scanning and 3D imaging replace guesswork with a plan you can actually see.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7V5a1 1 0 011-1h2M4 17v2a1 1 0 001 1h2M20 7V5a1 1 0 00-1-1h-2M20 17v2a1 1 0 01-1 1h-2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Sedation-friendly comfort',
    body: 'For anxious patients, calibrated sedation options keep even long procedures relaxed.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
        <circle cx="12" cy="12" r="5" />
      </svg>
    ),
  },
  {
    title: 'Single-visit precision',
    body: 'In-house milling means many restorations are designed, made, and fitted the same day.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21l2-7.5L2 9h7z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Transparent pricing',
    body: 'Every plan is quoted in full before treatment begins — no surprises at checkout.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 10h18" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
            Why Lumière
          </p>
          <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
            The details you'd expect from a studio, not a clinic.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </div>

        <div
          data-reveal
          className="mt-20 grid grid-cols-2 gap-10 rounded-3xl border border-navy/10 bg-gradient-to-br from-navy to-navy-light p-10 text-pearl sm:grid-cols-4"
        >
          <div className="[&_*]:text-pearl [&_p]:text-pearl/50">
            <AnimatedStat target={98} suffix="%" label="Patient comfort rating" />
          </div>
          <div className="[&_*]:text-pearl [&_p]:text-pearl/50">
            <AnimatedStat target={1200} suffix="+" label="Smiles restored" />
          </div>
          <div className="[&_*]:text-pearl [&_p]:text-pearl/50">
            <AnimatedStat target={14} label="Specialised treatments" />
          </div>
          <div className="[&_*]:text-pearl [&_p]:text-pearl/50">
            <AnimatedStat target={9} label="Years in Gota" />
          </div>
        </div>
      </div>
    </section>
  )
}
