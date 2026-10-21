import { atom } from "jotai";
import { reviewsData } from "../data/reviewsData";
import { Review } from "../types";

// Modal ka open/close state
export const isReviewModalOpenAtom = atom(false);

// Reviews ka global state
export const reviewsAtom = atom<Review[]>(reviewsData);
