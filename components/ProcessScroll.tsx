'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ScanLine, Wrench, Gauge, CheckCircle2, AlertCircle, RotateCw } from 'lucide-react'

// Define the steps data structure
const steps = [
    {
        id: '01',
        label: 'Dijagnostika',
        title: 'Besplatan Pregled',
        description: 'Detaljna inspekcija i utvrđivanje kvara. Dobijate potpun izveštaj i fiksnu cenu pre bilo kakvog rada.',
        stats: [
            { label: 'Analiza', value: '100%', icon: ScanLine },
            { label: 'Cena', value: 'Besplatno', icon: AlertCircle },
            { label: 'Troškovi', value: 'Fiksni', icon: CheckCircle2 },
            { label: 'Ponuda', value: 'Odmah', icon: RotateCw }
        ],
        // Visual: Dirty / Damaged Turbo
        image: '/images/slide 1.webp'
    },
    {
        id: '02',
        label: 'Remont',
        title: 'Precizna Obrada',
        description: 'Mašinska obrada kućišta, zamena potrošnih delova i balansiranje rotora na VSR mašini.',
        stats: [
            { label: 'Obrtaji', value: '200k', icon: Gauge },
            { label: 'Delovi', value: 'Original', icon: Wrench },
            { label: 'Čistoća', value: '99.9%', icon: CheckCircle2 },
            { label: 'Balans', value: '0.01g', icon: RotateCw }
        ],
        // Visual: Disassembled / Parts
        image: '/images/slide 2.webp'
    },
    {
        id: '03',
        label: 'Finalizacija',
        title: 'Test & Garancija',
        description: 'Završno testiranje na probnom stolu i izdavanje pismene garancije od 12 meseci.',
        stats: [
            { label: 'Garancija', value: '12 Mes', icon: CheckCircle2 },
            { label: 'Kilometri', value: '∞', icon: RotateCw },
            { label: 'Podrška', value: '24/7', icon: AlertCircle },
            { label: 'Kvalitet', value: 'OEM', icon: ScanLine }
        ],
        // Visual: Assembled / Shiny
        image: '/images/slide 3.webp'
    }
]

