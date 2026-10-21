import { Barber } from "../types";

export const mockBarbers: Barber[] = [
  {
    id: "b-1",
    name: "Sufyan Riaz",
    role: "Master Barber",
    avatarUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format",
    experienceYears: 6,
    specialties: ["Precision Haircut", "Beard Crafting", "Keratin Treatment"],
    isAvailable: true,
  },
  {
    id: "b-2",
    name: "Hamza Khan",
    role: "Senior Hair Specialist",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format",
    experienceYears: 4,
    specialties: ["Modern Fade", "Hair Color & Highlights", "Scalp Massage"],
    isAvailable: true,
  },
  {
    id: "b-3",
    name: "Ali Hassan",
    role: "Grooming & Facial Specialist",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format",
    experienceYears: 5,
    specialties: ["Charcoal Facial", "Skin Rejuvenation", "Hot Towel Shave"],
    isAvailable: true,
  },
];
