'use client'

import { useEffect, useRef, useState } from 'react'
import { Logo, TurboIcon, SpinningTurbo } from '@/components/Logo'
import { ExplodedTurbo, TurboSpecs } from '@/components/ExplodedTurbo'

// Before/After Slider Component
function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseUp = () => { isDragging.current = false }
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="comparison-slider relative aspect-video rounded-xl overflow-hidden select-none border border-zinc-800"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before (damaged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-6xl mb-4 grayscale opacity-50">⚙️</div>
          <p className="text-zinc-500 font-display text-xl sm:text-2xl">OŠTEĆENA TURBINA</p>
          <p className="text-zinc-600 text-sm mt-2">Gubitak snage • Dim • Buka</p>
        </div>
      </div>
      
      {/* After (fixed) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[#c45c26]/5" />
        <div className="text-center px-4 relative z-10">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-[#c45c26] font-display text-xl sm:text-2xl text-glow">OBNOVLJENA TURBINA</p>
          <p className="text-zinc-400 text-sm mt-2">Puna snaga • Tihi rad • Garancija</p>
        </div>
      </div>

      {/* Slider handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#c45c26] cursor-ew-resize z-10 glow-rust"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#c45c26] rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white/20">
          <span className="text-lg">⟨⟩</span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur px-3 py-1.5 rounded text-xs font-medium tracking-wider">PRE</div>
      <div className="absolute bottom-4 right-4 bg-[#c45c26]/90 backdrop-blur px-3 py-1.5 rounded text-xs font-medium tracking-wider">POSLE</div>
    </div>
  )
}

// Service Card with 3D effect
function ServiceCard({ icon, title, desc, features, delay }: { 
  icon: string, title: string, desc: string, features: string[], delay: number 
}) {
  return (
    <div 
      className="card-3d card-metal p-8 rounded-xl reveal group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="card-3d-inner">
        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
        <h3 className="font-display text-2xl text-[#f5f0e8] mb-4 group-hover:text-[#c45c26] transition-colors">{title}</h3>
        <p className="text-zinc-400 mb-6 leading-relaxed">{desc}</p>
        <ul className="space-y-3">
          {features.map((f, j) => (
            <li key={j} className="flex items-center gap-3 text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">
              <span className="text-[#c45c26] text-lg">✓</span> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Parallax hook
function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      document.querySelectorAll('[data-parallax]').forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.5')
        ;(el as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export default function Home() {
  useScrollReveal()
  useParallax()

  return (
    <>
      {/* Film grain overlay */}
      <div className="grain" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
        
        {/* Floating gears (decorative) */}
        <div className="absolute top-20 left-10 opacity-5 animate-rotate" data-parallax="0.3">
          <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 L55 20 L65 15 L65 25 L75 25 L70 35 L80 40 L70 45 L75 55 L65 55 L65 65 L55 60 L50 70 L45 60 L35 65 L35 55 L25 55 L30 45 L20 40 L30 35 L25 25 L35 25 L35 15 L45 20 Z"/>
            <circle cx="50" cy="40" r="15" fill="#0a0a0a"/>
          </svg>
        </div>
        <div className="absolute bottom-40 right-20 opacity-5 animate-rotate-reverse" data-parallax="0.2">
          <svg className="w-48 h-48" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10 L55 20 L65 15 L65 25 L75 25 L70 35 L80 40 L70 45 L75 55 L65 55 L65 65 L55 60 L50 70 L45 60 L35 65 L35 55 L25 55 L30 45 L20 40 L30 35 L25 25 L35 25 L35 15 L45 20 Z"/>
            <circle cx="50" cy="40" r="15" fill="#0a0a0a"/>
          </svg>
        </div>

        {/* Glow orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c45c26] rounded-full blur-[200px] opacity-10" data-parallax="0.1" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#c45c26] rounded-full blur-[150px] opacity-5" data-parallax="0.15" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#c45c26] font-display text-lg sm:text-xl mb-4 tracking-widest animate-fade-in-up opacity-0">
                VETERNIK • NOVI SAD
              </p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#f5f0e8] leading-[0.9] animate-fade-in-up opacity-0 animate-delay-100">
                REMONT<br />
                <span className="text-[#c45c26] text-glow">TURBO</span><br />
                KOMPRESORA
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-md leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
                Stručna dijagnostika i remont turbina za sva vozila. 
                <span className="text-[#f5f0e8]"> Preko 10 godina iskustva.</span> Garancija 12 meseci.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-300">
                <a 
                  href="#kontakt" 
                  className="btn-glow bg-[#c45c26] hover:bg-[#d46a34] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 glow-rust"
                >
                  Zakažite Pregled
                </a>
                <a 
                  href="tel:+381637725026" 
                  className="border-2 border-zinc-700 hover:border-[#c45c26] text-[#f5f0e8] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center gap-3"
                >
                  <span className="text-[#c45c26]">📞</span> 063/7725-026
                </a>
              </div>
            </div>

            {/* Hero Visual - Animated Turbo Badge */}
            <div className="hidden lg:flex justify-center animate-fade-in opacity-0 animate-delay-400">
              <div className="relative animate-float">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-[#c45c26]/20 rounded-full blur-3xl scale-110" />
                
                {/* Logo badge */}
                <div className="relative border-glow">
                  <Logo className="w-72 h-72 xl:w-80 xl:h-80" variant="full" color="light" />
                </div>
                
                {/* Orbiting elements */}
                <div className="absolute inset-0 animate-rotate" style={{ animationDuration: '30s' }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                    <div className="w-3 h-3 bg-[#c45c26] rounded-full glow-rust" />
                  </div>
                </div>
                <div className="absolute inset-0 animate-rotate-reverse" style={{ animationDuration: '25s' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                    <div className="w-2 h-2 bg-[#f5f0e8] rounded-full opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#c45c26] rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#111111] border-y border-zinc-800/50 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '⏱️', value: '10+', label: 'GODINA ISKUSTVA' },
              { icon: '✓', value: '12', label: 'MESECI GARANCIJE' },
              { icon: '🔧', value: '1000+', label: 'REMONTOVANIH TURBINA' },
              { icon: '📍', value: 'VETERNIK', label: 'NOVI SAD' },
            ].map((item, i) => (
              <div key={i} className="text-center reveal opacity-0 group" style={{transitionDelay: `${i * 100}ms`}}>
                <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                <div className="font-display text-2xl sm:text-3xl text-[#c45c26]">{item.value}</div>
                <div className="text-xs text-zinc-500 tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">TRANSFORMACIJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">PRE I POSLE REMONTA</h2>
            <p className="text-zinc-500 mt-4">Prevucite da vidite razliku</p>
          </div>
          <div className="reveal">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="py-24 bg-[#111111] relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">ŠTA RADIMO</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">NAŠE USLUGE</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon="🔧"
              title="REMONT TURBINE"
              desc="Kompletan remont svih tipova turbo kompresora. Zamena ležajeva, karika, balansiranje rotora."
              features={['Zamena ležajeva', 'Balansiranje rotora', 'Garancija 12 meseci']}
              delay={0}
            />
            <ServiceCard
              icon="🔍"
              title="DIJAGNOSTIKA"
              desc="Stručna dijagnostika i utvrđivanje problema. Besplatna procena pre bilo kakvog rada."
              features={['Vizuelni pregled', 'Test pritiska', 'Besplatna procena']}
              delay={100}
            />
            <ServiceCard
              icon="⚙️"
              title="ZAMENA DELOVA"
              desc="Originalni i kvalitetni zamenski delovi za sve tipove turbo kompresora."
              features={['Originalni delovi', 'Stručna ugradnja', 'Garancija na delove']}
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Turbo Anatomy - Light Section for Contrast */}
      <section className="py-24 bg-[#f5f0e8] relative overflow-hidden">
        {/* Sunburst pattern (inspired by ref-1) */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[200%]" 
               style={{ background: 'repeating-conic-gradient(from 0deg, #c45c26 0deg 10deg, transparent 10deg 20deg)' }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">ANATOMIJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1a1a1a]">KAKO RADI TURBINA</h2>
            <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">Pređite mišem preko delova da saznate više o svakom delu turbo kompresora</p>
          </div>
          
          {/* Exploded View */}
          <div className="reveal max-w-4xl mx-auto">
            <ExplodedTurbo className="h-[300px] sm:h-[400px]" />
          </div>

          {/* Specs Grid */}
          <div className="mt-16 reveal">
            <TurboSpecs />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* About */}
      <section id="o-nama" className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="aspect-square bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800/50">
                {/* Diagonal stripes pattern */}
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)'}} />
                <div className="text-center z-10 p-8">
                  <Logo className="w-48 h-48 mx-auto mb-6 opacity-80" variant="full" color="light" />
                  <p className="text-zinc-600 text-sm">Fotografija radionice</p>
                </div>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">NAŠA PRIČA</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-8">O NAMA</h2>
              <div className="space-y-5 text-zinc-400 leading-relaxed">
                <p><span className="text-[#f5f0e8] font-semibold">Turbo Servis</span> je specijalizovana radionica za remont turbo kompresora u Veterniku kod Novog Sada.</p>
                <p>Sa preko <span className="text-[#c45c26] font-semibold">10 godina iskustva</span>, pružamo stručne usluge dijagnostike i remonta turbina za sva vozila — putnička, teretna i radne mašine.</p>
                <p>Vlasnik <span className="text-[#f5f0e8] font-semibold">Saša Petrić</span> garantuje kvalitetan rad, korišćenje proverenih delova i pošten pristup svakom klijentu.</p>
              </div>
              <div className="flex flex-wrap gap-8 mt-10">
                {[
                  { value: '10+', label: 'Godina' },
                  { value: '1000+', label: 'Klijenata' },
                  { value: '12', label: 'Meseci garancije' },
                ].map((stat, i) => (
                  <div key={i} className="group">
                    <div className="font-display text-4xl text-[#c45c26] group-hover:text-glow transition-all">{stat.value}</div>
                    <div className="text-sm text-zinc-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#111111] relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">PITANJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">ČESTA PITANJA</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Koliko traje remont turbine?', a: 'Obično 1-3 radna dana, zavisno od tipa i obima posla. Za hitne slučajeve nudimo ubrzanu uslugu.' },
              { q: 'Da li dajete garanciju?', a: 'Da, na sve radove i ugrađene delove dajemo garanciju od 12 meseci.' },
              { q: 'Koje tipove turbina servisirate?', a: 'Sve brendove: Garrett, BorgWarner, Holset, IHI, Mitsubishi i druge. Za putnička, teretna i radna vozila.' },
              { q: 'Kako prepoznati da turbina treba remont?', a: 'Glavni znaci: gubitak snage motora, crni ili plavi dim iz auspuha, zviždanje ili čudan zvuk, povećana potrošnja ulja.' },
            ].map((item, i) => (
              <div key={i} className="card-metal p-6 rounded-xl reveal group hover:border-[#c45c26]/30 transition-colors" style={{transitionDelay: `${i * 50}ms`}}>
                <h3 className="font-semibold text-[#f5f0e8] mb-2 group-hover:text-[#c45c26] transition-colors">{item.q}</h3>
                <p className="text-zinc-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-[#0a0a0a] relative">
        <div className="absolute inset-0 noise-overlay" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2 tracking-widest">JAVITE NAM SE</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">KONTAKT</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <form className="space-y-6 reveal">
              <div>
                <input 
                  type="text" 
                  placeholder="Ime i prezime" 
                  className="w-full px-6 py-4 bg-[#151515] border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-all text-[#f5f0e8] placeholder:text-zinc-600" 
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Telefon *" 
                  required 
                  className="w-full px-6 py-4 bg-[#151515] border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-all text-[#f5f0e8] placeholder:text-zinc-600" 
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  placeholder="Opišite problem sa turbinom..." 
                  className="w-full px-6 py-4 bg-[#151515] border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-all text-[#f5f0e8] placeholder:text-zinc-600 resize-none" 
                />
              </div>
              <button 
                type="submit" 
                className="btn-glow w-full bg-[#c45c26] hover:bg-[#d46a34] text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] glow-rust"
              >
                Pošaljite Upit
              </button>
            </form>
            <div className="reveal">
              <div className="space-y-8 mb-8">
                {[
                  { icon: '📍', title: 'Adresa', value: 'Svetih Arhanđela 9, 21203 Veternik', href: 'https://maps.google.com/?q=Svetih+Arhanđela+9,+Veternik' },
                  { icon: '📞', title: 'Telefon', value: '063/7725-026 · 064/1242-469', href: 'tel:+381637725026' },
                  { icon: '🕐', title: 'Radno vreme', value: 'Pon-Pet: 08-17h · Sub: 08-13h' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="text-3xl group-hover:scale-110 transition-transform">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#f5f0e8]">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-zinc-400 hover:text-[#c45c26] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-zinc-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps */}
              <div className="rounded-xl overflow-hidden h-[200px] border border-zinc-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.8!2d19.7633!3d45.2707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1049a0b8b0b1%3A0x0!2sSvetih%20Arhan%C4%91ela%209%2C%20Veternik!5e0!3m2!1sen!2srs!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Turbo Servis lokacija"
                />
              </div>

              {/* Contact buttons */}
              <div className="flex gap-4 mt-6">
                <a 
                  href="tel:+381637725026" 
                  className="flex-1 btn-glow bg-[#c45c26] hover:bg-[#d46a34] text-white px-6 py-4 rounded-xl font-semibold text-center transition-all hover:scale-[1.02]"
                >
                  📞 Pozovite
                </a>
                <a 
                  href="https://wa.me/381637725026" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all hover:scale-[1.02]"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-[#111111] to-[#0a0a0a] text-center relative overflow-hidden">
        {/* Background turbo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <TurboIcon className="w-[600px] h-[600px]" color="#c45c26" />
        </div>
        <div className="max-w-2xl mx-auto px-6 reveal relative z-10">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] mb-6">
            IMATE PROBLEM<br />SA <span className="text-[#c45c26] text-glow">TURBINOM</span>?
          </h2>
          <p className="text-zinc-500 mb-10 text-lg">Pozovite nas za besplatnu procenu i stručan savet</p>
          <a 
            href="tel:+381637725026" 
            className="btn-glow inline-block bg-[#c45c26] hover:bg-[#d46a34] text-white px-12 py-5 rounded-xl font-display text-3xl transition-all hover:scale-105 glow-rust-intense"
          >
            063/7725-026
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] border-t border-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <SpinningTurbo className="w-12 h-12 opacity-50" />
              <div>
                <div className="font-display text-2xl text-[#c45c26]">TURBO SERVIS</div>
                <div className="text-xs text-zinc-600 tracking-widest">NOVI SAD • EST. 2014</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-zinc-600 text-sm">Stručan remont turbo kompresora</p>
              <p className="text-zinc-700 text-xs mt-2">© 2026 Turbo Servis Novi Sad. Sva prava zadržana.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
