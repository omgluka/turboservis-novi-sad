'use client'

import { useState } from 'react'

export default function ContactForm() {
    const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE')
    const [errorDetail, setErrorDetail] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        const form = e.currentTarget
        e.preventDefault()
        setStatus('SUBMITTING')
        setErrorDetail(null)

        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        try {
            const response = await fetch('https://formspree.io/f/mgolodzw', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (response.ok) {
                form.reset()
                setStatus('SUCCESS')
            } else {
                const result = await response.json().catch(() => ({}))
                const message = result.error || (result.errors && result.errors[0]?.message) || `Greška ${response.status}`
                console.error('Formspree returned an error:', result)
                setErrorDetail(message)
                setStatus('ERROR')
            }
        } catch (error: any) {
            console.error('Submission error:', error)
            setErrorDetail(error.message || 'Problem sa internet konekcijom')
            setStatus('ERROR')
        }
    }

    return (
        <div className="neumorphic-flat p-8 lg:p-12 flex flex-col justify-center">
            {status === 'SUCCESS' ? (
                <div className="text-center py-12 animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 neumorphic-pressed">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase tracking-tight">Uspešno poslato!</h3>
                    <p className="text-black/60 font-medium mb-0">Hvala na poverenju. Javićemo vam se u najkraćem mogućem roku.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-wider ml-4 text-black/30">Vaše Ime</label>
                        <input
                            type="text"
                            name="name"
                            required
                            disabled={status === 'SUBMITTING'}
                            className="w-full bg-[#f0f0f0] neumorphic-pressed rounded-2xl py-5 px-8 text-black font-black focus:outline-none transition-all placeholder:text-black/10 border-none disabled:opacity-50"
                            placeholder="Upišite ime"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-wider ml-4 text-black/30">Broj Telefona</label>
                        <input
                            type="tel"
                            name="phone"
                            required
                            disabled={status === 'SUBMITTING'}
                            className="w-full bg-[#f0f0f0] neumorphic-pressed rounded-2xl py-5 px-8 text-black font-black focus:outline-none transition-all placeholder:text-black/10 border-none disabled:opacity-50"
                            placeholder="06..."
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-wider ml-4 text-black/30">Email Adresa</label>
                        <input
                            type="email"
                            name="email"
                            required
                            disabled={status === 'SUBMITTING'}
                            className="w-full bg-[#f0f0f0] neumorphic-pressed rounded-2xl py-5 px-8 text-black font-black focus:outline-none transition-all placeholder:text-black/10 border-none disabled:opacity-50"
                            placeholder="vas@email.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-wider ml-4 text-black/30">Poruka</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            disabled={status === 'SUBMITTING'}
                            className="w-full bg-[#f0f0f0] neumorphic-pressed rounded-2xl py-5 px-8 text-black font-black focus:outline-none transition-all resize-none placeholder:text-black/10 border-none disabled:opacity-50"
                            placeholder="Opišite problem..."
                        />
                    </div>

                    {status === 'ERROR' && (
                        <p className="text-[#d00000] text-xs font-black uppercase tracking-wider ml-4 animate-shake">
                            Došlo je do greške. Molimo pokušajte ponovo ili nas pozovite.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'SUBMITTING'}
                        className="w-full neumorphic-button-red text-white py-6 rounded-2xl text-sm font-black tracking-widest uppercase transform-gpu transition-all mt-6 shadow-[8px_8px_16px_rgba(208,0,0,0.3),-8px_-8px_16px_#ffffff] disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                        <span className={status === 'SUBMITTING' ? 'opacity-0' : 'opacity-100'}>
                            Pošalji Upit
                        </span>
                        {status === 'SUBMITTING' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                            </div>
                        )}
                    </button>
                </form>
            )}
        </div>
    )
}
