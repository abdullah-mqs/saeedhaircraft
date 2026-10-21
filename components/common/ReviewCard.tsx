"use client"; // <--- Yeh line sab se upar add karein

import { Review } from "../../types";
import StarRating from "./StarRating";
import { formatRelativeTime } from "../../lib/formatDate";

interface ReviewCardProps {
  review: Review;
  compact?: boolean;
}

export default function ReviewCard({
  review,
  compact = false,
}: ReviewCardProps) {
  const initials = review.customerName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className={`flex flex-col gap-5 transition-all duration-300 border rounded-lg bg-surface border-border hover:border-accent/50 hover:shadow-md ${
        compact ? "p-4" : "p-6"
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="shrink-0">
          {review.customerAvatar ? (
            <img
              src={review.customerAvatar}
              alt={review.customerName}
              className={`rounded-full object-cover border border-border ${
                compact ? "w-10 h-10" : "w-12 h-12"
              }`}
              loading="lazy"
            />
          ) : (
            <div
              className={`rounded-full flex items-center justify-center font-heading font-bold bg-text text-bg ${
                compact ? "w-10 h-10 text-sm" : "w-12 h-12 text-base"
              }`}
            >
              {initials}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h4
              className={`font-semibold truncate text-text ${compact ? "text-sm" : "text-base"}`}
            >
              {review.customerName}
            </h4>
            {review.isVerified && (
              <svg
                className="w-4 h-4 shrink-0 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            )}
          </div>
          <div className="flex items-center gap-2 mt-1 flex-wrap">
            <StarRating rating={review.rating} size="sm" />
            <span className="text-xs text-border">•</span>
            <span className="text-xs text-text-muted">
              {formatRelativeTime(review.createdAt)}
            </span>
          </div>
        </div>
      </div>

      {/* Comment */}
      <p
        className={`leading-relaxed text-text-muted ${compact ? "text-sm line-clamp-4" : "text-sm md:text-base line-clamp-6"}`}
      >
        {review.comment}
      </p>

      {/* Footer */}
      {review.serviceName && (
        <div className="mt-auto pt-3 border-t border-border-soft">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm text-accent bg-accent/10">
            {review.serviceName}
          </span>
        </div>
      )}
    </article>
  );
}