export default function ProcessScroll() {
    const [activeStep, setActiveStep] = useState(0)
    const [progress, setProgress] = useState(0) // Track smooth progress 0-1
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return
            const { top, height } = containerRef.current.getBoundingClientRect()
            const viewportHeight = window.innerHeight

            // Calculate progress: 0 when top of section hits top of viewport, 1 when bottom hits bottom
            // Actual useful scroll distance is (containerHeight - viewportHeight)
            const scrollDistance = height - viewportHeight
            const scrolled = -top

            // Normalize to 0-1 range
            let rawProgress = scrolled / scrollDistance

            // Clamp
            const p = Math.max(0, Math.min(1, rawProgress))
            setProgress(p)

            // Determine active step based on progress thresholds
            // 3 steps = 2 intervals. Step 1 (0-0.5), Step 2 (0.5-0.8), Step 3 (0.8+)
            // Let's map it evenly logic wise: 
            // 0 - 0.33 -> Step 1
            // 0.33 - 0.66 -> Step 2
            // 0.66 - 1.0 -> Step 3
            // Adjusted triggers for better feel
            const index = Math.floor(p * steps.length)
            const boundedIndex = Math.max(0, Math.min(index, steps.length - 1))
            setActiveStep(boundedIndex)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        // Height: Sufficient for scroll
        <section ref={containerRef} className="relative h-[300vh] border-t border-black/5">

            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-[#f0f0f0]">

                {/* INFO PANEL (Stats & Titles) */}
                <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-20 z-10 relative bg-[#f0f0f0] border-b lg:border-r lg:border-b-0 border-black/5">

                    {/* Vertical Progress Line (Left on mobile, Right on desktop) */}
                    <div className="absolute left-6 sm:left-12 lg:left-auto lg:right-[-4px] top-1/2 -translate-y-1/2 h-[50%] w-8 lg:w-10 z-20">
                        {/* The "Groove" (Track) */}
                        <div className="absolute inset-0 rounded-full neumorphic-pressed overflow-hidden">
                            {/* Red Fill Line */}
                            <div
                                className="absolute top-0 left-0 w-full bg-[#d00000] transition-all duration-100 ease-linear shadow-[0_0_20px_rgba(208,0,0,0.6)] rounded-full"
                                style={{
                                    height: `${progress * 100}%`
                                }}
                            />
                        </div>

                        {/* Centered Dots for Steps (Outside the clipping groove) */}
                        <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between items-center z-30">
                            {steps.map((_, i) => {
                                // Determine if dot should be active (red)
                                const dotPosition = i / (steps.length - 1)
                                const isActive = progress >= dotPosition - 0.05

                                return (
                                    <div
                                        key={i}
                                        className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full transition-all duration-500 flex items-center justify-center relative translate-x-0
                                            ${isActive
                                                ? 'bg-[#d00000] border-4 border-[#f0f0f0] scale-110 shadow-[0_0_15px_rgba(208,0,0,0.4)]'
                                                : 'bg-[#f0f0f0] border-2 border-black/5 neumorphic-flat shadow-sm'
                                            }`}
                                    >
                                        <span className={`text-xs lg:text-sm font-black transition-colors duration-500 ${isActive ? 'text-white' : 'text-black/20'}`}>
                                            {i + 1}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="space-y-6 lg:space-y-10 relative z-10 text-left lg:text-right pl-8 lg:pl-0 lg:pr-4 xl:pr-6">
                        {/* Step Indicator */}
                        <div className="flex items-center justify-start lg:justify-end gap-4 lg:gap-6 mb-2 lg:mb-4">
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#d00000] bg-[#f0f0f0] neumorphic-pressed px-4 py-2 rounded-full">
                                {steps[activeStep].label}
                            </span>
                            <span className="text-6xl lg:text-7xl font-black tracking-tighter text-black/10 select-none">
                                {steps[activeStep].id}
                            </span>
                        </div>

                        {/* Main Title & Description (Fade Transition) */}
                        <div className="relative min-h-[220px] lg:min-h-[280px]">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-500 flex flex-col items-start lg:items-end ${activeStep === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                                >
                                    <h2 className="text-3xl lg:text-5xl font-bold leading-[1.0] lg:leading-[1.1] mb-4 lg:mb-6 text-black uppercase">
                                        {step.title}
                                    </h2>
                                    <p className="text-base lg:text-lg text-black/60 font-medium leading-relaxed mb-6 lg:mb-10 max-w-sm lg:max-w-md">
                                        {step.description}
                                    </p>

                                    {/* Fast Scan Stats */}
                                    <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full max-w-sm lg:max-w-md">
                                        {step.stats.map((stat, i) => (
                                            <div key={i} className="flex items-center justify-start lg:justify-end gap-3 lg:gap-4 p-3.5 lg:p-5 rounded-2xl neumorphic-flat hover:translate-x-[-4px] transition-all cursor-default w-full">
                                                <div className="order-2 lg:order-1 flex flex-col items-start lg:items-end">
                                                    <div className="text-[9px] lg:text-[10px] uppercase font-black tracking-wider text-black/30 mb-0.5">{stat.label}</div>
                                                    <div className="text-lg lg:text-xl font-black tracking-tight text-black">{stat.value}</div>
                                                </div>
                                                <div className="w-10 h-10 lg:w-12 lg:h-12 order-1 lg:order-2 rounded-xl neumorphic-pressed flex items-center justify-center text-[#d00000] shrink-0">
                                                    <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={2.5} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Interactive Visual (50% Width) */}
                <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen relative overflow-hidden flex items-center justify-center lg:justify-start px-6 lg:px-0 bg-[#f0f0f0]">

                    {/* Image Container */}
                    <div className="relative w-[90%] lg:w-full max-w-xl lg:max-w-2xl aspect-square transition-transform duration-700">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeStep === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    className="object-contain object-left drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Bottom Tech Label - REMOVED AS REQUESTED */}
                    {/* <div className="absolute bottom-12 left-12">
                        <div className="text-[10px] font-black text-black/20 mb-2 tracking-widest">MODEL R.</div>
                        <div className="text-xl font-swiss font-black tracking-widest neumorphic-pressed px-6 py-3 rounded-xl text-black">GTB2260VZK</div>
                    </div> */}

                </div>

            </div>
        </section>
    )
}
