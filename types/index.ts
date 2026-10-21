// ============================================
// Services
// ============================================
export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  durationMinutes: number;
  pricePKR: number;
  popular?: boolean;
}

// ============================================
// Barbers
// ============================================
export interface Barber {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  experienceYears: number;
  specialties: string[];
  isAvailable: boolean;
}

// ============================================
// Highlights (Gallery)
// ============================================
export interface Highlight {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  barberId?: string;
  isFeatured?: boolean;
}

// ============================================
// Reviews
// ============================================
export interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  createdAt: string;
  isVerified: boolean;
  customerAvatar?: string;
  serviceName?: string;
}

// ============================================
// Offers
// ============================================
export interface Offer {
  id: string;
  title: string;
  description: string;
  discountLabel: string;
  promoCode?: string;
  validUntil: string;
}

// ============================================
// Booking
// ============================================
export interface BookingRequest {
  serviceId: string;
  bookingDate: string;
  timeSlot: string;
  customerName: string;
  customerPhone: string;
  customerNotes?: string;
}
