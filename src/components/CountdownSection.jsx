import { useState, useEffect } from "react";

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    Hari: 0,
    Jam: 0,
    Menit: 0,
    Detik: 0,
  });

  useEffect(() => {
    // Mengubah ke tanggal 9 Oktober 2026 jam 09:00:00 WITA/WIB
    const targetDate = new Date("2026-10-09T08:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
          Jam: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          Menit: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          Detik: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ Hari: 0, Jam: 0, Menit: 0, Detik: 0 });
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-[#18110d] via-[#26150c] to-[#18110d] text-white text-center px-6 relative border-y border-amber-600/40">
      <h3 className="text-2xl font-serif mb-2 text-amber-300">
        Mengetuk Waktu
      </h3>
      <p className="text-xs text-amber-200/60 mb-8 max-w-sm mx-auto">
        Dewa Nawa Sanga Nyaksiang Pawiwahan
      </p>

      <div className="grid grid-cols-4 gap-2 md:gap-5 max-w-md mx-auto relative z-10">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-[#120b08]/80 p-3 md:p-4 rounded-2xl border border-amber-500/40 shadow-inner"
          >
            <span className="block text-2xl md:text-3xl font-bold font-mono text-amber-400">
              {value}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-wider text-amber-200/60 mt-1 block">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
