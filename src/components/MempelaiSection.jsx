export default function MempelaiSection() {
  return (
    <section id="mempelai" className="py-20 px-6 max-w-4xl mx-auto text-center relative">
      <div className="text-amber-500 text-3xl mb-1">🪷</div>
      <h2 className="text-3xl font-serif font-bold text-amber-300 mb-2">
        Palemahan Pawiwahan
      </h2>
      <p className="text-xs text-amber-400/80 font-serif italic mb-3">
        Om Swastyastu
      </p>
      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-6" />

      <p className="text-xs md:text-sm text-amber-100/70 max-w-lg mx-auto mb-14 leading-relaxed font-light italic">
        "Mugi-mugi Ida Sang Hyang Widhi Wasa ngamertanin pawiwahan puniki,
        mangda dados sakadi pasangan ingkang harmonis, trepti, lan dirgahayu."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Pria */}
        <div className="relative bg-[#1c1410]/90 p-8 rounded-3xl shadow-2xl border border-amber-600/50 hover:border-amber-400 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-950 text-amber-300 text-[10px] px-4 py-1 rounded-full font-bold border border-amber-500 uppercase tracking-widest">
            Purusa (Pria)
          </div>
          <div className="w-28 h-28 mx-auto mt-2 mb-5 rounded-full p-1 bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-700 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
              alt="Romeo"
              className="w-full h-full object-cover rounded-full border-2 border-[#1c1410]"
            />
          </div>
          <h3 className="text-2xl font-serif font-bold text-amber-200">
            Romeo Montague, S.Kom
          </h3>
          <p className="text-[11px] text-amber-500 font-semibold my-2 uppercase tracking-wider">
            Putra Pradana Dari
          </p>
          <p className="text-xs text-amber-100/60">Bpk. Montague & Ibu Montague</p>
          <p className="text-[11px] text-amber-400/80 mt-1">Banjar Griya, Denpasar</p>
        </div>

        {/* Wanita */}
        <div className="relative bg-[#1c1410]/90 p-8 rounded-3xl shadow-2xl border border-amber-600/50 hover:border-amber-400 transition-all duration-300">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-950 text-amber-300 text-[10px] px-4 py-1 rounded-full font-bold border border-amber-500 uppercase tracking-widest">
            Pradana (Wanita)
          </div>
          <div className="w-28 h-28 mx-auto mt-2 mb-5 rounded-full p-1 bg-gradient-to-tr from-amber-600 via-amber-300 to-amber-700 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
              alt="Juliet"
              className="w-full h-full object-cover rounded-full border-2 border-[#1c1410]"
            />
          </div>
          <h3 className="text-2xl font-serif font-bold text-amber-200">
            Juliet Capulet, S.T
          </h3>
          <p className="text-[11px] text-amber-500 font-semibold my-2 uppercase tracking-wider">
            Putri Pradana Dari
          </p>
          <p className="text-xs text-amber-100/60">Bpk. Capulet & Ibu Capulet</p>
          <p className="text-[11px] text-amber-400/80 mt-1">Banjar Pengosekan, Ubud</p>
        </div>
      </div>
    </section>
  );
}