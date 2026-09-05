import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Konfigurasi Supabase
const SUPABASE_URL = "https://vazoynavuoyyphfeelfn.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_QFMtTFislu12n1M2gRGCfA_unIOxzIa";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// PIN khusus Admin untuk menghapus spam (Ganti sesuai keinginan)
const ADMIN_PIN = "1234";

export default function RsvpSection({ guestName }) {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Buat / ambil Device ID unik per pengguna untuk hak edit & hapus sendiri
  const [userId] = useState(() => {
    let storedId = localStorage.getItem("wedding_user_id");
    if (!storedId) {
      storedId =
        "usr_" + Math.random().toString(36).substring(2, 11) + Date.now();
      localStorage.setItem("wedding_user_id", storedId);
    }
    return storedId;
  });

  // Cek apakah pengguna saat ini adalah Admin
  const [isAdmin, setIsAdmin] = useState(false);

  // 2. useEffect untuk pengecekan admin (gunakan string "1234" dan asynchrony/cleanup)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("admin") === "1234") {
      Promise.resolve().then(() => setIsAdmin(true));
    }
  }, []);

  const [inputName, setInputName] = useState(
    guestName !== "Bapak/Ibu/Saudara/i" ? guestName : "",
  );
  const [inputStatus, setInputStatus] = useState("Hadir");
  const [inputJumlah, setInputJumlah] = useState("1");
  const [inputMessage, setInputMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State untuk mode Edit
  const [editingId, setEditingId] = useState(null);

  // 1. Ambil ucapan dari database
  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("wedding_wishes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal mengambil ucapan:", error);
    } else {
      setWishes(data || []);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const loadInitialData = async () => {
      setLoading(true);
      await fetchWishes();
      if (isMounted) setLoading(false);
    };

    loadInitialData();
    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Simpan atau Update ucapan
  const handleSubmitWish = async (e) => {
    e.preventDefault();
    if (!inputName || !inputMessage) return;

    setIsSubmitting(true);

    if (editingId) {
      // PROSES EDIT (Hanya bisa untuk pesan sendiri)
      const { error } = await supabase
        .from("wedding_wishes")
        .update({
          name: inputName,
          status: inputStatus,
          jumlah: inputStatus === "Hadir" ? inputJumlah : null,
          message: inputMessage,
        })
        .eq("id", editingId)
        .eq("user_id", userId);

      if (error) {
        alert("Gagal memperbarui ucapan.");
        console.error(error);
      } else {
        setEditingId(null);
        setInputMessage("");
        await fetchWishes();
      }
    } else {
      // PROSES TAMBAH PESAN BARU
      const { error } = await supabase.from("wedding_wishes").insert([
        {
          name: inputName,
          status: inputStatus,
          jumlah: inputStatus === "Hadir" ? inputJumlah : null,
          message: inputMessage,
          user_id: userId,
        },
      ]);

      if (error) {
        alert("Gagal mengirim ucapan, coba lagi nanti.");
        console.error(error);
      } else {
        setInputMessage("");
        await fetchWishes();
      }
    }

    setIsSubmitting(false);
  };

  // 3. Fungsi Mulai Edit (Hanya untuk milik sendiri)
  const handleStartEdit = (item) => {
    setEditingId(item.id);
    setInputName(item.name);
    setInputStatus(item.status);
    setInputJumlah(item.jumlah || "1");
    setInputMessage(item.message);
    window.scrollTo({
      top: document.getElementById("rsvp").offsetTop - 20,
      behavior: "smooth",
    });
  };

  // Cancel Edit
  const handleCancelEdit = () => {
    setEditingId(null);
    setInputMessage("");
    setInputName(guestName !== "Bapak/Ibu/Saudara/i" ? guestName : "");
  };

  // 4. Fungsi Hapus (Bisa untuk milik sendiri ATAU jika pengguna adalah Admin)
  const handleDeleteWish = async (item) => {
    const isOwner = item.user_id === userId;

    if (!isOwner && !isAdmin) {
      alert("Anda hanya bisa menghapus ucapan Anda sendiri.");
      return;
    }

    const confirmText =
      isAdmin && !isOwner
        ? `[ADMIN] Yakin ingin menghapus ucapan dari "${item.name}"?`
        : "Yakin ingin menghapus ucapan ini?";

    if (confirm(confirmText)) {
      const { error } = await supabase
        .from("wedding_wishes")
        .delete()
        .eq("id", item.id);

      if (error) {
        alert("Gagal menghapus ucapan.");
        console.error(error);
      } else {
        await fetchWishes();
      }
    }
  };

  const phoneAdmin = "6285942521835";
  const waText = `Om Swastyastu, saya ${inputName || guestName} mengonfirmasi ${inputStatus} pada acara Pawiwahan. Ucapan: "${inputMessage}"`;
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
        {isAdmin && (
          <span className="inline-block mt-2 bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] px-3 py-1 rounded-full font-mono">
            🛡️ Mode Admin Aktif (Bisa hapus semua ucapan)
          </span>
        )}
      </div>

      <form
        onSubmit={handleSubmitWish}
        className="bg-[#1c1410] p-7 md:p-8 rounded-3xl shadow-2xl border border-amber-600/50 space-y-4 mb-10"
      >
        {editingId && (
          <div className="flex justify-between items-center bg-amber-950/60 p-3 rounded-xl border border-amber-700/50 text-xs text-amber-200 mb-2">
            <span>✏️ Sedang mengedit ucapan Anda</span>
            <button
              type="button"
              onClick={handleCancelEdit}
              className="text-amber-400 hover:text-amber-100 underline text-[11px]"
            >
              Batal
            </button>
          </div>
        )}

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
            disabled={isSubmitting}
            className="flex-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold py-3.5 rounded-xl text-xs transition-colors cursor-pointer shadow-md disabled:opacity-50"
          >
            {isSubmitting
              ? "Menyimpan..."
              : editingId
                ? "Simpan Perubahan"
                : "Kirim Ucapan"}
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

      {/* Daftar Komentar Publik */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
        <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
          Daftar Pangastuti & Doa ({wishes.length})
        </h3>

        {loading ? (
          <p className="text-xs text-amber-100/50 text-center py-4">
            Memuat ucapan...
          </p>
        ) : wishes.length === 0 ? (
          <p className="text-xs text-amber-100/50 text-center py-4">
            Belum ada ucapan. Jadilah yang pertama!
          </p>
        ) : (
          wishes.map((item) => {
            const isOwner = item.user_id === userId;

            return (
              <div
                key={item.id}
                className="bg-[#1c1410] p-4 rounded-2xl shadow-md border border-amber-900/50 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-xs text-amber-200">
                      {item.name}
                    </h4>
                    {isOwner && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded font-mono">
                        Anda
                      </span>
                    )}
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

                {/* Tombol Aksi Edit & Hapus */}
                <div className="flex justify-end items-center gap-3 pt-1 border-t border-amber-900/30 text-[11px]">
                  {/* Pengguna hanya bisa mengedit pesan miliknya */}
                  {isOwner && (
                    <button
                      onClick={() => handleStartEdit(item)}
                      className="text-amber-400 hover:text-amber-200 transition-colors flex items-center gap-1"
                    >
                      ✏️ Edit
                    </button>
                  )}

                  {/* Pengguna bisa menghapus pesan milik sendiri ATAU Admin bisa menghapus semua pesan */}
                  {(isOwner || isAdmin) && (
                    <button
                      onClick={() => handleDeleteWish(item)}
                      className="text-rose-400 hover:text-rose-200 transition-colors flex items-center gap-1"
                    >
                      🗑️ Hapus {isAdmin && !isOwner && "(Admin)"}
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
