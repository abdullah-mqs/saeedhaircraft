"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { getLatestHighlights } from "../../data/highlightsData";
import { mockBarbers } from "../../data/barbersData";
import { Highlight } from "../../types";

export default function HighlightsSection() {
  const allHighlights = getLatestHighlights(8);
  const [selected, setSelected] = useState<Highlight | null>(null);

  const getBarberName = (id?: string) => {
    if (!id) return undefined;
    return mockBarbers.find((b) => b.id === id)?.name;
  };

  // Keyboard support & Scroll lock
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <section
      data-section="dark"
      className="surface-section section-padding border-t border-section"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="OUR WORK"
          title="Recent"
          titleHighlight="Highlights"
          subtitle="Har cut, har style — perfectly crafted by our expert barbers."
          action={
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-section-text-muted hover:text-accent transition-colors"
            >
              View Full Gallery
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          }
        />

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] md:auto-rows-[240px]">
          {allHighlights.map((item, index) => {
            const isLarge = index === 0;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className={`group relative overflow-hidden rounded-lg border border-section bg-surface text-left transition-all duration-300 hover:border-accent/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                }`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest text-bg bg-accent px-2 py-1 rounded-sm">
                  {item.category}
                </span>

                {item.isFeatured && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest text-white bg-black/60 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/20">
                    ★ Featured
                  </span>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <h3
                    className={`font-heading font-semibold text-white leading-tight mb-1 ${
                      isLarge ? "text-xl md:text-3xl" : "text-sm md:text-lg"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {getBarberName(item.barberId) && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      By {getBarberName(item.barberId)}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-md border border-white/20 bg-black/40 text-white hover:bg-accent hover:text-bg hover:border-accent flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>

          <div
            className="max-w-4xl w-full bg-surface border border-border rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.imageUrl}
              alt={selected.title}
              className="w-full max-h-[75vh] object-contain bg-black"
            />
            <div className="p-6 border-t border-border">
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {selected.category}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-text mt-1">
                {selected.title}
              </h3>
              {getBarberName(selected.barberId) && (
                <p className="text-[11px] text-text-muted uppercase tracking-widest mt-2">
                  By {getBarberName(selected.barberId)}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
