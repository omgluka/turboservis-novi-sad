export const LogoOption1 = () => (
    <div className="flex flex-col items-center justify-center p-12 bg-white border border-gray-100 shadow-sm">
        <div className="text-center">
            <h1 className="font-swiss text-5xl font-bold tracking-tighter text-black mb-1">TNS</h1>
            <p className="font-swiss text-xs font-semibold tracking-[0.4em] uppercase text-black">Turbo Servis</p>
        </div>
        <p className="mt-8 text-xs text-gray-400 font-mono">Option 1: Swiss Typographic</p>
    </div>
)

export const LogoOption2 = () => (
    <div className="flex flex-col items-center justify-center p-12 bg-white border border-gray-100 shadow-sm">
        <div className="relative">
            {/* Diamond Shape */}
            <div className="w-48 h-16 bg-black transform -skew-x-12 flex items-center justify-center">
                <span className="font-swiss text-3xl font-bold text-white transform skew-x-12 tracking-tight">REMONT TNS</span>
            </div>
            <p className="mt-4 text-center font-swiss text-xs font-bold tracking-widest text-red-600 uppercase italic">Turbo Servis</p>
        </div>
        <p className="mt-8 text-xs text-gray-400 font-mono">Option 2: Geometric Reference</p>
    </div>
)

export const LogoOption3 = () => (
    <div className="flex flex-col items-center justify-center p-12 bg-white border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
            {/* Abstract Turbine Icon */}
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="23" stroke="black" strokeWidth="4" />
                <path d="M25 10V25L35 35" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <path d="M25 25L15 35" stroke="black" strokeWidth="3" strokeLinecap="round" />
                <circle cx="25" cy="25" r="4" fill="black" />
            </svg>
            <div className="flex flex-col">
                <span className="font-swiss text-2xl font-bold tracking-tight leading-none text-black">TURBO</span>
                <span className="font-swiss text-2xl font-light tracking-tight leading-none text-black">TNS</span>
            </div>
        </div>
        <p className="mt-8 text-xs text-gray-400 font-mono">Option 3: Modern Icon</p>
    </div>
)
