export default function HeroSection({ guestName, onOpenInvitation }) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center p-6 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop')]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#260f08]/75 to-[#12100e] backdrop-blur-[1px]" />

      <div className="relative z-10 pt-10 text-amber-100 animate-float">
        <div className="text-amber-400 text-3xl font-serif mb-1">ᬒᬄ</div>
        <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-light text-amber-300/90 drop-shadow">
          Pawiwahan / Pernikahan Adat Bali
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wide drop-shadow-2xl mt-2">
          Romeo & Juliet
        </h1>
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-12 h-[1px] bg-amber-500/60" />
          <span className="text-amber-400 text-xs">🪷</span>
          <div className="w-12 h-[1px] bg-amber-500/60" />
        </div>
      </div>

      <div className="relative z-10 my-auto bg-[#1a1310]/85 backdrop-blur-md p-7 md:p-9 rounded-3xl shadow-2xl max-w-md w-full border-2 border-amber-600/70 ring-1 ring-amber-400/30">
        <div className="text-amber-400 text-sm font-serif mb-2">
          Om Swastyastu
        </div>
        <p className="text-[10px] uppercase tracking-widest text-amber-200/80 font-bold mb-1">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-300 my-2 capitalize drop-shadow-sm">
          {guestName}
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-3" />
        <p className="text-xs text-amber-100/70 leading-relaxed font-light">
          Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami
          bermaksud menyelenggarakan Upacara Pawiwahan putra-putri kami.
        </p>
      </div>

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