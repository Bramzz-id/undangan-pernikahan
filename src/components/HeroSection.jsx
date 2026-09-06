import backgroundFoto from "../assets/foto-pernikahan-2.jpeg";

export default function HeroSection({ guestName, onOpenInvitation }) {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-between items-center text-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundFoto})` }}
    >
      {/* Teks Header Utama tanpa overlay/blur, menggunakan text shadow tebal */}
      <div className="relative z-10 pt-10 text-amber-100 animate-float">
        <div className="text-amber-400 text-3xl font-serif mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          ᬒᬄ
        </div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Pawiwahan / Pernikahan Adat Bali
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-amber-300 tracking-wide mt-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
          Respawan & Ayu
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-12 h-[1px] bg-amber-400 shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
          <span className="text-amber-400 text-xs drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            🪷
          </span>
          <div className="w-12 h-[1px] bg-amber-400 shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
        </div>
      </div>

      {/* Kartu Penerima Undangan */}
      <div className="relative z-10 my-auto p-7 md:p-9 rounded-3xl shadow-2xl max-w-md w-full border-2 border-amber-600/70 ring-1 ring-amber-400/30">
        <div className="text-amber-300 text-sm font-serif mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] font-bold">
          Om Swastyastu
        </div>
        <p className="text-[10px] uppercase tracking-widest text-amber-200 font-bold mb-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-300 my-2 capitalize drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
          {guestName}
        </h2>
        <div className="w-16 h-0.5 bg-amber-400 mx-auto my-3 shadow-[0_1px_3px_rgba(0,0,0,0.9)]" />
        <p className="text-xs text-stone-100 leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami
          bermaksud menyelenggarakan Upacara Pawiwahan putra-putri kami.
        </p>
      </div>

      {/* Tombol Buka Undangan */}
      <div className="relative z-10 pb-16">
        <button
          onClick={onOpenInvitation}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-stone-950 font-bold text-xs md:text-sm px-8 py-3.5 rounded-full shadow-2xl hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-amber-300"
        >
          ✉️ Buka Undangan
        </button>
      </div>
    </section>
  );
}
