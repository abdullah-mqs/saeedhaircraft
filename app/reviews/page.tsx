"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useAtom, useSetAtom } from "jotai";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "../../components/common/SectionHeading";
import ReviewCard from "../../components/common/ReviewCard";
import StarRating from "../../components/common/StarRating";
import Reveal from "../../components/common/Reveal";
import { reviewsAtom, isReviewModalOpenAtom } from "../../store/reviewStore";

export default function ReviewsPage() {
  const [filter, setFilter] = useState<number | null>(null);
  const [reviews] = useAtom(reviewsAtom);
  const setIsOpen = useSetAtom(isReviewModalOpenAtom);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return sum / reviews.length;
  }, [reviews]);

  const totalReviews = reviews.length;

  const breakdown = useMemo(() => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((r) => {
      if (counts[r.rating] !== undefined) {
        counts[r.rating]++;
      }
    });
    return counts;
  }, [reviews]);

  const filteredReviews = useMemo(() => {
    const sorted = [...reviews].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
    return filter === null ? sorted : sorted.filter((r) => r.rating === filter);
  }, [reviews, filter]);

  const getBarPercent = (star: number): number => {
    if (totalReviews === 0) return 0;
    return Math.round((breakdown[star] / totalReviews) * 100);
  };

  return (
    <section
      data-section="light"
      className="surface-section section-padding min-h-screen"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="Customer"
          titleHighlight="Reviews"
          subtitle="Real feedback from real clients — verified after every booking."
          align="left"
          action={
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-bg bg-accent px-5 py-3 rounded-md hover:bg-accent-hover transition-colors shadow-sm"
              >
                <FiPlus size={16} /> Write a Review
              </button>

              <Link
                href="/booking"
                className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-bg bg-text px-5 py-3 rounded-md hover:bg-accent hover:text-bg transition-colors"
              >
                Book Your Visit
              </Link>
            </div>
          }
        />

        <Reveal direction="up">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">
            <div className="bg-surface border border-section rounded-lg p-8 flex flex-col items-center justify-center text-center gap-3">
              <span className="font-heading text-7xl font-bold text-section-text leading-none">
                {averageRating.toFixed(1)}
              </span>
              <StarRating rating={averageRating} size="lg" />
              <span className="text-section-text-muted mt-1 uppercase tracking-widest font-bold text-[10px]">
                Based on {totalReviews} verified reviews
              </span>
            </div>

            <div className="bg-surface border border-section rounded-lg p-8 flex flex-col gap-3 justify-center">
              {[5, 4, 3, 2, 1].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFilter(filter === star ? null : star)}
                  className={`flex items-center gap-4 text-xs transition-opacity hover:opacity-80 ${
                    filter === star ? "opacity-100" : "opacity-90"
                  }`}
                >
                  <span className="w-10 text-section-text font-semibold text-left shrink-0">
                    {star} ★
                  </span>
                  <div className="flex-1 h-2 bg-surface-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500 rounded-full"
                      style={{ width: `${getBarPercent(star)}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-section-text-muted shrink-0">
                    {breakdown[star]}
                  </span>
                </button>
              ))}

              {filter !== null && (
                <button
                  type="button"
                  onClick={() => setFilter(null)}
                  className="mt-2 self-start inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-section-text border border-section rounded-md px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="border border-section rounded-lg p-12 text-center">
              <p className="text-section-text-muted">
                No reviews match this filter.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
