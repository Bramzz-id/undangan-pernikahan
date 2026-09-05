import React, { useState } from 'react';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Ganti URL gambar di bawah dengan foto-foto kamu
  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 3' },
    { id: 4, src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 4' },
    { id: 5, src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 5' },
    { id: 6, src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', alt: 'Foto Prewedding 6' },
  ];

  return (
    <section id="galeri" className="scroll-mt-10 py-20 px-6 max-w-6xl mx-auto text-center">
      <span className="text-amber-600 font-serif italic text-lg tracking-widest uppercase block mb-2">
        Momen Bahagia
      </span>
      <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-10">
        Galeri Foto
      </h2>

      {/* Grid Galeri */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img.src)}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md bg-stone-100 aspect-square"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay saat hover */}
            <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium border border-white/80 px-4 py-2 rounded-full backdrop-blur-sm">
                Lihat Foto
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Popup Gambar Besar */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 p-2 transition-colors"
              aria-label="Tutup"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;