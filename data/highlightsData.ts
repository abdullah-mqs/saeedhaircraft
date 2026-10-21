import { Highlight } from "../types";

const allHighlights: Highlight[] = [
  {
    id: "h-1",
    title: "Classic Skin Fade",
    category: "Haircut",
    imageUrl:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&auto=format",
    barberId: "b-1",
    isFeatured: true,
  },
  {
    id: "h-2",
    title: "Beard Sculpt & Line",
    category: "Beard",
    imageUrl:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&auto=format",
    barberId: "b-2",
    isFeatured: true,
  },
  {
    id: "h-3",
    title: "Textured Crop",
    category: "Haircut",
    imageUrl:
      "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&auto=format",
    barberId: "b-1",
  },
  {
    id: "h-4",
    title: "Luxury Facial Glow",
    category: "Facial",
    imageUrl:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&auto=format",
    barberId: "b-3",
  },
  {
    id: "h-5",
    title: "Full Grooming Combo",
    category: "Combo",
    imageUrl:
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&auto=format",
    barberId: "b-2",
    isFeatured: true,
  },
  {
    id: "h-6",
    title: "Buzz Cut Refresh",
    category: "Haircut",
    imageUrl:
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format",
    barberId: "b-1",
  },
  {
    id: "h-7",
    title: "Beard Colour Touch-Up",
    category: "Beard",
    imageUrl:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&auto=format",
    barberId: "b-3",
  },
  {
    id: "h-8",
    title: "Royal Transform",
    category: "Transform",
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format",
    barberId: "b-2",
    isFeatured: true,
  },
];

export function getLatestHighlights(count: number): Highlight[] {
  return [...allHighlights]
    .sort((a, b) => b.id.localeCompare(a.id))
    .slice(0, count);
}
