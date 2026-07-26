import { useReveal } from '../lib/useReveal'

const CREDENTIALS = [
  'MDS, Prosthodontics — Government Dental College, Ahmedabad',
  'Fellow, Indian Academy of Cosmetic Dentistry',
  'Advanced Digital Smile Design Certification, Milan',
  '11 years in restorative & cosmetic practice',
]

export default function MeetDentist() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="dentist" className="relative overflow-hidden px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div
            data-reveal
            className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-ivory via-mist to-beige shadow-[0_40px_80px_-40px_rgba(15,36,54,0.35)]"
          >
            <div className="absolute inset-0 flex items-end p-8">
              <div className="rounded-2xl border border-white/40 bg-pearl/70 px-5 py-4 backdrop-blur-md">
                <p className="font-display text-lg text-navy">Dr. Ananya Mehta</p>
                <p className="text-xs uppercase tracking-widest2 text-navy/50">
                  Founder &amp; Lead Prosthodontist
                </p>
              </div>
            </div>
            <div className="absolute right-8 top-8 h-24 w-24 rounded-full bg-cyan-soft/30 blur-2xl" />
          </div>

          <div>
            <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
              Meet the Dentist
            </p>
            <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
              Care shaped by
              <span className="italic text-dental-blue"> eleven years</span> of
              listening first.
            </h2>
            <p data-reveal className="mt-8 max-w-lg text-balance text-lg leading-relaxed text-navy/70">
              Dr. Mehta trained in prosthodontics before specialising in
              cosmetic and full-mouth rehabilitation. Her approach favours
              minimally invasive techniques and digital planning — so
              patients see their result before a single procedure begins.
            </p>

            <ul data-reveal className="mt-10 flex flex-col gap-4">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy/70">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
