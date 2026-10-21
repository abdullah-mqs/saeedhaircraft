import { Offer } from "../types";

const allOffers: Offer[] = [
  {
    id: "o-1",
    title: "Weekend Special Discount",
    description:
      "Get flat 20% off on all premium haircuts. Valid only on Saturdays and Sundays.",
    discountLabel: "20% OFF",
    promoCode: "WEEKEND20",
    validUntil: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "o-2",
    title: "Grooming Combo Deal",
    description:
      "Book a Full Grooming Combo and get a free luxury facial upgrade.",
    discountLabel: "FREE UPGRADE",
    promoCode: "COMBOFREE",
    validUntil: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "o-3",
    title: "First Time Client Offer",
    description:
      "New to Saeed Hair Craft? Enjoy 15% off on your very first booking.",
    discountLabel: "15% OFF",
    promoCode: "WELCOME15",
    validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "o-4",
    title: "Flash Sale",
    description:
      "Hurry! Flat 30% off on all beard styling services. Today only.",
    discountLabel: "30% OFF",
    promoCode: "FLASH30",
    validUntil: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export function getActiveOffersLimited(count: number): Offer[] {
  const now = new Date();
  return allOffers.filter((o) => new Date(o.validUntil) > now).slice(0, count);
}

export function getOfferDiscountLabel(offer: Offer): string {
  return offer.discountLabel;
}

export function getDaysRemaining(validUntil: string): number {
  const now = new Date();
  const diff = new Date(validUntil).getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
