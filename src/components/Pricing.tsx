import { useReveal } from '../lib/useReveal'
import MagneticButton from './MagneticButton'

const PLANS = [
  {
    name: 'Essential Care',
    price: '₹1,500',
    unit: 'per consultation',
    features: ['Full oral examination', 'Digital X-ray review', 'Personalised care plan', 'Same-week scheduling'],
  },
  {
    name: 'Restorative',
    price: '₹18,000',
    unit: 'starting, per tooth',
    features: ['3D scan & digital design', 'Crowns, fillings & root canal', 'In-house milling', '2-year warranty'],
    featured: true,
  },
  {
    name: 'Smile Design',
    price: '₹35,000',
    unit: 'starting, per arch',
    features: ['Full digital smile design', 'Veneers or aligner therapy', 'Whitening included', '5-year warranty'],
  },
]

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
            Investment
          </p>
          <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
            Clear pricing, quoted before you commit.
          </h2>
          <p data-reveal className="mt-6 text-sm text-navy/50">
            Final costs depend on your specific case and are always confirmed in writing after your consultation.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              data-reveal
              className={`flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-navy bg-navy text-pearl shadow-[0_30px_80px_-30px_rgba(15,36,54,0.5)]'
                  : 'border-navy/10 bg-pearl/70'
              }`}
            >
              <h3 className={`font-display text-xl ${plan.featured ? 'text-pearl' : 'text-navy'}`}>
                {plan.name}
              </h3>
              <div className="mt-6">
                <span className={`font-display text-4xl ${plan.featured ? 'text-pearl' : 'text-navy'}`}>
                  {plan.price}
                </span>
                <span className={`ml-2 text-xs ${plan.featured ? 'text-pearl/50' : 'text-navy/40'}`}>
                  {plan.unit}
                </span>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm ${
                      plan.featured ? 'text-pearl/70' : 'text-navy/60'
                    }`}
                  >
                    <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${plan.featured ? 'bg-cyan-soft' : 'bg-emerald'}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <MagneticButton
                href="#appointment"
                variant={plan.featured ? 'solid' : 'outline'}
                className={`mt-8 w-full ${plan.featured ? '!bg-pearl !text-navy hover:!bg-cyan-soft' : ''}`}
              >
                Get a Quote
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
