"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useAtom, useSetAtom } from "jotai";
import { FiPlus } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import ReviewCard from "../common/ReviewCard";
import StarRating from "../common/StarRating";
import { reviewsAtom, isReviewModalOpenAtom } from "../../store/reviewStore";

export default function ReviewsSection() {
  const [reviews] = useAtom(reviewsAtom);
  const setIsOpen = useSetAtom(isReviewModalOpenAtom);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const averageRating =
    reviews.length === 0
      ? 0
      : reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollBy = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.85;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener("resize", updateScrollButtons);
    return () => window.removeEventListener("resize", updateScrollButtons);
  }, []);

  return (
    <section
      data-section="dark"
      className="surface-section section-padding border-t border-section"
    >
      {/* ... Baaki JSX waisa hi rahega, bas averageRating aur totalReviews ab direct variables hain (functions nahi) ... */}
      <div className="section-container">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our"
          titleHighlight="Clients Say"
          subtitle="Real reviews from real customers — trust the experience."
          align="left"
          action={
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-bg bg-accent px-4 py-2 rounded-md hover:bg-accent-hover transition-colors"
              >
                <FiPlus size={14} /> Write a Review
              </button>

              <Link
                href="/reviews"
                className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-section-text-muted hover:text-accent transition-colors"
              >
                View All
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
            </div>
          }
        />

        {/* Stats Bar */}
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <span className="font-heading text-5xl font-bold text-white leading-none">
              {averageRating.toFixed(1)}
            </span>
            <div className="flex flex-col gap-1">
              <StarRating rating={averageRating} size="sm" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
                Based on {totalReviews} reviews
              </span>
            </div>
          </div>
          {/* ... baaki stats ... */}
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="hidden md:flex absolute -top-16 right-0 gap-2">
            {/* ... arrows ... */}
          </div>

          <div
            ref={scrollRef}
            onScroll={updateScrollButtons}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar scroll-smooth"
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="snap-start shrink-0 w-[85vw] sm:w-[340px] md:w-[380px]"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
