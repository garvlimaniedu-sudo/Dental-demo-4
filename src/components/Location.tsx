import { useReveal } from '../lib/useReveal'

export default function Location() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="location" className="relative px-6 py-32">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p data-reveal className="mb-6 text-[13px] font-medium uppercase tracking-widest2 text-emerald">
              Visit the Studio
            </p>
            <h2 data-reveal className="font-display text-4xl leading-tight tracking-tightest text-navy sm:text-5xl">
              Find us in Gota.
            </h2>

            <div data-reveal className="mt-10 flex flex-col gap-6 text-navy/70">
              <div>
                <p className="text-xs uppercase tracking-widest2 text-navy/40">Address</p>
                <p className="mt-2 text-lg">
                  2nd Floor, Sanskar Bluebell Complex,
                  <br />
                  Gota, Ahmedabad, Gujarat 382481
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-navy/40">Hours</p>
                <p className="mt-2 text-lg">Mon – Sat, 10:00 AM – 7:30 PM</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest2 text-navy/40">Contact</p>
                <p className="mt-2 text-lg">+91 79 4000 1234 · hello@lumieredental.in</p>
              </div>
            </div>
          </div>

          <div
            data-reveal
            className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-mist via-pearl to-beige shadow-[0_30px_80px_-30px_rgba(15,36,54,0.3)] lg:aspect-auto"
          >
            <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(#0f243620_1px,transparent_1px),linear-gradient(90deg,#0f243620_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-pearl shadow-xl">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21s-7-6.2-7-11a7 7 0 1114 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
