// ============================================
// Date Formatting Utilities
// ============================================

/**
 * Relative time format (e.g., "5 days ago", "Just now")
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Full date format (e.g., "Monday, 21 October 2026")
 */
export function formatFullDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Short date format (e.g., "Mon, 21 Oct")
 */
export function formatShortDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

/**
 * Days left format (e.g., "3 days left", "1 day left")
 */
export function formatDaysLeft(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.ceil(
    (date.getTime() - now.getTime()) / (1000 * 3600 * 24),
  );

  if (diffInDays <= 0) return "Expired";
  if (diffInDays === 1) return "1 day left";
  return `${diffInDays} days left`;
}

/**
 * Time format (e.g., "02:00 PM")
 */
export function formatTime(timeString: string): string {
  // Agar already formatted hai (jaise "02:00 PM"), toh as is return karo
  if (timeString.includes("AM") || timeString.includes("PM")) {
    return timeString;
  }

  // Agar 24-hour format hai, toh convert karo
  const [hours, minutes] = timeString.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 || 12;

  return `${String(displayHour).padStart(2, "0")}:${minutes} ${ampm}`;
}
