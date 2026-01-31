'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c2230] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-base tracking-wider font-light">
            turbo servis<span className="text-white/40">.</span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#usluge" className="text-sm text-white/50 hover:text-white transition-colors">Usluge</a>
            <a href="#proces" className="text-sm text-white/50 hover:text-white transition-colors">Proces</a>
            <a href="#kontakt" className="text-sm text-white/50 hover:text-white transition-colors">Kontakt</a>
          </div>

          {/* Contact Icon */}
          <a 
            href="tel:+381631234567"
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background brand text - positioned left */}
        <div className="absolute left-[-5vw] top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <h1 className="text-[20vw] font-bold leading-[0.85] tracking-tighter text-white/[0.06]">
            Turbo
          </h1>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full h-full flex items-center max-w-7xl mx-auto px-8 lg:px-16">
          
          {/* Left Side - Product Image */}
          <div className="flex-1 relative flex items-center justify-center">
            {/* Turbo Image - contained size */}
            <div className="relative w-[500px] h-[500px]">
              <Image
                src="/images/turbo.png"
                alt="Turbocharger"
                fill
                className="object-contain"
                style={{ 
                  filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.4))',
                  transform: 'rotate(-10deg)'
                }}
                priority
              />
            </div>
            
            {/* Bottom left tagline */}
            <div className="absolute bottom-12 left-0 flex items-center gap-4">
              <div className="w-12 h-px bg-white/30" />
              <div className="text-sm text-white/40">
                <div>Profesionalni servis</div>
                <div>turbopunjača</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-[380px] flex-shrink-0">
            {/* Product Title */}
            <div className="mb-6">
              <h2 className="text-2xl font-normal mb-1">
                Remont turbopunjača
              </h2>
              <span className="text-white/40 text-sm">( profesionalni servis )</span>
            </div>

            {/* Description */}
            <p className="text-sm text-white/50 leading-relaxed mb-8">
              Stručna dijagnostika, remont i balansiranje turbopunjača za sve tipove vozila. 
              Koristimo originalnu opremu i delove uz garanciju na sve radove.
              Preko 15 godina iskustva u industriji.
            </p>

            {/* Service dots */}
            <div className="flex items-center gap-2 mb-10">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
              <div className="w-2 h-2 rounded-full bg-white/30" />
            </div>

            {/* CTA Button */}
            <a 
              href="tel:+381631234567"
              className="inline-flex items-center justify-center border border-white/30 rounded-full px-8 py-3 text-sm hover:bg-white hover:text-[#1c2230] transition-all duration-300"
            >
              Zakažite termin
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="usluge" className="py-32 px-8 lg:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm text-white/40 uppercase tracking-widest">Usluge</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', title: 'Dijagnostika', desc: 'Precizna dijagnostika kvara pomoću najnovije opreme i alata' },
              { num: '02', title: 'Remont', desc: 'Kompletan remont sa originalnim ili OEM delovima' },
              { num: '03', title: 'Balansiranje', desc: 'Profesionalno balansiranje do 200.000 obrtaja u minuti' },
            ].map((service) => (
              <div key={service.num} className="group">
                <div className="text-sm text-white/20 mb-4">{service.num}</div>
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-8 lg:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div>
            <span className="text-sm text-white/40 uppercase tracking-widest block mb-6">Kontakt</span>
            <h2 className="text-4xl font-light mb-4">Pozovite nas</h2>
            <p className="text-white/40 max-w-md">
              Besplatna procena i savet. Radimo sa svim tipovima vozila.
            </p>
          </div>
          <div className="text-right">
            <a 
              href="tel:+381631234567"
              className="text-3xl font-light hover:text-white/70 transition-colors block mb-2"
            >
              063 123 4567
            </a>
            <span className="text-white/40 text-sm">Novi Sad, Srbija</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 lg:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs text-white/30">
          <span>© 2024 Turbo Servis</span>
          <span>Novi Sad</span>
        </div>
      </footer>
    </main>
  );
}
