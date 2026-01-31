'use client'

import { useEffect, useRef, useState } from 'react'

// ============================================
// SCROLL PROGRESS HOOK
// ============================================
function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementHeight = rect.height
      
      // Calculate progress: 0 when element enters viewport, 1 when it leaves
      const start = windowHeight
      const end = -elementHeight
      const current = rect.top
      
      const progress = Math.min(Math.max((start - current) / (start - end), 0), 1)
      setProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}

// ============================================
// HERO SECTION - COLBO STYLE
// ============================================
function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="min-h-screen bg-[#0a0f14] relative overflow-hidden flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f14] via-[#0d1319] to-[#0a0f14]" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ 
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="font-display text-xl text-white tracking-wider">
            turbo<span className="text-[#c45c26]">servis</span>
          </div>
          
          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#proces" className="hover:text-white transition-colors">Proces</a>
            <a href="#usluge" className="hover:text-white transition-colors">Usluge</a>
            <a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a>
          </div>
          
          {/* CTA */}
          <a href="tel:+381637725026" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
            <div className="w-2 h-2 rounded-full bg-[#c45c26] animate-pulse" />
            063 772 5026
          </a>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen py-32">
          
          {/* Left side - Giant Typography + Floating Product */}
          <div className="relative">
            {/* Background text - massive */}
            <div className="relative">
              <h1 
                className={`font-display text-[12vw] lg:text-[10vw] leading-[0.85] text-white/10 select-none transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                TURBO
                <br />
                SERVIS
              </h1>
              
              {/* Floating turbocharger image - overlaps the text */}
              <div 
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#c45c26]/20 rounded-full blur-[80px] scale-75" />
                
                {/* Product image placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/50 flex items-center justify-center">
                    {/* Placeholder for turbocharger image */}
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚙️</div>
                      <p className="text-zinc-600 text-xs tracking-wider">TURBO IMAGE</p>
                      <p className="text-zinc-700 text-[10px]">800×800px PNG</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtitle under the composition */}
            <div className={`mt-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="flex items-center gap-4 text-zinc-500 text-sm">
                <div className="w-12 h-px bg-zinc-700" />
                <span>Veternik, Novi Sad</span>
              </div>
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className={`lg:pl-12 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Product title */}
            <p className="text-[#c45c26] text-sm tracking-widest mb-4">STRUČAN REMONT</p>
            <h2 className="font-display text-4xl lg:text-5xl text-white leading-tight mb-6">
              Profesionalna obnova turbo kompresora
            </h2>
            
            <p className="text-zinc-400 leading-relaxed mb-8 max-w-md">
              Kompletan servis turbina za sva vozila. Od dijagnostike do potpunog remonta sa 
              <span className="text-white"> garancijom 12 meseci</span>.
            </p>

            {/* Feature dots */}
            <div className="flex items-center gap-3 mb-8">
              {['Dijagnostika', 'Remont', 'Balansiranje', 'Garancija'].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-[#c45c26]' : 'bg-zinc-700'}`} />
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-t border-b border-zinc-800/50">
              <div>
                <div className="font-display text-3xl text-white">10+</div>
                <div className="text-xs text-zinc-600 tracking-wider mt-1">GODINA</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white">1000+</div>
                <div className="text-xs text-zinc-600 tracking-wider mt-1">SERVISA</div>
              </div>
              <div>
                <div className="font-display text-3xl text-white">12</div>
                <div className="text-xs text-zinc-600 tracking-wider mt-1">MES. GARANCIJE</div>
              </div>
            </div>

            {/* CTA Button */}
            <a 
              href="#kontakt"
              className="inline-flex items-center gap-3 bg-transparent border border-zinc-700 hover:border-[#c45c26] text-white px-8 py-4 rounded-full transition-all hover:bg-[#c45c26]/10 group"
            >
              <span>Zakažite pregled</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-600 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  )
}

