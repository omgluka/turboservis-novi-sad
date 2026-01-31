'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SpinningTurbo } from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#usluge', label: 'Usluge' },
    { href: '#o-nama', label: 'O Nama' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-zinc-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <SpinningTurbo className="w-10 h-10 group-hover:opacity-100 opacity-80 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-xl text-[#f5f0e8] tracking-wider">TURBO SERVIS</div>
              <div className="text-xs text-zinc-500 tracking-widest">NOVI SAD</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-[#c45c26] transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+381637725026"
              className="bg-[#c45c26] hover:bg-[#d46a34] text-white px-5 py-2.5 rounded font-semibold transition-all"
            >
              Pozovite Nas
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-[#c45c26]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-[#c45c26] transition-colors font-medium py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+381637725026"
                className="bg-[#c45c26] hover:bg-[#d46a34] text-white px-5 py-3 rounded font-semibold text-center transition-all"
              >
                📞 Pozovite Nas
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
