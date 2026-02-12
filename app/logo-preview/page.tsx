import { LogoOption1, LogoOption2, LogoOption3 } from '@/components/LogoOptions'

export default function LogoPreview() {
    return (
        <div className="min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-swiss font-bold mb-12 text-center">Logo Redesign Options</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <LogoOption1 />
                    <LogoOption2 />
                    <LogoOption3 />
                </div>
                <div className="mt-12 text-center p-8 bg-white rounded-lg border border-red-100">
                    <p className="mb-4 text-sm text-gray-600">Based on reference card:</p>
                    <div className="inline-block p-4 border border-gray-200 bg-gray-50 rounded">
                        <span className="font-bold">Original:</span> REMONT TNS (Blue Box) + Turbo Servis (Red)
                    </div>
                </div>
            </div>
        </div>
    )
}
