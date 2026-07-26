import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

const LINKS = [
  { label: 'Studio', href: '#about' },
  { label: 'Doctor', href: '#dentist' },
  { label: 'Services', href: '#services' },
  { label: 'Technology', href: '#technology' },
  { label: 'Journey', href: '#journey' },
  { label: 'Visit', href: '#location' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 transition-all duration-500 ${
          scrolled
            ? 'border border-navy/10 bg-pearl/80 py-2 shadow-[0_8px_30px_-12px_rgba(15,36,54,0.25)] backdrop-blur-md'
            : 'py-2'
        }`}
      >
        <a href="#top" className="font-display text-lg tracking-tight text-navy" data-cursor="link">
          Lumière<span className="text-emerald">.</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="link"
              className="text-[13px] font-medium uppercase tracking-widest2 text-navy/60 transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton href="#appointment" className="!px-6 !py-3 text-[13px]">
            Book a Visit
          </MagneticButton>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-[1.5px] w-5 bg-navy transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-[1.5px] w-5 bg-navy transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-4 mt-3 rounded-3xl border border-navy/10 bg-pearl/95 p-6 shadow-xl backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-5">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display text-navy"
                >
                  {link.label}
                </a>
              ))}
              <MagneticButton href="#appointment" className="mt-2 w-full">
                Book a Visit
              </MagneticButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
