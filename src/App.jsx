import { useState, useRef } from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import MempelaiSection from "./components/MempelaiSection";
import CountdownSection from "./components/CountdownSection";
import AcaraSection from "./components/AcaraSection";
import HadiahSection from "./components/HadiahSection";
import RsvpSection from "./components/RsvpSection";
import GallerySection from "./components/GallerySection";
import baliMusic from "./assets/bali-music.mp3";

export default function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const guestName = queryParams.get("to") || "Bapak/Ibu/Saudara/i";

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(baliMusic));

 const toggleAudio = () => {
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play().catch((error) => {
      console.error("Gagal memutar audio:", error);
    });
  }
  setIsPlaying(!isPlaying);
};

  const handleOpenInvitation = () => {
    document.getElementById("mempelai")?.scrollIntoView({ behavior: "smooth" });
    audioRef.current.play().catch(() => {});
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-[#12100e] text-[#e8dfd8] font-sans pb-20 relative selection:bg-amber-600 selection:text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      {/* Tombol Audio */}
      <button
        onClick={toggleAudio}
        aria-label="Toggle Audio"
        className="fixed top-5 right-5 z-50 bg-[#2b1810]/90 backdrop-blur-md text-amber-400 p-3.5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-amber-500/80 ring-4 ring-amber-950/40"
      >
        {isPlaying ? "🎶" : "🔇"}
      </button>

      {/* Main Sections */}
      <HeroSection
        guestName={guestName}
        onOpenInvitation={handleOpenInvitation}
      />
      <MempelaiSection />
      <CountdownSection />
      <AcaraSection />
      <HadiahSection />
      <RsvpSection guestName={guestName} />

      {/* Galeri */}
      <GallerySection />

      {/* Footer Salam */}
      <footer className="text-center py-12 border-t border-amber-900/40 text-amber-200/60 text-xs bg-[#0e0a08]">
        <p className="font-serif text-lg text-amber-300 font-bold mb-1">
          Respawan & Ayu
        </p>
        <p className="text-xs text-amber-400 font-serif italic mb-2">
          Om Shanti Shanti Shanti Om
        </p>
        <p className="text-[11px] text-amber-200/40">
          Suksma / Terima kasih atas doa restu Anda.
        </p>
      </footer>

      {/* Navigasi Melayang Responsive */}
      <Navigation />
    </div>
  );
}
