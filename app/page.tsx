'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#1a1f2e] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-light tracking-wider">turbo servis</span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#usluge" className="text-sm text-white/60 hover:text-white transition-colors">Usluge</a>
            <a href="#proces" className="text-sm text-white/60 hover:text-white transition-colors">Proces</a>
            <a href="#kontakt" className="text-sm text-white/60 hover:text-white transition-colors">Kontakt</a>
          </div>

          {/* CTA */}
          <a 
            href="tel:+381631234567"
            className="hidden md:flex items-center gap-2 text-sm border border-white/20 rounded-full px-5 py-2 hover:bg-white/10 transition-colors"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Pozovite nas
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background brand text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 
            className="text-[20vw] font-bold tracking-tighter text-white/[0.03] leading-none"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            TURBO
          </h1>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-24">
          
          {/* Left: Product Image */}
          <div className="relative flex items-center justify-center">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-3xl" />
            
            {/* Product image placeholder - replace with actual turbo */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder turbo visualization */}
                <div className="relative w-80 h-80">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/20" />
                  <div className="absolute inset-12 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">🔧</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Small label */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-xs text-white/50 uppercase tracking-widest">Novi Sad, Srbija</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Remont i servis
                <br />
                <span className="text-white/40">turbopunjača</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-white/50 text-lg max-w-md leading-relaxed">
              Stručna dijagnostika, profesionalni remont i balansiranje turbopunjača za sve tipove vozila. 
              Preko 15 godina iskustva.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 py-4">
              <div>
                <div className="text-3xl font-light">15+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Godina iskustva</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-light">5000+</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Servisa</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <div className="text-3xl font-light">2god</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">Garancija</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-4">
              <a 
                href="tel:+381631234567"
                className="inline-flex items-center gap-3 bg-white text-[#1a1f2e] px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                Zakažite termin
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-sm text-white/40">ili pozovite: 063 123 4567</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Services Section - Minimal preview */}
      <section id="usluge" className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Dijagnostika', desc: 'Precizna dijagnostika kvara pomoću najnovije opreme' },
              { title: 'Remont', desc: 'Kompletan remont sa originalnim delovima' },
              { title: 'Balansiranje', desc: 'Profesionalno balansiranje do 200.000 o/min' },
            ].map((service, i) => (
              <div key={i} className="group p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                <div className="text-sm text-white/30 mb-4">0{i + 1}</div>
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-sm text-white/50">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Kontaktirajte nas</h2>
          <p className="text-white/50 mb-12 max-w-xl mx-auto">
            Slobodno nas pozovite za besplatnu procenu ili zakažite termin za dijagnostiku.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a 
              href="tel:+381631234567"
              className="flex items-center gap-3 text-2xl font-light hover:text-white/80 transition-colors"
            >
              <span className="w-3 h-3 bg-green-400 rounded-full" />
              063 123 4567
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/50">Novi Sad, Srbija</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm text-white/30">
          <span>© 2024 Turbo Servis Novi Sad</span>
          <span>Sva prava zadržana</span>
        </div>
      </footer>
    </main>
  );
}
