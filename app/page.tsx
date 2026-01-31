'use client'

import { useEffect, useRef, useState } from 'react'
import { Logo, TurboIcon, SpinningTurbo } from '@/components/Logo'
import { ExplodedTurbo, TurboSpecs } from '@/components/ExplodedTurbo'

// ============================================
// COMPONENTS
// ============================================

// Before/After Slider
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

  useEffect(() => {
    const handleUp = () => { isDragging.current = false }
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchend', handleUp)
    return () => {
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchend', handleUp)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize group"
      onMouseDown={() => { isDragging.current = true }}
      onMouseMove={(e) => handleMove(e.clientX)}
      onTouchStart={() => { isDragging.current = true }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      {/* Before */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <span className="text-5xl grayscale opacity-40">⚙️</span>
            </div>
            <p className="font-display text-2xl text-zinc-500">OŠTEĆENA</p>
            <p className="text-zinc-600 text-sm mt-2">Gubitak snage · Dim · Buka</p>
          </div>
        </div>
      </div>
      
      {/* After */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1a1512] via-[#0f0d0b] to-[#0a0a0a]"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="absolute inset-0 bg-[#c45c26]/5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#c45c26]/20 to-transparent flex items-center justify-center border border-[#c45c26]/30 glow-rust">
              <SpinningTurbo className="w-16 h-16" color="#c45c26" />
            </div>
            <p className="font-display text-2xl text-[#c45c26] text-glow">OBNOVLJENA</p>
            <p className="text-zinc-400 text-sm mt-2">Puna snaga · Tihi rad · Garancija</p>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#c45c26] z-20"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#c45c26] rounded-full flex items-center justify-center shadow-2xl border-4 border-white/10 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium tracking-widest text-zinc-400">PRE</div>
      <div className="absolute top-4 right-4 bg-[#c45c26] px-4 py-2 rounded-full text-xs font-medium tracking-widest text-white">POSLE</div>
    </div>
  )
}

// Service Card
function ServiceCard({ icon, title, description, features, index }: { 
  icon: string; title: string; description: string; features: string[]; index: number 
}) {
  return (
    <div 
      className="group relative bg-gradient-to-b from-zinc-900/80 to-zinc-900/40 backdrop-blur border border-zinc-800/50 rounded-2xl p-8 hover:border-[#c45c26]/30 transition-all duration-500 reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Number */}
      <div className="absolute top-6 right-6 font-display text-5xl text-zinc-800 group-hover:text-[#c45c26]/20 transition-colors">
        0{index + 1}
      </div>
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#c45c26]/20 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <span className="text-3xl">{icon}</span>
      </div>
      
      {/* Content */}
      <h3 className="font-display text-2xl text-[#f5f0e8] mb-3 group-hover:text-[#c45c26] transition-colors">{title}</h3>
      <p className="text-zinc-500 leading-relaxed mb-6">{description}</p>
      
      {/* Features */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <div className="w-5 h-5 rounded-full bg-[#c45c26]/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[#c45c26] text-xs">✓</span>
            </div>
            <span className="text-zinc-400">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Process Step
function ProcessStep({ number, title, description, isLast }: { 
  number: string; title: string; description: string; isLast?: boolean 
}) {
  return (
    <div className="relative flex gap-6">
      {/* Line */}
      {!isLast && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-[#c45c26]/50 to-transparent" />
      )}
      
      {/* Number */}
      <div className="w-12 h-12 rounded-full bg-[#c45c26] flex items-center justify-center flex-shrink-0 font-display text-xl text-white shadow-lg glow-rust">
        {number}
      </div>
      
      {/* Content */}
      <div className="pb-12">
        <h4 className="font-display text-xl text-[#f5f0e8] mb-2">{title}</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Scroll reveal hook
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ============================================
// PAGE
// ============================================

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* Film grain */}
      <div className="grain" />

      {/* ==================== HERO ==================== */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#c45c26]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#c45c26]/5 rounded-full blur-[120px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 pt-40 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#c45c26]/10 border border-[#c45c26]/20 rounded-full px-4 py-2 mb-8 animate-fade-in opacity-0">
                <span className="w-2 h-2 bg-[#c45c26] rounded-full animate-pulse" />
                <span className="text-[#c45c26] text-sm font-medium tracking-wide">VETERNIK, NOVI SAD</span>
              </div>
              
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#f5f0e8] leading-[0.9] animate-fade-in-up opacity-0 animate-delay-100">
                STRUČAN<br />
                <span className="text-[#c45c26]">REMONT</span><br />
                TURBINA
              </h1>
              
              <p className="mt-8 text-lg text-zinc-400 max-w-md leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
                Profesionalna dijagnostika i remont turbo kompresora za sva vozila. 
                <span className="text-[#f5f0e8]"> Preko 10 godina iskustva.</span>
              </p>
              
              {/* Stats inline */}
              <div className="flex gap-8 mt-8 animate-fade-in-up opacity-0 animate-delay-300">
                <div>
                  <div className="font-display text-3xl text-[#c45c26]">10+</div>
                  <div className="text-xs text-zinc-600 tracking-wider">GODINA</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-[#c45c26]">1000+</div>
                  <div className="text-xs text-zinc-600 tracking-wider">SERVISA</div>
                </div>
                <div>
                  <div className="font-display text-3xl text-[#c45c26]">12</div>
                  <div className="text-xs text-zinc-600 tracking-wider">MES. GARANCIJE</div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-400">
                <a 
                  href="#kontakt" 
                  className="group bg-[#c45c26] hover:bg-[#d46a34] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center gap-3"
                >
                  Zakažite Pregled
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a 
                  href="tel:+381637725026" 
                  className="border border-zinc-700 hover:border-[#c45c26] text-[#f5f0e8] px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center gap-3"
                >
                  <span className="text-[#c45c26]">📞</span> 063 772 5026
                </a>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="hidden lg:block animate-fade-in opacity-0 animate-delay-500">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#c45c26]/20 rounded-full blur-[100px] scale-75" />
                
                {/* Badge */}
                <div className="relative">
                  <Logo className="w-full max-w-md mx-auto" variant="full" color="light" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-zinc-900/80 backdrop-blur rounded-xl border border-zinc-800 flex items-center justify-center animate-float">
                  <span className="text-3xl">🔧</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-zinc-900/80 backdrop-blur rounded-xl border border-zinc-800 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">⚙️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-zinc-600">
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="usluge" className="py-24 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">USLUGE</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-6">ŠTA RADIMO</h2>
            <p className="text-zinc-500 leading-relaxed">
              Pružamo kompletan servis turbo kompresora — od dijagnostike do potpunog remonta. 
              Radimo sa svim tipovima vozila i svim brendovima turbina.
            </p>
          </div>
          
          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              icon="🔧"
              title="REMONT TURBINE"
              description="Kompletan remont turbo kompresora sa zamenom ležajeva, karika i balansiranjem rotora."
              features={['Zamena ležajeva i karika', 'Balansiranje rotora', 'Kompletna obnova', 'Garancija 12 meseci']}
              index={0}
            />
            <ServiceCard
              icon="🔍"
              title="DIJAGNOSTIKA"
              description="Stručna dijagnostika i utvrđivanje problema. Besplatna procena pre bilo kakvog rada."
              features={['Vizuelni pregled', 'Test pritiska', 'Analiza stanja', 'Besplatna procena']}
              index={1}
            />
            <ServiceCard
              icon="⚙️"
              title="ZAMENA DELOVA"
              description="Ugradnja originalnih i kvalitetnih zamenskih delova sa punom garancijom."
              features={['Originalni delovi', 'Kvalitetne zamene', 'Stručna ugradnja', 'Garancija na delove']}
              index={2}
            />
          </div>
        </div>
      </section>

      {/* ==================== BEFORE/AFTER ==================== */}
      <section className="py-24 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">REZULTAT</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">PRE I POSLE</h2>
          </div>
          <div className="reveal">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* ==================== TURBO ANATOMY (Light Section) ==================== */}
      <section className="py-24 bg-[#f5f0e8] relative overflow-hidden">
        {/* Sunburst */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square" 
               style={{ background: 'repeating-conic-gradient(from 0deg, #c45c26 0deg 5deg, transparent 5deg 10deg)' }} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">TEHNOLOGIJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1a1a1a]">ANATOMIJA TURBINE</h2>
            <p className="text-zinc-600 mt-4 max-w-xl mx-auto">Pređite preko delova da saznate više o komponentama turbo kompresora</p>
          </div>
          
          <div className="reveal">
            <ExplodedTurbo className="h-[280px] sm:h-[350px] max-w-3xl mx-auto" />
          </div>
          
          <div className="mt-16 reveal">
            <TurboSpecs />
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Content */}
            <div className="reveal">
              <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">PROCES</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-6">KAKO RADIMO</h2>
              <p className="text-zinc-500 leading-relaxed mb-12">
                Od prvog kontakta do predaje vozila — transparentan proces bez skrivenih troškova. 
                Znate tačno šta se radi i koliko košta.
              </p>
              
              <ProcessStep 
                number="1" 
                title="DIJAGNOSTIKA" 
                description="Besplatan pregled i procena stanja turbine. Dobijate detaljan izveštaj pre bilo kakvog rada."
              />
              <ProcessStep 
                number="2" 
                title="PONUDA" 
                description="Transparentna ponuda sa tačnom cenom. Bez skrivenih troškova. Radimo tek nakon vaše saglasnosti."
              />
              <ProcessStep 
                number="3" 
                title="REMONT" 
                description="Stručan remont sa kvalitetnim delovima. Rok izrade 1-3 radna dana."
              />
              <ProcessStep 
                number="4" 
                title="GARANCIJA" 
                description="12 meseci garancije na sve radove. Tu smo i posle servisa za sva pitanja."
                isLast
              />
            </div>
            
            {/* Right - Image placeholder */}
            <div className="reveal">
              <div className="aspect-[4/5] bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ 
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.05) 30px, rgba(255,255,255,0.05) 60px)' 
                }} />
                <div className="text-center p-8">
                  <Logo className="w-40 h-40 mx-auto mb-4 opacity-50" variant="full" color="light" />
                  <p className="text-zinc-600 text-sm">Fotografija radionice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-[#0f0f0f]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">FAQ</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">ČESTA PITANJA</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'Koliko traje remont turbine?', a: 'Standardni remont traje 1-3 radna dana. Za hitne slučajeve nudimo ubrzanu uslugu istog ili sledećeg dana.' },
              { q: 'Da li dajete garanciju na remont?', a: 'Da, na sve radove i ugrađene delove dajemo garanciju od 12 meseci bez ograničenja kilometraže.' },
              { q: 'Koje brendove turbina servisirate?', a: 'Radimo sa svim brendovima: Garrett, BorgWarner, Holset, IHI, Mitsubishi, KKK, i drugima.' },
              { q: 'Kako da znam da mi turbina treba remont?', a: 'Najčešći znaci: gubitak snage motora, crni ili plavi dim, zviždanje ili neobičan zvuk, povećana potrošnja ulja.' },
              { q: 'Da li radite sa teretnim vozilima?', a: 'Da, servisiramo turbo kompresore za sva vozila — putnička, teretna, autobuse, radne mašine i poljoprivrednu mehanizaciju.' },
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6 reveal hover:border-[#c45c26]/20 transition-colors"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <h3 className="font-semibold text-[#f5f0e8] mb-3">{item.q}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="kontakt" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Info */}
            <div className="lg:col-span-2 reveal">
              <p className="text-[#c45c26] font-display text-lg mb-4 tracking-widest">KONTAKT</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-6">JAVITE NAM SE</h2>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Pozovite nas za besplatnu procenu ili pošaljite upit. Odgovaramo u roku od nekoliko sati.
              </p>
              
              <div className="space-y-6">
                <a href="tel:+381637725026" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c45c26]/10 flex items-center justify-center group-hover:bg-[#c45c26]/20 transition-colors">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 tracking-wider mb-1">TELEFON</p>
                    <p className="text-[#f5f0e8] font-semibold group-hover:text-[#c45c26] transition-colors">063 772 5026</p>
                  </div>
                </a>
                
                <a href="https://maps.google.com/?q=Svetih+Arhanđela+9,+Veternik" target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#c45c26]/10 flex items-center justify-center group-hover:bg-[#c45c26]/20 transition-colors">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 tracking-wider mb-1">ADRESA</p>
                    <p className="text-[#f5f0e8] font-semibold group-hover:text-[#c45c26] transition-colors">Svetih Arhanđela 9, Veternik</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c45c26]/10 flex items-center justify-center">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 tracking-wider mb-1">RADNO VREME</p>
                    <p className="text-[#f5f0e8] font-semibold">Pon-Pet 8-17h · Sub 8-13h</p>
                  </div>
                </div>
              </div>
              
              {/* Quick actions */}
              <div className="flex gap-3 mt-10">
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
            <div className="lg:col-span-3 reveal">
              <form className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <input 
                    type="text" 
                    placeholder="Ime i prezime" 
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8] placeholder:text-zinc-600" 
                  />
                  <input 
                    type="tel" 
                    placeholder="Telefon *" 
                    required 
                    className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8] placeholder:text-zinc-600" 
                  />
                </div>
                <input 
                  type="text" 
                  placeholder="Vozilo (marka, model, godina)" 
                  className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8] placeholder:text-zinc-600 mb-4" 
                />
                <textarea 
                  rows={4} 
                  placeholder="Opišite problem sa turbinom..." 
                  className="w-full px-5 py-4 bg-zinc-900 border border-zinc-800 rounded-xl focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8] placeholder:text-zinc-600 resize-none mb-6" 
                />
                <button 
                  type="submit" 
                  className="w-full bg-[#c45c26] hover:bg-[#d46a34] text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Pošaljite Upit
                </button>
                <p className="text-zinc-600 text-xs text-center mt-4">Odgovaramo u roku od nekoliko sati</p>
              </form>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12 reveal">
            <div className="rounded-2xl overflow-hidden border border-zinc-800/50 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2805.8!2d19.7633!3d45.2707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1049a0b8b0b1%3A0x0!2sSvetih%20Arhan%C4%91ela%209%2C%20Veternik!5e0!3m2!1sen!2srs!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.8)' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <TurboIcon className="w-[800px] h-[800px]" color="#c45c26" />
        </div>
        
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] mb-6">
            PROBLEMI SA<br /><span className="text-[#c45c26]">TURBINOM?</span>
          </h2>
          <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
            Pozovite nas za besplatnu dijagnostiku i stručan savet. Ne čekajte da problem postane veći.
          </p>
          <a 
            href="tel:+381637725026" 
            className="inline-flex items-center gap-4 bg-[#c45c26] hover:bg-[#d46a34] text-white px-10 py-5 rounded-xl font-display text-2xl transition-all hover:scale-105 glow-rust"
          >
            <span>📞</span>
            063 772 5026
          </a>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-[#050505] border-t border-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <SpinningTurbo className="w-10 h-10 opacity-60" />
              <div>
                <div className="font-display text-xl text-[#f5f0e8]">TURBO SERVIS</div>
                <div className="text-xs text-zinc-600 tracking-wider">NOVI SAD · EST. 2014</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-zinc-600 text-sm">Stručan remont turbo kompresora</p>
              <p className="text-zinc-700 text-xs mt-1">© 2026 Sva prava zadržana</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
