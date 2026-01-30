export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D2137] min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-white leading-tight">
            REMONT TURBO<br />
            <span className="text-red-600">KOMPRESORA</span><br />
            NOVI SAD
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-xl">
            Stručna dijagnostika, popravka i remont turbina za sva vozila. 
            Preko 10 godina iskustva i garancija 12 meseci na sve radove.
          </p>
          <div className="mt-10 flex gap-4">
            <a href="#kontakt" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-semibold">
              Zakažite Pregled
            </a>
            <a href="tel:+381637725026" className="border-2 border-white text-white hover:bg-white hover:text-[#0D2137] px-8 py-4 rounded font-semibold">
              📞 063/7725-026
            </a>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div><span className="text-3xl">⏱️</span><div className="font-bold text-[#0D2137]">10+ GODINA</div><div className="text-sm text-gray-500">ISKUSTVA</div></div>
          <div><span className="text-3xl">✓</span><div className="font-bold text-[#0D2137]">12 MESECI</div><div className="text-sm text-gray-500">GARANCIJE</div></div>
          <div><span className="text-3xl">🔧</span><div className="font-bold text-[#0D2137]">ORIGINALNI</div><div className="text-sm text-gray-500">DELOVI</div></div>
          <div><span className="text-3xl">📍</span><div className="font-bold text-[#0D2137]">VETERNIK</div><div className="text-sm text-gray-500">NOVI SAD</div></div>
        </div>
      </section>

      {/* Services */}
      <section id="usluge" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0D2137] text-center mb-4">Naše Usluge</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Kompletan servis turbo kompresora za putnička, teretna i radna vozila</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-[#0D2137] mb-3">Remont Turbo Kompresora</h3>
              <p className="text-gray-600 mb-4">Kompletan remont svih tipova turbo kompresora. Zamena ležajeva, karika, balansiranje rotora.</p>
              <ul className="text-sm space-y-1"><li className="flex gap-2"><span className="text-red-600">✓</span>Zamena ležajeva i karika</li><li className="flex gap-2"><span className="text-red-600">✓</span>Balansiranje rotora</li><li className="flex gap-2"><span className="text-red-600">✓</span>Garancija 12 meseci</li></ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#0D2137] mb-3">Dijagnostika Turbine</h3>
              <p className="text-gray-600 mb-4">Stručna dijagnostika i utvrđivanje problema. Precizna analiza i besplatna procena.</p>
              <ul className="text-sm space-y-1"><li className="flex gap-2"><span className="text-red-600">✓</span>Vizuelni pregled</li><li className="flex gap-2"><span className="text-red-600">✓</span>Provera pritiska</li><li className="flex gap-2"><span className="text-red-600">✓</span>Besplatna procena</li></ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-[#0D2137] mb-3">Zamena Delova</h3>
              <p className="text-gray-600 mb-4">Originalni i kvalitetni zamenski delovi za sve tipove turbo kompresora.</p>
              <ul className="text-sm space-y-1"><li className="flex gap-2"><span className="text-red-600">✓</span>Originalni delovi</li><li className="flex gap-2"><span className="text-red-600">✓</span>Stručna ugradnja</li><li className="flex gap-2"><span className="text-red-600">✓</span>Garancija na delove</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="o-nama" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center text-gray-400">Fotografija radionice</div>
            <div>
              <h2 className="text-4xl font-bold text-[#0D2137] mb-6">O Nama</h2>
              <p className="text-gray-600 mb-4"><strong className="text-[#0D2137]">Turbo Servis</strong> je specijalizovana radionica za remont turbo kompresora u Veterniku kod Novog Sada.</p>
              <p className="text-gray-600 mb-4">Sa preko <strong>10 godina iskustva</strong>, pružamo stručne usluge dijagnostike, remonta i popravke turbina za sva vozila.</p>
              <p className="text-gray-600 mb-6">Vlasnik <strong>Saša Petrić</strong> garantuje kvalitetan rad i pošten pristup svakom klijentu.</p>
              <div className="flex gap-8">
                <div><div className="text-3xl font-bold text-red-600">10+</div><div className="text-sm text-gray-500">Godina iskustva</div></div>
                <div><div className="text-3xl font-bold text-red-600">1000+</div><div className="text-sm text-gray-500">Zadovoljnih klijenata</div></div>
                <div><div className="text-3xl font-bold text-red-600">12</div><div className="text-sm text-gray-500">Meseci garancije</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0D2137] text-center mb-12">Česta Pitanja</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-[#0D2137]">Koliko traje remont turbine?</h3><p className="mt-2 text-gray-600">Obično 1-3 radna dana. Za hitne slučajeve nudimo ubrzanu uslugu.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-[#0D2137]">Da li dajete garanciju?</h3><p className="mt-2 text-gray-600">Da, 12 meseci garancije na sve radove i delove.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-[#0D2137]">Koje tipove turbina servisirate?</h3><p className="mt-2 text-gray-600">Sve: Garrett, BorgWarner, Holset, IHI, Mitsubishi i druge.</p></div>
            <div className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-[#0D2137]">Kako znam da turbina treba remont?</h3><p className="mt-2 text-gray-600">Znaci: gubitak snage, crni/plavi dim, zviždanje, povećana potrošnja ulja.</p></div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#0D2137] text-center mb-4">Kontakt</h2>
          <p className="text-gray-600 text-center mb-12">Javite nam se za besplatnu procenu</p>
          <div className="grid md:grid-cols-2 gap-12">
            <form className="space-y-4">
              <input type="text" placeholder="Ime i prezime" className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none" />
              <input type="tel" placeholder="Telefon *" required className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none" />
              <textarea rows={4} placeholder="Opišite problem..." className="w-full px-4 py-3 border rounded focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"></textarea>
              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded font-semibold">Pošaljite Upit</button>
            </form>
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex gap-4"><span className="text-2xl">📍</span><div><h3 className="font-semibold">Adresa</h3><p className="text-gray-600">Svetih Arhanđela 9, 21203 Veternik</p></div></div>
                <div className="flex gap-4"><span className="text-2xl">📞</span><div><h3 className="font-semibold">Telefon</h3><p className="text-gray-600"><a href="tel:+381637725026" className="hover:text-red-600">063/7725-026</a> · <a href="tel:+381641242469" className="hover:text-red-600">064/1242-469</a></p></div></div>
                <div className="flex gap-4"><span className="text-2xl">🕐</span><div><h3 className="font-semibold">Radno Vreme</h3><p className="text-gray-600">Pon-Pet: 08-17h · Sub: 08-13h</p></div></div>
              </div>
              <div className="flex gap-4">
                <a href="tel:+381637725026" className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold text-center">📞 Pozovite</a>
                <a href="https://wa.me/381637725026" className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-semibold text-center">💬 WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0D2137] py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Imate Problem Sa Turbinom?</h2>
        <p className="text-gray-300 mb-8">Pozovite nas za besplatnu procenu</p>
        <a href="tel:+381637725026" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded text-xl font-semibold inline-block">📞 063/7725-026</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-bold mb-2">TURBO SERVIS</p>
          <p className="text-gray-400 text-sm">© 2026 Turbo Servis Novi Sad. Sva prava zadržana.</p>
        </div>
      </footer>
    </main>
  )
}
