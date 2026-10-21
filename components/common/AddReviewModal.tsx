"use client";

import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { FiX, FiStar, FiCheckCircle } from "react-icons/fi";
import { isReviewModalOpenAtom, reviewsAtom } from "../../store/reviewStore";
import Button from "./Button";

export default function AddReviewModal() {
  const [isOpen, setIsOpen] = useAtom(isReviewModalOpenAtom);
  const [reviews, setReviews] = useAtom(reviewsAtom);

  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError("Please enter a valid name.");
      return;
    }
    if (comment.trim().length < 5) {
      setError("Review must be at least 5 characters.");
      return;
    }
    setError("");

    const newReview = {
      id: `local-${Date.now()}`,
      customerName: name,
      rating: rating,
      comment: comment,
      createdAt: new Date().toISOString(),
      isVerified: false,
      customerAvatar: undefined,
      serviceName: "Walk-in",
    };

    setReviews([newReview, ...reviews]);

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setName("");
      setRating(5);
      setComment("");
      setIsOpen(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-surface border border-white/10 rounded-2xl w-full max-w-md p-6 md:p-8 relative shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {!isSuccess ? (
          <>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center bg-surface-2 text-text-muted hover:text-text hover:bg-white/10 transition-colors"
            >
              <FiX size={18} />
            </button>

            <div className="mb-6">
              <h3 className="font-heading text-2xl font-bold text-text">
                How was your experience?
              </h3>
              <p className="text-xs text-text-muted mt-1">
                Your feedback helps us improve.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ali Ahmed"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-dim outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-1.5 flex flex-col items-center py-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-2">
                  Tap to Rate *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-all duration-200 hover:scale-125 hover:-translate-y-1"
                    >
                      <FiStar
                        size={32}
                        className={`transition-colors duration-200 ${
                          star <= (hoverRating || rating)
                            ? "fill-accent text-accent drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]"
                            : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
                  Your Review *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you loved..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-dim outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-[11px] text-error font-bold text-center bg-error/10 p-2 rounded-md">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                variant="dark"
                size="lg"
                className="w-full mt-2 text-sm uppercase tracking-wider"
              >
                Submit Review
              </Button>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-up">
            <FiCheckCircle
              size={60}
              className="text-success mb-4 animate-bounce"
            />
            <h3 className="font-heading text-2xl font-bold text-text">
              Thank You!
            </h3>
            <p className="text-sm text-text-muted mt-2">
              Your review has been added successfully.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
