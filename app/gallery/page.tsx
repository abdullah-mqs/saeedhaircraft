"use client";

import { useState, useEffect } from "react";
import {
  FiImage,
  FiScissors,
  FiX,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import Reveal from "../../components/common/Reveal";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "g-1",
    title: "Executive Fade & Beard Crafting",
    category: "Haircut & Beard",
    imageUrl:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-2",
    title: "Classic Razor Sharp Lineup",
    category: "Beard Styling",
    imageUrl:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-3",
    title: "Royal Charcoal Treatment",
    category: "Facial & Skin",
    imageUrl:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-4",
    title: "Textured Crop & Taper Fade",
    category: "Haircut",
    imageUrl:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-5",
    title: "Keratin Hair Restoration",
    category: "Treatment",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-6",
    title: "Saeed Hair Craft Studio Interior",
    category: "Barbershop",
    imageUrl:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-7",
    title: "Precision Pompadour",
    category: "Haircut",
    imageUrl:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "g-8",
    title: "Hot Towel Beard Shave",
    category: "Beard Styling",
    imageUrl:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format&fit=crop&q=80",
  },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const close = () => setSelectedIndex(null);
  const next = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length,
    );
  const prev = () =>
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + galleryItems.length) % galleryItems.length,
    );

  // Keyboard & Scroll Lock
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div
        data-section="dark"
        className="surface-section min-h-screen pt-32 pb-24"
      >
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-section text-section-text-muted text-[10px] font-bold uppercase tracking-widest">
              <FiImage size={14} className="text-accent" />
              <span>Grooming Portfolio</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-section-text">
              Work <span className="italic text-accent">Showcase</span>
            </h1>
            <p className="text-sm text-section-text-muted max-w-xl mx-auto">
              Explore recent transformations and modern haircut designs crafted
              by our master stylists.
            </p>
          </div>

          <Reveal direction="up" delay={50}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className="group relative overflow-hidden rounded-lg bg-surface border border-section hover:border-accent/50 hover:shadow-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  aria-label={`Open ${item.title}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1 text-left">
                    <span className="text-[10px] text-accent font-bold uppercase tracking-widest flex items-center gap-1">
                      <FiScissors size={11} /> {item.category}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 w-10 h-10 rounded-md border border-white/20 bg-black/50 text-white hover:bg-accent hover:text-bg hover:border-accent flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-md border border-white/20 bg-black/50 text-white hover:bg-accent hover:text-bg hover:border-accent flex items-center justify-center transition-colors z-10"
            aria-label="Previous"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-md border border-white/20 bg-black/50 text-white hover:bg-accent hover:text-bg hover:border-accent flex items-center justify-center transition-colors z-10"
            aria-label="Next"
          >
            <FiChevronRight size={24} />
          </button>

          <div
            className="max-w-4xl w-full bg-surface border border-border rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 border-t border-border">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {selectedItem.category}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-text mt-1">
                {selectedItem.title}
              </h3>
              <p className="text-[11px] text-text-muted mt-2 uppercase tracking-widest">
                {(selectedIndex ?? 0) + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
