"use client";

import { useState, useEffect } from "react";
import {
  getActiveOffersLimited,
  getOfferDiscountLabel,
  getDaysRemaining,
} from "../../data/offersData";
import { formatDaysLeft } from "../../lib/formatDate";
import { Offer } from "../../types";

export default function OffersBanner() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Data ko client mount hone ke baad load karein taake "new Date()" ka error na aaye
  useEffect(() => {
    setOffers(getActiveOffersLimited(3));
  }, []);

  // Jab tak data load nahi hota, kuch render na karein
  if (offers.length === 0) return null;

  const copyCode = async (offer: Offer) => {
    if (!offer.promoCode) return;
    try {
      await navigator.clipboard.writeText(offer.promoCode);
      setCopiedId(offer.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {}
  };

  return (
    <section data-section="dark" className="surface-section">
      <div className="section-container pt-10 pb-4">
        <div className="flex items-center gap-3 mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-section-text">
            Live Offers & Deals
          </span>
        </div>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar">
          {offers.map((offer) => {
            const daysLeft = getDaysRemaining(offer.validUntil);
            const isUrgent = daysLeft <= 3;

            return (
              <article
                key={offer.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[360px] md:w-[420px] relative rounded-lg border border-section bg-surface p-6 group hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-bg bg-accent px-2.5 py-1 rounded-sm">
                    {getOfferDiscountLabel(offer)}
                  </span>
                  {isUrgent && (
                    <span className="text-[9px] font-bold uppercase tracking-widest text-error border border-error/30 px-2 py-1 rounded-sm animate-pulse">
                      ⏰ {formatDaysLeft(offer.validUntil)}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl font-semibold text-text mb-2">
                  {offer.title}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed mb-6 line-clamp-2">
                  {offer.description}
                </p>

                <div className="flex items-center justify-between gap-3 mt-auto">
                  {offer.promoCode && (
                    <button
                      type="button"
                      onClick={() => copyCode(offer)}
                      className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-text bg-transparent border border-dashed border-border rounded-md px-3 py-2 hover:border-accent hover:text-accent transition-colors"
                    >
                      {copiedId === offer.id ? (
                        <span className="text-success">Copied!</span>
                      ) : (
                        <>
                          <svg
                            className="w-3.5 h-3.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                          </svg>
                          {offer.promoCode}
                        </>
                      )}
                    </button>
                  )}

                  {!isUrgent && daysLeft > 0 && (
                    <span className="text-[10px] text-text-muted uppercase tracking-wider">
                      Valid {formatDaysLeft(offer.validUntil)}
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
