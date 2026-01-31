'use client'

import { useEffect, useState } from 'react'

// Animated Exploded Turbo View
export function ExplodedTurbo({ className = '' }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const parts = [
    { id: 'compressor', name: 'Kompresorsko Kolo', x: -120, delay: 0, desc: 'Usisava i komprimuje vazduh' },
    { id: 'housing', name: 'Kućište Kompresora', x: -60, delay: 100, desc: 'Aluminijumsko kućište' },
    { id: 'bearing', name: 'Ležajevi', x: 0, delay: 200, desc: 'Centralni sklop sa ležajevima' },
    { id: 'turbine-housing', name: 'Kućište Turbine', x: 60, delay: 300, desc: 'Liveno gvožđe, otporno na toplotu' },
    { id: 'turbine', name: 'Turbinsko Kolo', x: 120, delay: 400, desc: 'Pokreće se izduvnim gasovima' },
  ]

  return (
    <div className={`relative ${className}`}>
      {/* SVG Exploded View */}
      <svg viewBox="-200 -100 400 200" className="w-full h-auto">
        <defs>
          {/* Gradient for metallic look */}
          <linearGradient id="metalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a4a4a" />
            <stop offset="50%" stopColor="#6a6a6a" />
            <stop offset="100%" stopColor="#3a3a3a" />
          </linearGradient>
          <linearGradient id="copperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c45c26" />
            <stop offset="50%" stopColor="#d4784a" />
            <stop offset="100%" stopColor="#a04820" />
          </linearGradient>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines */}
        <line x1="-100" y1="0" x2="100" y2="0" stroke="#c45c26" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />

        {/* Parts */}
        {parts.map((part, i) => (
          <g 
            key={part.id}
            className="cursor-pointer transition-all duration-500"
            style={{ 
              transform: isVisible ? `translateX(${part.x}px)` : 'translateX(0)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${part.delay}ms`
            }}
            onMouseEnter={() => setHoveredPart(part.id)}
            onMouseLeave={() => setHoveredPart(null)}
          >
            {/* Part shape based on type */}
            {part.id === 'compressor' && (
              <g filter={hoveredPart === part.id ? 'url(#glow)' : undefined}>
                <circle cx="0" cy="0" r="35" fill="url(#metalGradient)" stroke={hoveredPart === part.id ? '#c45c26' : '#555'} strokeWidth="2" />
                {/* Blade pattern */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="0" y1="0"
                    x2={25 * Math.cos((angle * Math.PI) / 180)}
                    y2={25 * Math.sin((angle * Math.PI) / 180)}
                    stroke="#888"
                    strokeWidth="3"
                  />
                ))}
                <circle cx="0" cy="0" r="8" fill="#333" />
              </g>
            )}
            {part.id === 'housing' && (
              <g filter={hoveredPart === part.id ? 'url(#glow)' : undefined}>
                <ellipse cx="0" cy="0" rx="30" ry="40" fill="url(#metalGradient)" stroke={hoveredPart === part.id ? '#c45c26' : '#555'} strokeWidth="2" />
                <ellipse cx="0" cy="0" rx="20" ry="28" fill="#222" />
              </g>
            )}
            {part.id === 'bearing' && (
              <g filter={hoveredPart === part.id ? 'url(#glow)' : undefined}>
                <rect x="-20" y="-30" width="40" height="60" rx="5" fill="url(#copperGradient)" stroke={hoveredPart === part.id ? '#fff' : '#c45c26'} strokeWidth="2" />
                <circle cx="0" cy="-15" r="8" fill="#333" stroke="#666" />
                <circle cx="0" cy="15" r="8" fill="#333" stroke="#666" />
                <rect x="-15" y="-5" width="30" height="10" fill="#333" />
              </g>
            )}
            {part.id === 'turbine-housing' && (
              <g filter={hoveredPart === part.id ? 'url(#glow)' : undefined}>
                <ellipse cx="0" cy="0" rx="30" ry="40" fill="url(#metalGradient)" stroke={hoveredPart === part.id ? '#c45c26' : '#555'} strokeWidth="2" />
                <ellipse cx="0" cy="0" rx="20" ry="28" fill="#222" />
                <path d="M-25 -30 Q-40 0 -25 30" fill="none" stroke="#555" strokeWidth="3" />
              </g>
            )}
            {part.id === 'turbine' && (
              <g filter={hoveredPart === part.id ? 'url(#glow)' : undefined}>
                <circle cx="0" cy="0" r="35" fill="url(#metalGradient)" stroke={hoveredPart === part.id ? '#c45c26' : '#555'} strokeWidth="2" />
                {/* Turbine blade pattern */}
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
                  <path
                    key={angle}
                    d={`M0 0 Q ${15 * Math.cos(((angle + 15) * Math.PI) / 180)} ${15 * Math.sin(((angle + 15) * Math.PI) / 180)} ${28 * Math.cos((angle * Math.PI) / 180)} ${28 * Math.sin((angle * Math.PI) / 180)}`}
                    fill="none"
                    stroke="#888"
                    strokeWidth="2"
                  />
                ))}
                <circle cx="0" cy="0" r="8" fill="#333" />
              </g>
            )}

            {/* Label */}
            <text 
              x="0" 
              y="55" 
              textAnchor="middle" 
              className="text-[8px] fill-zinc-500 font-medium uppercase tracking-wider"
              style={{ opacity: hoveredPart === part.id ? 1 : 0.7 }}
            >
              {part.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Hover info panel */}
      {hoveredPart && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border border-zinc-800 rounded-lg px-4 py-2 text-center animate-fade-in">
          <p className="text-[#c45c26] font-display text-sm">{parts.find(p => p.id === hoveredPart)?.name}</p>
          <p className="text-zinc-500 text-xs mt-1">{parts.find(p => p.id === hoveredPart)?.desc}</p>
        </div>
      )}
    </div>
  )
}

// Technical Specs Component (light theme compatible)
export function TurboSpecs() {
  const specs = [
    { label: 'Kapacitet', value: 'Svi tipovi', icon: '⚙️' },
    { label: 'Garancija', value: '12 meseci', icon: '✓' },
    { label: 'Vreme remonta', value: '1-3 dana', icon: '⏱️' },
    { label: 'Brendovi', value: 'Garrett, Holset, IHI...', icon: '🏷️' },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {specs.map((spec, i) => (
        <div 
          key={i} 
          className="bg-[#1a1a1a] border border-zinc-800 rounded-xl p-6 text-center hover:border-[#c45c26] transition-all hover:scale-105 group"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{spec.icon}</div>
          <div className="text-[#c45c26] font-display text-xl">{spec.value}</div>
          <div className="text-zinc-500 text-xs uppercase tracking-wider mt-2">{spec.label}</div>
        </div>
      ))}
    </div>
  )
}

export default ExplodedTurbo
