'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#f0f0f0]/95 backdrop-blur-sm border-b border-[#000000]/5 py-4 opacity-100 pointer-events-auto' : 'bg-transparent py-0 h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
      <div className="max-w-[90rem] mx-auto px-6 flex items-center justify-between relative">
        {/* Logo - Left aligned */}
        <Link
          href="/"
          className={`hover:opacity-90 transition-all duration-500 transform-gpu ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}
        >
          <Logo className="w-20 md:w-24" />
        </Link>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex items-center gap-8 md:gap-12 transition-all duration-500 transform-gpu ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
          <nav className="flex items-center gap-8 md:gap-12">
            <Link href="#usluge" className="text-sm font-black transition-colors uppercase tracking-[0.2em] text-black/60 hover:text-black">
              Usluge
            </Link>
            <Link href="#kontakt" className="text-sm font-black transition-colors uppercase tracking-[0.2em] text-black/60 hover:text-black">
              Kontakt
            </Link>
          </nav>
          <a href="tel:+381637725026" className="text-sm font-black transition-colors text-black hover:text-[#d00000]">
            063 772 5026
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          className="md:hidden p-2 text-black transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Dropdown */}
        <div className={`absolute top-full left-0 right-0 bg-[#f0f0f0]/95 backdrop-blur-md border-b border-black/5 p-8 transition-all duration-300 md:hidden flex flex-col items-center gap-8 shadow-2xl ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <Link
            href="#usluge"
            className="text-lg font-black uppercase tracking-[0.2em] text-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Usluge
          </Link>
          <Link
            href="#kontakt"
            className="text-lg font-black uppercase tracking-[0.2em] text-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontakt
          </Link>
          <a
            href="tel:+381637725026"
            className="text-xl font-black text-[#d00000]"
          >
            063 772 5026
          </a>
        </div>
      </div>
    </header>
  )
}
