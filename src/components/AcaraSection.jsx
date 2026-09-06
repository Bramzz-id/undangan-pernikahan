export default function AcaraSection() {
  const googleCalendarUrl = "https://calendar.app.google/mkwT8iZQG6kFG6v86";

  return (
    <section id="acara" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-serif font-bold text-amber-300 mb-2">
        Dudonan Acara Pawiwahan
      </h2>
      <div className="w-16 h-0.5 bg-amber-600/50 mx-auto mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-[#1c1410]/80 p-8 rounded-3xl shadow-xl border border-amber-600/40 hover:border-amber-500 transition-all">
          <div className="w-12 h-12 bg-amber-950 text-amber-400 rounded-full flex items-center justify-center text-xl mx-auto mb-4 border border-amber-600/60">
            🔱
          </div>
          <h3 className="text-xl font-serif font-bold text-amber-300 mb-2">
            Upacara Pawiwahan
          </h3>
          <p className="text-xs text-amber-100/90 mb-1 font-semibold">
            Jumat, 9 Oktober 2026
          </p>
          <p className="text-xs text-amber-200/60">08.00 WITA - Selesai</p>
        </div>

        <div className="bg-[#1c1410]/80 p-8 rounded-3xl shadow-xl border border-amber-600/40 hover:border-amber-500 transition-all">
          <div className="w-12 h-12 bg-amber-950 text-amber-400 rounded-full flex items-center justify-center text-xl mx-auto mb-4 border border-amber-600/60">
            🌺
          </div>
          <h3 className="text-xl font-serif font-bold text-amber-300 mb-2">
            Resepsi
          </h3>
          <p className="text-xs text-amber-100/90 mb-1 font-semibold">
            Jumat, 9 Oktober 2026
          </p>
          <p className="text-xs text-amber-200/60">16.00 WITA - Selesai</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="https://maps.app.goo.gl/a2dQ9KVJtry1uG2n6"
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 text-stone-950 font-bold text-xs px-7 py-3.5 rounded-full shadow-lg hover:bg-amber-500 transition-colors"
        >
          📍 Google Maps Lokasi
        </a>
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#281a12] text-amber-300 text-xs font-semibold px-7 py-3.5 rounded-full hover:bg-[#362318] transition-colors border border-amber-600/60"
        >
          📅 Simpan ke Kalender
        </a>
      </div>
    </section>
  );
}
