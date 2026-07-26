import { useReveal } from '../lib/useReveal'

const STATS = [
  { value: '9', label: 'Years in Gota' },
  { value: '1,200+', label: 'Smiles restored' },
  { value: '14', label: 'Specialised treatments' },
  { value: '0', label: 'Rushed appointments' },
]

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" data-tooth="about" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
              The Studio
            </p>
            <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
              A clinic built around
              <span className="italic text-dental-blue"> stillness</span>, not
              speed.
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            <p data-reveal className="text-balance text-lg leading-relaxed text-navy/70">
              Lumière was founded on a simple observation: the anxiety
              patients feel about dental care rarely comes from the
              procedure itself — it comes from the room. So we designed
              ours differently. Natural light, unhurried consultations,
              and equipment that's quiet enough to hear yourself think.
              Every treatment plan is built around your time, your
              comfort, and your specific smile — never a template.
            </p>

            <div data-reveal className="grid grid-cols-2 gap-8 border-t border-navy/10 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-navy">{stat.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest2 text-navy/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
