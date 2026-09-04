import { useState, useEffect } from "react";

export default function RsvpSection({ guestName }) {
  const [wishes, setWishes] = useState(() => {
    const savedWishes = localStorage.getItem("wedding_wishes");
    if (savedWishes) {
      try {
        return JSON.parse(savedWishes);
      } catch (e) {
        console.error("Gagal parse localStorage", e);
      }
    }
    return [
      {
        name: "I Wayan Sudiarta",
        status: "Hadir",
        jumlah: "1",
        message:
          "Om Swastyastu, selamat atas Pawiwahan Romeo & Juliet. Mogi bahagia lan dirgahayu.",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("wedding_wishes", JSON.stringify(wishes));
  }, [wishes]);

  const [inputName, setInputName] = useState(
    guestName !== "Bapak/Ibu/Saudara/i" ? guestName : ""
  );
  const [inputStatus, setInputStatus] = useState("Hadir");
  const [inputJumlah, setInputJumlah] = useState("1");
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmitWish = (e) => {
    e.preventDefault();
    if (!inputName || !inputMessage) return;

    const newWish = {
      name: inputName,
      status: inputStatus,
      jumlah: inputJumlah,
      message: inputMessage,
    };

    setWishes([newWish, ...wishes]);
    setInputMessage("");
  };

  const phoneAdmin = "6281234567890";
  const waText = `Om Swastyastu, saya ${inputName || guestName} mengonfirmasi ${inputStatus} pada acara Pawiwahan Romeo & Juliet. Ucapan: "${inputMessage}"`;
  const waUrl = `https://wa.me/${phoneAdmin}?text=${encodeURIComponent(waText)}`;

  return (
    <section id="rsvp" className="py-16 px-6 max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-bold text-amber-300 mb-2">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-xs text-amber-100/60">
          Matur Suksma atas doa dan ucapan selamat yang diberikan
        </p>
      </div>

      <form
        onSubmit={handleSubmitWish}
        className="bg-[#1c1410] p-7 md:p-8 rounded-3xl shadow-2xl border border-amber-600/50 space-y-4 mb-10"
      >
        <div>
          <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">
            Nama Lengkap
          </label>
          <input
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            required
            placeholder="Masukkan nama Anda"
            className="w-full border-amber-800/60 rounded-xl text-xs p-3.5 border focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[#120b08] text-amber-100"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">
              Konfirmasi
            </label>
            <select
              value={inputStatus}
              onChange={(e) => setInputStatus(e.target.value)}
              className="w-full border-amber-800/60 rounded-xl text-xs p-3.5 border focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[#120b08] text-amber-100"
            >
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">
              Jumlah Tamu
            </label>
            <select
              value={inputJumlah}
              onChange={(e) => setInputJumlah(e.target.value)}
              disabled={inputStatus === "Tidak Hadir"}
              className="w-full border-amber-800/60 rounded-xl text-xs p-3.5 border focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[#120b08] text-amber-100 disabled:opacity-50"
            >
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3+">3+ Orang</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1.5">
            Ucapan & Doa (Pangastuti)
          </label>
          <textarea
            rows="3"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            required
            className="w-full border-amber-800/60 rounded-xl text-xs p-3.5 border focus:outline-none focus:ring-2 focus:ring-amber-500 bg-[#120b08] text-amber-100"
            placeholder="Tulis ucapan atau doa restu..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-3.5 rounded-xl text-xs transition-colors cursor-pointer shadow-md"
          >
            Kirim Ucapan
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 font-medium py-3.5 rounded-xl text-xs transition-colors text-center shadow-md flex items-center justify-center gap-1.5 border border-emerald-600"
          >
            💬 Konfirmasi via WA
          </a>
        </div>
      </form>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
          Daftar Pangastuti & Doa ({wishes.length})
        </h3>
        {wishes.map((item, index) => (
          <div
            key={index}
            className="bg-[#1c1410] p-4 rounded-2xl shadow-md border border-amber-900/50"
          >
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-xs text-amber-200">
                  {item.name}
                </h4>
                {item.status === "Hadir" && item.jumlah && (
                  <span className="text-[10px] bg-amber-950/80 text-amber-400 px-2 py-0.5 rounded-md border border-amber-800/60 font-mono">
                    👥 {item.jumlah} Orang
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                  item.status === "Hadir"
                    ? "bg-emerald-950 text-emerald-300 border border-emerald-700"
                    : "bg-rose-950 text-rose-300 border border-rose-700"
                }`}
              >
                {item.status}
              </span>
            </div>
            <p className="text-xs text-amber-100/70 leading-relaxed font-light">
              {item.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}