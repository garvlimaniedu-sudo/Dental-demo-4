import { useReveal } from '../lib/useReveal'
import ServiceCard from './ServiceCard'

const SERVICES = [
  {
    title: 'Cosmetic Veneers',
    description:
      'Ultra-thin porcelain veneers designed digitally against your facial proportions before a single tooth is touched.',
    duration: '2–3 visits',
  },
  {
    title: 'Invisible Aligners',
    description:
      'Custom clear aligner therapy for gradual, near-invisible correction — with a full 3D preview of your final smile.',
    duration: '6–14 months',
  },
  {
    title: 'Dental Implants',
    description:
      'Titanium implants placed with guided precision for a permanent, natural-feeling replacement tooth.',
    duration: '3–6 months',
  },
  {
    title: 'Full-Mouth Rehabilitation',
    description:
      'A coordinated, multi-discipline plan for patients rebuilding function and aesthetics across the whole bite.',
    duration: '3–8 visits',
  },
  {
    title: 'Root Canal Therapy',
    description:
      'Microscope-assisted endodontics that prioritise comfort and preserve as much natural tooth as possible.',
    duration: '1–2 visits',
  },
  {
    title: 'Preventive Care',
    description:
      'Cleanings, screenings, and hygiene coaching designed to keep future visits short and simple.',
    duration: '45 minutes',
  },
]

export default function Services() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
              Services
            </p>
            <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
              Every treatment, planned like a craft.
            </h2>
          </div>
          <p data-reveal className="max-w-xs text-sm text-navy/50">
            Tap any treatment to see what it involves and how long it takes.
          </p>
        </div>

        <div>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} index={i + 1} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
