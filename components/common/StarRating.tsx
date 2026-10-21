import { FiStar } from "react-icons/fi";

interface StarRatingProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  totalReviews?: number;
  align?: "left" | "center";
}

export default function StarRating({
  rating,
  size = "md",
  showValue = false,
  totalReviews,
  align = "left",
}: StarRatingProps) {
  const clampedRating = Math.max(0, Math.min(5, rating));

  const sizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const textClasses =
    size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

  const getStarType = (index: number): "full" | "half" | "empty" => {
    const filled = clampedRating - index;
    if (filled >= 1) return "full";
    if (filled >= 0.5) return "half";
    return "empty";
  };

  return (
    <div
      className={`flex items-center gap-1 ${align === "center" ? "justify-center" : ""}`}
      aria-label={`Rating: ${clampedRating} out of 5`}
    >
      {[0, 1, 2, 3, 4].map((index) => {
        const type = getStarType(index);
        return (
          <div key={index} className="relative">
            {/* Background (Empty) Star */}
            <FiStar
              className={`${sizeClasses[size]} shrink-0 ${
                type === "empty" ? "text-border" : "text-accent"
              }`}
              fill={type === "full" ? "currentColor" : "none"}
            />
            {/* Half Star Overlay (CSS clipping trick) */}
            {type === "half" && (
              <div className="absolute inset-0 overflow-hidden w-1/2">
                <FiStar
                  className={`${sizeClasses[size]} shrink-0 text-accent`}
                  fill="currentColor"
                />
              </div>
            )}
          </div>
        );
      })}

      {showValue && (
        <span className={`ml-1 font-bold text-section-text ${textClasses}`}>
          {clampedRating.toFixed(1)}
        </span>
      )}

      {totalReviews !== undefined && (
        <span className={`ml-1 text-section-text-muted ${textClasses}`}>
          ({totalReviews})
        </span>
      )}
    </div>
  );
}
