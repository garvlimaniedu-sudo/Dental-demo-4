import { useEffect, useState } from 'react'
import { useLenis } from './lib/useLenis'
import Nav from './components/Nav'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Tooth3D from './components/Tooth3D'
import Hero from './components/Hero'
import About from './components/About'
import MeetDentist from './components/MeetDentist'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Technology from './components/Technology'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Journey from './components/Journey'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Location from './components/Location'
import AppointmentCTA from './components/AppointmentCTA'
import Footer from './components/Footer'

export default function App() {
  useLenis()
  const [activeSlot, setActiveSlot] = useState('hero')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-tooth]'))
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slot = entry.target.getAttribute('data-tooth')
            if (slot) setActiveSlot(slot)
          }
        })
      },
      { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative">
      <CustomCursor />
      <ScrollProgress />
      <Nav />
      <Tooth3D activeSlot={activeSlot} />

      <main>
        <Hero />
        <About />
        <MeetDentist />
        <WhyChooseUs />
        <Services />
        <Technology />
        <Gallery />
        <Testimonials />
        <Journey />
        <Pricing />
        <FAQ />
        <Location />
        <AppointmentCTA />
      </main>

      <Footer />
    </div>
  )
}
