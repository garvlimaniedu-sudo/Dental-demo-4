import { useState } from 'react'
import { useReveal } from '../lib/useReveal'
import MagneticButton from './MagneticButton'

export default function AppointmentCTA() {
  const ref = useReveal<HTMLDivElement>()
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="appointment" data-tooth="cta" className="relative overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-mist via-cyan-soft/20 to-transparent blur-3xl" />
      </div>

      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
          Book a Consultation
        </p>
        <h2 data-reveal className="text-balance font-display text-4xl leading-tight tracking-tightest text-navy sm:text-6xl">
          Your calmest visit to the dentist starts here.
        </h2>

        <div data-reveal className="mx-auto mt-12 max-w-md">
          {submitted ? (
            <div className="rounded-2xl border border-emerald/30 bg-emerald/5 px-6 py-8">
              <p className="font-display text-lg text-emerald">Thank you.</p>
              <p className="mt-2 text-sm text-navy/60">
                The studio will call you within one business day to confirm your slot.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <input
                id="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="w-full flex-1 rounded-full border border-navy/15 bg-pearl px-6 py-4 text-sm text-navy placeholder:text-navy/40 focus:border-navy/40"
              />
              <MagneticButton className="shrink-0">Request Callback</MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
