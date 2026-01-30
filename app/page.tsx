'use client'

import { useEffect, useRef, useState } from 'react'

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
      className="comparison-slider relative aspect-video rounded-lg overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before (damaged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">💨</div>
          <p className="text-zinc-500 font-display text-2xl">OŠTEĆENA TURBINA</p>
          <p className="text-zinc-600 text-sm mt-2">Gubitak snage • Dim • Buka</p>
        </div>
      </div>
      
      {/* After (fixed) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-zinc-900 flex items-center justify-center overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <div className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <p className="text-[#c45c26] font-display text-2xl">OBNOVLJENA TURBINA</p>
          <p className="text-zinc-400 text-sm mt-2">Puna snaga • Tihi rad • 12 meseci garancije</p>
        </div>
      </div>

      {/* Slider handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-[#c45c26] cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#c45c26] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
          ⟨ ⟩
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 px-3 py-1 rounded text-sm">PRE</div>
      <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 rounded text-sm">POSLE</div>
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

export default function Home() {
  useScrollReveal()

  return (
    <>
      {/* Film grain overlay */}
      <div className="grain" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#c45c26] rounded-full blur-[150px]" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#c45c26] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c45c26] font-display text-xl mb-4 animate-fade-in-up opacity-0">VETERNIK, NOVI SAD</p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-[#f5f0e8] leading-none animate-fade-in-up opacity-0 animate-delay-100">
                REMONT<br />
                <span className="text-[#c45c26]">TURBO</span><br />
                KOMPRESORA
              </h1>
              <p className="mt-8 text-xl text-zinc-400 max-w-md animate-fade-in-up opacity-0 animate-delay-200">
                Stručna dijagnostika i remont turbina za sva vozila. 
                Preko 10 godina iskustva. Garancija 12 meseci.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-300">
                <a href="#kontakt" className="btn-glow bg-[#c45c26] hover:bg-[#d46a34] text-white px-8 py-4 rounded font-semibold text-lg transition-all">
                  Zakažite Pregled
                </a>
                <a href="tel:+381637725026" className="border-2 border-[#f5f0e8]/30 hover:border-[#c45c26] text-[#f5f0e8] px-8 py-4 rounded font-semibold text-lg transition-all flex items-center gap-2">
                  <span className="text-[#c45c26]">📞</span> 063/7725-026
                </a>
              </div>
            </div>

            {/* Logo/Emblem */}
            <div className="hidden lg:flex justify-center animate-fade-in opacity-0 animate-delay-400">
              <div className="relative">
                <div className="w-80 h-80 border-4 border-[#c45c26]/30 rounded-full flex items-center justify-center">
                  <div className="w-64 h-64 border-2 border-[#c45c26]/20 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-5xl text-[#c45c26]">TURBO</div>
                      <div className="font-display text-3xl text-[#f5f0e8] mt-1">SERVIS</div>
                      <div className="w-16 h-0.5 bg-[#c45c26] mx-auto my-3" />
                      <div className="text-zinc-500 text-sm tracking-widest">EST. 2014</div>
                    </div>
                  </div>
                </div>
                {/* Decorative gears */}
                <div className="absolute -top-4 -right-4 text-4xl opacity-20 animate-spin" style={{animationDuration: '20s'}}>⚙️</div>
                <div className="absolute -bottom-4 -left-4 text-3xl opacity-20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}>⚙️</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-[#c45c26] rounded-full" />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#1a1a1a] border-y border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '⏱️', value: '10+', label: 'GODINA ISKUSTVA' },
              { icon: '✓', value: '12', label: 'MESECI GARANCIJE' },
              { icon: '🔧', value: '1000+', label: 'SERVISA' },
              { icon: '📍', value: 'VETERNIK', label: 'NOVI SAD' },
            ].map((item, i) => (
              <div key={i} className="text-center reveal opacity-0" style={{transitionDelay: `${i * 100}ms`}}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-display text-2xl text-[#c45c26]">{item.value}</div>
                <div className="text-xs text-zinc-500 tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2">TRANSFORMACIJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">PRE I POSLE REMONTA</h2>
            <p className="text-zinc-500 mt-4">Prevucite da vidite razliku</p>
          </div>
          <div className="reveal">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="py-24 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2">ŠTA RADIMO</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">NAŠE USLUGE</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'REMONT TURBINE',
                desc: 'Kompletan remont svih tipova turbo kompresora. Zamena ležajeva, karika, balansiranje rotora.',
                features: ['Zamena ležajeva', 'Balansiranje', 'Garancija 12 meseci']
              },
              {
                icon: '🔍',
                title: 'DIJAGNOSTIKA',
                desc: 'Stručna dijagnostika i utvrđivanje problema. Besplatna procena pre bilo kakvog rada.',
                features: ['Vizuelni pregled', 'Test pritiska', 'Besplatna procena']
              },
              {
                icon: '⚙️',
                title: 'ZAMENA DELOVA',
                desc: 'Originalni i kvalitetni zamenski delovi za sve tipove turbo kompresora.',
                features: ['Originalni delovi', 'Stručna ugradnja', 'Garancija']
              }
            ].map((service, i) => (
              <div 
                key={i} 
                className="card-metal p-8 rounded-lg hover-lift reveal"
                style={{transitionDelay: `${i * 100}ms`}}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display text-2xl text-[#f5f0e8] mb-3">{service.title}</h3>
                <p className="text-zinc-400 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-zinc-500">
                      <span className="text-[#c45c26]">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider" />

      {/* About */}
      <section id="o-nama" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)'}} />
                </div>
                <div className="text-center z-10">
                  <div className="font-display text-6xl text-[#c45c26] mb-2">TS</div>
                  <div className="text-zinc-600">Fotografija radionice</div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <p className="text-[#c45c26] font-display text-lg mb-2">NAŠA PRIČA</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-8">O NAMA</h2>
              <div className="space-y-4 text-zinc-400">
                <p><strong className="text-[#f5f0e8]">Turbo Servis</strong> je specijalizovana radionica za remont turbo kompresora u Veterniku kod Novog Sada.</p>
                <p>Sa preko <strong className="text-[#c45c26]">10 godina iskustva</strong>, pružamo stručne usluge dijagnostike i remonta turbina za sva vozila.</p>
                <p>Vlasnik <strong className="text-[#f5f0e8]">Saša Petrić</strong> garantuje kvalitetan rad, korišćenje proverenih delova i pošten pristup svakom klijentu.</p>
              </div>
              <div className="flex gap-8 mt-10">
                {[
                  { value: '10+', label: 'Godina' },
                  { value: '1000+', label: 'Klijenata' },
                  { value: '12', label: 'Meseci garancije' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-display text-3xl text-[#c45c26]">{stat.value}</div>
                    <div className="text-sm text-zinc-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2">PITANJA</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">ČESTA PITANJA</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Koliko traje remont turbine?', a: 'Obično 1-3 radna dana. Za hitne slučajeve nudimo ubrzanu uslugu.' },
              { q: 'Da li dajete garanciju?', a: 'Da, 12 meseci garancije na sve radove i ugrađene delove.' },
              { q: 'Koje tipove turbina servisirate?', a: 'Sve brendove: Garrett, BorgWarner, Holset, IHI, Mitsubishi i druge.' },
              { q: 'Kako prepoznati da turbina treba remont?', a: 'Znaci: gubitak snage, crni/plavi dim, zviždanje, povećana potrošnja ulja.' },
            ].map((item, i) => (
              <div key={i} className="card-metal p-6 rounded-lg reveal" style={{transitionDelay: `${i * 50}ms`}}>
                <h3 className="font-semibold text-[#f5f0e8] mb-2">{item.q}</h3>
                <p className="text-zinc-500">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-[#c45c26] font-display text-lg mb-2">JAVITE NAM SE</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8]">KONTAKT</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <form className="space-y-6 reveal">
              <input type="text" placeholder="Ime i prezime" className="w-full px-6 py-4 bg-[#1a1a1a] border border-zinc-800 rounded-lg focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8]" />
              <input type="tel" placeholder="Telefon *" required className="w-full px-6 py-4 bg-[#1a1a1a] border border-zinc-800 rounded-lg focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8]" />
              <textarea rows={4} placeholder="Opišite problem..." className="w-full px-6 py-4 bg-[#1a1a1a] border border-zinc-800 rounded-lg focus:border-[#c45c26] outline-none transition-colors text-[#f5f0e8] resize-none" />
              <button type="submit" className="btn-glow w-full bg-[#c45c26] hover:bg-[#d46a34] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all">
                Pošaljite Upit
              </button>
            </form>
            <div className="reveal">
              <div className="space-y-8">
                {[
                  { icon: '📍', title: 'Adresa', value: 'Svetih Arhanđela 9, 21203 Veternik' },
                  { icon: '📞', title: 'Telefon', value: '063/7725-026 · 064/1242-469', href: 'tel:+381637725026' },
                  { icon: '🕐', title: 'Radno vreme', value: 'Pon-Pet: 08-17h · Sub: 08-13h' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-[#f5f0e8]">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-zinc-400 hover:text-[#c45c26] transition-colors">{item.value}</a>
                      ) : (
                        <p className="text-zinc-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <a href="tel:+381637725026" className="flex-1 btn-glow bg-[#c45c26] hover:bg-[#d46a34] text-white px-6 py-4 rounded-lg font-semibold text-center transition-all">
                  📞 Pozovite
                </a>
                <a href="https://wa.me/381637725026" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all">
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] text-center">
        <div className="max-w-2xl mx-auto px-6 reveal">
          <h2 className="font-display text-4xl sm:text-5xl text-[#f5f0e8] mb-4">IMATE PROBLEM SA TURBINOM?</h2>
          <p className="text-zinc-500 mb-8">Pozovite nas za besplatnu procenu i stručan savet</p>
          <a href="tel:+381637725026" className="btn-glow inline-block bg-[#c45c26] hover:bg-[#d46a34] text-white px-12 py-5 rounded-lg font-display text-2xl transition-all">
            063/7725-026
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-zinc-900 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="font-display text-3xl text-[#c45c26] mb-2">TURBO SERVIS</div>
          <p className="text-zinc-600 text-sm">Stručan remont turbo kompresora u Novom Sadu</p>
          <div className="divider my-6" />
          <p className="text-zinc-700 text-sm">© 2026 Turbo Servis Novi Sad. Sva prava zadržana.</p>
        </div>
      </footer>
    </>
  )
}
