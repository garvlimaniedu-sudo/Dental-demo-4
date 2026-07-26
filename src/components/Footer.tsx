export default function Footer() {
  return (
    <footer className="relative border-t border-navy/10 bg-navy px-6 pb-10 pt-20 text-pearl">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl">
              Lumière<span className="text-emerald-soft">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pearl/50">
              A luxury dental studio in Gota, Ahmedabad — precision dentistry
              with the calm of a private atelier.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-pearl/40">Studio</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-pearl/70">
              <li><a href="#about">About</a></li>
              <li><a href="#dentist">Doctor</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#technology">Technology</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest2 text-pearl/40">Visit</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-pearl/70">
              <li>Sanskar Bluebell Complex</li>
              <li>Gota, Ahmedabad 382481</li>
              <li>+91 79 4000 1234</li>
              <li>hello@lumieredental.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-pearl/10 pt-8 text-xs text-pearl/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Lumière Dental Studio. All rights reserved.</span>
          <span>Design &amp; build by your web design studio</span>
        </div>
      </div>
    </footer>
  )
}
