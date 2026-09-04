import { useState } from "react";

export default function HadiahSection() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedBank(true);
    setTimeout(() => setCopiedBank(false), 2000);
  };

  return (
    <section id="hadiah" className="py-16 px-6 bg-[#18110d] text-center border-t border-amber-900/40">
      <div className="max-w-md mx-auto">
        <div className="text-2xl text-amber-500 mb-1">🎁</div>
        <h2 className="text-3xl font-serif font-bold text-amber-300 mb-2">
          Amplop Digital / Tali Kasih
        </h2>
        <p className="text-xs text-amber-100/70 mb-8 leading-relaxed font-light">
          Tanpa mengurangi rasa hormat, bagi Bapak/Ibu/Saudara/i yang ingin
          memberikan tanda kasih dapat menyalurkannya melalui:
        </p>

        <button
          onClick={() => setIsGiftOpen(!isGiftOpen)}
          className="bg-gradient-to-r from-amber-700 to-amber-800 text-stone-950 font-bold text-xs px-8 py-3.5 rounded-full shadow-xl hover:brightness-110 transition-all cursor-pointer border border-amber-400/50"
        >
          {isGiftOpen ? "Tutup Detail Rekening" : "💳 Transfer / Amplop Digital"}
        </button>

        {isGiftOpen && (
          <div className="mt-6 bg-[#211712] p-6 rounded-3xl shadow-2xl border border-amber-600/50 space-y-4 animate-fade-in">
            <div className="p-5 bg-[#17100c] rounded-2xl border border-amber-900/40">
              <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-1">
                Bank BCA
              </p>
              <p className="text-2xl font-mono font-bold text-amber-200 tracking-wider">
                1234 5678 90
              </p>
              <p className="text-xs text-amber-100/60 mt-1">a.n. Romeo Montague</p>
              <button
                onClick={() => copyToClipboard("1234567890")}
                className="mt-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-[11px] px-5 py-2.5 rounded-xl transition-colors cursor-pointer shadow-md"
              >
                {copiedBank ? "✓ Berhasil Disalin" : "📋 Salin No. Rekening"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}