import { Review } from "../types";

export const reviewsData: Review[] = [
  {
    id: "r-1",
    customerName: "Ahmed Khan",
    rating: 5,
    comment:
      "Best haircut I have ever had in Lahore. Saeed bhai ne perfect fade banaya, ekdum clean finish. Highly recommended!",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Classic Skin Fade",
  },
  {
    id: "r-2",
    customerName: "Bilal Hussain",
    rating: 5,
    comment:
      "Beard sculpting was on point. Staff ne pura time diya, koi rush nahi tha. Premium experience.",
    createdAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Beard Sculpt & Line",
  },
  {
    id: "r-3",
    customerName: "Usman Ali",
    rating: 4,
    comment:
      "Achi service thi, waiting time thoda zyada tha lekin haircut ne compensate kar diya. Will come back.",
    createdAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Textured Crop",
  },
  {
    id: "r-4",
    customerName: "Zainab Fatima",
    rating: 5,
    comment:
      "Took my brother for his wedding prep. The royal charcoal facial made his skin glow. Excellent service!",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Royal Charcoal Facial",
  },
  {
    id: "r-5",
    customerName: "Omar Farooq",
    rating: 5,
    comment:
      "Very professional environment. The barbers know exactly what they are doing. 10/10 for the vibe.",
    createdAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Executive Pompadour",
  },
  {
    id: "r-6",
    customerName: "Hassan Raza",
    rating: 4,
    comment:
      "Good hygiene and great styling. Slightly on the expensive side but you pay for quality.",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    isVerified: true,
    serviceName: "Full Grooming Combo",
  },
];

export function getLatestReviews(count: number): Review[] {
  return [...reviewsData]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, count);
}

export function getAverageRating(): number {
  if (reviewsData.length === 0) return 0;
  const sum = reviewsData.reduce((acc, r) => acc + r.rating, 0);
  return sum / reviewsData.length;
}

export function getTotalReviewCount(): number {
  return reviewsData.length;
}

export function getRatingBreakdown(): Record<number, number> {
  const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviewsData.forEach((r) => {
    if (counts[r.rating] !== undefined) counts[r.rating]++;
  });
  return counts;
}
