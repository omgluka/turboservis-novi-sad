import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/Logo'
import ProcessScroll from '@/components/ProcessScroll'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoRepair',
            name: 'Turbo Servis Novi Sad',
            image: 'https://turboservis-novisad.rs/turbo.png', // Placeholder URL
            description: 'Profesionalni servis i remont turbo kompresora u Novom Sadu.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Svetih Arhanđela 9',
              addressLocality: 'Veternik',
              addressRegion: 'Novi Sad',
              postalCode: '21203',
              addressCountry: 'RS'
            },
            telephone: '+381637725026',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '17:00'
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '08:00',
                closes: '13:00'
              }
            ]
          })
        }}
      />

      <main className="min-h-screen">
        {/* ==================== HERO MINIMAL ==================== */}
        <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">

          <div className="max-w-[80rem] w-full grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">

            {/* Left: Typography */}
            <div className="relative z-10 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-8 lg:pt-0 lg:-mt-[160px]">
              {/* Massive Logo Landing (3x Mobile, 5x Desktop) */}
              <div className="w-full flex justify-center lg:justify-start mb-6 lg:mb-12 transform-gpu hover:scale-105 transition-transform duration-500">
                <Logo className="w-[110px] sm:w-[195px] lg:w-[235px] xl:w-[294px]" />
              </div>

              <div className="flex items-center gap-3 py-2 px-6 bg-black/5 neumorphic-pressed rounded-full mb-6 lg:mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black tracking-widest uppercase text-black/40">
                  Novi Sad, Veternik
                </span>
              </div>
              <h1 className="font-swiss text-4xl sm:text-6xl lg:text-[5rem] xl:text-[6.8rem] leading-[0.9] tracking-tight mb-6 lg:mb-8 text-black font-black uppercase">
                TURBO SERVIS<br />
                <span className="text-[#d00000]">NOVI SAD</span>
              </h1>
              <p className="max-w-md text-lg lg:text-xl text-black/60 leading-relaxed font-medium mb-8 lg:mb-10">
                Profesionalna dijagnostika i remont turbo kompresora za sva vozila.
                <span className="block text-[#d00000] mt-2 font-bold uppercase tracking-wider text-sm">Garancija 12 meseci.</span>
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
                <Link
                  href="#kontakt"
                  className="px-8 lg:px-10 py-4 lg:py-5 neumorphic-button-red text-white rounded-2xl text-xs lg:text-sm font-black tracking-widest uppercase transform-gpu transition-all shadow-[8px_8px_16px_rgba(208,0,0,0.3),-8px_-8px_16px_#ffffff]"
                >
                  Zakažite Pregled
                </Link>
                <Link
                  href="tel:+381637725026"
                  className="px-8 lg:px-10 py-4 lg:py-5 neumorphic-button text-black rounded-2xl text-xs lg:text-sm font-black tracking-widest uppercase transform-gpu transition-all"
                >
                  063 772 5026
                </Link>
              </div>
            </div>

            {/* Right: Clean Visual - MASSIVE */}
            <div className="flex items-center justify-center relative lg:scale-[1.2] xl:scale-[1.45] transition-transform duration-1000 ease-out z-0 w-[85%] sm:w-[80%] md:w-[70%] mx-auto lg:w-full max-h-[35vh] lg:max-h-none">
              <div className="relative w-full aspect-square lg:translate-x-12">
                <Image
                  src="/images/hero-turbo-3.webp"
                  alt="Visokokvalitetni turbo kompresor - remont i servis"
                  fill
                  className="object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.15)]"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== STATS FLOATING ==================== */}
        <section className="py-12 px-6">
          <div className="max-w-[80rem] mx-auto neumorphic-flat grid grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden border-none transition-all duration-500">
            {[
              { number: '10+', label: 'Godina Iskustva' },
              { number: '1-3', label: 'Dana Rok Izrade' },
              { number: '12', label: 'Meseci Garancije' },
              { number: '100%', label: 'Originalni Delovi' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-10 text-center transition-colors hover:bg-black/[0.02] border-black/5
                  ${i < 3 ? 'md:border-r' : ''} 
                  ${i % 2 === 0 ? 'border-r md:border-r-none' : ''}
                  ${i < 2 ? 'border-b md:border-b-0' : ''}
                `}
              >
                <div className="text-4xl lg:text-5xl font-swiss font-black text-black mb-2 tracking-tighter">
                  {stat.number}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================== STATS BANNER ==================== */}
        <section className="p-0 m-0">
          <div className="w-full relative h-[300px] sm:h-[400px] lg:h-[700px] overflow-hidden">
            <Image
              src="/images/segment-2-vehicles.webp"
              alt="Servis turbina za automobile, kombi vozila i kamione"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* ==================== SERVICES GLASS ==================== */}
        <section id="usluge" className="py-20 px-6">
          <div className="max-w-[80rem] mx-auto">
            <div className="grid md:grid-cols-3 gap-6">

              {/* Intro Cell - Clean Neumorphic */}
              <div className="neumorphic-flat p-10 md:p-12 flex flex-col justify-center items-center md:items-start text-center md:text-left border-none">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase text-black leading-tight">
                  Šta<br className="hidden md:block" /> Radimo
                </h2>
                <p className="text-black/60 text-lg leading-relaxed font-medium">
                  Pružamo kompletan servis turbo kompresora — od dijagnostike do potpunog remonta.
                </p>
              </div>

              {/* Service Cells - Clean Neumorphic */}
              {[
                {
                  title: 'Putnički Program',
                  desc: 'Kompletan servis i remont turbina za sva putnička i laka komercijalna vozila (automobili, kombi vozila).',
                  features: ['Precizno balansiranje', 'Originalni setovi delova', 'Brza isporuka'],
                  tag: 'Najtraženije'
                },
                {
                  title: 'Teretni Program',
                  desc: 'Specijalizovan servis turbokompresora za kamione, autobuse i teška transportna vozila.',
                  features: ['Vrhunska izdržljivost', 'Garancija na rad', 'Sva renomirana imena'],
                  tag: 'Heavy Duty'
                }
              ].map((service, i) => (
                <div key={i} className="neumorphic-flat p-10 flex flex-col justify-start items-center text-center md:items-start md:text-left group cursor-default transition-transform duration-300 hover:-translate-y-1 border-none">
                  <div className="w-full">
                    <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                      <span className="w-2.5 h-2.5 bg-[#d00000] rounded-full shadow-[0_0_10px_rgba(208,0,0,0.5)]" />
                      <span className="text-[10px] font-black tracking-[0.2em] text-black/30 uppercase">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-4 text-black group-hover:text-[#d00000] transition-colors uppercase">
                      {service.title}
                    </h3>
                    <p className="text-black/60 font-medium leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 flex flex-col items-center md:items-start">
                      {service.features.map((feature, f) => (
                        <li key={f} className="text-xs font-black text-black/40 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-black/10 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROCESS SECTION ==================== */}
        <section className="pt-20 pb-0 px-6">
          <div className="max-w-[80rem] mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-4 text-black uppercase">
              Kako izgleda <span className="text-[#d00000]">proces:</span>
            </h2>
          </div>
        </section>
        <ProcessScroll />

        {/* ==================== FAQ SECTION ==================== */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 text-black uppercase">Česta Pitanja</h2>
              <p className="text-black/40 text-lg font-medium">Odgovori na najčešća pitanja klijenta.</p>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Koliko traje remont turbine?', a: 'Standardni remont traje 1-3 radna dana. Za hitne slučajeve nudimo ubrzanu uslugu istog ili sledećeg dana.' },
                { q: 'Da li dajete garanciju na remont?', a: 'Da, na sve radove i ugrađene delove dajemo garanciju od 12 meseci bez ograničenja kilometraže.' },
                { q: 'Koje brendove turbina servisirate?', a: 'Radimo sa svim brendovima: Garrett, BorgWarner, Holset, IHI, Mitsubishi, KKK, i drugima.' },
                { q: 'Kako da znam da mi turbina treba remont?', a: 'Najčešći znaci: gubitak snage motora, crni ili plavi dim, zviždanje ili neobičan zvuk, povećana potrošnja ulja.' },
                { q: 'Da li radite sa teretnim vozilima?', a: 'Da, servisiramo turbo kompresore za sva vozila — putnička, teretna, autobuse, radne mašine i poljoprivrednu mehanizaciju.' }
              ].map((faq, i) => (
                <div key={i} className="neumorphic-flat p-6 lg:p-8 group transition-all duration-300 text-center md:text-left">
                  <h3 className="text-xl font-black mb-3 text-black group-hover:text-[#d00000] transition-colors">{faq.q}</h3>
                  <p className="text-black/60 font-medium leading-relaxed text-sm md:text-base">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CONTACT GLASS ==================== */}
        <section id="kontakt" className="py-16 px-6">
          <div className="max-w-[80rem] mx-auto grid lg:grid-cols-2 gap-8">

            {/* Left: Info Card */}
            <div className="neumorphic-flat p-8 lg:p-12 flex flex-col justify-between">
              <div className="text-center lg:text-left">
                <span className="block text-xs font-black tracking-[0.2em] mb-8 uppercase text-[#d00000]">
                  Kontakt
                </span>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-12 text-black uppercase leading-tight">
                  Stupite u<br className="hidden lg:block" /> Kontakt
                </h2>

                <div className="space-y-6 lg:space-y-8 text-left">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Svetih+Arhanđela+9,+Veternik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-5 rounded-2xl neumorphic-pressed hover:scale-[1.02] transition-transform group cursor-pointer block"
                  >
                    <div className="w-14 h-14 rounded-2xl neumorphic-button bg-white flex items-center justify-center shadow-sm text-[#d00000] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/30 mb-1">Adresa</p>
                      <p className="font-black text-black">Svetih Arhanđela 9, Veternik</p>
                    </div>
                  </a>

                  <a
                    href="tel:+381637725026"
                    className="flex items-center gap-6 p-5 rounded-2xl neumorphic-pressed hover:scale-[1.02] transition-transform group cursor-pointer block"
                  >
                    <div className="w-14 h-14 rounded-2xl neumorphic-button bg-white flex items-center justify-center shadow-sm text-[#d00000] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/30 mb-1">Telefon</p>
                      <p className="font-black text-black">063 772 5026</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@turboservis.net"
                    className="flex items-center gap-6 p-5 rounded-2xl neumorphic-pressed hover:scale-[1.02] transition-transform group cursor-pointer block"
                  >
                    <div className="w-14 h-14 rounded-2xl neumorphic-button bg-white flex items-center justify-center shadow-sm text-[#d00000] group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/30 mb-1">Email</p>
                      <p className="font-black text-black">info@turboservis.net</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-6 p-5 rounded-2xl neumorphic-pressed">
                    <div className="w-14 h-14 rounded-2xl neumorphic-button bg-white flex items-center justify-center shadow-sm text-[#d00000]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-black/30 mb-1">Radno Vreme</p>
                      <div className="flex flex-col">
                        <p className="font-black text-black">Pon-Pet: 08-17h</p>
                        <p className="text-sm font-black text-black/30">Subota: 08-13h</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-3xl overflow-hidden shadow-sm h-[200px] neumorphic-pressed p-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.647190035071!2d19.7548819!3d45.2548819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11900a0d649d%3A0x6a1a1b0a0b0a0b0a!2sSvetih%20Arhan%C4%91ela%209%2C%20Veternik%2021203!5e0!3m2!1sen!2srs!4v1620000000000!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Form Card */}
            <ContactForm />
          </div>
        </section>

        {/* ==================== CTA SECTION ==================== */}
        <section className="py-16 lg:py-24 px-6 overflow-hidden">
          <div className="max-w-[85rem] mx-auto">
            <div className="relative neumorphic-flat px-8 md:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 border-none">

              {/* Left Content: Typography & Buttons */}
              <div className="w-full lg:w-3/5 relative z-10 text-center lg:text-left">
                <h2 className="text-5xl md:text-7xl font-black text-black leading-[1.0] tracking-tighter mb-8 uppercase">
                  PROBLEMI SA <br />
                  <span className="text-[#d00000]">TURBINOM?</span>
                </h2>

                {/* Mobile-only Turbo Image (Right under headline) */}
                <div className="lg:hidden w-full flex justify-center mb-10 overflow-visible h-48 sm:h-64 relative">
                  <div className="relative w-full max-w-[320px] aspect-square transform-gpu transition-all duration-1000 ease-out z-20">
                    <Image
                      src="/images/CTA.webp"
                      alt="Turbo Service Premium"
                      fill
                      className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                </div>

                <p className="text-xl text-black/60 font-medium mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Pozovite nas za <span className="text-black font-black">besplatnu dijagnostiku</span> i stručan savet. Ne čekajte da problem postane veći.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <Link
                    href="tel:+381637725026"
                    className="flex items-center gap-4 neumorphic-button-red text-white px-10 py-5 rounded-2xl transition-all shadow-[8px_8px_16px_rgba(208,0,0,0.3),-8px_-8px_16px_#ffffff] group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.21-2.21a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-wider opacity-60">Pozovite odmah</div>
                      <div className="text-xl font-black">063 772 5026</div>
                    </div>
                  </Link>

                  <Link
                    href="#kontakt"
                    className="flex items-center gap-4 neumorphic-button text-black px-10 py-5 rounded-2xl transition-all group"
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-[#d00000]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] font-black uppercase tracking-wider opacity-40">Lokacija</div>
                      <div className="text-xl font-black">Veternik, NS</div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Content: Overflowing Turbo Image (Desktop only) */}
              <div className="hidden lg:flex w-full lg:w-2/5 justify-center lg:justify-end relative lg:h-auto overflow-visible">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1a3a5e]/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Enlarged Overflowing Turbo */}
                <div className="relative w-full max-w-[500px] aspect-square lg:scale-[1.6] lg:translate-x-12 lg:-translate-y-6 transform-gpu transition-all duration-1000 ease-out z-20 group hover:scale-[1.7] cursor-pointer pointer-events-none select-none">
                  <Image
                    src="/images/CTA.webp"
                    alt="Turbo Service Premium"
                    fill
                    className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
                    priority
                  />
                </div>

                {/* Small Decorative Badge */}
                <div className="absolute -bottom-8 -right-8 bg-[#d00000] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-2xl z-30 transform -rotate-12 select-none pointer-events-none border-4 border-white lg:flex hidden">
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Garancija</span>
                  <span className="text-xl font-black">12m</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="py-12 lg:py-16 px-6 border-t border-[#000000]/5 bg-[#f0f0f0]">
          <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-12 text-center">
            <div className="flex justify-center w-full">
              <Logo className="w-32 md:w-44" />
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <p className="text-[10px] font-black text-black/40 tracking-[0.3em] uppercase max-w-[280px] sm:max-w-none">
                © {new Date().getFullYear()} Turbo Servis Novi Sad. Sva prava zadržana.
              </p>
              <div className="flex justify-center gap-8">
                <Link href="#usluge" className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-[#d00000] transition-colors">Usluge</Link>
                <Link href="#kontakt" className="text-[10px] font-black uppercase tracking-widest text-black/40 hover:text-[#d00000] transition-colors">Kontakt</Link>
              </div>
              <a
                href="https://engram.media"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[7px] font-black uppercase tracking-[0.4em] text-black/20 hover:text-black transition-colors mt-6"
              >
                website development: engram.media
              </a>
            </div>
          </div>
        </footer>
      </main >
    </>
  )
}
