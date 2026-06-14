"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ZoomIn } from "lucide-react";

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Steel Factory", category: "Factory" },
  { id: 2, src: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80", alt: "Structural Steel", category: "Products" },
  { id: 3, src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80", alt: "Steel Rods", category: "Products" },
  { id: 4, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Steel Sheets", category: "Products" },
  { id: 5, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", alt: "Manufacturing Unit", category: "Manufacturing" },
  { id: 6, src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80", alt: "Steel Works", category: "Manufacturing" },
  { id: 7, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", alt: "Quality Testing", category: "Machinery" },
  { id: 8, src: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&q=80", alt: "Steel Beams", category: "Products" },
  { id: 9, src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80", alt: "Factory Floor", category: "Factory" },
  { id: 10, src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Flat Steel", category: "Products" },
  { id: 11, src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80", alt: "Production Line", category: "Manufacturing" },
  { id: 12, src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80", alt: "Steel Storage", category: "Factory" },
];

const categories = ["All", "Factory", "Products", "Manufacturing", "Machinery"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | typeof galleryItems[0]>(null);

  const filtered = activeFilter === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary-900/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <div className="inline-block bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Gallery</div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Gallery</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A visual journey through our factory, products, and manufacturing process.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-accent text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-accent/10 hover:text-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white">
                    <ZoomIn size={32} />
                    <span className="font-semibold text-sm">{item.alt}</span>
                    <span className="text-xs bg-accent px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4" onClick={() => setLightbox(null)}>
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={20} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {lightbox.alt} — {lightbox.category}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