// ============================================
// PROCESS SCROLL SECTION
// ============================================
const PROCESS_STEPS = [
  {
    id: 1,
    title: 'DIJAGNOSTIKA',
    subtitle: 'Pregled i analiza',
    description: 'Kompletna dijagnostika turbine. Vizuelni pregled, test pritiska, analiza habanja. Besplatna procena stanja.',
    image: '/images/process-1.png', // Placeholder path
  },
  {
    id: 2,
    title: 'DEMONTAŽA',
    subtitle: 'Rastavljanje komponenti',
    description: 'Pažljivo rastavljanje svih delova. Dokumentovanje stanja svake komponente za preciznu obnovu.',
    image: '/images/process-2.png',
  },
  {
    id: 3,
    title: 'REMONT',
    subtitle: 'Zamena i obnova',
    description: 'Zamena ležajeva, karika i oštećenih delova. Čišćenje i obnova kućišta. Samo kvalitetni delovi.',
    image: '/images/process-3.png',
  },
  {
    id: 4,
    title: 'BALANSIRANJE',
    subtitle: 'Precizno podešavanje',
    description: 'Profesionalno balansiranje rotora na specijalnoj opremi. Ključno za dug vek trajanja.',
    image: '/images/process-4.png',
  },
  {
    id: 5,
    title: 'TESTIRANJE',
    subtitle: 'Kontrola kvaliteta',
    description: 'Završno testiranje pod pritiskom. Provera svih parametara pre vraćanja na vozilo.',
    image: '/images/process-5.png',
  },
]

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef as React.RefObject<HTMLElement>)
  
  // Determine which step is active based on scroll progress
  const totalSteps = PROCESS_STEPS.length
  const activeStepIndex = Math.min(
    Math.floor(progress * totalSteps),
    totalSteps - 1
  )
  const activeStep = PROCESS_STEPS[activeStepIndex]
  
  // Progress within current step (0-1)
  const stepProgress = (progress * totalSteps) % 1

  return (
    <section 
      ref={sectionRef}
      id="proces"
      className="bg-[#0a0f14] relative"
      style={{ height: `${100 + (totalSteps * 80)}vh` }} // Extended height for scroll
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left - Content */}
            <div className="relative z-10">
              {/* Section label */}
              <p className="text-[#c45c26] text-sm tracking-widest mb-6">PROCES REMONTA</p>
              
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-8">
                {PROCESS_STEPS.map((step, i) => (
                  <div 
                    key={step.id}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === activeStepIndex 
                        ? 'w-8 bg-[#c45c26]' 
                        : i < activeStepIndex 
                          ? 'w-4 bg-[#c45c26]/50' 
                          : 'w-4 bg-zinc-800'
                    }`}
                  />
                ))}
              </div>

              {/* Step number */}
              <div className="font-display text-8xl text-zinc-800 mb-4">
                0{activeStep.id}
              </div>

              {/* Step content - with transitions */}
              <div className="relative h-48">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      i === activeStepIndex
                        ? 'opacity-100 translate-y-0'
                        : i < activeStepIndex
                          ? 'opacity-0 -translate-y-8'
                          : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h2 className="font-display text-4xl lg:text-5xl text-white mb-2">
                      {step.title}
                    </h2>
                    <p className="text-zinc-500 text-lg mb-4">{step.subtitle}</p>
                    <p className="text-zinc-400 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Specs/details */}
              <div className="mt-8 pt-8 border-t border-zinc-800/50">
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-zinc-600 mb-1">Vreme trajanja</p>
                    <p className="text-white">1-3 radna dana</p>
                  </div>
                  <div>
                    <p className="text-zinc-600 mb-1">Garancija</p>
                    <p className="text-white">12 meseci</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#c45c26]/10 rounded-3xl blur-[100px] scale-90" />
              
              {/* Image container */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/50 overflow-hidden">
                {/* Progress bar on image */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-zinc-800">
                  <div 
                    className="h-full bg-[#c45c26] transition-all duration-300"
                    style={{ width: `${(activeStepIndex / (totalSteps - 1)) * 100}%` }}
                  />
                </div>

                {/* Image stack - all positioned absolute, opacity controls visibility */}
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.id}
                    className={`absolute inset-0 flex items-center justify-center p-12 transition-all duration-700 ${
                      i === activeStepIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full rounded-2xl bg-zinc-800/50 border border-zinc-700/30 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl mb-4">
                          {['🔍', '🔧', '⚙️', '⚖️', '✅'][i]}
                        </div>
                        <p className="text-zinc-500 text-sm">{step.title}</p>
                        <p className="text-zinc-700 text-xs mt-2">Slika: {step.image}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// SERVICES SECTION
// ============================================
function ServicesSection() {
  const services = [
    {
      icon: '🔧',
      title: 'REMONT TURBINE',
      description: 'Kompletan remont sa zamenom ležajeva, karika i balansiranjem rotora.',
      price: 'od 150€'
    },
    {
      icon: '🔍',
      title: 'DIJAGNOSTIKA',
      description: 'Stručna dijagnostika i besplatna procena pre bilo kakvog rada.',
      price: 'Besplatno'
    },
    {
      icon: '⚙️',
      title: 'ZAMENA DELOVA',
      description: 'Originalni i kvalitetni zamenski delovi sa punom garancijom.',
      price: 'Po dogovoru'
    },
  ]

  return (
    <section id="usluge" className="py-32 bg-[#0a0f14]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#c45c26] text-sm tracking-widest mb-4">USLUGE</p>
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">Šta radimo</h2>
          <p className="text-zinc-500 leading-relaxed">
            Pružamo kompletan servis turbo kompresora — od dijagnostike do potpunog remonta.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div 
              key={i}
              className="group bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8 hover:border-[#c45c26]/30 transition-all duration-500"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="font-display text-2xl text-white mb-3 group-hover:text-[#c45c26] transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">{service.description}</p>
              <div className="text-[#c45c26] font-display text-xl">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================
// CONTACT SECTION
// ============================================
function ContactSection() {
  return (
    <section id="kontakt" className="py-32 bg-[#080b0e]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <p className="text-[#c45c26] text-sm tracking-widest mb-4">KONTAKT</p>
            <h2 className="font-display text-4xl lg:text-5xl text-white mb-6">Javite nam se</h2>
            <p className="text-zinc-500 leading-relaxed mb-10 max-w-md">
              Pozovite nas za besplatnu procenu ili pošaljite upit. Odgovaramo u roku od nekoliko sati.
            </p>

            <div className="space-y-6">
              <a href="tel:+381637725026" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-[#c45c26]/10 flex items-center justify-center text-2xl">
                  📞
                </div>
                <div>
                  <p className="text-zinc-600 text-xs tracking-wider mb-1">TELEFON</p>
                  <p className="text-white text-lg group-hover:text-[#c45c26] transition-colors">063 772 5026</p>
                </div>
              </a>

              <a href="https://maps.google.com/?q=Svetih+Arhanđela+9,+Veternik" target="_blank" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-[#c45c26]/10 flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <p className="text-zinc-600 text-xs tracking-wider mb-1">ADRESA</p>
                  <p className="text-white text-lg group-hover:text-[#c45c26] transition-colors">Svetih Arhanđela 9, Veternik</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#c45c26]/10 flex items-center justify-center text-2xl">
                  🕐
                </div>
                <div>
                  <p className="text-zinc-600 text-xs tracking-wider mb-1">RADNO VREME</p>
                  <p className="text-white text-lg">Pon-Pet 8-17h · Sub 8-13h</p>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-4 mt-10">
              <a 
                href="tel:+381637725026" 
                className="flex-1 bg-[#c45c26] hover:bg-[#d46a34] text-white py-4 rounded-xl font-semibold text-center transition-colors"
              >
                📞 Pozovite
              </a>
              <a 
                href="https://wa.me/381637725026" 
                target="_blank"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded-xl font-semibold text-center transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Ime i prezime" 
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-white placeholder:text-zinc-600" 
                />
                <input 
                  type="tel" 
                  placeholder="Telefon *" 
                  required 
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-white placeholder:text-zinc-600" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Vozilo (marka, model, godina)" 
                className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-white placeholder:text-zinc-600 mb-4" 
              />
              <textarea 
                rows={4} 
                placeholder="Opišite problem sa turbinom..." 
                className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-white placeholder:text-zinc-600 resize-none mb-6" 
              />
              <button 
                type="submit" 
                className="w-full bg-[#c45c26] hover:bg-[#d46a34] text-white py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                Pošaljite Upit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="bg-[#050709] border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-display text-xl text-white tracking-wider">
            turbo<span className="text-[#c45c26]">servis</span>
            <span className="text-zinc-600 text-sm ml-4">Novi Sad · Est. 2014</span>
          </div>
          <div className="text-zinc-600 text-sm">
            © 2026 Sva prava zadržana
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// PAGE
// ============================================
export default function Home() {
  return (
    <main className="bg-[#0a0f14]">
      <HeroSection />
      <ProcessSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
