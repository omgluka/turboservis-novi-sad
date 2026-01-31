// Turbo Servis Logo Components
// Based on original business card, modernized for web

interface LogoProps {
  className?: string
  variant?: 'full' | 'icon' | 'wordmark'
  color?: 'light' | 'dark' | 'rust'
}

// Main Badge Logo
export function Logo({ className = '', variant = 'full', color = 'light' }: LogoProps) {
  const colors = {
    light: { primary: '#f5f0e8', accent: '#c45c26', secondary: '#374151' },
    dark: { primary: '#0f172a', accent: '#c45c26', secondary: '#64748b' },
    rust: { primary: '#c45c26', accent: '#f5f0e8', secondary: '#0f172a' },
  }
  const c = colors[color]

  if (variant === 'icon') {
    return <TurboIcon className={className} color={c.accent} />
  }

  if (variant === 'wordmark') {
    return (
      <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="30" fontFamily="Bebas Neue, sans-serif" fontSize="32" fill={c.primary} letterSpacing="2">
          TURBO
        </text>
        <text x="85" y="30" fontFamily="Bebas Neue, sans-serif" fontSize="32" fill={c.accent} letterSpacing="2">
          SERVIS
        </text>
      </svg>
    )
  }

  // Full badge logo
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="95" stroke={c.accent} strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="85" stroke={c.secondary} strokeWidth="1" fill="none" opacity="0.3" />
      
      {/* Inner badge shape */}
      <path 
        d="M100 25 L165 55 L165 145 L100 175 L35 145 L35 55 Z" 
        fill={c.accent} 
        opacity="0.1"
      />
      <path 
        d="M100 25 L165 55 L165 145 L100 175 L35 145 L35 55 Z" 
        stroke={c.accent} 
        strokeWidth="2" 
        fill="none"
      />

      {/* Turbo icon in center */}
      <g transform="translate(70, 60)">
        <TurboIconPath color={c.primary} />
      </g>

      {/* Text */}
      <text 
        x="100" 
        y="145" 
        textAnchor="middle" 
        fontFamily="Bebas Neue, sans-serif" 
        fontSize="24" 
        fill={c.primary}
        letterSpacing="4"
      >
        TURBO
      </text>
      <text 
        x="100" 
        y="165" 
        textAnchor="middle" 
        fontFamily="Bebas Neue, sans-serif" 
        fontSize="18" 
        fill={c.accent}
        letterSpacing="3"
      >
        SERVIS
      </text>

      {/* Decorative elements */}
      <line x1="60" y1="125" x2="140" y2="125" stroke={c.accent} strokeWidth="1" />
      
      {/* Est year */}
      <text 
        x="100" 
        y="185" 
        textAnchor="middle" 
        fontFamily="Inter, sans-serif" 
        fontSize="8" 
        fill={c.secondary}
        letterSpacing="2"
      >
        EST. 2014 • NOVI SAD
      </text>
    </svg>
  )
}

// Standalone Turbo Icon
export function TurboIcon({ className = '', color = '#c45c26' }: { className?: string, color?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <TurboIconPath color={color} />
    </svg>
  )
}

// Turbo icon path (reusable)
function TurboIconPath({ color }: { color: string }) {
  return (
    <g>
      {/* Outer housing */}
      <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="2" fill="none" />
      
      {/* Compressor wheel (front) */}
      <circle cx="30" cy="30" r="18" stroke={color} strokeWidth="1.5" fill="none" />
      
      {/* Blades */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="30"
          y1="30"
          x2={30 + 16 * Math.cos((angle * Math.PI) / 180)}
          y2={30 + 16 * Math.sin((angle * Math.PI) / 180)}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}
      
      {/* Center hub */}
      <circle cx="30" cy="30" r="6" fill={color} />
      <circle cx="30" cy="30" r="3" fill="#0a0a0a" />
      
      {/* Inlet arrow */}
      <path d="M30 2 L34 8 L30 6 L26 8 Z" fill={color} />
    </g>
  )
}

// Animated spinning turbo (for loading states)
export function SpinningTurbo({ className = '', color = '#c45c26' }: { className?: string, color?: string }) {
  return (
    <svg className={`${className} animate-spin`} style={{ animationDuration: '2s' }} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring (stationary feel) */}
      <circle cx="30" cy="30" r="28" stroke={color} strokeWidth="2" fill="none" opacity="0.3" />
      
      {/* Spinning blades */}
      <g style={{ transformOrigin: '30px 30px' }}>
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <path
            key={i}
            d={`M30 30 Q ${30 + 10 * Math.cos(((angle + 30) * Math.PI) / 180)} ${30 + 10 * Math.sin(((angle + 30) * Math.PI) / 180)} ${30 + 20 * Math.cos((angle * Math.PI) / 180)} ${30 + 20 * Math.sin((angle * Math.PI) / 180)}`}
            stroke={color}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </g>
      
      {/* Center */}
      <circle cx="30" cy="30" r="5" fill={color} />
    </svg>
  )
}

export default Logo
